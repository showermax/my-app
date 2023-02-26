import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed) {
    return (
        <div>
            <AccordionTitle acctitle={props.title}/>
            <AccordionBody/>
        </div>
    )
    } else {
        return (
            <div>
                <AccordionTitle acctitle={props.title}/>
            </div>
        )
    }
}

type AccordionTitlePropsType = {
    acctitle: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.acctitle}</h3>
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