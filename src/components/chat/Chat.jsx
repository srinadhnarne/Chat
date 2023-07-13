import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import "./chat.css"
import Messages from "./Messages"
import Input from "./Input"
import images from '../../assets/images'

const Chat = () => {

  const { data } = useContext(ChatContext);
  
  return (
    <div className="chat__panel">
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={images.More} alt='more'/>
        </div>
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <Input />
      </div>
    </div>
  )
}

export default Chat