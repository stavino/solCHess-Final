import { useState } from 'react';
import {Brightness4, Brightness7} from '@mui/icons-material'
import { IconButton, Button } from '@mui/material';
import { Grid, Paper, Typography, Card, Box, Toolbar, AppBar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'

function NavBar(props){
    
    function logoutFunction(){
        if(props.currentUser===true){
            fetch('/logout', {
                method: "DELETE"
            })
            .then(response => response.json)
            .then(success => console.log(success))
        }
        else {console.log('already logged out')}
    }


    
    return (
        <>
        
        <AppBar color='default' >
            <Toolbar sx={{}}>
                <Typography >
                    <img src={props.theme.palette.mode === "dark" ? logo2 : logo} alt='solChess' id='logo'/>solCHESS 
                </Typography>
                <Typography variant="h6" component="div" >
                <Button 
                    sx={{}}  
                    size="large" 
                    color='inherit' 
                    href={props.currentUser ? '/' : '/login'}>
                        Home
                </Button>
                <Button  
                    sx={{}} 
                    size="large" 
                    color='inherit' 
                    href={props.currentUser ? '/game' : '/login'}>
                        Quickplay
                </Button></Typography>
                <Button 
                    color="inherit"
                    sx={{}} 
                    size="large"
                    // href='/login'
                    onClick={logoutFunction}>
                    
                      {props.currentUser ? 'Logout' : 'Login'}  
                </Button>
                <IconButton 
                    sx={{}} 
                    size="large" 
                    color="inherit"   
                    onClick={() => {props.setDarkMode(!props.darkMode)}} >
                        {props.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      
                

            </Toolbar>


        </AppBar>
        
        
        
        </>
    )
}
export default NavBar;