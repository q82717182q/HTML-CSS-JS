import React from "react";

//L518 event handling
//onClick裡面放func名稱，func要放在App裡面
const App = () => {
  //button click handler
  // const buttonHandler = (e) => {
  //   e.preventDefault(); //避免提交後內容洗掉
  //   let date = new Date().toLocaleDateString();
  //   alert(date);
  // };

  //second button handler
  //onClick後面要用匿名，不能直些使用func()，不然會還沒click就先執行func()了
  const buttonHandler = (msg) => {
    alert(msg)
  }

  return (
    <div>
      <form action="">
        <input type="text" />
        <button onClick={() => {buttonHandler("Hello, how are you?")}}>submit</button>
        {/* <button onClick={buttonHandler("Hello, how are you?直接括號這樣用會直接執行func")}>submit</button> */}
      </form>
      <p></p>
    </div>
  );
}

//輸出App這個function
export default App;
