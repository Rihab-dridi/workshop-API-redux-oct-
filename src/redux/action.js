import { FETCH } from "./action-types"


export const FETCHHandler=(moviesList)=>{
    return{
        type:FETCH, 
        payload:moviesList
    }
}