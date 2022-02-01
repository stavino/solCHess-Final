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
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route exact path="/login" element={<Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default LoggedOut;