import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SlideTop=()=>{
const url=useLocation()

useEffect(()=>{
    window.scrollTo({top:'0'})
},[url.pathname])

    return null;
}