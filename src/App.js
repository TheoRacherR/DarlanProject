import React, {useState} from 'react';
import HomePage from "./Component/HomePage"
import MessagePage from './Component/MessagePage'

const App = () => {
  const [connected, setConnectionState] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    userId: "",
  });

  const userInformation = (name, id) => {
    setUserData({
      username: name,
      userId: id,
    });
    setConnectionState(true);
  }

  return(
    <div>
      <div style={{display: connected ? "none" : "block"}}>
        <HomePage fillUserData={userInformation}/>
      </div>
      <div style={{display: connected ? "block" : "none"}}>
        <MessagePage user={userData}/>
      </div>
    </div>
  );
}

export default App;