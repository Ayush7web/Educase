// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Screen from "./components/screen.jsx";
import SignIn from "./components/signIn.jsx";
import SignUp from "./components/signUp.jsx";
import Profile from "./components/Profile.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Screen />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
