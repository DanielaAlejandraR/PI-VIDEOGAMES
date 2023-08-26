import { GET_USERS } from "../actions"

let initialState = {allUsers: []}

function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                allUsers: action.payload
            }
        default:
            return state
    }
}

export default rootReducer