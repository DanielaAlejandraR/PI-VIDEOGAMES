import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import Error404  from "../Error404/Error404";
import Loading from "../../components/Loading/Loading";
import noImage from "../../assets/noImage.png";


const Detail = () => {
    const { id } = useParams();

    const [ vgDetail, setVgDetail ] = useState({});     // {} instead of null to validate object properties
    const [ errorState, setErrorState ] = useState('');

    useEffect(() => {
        const API_URL = `/videogames/${id}`;   
        axios.get(API_URL)
            .then(response => response.data)
            .then(data => {
                setVgDetail(data); 
            })
            .catch(error => {
                setErrorState(error.code); 
            });

        return () => {
            setVgDetail({});
            setErrorState('');
        }
    }, [id]);

    const { name, background_image, platforms, released, rating, genres, description } = vgDetail;

    return (
        errorState 
            ? errorState === 'ERR_BAD_REQUEST' 
                ? <Error404 />
                : <div>Error 503. Not connected to server.</div>
            : !Object.keys(vgDetail).length  
                ? <Loading />
                /* MAIN CONTAINER */
                : <div className={styles.mainContainer}>

                    {/* NAME */}
                    {!name 
                        ? <h1 className={styles.name}>No name provided</h1>
                        : <h1 className={styles.name}>{name}</h1>
                    }

                    <hr className={styles.line}/>

                    {/* DESCRIPTION */}
                    {!description 
                        ? <div className={styles.description}>No description provided</div>
                        : <div
                            className={styles.description} 
                            dangerouslySetInnerHTML={{__html: description}}
                            >
                        </div>
                    }


                    {/* IMAGE AND DATA CONTAINER */}
                    <div className={styles.imageAndDataContainer}>
                        {/* IMAGE */}
                        <img 
                            className={styles.image} 
                            src={background_image ? background_image : noImage} 
                            alt="Videogame" 
                        />

                        {/* DATA CONTAINER */}
                        <div className={styles.dataContainer}> 
                            {/* ID */}
                            <p className={styles.data}>{` Id: ${id}`}</p>
    
                            {/* RATING */}
                            <p className={styles.data}> Rating:{" "} 
                                {rating === undefined 
                                    ? <span>No rating provided</span>
                                    : <span>{rating}</span>
                                }
                            </p> 
    
                            {/* RELEASED */}
                            <p className={styles.data}> Released:{" "} 
                                {!released 
                                    ? <span>No date released provided</span>
                                    : <span>{released}</span>
                                }
                            </p> 
    
                            {/* GENRES */}
                            <p className={styles.data}> Genres:{" "}
                                {!genres?.length
                                    ? <span>No genres provided</span>
                                    : genres.map((genre, index) => {
                                        return(
                                            genres.length - 1 === index 
                                                ? <span key={index}>{genre}</span>
                                                : <span key={index}>{`${genre} | `}</span>
                                        ) 
                                    })
                                }
                            </p>
    
                          {/* PLATFORMS */}
                            <p className={styles.data}>Platforms:{" "}
                                {!platforms?.length
                                    ? <span>No platforms provided</span>
                                    : platforms.map((plaftorm, index) => {
                                        return(
                                            platforms.length - 1 === index 
                                                ? <span key={index}>{plaftorm}</span>
                                                : <span key={index}>{`${plaftorm} | `}</span>
                                        ) 
                                    })
                                }
                            </p>
                        </div>
                    </div>
    
                </div>
    );
};

export default Detail; 