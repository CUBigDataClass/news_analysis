import React, { useState, useEffect } from 'react';
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
    const [newsArray, setNewsArray] = useState([{
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
        "content": "Closed sales of existing homes fell 3.7% in March to a seasonally adjusted annualized rate of 6.01 million units, according to the National Association of Realtors.\r\nThat is the slowest sales pace si… [+2328 chars]"
    },{
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters,Guy Faulconbridge,Lawrence White",
        "title": "Climate activists shatter 19 windows at HSBC HQ in London's Canary Wharf - Reuters UK",
        "description": "Climate activists shattered 19 windows at HSBC's (HSBA.L) headquarters in London's Canary Wharf on Thursday as part of a protest against the financing of what the group says is devastating climate change that threatens the planet.",
        "url": "https://www.reuters.com/world/uk/climate-activists-shatter-windows-hsbc-hq-londons-canary-wharf-2021-04-22/",
        "urlToImage": "https://www.reuters.com/resizer/Yhtt0owP4t7bl7UTxYirENKMLG8=/1200x628/smart/cloudfront-us-east-2.images.arcpublishing.com/reuters/JLWL5Z7XUFKATIXN6JPREMHRI4.jpg",
        "publishedAt": "2021-04-22T13:49:00Z",
        "content": "Climate activists shattered 19 windows at HSBC's (HSBA.L) headquarters in London's Canary Wharf on Thursday as part of a protest against the financing of what the group says is devastating climate ch… [+1774 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "American Air, Southwest Report Steep Losses, But See Demand Improving - Investor's Business Daily",
        "description": "Southwest said it'll add flights after reporting a smaller-than-expected loss.",
        "url": "https://www.investors.com/news/aal-stock-luv-stock-american-airlines-southwest-earnings-q1-2021/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2018/01/Stock-AmericanAirlines-04-company.jpg",
        "publishedAt": "2021-04-22T13:41:00Z",
        "content": "American Airlines (AAL) reported mixed first-quarter results while Southwest Airlines (LUV) beat forecasts earlier Thursday. AAL stock dipped while LUV stock rallied.\r\nXThe airlines reported the resu… [+4415 chars]"
    },{
        "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
        },
        "author": "Beth Mole",
        "title": "Contractor that ruined 15M doses of J&J vaccine hiked price of another by 800% - Ars Technica",
        "description": "FDA releases damning inspection report as lawmakers question ties to Trump admin.",
        "url": "https://arstechnica.com/science/2021/04/contractor-that-ruined-15m-doses-of-jj-vaccine-hiked-price-of-another-by-800/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/04/GettyImages-1232202654-760x380.jpeg",
        "publishedAt": "2021-04-22T12:23:29Z",
        "content": "Enlarge/ The Emergent BioSolutions plant, a manufacturing partner for Johnson &amp; Johnson's COVID-19 vaccine, in Baltimore, Maryland, on April 9, 2021. \r\n97 with 64 posters participating\r\nView more… [+6447 chars]"
    },{
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Gary Gastelu",
        "title": "Electric cars are faring well in crash tests and in real world accidents, here's why - Fox News",
        "description": "The Volvo XC40 Recharge and Ford Mustang Mach-E both performed well in the latest Insurance Institute for Highway Safety crash tests, and the organization says electric cars are impressive overall.",
        "url": "https://www.foxnews.com/auto/electric-cars-crash-tests-volvo-ford",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/04/mach-e.jpg",
        "publishedAt": "2021-04-22T12:00:47Z",
        "content": "The latest electric models from Volvo and Ford have received high marks from the Insurance Institute for Highway Safety (IIHS), which said electric cars as a group are performing well in its tests.\r\n… [+1204 chars]"
    }, {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Matthew J. Belvedere",
        "title": "5 things to know before the stock market opens Thursday - CNBC",
        "description": "U.S. stock futures were steady Thursday after Wall Street bounced back from a two-session losing streak.",
        "url": "https://www.cnbc.com/2021/04/22/5-things-to-know-before-the-stock-market-opens-thursday-april-22.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106868777-1618490819680-20210415_initial_claims_2021.png?v=1618490837",
        "publishedAt": "2021-04-22T11:49:53Z",
        "content": "Here are the most important news, trends and analysis that investors need to start their trading day:\r\n1. U.S. stock futures steady after a Wall Street comeback\r\nTraders working at the New York Stock… [+4654 chars]"
    }, {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "USA TODAY, Nathan Bomey, USA TODAY",
        "title": "Tesla's Autopilot can 'easily' be used to drive without anyone behind wheel, Consumer Reports warns",
        "description": "Tesla's Autopilot system can 'easily' be used to drive the automaker's vehicles without anyone behind the wheel, Consumer Reports said in a new study.",
        "url": "https://www.usatoday.com/story/money/cars/2021/04/22/consumer-reports-tesla-autopilot-texas-crash/7334489002/",
        "urlToImage": "https://www.gannett-cdn.com/-mm-/85afda1f2d12d33ef84d212f2f0f0481c13dff74/c=240-0-2640-1350/local/-/media/2021/04/18/USATODAY/usatsports/MotleyFool-TMOT-de89c229-tesla-model-s.jpg?width=1600&height=800&fit=crop",
        "publishedAt": "2021-04-22T16:20:18Z",
        "content": "The NTSB will investigate the deadly crash of a Tesla Model S car over the weekend. Elon Musk says autopilot was not turned on.\r\nVideo Elephant\r\nTesla's Autopilot system can \"easily\" be used to drive… [+5811 chars]"
    }])
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