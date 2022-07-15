import React from "react";



// const Friend = (props) => {
//     // console.log(props);
//     return (
//     <div>
//         <h1>Name : {props.name}</h1>
//         <h2>Age : {props.age}</h2>
//         <p>{props.desc}</p>
//     </div>
//     );
// };

//也可以這樣用
//內部有點類似這樣處理
// let{name, desc, age = props;}
const Friend = ({name, age, desc}) => {
    // console.log(props);
    return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <p>{desc}</p>
    </div>
    );
};

export default Friend;