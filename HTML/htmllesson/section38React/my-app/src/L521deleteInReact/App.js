import React, {useState} from "react";
import Create from "./Create";
import Info from "./Info";

//L520
//這邊做Create.js與Info.js，這邊示範從Create.js得到的資料怎麼傳給App.js

const App = () => {
  let [messages, setMessages] = useState([]);//從Create剪過來，當成props傳給Create
  return (
    <div>
      <Create messages={messages} setMessages={setMessages}/>
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
}

//輸出App這個function
export default App;
