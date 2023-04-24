import {ChangeEvent, KeyboardEvent, useState} from "react";

const meta = {
    title: 'EditableSpan'
}
export default meta
export const EditableSpan = () => {

    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('Here is your editablespan')
    const [previousContent, setPreviousContent] = useState(content)

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value)
    }
    const AcceptChangesHandler = () => {
        setEdit(false)
        if (!content) setContent(previousContent)
    }
    const AcceptChangesByEnterHandler = (key: KeyboardEvent<HTMLInputElement>) => {
        if (key.key === "Enter") setEdit(false)
    }
    const SpanClickHandler = () => {
        setEdit(true)
        setPreviousContent(content)
    }
    return (
        <>
            {edit ?
                <input value={content} onChange={inputChangeHandler} onBlur={AcceptChangesHandler}
                       onKeyDown={AcceptChangesByEnterHandler} autoFocus/>
                :
                <span onDoubleClick={SpanClickHandler}>{content}</span>
            }

        </>
    )
}