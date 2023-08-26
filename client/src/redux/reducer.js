import { GET_ALL_VIDEOGAMES } from "./actions"

let initialState = {allVg: []}

const rootReducer = (state = initialState,action) => {
    switch(action.type){

        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                allVg: action.payload
            }
        default:
            return state
    }
}

export default rootReducer