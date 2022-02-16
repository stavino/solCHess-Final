import { Paper, Grid } from "@mui/material"
import logo from '../image/logo.png'
import logo2 from '../image/white_logo.jpeg'
import { Image } from "@mui/icons-material"
import { useEffect, useState } from "react"
import HomepageCard from "./homepage-card"
import { Typography } from "@mui/material"
import TextInput from "./TextInput"

const HomePage = (props) => {

const [passUpMessage, setPassUpMessage] = useState('')
const [messages, setMessages] = useState([])
const fetchGeneralChat = function(){
    fetch('/messages')
    .then(response => response.json())
    .then(r => setMessages(r))
}
 useEffect(fetchGeneralChat, [])



 const sendMessageFunction = function(){
     fetch('/messages', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id: props.currentUser.id, room_id: '2', content: passUpMessage})
    })
    .then((r) => {
        if(r.ok){
            r.json().then((response) => {
                // setArrayOfCurrentMatches([response, ...arrayOfCurrentMatches])
                // window.location.reload();
                console.log(response)
            });
        } else {
            r.json().then((errors) => {
            console.error(errors);
        })
    }
    })
 }

    return (
        
        <Grid container className="home-page">
            
            <Grid item xs={12}>
                <Typography>
                    {props.darkMode ? <div className="dark-welcome"><h1><img src={logo2} alt="logo" id="front-page-logo"/>Welcome to solCHESS<img src={logo2} alt="logo" id="front-page-logo"/></h1><h4>Solana's Premier Chess Community</h4> </div> :
                    <div className="light-welcome"><h1><img src={logo} alt="logo" id="front-page-logo"/>Welcome to solCHESS<img src={logo} alt="logo" id="front-page-logo"/></h1><h4>Solana's Premier Chess Community</h4></div>}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <HomepageCard darkMode={props.darkMode} theme={props.theme} name='matchmaking' currentUser={props.currentUser}></HomepageCard>
            </Grid>
            <Grid item xs={6}>
                <HomepageCard darkMode={props.darkMode} theme={props.theme} name='dashboard' currentUser={props.currentUser}></HomepageCard>
            </Grid>
            <Grid item xs={6}>
                <HomepageCard darkMode={props.darkMode} theme={props.theme} name='game' currentUser={props.currentUser}></HomepageCard>
            </Grid>
        <Grid item xs={12} >
        {/* <iframe title='discord' src="https://discord.com/widget?id=943187849673572402&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
        
        <Paper className="general-chat" sx={
            {
                borderRadius: "20px",
                boxShadow: "0 0 20px 8px #d0d0d0;",
                borderStyle: "solid",
                borderColor: props.darkMode ? "black" : "white",
                padding: "5%"}}>
            <Paper fullWidth sx={{borderColor: props.darkMode ? "black" : "white", borderStyle: 'groove', height: '600px', overflowY: 'scroll', scrollbarColor: props.darkMode ? "black black" : "white white"}}>
            {messages.map(
                (message) => { 
                    if(message.room.id === 2){
                    return (
                        <p className='message' key={message.id}>{message.user.username}: {message.content}</p>
                    )}
                })}
            </Paper>
            <TextInput setPassUpMessage={setPassUpMessage} sendMessageFunction={sendMessageFunction}  darkMode={props.darkMode}></TextInput>
        </Paper>

        </Grid>
        
        
        
            
        </Grid>
    )
}
export default HomePage;