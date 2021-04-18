//https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/cards/MediaCard.js
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FireImage from './maxim-tajer-x3S1aGQNgro-unsplash.jpg';
import ReactCardFlip from "react-card-flip";
import PieChart from "./tweetsAnalysis";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    paddingTop: '10.25%',
  },
});

export default function MediaCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const clickToDetails = () => {
    history.push("/news");
  }

  return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={FireImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hot News
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={clickToDetails}>
              Find Out More
            </Button>
            <Button size="small" color="primary" onClick={handleClick}>
              Find Out More
            </Button>
          </CardActions>
        </Card>
        <div>
          <PieChart></PieChart>
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
  );
}
