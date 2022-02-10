import { Paper, Button, IconButton } from "@mui/material"
import { useState, useEffect } from "react"

const Matchmaking = function (props){

    const [arrayOfCurrentMatches, setArrayOfCurrentMatches] = useState([])

    function getInitialMatches(){
        fetch('/matches')
        .then(response => response.json())
        .then(r => setArrayOfCurrentMatches(r))
    }

    useEffect(getInitialMatches, [])

    const newMatchFunction = function(){
        fetch('/matches', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({player1_id: props.currentUser.id, player2_id: '1'})
        })
        .then((r) => {
            if(r.ok){
                r.json().then((response) => {
                    // setArrayOfCurrentMatches([response, ...arrayOfCurrentMatches])
                    window.location.reload();
                });
            } else {
                r.json().then((errors) => {
                console.error(errors);
            })
        }
        })
    }

    


    return (
        <Paper sx={{mt: "10%"}}>


            <h1>Current Matches</h1>
            <Button onClick={newMatchFunction}>New Match</Button>
        {arrayOfCurrentMatches.map(
            (match) => {
                return (
                    <Paper key={match.id} className="match-listing">
                        <h1>{match.player1.username}</h1>
                        <Button>challenge</Button>
                    </Paper>
                )
            })}



        </Paper>
    )
}
export default Matchmaking;