import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const GET_GENRES = "GET_GENRES";
export const UPDATE_VG  = "UPDATE_VG ";
export const FILTER_BY_CREATOR  = "FILTER_BY_CREATOR ";
export const RESET_FILTERS  = "RESET_FILTERS";


export const getVideoGames = () => {
    const API_URL = '/videogames'; 
    return async (dispatch) => {
        const response = await axios.get(API_URL);
        const VideoGames = response.data;
    dispatch({//Para enviar acción a REDUX
    type:"GET_VIDEOGAMES",
    payload: VideoGames// VG obtenidos de la API
})
}}//el estado de Redux se actualiZA con la lista de videojuegos obtenida de la API.

export const updatePageNumber = (page) => {
    return {
        type: "UPDATE_PAGE_NUMBER",
        payload: page
    };
};

export const searchByName = (vgName) => {//Defino acción 
    const API_URL = `/videogames?name=${vgName}`; 

    return async (dispatch) => {
            const response = await axios.get(API_URL);
            const vgByName = response.data;
            dispatch({//función asincrona para enviar acciones al store y actualizar estado
                type: "SEARCH_BY_NAME",
                payload: vgByName//contiene datos de videojuego
            });
    };
};

export const getGenres = () => {
    return async (dispatch) => {
        const API_URL = '/genres'; 
        const response = await axios.get(API_URL);
        const genres = response.data;
        dispatch({
            type: "GET_GENRES",
            payload: genres
        });
    };
};

export const filterByGenre = (genres) => {
    return {
        type: "FILTER_BY_GENRE",
        payload: genres
    };
};

export const updateWithNewVg = (newVg) => {
    return {
        type: "UPDATE_VG",
        payload: newVg
    }
}

export const filterByCreator = (creator) => {
    return {
        type: "FILTER_BY_CREATOR",
        payload: creator
    };
};

export const resetFilters = () => {
    return {
        type: "RESET_FILTERS",
    };
};
