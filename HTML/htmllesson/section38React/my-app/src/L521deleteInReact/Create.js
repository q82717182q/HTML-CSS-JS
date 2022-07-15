import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

  //   e.preventDefault(); //避免提交後內容洗掉

const Create = ({messages, setMessages}) => {
    // let [messages, setMessages] = useState([]); 搬到App.js
    let [input, setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("hello");
        setMessages([...messages, {input, id: uuidv4()}]);//把兩個要串的放進來
        setInput("");//submit之後把內容清空，避免東西越來越多，下面<input>也要增加value={input}，這樣input才會吃到
    };
    const inputHandler = (e) => {
        // console.log(e.target.value); //測試有沒有效果
        setInput(e.target.value);
    };
    //自製清空state button
    const cleanHandler = (e) => {
        setMessages("");
    };

    //onChange 值有改變就會呼叫inputHandler
    return ( 
    <form >
        <input onChange={inputHandler} value={input} type="text"/>
        <br />
        <button onClick={submitHandler}>Submit in Create</button>
        <br />
        <button onClick={cleanHandler}>clean state</button>
        <br />
    </form>
    
    );
}

export default Create;