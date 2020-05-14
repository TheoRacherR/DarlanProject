import React, { useState } from 'react';
import '../App.css';
import LogoHome from "./LogoHome";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextCommon from "./TextCommon";

const HomePage = ({fillUserData}) => {
  const [showInscription, setShowInscription] = useState(false);
  const [logingSigninButton, setLogingSigninButton] = useState("");
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formButton, setFormButton] = useState(false);
  const [failConnection,setFailConnection] = useState(false);
  const [clicked,setClicked] = useState(false);

  let styleLoginScreen={
    backgroundColor:"rgb(0,0,0)",
    opacity:"0.5",
    position:"absolute",
    height:"40em",
    maxHeight:"100vh",
    width:"100%",
    display: showInscription ? 'block' : 'none',
  }

  let styleLogin={
    backgroundColor:"#BBC6CB",
    borderRadius:"0.25em",
    borderColor:"#696A6A",
    position:"absolute",
    height:"50%",
    width:"40%",
    top:"25%",
    left:"30%",
    display: showInscription ? 'block' : 'none',
    padding:"1%",
  }

  let styleDiveClose={
    position:"absolute",
    height:"40px",
    width:"40px",
    top:"0%",
    right:"2%",
  }

  let styleFailConnection={
    color:'red',
    display: failConnection ? 'block' : 'none',
  }

  let styleForm={
    padding:"5%",
    paddingTop:"10%",
  }

  function openLoginSignin (e) {
    setShowInscription(true);
    
    if (e.target.id === 'login_button') {
      setLogingSigninButton("Connexion");
    }
    else {
      setLogingSigninButton("S'inscrire");
    }
  }

  const closeLoginSignin = () => {
    setShowInscription(false);
    setLogingSigninButton("");
  }

  const requestLogin = (e) => {
    if (formUsername !== '' || formPassword !== '') {
      setFormButton(true);
      fetch("http://92.151.100.58:80/api/login.php", {
        method: 'POST', 
        body: `{"username": "${formUsername}", "mdp": "${formPassword}"}`
      }).then(response => response.json())
      .then(data => {
        console.log(data);
        setFormButton(false);
        if (data.length === 1) {
          fillUserData(data[0].username, data[0].id);
          setFailConnection(false);
        } else {
          setFailConnection(true);
        }
      });
    }
  }

  const requestSignin = (e) => {
    if (formUsername !== '' || formPassword !== '') {
      setFormButton(true);
      fetch("http://92.151.100.58:80/api/signup.php", {
        method: 'POST', 
        body: `{"username": "${formUsername}", "mdp": "${formPassword}"}`
      }).then(response => response.json())
      .then(data => {
        console.log(data);
        setFormButton(false);
        setClicked(true);
        if (data.length === 1) {
          fillUserData(data[0].username, data[0].id);
          setClicked(false);
        } else {
          setClicked(false);
        }
      });
    }
  }

  return (
    <div className="App">

      <header className="App-header" id="header">
      <div style={styleLoginScreen}></div>
        <div style={styleLogin}>
          <div style={styleDiveClose}>
            <Button variant="danger" onClick={closeLoginSignin}>✖</Button>
          </div>
          <div style={styleForm}>
          <Form>
            <Form.Group>
              <Form.Label style={styleFailConnection}>Echec de connexion</Form.Label>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required id="form_username" onKeyUp={(e) => { setFormUsername(e.target.value) } }/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required id="form_password" onKeyUp={(e) => { setFormPassword(e.target.value) } }/>
            </Form.Group>

            <Button disabled={formButton} variant="success" type="submit" size="lg" style={{fontSize:"100%",marginBottom:"2%",marginTop:"5%",color:""}} onClick={(e) => {e.preventDefault(); logingSigninButton === "Connexion" ? requestLogin(e) : requestSignin(e)}}>
              <Spinner animation="border" style={{display: clicked ? "block" : "none"}}/>
              {logingSigninButton}
            </Button>
          </Form>
          </div>
        </div>

      <LogoHome logo={"Darlan"} color={"fff"}/>
      <TextCommon textC="Darlan est un tout nouveau site de messagerie en ligne, super sécurisé grâce à son système de cryptage tellement complexe que même nous avons du mal à le comprendre" fontsize="30px" color={"fff"}/>

      <Button onClick={(e) => openLoginSignin(e)} type="submit" variant="primary" size="lg" id="login_button" style={{fontSize:"120%"}}>Connexion</Button>
      
      <div style={{margin:"2%"}}>ou</div>
      
      <Button onClick={(e) => openLoginSignin(e)} type="submit" variant="primary" size="lg" id="signin_button" style={{fontSize:"120%",marginBottom:"3.5%"}}>Inscription</Button>
      
      </header>

      </div>
  );
}


export default HomePage;