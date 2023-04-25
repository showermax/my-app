import React, {useState} from 'react';
import style from './myselect.module.css';
type MySelectPropsType = {
    head:string
    items: string[]
    toSelect:(status:string)=>void
}
export const MySelect = (props:MySelectPropsType) => {
    const {head,items,toSelect} = props
    const [show, setShow] = useState(false)
    const selectionOfTheItem =(status:string)=> {
        toSelect(status)
        setShow(!show)
    }
    return (
        <div className={style.select} onMouseLeave={()=>setShow(false)}>
            <span onClick={()=>setShow(!show)} >{head}</span>
            {show &&
            <div className={style.item}>
                {items.map(el=>
                    <div key={el}
                         onClick={()=>selectionOfTheItem(el)}
                         >
                        {el}
                    </div>)}
            </div>
            }
        </div>
    );
};

