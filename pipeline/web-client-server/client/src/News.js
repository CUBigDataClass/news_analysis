import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 24,
    },
}));

function News() {
    const classes = useStyles();
    const [news, setNews] = useState({
        "source": {
            "id": null,
            "name": ""
        },
        "author": "",
        "title": "",
        "description": "",
        "url": "",
        "urlToImage": "",
        "publishedAt": "",
        "content": ""
    });

    const { id } = useParams();

    useEffect(() => {
        const newsUrl = 'http://localhost:5000/specific-news';
        fetch(`http://localhost:3000/news/${id}`)
            .then(() => {
                axios.get(newsUrl, {
                    params: {
                        id: id
                    }
                }).then(resp => {
                    setNews(resp.data[0]._source);
                    })
                });
    }, [])

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    {news.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {news.author}
                </Typography>
                <Typography variant="body2" component="p">
                    {news.content}
                </Typography>

                <a href={news.url}>Found Out More</a>


            </CardContent>
        </Card>
    );
}

export default News;