import React from "react";
import "./styles/style.css"

//JSX class => className    保留字，所以class要改掉

const Message = ({msg, messages, setMessages}) => {

    const deleteHandler = () =>{
        setMessages(messages.filter((m) => m.id!==msg.id))//裡面要放入Array，這樣lambda寫法可以讓delete的東西刪掉，就是跟delete的值一樣的會被過濾掉，不一樣的留下來
    };

    return (
    <div className="msg">
        <p>{msg.input}</p>
        <button onClick={deleteHandler}>Delete</button>
        <br /><br />
    </div>
    );
};

export default Message;