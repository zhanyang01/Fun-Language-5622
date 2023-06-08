import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage.jsx";
import Login from "./Pages/Authentication/login";
import Register from "./Pages/Authentication/register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import EnglishLanguage from "./Pages/languages/english";
import EnglishAssessment from "./Pages/languages/englishassessment";
import EnglishCourses from "./Pages/languages/englishcourses";
import EnglishBasic from "./Pages/languages/englishbasic";
import EnglishIntermediate from "./Pages/languages/englishintermediate";
import EnglishAdvanced from "./Pages/languages/englishadvanced";
import Profile from "./Pages/profile";

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
        <Route exact path="/english" element={<EnglishLanguage />} />
        <Route exact path="/englishassessment" element={<EnglishAssessment />} />
        <Route exact path="/englishcourses" element={<EnglishCourses />} />
        <Route exact path="/englishbasic" element={<EnglishBasic />} />
        <Route exact path="/englishintermediate" element={<EnglishIntermediate />} />
        <Route exact path="/englishadvanced" element={<EnglishAdvanced />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
