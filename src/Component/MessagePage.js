import React, { useState } from 'react';
import '../App.css';
// import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockDiv from "./BlockDiv";
import MessageDiv from './MessageDiv';

const MessagePage = ({user}) => {
  const [messages, setMessages] = useState([]);

  const style={
    // bottom:"1vh",
    top:"82vh",
    left:"10vw",
    // right:"10vw",
    width:"49vw",
    // height:"5vh",
    position:"relative",
    // marginBottom:"10vh",
  }
  
  let a = 1;
  
  const messageToSend = (e) => {
    newMessage(user.username, e.target.value, Date.now());
    console.log(user);
    e.target.value = '';
  }

  const newMessage = (s, c, t) => {
    const addMessage = {
      sender: s,
      content: c,
      timestamp: t,
    }

    setMessages([...messages, addMessage]);

    messages.map((item, i) => (console.log(item)));
  }
  
  return (
  
    <div className="App">
      <header className="App-header">
        <BlockDiv 
          top={"5vh"} 
          left={"5vh"} 
          height={"90vh"} 
          width={"70vw"} 
          backgroundColor={"grey"} 
          position={"absolute"} 
          margin={"0%"} 
          padding={"0%"} 
          borderRadius={".5em"}
          alignItems={"unset"}
          border={"solid"}
          initiats=
            {messages.map((item, i) => (
                <MessageDiv
                  key={'message_' + i}
                  side={(item.sender === user.username) ? "right" : "left"}
                  sender={item.sender}
                  text={item.content}
                  timestamp={item.timestamp} />
              ))} />

            <InputGroup size="lg" className="mb-3" style={style}>
              <FormControl
                placeholder="Tap here ..."
                aria-label="Text to send"
                aria-describedby="basic-addon2"
                id="message"
                onKeyPress={(e) => {e.key === 'Enter' ? messageToSend(e) : a = a }} />
              <InputGroup.Append>
                <Button variant="secondary">Send</Button>
              </InputGroup.Append>
            </InputGroup>
          } /> 

          <BlockDiv 
            top={"5vh"} 
            // right={"50vw"}
            left={"80vw"} 
            height={""} 
            width={""} 
            backgroundColor={"darkblue"} 
            position={"absolute"} 
            margin={"0%"} 
            marginRight={"5vw"}
            padding={"1%"} 
            borderRadius={".5em"}
            alignItems={"unset"}
            border={"20px"}
            initiats={<div>
              {user.username}
              </div>} />
      </header>
    </div>
  );
}

export default MessagePage;