import { Grid, Paper, IconButton, Card, Button, TextField, FormControl, Typography, Link } from "@mui/material";

const Login = function(){
    return (
<div >
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
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
                       
                            <Typography><h1>Sign In</h1></Typography>
                                <TextField fullWidth required label="required" placeholder="Username" variant="outlined" type="text" id="username"></TextField>
                                <br></br><br></br>
                                <TextField fullWidth label="required" placeholder="Password" required variant="outlined" type="text" id="password"></TextField>
                                <br></br><br></br>
                                <IconButton><Button variant="contained" type="submit" id='submit-button'>submit</Button></IconButton>
                                <br></br>
                                <p>Don't have an account?</p>
                                <Link >Sign Up</Link>
                        </Paper>
                    </FormControl>
                </Grid>
                <Grid item xs={2}></Grid>





            </Grid>
</div>
        
    )
}
export default Login;