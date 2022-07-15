import React, {useState} from "react";

//L519
//這邊做一個點擊button時會改變名字來說明State


const App = () => {
  //state 陣列第一個是state的名稱，第二個是func名稱，後面固定等於useState，括號裡面是第一個位置得值
  let [name, setName] = useState("Panda Wang")
  const changeNameHandler = () => {
    //使用setName修改裡面的值，這樣name這一個state在這邊被改變的時候，整個頁面的name state都會被改變
    setName("Mike Huang");
    //這樣的好處是可以重複使用
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeNameHandler}>Change Name</button>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
    </div>
  );
}

//輸出App這個function
export default App;
