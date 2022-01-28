import './App.css';
import '@mui/material'
import { Grid, Paper, Typography, Card, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Game from './comp/game.js'
import { useState, useEffect } from 'react';
import {Brightness4, Brightness7, PinDropSharp} from '@mui/icons-material'
import { IconButton } from '@mui/material';
import {Route, Routes, Navigate} from 'react-router-dom'
import NavBar from './comp/navbar';
import Login from './comp/login';
import Signup from './comp/signup';
import LoggedIn from './comp/LoggedIn';
import LoggedOut from './comp/loggedOut';



function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  const theme = createTheme({
    palette: {
    mode: darkMode ? "dark" : 'light'
  },
})
if(darkMode === true){
  document.body.style = "background: black;";
  
}
else document.body.style = `background: ${theme.palette.mode.color};`

  
  return (
  
<ThemeProvider theme={theme} >
    <div className={"App"} color='inherit'>
      <NavBar currentUser={currentUser} darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}></NavBar>

        {currentUser ? <LoggedIn/> : <LoggedOut/>} 
     
       
     
     
    
      
    </div>
</ThemeProvider>
    
   
  );
}

export default App;
