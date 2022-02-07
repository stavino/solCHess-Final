import { Paper, Button, IconButton } from "@mui/material"

const Matchmaking = function (){

    const newMatchFunction = function(){
        fetch('/matches', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('fdgdfgdgdfg')
        })
    }

    return (
        <Paper sx={{mt: "10%"}}>


            <h1>Current Matches</h1>
            <Button>New Match</Button>




        </Paper>
    )
}
export default Matchmaking;