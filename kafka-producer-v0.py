
# Tweepy - Python library for accessing the Twitter API.
import tweepy

# TextBlob - Python library for processing textual data
from textblob import TextBlob

# Pandas - Data manipulation and analysis library
import pandas as pd

# NumPy - mathematical functions on multi-dimensional arrays and matrices
import numpy as np

# Regular Expression Python module
import re

import twitter_credentials
import json
import requests
import datetime as DT

import RAKE
import nltk
from nltk.corpus import stopwords


from kafka import KafkaProducer
import time

# import elasticsearch
# from elasticsearch import Elasticsearch,helpers


# Twitter API config
twitterApiKey = twitter_credentials.CONSUMER_KEY
twitterApiSecret = twitter_credentials.CONSUMER_SECRET
twitterApiAccessToken = twitter_credentials.ACCESS_TOKEN
twitterApiAccessTokenSecret = twitter_credentials.ACCESS_TOKEN_SECRET


# Authenticate
auth = tweepy.OAuthHandler(twitterApiKey,twitterApiSecret)
auth.set_access_token(twitterApiAccessToken, twitterApiAccessTokenSecret)
twetterApi = tweepy.API(auth, wait_on_rate_limit = True)

stopwords = stopwords.words('english')
rake_object = RAKE.Rake(stopwords)

keywords = ['officials issued citations', 'coronavirus violations overnight', 'ohio investigative unit']

APIKEY=""
url = ('https://newsapi.org/v2/top-headlines?country=us&category=business&'
       'apiKey='+APIKEY)

# serialize data for kafka
def json_serializer(data):
    return json.dumps(data).encode("utf-8")

producer = KafkaProducer(bootstrap_servers=['10.128.0.57:9092'], value_serializer=json_serializer)

response = requests.get(url)
# issue: need to remove duplicates
search_keys = []
search_indices = []
for k in response.json()['articles']:
    if k['description'] != None:
        keywords_pre = rake_object.run(k['description'][:-1]+k['title'],maxWords=5,minFrequency=1)
        keywords = list(map(lambda x: x[0],keywords_pre))[:3]
        index = '-'.join(keywords).replace(' ', '-')
        search_indices.append(index)
        keywords_or = '\"'+'\" OR \"'.join(keywords)+'\"'
        search_keys.append(keywords_or)
        # res1 = es.index(index='news_v2',id=index,body=k)
        producer.send("news_v2", k)

for i in search_keys[7:]:
    print(i)

def get_text(data):
    if data.get("extended_tweet")!=None:
        return data.get("extended_tweet").get("full_text") 
    elif data.get("retweeted_status") != None:
        if data.get("retweeted_status").get("extended_tweet") !=None:
            return data.get("retweeted_status").get("extended_tweet").get("full_text") 
        else:
            return data.get("retweeted_status").get("text") 
    else:
        return data.get("text") 


if __name__ == "__main__":
    while 1 == 1:
        for idx,keywords in enumerate(search_keys):
            test=keywords
            date_since = str(DT.date.today()-DT.timedelta(days=14))
            print(keywords)
            tweets = tweepy.Cursor(twetterApi.search,
                        q=keywords,
                        lang="en",
                        since=date_since).items(2000)
            index = search_indices[idx]
            for t in tweets:
                try:
                    data=t._json
                    text = get_text(data)
                    data_clean = {
                        'news_id':index,
                        "created_at":data.get("created_at"),
                        'text':text,
                        'sentiment': model(text)
                    }
                    # res = es.index(index='tweets_v2',id=data["id"],body=data_clean)
                    producer.send("tweets_v2", data_clean)
                except BaseException as e:
                    print(data)
                    print("Error on_data %s" % str(e))

