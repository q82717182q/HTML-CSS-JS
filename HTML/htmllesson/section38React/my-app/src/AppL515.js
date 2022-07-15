import React from "react";

//L515 大括號中可以直接用Js
//參數也要用大括號刮起來，如這邊for迴圈應用
//也可以省略一些用法Your friends are : 這邊示範
const App = () => {
  let friends = ["Harry", "Ron", "Snap"];
  return (
    <div>
      <h1>My Profile</h1>
      <h1>{Math.random() * 100}</h1>
      <p>My friends are : </p>
      {
        friends.map(friend => {
          return <p>{friend}</p>
        })
      }
      <p>Your friends are : </p>
      {
        friends.map(friend => <p>{friend}</p>)
      }
    </div>
  );
}

//輸出App這個function
export default App;
