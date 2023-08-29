import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";//para conectarse a redux y realizar acciones
import { getGenres } from "../../redux/actions";
import { updateWithNewVg } from "../../redux/actions";//actualizar estado con nuevo videojuego
import validationFunctions, { validateGenres, validateSubmit } from "./validateFunction";
import axios from "axios";

import styles from "./Create.module.css";


const Create = () => {

    const dispatch = useDispatch();//hook para enviar acciones al alm redux

    const allGenres = useSelector(state => state.genres);//obtener el estado de genres desde el almacenamiento de Redux.

    const emptyVg = {name: '', description: '', platforms: [], image: '', released: '', rating: '',  genres: []};//plantilla inicial datos 
    const emptyErrors = {name: '', description: '',platforms: '', image: '', releaseDate: '', rating: '',  genres:''};

    const emptyArray = [];
    //useState para definir los estados iniciales
    const [ newVg, setNewVg ] = useState(emptyVg);//almacena los datos del formulario
    const [ errors, setErrors ] = useState(emptyErrors);
    const [ genresBoxes, setGenresBoxes ] = useState(emptyArray);// almacena el estado de las casillas de género, inicializado con el array vacío

    const platformOptions = [
        "Microsoft Windows",
        "Linux",
        "macOS",
        "PlayStation 5",
        "PlayStation 4",
        "PlayStation 3",
        "PlayStation 2",
        "Xbox 360",
        "Xbox Series S/X",
        "Xbox One",
        "Nintendo Switch",
        "Android",
        "iOS",
        "SteamOS"
    ];

    useEffect(() => {//si allGenres esta vacio se obtiene los generos utilizando getGenres
        if (!allGenres.length) {
            dispatch(getGenres());//obtiene generos de VG de back
        } 
    }, [dispatch, allGenres]);


    useEffect(() => {// si allGneres no está vacio se crea un array emptyGenresBoxes
        if (allGenres.length) {
            const emptyGenresBoxes = allGenres.map(genre => false);
            setGenresBoxes(emptyGenresBoxes);
        }
    }, [allGenres]);

        // *** HANDLECHANGE ***
        const handleChange = (event) => {
            const { value } = event.target; 
            const property = event.target.name;
            setNewVg({...newVg, [property]: value}); 
            const errorMessage = validationFunctions[property](value);
            setErrors({...errors, [property]: errorMessage});
        };
    
        //HANDLEPLATFORM
        const handlePlatforms = (event) => {
            const platformName = event.target.value; 
            const isChecked = event.target.checked;
        
            const platforms = isChecked
                ? [...newVg.platforms, platformName] // Agregar la plataforma si está marcada
                : newVg.platforms.filter(platform => platform !== platformName); // Quitar la plataforma si está desmarcada
        
            setNewVg({ ...newVg, platforms });
        
            const errorMessage = validationFunctions[event.target.name](platforms);
            setErrors({ ...errors, [event.target.name]: errorMessage });
        };
// GENRES
    const handleGenresChange = (event) => {
        const index = event.target.id; 
        const genreName = event.target.name;

        const oldValue = genresBoxes[index];//valor previo almacenamos el old
        const genres = !oldValue //creo creo nuevo arreglo genres, si old value es falso       
            ? [...newVg.genres, genreName] //agrego genreName a arreglo
            : [...newVg.genres.filter(genre => genre !== genreName)];//oldValue esta marcado se crea nuevo arreglo excluyendo genreName

        setNewVg({...newVg, genres});//actualizo estado con actaulización de arreglo genres
        const errorMessage = validateGenres(genres);
        setErrors({...errors, genres: errorMessage});

        const updatedGenresBoxes = [...genresBoxes];
        updatedGenresBoxes[index] = !oldValue;//si esta marcado se desmarca y viceversa
        setGenresBoxes(updatedGenresBoxes);
    };

    // *** SUBMIT ***
    const handleSubmit = (event) => {//Presentación de formulario, activa cuando se envie formulario
        event.preventDefault();//evitar que pagina se recargue
        const errorMessage = validateSubmit(newVg, errors); //llamo a función validateSubmit
        if (errorMessage) {//si hay algun mensaje de error muestro alerta
            window.alert(errorMessage);  
        } else {//si no hay mensaje seguimos flujo

            const newVgToSubmit = {...newVg, image: newVg.image}; 
            const API_URL = "/videogames"; 
            axios
                .post(API_URL, newVgToSubmit)//newVgTo submit tiene datos de form
                .then((response) => {
                    const newVgWithId = {id: response.data.id, ...newVgToSubmit};
                    dispatch(updateWithNewVg(newVgWithId));//actualiza estado de app con nuevo VG
                    window.alert("Videogame added to the Database");
                    setNewVg(emptyVg);
                    const emptyGenresBoxes = allGenres.map(genre => false);
                    setGenresBoxes(emptyGenresBoxes);
                })
                .catch((error) => {console.log(error)})
        };
    };


    // *** RESET ***
    const handleReset = (event) => {
        setNewVg(emptyVg);
        setErrors(emptyErrors);
        const emptyGenresBoxes = allGenres.map(genre => false);
        setGenresBoxes(emptyGenresBoxes);

    };

    return (
        !allGenres.length ? <p>Loading...</p>
        : <div className={styles.mainContainer}>

            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <div className={styles.nameAndReleasedAndRatingContainer}>

                    <label className={styles.label}>NAME {' '} 
                        <input className={`${styles.input} ${styles.nameInput}`}
                            name="name"
                            value={newVg.name}
                            onChange={handleChange}
                            placeholder='VidegoGame Name...'
                            autoFocus={true}
                        />
                        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                    </label>

                    <label className={styles.label}>RELEASED {' '} 
                        <input className={`${styles.input} ${styles.dateInput}`}
                            type="date" 
                            name="released"
                            value={newVg.released}
                            onChange={handleChange}
                            max="9999-12-31"
                        />
                        {errors.released && <p className={styles.errorMessage}>{errors.released}</p>}
                    </label>

                    <label className={styles.label}>RATING {' '} 
                        <input className={`${styles.input} ${styles.ratingInput}`}
                            type="number"
                            name="rating"
                            value={newVg.rating}
                            onChange={handleChange}
                            placeholder='1.00-5.00'
                            step="0.1"
                        />
                        {errors.rating && <p className={styles.errorMessage}>{errors.rating}</p>}
                    </label>
                </div>

                <label className={styles.label}>IMAGE {' '} 
                    <textarea className={styles.input}
                        name="image"
                        value={newVg.image}
                        onChange={handleChange}
                        placeholder='https://...'
                    />
                    {errors.image && <p className={styles.errorMessage}>{errors.image}</p>}
                </label>

                <label className={styles.label}>DESCRIPTION {' '} 
                    <textarea className={styles.input}
                        name="description"
                        value={newVg.description}
                        onChange={handleChange}
                        placeholder='Max 1000 characters'
                    />
                    {errors.description && <p className={styles.errorMessage}>{errors.description}</p>}
                </label>

                {/* PLATFORMS */}
                <div className={styles.platformsContainer}>
                <p>PLATFORMS</p>
                <div className={styles.checkboxList}>
                    {platformOptions.map((platform, index) => (
                        <label key={index} className={styles.checkboxLabel}>
                            <input
                                className={styles.checkboxInput}
                                type="checkbox"
                                name="platforms"
                                checked={newVg.platforms.includes(platform)}
                                onChange={handlePlatforms}
                                value={platform}
                            />
                            {platform}
                        </label>
                    ))}
                </div>
                {errors.platforms && <p className={styles.errorMessage}>{errors.platforms}</p>}
            </div>


                {/* GENRES */}
                <label className={styles.label}>GENRES {' '}
                    <div className={styles.checkboxContainer}>
                        <div className={styles.checkboxSubcontainer}>
                            {allGenres.map((genre, index) => {
                                return (
                                    <label className={styles.genreLabel} key={index}>
                                        {genre}
                                        <input className={styles.genreInput}
                                            type="checkbox"
                                            id={index}
                                            name={genre}
                                            checked={genresBoxes[index] || false} 
                                            onChange={handleGenresChange}
                                            >
                                        </input>
                                    </label>
                                )
                            })}
                        </div>
                        {errors.genres && <p className={styles.errorMessage}>{errors.genres}</p>}
                    </div>
                </label>

                <div className={styles.buttonsContainer}>
                    <button type="submit" className={styles.submitButton}>Create</button>
                    <button className={styles.resetButton} type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Create; 