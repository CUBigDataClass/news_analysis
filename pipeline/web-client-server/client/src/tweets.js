import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '136ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    title: {
        fontSize: 24,
    },
}));

function Tweets() {
    const classes = useStyles();
    const [tweets, setTweets] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const newsUrl = 'http://localhost:5000/tweets';
        fetch(`http://localhost:3000/news/${id}`)
            .then(() => {
                axios.get(newsUrl, {
                    params: {
                        id: id
                    }
                }).then(resp => {
                    resp.data.map((tweet) => {
                        setTweets( oldArray => [...oldArray, tweet._source]);
                    })
                })
            });
    }, [])

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    Tweets
                </Typography>
                <List className={classes.root}>
                    {
                        tweets.map((tweet) => (
                            <ListItem alignItems="flex-start">
                                <ListItemText primary={tweet.text} secondary={tweet.created_at}/>
                            </ListItem>)
                             )
                    }
                </List>
            </CardContent>
        </Card>
    );
}

export default Tweets;