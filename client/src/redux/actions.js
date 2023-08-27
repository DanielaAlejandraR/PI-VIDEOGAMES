import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export const getVideoGames = () => {
    const API_URL = '/videogames'; 
    return async (dispatch) => {
        const response = await axios.get(API_URL);
        const VideoGames = response.data;
    dispatch({//Para enviar acción a REDUX
    type:"GET_VIDEOGAMES",
    payload: VideoGames// VG obtenidos de la API
})
}}

//el estado de Redux se actualiZA con la lista de videojuegos obtenida de la API.