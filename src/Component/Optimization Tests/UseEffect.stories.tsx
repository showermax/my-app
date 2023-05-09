import {useEffect, useMemo, useRef, useState} from "react";

export default {
    title: 'Demo UseEffect',
}


export const UseEffectTest
    = () => {
    const [q, setQ] = useState(10)
    const [c,setC]  = useState(1)

    useEffect(()=>{
        console.log('Always after updating')
        document.title = 'Always after updating'
    })
    useEffect(()=>{
        console.log('Every time state was changed')
        document.title = 'Every time state was changed'
    },[c])
    useEffect(()=>{
        console.log('One time after mounting')
        document.title = 'One time after mounting'
    },[])
    return <>
        <button onClick={()=>setC((state:number)=>state+1)}> increase </button>
        <span>{c}</span>
    </>
}
