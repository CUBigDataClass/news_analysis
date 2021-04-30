import React, {useState, useEffect} from 'react';
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
import image from './image.png';
import image2 from './image2.png';
import {useParams} from "react-router-dom";
import homeowner from './homeowner.png';
import covid from './covid.png';
import sharePrice from './shareprice.png'

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
    image2: {
        width: 650,
        height: 420
    },
    image: {
        width: 480,
        height: 320
    },
}));

function NewsPage() {
    const classes = useStyles();
    const history = useHistory();
    const [newsId, setNewsId] = useState();
    const clickToDetails = () => {
        history.push("/");
    }
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/news/${id}`)
            .then(() => {
                setNewsId(id)
            });
    }, [])

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
                {
                    newsId === 'skipping-second-covid-19-vaccine-shot-second-dosemillions-appear-moderna-shot'
                    ? <img src={covid} className={classes.image}/>
                    : (newsId === 'share-price-provides-unusual-boost-wall-street-journal-videogame-retailer')
                    ? <img src={sharePrice} className={classes.image}/>
                    : <img src={homeowner} className={classes.image}/>
                }
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={6}>
                    <Paper square className={classes.paper}>
                        <Tweets/>
                    </Paper>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={6}>
                {
                    newsId === 'skipping-second-covid-19-vaccine-shot-second-dosemillions-appear-moderna-shot'
                    ? <img src={image2} className={classes.image2}/>
                    : <img src={image} className={classes.image2}/>
                }
                </Grid>
                {/*<Grid style={{ padding: "2%" }} item xs={6}>*/}
                {/*    <LineChart/>*/}
                {/*</Grid>*/}
                {/*<Grid style={{ padding: "2%" }} item xs={6}>*/}
                {/*    <MapChart/>*/}
                {/*</Grid>*/}

            </Grid>



        </div>
    );
}

export default NewsPage;