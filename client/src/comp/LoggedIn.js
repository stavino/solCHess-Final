import Game from "./game";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Matchmaking from "./Matchmaking";

const LoggedIn = (props) => {

  const [darkSquareColor, setDarkSquareColor] = useState('dark-square');


  return (
    
      <Routes>
        <Route path='/' element={<HomePage theme={props.theme} currentUser={props.currentUser} darkMode={props.darkMode}/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/matchmaking' element={<Matchmaking />}/>
      </Routes>
    
  );
};

export default LoggedIn;
