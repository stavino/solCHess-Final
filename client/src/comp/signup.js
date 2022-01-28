import { Grid, Paper, IconButton, Card, Button, TextField, FormControl, Typography, Link } from "@mui/material";
import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState(
        {
            username:"",
            password:"",
        }
    );

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        const userCreds = {...formData};

        fetch(`http://localhost:3000/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        })
            .then(response => response.json())
            .then((user) => {
                console.log(user);
                setFormData({
                    username: "",
                    password: ""
                });
            });
    }

    return (
        <div>
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth id="login"> 
                            <Paper className="login-form" sx={
                            {borderRadius: "20px",
                            boxShadow: "0 0 20px 8px #d0d0d0;",
                            margin: "40%",
                            ml: "-22.5%",
                            height: "400px",
                            width: "500px",
                            borderStyle: "solid",
                            borderColor: "plum",
                            padding: "5%"
                            }}>
                       
                            <Typography><h1>Sign Up</h1><p>No email required!</p></Typography>
                                <TextField 
                                    fullWidth
                                    required 
                                    label="required" 
                                    placeholder="Username" 
                                    variant="outlined" 
                                    type="text" 
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleFormChange}></TextField>
                                <br></br><br></br>
                                <TextField 
                                    fullWidth 
                                    label="required" 
                                    placeholder="Password" 
                                    required 
                                    variant="outlined" 
                                    name="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    type="password" 
                                    id="password"
                                    ></TextField>
                                <br></br><br></br>
                                <IconButton><Button variant="contained" type="submit" id='submit-button'>submit</Button></IconButton>
                                <br></br>
                                <p>Already have an Account?</p>
                                <Link href="/login" >Login</Link>
                            </Paper>
                        </FormControl>
                    </form>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>


        </div>
    )
}
export default Signup;