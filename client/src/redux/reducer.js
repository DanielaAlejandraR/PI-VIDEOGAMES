import { GET_VIDEOGAMES, UPDATE_PAGE_NUMBER, SEARCH_BY_NAME} from "./actions"

/// RESET_FILTERS, FILTER_BY_CREATOR, FILTER_BY_GENRE, SORT_BY_ALPHABET, SORT_BY_RATING
const initialState = {VideoGames: [], currentVg: [], currentPageNumber: 1, };

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_VIDEOGAMES:
            const VideoGames = action.payload;
            return{
                ...state,
                VideoGames: [...VideoGames],
                currentVg: [...VideoGames],
                // filteredByCreator: [...VideoGames],
                // filteredByGenre: [...VideoGames],
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
    
            // case RESET_FILTERS: {
            //     const currentVg = state.allVg;
            //     return {
            //         ...state,
            //         currentVg
            //     };
            // };
    
            // case FILTER_BY_CREATOR: {
            //     const creator = action.payload;
    
            //     let filteredByCreator;
    
            //     if (creator === 'all') {
            //         filteredByCreator = [...state.allVg];
            //     } else if (creator === 'db') {
            //         filteredByCreator = [...state.allVg].filter(vg => {
            //             return isNaN(vg.id)
            //         })
            //     } else if (creator === 'api') {
            //         filteredByCreator = [...state.allVg].filter(vg => {
            //             return !isNaN(vg.id)
            //         })
            //     };
    
            //     let currentVg = [...filteredByCreator].filter(vg => {
            //         return state.filteredByGenre.includes(vg)
            //     });
    
            //     if (!currentVg.length) {
            //         currentVg = "No videogames were found with the provided filters."
            //     };
    
            //     return {
            //         ...state,
            //         filteredByCreator: filteredByCreator,
            //         currentVg: currentVg        
            //     };
            // };
    
    
            // case FILTER_BY_GENRE: {
            //     const genre = action.payload;
    
            //     let filteredByGenre;
    
            //     if (genre === 'allGenres') {
            //         filteredByGenre = [...state.allVg];
            //     } else {
            //         filteredByGenre = [...state.allVg].filter(vg => {
            //             return vg.genres.includes(genre);
            //         })
            //     }; 
    
            //     let currentVg = [...filteredByGenre].filter(vg => {
            //         return state.filteredByCreator.includes(vg)
            //     });
    
            //     if (!currentVg.length) {
            //         currentVg = "No videogames were found with the provided filters."
            //     };
    
            //     return {
            //         ...state,
            //         filteredByGenre: filteredByGenre,
            //         currentVg: currentVg        
            //     };
            // };
    
    
    
    
            // case SORT_BY_ALPHABET: {
            //     const order = action.payload;       // 'a_z' or 'z_a'
            //     const compareFunction = ((a, b) => {
            //         const nameA = a.name.toUpperCase();
            //         const nameB = b.name.toUpperCase();
            //         if (nameA < nameB) return -1;
            //         if (nameA > nameB) return 1;
            //         return 0;
            //     });
    
            //     // sort changes the array in place. Then we make a copy of state.currentVg
            //     const sortedAz = [...state.currentVg].sort(compareFunction);
            //     const sortedVg = order === 'a_z' ? sortedAz : [...sortedAz].reverse();
    
            //     return {
            //         ...state,
            //         currentVg: sortedVg
            //     };
            // };
    
    
            // case SORT_BY_RATING: {
            //     const order = action.payload;       // 'ratingAsc' or 'ratingDesc'
            //     const compareFunction = ((a, b) => {
            //         return a.rating - b.rating;
            //     });
    
            //     const sortedAsc = [...state.currentVg].sort(compareFunction);
            //     const sortedVg = order === 'ratingAsc' ? sortedAsc : [...sortedAsc].reverse();
    
            //     return {
            //         ...state,
            //         currentVg: sortedVg
            //     };
            // };
    
                // return {
                //     ...state,
                //     allVg,
                //     filteredByCreator: allVg,
                //     filteredByGenre: allVg,
                //     currentVg: allVg
                // };
            // };
    

        default:
            return { ...state};
    };
};

export default rootReducer