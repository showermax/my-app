import React from 'react';
import './App.css';
import Accordion from "./Component/Accordion/Accordion";
import {Rating} from "./Component/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"My first ReactTS application"}/>
            <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <div> {props.title} </div>
}

// My first ReactTS application
export default App;
