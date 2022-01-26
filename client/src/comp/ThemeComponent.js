import { Grid, Paper, Typography, Card, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import {Brightness4, Brightness7} from '@mui/icons-material'
import { IconButton } from '@mui/material';



function ThemeComponent(){

    const [darkMode, setDarkMode] = useState(false)
    const theme = createTheme({
      palette: {
      mode: darkMode ? "dark" : 'light'
    },
  })

    return (
    
        <ThemeProvider theme={theme}>




        </ThemeProvider>

    )
}
export default ThemeComponent;