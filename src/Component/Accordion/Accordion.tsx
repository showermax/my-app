import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

function Accordion(props: AccordionPropsType) {
    const [collaps, setCollaps] = useState(true)

    const collapseAccordion =()=> {
        setCollaps(!collaps)
    }

         return (
            <div>
                <AccordionTitle acctitle={props.title} collapseAccordion={collapseAccordion}/>
                {collaps && <AccordionBody/>}
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
    collapseAccordion: ()=>void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")

    const onclickHandler =()=>{
        props.collapseAccordion()
    }

    return (
        <h3 onClick={onclickHandler}>---{props.acctitle}---</h3>
    )
}
const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}
export default Accordion;