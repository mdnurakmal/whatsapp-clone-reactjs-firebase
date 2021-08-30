import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
import {
    AttachFile,
    InsertEmoticon,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import { useState } from "react";
function Chat() {
    const [input,setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>', input)
        setInput("");
     };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Sunny</span>Hey guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>
                <p className="chat__message">Hey guys</p>
                <p className="chat__message">Hey guys</p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value ={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">
                        Send a mesage{" "}
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
