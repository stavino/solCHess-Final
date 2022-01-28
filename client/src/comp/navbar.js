import { useState } from 'react';
import {Brightness4, Brightness7} from '@mui/icons-material'
import { IconButton, Button } from '@mui/material';
import { Grid, Paper, Typography, Card, Box, Toolbar, AppBar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'
import { flexbox, height } from '@mui/system';
import { Link } from '@mui/material';
import App from '../App';
import { TypeFormatFlags } from 'typescript';

function NavBar(props){
    
 let mode = props.theme.palette.mode.toUpperCase();
  console.log(props.theme.palette.primary)  
    return (
        <>
        
        <AppBar color='default'>
            <Toolbar>
                <Typography sx={{ml: '10px'}}>
                    <img src={props.theme.palette.mode === "dark" ? logo2 : logo} alt='solChess' id='logo'/>solCHESS 
                </Typography>
                
                    <Typography sx={{ml: '50px', borderRadius: "20px"}} className='menu-item'  color='inherit' href={props.currentUser ? '/' : '/login'}>Home</Typography>
                
                <Typography  sx={{ml: '50px', borderRadius: "20px"}} className='menu-item' color='inherit' href={props.currentUser ?'/game' : '/login'}>Quickplay</Typography>
                <Typography sx={{ml: '50px', borderRadius: "20px"}}>
                <IconButton className='menu-item'  onClick={() => {props.setDarkMode(!props.darkMode)}} color="inherit">
        {props.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
                </Typography>

            </Toolbar>


        </AppBar>
        
        
        
        </>
    )
}
export default NavBar;