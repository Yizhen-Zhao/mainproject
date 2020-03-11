import urllib.request
import ssl
import pandas as pd

ssl._create_default_https_context = ssl._create_unverified_context
df = pd.read_csv('ag4-short.csv')


for i in range(877, 1180):
    name = df.loc[i]['ID'].astype(str) + ".jpg"
    url = df.loc[i]['url']
    f = open(name, 'wb')
    f.write(urllib.request.urlopen(url).read())
    f.close()
  
