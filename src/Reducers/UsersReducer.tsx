import React from 'react';

export type UserType = {
    id: number
    name: string
    status: 'ready'|'almost ready'| 'changed his/her mind'|string
}

const initialState = [
    {id: 1, name: 'Max', status: 'ready'},
    {id: 2, name: 'Kate', status: 'ready'},
    {id: 3, name: 'Danik', status: 'ready'},
    {id: 4, name: 'Nik', status: 'ready'}
]
export const UsersReducer = (state: UserType[] = initialState, action: any) => {
        switch (action.type) {
            case 'CHANGE-NAME': return state.map(el=>el.id===action.payload.id ? {...el,name: action.payload.newname}:el)
            case 'CHANGE-STATUS': return state.map(el=>el.id===action.payload.id ? {...el,status: action.payload.status}:el)
            default: return state
        }

};
type ActionType = ReturnType<typeof changeNameAC> | ReturnType<typeof changeStatusAC>

export const changeNameAC = (id:number,newname:string) => {
    return {
        type: 'CHANGE-NAME',
        payload: {id,newname}
    } as const
}
export const changeStatusAC = (id:number,newstatus:string) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {id,newstatus}
    } as const
}