import Game from "./game";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const LoggedIn = (props) => {
  return (
    
      <Routes>
        <Route path='/' element={<HomePage theme={props.theme} currentUser={props.currentUser} darkMode={props.darkMode}/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    
  );
};

export default LoggedIn;
