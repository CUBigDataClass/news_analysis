//Code is started from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/cards/MediaCard.js
/**************************************************
 * Title: MediaCard.js
 * Author: Olivier Tassinari, Kristoffer K., Matt
 * Date: 2020
 * Availability: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/cards/MediaCard.js
 ***************************************************/

import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const [news, setNews] = useState({...props.news});


  const clickToDetails = () => {
    history.push(`/news/${news._id}`);
  }

  useEffect(() => {
    setNews(props.news);
  }, [])


  return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={news.urlToImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {news.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {news.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={clickToDetails}>
              Find Out More
            </Button>
          </CardActions>
        </Card>
  );
}
