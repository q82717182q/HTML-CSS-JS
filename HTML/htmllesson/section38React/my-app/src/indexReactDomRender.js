import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//第一個顯示要的內容，第二個參數放要顯示的地方，可以用這種self closing tag方式直接顯示
ReactDOM.render(
<React.StrictMode>
  <App />  
</React.StrictMode>,
document.querySelector("#root")
)