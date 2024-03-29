import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

export function Accordion(props: AccordionPropsType) {
    const [collaps, setCollaps] = useState(true)

    const collapseAccordion = () => {
        setCollaps(!collaps)
    }

    return (
        <div>
            <AccordionTitle acctitle={props.title} collapseAccordion={collapseAccordion}/>
            {!collaps && <AccordionBody />}
        </div>
    )
}

// function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed) {
//     return (
//         <div>
//             <AccordionTitle acctitle={props.title}/>
//
//         </div>
//     )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle acctitle={props.title}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
// }

type AccordionTitlePropsType = {
    acctitle: string
    collapseAccordion: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {


    const onclickHandler = () => {
        props.collapseAccordion()
    }

    return (
        <div className={'acc_title'} onClick={onclickHandler}>
            <h3>---{props.acctitle}---</h3>
            <svg className='arrow--down' viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.83179 1.11001L4.76335 5.54369L0.694996 1.11001C0.539953 0.955178 0.288448 0.955178 0.133405 1.11001C-0.0218905 1.26489 -0.0218905 1.51589 0.133405 1.67072L4.4626 6.38869C4.54539 6.47128 4.65513 6.50652 4.76335 6.50094C4.87166 6.50652 4.98148 6.47128 5.06418 6.38869L9.39355 1.67072C9.54875 1.51589 9.54875 1.26489 9.39355 1.11001C9.23842 0.955178 8.98699 0.955178 8.83179 1.11001Z"
                      fill={'black'}/>
            </svg>
        </div>
    )
}

