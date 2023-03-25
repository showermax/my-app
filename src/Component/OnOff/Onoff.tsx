import React, {useState} from "react";

type PropsType ={
    switcher:()=>void
    mode: boolean
}
export function Onoff(props: PropsType) {


    return (
        <div className={props.mode ? 'dark': ''}>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.switcher}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </div>
        )

}