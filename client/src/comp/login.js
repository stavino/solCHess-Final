import { Grid, Paper, IconButton, Card, Button, TextField, FormControl, Typography, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = function(props){

const [formData, setFormData] =useState({
    username: "",
    password: "",
});

let navigate = useNavigate();

    const handleFormChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        const userCreds = {...formData};

        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
          })
            .then((r) => {
                if(r.ok){
                    r.json().then((user) => {
                        props.setCurrentUser(user);
                        navigate('/dashboard');
                    });
                } else {
                    r.json().then((errors) => {
                    console.error(errors);
                })
            }
            });
        };
    return (
<div >
            <Grid container className="login">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <form onSubmit={handleSubmit}>
                    <FormControl  fullWidth id="login"> 
                        <Paper className="login-form" sx={
                        {borderRadius: "20px",
                         boxShadow: "0 0 20px 8px #d0d0d0;",
                         margin: "40%",
                         ml: "-22.5%",
                         height: "400px",
                         width: "400px",
                         borderStyle: "solid",
                         borderColor: props.darkMode ? "black" : "white",
                         padding: "5%"
                         }}>
                       
                            <Typography><h1>Sign In</h1><br></br></Typography>
                                <TextField 
                                    fullWidth 
                                    required 
                                    label="required" 
                                    name="username"
                                    placeholder="Username"
                                    variant="outlined"
                                    type="text"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleFormChange}>
                                    
                                    </TextField>
                                <br></br><br></br>
                                <TextField 
                                    fullWidth
                                    label="required" 
                                    placeholder="Password" 
                                    required variant="outlined" 
                                    type="password" 
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleFormChange}>
                                </TextField>
                                <br></br><br></br>
                                <IconButton><Button variant="contained" type="submit" id='submit-button'>submit</Button></IconButton>
                                <br></br>
                                <p>Don't have an account?</p>
                                <Link href="/signup">Sign Up</Link>
                        </Paper>
                    </FormControl></form>
                </Grid>
                <Grid item xs={2}></Grid>





            </Grid>
</div>
        
    )
}
export default Login;