import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from './signup';

const LoggedOut = (props) => {

  useEffect(() => {
    <Navigate to="/login" />

  }, [])
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default LoggedOut;