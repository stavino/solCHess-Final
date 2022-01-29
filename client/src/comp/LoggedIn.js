import Game from "./game";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const LoggedIn = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </>
  );
};

export default LoggedIn;
