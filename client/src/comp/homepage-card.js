import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"
import chessImage from '../image/chess.jpeg'
import { useNavigate } from "react-router-dom";

const HomepageCard = (props) => {
    
    const navigate = useNavigate();
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (

    <Card className="homepage-card" sx={{ ml: "10px", mr: "10px", maxWidth: '250px', borderColor: props.darkMode ? "black" : "white", borderRadius: "20px", boxShadow: "0 0 20px 4px #b1b1b1;"}}>
      <CardActionArea onClick={() => {props.currentUser ? navigate(`/${props.name}`) : navigate('/login')}}>
        <CardMedia 
          component="img"
          height="140"
          image={chessImage}
          alt="play"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalize(props.name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
};



export default HomepageCard;