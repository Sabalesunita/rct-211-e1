//Create ActionCreator functions here
import axios from "axios"
import * as types from "./actionTypes"

export const getShoesRequest=()=>{
   return {
        type:types.GET_SHOES_REQUEST
    }
}
export const getShoesSuccess=(payload)=>{
   return {
        type:types.GET_SHOES_SUCCESS,
        payload
    }
}
export const getShoesFailure=()=>{
   return {type:types.GET_SHOES_FAILURE}
}
export const fetchShoeData=(dispatch)=>{
    dispatch(getShoesRequest())

    axios.get("http://localhost:8080/shoes").then((res)=>{
      
        dispatch(getShoesSuccess(res.data))
    }).catch((err)=>{
       
        dispatch(getShoesFailure())
     
    })
}