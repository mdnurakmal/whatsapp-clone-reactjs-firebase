import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState("");

    const createChat = () =>{
        const roomName = prompt("Please enter name for chat");

        if (roomName){
            // do some clever database stuff..
        }
    };

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) :(
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat;
