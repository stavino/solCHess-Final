import { Paper, Grid } from "@mui/material"
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'
import { Image } from "@mui/icons-material"
import { useEffect, useState } from "react"

const HomePage = (props) => {



    return (
        <div>
        <Grid container>
            
            <Paper className="home-page" color='inherit'  sx={{}} >
            {props.darkMode ? <img src={logo} alt="logo" id="front-page-logo"/> :
            <img src={logo2} alt="logo" id="front-page-logo"/>}
        
        
        
        
        
        
        
            </Paper>
        </Grid>
        </div>
    )
}
export default HomePage;