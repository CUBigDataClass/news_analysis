import React, {useEffect, useState} from 'react';
import MediaCard from './MediaCard'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Time from './DateTime';


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
    const [newsArray, setNewsArray] = useState([1, 1, 1, 1, 1, 1])
    const classes = useStyles();
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
                    newsArray.map(() => (
                        <Grid style={{ padding: "2%" }} item xs={4}>
                            <MediaCard/>
                        </Grid>))
                }
            </Grid>

        </div>
    );
}

export default HomwPage;