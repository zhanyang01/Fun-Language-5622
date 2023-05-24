import React from "react";
import './App.css';
import Homepage from "./homepage.jsx"
import Login from "./login.jsx"
import Register from "./register.jsx";
import {
  Routes, 
  Route

} from "react-router-dom";
import {useState} from 'react';
function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
<Routes>
  <Route exact path="/" element = { user && user._id ? <Homepage/>:<Login/>} />
  <Route exact path="/login" element = {<Login setLoginUser={setLoginUser}/> }/>
  <Route exact path="/register" element = {<Register/>} />
</Routes>
    </div>
  );
}

export default App;