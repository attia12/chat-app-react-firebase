import React, { useEffect, useRef, useState } from 'react';
import "./chat.css";
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji);
    setOpen(false)


  }
  const endRef=useRef(null);
  useEffect(()=> {
    endRef.current?.scrollIntoView({behaviour:"smooth"})
  

  },[])
  
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Phone Icon" />
          <img src="./video.png" alt="Video Icon" />
          <img src="./info.png" alt="Info Icon" />
        </div>
      </div>

      <div className="center">
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>kjdsjkdjskdjqoshojekj kejdokjdksd kdlskd ddkksd dsd d</p>
              <span> 1 min ago</span>
            </div>
          </div>
          <div className="message own">
           
            <div className="texts">
              <img src="https://www.shutterstock.com/fr/image-photo/lake-palms-mahe-island-seychelles-119831752" alt="" />
              <p>kjdsjkdjskdjqoshojekj kejdokjdksd kdlskd ddkksd dsd d</p>
              <span> 1 min ago</span>
            </div>
          </div>

          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>kjdsjkdjskdjqoshojekj kejdokjdksd kdlskd ddkksd dsd d</p>
              <span> 1 min ago</span>
            </div>
          </div>
          <div className="message own">
            
            <div className="texts">
              <p>kjdsjkdjskdjqoshojekj kejdokjdksd kdlskd ddkksd dsd d</p>
              <span> 1 min ago</span>
            </div>
          </div>

          <div ref={endRef}></div>



      </div>
      
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="Image Icon" />
          <img src="./camera.png" alt="Camera Icon" />
          <img src="./mic.png" alt="Image Icon" />
        </div>
        <input type="text" placeholder='Type a message...'  value={text} onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="Emoji Icon" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
          <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
          </div>
         
        </div>
        <button className="sendButton">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
