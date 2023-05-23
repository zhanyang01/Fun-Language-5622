import React from "react";
import './App.css';
import Homepage from "./homepage"
import Login from "./login"
import Register from "./register"
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
  <Route exact path="/" element = { user && user._id ? <Homepage/>:<Login/>} >
    </Route>
  <Route path="/Login" element = {<Login setLoginUser={setLoginUser}/> }></Route>
  <Route path="/Register" element = {<Register/>}></Route>
</Routes>
    </div>
  );
}

export default App;