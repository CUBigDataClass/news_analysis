import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 24,
    },
}));

function News(props) {
    const classes = useStyles();
    const [news, setNews] = useState({
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Diana Olick",
        "title": "Existing home sales suffer second straight monthly decline as tight supply pushes prices higher - CNBC",
        "description": "Low supply continues to push prices ever higher. The median price of an existing home sold in March was $329,100, a 17.2% increase from March 2020.",
        "url": "https://www.cnbc.com/2021/04/22/home-sales-fell-in-march-as-tight-supply-pushed-prices-higher.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106872307-1619099233443-gettyimages-1310155848-dscf6950_2021033133456639.jpeg?v=1619099277",
        "publishedAt": "2021-04-22T14:00:06Z",
        "content": "Closed sales of existing homes fell 3.7% in March to a seasonally adjusted annualized rate of 6.01 million units, according to the National Association of Realtors.\r\nThat is the slowest sales pace si… [+2328 chars]",
        "full_content": "Closed sales of existing homes fell 3.7% in March to a seasonally adjusted annualized rate of 6.01 million units, according to the National Association of Realtors.\r\nThat is the slowest sales pace since August and the second straight month of declines.\r\nStill, sales were 12.3% higher than March 2020, when transactions were falling due to the Covid pandemic.\r\nRealtors say the monthly numbers are dropping due to limited supply. The demand is there. Homes are selling in an average of just 18 days, which is considered an extremely fast rate.\r\n“If the demand was retreating, then we would see fewer multiple offers, but we know that multiple offers are widely prevalent in today’s market,” said Lawrence Yun, chief economist for the Realtors.\r\nThe supply of homes for sale fell 28.2% from a year ago. There were just 1.07 million homes for sale at the end of month, representing a 2.1-month supply at the current sales pace.\r\nLow supply continues to push prices ever higher. The median price of an existing home sold in March was $329,100, a 17.2% increase from March 2020. That is the highest price on record and the fastest pace of appreciation.\r\nSome of that gain is due to the fact that there are more homes selling on the higher end of the market, therefore skewing the median higher. Overall, however, prices are significantly higher.\r\n“Perhaps the record stock market is providing the financial wherewithal to purchase these million-dollar homes,” Yun said.\r\nThese closed sales represent contracts signed in January and February. Mortgage rates started this year near a record low but then began climbing steeply in February and throughout most of March. As rates rose, potential buyers lost purchasing power, and some were likely sidelined.\r\nMore homes have been coming on the market in the past few weeks, but the market is still incredibly lean, especially on the low end. Higher-end home listings are more plentiful.\r\n“Although homes are far from plentiful, housing supply could be reaching a turning point thanks to a surge in new listings just as the housing market hits the best time of the year to sell a home,” said Danielle Hale, chief economist for realtor.com. “Also, builders are finding a way to build a growing number of new homes despite challenges.”\r\nBuilders are, however, still producing well below demand levels, as prices for land, labor and materials rise. Lumber hit several new high’s just this month. Some builders are delaying projects so they’re not buying materials at the peak of the market."
    });

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
                    {news.full_content}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default News;