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

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
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
            <Button size="small" color="primary" onClick={clickToDetails}>
                Back to the HomePage
            </Button>

            <Grid container spaceing={3}>
                <Grid style={{ padding: "2%" }} item xs={4}>
                    <News/>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={3}>
                    <PieChart/>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={4}>
                    <LineChart/>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={6}>
                    <Tweets/>
                </Grid>
                <Grid style={{ padding: "2%" }} item xs={6}>
                    <MapChart />
                </Grid>

            </Grid>



        </div>
    );
}

export default NewsPage;