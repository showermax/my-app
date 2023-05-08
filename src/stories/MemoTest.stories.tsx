import React, {ChangeEvent, useState} from 'react';
import {Meta} from "@storybook/react";
import {type} from "os";

const meta = {
    title: 'ProgressionTest',
    component: MemoTestStories
} satisfies Meta<typeof MemoTestStories>
export default meta;

function MemoTestStories() {
    const [array, setArray] = useState([1, 3, 5, 7])
    const [difference, setDifference] = useState(1)
    const [length, setLength] = useState(1)

    for (let i = 0; i < length; i = i + difference) {
        array.push(i)
    }
    return (
        <div>
            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setDifference(+e.currentTarget.value)}/>
            <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => setLength(+e.currentTarget.value)}/>
            <Progression array={array}/>
        </div>
    );
};


const Progression = (props: {array:Array<number>}) => {
    return <div>{props.array}</div>
}