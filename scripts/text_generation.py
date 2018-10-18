import pandas as pd
import numpy as np
import csv
import os
def populateStockTextTable():
    data = {
        'title': [
            'xDeals: A Silicon Valley Startup that finds the best deals online using ML',
            'xDeals: Online shopping reinvented'
        ],
        'body': [
            'We are a Silicon Valley startup that designed a machine learning algorithm to find the best deals of the internet and provide it onto one platform.'
            + 'The products on our website are at the lowest possible price. Come check us out!',
            'Looking for the best deals of the internet? We use machine learning algorithms to find the best deals of the internet'
            + ' and combine it all on this one website! Come check out xDeals!'
        ]
    }
    
    df = pd.DataFrame(data)
    df.to_csv('stock_text.tsv', sep='\t', index=True)


def getPostText():
    if not os.path.exists('stock_text.tsv'):
        populateStockTextTable()
    df = pd.read_csv('stock_text.tsv', sep='\t')
    title = np.random.choice(df['title'].values)
    body = np.random.choice(df['body'].values)
    return title, body