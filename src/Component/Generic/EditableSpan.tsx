import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpanPropsType = {
    content:string
    changeSpan: (content:string)=>void
}
export const EditableSpan = (props:EditableSpanPropsType) => {

    const [edit, setEdit] = useState(false)
    const [inputValue, setInputValue] = useState(props.content)
    const [previousContent, setPreviousContent] = useState(inputValue)

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const AcceptChangesHandler = () => {
        setEdit(false)
        props.changeSpan(inputValue)
        if (!inputValue) props.changeSpan(previousContent)
    }
    const AcceptChangesByEnterHandler = (key: KeyboardEvent<HTMLInputElement>) => {
        if (key.key === "Enter") {
            setEdit(false)
            props.changeSpan(inputValue)
        }
    }
    const SpanClickHandler = () => {
        setEdit(true)
        setPreviousContent(inputValue)
    }
    return (
        <>
            {edit ?
                <input value={inputValue} onChange={inputChangeHandler} onBlur={AcceptChangesHandler}
                       onKeyDown={AcceptChangesByEnterHandler} autoFocus/>
                :
                <span onDoubleClick={SpanClickHandler}>{props.content}</span>
            }

        </>
    )
};
