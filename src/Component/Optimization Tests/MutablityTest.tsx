import React, {useState} from 'react';

const MutablityTest = () => {

    const [arr1,setArr1]=useState([1,2,3])
    const [arr2,setArr2] = useState(['a','b','c'])

    const changeMut =() =>{
        arr1.push(4)
        setArr1(arr1)
    }
    const changeImm =() =>{
        setArr2([...arr2,'d'])
    }

    console.log('rendered')
    console.log(arr1)
    console.log(arr2)
    return (
        <div>
            <button onClick={changeMut}>Change mutable</button>
            <button onClick={changeImm}>Change immutable</button>

        </div>
    );
};

export default MutablityTest;