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

        // }
        // else {console.log('already logged out')}
    }


    
    return (
        <>
        
        <AppBar  color='default' >
            <Toolbar sx={{display: "flex", height: "fit-content", width: "fit-content"}}>
                <Typography >
                    <img src={props.theme.palette.mode === "dark" ? logo2 : logo} alt='solChess' id='logo'/>solCHESS 
                </Typography>
                <Typography variant="h6" component="div" >
                <Button 
                    sx={{}}  
                    size="large" 
                    color='inherit' 
                    href='/'>
                        Home
                </Button>
                <Button  
                    sx={{}} 
                    size="large" 
                    color='inherit' 
                    href={props.currentUser ? '/game' : '/login'}>
                        Quickplay
                </Button></Typography>
                <Divider orientation='vertical' variant='middle' flexItem light={true}></Divider>
                <IconButton 
                    sx={{}} 
                    size="large" 
                    color="inherit"   
                    onClick={() => {props.setDarkMode(!props.darkMode); localStorage.setItem("DARK_MODE", !props.darkMode)}} >
                        {props.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Button 
                    color="inherit"
                    sx={{}} 
                    size="large"
                    // href='/login'
                    onClick={props.currentUser ? logoutFunction : () => {navigate('./login')}}>
                        
                    
                      {props.currentUser ? <Logout/> : <Login />}  
                </Button>
                
                
                <WalletModalProvider >
                    <WalletMultiButton/>
                </WalletModalProvider>
              
            </Toolbar>


        </AppBar>
        
        
        
        </>
    )
}
export default NavBar;