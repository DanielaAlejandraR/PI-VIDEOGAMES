import React from 'react';
import { useParams } from "react-router-dom";//obtener parámetros de la URL (ID)
import { useState, useEffect } from "react";//manejar el estado local
import axios from 'axios';
import noImage from "../../assets/noImage.png";//PARA CUANDO JUEGO NO TENGA IMAGEN DEFINIDA

import styles from "./Detail.module.css";

const Detail = () => {
    const { id } = useParams();

    const [vgDetail, setVgDetail] = useState({});//CREA ESTADO LOCAL vgDetail para almacenar detalles de VG
    
    useEffect(() => {
        const API_URL = `/videogames/${id}`;
        axios.get(API_URL)
            .then(response => setVgDetail(response.data))
            
    }, [id]);

    const { name, description, platforms, image, released, rating, genres = []} = vgDetail;
    //extraigo propiedades especificas del objeto 
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.name}>{name || "No name provided"}</h1>

            <hr className={styles.line}/>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: description || "No description provided" }} />
            
            <div className={styles.imageAndDataContainer}>
                <img className={styles.image} src={image || noImage} alt="Videogame" />

            <div className={styles.dataContainer}>
                <p className={styles.data}>{` Id: ${id}`}</p>

                <p className={styles.data}> Rating:{" "}{rating !== undefined ? rating : "No rating provided"}</p>

                <p className={styles.data}>  released:{" "}{ released ?  released : "No date provided"}</p>

                <p className={styles.data}> Genres:{" "}
                        {genres.map((genreObj, index) => (
                            <span key={index}>{genreObj.name}{index === genres.length - 1 ? "" : " | "}</span>
                        ))}
                    </p>
                    <p className={styles.data}> Platforms:{" "}
                        {!platforms?.length //si el array platforms está vacío o no.
                        ? <span>No platforms provided</span>// si esta vacio muestro texto
                        : platforms.map((plaftorm, index) => {// si no esta vacio recorro con map cada elemento del array 
                    return(
                        platforms.length - 1 === index //Compara si el índice actual es igual al último índice del array
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

