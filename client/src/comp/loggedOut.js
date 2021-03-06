import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./login";
import Signup from './signup';

const LoggedOut = (props) => {

  useEffect(() => {
    <Navigate to="/login" />

  }, [])
  return (
    
      <Routes>
        <Route path='/' element={<HomePage theme={props.theme} currentUser={props.currentUser} darkMode={props.darkMode}/>}/>
        <Route exact path="/login" element={<Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} darkMode={props.darkMode}/>} />
        <Route exact path="/signup" element={<Signup currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} darkMode={props.darkMode} />} />
      </Routes>
    
  );
};

export default LoggedOut;