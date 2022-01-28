import Game from "./game";
import { Route, Routes } from "react-router-dom";

const LoggedIn = () => {
  return (
    <>
      <Routes>
      <Route path='/game' element={<Game/>}/>
      </Routes>
    </>
  );
};

export default LoggedIn;
