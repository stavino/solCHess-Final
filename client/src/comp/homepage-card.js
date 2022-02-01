import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"
import chessImage from '../image/chess.jpeg'

const HomepageCard = (props) => {
    
    
    return (

    <Card className="homepage-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
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