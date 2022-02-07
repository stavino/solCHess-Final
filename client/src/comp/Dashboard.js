import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
  } from '@solana/wallet-adapter-react-ui';

function DashboardContent() {
  const [me, setMe] = useState('');

const fetchUserData = function(){
    fetch('/me')
    .then(response => response.json())
    .then(res => setMe(res))
}

useEffect(fetchUserData, [])

  return (
    
      <Box sx={{ display: 'flex', position: "absolute", width: "100%" }}>
        <CssBaseline />
        
          
        
          
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240
                  }}
                >
                    <p>username: {me.username}</p>
                  <h1>Wins</h1>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    alignItems: "center"
                  }}
                >
                  <h2>Wallet<br></br><br></br>
                  <WalletModalProvider >
                    <WalletMultiButton/>
                </WalletModalProvider></h2>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                </Paper>
              </Grid>
            </Grid>
           
          </Container>
        </Box>
      </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}