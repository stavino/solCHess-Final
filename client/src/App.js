import './App.css';
import '@mui/material'
import { Grid, Paper, Typography, Card, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Game from './comp/game.js'
import { useState } from 'react';
import {Brightness4, Brightness7, PinDropSharp} from '@mui/icons-material'
import { IconButton } from '@mui/material';
import {Route, Routes} from 'react-router-dom'
import NavBar from './comp/navbar';
import { green } from '@mui/material/colors';


function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
    mode: darkMode ? "dark" : 'light'
  },
})
if(darkMode === true){
  document.body.style = "background: black;";
  // styleObject = {"back"}
  
}
else document.body.style = `background: ${theme.palette.mode.color};`

console.log(theme.palette.primary)
  return (
  
<ThemeProvider theme={theme} >
    <div className={"App"} color='inherit'>  
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}></NavBar>
       
        <Routes>
          <Route path='/'/>
        </Routes>
        <Routes>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      
    </div>
</ThemeProvider>
    
   
  );
}

export default App;
