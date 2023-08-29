import { GET_VIDEOGAMES, UPDATE_PAGE_NUMBER, SEARCH_BY_NAME, GET_GENRES, FILTER_BY_GENRE,  UPDATE_VG, FILTER_BY_CREATOR, RESET_FILTERS} from "./actions"

/// RESET_FILTERS, SORT_BY_ALPHABET, SORT_BY_RATING

const initialState = {VideoGames: [], currentVg: [], currentPageNumber: 1, filteredByGenre: [], genres: [], filteredByCreator: [], };

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_VIDEOGAMES:
            const VideoGames = action.payload;
            return{
                ...state,
                VideoGames: [...VideoGames],
                currentVg: [...VideoGames],
                filteredByCreator: [...VideoGames],
                filteredByGenre: [...VideoGames],
            }

            case UPDATE_PAGE_NUMBER: {
                const currentPageNumber = action.payload;
                return {
                    ...state,
                    currentPageNumber
                };
            };
    
            case SEARCH_BY_NAME: {
                const filteredByName = action.payload;
                return {
                    ...state,
                    currentVg: filteredByName
                };//actualizo estado
            };

            case GET_GENRES: {
                const genres = action.payload;
                return {
                    ...state,
                    genres
                };
            };
            
            case FILTER_BY_GENRE: {
                const genre = action.payload;
    
                let filteredByGenre;
    
                if (genre === 'allGenres') {
                    filteredByGenre = [...state.VideoGames];
                } else {
                    filteredByGenre = [...state.VideoGames].filter(vg => {
                        return vg.genres.includes(genre);
                    })
                }; 
                return {
                    ...state,
                    filteredByGenre: filteredByGenre,
                    currentVg: filteredByGenre       
                };
            };

            case UPDATE_VG: {
                const newVg = action.payload;
                const allVg = [newVg, ...state.allVg];
    
                return {
                    ...state,
                    allVg,
                    filteredByCreator: allVg,
                    filteredByGenre: allVg,
                    currentVg: allVg
                };
            };
            case FILTER_BY_CREATOR: {
                const creator = action.payload;
    
                let filteredByCreator;
    
                if (creator === 'all') {
                    filteredByCreator = [...state.allVg];
                } else if (creator === 'db') {
                    filteredByCreator = [...state.allVg].filter(vg => {
                        return isNaN(vg.id)
                    })
                } else if (creator === 'api') {
                    filteredByCreator = [...state.allVg].filter(vg => {
                        return !isNaN(vg.id)
                    })
                };
    
                let currentVg = [...filteredByCreator].filter(vg => {
                    return state.filteredByGenre.includes(vg)
                });
    
                if (!currentVg.length) {
                    currentVg = "No videogames were found with the provided filters."
                };
    
                return {
                    ...state,
                    filteredByCreator: filteredByCreator,
                    currentVg: currentVg        
                };
            };

            case RESET_FILTERS: {
                const currentVg = state.allVg;
                return {
                    ...state,
                    currentVg
                };
            };
        default:
            return { ...state};
    };
};

export default rootReducer

