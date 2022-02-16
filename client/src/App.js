import './App.css';
import '@mui/material'
import {Paper, ThemeProvider, createTheme} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import NavBar from './comp/navbar';
import LoggedIn from './comp/LoggedIn';
import LoggedOut from './comp/loggedOut';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';



function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE")
  const [darkMode, setDarkMode] = useState(storedDarkMode)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
 

require('@solana/wallet-adapter-react-ui/styles.css');




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
const network = WalletAdapterNetwork.Devnet;
const endpoint = useMemo(() => clusterApiUrl(network), [network]);


  const wallets = useMemo(
    () => [
        new PhantomWalletAdapter(),
        // new SlopeWalletAdapter(),
        new SolflareWalletAdapter(),
        // new TorusWalletAdapter(),
        // new LedgerWalletAdapter(),
        // new SolletWalletAdapter({ network }),
        // new SolletExtensionWalletAdapter({ network }),
    ],
    []
);


  
  return (
  
  <ThemeProvider theme={theme} >
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect >

                   

    
        <div className="App" color='inherit' >
          <NavBar currentUser={currentUser} darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} setCurrentUser={setCurrentUser}></NavBar>

            {currentUser ? <LoggedIn theme={theme} darkMode={darkMode} currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <LoggedOut theme={theme} darkMode={darkMode} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} 
     
      
     
     
    
      
        </div>
    

      </WalletProvider>
    </ConnectionProvider>
  </ThemeProvider>
  );
}

export default App;
