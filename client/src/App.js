import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage.jsx";
import Login from "./Pages/Authentication/login";
import Register from "./Pages/Authentication/register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Choosinglanguage from "./Pages/choosingLanguage";
import Profile from "./Pages/profile";

//english language imports
import EnglishLanguage from "./Pages/languages/english/English";
import EnglishBasic from "./Pages/languages/english/Basic/englishbasic";
import EBCourse1 from "./Pages/languages/english/Basic/ebcourse1";
import EBCourse2 from "./Pages/languages/english/Basic/ebcourse2";
import EBCourse3 from "./Pages/languages/english/Basic/ebcourse3";
import EBCourse4 from "./Pages/languages/english/Basic/ebcourse4";
import EBCourseDone from "./Pages/languages/english/Basic/ebcoursedone";
import EBAssessment from "./Pages/languages/english/Basic/ebassessment";
import EnglishIntermediate from "./Pages/languages/english/Intemediate/englishintermediate";
import EICourse1 from "./Pages/languages/english/Intemediate/eicourse1";
import EICourse2 from "./Pages/languages/english/Intemediate/eicourse2";
import EICourse3 from "./Pages/languages/english/Intemediate/eicourse3";
import EICourse4 from "./Pages/languages/english/Intemediate/eicourse4";
import EICourseDone from "./Pages/languages/english/Intemediate/eicoursedone";
import EIAssessment from "./Pages/languages/english/Intemediate/eiassessment";
import EnglishAdvanced from "./Pages/languages/english/Advanced/englishadvanced";
import EACourse1 from "./Pages/languages/english/Advanced/eacourse1";
import EACourse2 from "./Pages/languages/english/Advanced/eacourse2";
import EACourse3 from "./Pages/languages/english/Advanced/eacourse3";
import EACourse4 from "./Pages/languages/english/Advanced/eacourse4";
import EACourseDone from "./Pages/languages/english/Advanced/eacoursedone";
import EAAssessment from "./Pages/languages/english/Advanced/eaassessment";

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
        {/* general pages */}
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/choosinglanguage" element={<Choosinglanguage />} />
        <Route exact path="/profile" element={<Profile />} />
        {/* english */}
        <Route exact path="/english" element={<EnglishLanguage />} />
        {/* english basics */}
        <Route exact path="/englishbasic" element={<EnglishBasic />} />
        <Route exact path="/ebcourse1" element={<EBCourse1 />} />
        <Route exact path="/ebcourse2" element={<EBCourse2 />} />
        <Route exact path="/ebcourse3" element={<EBCourse3 />} />
        <Route exact path="/ebcourse4" element={<EBCourse4 />} />
        <Route exact path="/ebcoursedone" element={<EBCourseDone />} />
        <Route exact path="/ebassessment" element={<EBAssessment />} />
        {/* english intemediate */}
        <Route exact path="/englishintermediate" element={<EnglishIntermediate />} />
        <Route exact path="/eicourse1" element={<EICourse1 />} />
        <Route exact path="/eicourse2" element={<EICourse2 />} />
        <Route exact path="/eicourse3" element={<EICourse3 />} />
        <Route exact path="/eicourse4" element={<EICourse4 />} />
        <Route exact path="/eicoursedone" element={<EICourseDone />} />
        <Route exact path="/eiassessment" element={<EIAssessment />} />
        {/* english advanced*/}
        <Route exact path="/englishadvanced" element={<EnglishAdvanced />} />
        <Route exact path="/eacourse1" element={<EACourse1 />} />
        <Route exact path="/eacourse2" element={<EACourse2 />} />
        <Route exact path="/eacourse3" element={<EACourse3 />} />
        <Route exact path="/eacourse4" element={<EACourse4 />} />
        <Route exact path="/eacoursedone" element={<EACourseDone />} />
        <Route exact path="/eaassessment" element={<EAAssessment />} />
      </Routes>
    </div>
  );
}

export default App;
