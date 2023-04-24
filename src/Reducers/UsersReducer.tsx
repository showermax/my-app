import React from 'react';

export type UserType = {
    id: number
    name: string
}

const initialState = [
    {id: 1, name: 'Max', status: 'ready'},
    {id: 2, name: 'Kate', status: 'ready'},
    {id: 3, name: 'Danik', status: 'ready'},
    {id: 4, name: 'Nik', status: 'ready'}
]
export const UsersReducer = (state: UserType[] = initialState, action: any) => {
    console.log(...state)
        switch (action.type) {
            case 'CHANGE-NAME': return state.map(el=>el.id===action.payload.id ? {...el,name: action.payload.newname}:el)
            default: return state
        }

};

export const changeNameAC = (id:number,newname:string) => {
    return {
        type: 'CHANGE-NAME',
        payload: {id,newname}
    } as const
}