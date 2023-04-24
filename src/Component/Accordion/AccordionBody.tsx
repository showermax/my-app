import {EditableSpan} from "../Generic/EditableSpan";
import React from "react";
import {useAppSelector} from "../../Redux/Hooks/hooks";

export const AccordionBody = () => {
    const users=useAppSelector(state=>state.users)
    return (
        <>
            <ul>
                {users.map(el => <li key={el.id}><EditableSpan initialcontent={el.name}/></li>)}
            </ul>
        </>
    )
}