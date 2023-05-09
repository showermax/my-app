import {useMemo, useRef, useState} from "react";

export default {
    title: 'Demo Usestate',
}

function VeryHeavyCalc (){
    let k=0
    while(k<1000000000) k++
    return 10
}
export const UseStateTest = () => {
    const init = useMemo(VeryHeavyCalc,[])
    const [c,setC]=useState(init)

    return <>

        <button onClick={()=>setC(c+1)}> increase </button>

        <span>{c}</span>
    </>
}
