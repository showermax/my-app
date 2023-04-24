import {useRef, useState} from "react";

export default {
    title: 'Input',
}

export const UncontrolledInput = () => <input/>
export const InputWithUseRef = () => {
    const [value,setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onclickHandler =()=>{
        setValue(inputRef.current!.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={onclickHandler}>the value of the input: </button> {value}
    </>
}

export const ControlledInput = () => {
    const [storeValue, setValueInStore]=useState('')
    return <input value={storeValue} onChange={(e)=> setValueInStore(e.currentTarget.value)} />
}