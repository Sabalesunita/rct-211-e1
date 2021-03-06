import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoeData} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";


const Shoes = () => {
  const data=useSelector((state)=>state.shoes)
  const isloading=useSelector((state)=>state.isloading)
  const isError=useSelector((state)=>state.isError)
  const dispatch=useDispatch()

  useEffect(() => {
  fetchShoeData(dispatch)
  },[])

 if(isloading){
  return <h1>Please Wait...</h1>
 }
 if(isError){
  return <h1>Something went wrong, please try again</h1>
 }
  return <div className="container">
     {data?.map((el)=>(
      <ShoeCard key={el.id} {...el}/>
  ))}
  </div>;
};

export default Shoes;
