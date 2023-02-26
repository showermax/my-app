import React from "react";

function Accordion(props: any) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle acctitle={props.title}/>
            <AccordionBody/>
        </div>

    )
}

const AccordionTitle = (props: any) => {
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