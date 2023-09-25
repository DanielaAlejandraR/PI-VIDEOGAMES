import axios from "axios";
import { GET_VIDEOGAMES, UPDATE_PAGE_NUMBER, SEARCH_BY_NAME, FILTER_BY_GENRE,  GET_GENRES, GET_DETAIL, UPDATE_VG, FILTER_BY_CREATOR, RESET_FILTERS, SORT_BY_ALPHABET, SORT_BY_RATING } from "./actions-types"; 


export const getVideoGames = () => {
    const API_URL = '/videogames'; 
    return async (dispatch) => {
    try{
        const response = await axios.get(API_URL);
        const VideoGames = response.data;
    dispatch({//Dispara la acción con el tipo y envía VideoGames como carga útil para actualizar el estado con la lista de videojuegos obtenida.
        type: GET_VIDEOGAMES,
        payload: VideoGames
});
    }catch(error){
        alert(error.message);
    }
}}

export const getGenres = () => {
    return async (dispatch) => {
        const API_URL = '/genres'; 
        const response = await axios.get(API_URL);
        const genres = response.data;
        dispatch({
            type: GET_GENRES,
            payload: genres
        });
    };
};

export const updatePageNumber = (page) => {
    return {
        type: UPDATE_PAGE_NUMBER,
        payload: page
    };
};

export const searchByName = (vgName) => {
    const API_URL = `/videogames?name=${vgName}`; 
    return async (dispatch) => {
        try{
            const response = await axios.get(API_URL);
            const vgByName = response.data;
            dispatch({
                type: SEARCH_BY_NAME,
                payload: vgByName//carga útil para actualizar el estado con los videojuegos coincidentes.
            });
        } catch (error) {
            alert("No se encontraron coincidencias.");
        }
    };
}

export const filterByGenre = (genres) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genres
    };
};


export const filterByCreator = (creator) => {
    return {
        type: FILTER_BY_CREATOR,
        payload: creator
    };
};

export const getDetail = (id) => {
    const API_URL = `/videogames/${id}`;
    return async (dispatch) => {
        const response = await axios.get(API_URL);
        const vgById = response.data;
        dispatch({
                type: GET_DETAIL,
                payload: vgById
            })
    }
}

export const updateWithNewVg = (newVg) => {
    return {
        type: UPDATE_VG,
        payload: newVg
    }
}

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    };
};

export const sortByAlphabet = (order) => {
    return {
        type: SORT_BY_ALPHABET,
        payload: order
    };
};

export const sortByRating = (order) => {
    return {
        type: SORT_BY_RATING,
        payload: order
    };
};