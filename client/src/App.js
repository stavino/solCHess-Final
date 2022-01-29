import './App.css';
import '@mui/material'
import {Paper, ThemeProvider, createTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import NavBar from './comp/navbar';
import LoggedIn from './comp/LoggedIn';
import LoggedOut from './comp/loggedOut';



function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE")
  const [darkMode, setDarkMode] = useState(storedDarkMode)
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

  useEffect(() => {localStorage.setItem("DARK_MODE", darkMode)}, [darkMode])
const theme = createTheme({
    palette: {
    mode: darkMode ? "dark" : 'light'
  },
})
useEffect(() => {darkMode ? document.body.style = "background: black;" : document.body.style = `background: white;`}, [darkMode]);



  
  return (
  
<ThemeProvider theme={theme} >
    <Paper className="App" color='inherit' >
      <NavBar currentUser={currentUser} darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} setCurrentUser={setCurrentUser}></NavBar>

        {currentUser ? <LoggedIn darkMode={darkMode} currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <LoggedOut darkMode={darkMode} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} 
     
      
     
     
    
      
    </Paper>
</ThemeProvider>
    
   
  );
}

export default App;
