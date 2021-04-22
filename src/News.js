import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
}));

function News() {
    const classes = useStyles();
    // const { news } =
    //     (props.location && props.location.state) || {};
    // console.log(news)
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    News Title
                </Typography>
                <Typography variant="body2" component="p">
                    News Body
                </Typography>
            </CardContent>

        </Card>
    );
}

export default News;