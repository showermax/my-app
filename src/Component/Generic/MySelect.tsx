import React, {useState} from 'react';
import style from './myselect.module.css';
type MySelectPropsType = {
    head?:string
    items: string[]

}
export const MySelect = (props:MySelectPropsType) => {
    const {head,items} = props
    const [show, setShow] = useState(false)
    return (
        <div className={style.select}>
            <span onClick={()=>setShow(!show)}>{head}</span>
            {show &&
            <div className={style.item}>

                {items.map(el=><div key={el}> {el} </div>)}
            </div>
            }
        </div>
    );
};

