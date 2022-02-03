import { Paper, Grid } from "@mui/material"
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'
import { Image } from "@mui/icons-material"
import { useEffect, useState } from "react"
import HomepageCard from "./homepage-card"
import { Typography } from "@mui/material"

const HomePage = (props) => {



    return (
        
        <Grid container className="home-page">
            
            <Grid item xs={12}>
                <Typography>
                    {props.darkMode ? <div className="dark-welcome"><h1>Welcome to solCHESS</h1><img src={logo2} alt="logo" id="front-page-logo"/> </div> :
                    <div className="light-welcome"><h1>Welcome to solCHESS</h1><img src={logo} alt="logo" id="front-page-logo"/></div>}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <HomepageCard theme={props.theme} name='game' currentUser={props.currentUser}></HomepageCard>
            </Grid>
        
        
        
        
        
            
        </Grid>
    )
}
export default HomePage;