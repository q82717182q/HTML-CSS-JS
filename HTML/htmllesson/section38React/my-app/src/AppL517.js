import React from "react";
import "./styles/style.css";
import Friend from "./Friend";

//L517 Props
//Every component in react has its own properties

const App = () => {
  let friends = [
    {name : "Harry", age: 17, desc: "Harry is a good guy."}, 
    {name : "Ron", age: 17, desc: "Ron is a nice guy" },
    {name : "Snap", age: 45, desc:" He looks grumpy."}
    ];
    //這樣我這三個就可以拿來當作Friend的properties
  return (
    <div>
      <h1 style = {{color: "red", fontSize : "2rem", backgroundColor: "black"}}>{Math.random() * 100}</h1>
      <p>My friends are : </p>
      {
        friends.map((friend) => (
        <Friend name={friend.name} age={friend.age} desc={friend.desc} />
        ))
      }
    </div>
  );
}

//輸出App這個function
export default App;
