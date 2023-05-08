import React, {ChangeEvent, useMemo, useState} from "react";

export function MemoTestStories() {
    const [difference, setDifference] = useState(0)
    const [ratio, setRatio] = useState(0)
    let resultArithmetic = 0
    let resultGeometric = 1

    const arithmetic = () => {
        for (let i = 0; i < 10; i++) {
            resultArithmetic = resultArithmetic + difference
        }
        return resultArithmetic
    }

    const geometric =()=> {
        for (let i = 0; i < 10; i++) {
            let temp = 1
            while (temp < 100000000) {
                temp++
            }
            resultGeometric = resultGeometric + resultGeometric * ratio
        } return resultGeometric
    }
    useMemo(geometric, [ratio])
    return (
        <div>
            <div>
                <div>Set the difference for arithmetics progression</div>
                <input type="text"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setDifference(+e.currentTarget.value)}/>
                <div>Sum:</div>
                <div>{arithmetic()}</div>
            </div>
            <div>
                <div>Set the ratio for geometrics progression</div>
                <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setRatio(+e.currentTarget.value)}/>
                <div>Sum:</div>
                <div>{resultGeometric}</div>
            </div>


            {/*<MemoProgression array={array}/>*/}
            {/*<InputValue value={difference}/>*/}
        </div>
    );
};


const Progression = (props: { array: Array<number> }) => {
    console.log('hi')
    return <div>{props.array.map(el => <span> {el} </span>)}</div>
}
const MemoProgression = React.memo(Progression)

const InputValue = (props: { value: string }) => {
    return <div>{props.value}</div>

}