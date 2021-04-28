import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Time from './DateTime';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        marginTop:3,
    },
    title: {
        textAlign: 'center',
    },
    subTitle: {
        fontStyle: 'italic',
        textAlign: 'center',
    },
    card: {
        textAlign: 'center',
    },
    resultsGrid: {
        flexGrow: 1,
    },
}));

function HomePage() {
    const classes = useStyles();
    const [newsArray, setNewsArray] = useState([])

    const url = 'http://localhost:5000/all-news';
    useEffect(() => {
        axios.get(url).then(resp => {
            resp.data.map((news) => {
                news._source['_id'] = news._id;
                setNewsArray( oldArray => [...oldArray, news._source]);
            })
        });
    }, [])

    return (
        <div className={classes.root}>
            <Typography variant='h1' className={classes.title}>
                Latest Hot News
            </Typography>
            <Typography variant='h3' className={classes.subTitle}>
                <Time></Time>
            </Typography>

            <Grid container className={classes.resultsGrid}>
                {
                    newsArray.map((news) => (
                        <Grid style={{ padding: "2%" }} item xs={4}>
                            <MediaCard news={news}/>
                        </Grid>))
                }
            </Grid>

        </div>
    );
}

export default HomePage;