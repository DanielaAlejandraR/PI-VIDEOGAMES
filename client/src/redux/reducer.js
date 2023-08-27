import { GET_VIDEOGAMES } from "./actions"

const initialState = {VideoGames: [], };

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_VIDEOGAMES:
            const VideoGames = action.payload;
            return{
                ...state,
                VideoGames: [...VideoGames],
            }
        default:
            return { ...state};
    };
};

export default rootReducer