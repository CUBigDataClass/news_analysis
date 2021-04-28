import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import PieChart from './PieChart';
import News from './News';
import LineChart from './LineChart';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import MapChart from "./MapChart";
import Tweets from "./tweets";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import image from'./image.png';
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#a0b0d9',
    },
    paper: {
        paddingBottom: 0,
    },
    title: {
        flexGrow: 1,
    },
    image: {
        width: 500,
        height: 320
    },
}));

function NewsPage() {
    const classes = useStyles();
    const history = useHistory();

    const clickToDetails = () => {
        history.push("/");
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button size="small" color="inherit" onClick={clickToDetails}>
                        Back to the HomePage
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spaceing={3}>
                <Grid style={{ padding: "2%" }} item xs={4}>
                    <Paper square className={classes.paper}>
                        <News/>
                    </Paper>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={3}>
                    <PieChart/>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={2}>
                    <img src={image} className={classes.image}/>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={6}>
                    <Paper square className={classes.paper}>
                        <Tweets/>
                    </Paper>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={6}>
                    <MapChart />
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={4}>
                    <LineChart/>
                </Grid>

            </Grid>



        </div>
    );
}

export default NewsPage;