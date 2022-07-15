import React from "react";
//2. SCSS
import "./styles/style.css";

// CSS styling inside JSX
// 1. inline styling
//style裡面要放Js object，所以要用大括號
//fontSize而不是用font-size，因為這邊是用JS，js裡面是不能用-的，所以遇到-的時候直接刪掉用大寫
//backgroundColor也是
const App = () => {
  let friends = ["Harry", "Ron", "Snap"];
  return (
    <div>
      <h1 style = {{color: "red", fontSize : "2rem", backgroundColor: "black"}}>{Math.random() * 100}</h1>
      <p>Your friends are : </p>
      {
        friends.map(friend => <p>{friend}</p>)
      }
    </div>
  );
}

//輸出App這個function
export default App;
