from requests_html import HTMLSession
import pandas as pd 
import re
import csv
data=pd.read_csv('newdata.csv', sep=';', header=0)
df = data
i = 0
#while i < len(data):
for i in range(len(data)):

    this_row = data.loc[i]
    artist_url = this_row[11]

    session = HTMLSession()
    r = session.get(artist_url)
    text = r.html.text
    MatchObj = re.search( r'Nationality:\s(.*?)\n', text, re.M|re.I)
    if MatchObj:
        Nationality = MatchObj.group(1)
        data.loc[i,'Nationality'] = Nationality

df.to_csv('newresult1.csv', sep=";")
