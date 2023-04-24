import {EditableSpan} from "../Generic/EditableSpan";
import React from "react";
import {useAppSelector} from "../../Redux/Hooks/hooks";
import {useDispatch} from 'react-redux'
import {changeNameAC} from "../../Reducers/UsersReducer";
import {MySelect} from "../Generic/MySelect";

export const AccordionBody = () => {
    const users = useAppSelector(state => state.users)
    const dispatch = useDispatch()
    const changeSpan = (id: number, content: string) => {
        dispatch(changeNameAC(id, content))
    }
    return (
        <>
            <ul>
                {users.map(el => <li key={el.id}>
                    <EditableSpan content={el.name}
                                  changeSpan={(content) => changeSpan(el.id, content)}/>
                    <MySelect items={users.map(el => el.status)} head={'Choose status'}/>
                </li>)}
            </ul>
        </>
    )
}