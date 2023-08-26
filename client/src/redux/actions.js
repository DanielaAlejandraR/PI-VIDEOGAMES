import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";

export function getAllVideoGames(){
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/videogames");
return dispatch({
    type:"GET_ALL_VIDEOGAMES",
    payload:response.data
})
}}
