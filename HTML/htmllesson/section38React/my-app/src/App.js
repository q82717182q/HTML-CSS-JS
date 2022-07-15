import React, {useState, useEffect} from "react";

//L522

const App = () => {
  let [name, setName] = useState("Mike Huang");

  const changeNameHandler = (e) => {
    setName("Peter Wang")
  };

//userEffect，要兩個parameter，第一個是func，第二個是Array
useEffect(() =>{
  console.log("useEffect function is running.");
}, [name]);


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeNameHandler}>Change Name</button>

    </div>
  );
}

//輸出App這個function
export default App;
