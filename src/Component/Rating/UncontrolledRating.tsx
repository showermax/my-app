import React, {useState} from "react";


export function UncontrolledRating() {

    const [rating, setRating] = useState<number>(0)

    return (
        <div className={'rating'}>
            <div onClick={()=>setRating(1)}><Star selected={rating > 0}/></div>
            <div onClick={()=>setRating(2)}><Star selected={rating > 1}/></div>
            <div onClick={()=>setRating(3)}><Star selected={rating > 2}/></div>
            <div onClick={()=>setRating(4)}><Star selected={rating > 3}/></div>
            <div onClick={()=>setRating(5)}><Star selected={rating > 4}/></div>
            <button onClick={()=>setRating(0)}>Х</button>
        </div>
    )
}

// export function Rating(props: RatingPropsType) {
//     console.log("Rating rendering")
//     if (props.value === 1) {
//         return (
//             <div>
//                 <Star selected={true} />
//                 <Star selected={false} />
//                 <Star selected={false} />
//                 <Star selected={false} />
//                 <Star selected={false} />
//             </div>
//         )
//     }
//     if (props.value === 2) {
//         return (
//             <div>
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={false} />
//                 <Star selected={false} />
//                 <Star selected={false} />
//             </div>
//         )
//     }
//     if (props.value === 3) {
//         return (
//             <div>
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={false} />
//                 <Star selected={false} />
//             </div>
//         )
//     }
//     if (props.value === 4) {
//         return (
//             <div>
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={false} />
//             </div>
//         )
//     }
//     if (props.value === 5) {
//         return (
//             <div>
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={true} />
//                 <Star selected={true} />
//             </div>
//         )
//     }
//     return (
//         <div>
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//             <Star selected={false} />
//         </div>
//     )
// }

type StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType) => {
    return (
        <span>
        {props.selected ?  <b>star</b>  : 'star'  }
        </span>
    )
}