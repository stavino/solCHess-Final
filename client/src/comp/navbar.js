import { useState } from 'react';
import {Brightness4, Brightness7, Login, Logout} from '@mui/icons-material'
import { IconButton, Button } from '@mui/material';
import { Grid, Paper, Typography, Card, Box, Toolbar, AppBar, Divider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
  } from '@solana/wallet-adapter-react-ui';



function NavBar(props){

    const [isConnected, setIsConnected] = useState(false)

    let navigate = useNavigate();
    
    function logoutFunction(){
        // if(props.currentUser===true){
            fetch('/logout', {
                method: "DELETE"
            })
            .then((response) => {
                if(response.ok){
                    props.setCurrentUser(null);
                    navigate('./login')}
                else{
                    response.json().then(
                        (errors) => {console.log(errors)
                        }
                        )
                    };
                });

    }


    
    return (
        <>
        
        <AppBar sx={{display: "flex", height: 'fit-content'}} color='default' >
            <Toolbar sx={{justifyContent: "flex-start"}}>
                <IconButton href='/'>
                    <img src={props.theme.palette.mode === "dark" ? logo2 : logo} alt='solChess' id='logo'/>solCHESS 
                </IconButton>
            
                
                
                <Divider orientation='vertical' variant='middle' flexItem light={true}></Divider>
                <Button 
                    sx={{}} 
                    size="large" 
                    color="inherit"   
                    onClick={() => {props.setDarkMode(!props.darkMode); localStorage.setItem("DARK_MODE", !props.darkMode)}} >
                        {props.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </Button>
                <Button 
                    color="inherit"
                    sx={{}} 
                    size="large"
                    // href='/login'
                    onClick={props.currentUser ? logoutFunction : () => {navigate('./login')}}>
                        
                    
                      {props.currentUser ? <Logout/> : <Login />}  
                </Button>
                
                
                
              
            </Toolbar>


        </AppBar>
        
        
        
        </>
    )
}
export default NavBar;