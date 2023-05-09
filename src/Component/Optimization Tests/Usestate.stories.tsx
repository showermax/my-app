import {useRef, useState} from "react";

export default {
    title: 'Demo Usestate',
}

export const UseStateTest = () => {
    const [c,setC]=useState(0)
    return <>

        <button onClick={()=>setC(c+1)}>the value of the counter: </button>
        <span>{c}</span>
    </>
}
