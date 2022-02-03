import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"
import chessImage from '../image/chess.jpeg'
import { useNavigate } from "react-router-dom";

const HomepageCard = (props) => {
    
    const navigate = useNavigate();

    return (

    <Card className="homepage-card" sx={{ maxWidth: '250px', borderColor: props.theme.palette.color }}>
      <CardActionArea onClick={() => {props.currentUser ? navigate(`/${props.name}`) : navigate('/login')}}>
        <CardMedia
          component="img"
          height="140"
          image={chessImage}
          alt="play"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Play
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
};



export default HomepageCard;