import React, {useState} from 'react';
import './App.css';
import Accordion from "./Component/Accordion/Accordion";
import {Rating} from "./Component/Rating/Rating";
import {Onoff} from "./Component/OnOff/Onoff";
import {UncontrolledRating} from "./Component/Rating/UncontrolledRating";

function App() {
    const [darkmode, setDarkMode] = useState(false)
    const [rating, setRating] = useState<number>(0)
    const darkmodeSwitcher =()=>{
        setDarkMode(!darkmode)
    }

    return (
        <div className={darkmode ? 'dark' : ''}>
            <Onoff switcher={darkmodeSwitcher} mode={darkmode}/>
            <PageTitle title={"My first ReactTS application"}/>
            <PageTitle title={"This is APP component"}/>
            Article 1

            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            Article 2
            <Rating value={rating} onStarClick={(value)=>setRating(value)}/>
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h3> {props.title} </h3>
}

// My first ReactTS application
export default App;
