// const React = require("react"); //先獲得module
// const ReactDom = require("react-dom"); 

//ES6 可以改進的地方
import React from "react";
import ReactDom from "react-dom";

// function App(){
//   return React.createElement("h1", null, "This is React App."); //製作一個h1, css先給null, h1裡面的字
// }

//如果要回很多的話就這樣用，先做div，裡面放陣列
// function App(){
//   return React.createElement("div", null, [
//     //可以改進的地方 第二個參數也可以直接放css
//     // React.createElement("h1", null, "My Profile"),
//     React.createElement("h1", {style: {color: "red"}}, "My Profile"),
//     React.createElement("p", null, "My name is Mike Huang."),
//     React.createElement("button", null, "Chech my profile."),

//   ]);
// };

//L512. JSX version   App一定要大寫 ，任何js裡面只能回傳一個值，所以一定要包在div，如果這邊沒包在div就會變成是回三個值
function App(){
  return (<div>
    <h1>My Profile</h1>
    <p>My name is Mike Huang.</p>
    <button>Check my profile.</button>
  </div>
  );
}

//這邊是選取index.html裡面的root，第二個參數是希望出現在螢幕上面的哪個位置
//這邊也可以修正
// ReactDom.render(React.createElement(App), document.querySelector("#root2"));
ReactDom.render(App(), document.querySelector("#root2"));


