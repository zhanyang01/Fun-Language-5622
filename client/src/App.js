import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage.jsx";
import Login from "./Pages/Authentication/login";
import Register from "./Pages/Authentication/register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      {/* need to ensure that  every route is here this might be one of the problems */}
      <Routes>
        <Route exact path="/" element={user && user._id ? <Homepage /> : <Login />} />
        <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
