import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage.jsx";
import Login from "./Pages/Authentication/login";
import Register from "./Pages/Authentication/register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//english language imports
import EnglishLanguage from "./Pages/languages/english/English";
import EnglishBasic from "./Pages/languages/english/Basic/englishbasic";
import EBCourse from "./Pages/languages/english/Basic/ebcourse";
import EBAssessment from "./Pages/languages/english/Basic/ebassessment";
import EnglishIntermediate from "./Pages/languages/english/Intemediate/englishintermediate";
import EICourse from "./Pages/languages/english/Intemediate/eicourse";
import EIAssessment from "./Pages/languages/english/Intemediate/eiassessment";
import EnglishAdvanced from "./Pages/languages/english/Advanced/englishadvanced";
import EACourse from "./Pages/languages/english/Advanced/eacourse";
import EAAssessment from "./Pages/languages/english/Advanced/eaassessment";
import Profile from "./Pages/profile";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      {/* need to ensure that  every route is here this might be one of the problems */}
      <Routes>
        <Route exact path="/" element={user && user._id ? <Homepage /> : <Login />} />
        {/* authentication */}
        <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/homepage" element={<Homepage />} />
        {/* english */}
        <Route exact path="/english" element={<EnglishLanguage />} />
        <Route exact path="/englishbasic" element={<EnglishBasic />} />
        <Route exact path="/ebcourse" element={<EBCourse />} />
        <Route exact path="/ebassessment" element={<EBAssessment />} />
        <Route exact path="/englishintermediate" element={<EnglishIntermediate />} />
        <Route exact path="/eicourse" element={<EICourse />} />
        <Route exact path="/eiassessment" element={<EIAssessment />} />
        <Route exact path="/englishadvanced" element={<EnglishAdvanced />} />
        <Route exact path="/eacourse" element={<EACourse />} />
        <Route exact path="/eaassessment" element={<EAAssessment />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
