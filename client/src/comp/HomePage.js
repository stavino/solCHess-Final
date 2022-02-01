import { Paper, Grid } from "@mui/material"
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'
import { Image } from "@mui/icons-material"
import { useEffect, useState } from "react"
import HomepageCard from "./homepage-card"

const HomePage = (props) => {


    return (
        <div className="home-page">
        <Grid container>
            
            <Grid item xs={12}>
                <h1>Welcome to solCHESS{props.darkMode ? <img src={logo} alt="logo" id="front-page-logo"/> :
                <img src={logo2} alt="logo" id="front-page-logo"/>}</h1>
            </Grid>
            <Grid item xs={6}>
                <HomepageCard name='Quickplay'></HomepageCard>
            </Grid>
        
        
        
        
        
            
        </Grid>
        </div>
    )
}
export default HomePage;