import { FETCH } from "./action-types"


const initialState={
    movies:[]
}

export const movieReducer=(state=initialState, {type, payload})=>{
switch (type) {
            case FETCH: return{
                ...state, movies:payload
            }
  
    default:return state 

}
}