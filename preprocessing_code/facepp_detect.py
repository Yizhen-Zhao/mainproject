# -*- coding: utf-8 -*-
import urllib.request
import urllib.error
import time
import os
from pandas.core.frame import DataFrame

result = []
http_url = 'https://api-us.faceplusplus.com/facepp/v3/detect'
key = "7SC7a_278r7M4f27L6BxBU3fTe6njjWl"
secret = "AObaiKeR4pXVUL2pmNsrtiFdRVNXtyWE"
"""filepath = r"pictures"
"""
filedir = r"picture1" 
writepath = "facepp3.csv"
filelist = os.listdir(filedir)
for filename in filelist:
    filepath = os.path.join(filedir,filename)
    boundary = '----------%s' % hex(int(time.time() * 1000))
    data = []
    data.append('--%s' % boundary)
    data.append('Content-Disposition: form-data; name="%s"\r\n' % 'api_key')
    data.append(key)
    data.append('--%s' % boundary)
    data.append('Content-Disposition: form-data; name="%s"\r\n' % 'api_secret')
    data.append(secret)
    data.append('--%s' % boundary)
    fr = open(filepath, 'rb')
    data.append('Content-Disposition: form-data; name="%s"; filename=" "' % 'image_file')
    data.append('Content-Type: %s\r\n' % 'application/octet-stream')
    data.append(fr.read())
    fr.close()
    """data.append('--%s' % boundary)
    data.append('Content-Disposition: form-data; name="%s"\r\n' % 'return_landmark')
    data.append('1')
    """
    data.append('--%s' % boundary)
    data.append('Content-Disposition: form-data; name="%s"\r\n' % 'return_attributes')
    data.append(
        "gender,age,smiling,headpose,eyestatus,emotion,mouthstatus")
    data.append('--%s--\r\n' % boundary)

    for i, d in enumerate(data):
        if isinstance(d, str):
            data[i] = d.encode('utf-8')

    http_body = b'\r\n'.join(data)

    # build http request
    req = urllib.request.Request(url=http_url, data=http_body)
    # header
    req.add_header('Content-Type', 'multipart/form-data; boundary=%s' % boundary)

    try:
        # post data to server
        resp = urllib.request.urlopen(req, timeout = 10)
        # get response
        qrcont = resp.read()
        # if you want to load as json, you should decode first,
        # for example: json.loads(qrount.decode('utf-8'))
        """print(qrcont.decode('utf-8'))
        """
        dict = eval(qrcont)
        faces = dict['faces']
        for i in range(len(faces)):
            attribute = faces[i]['attributes']
            gender = attribute['gender']['value']
            age = attribute['age']['value']     
            smile = attribute['smile']['value']  
            pitch = attribute['headpose']['pitch_angle']
            roll = attribute['headpose']['roll_angle']
            yaw = attribute['headpose']['yaw_angle']
            eyes = attribute['eyestatus']['left_eye_status']['no_glass_eye_open']
            mouth = attribute['mouthstatus']['open']
            anger = attribute['emotion']['anger']
            fear = attribute['emotion']['fear']
            happiness = attribute['emotion']['happiness']
            neutral = attribute['emotion']['neutral']
            sadness = attribute['emotion']['sadness']
            result.append([filepath,gender,age,smile, pitch, roll, yaw, eyes, mouth, anger, fear, happiness, neutral, sadness])

    
    except urllib.error.HTTPError as e:
        print(e.read().decode('utf-8'))

DataFrame(result).to_csv(writepath, header=['filepath','gender','age','smile','pitch', 'roll', 'yaw', 'eyes','mouth','anger', 'fear', 'happiness', 'neutral', 'sadness'])
"""
header=['filepath','gender','age','smile','pitch', 'roll', 'yaw', 'eyes','mouth','anger', 'fear', 'happiness', 'neutral', 'sadness']
"""

