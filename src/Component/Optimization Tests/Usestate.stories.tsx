import {useRef, useState} from "react";

export default {
    title: 'Demo Usestate',
}

export const UseStateTest = () => {
    const [c,setC]=useState(0)
    return <>

        <button onClick={()=>setC(c+1)}> increase </button>

        <span>{c}</span>
    </>
}
