import {EditableSpan} from "../Generic/EditableSpan";
import React from "react";
import {useAppSelector} from "../../Redux/Hooks/hooks";
import {useDispatch} from 'react-redux'
import {changeNameAC, changeStatusAC} from "../../Reducers/UsersReducer";
import {MySelect} from "../Generic/MySelect";

export const AccordionBody = () => {
    const users = useAppSelector(state => state.users)
    const dispatch = useDispatch()
    const changeSpan = (id: number, content: string) => {
        dispatch(changeNameAC(id, content))
    }
    const toSelect =(id: number, status: string)=>{
        dispatch(changeStatusAC(id, status))
    }
    return (
        <>
            <ul>
                {users.map(el => <li style={{display:'flex', gap: ' 10px'}} key={el.id}>
                    <EditableSpan content={el.name}
                                  changeSpan={(content) => changeSpan(el.id, content)}/>
                    <MySelect items={['ready','almost ready','changed his/her mind']}
                              head={el.status}
                    toSelect={(status)=>toSelect(el.id,status)}/>
                </li>)}
            </ul>
        </>
    )
}