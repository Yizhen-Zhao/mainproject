/*
var ipAddress = null;

$(document).ready(function () {
    $.ajax({
        url: 'asset/js/data/data.json',\
        async: false,\
        success: function (data1) {
            ipAddress = data1.ip;
            console.log(data1[0]);
        }
    });
});
*/

var data = '[{\
    "ID": 8,\
    "gender": "Female",\
    "age": 37,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Rogier van der Weyden",\
    "Title": "Portrait of a Young Woman in a Pinned Hat",\
    "area": "Europe",\
    "Year": 1435,\
    "url": "http://use2-uploads2.wikiart.org/images/rogier-van-der-weyden/portrait-of-a-young-woman-in-a-pinned-hat-1435.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/rogier-van-der-weyden",\
    "smile": "no",\
    "smiledetailed": 11,\
    "pitch": "20.457.876",\
    "roll": "28.827.555",\
    "yaw": "-30.550.234",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": " closed",\
    "mouthdetailed": 0,\
    "happy": 7,\
    "neutral": 80.74,\
    "sadness": 19.072\
},{\
    "ID": 9,\
    "gender": "Male",\
    "age": 36,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Konrad Witz",\
    "Title": "The Synagoge",\
    "area": "Europe",\
    "Year": 1435,\
    "url": "http://use2-uploads3.wikiart.org/images/konrad-witz/the-synagoge.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/konrad-witz",\
    "smile": "no",\
    "smiledetailed": 6.699,\
    "pitch": "13.351.406",\
    "roll": 322.023,\
    "yaw": "-36.152.824",\
    "eyes": "closed",\
    "eyesdetailed": 34.136,\
    "mouth": "closedm",\
    "mouthdetailed": 19.367,\
    "happy": 37,\
    "neutral": 11.134,\
    "sadness": 87.653\
},{\
    "ID": 19,\
    "gender": "Male",\
    "age": 35,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Pisanello",\
    "Title": "Portrait of a Princess of the House of Este",\
    "area": "Europe",\
    "Year": 1449,\
    "url": "http://use2-uploads1.wikiart.org/images/pisanello/portrait-of-a-princess-of-the-house-of-este-1449.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/pisanello",\
    "smile": "no",\
    "smiledetailed": 11.847,\
    "pitch": 0.6687591,\
    "roll": "-7.292.704",\
    "yaw": "87.605.446",\
    "eyes": "closed",\
    "eyesdetailed": 17,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 34.022,\
    "neutral": 34.427,\
    "sadness": 4.122\
},{\
    "ID": 21,\
    "gender": "Male",\
    "age": 33,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Rogier van der Weyden",\
    "Title": "Saint Ivo",\
    "area": "Europe",\
    "Year": 1450,\
    "url": "http://use2-uploads6.wikiart.org/images/rogier-van-der-weyden/saint-ivo-1450.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/rogier-van-der-weyden",\
    "smile": "no",\
    "smiledetailed": 26,\
    "pitch": "5.809.454",\
    "roll": "15.207.143",\
    "yaw": "-47.900.208",\
    "eyes": "open",\
    "eyesdetailed": 93.22,\
    "mouth": "closedm",\
    "mouthdetailed": 73,\
    "happy": 0,\
    "neutral": 99.989,\
    "sadness": 9\
},{\
    "ID": 29,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Rogier van der Weyden",\
    "Title": "Portrait of a Woman",\
    "area": "North",\
    "Year": 1464,\
    "url": "http://use2-uploads7.wikiart.org/images/rogier-van-der-weyden/portrait-of-a-woman-1464.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/rogier-van-der-weyden",\
    "smile": "no",\
    "smiledetailed": 335,\
    "pitch": "71.069.736",\
    "roll": "-11.336.461",\
    "yaw": "25.568.981",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1,\
    "neutral": 25.885,\
    "sadness": 74.1\
},{\
    "ID": 33,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Petrus Christus",\
    "Title": "Portrait of a Young Girl",\
    "area": "Europe",\
    "Year": 1470,\
    "url": "http://use2-uploads1.wikiart.org/images/petrus-christus/portrait-of-a-young-girl.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/petrus-christus",\
    "smile": "no",\
    "smiledetailed": 2.379,\
    "pitch": "17.973.322",\
    "roll": "-8.167.775",\
    "yaw": "1.989.075",\
    "eyes": "open",\
    "eyesdetailed": 99.888,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1.61,\
    "neutral": 92.433,\
    "sadness": 224\
},{\
    "ID": 34,\
    "gender": "Male",\
    "age": 54,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Dirk Bouts",\
    "Title": "Portrait of a Man",\
    "area": "Europe",\
    "Year": 1470,\
    "url": "http://use2-uploads7.wikiart.org/images/dirk-bouts/portrait-of-a-man.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/dirk-bouts",\
    "smile": "yes",\
    "smiledetailed": 587,\
    "pitch": "22.612.307",\
    "roll": "-12.767.968",\
    "yaw": "-23.770.748",\
    "eyes": "open",\
    "eyesdetailed": 99.878,\
    "mouth": "openm",\
    "mouthdetailed": 244,\
    "happy": 853,\
    "neutral": 98.875,\
    "sadness": 162\
},{\
    "ID": 35,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Antonello da Messina",\
    "Title": "Virgin of the Annunciation",\
    "area": "Europe",\
    "Year": 1473,\
    "url": "http://use2-uploads4.wikiart.org/images/antonello-da-messina/virgin-of-the-annunciation-1473.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/antonello-da-messina",\
    "smile": "no",\
    "smiledetailed": 2.254,\
    "pitch": "4.438.597",\
    "roll": "-16.089.224",\
    "yaw": "14.105.151",\
    "eyes": "open",\
    "eyesdetailed": 99.952,\
    "mouth": "closedm",\
    "mouthdetailed": 6,\
    "happy": 1,\
    "neutral": 99.937,\
    "sadness": 27\
},{\
    "ID": 44,\
    "gender": "Male",\
    "age": 33,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Jean Hey",\
    "Title": "Portrait of Charles II of Bourbon",\
    "area": "Europe",\
    "Year": 1485,\
    "url": "http://use2-uploads3.wikiart.org/images/jean-hey/portrait-of-charles-ii-of-bourbon.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-hey",\
    "smile": "yes",\
    "smiledetailed": 138,\
    "pitch": 0.75412375,\
    "roll": "-52.498.727",\
    "yaw": "4.314.857",\
    "eyes": "open",\
    "eyesdetailed": 99.165,\
    "mouth": "closedm",\
    "mouthdetailed": 271,\
    "happy": 9.173,\
    "neutral": 90.411,\
    "sadness": 3\
},{\
    "ID": 48,\
    "gender": "Female",\
    "age": 22,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Domenico Ghirlandaio",\
    "Title": "Portrait of a Girl",\
    "area": "Europe",\
    "Year": 1490,\
    "url": "http://use2-uploads0.wikiart.org/images/domenico-ghirlandaio/portrait-of-a-girl.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/domenico-ghirlandaio",\
    "smile": "no",\
    "smiledetailed": 9,\
    "pitch": "11.033.949",\
    "roll": "36.345.365",\
    "yaw": "-3.421.659",\
    "eyes": "open",\
    "eyesdetailed": 99.92,\
    "mouth": "closedm",\
    "mouthdetailed": 1.169,\
    "happy": 3,\
    "neutral": 93.235,\
    "sadness": 6.555\
},{\
    "ID": 49,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Jean Hey",\
    "Title": "Portrait of Margaret of Austria (Portrait of a Young Princess)",\
    "area": "Europe",\
    "Year": 1491,\
    "url": "http://use2-uploads5.wikiart.org/images/jean-hey/portrait-of-margaret-of-austria-portrait-of-a-young-princess-1.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-hey",\
    "smile": "yes",\
    "smiledetailed": 945,\
    "pitch": "8.660.229",\
    "roll": "-23.547.354",\
    "yaw": "-4.736.163",\
    "eyes": "open",\
    "eyesdetailed": 99.995,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 744,\
    "neutral": 69.873,\
    "sadness": 28.172\
},{\
    "ID": 52,\
    "gender": "Male",\
    "age": 46,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Sandro Botticelli",\
    "Title": "Portrait of Dante",\
    "area": "South",\
    "Year": 1495,\
    "url": "http://use2-uploads8.wikiart.org/images/sandro-botticelli/portrait-of-dante(1).jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/sandro-botticelli",\
    "smile": "no",\
    "smiledetailed": 7.282,\
    "pitch": "-19.155.623",\
    "roll": -0.6833689,\
    "yaw": "8.228.741",\
    "eyes": "closed",\
    "eyesdetailed": 259,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 134,\
    "neutral": 191,\
    "sadness": 1.531\
},{\
    "ID": 55,\
    "gender": "Male",\
    "age": 26,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Leonardo da Vinci",\
    "Title": "The Lady with an Ermine (Cecilia Gallerani)",\
    "area": "Europe",\
    "Year": 1496,\
    "url": "http://use2-uploads8.wikiart.org/images/leonardo-da-vinci/the-lady-with-the-ermine-cecilia-gallerani-1496.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/leonardo-da-vinci",\
    "smile": "no",\
    "smiledetailed": 6.754,\
    "pitch": "10.513.847",\
    "roll": "-40.147.166",\
    "yaw": "-18.761.768",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1.967,\
    "neutral": 98.015,\
    "sadness": 0\
},{\
    "ID": 57,\
    "gender": "Female",\
    "age": 41,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Vittore Carpaccio",\
    "Title": "Portrait of a Woman",\
    "area": "Europe",\
    "Year": 1498,\
    "url": "http://use2-uploads3.wikiart.org/images/vittore-carpaccio/portrait-of-a-woman-1498.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/vittore-carpaccio",\
    "smile": "no",\
    "smiledetailed": 6.133,\
    "pitch": "6.351.633",\
    "roll": "1.640.832",\
    "yaw": "37.688.713",\
    "eyes": "open",\
    "eyesdetailed": 99.811,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 0,\
    "neutral": 99.638,\
    "sadness": 301\
},{\
    "ID": 60,\
    "gender": "Female",\
    "age": 28,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Pinturicchio",\
    "Title": "Portrait of a Boy",\
    "area": "Europe",\
    "Year": 1500,\
    "url": "http://use2-uploads5.wikiart.org/images/pinturicchio/portrait-of-a-boy-1500.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/pinturicchio",\
    "smile": "no",\
    "smiledetailed": 61,\
    "pitch": "44.287.553",\
    "roll": "9.237.573",\
    "yaw": "37.988.182",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1.038,\
    "neutral": 77.428,\
    "sadness": 10.235\
},{\
    "ID": 61,\
    "gender": "Female",\
    "age": 27,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Giovanni Antonio Boltraffio",\
    "Title": "Portrait of a Lady as St. Lucy",\
    "area": "Europe",\
    "Year": 1500,\
    "url": "http://use2-uploads5.wikiart.org/images/giovanni-antonio-boltraffio/portrait-of-a-lady-as-st-lucy-1500.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/giovanni-antonio-boltraffio",\
    "smile": "no",\
    "smiledetailed": 571,\
    "pitch": "10.091.566",\
    "roll": 0.22535461,\
    "yaw": "25.463.768",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 58.761,\
    "neutral": 40.255,\
    "sadness": 892\
},{\
    "ID": 63,\
    "gender": "Female",\
    "age": 27,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Piero di Cosimo",\
    "Title": "A Young Man",\
    "area": "Europe",\
    "Year": 1500,\
    "url": "http://use2-uploads2.wikiart.org/images/piero-di-cosimo/a-young-man-1500.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/piero-di-cosimo",\
    "smile": "no",\
    "smiledetailed": 251,\
    "pitch": "6.960.412",\
    "roll": "-4.446.646",\
    "yaw": "26.976.095",\
    "eyes": "open",\
    "eyesdetailed": 83.601,\
    "mouth": "closedm",\
    "mouthdetailed": 25,\
    "happy": 23,\
    "neutral": 99.974,\
    "sadness": 1\
},{\
    "ID": 69,\
    "gender": "Female",\
    "age": 39,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Gerard David",\
    "Title": "The Angel of the Annunciation",\
    "area": "Europe",\
    "Year": 1506,\
    "url": "http://use2-uploads5.wikiart.org/images/gerard-david/the-angel-of-the-annunciation-1.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/gerard-david",\
    "smile": "no",\
    "smiledetailed": 47,\
    "pitch": "8.369.109",\
    "roll": "11.789.359",\
    "yaw": "-47.657.017",\
    "eyes": "open",\
    "eyesdetailed": 97.296,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 1,\
    "neutral": 99.743,\
    "sadness": 256\
},{\
    "ID": 70,\
    "gender": "Male",\
    "age": 39,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Andrea Solario",\
    "Title": "Portrait of Charles d&#39;Amboise",\
    "area": "Europe",\
    "Year": 1507,\
    "url": "http://use2-uploads1.wikiart.org/images/andrea-solario/portrait-of-charles-d-amboise-1507.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/andrea-solario",\
    "smile": "no",\
    "smiledetailed": 3.745,\
    "pitch": "58.322.473",\
    "roll": "-3.812.924",\
    "yaw": "26.638.737",\
    "eyes": "open",\
    "eyesdetailed": 99.988,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 89,\
    "neutral": 99.47,\
    "sadness": 115\
},{\
    "ID": 81,\
    "gender": "Male",\
    "age": 42,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Bartolomeo Veneto",\
    "Title": "Portrait of a Bearded Gentleman",\
    "area": "North",\
    "Year": 1510,\
    "url": "http://use2-uploads3.wikiart.org/00112/images/bartolomeo-veneto/portrait-of-a-bearded-gentleman-1510.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/bartolomeo-veneto",\
    "smile": "no",\
    "smiledetailed": 39,\
    "pitch": "-7.358.008",\
    "roll": "65.847.015",\
    "yaw": "2.943.492",\
    "eyes": "open",\
    "eyesdetailed": 99.985,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 2,\
    "neutral": 41.051,\
    "sadness": 51.852\
},{\
    "ID": 82,\
    "gender": "Male",\
    "age": 38,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Vittore Carpaccio",\
    "Title": "Portrait of a Venetian Nobleman",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "http://use2-uploads1.wikiart.org/images/vittore-carpaccio/portrait-of-a-venetian-nobleman.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/vittore-carpaccio",\
    "smile": "no",\
    "smiledetailed": 3.567,\
    "pitch": "-13.042.051",\
    "roll": "-27.626.321",\
    "yaw": "22.893.837",\
    "eyes": "open",\
    "eyesdetailed": 99.986,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 67.525,\
    "neutral": 31.766,\
    "sadness": 65\
},{\
    "ID": 86,\
    "gender": "Female",\
    "age": 49,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Bernhard Strigel",\
    "Title": "Portrait of Louis II of Hungary",\
    "area": "Europe",\
    "Year": 1515,\
    "url": "http://use2-uploads0.wikiart.org/images/bernhard-strigel/portrait-of-louis-ii-of-hungary.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/bernhard-strigel",\
    "smile": "no",\
    "smiledetailed": 28.257,\
    "pitch": "22.261.918",\
    "roll": "6.019.511",\
    "yaw": "-17.852.795",\
    "eyes": "open",\
    "eyesdetailed": 99.994,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 419,\
    "neutral": 87.671,\
    "sadness": 234\
},{\
    "ID": 97,\
    "gender": "Male",\
    "age": 49,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Lucas Cranach the Elder",\
    "Title": "Portrait of Martin Luther as an Augustinian Monk",\
    "area": "North",\
    "Year": 1523,\
    "url": "http://use2-uploads6.wikiart.org/images/lucas-cranach-the-elder/portrait-of-martin-luther-as-an-augustinian-monk.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/lucas-cranach-the-elder",\
    "smile": "no",\
    "smiledetailed": 96,\
    "pitch": 0.63685966,\
    "roll": "-2.224.102",\
    "yaw": "-23.512.041",\
    "eyes": "open",\
    "eyesdetailed": 94.888,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 951,\
    "neutral": 97.483,\
    "sadness": 56\
},{\
    "ID": 102,\
    "gender": "Female",\
    "age": 28,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hans Baldung",\
    "Title": "Portrait of a Lady",\
    "area": "South",\
    "Year": 1530,\
    "url": "http://use2-uploads6.wikiart.org/images/hans-baldung/portrait-of-a-lady-1530.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/hans-baldung",\
    "smile": "no",\
    "smiledetailed": 35.02,\
    "pitch": "12.838.063",\
    "roll": "-24.736.423",\
    "yaw": "23.553.734",\
    "eyes": "open",\
    "eyesdetailed": 95.443,\
    "mouth": "closedm",\
    "mouthdetailed": 34.45,\
    "happy": 2.771,\
    "neutral": 86.728,\
    "sadness": 231\
},{\
    "ID": 111,\
    "gender": "Male",\
    "age": 34,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Pieter Aertsen",\
    "Title": "Cook in front of the Stove",\
    "area": "Europe",\
    "Year": 1559,\
    "url": "http://use2-uploads7.wikiart.org/images/pieter-aertsen/cook-in-front-of-the-stove-1559.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/pieter-aertsen",\
    "smile": "no",\
    "smiledetailed": 519,\
    "pitch": 0.9641776,\
    "roll": "114.805.155",\
    "yaw": "5.177.386",\
    "eyes": "open",\
    "eyesdetailed": 99.61,\
    "mouth": "closedm",\
    "mouthdetailed": 846,\
    "happy": 8.244,\
    "neutral": 5.745,\
    "sadness": 79.758\
},{\
    "ID": 116,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Nicholas Hilliard",\
    "Title": "Elizabeth I - The Pelican Portrait",\
    "area": "Europe",\
    "Year": 1575,\
    "url": "http://use2-uploads7.wikiart.org/images/nicholas-hilliard/elizabeth-i-the-pelican-portrait-1575.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/nicholas-hilliard",\
    "smile": "no",\
    "smiledetailed": 1.09,\
    "pitch": "76.307.125",\
    "roll": "4.921.367",\
    "yaw": "-28.962.236",\
    "eyes": "open",\
    "eyesdetailed": 97.359,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 273,\
    "neutral": 2.974,\
    "sadness": 79\
},{\
    "ID": 117,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Nicholas Hilliard",\
    "Title": "Sir Walter Ralegh",\
    "area": "Europe",\
    "Year": 1585,\
    "url": "http://use2-uploads1.wikiart.org/images/nicholas-hilliard/sir-walter-ralegh-1585.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/nicholas-hilliard",\
    "smile": "no",\
    "smiledetailed": 43.085,\
    "pitch": "9.772.981",\
    "roll": "-44.303.513",\
    "yaw": "17.347.431",\
    "eyes": "open",\
    "eyesdetailed": 65.376,\
    "mouth": "closedm",\
    "mouthdetailed": 0.97,\
    "happy": 451,\
    "neutral": 99.434,\
    "sadness": 3\
},{\
    "ID": 123,\
    "gender": "Male",\
    "age": 20,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Caravaggio",\
    "Title": "The Lute Player",\
    "area": "Europe",\
    "Year": 1596,\
    "url": "http://use2-uploads1.wikiart.org/images/caravaggio/the-lute-player-1(1).jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/caravaggio",\
    "smile": "no",\
    "smiledetailed": 12.638,\
    "pitch": "10.190.372",\
    "roll": "9.355.734",\
    "yaw": "16.515.709",\
    "eyes": "open",\
    "eyesdetailed": 99.992,\
    "mouth": "openm",\
    "mouthdetailed": 90.703,\
    "happy": 0.01,\
    "neutral": 99.943,\
    "sadness": 2\
},{\
    "ID": 129,\
    "gender": "Male",\
    "age": 38,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Otto van Veen",\
    "Title": "Portrait of Nicolaas Rockox",\
    "area": "Europe",\
    "Year": 1600,\
    "url": "http://use2-uploads4.wikiart.org/00115/images/otto-van-veen/portrait-of-nicolaas-rockox-1600.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/otto-van-veen",\
    "smile": "no",\
    "smiledetailed": 1.723,\
    "pitch": -0.69035196,\
    "roll": -0.8935261,\
    "yaw": "-24.074.066",\
    "eyes": "open",\
    "eyesdetailed": 93.634,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 57,\
    "neutral": 99.807,\
    "sadness": 58\
},{\
    "ID": 139,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Artemisia Gentileschi",\
    "Title": "Self-portrait as a Female Martyr",\
    "area": "Europe",\
    "Year": 1615,\
    "url": "http://use2-uploads2.wikiart.org/images/artemisia-gentileschi/self-portrait-as-a-female-martyr-1615.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/artemisia-gentileschi",\
    "smile": "no",\
    "smiledetailed": 302,\
    "pitch": "4.500.631",\
    "roll": "14.621.796",\
    "yaw": "33.515.938",\
    "eyes": "open",\
    "eyesdetailed": 99.835,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 0,\
    "neutral": 99.997,\
    "sadness": 0\
},{\
    "ID": 149,\
    "gender": "Female",\
    "age": 46,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Hendrick Terbrugghen",\
    "Title": "Singing Boy",\
    "area": "Europe",\
    "Year": 1627,\
    "url": "http://use2-uploads7.wikiart.org/images/hendrick-terbrugghen/singing-boy-1627.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/hendrick-terbrugghen",\
    "smile": "no",\
    "smiledetailed": 3.099,\
    "pitch": "13.866.697",\
    "roll": "1.296.427",\
    "yaw": "26.398.577",\
    "eyes": "closed",\
    "eyesdetailed": 39,\
    "mouth": "closedm",\
    "mouthdetailed": 20.205,\
    "happy": 8,\
    "neutral": 54,\
    "sadness": 13\
},{\
    "ID": 180,\
    "gender": "Female",\
    "age": 19,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "William Dobson",\
    "Title": "Portrait",\
    "area": "North",\
    "Year": 1640,\
    "url": "http://use2-uploads4.wikiart.org/00124/images/william-dobson/portrait-thought-to-be-judith-dobson-1634-1640-1.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/william-dobson",\
    "smile": "no",\
    "smiledetailed": 86,\
    "pitch": "-21.630.106",\
    "roll": 93.315,\
    "yaw": "-2.766.108",\
    "eyes": "open",\
    "eyesdetailed": 99.959,\
    "mouth": "closedm",\
    "mouthdetailed": 121,\
    "happy": 2,\
    "neutral": 99.93,\
    "sadness": 25\
},{\
    "ID": 183,\
    "gender": "Male",\
    "age": 42,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Marc Nattier",\
    "Title": "Portrait of Tsar Peter I",\
    "area": "Europe",\
    "Year": 1717,\
    "url": "http://use2-uploads8.wikiart.org/images/jean-marc-nattier/portrait-of-tsar-peter-i-1717.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-marc-nattier",\
    "smile": "no",\
    "smiledetailed": 0.36,\
    "pitch": "35.038.693",\
    "roll": "25.080.926",\
    "yaw": "19.471.977",\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 412,\
    "neutral": 99.394,\
    "sadness": 47\
},{\
    "ID": 220,\
    "gender": "Male",\
    "age": 21,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Baptiste Greuze",\
    "Title": "Girl With A Dead Canary",\
    "area": "North",\
    "Year": 1765,\
    "url": "http://use2-uploads1.wikiart.org/images/jean-baptiste-greuze/1.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-baptiste-greuze",\
    "smile": "no",\
    "smiledetailed": 469,\
    "pitch": "78.462.663",\
    "roll": "38.749.264",\
    "yaw": "-47.993.855",\
    "eyes": "closed",\
    "eyesdetailed": 1.591,\
    "mouth": "openm",\
    "mouthdetailed": 79.849,\
    "happy": 5.836,\
    "neutral": 44.864,\
    "sadness": 47.896\
},{\
    "ID": 224,\
    "gender": "Male",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Joseph-Marie Vien",\
    "Title": "Greek Woman at the Bath",\
    "area": "South",\
    "Year": 1767,\
    "url": "http://use2-uploads7.wikiart.org/images/joseph-marie-vien/greek-woman-at-the-bath-1767.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/joseph-marie-vien",\
    "smile": "no",\
    "smiledetailed": 10.492,\
    "pitch": "13.877.093",\
    "roll": "4.339.636",\
    "yaw": "-49.426.254",\
    "eyes": "closed",\
    "eyesdetailed": 3.267,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 91.443,\
    "neutral": 5.352,\
    "sadness": 3.193\
},{\
    "ID": 226,\
    "gender": "Female",\
    "age": 57,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Carl-Ludwig Johann Christineck",\
    "Title": "Portrait of Anna Muravyova",\
    "area": "Europe",\
    "Year": 1768,\
    "url": "http://use2-uploads5.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-anna-muravyova-1768.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/carl-ludwig-johann-christineck",\
    "smile": "no",\
    "smiledetailed": 3.631,\
    "pitch": "48.380.494",\
    "roll": "30.402.696",\
    "yaw": "17.204.712",\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closedm",\
    "mouthdetailed": 22.086,\
    "happy": 76.547,\
    "neutral": 993,\
    "sadness": 20.168\
},{\
    "ID": 229,\
    "gender": "Female",\
    "age": 36,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Carl-Ludwig Johann Christineck",\
    "Title": "Portrait of Alexey Bobrinsky as a Child",\
    "area": "Europe",\
    "Year": 1769,\
    "url": "http://use2-uploads2.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-alexey-bobrinsky-as-a-child-1769-1.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/carl-ludwig-johann-christineck",\
    "smile": "no",\
    "smiledetailed": 41.378,\
    "pitch": "4.905.212",\
    "roll": "-46.936.026",\
    "yaw": "15.458.183",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 95.459,\
    "neutral": 0.3,\
    "sadness": 11\
},{\
    "ID": 230,\
    "gender": "Female",\
    "age": 52,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "John Russell",\
    "Title": "Micoc and Tootac",\
    "area": "Europe",\
    "Year": 1769,\
    "url": "http://use2-uploads4.wikiart.org/images/john-russell/micoc-and-tootac-1769.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-russell",\
    "smile": "no",\
    "smiledetailed": 203,\
    "pitch": "26.117.287",\
    "roll": "35.352.256",\
    "yaw": "-37.339.885",\
    "eyes": "open",\
    "eyesdetailed": 99.804,\
    "mouth": "closedm",\
    "mouthdetailed": 61,\
    "happy": 5.589,\
    "neutral": 94.379,\
    "sadness": 8\
},{\
    "ID": 236,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Baptiste Greuze",\
    "Title": "Portrait of the Comtesse du Barry",\
    "area": "Europe",\
    "Year": 1771,\
    "url": "http://use2-uploads2.wikiart.org/images/jean-baptiste-greuze/portrait-of-the-comtesse-du-barry-1771.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-baptiste-greuze",\
    "smile": "no",\
    "smiledetailed": 1.269,\
    "pitch": "21.611.145",\
    "roll": "-37.844.484",\
    "yaw": "-15.331.434",\
    "eyes": "open",\
    "eyesdetailed": 99.996,\
    "mouth": "closedm",\
    "mouthdetailed": 159,\
    "happy": 1.926,\
    "neutral": 92.372,\
    "sadness": 66\
},{\
    "ID": 243,\
    "gender": "Male",\
    "age": 55,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Carl-Ludwig Johann Christineck",\
    "Title": "Portrait of Count Orlov-Chesmensky",\
    "area": "Europe",\
    "Year": 1779,\
    "url": "http://use2-uploads4.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-count-orlov-chesmensky-1779.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/carl-ludwig-johann-christineck",\
    "smile": "no",\
    "smiledetailed": 2.008,\
    "pitch": "-65.872.827",\
    "roll": "-24.327.757",\
    "yaw": "-22.290.981",\
    "eyes": "open",\
    "eyesdetailed": 99.912,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 741,\
    "neutral": 95.603,\
    "sadness": 14\
},{\
    "ID": 244,\
    "gender": "Female",\
    "age": 35,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Joshua Reynolds",\
    "Title": "Lady Jane Halliday",\
    "area": "Europe",\
    "Year": 1779,\
    "url": "http://use2-uploads4.wikiart.org/images/joshua-reynolds/lady-jane-halliday.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/joshua-reynolds",\
    "smile": "no",\
    "smiledetailed": 4.268,\
    "pitch": "2.398.527",\
    "roll": "-12.136.204",\
    "yaw": "3.814.316",\
    "eyes": "open",\
    "eyesdetailed": 99.874,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 383,\
    "neutral": 99.613,\
    "sadness": 0\
},{\
    "ID": 245,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Fyodor Rokotov",\
    "Title": "Portrait of Catherine II of Russia",\
    "area": "Europe",\
    "Year": 1780,\
    "url": "http://use2-uploads1.wikiart.org/images/fyodor-rokotov/portrait-of-catherine-ii-of-russia.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/fyodor-rokotov",\
    "smile": "yes",\
    "smiledetailed": 76.495,\
    "pitch": "22.690.666",\
    "roll": "17.285.455",\
    "yaw": "14.732.847",\
    "eyes": "open",\
    "eyesdetailed": 99.914,\
    "mouth": "closedm",\
    "mouthdetailed": 655,\
    "happy": 76.764,\
    "neutral": 23.184,\
    "sadness": 4\
},{\
    "ID": 247,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Baptiste Greuze",\
    "Title": "The White Hat",\
    "area": "North",\
    "Year": 1780,\
    "url": "http://use2-uploads0.wikiart.org/images/jean-baptiste-greuze/jean-baptiste-greuze-the-white-hat-2120759508.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-baptiste-greuze",\
    "smile": "no",\
    "smiledetailed": 3.958,\
    "pitch": "30.684.958",\
    "roll": -0.53105783,\
    "yaw": "-2.107.601",\
    "eyes": "open",\
    "eyesdetailed": 99.996,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 2.663,\
    "neutral": 97.231,\
    "sadness": 2\
},{\
    "ID": 249,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "John Hoppner",\
    "Title": "Mary Robinson as Perdita",\
    "area": "Europe",\
    "Year": 1782,\
    "url": "http://use2-uploads3.wikiart.org/images/john-hoppner/mary-robinson-as-perdita-1782.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-hoppner",\
    "smile": "no",\
    "smiledetailed": 3.313,\
    "pitch": "-10.552.514",\
    "roll": "-55.566.206",\
    "yaw": 358.768,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 314,\
    "neutral": 99.6,\
    "sadness": 2\
},{\
    "ID": 252,\
    "gender": "Male",\
    "age": 76,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Henry Raeburn",\
    "Title": "Rear-Admiral Charles Inglis",\
    "area": "North",\
    "Year": 1783,\
    "url": "http://use2-uploads2.wikiart.org/images/henry-raeburn/rear-admiral-charles-inglis.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/henry-raeburn",\
    "smile": "no",\
    "smiledetailed": 2.776,\
    "pitch": -899.656,\
    "roll": "-6.049.574",\
    "yaw": "5.184.029",\
    "eyes": "open",\
    "eyesdetailed": 99.858,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 346,\
    "neutral": 99.343,\
    "sadness": 1\
},{\
    "ID": 257,\
    "gender": "Female",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Dmitry Levitzky",\
    "Title": "Portrait of Countess N. F. Vorontsova",\
    "area": "South",\
    "Year": 1785,\
    "url": "http://use2-uploads3.wikiart.org/images/dmitry-levitzky/portrait-of-countess-n-f-vorontsova.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/dmitry-levitzky",\
    "smile": "no",\
    "smiledetailed": 1.555,\
    "pitch": "58.352.137",\
    "roll": -0.0838121,\
    "yaw": "14.338.173",\
    "eyes": "open",\
    "eyesdetailed": 96.059,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 8.847,\
    "neutral": 90.981,\
    "sadness": 7\
},{\
    "ID": 259,\
    "gender": "Male",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Mikhail Shibanov",\
    "Title": "Alexandr Matveevich Dmitriev-Mamonov",\
    "area": "Europe",\
    "Year": 1785,\
    "url": "http://use2-uploads5.wikiart.org/images/mikhail-shibanov/alexandr-matveevich-dmitriev-mamonov.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/mikhail-shibanov",\
    "smile": "no",\
    "smiledetailed": 1.57,\
    "pitch": "2.003.759",\
    "roll": "-43.221.183",\
    "yaw": "1.607.551",\
    "eyes": "open",\
    "eyesdetailed": 99.996,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 61.369,\
    "neutral": 2.349,\
    "sadness": 14.764\
},{\
    "ID": 261,\
    "gender": "Female",\
    "age": 21,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Thomas Gainsborough",\
    "Title": "Mrs. Sarah Siddons,\ the actress",\
    "area": "Europe",\
    "Year": 1785,\
    "url": "http://use2-uploads6.wikiart.org/images/thomas-gainsborough/mrs-sarah-siddons-the-actress-1785.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/thomas-gainsborough",\
    "smile": "no",\
    "smiledetailed": 2.107,\
    "pitch": "-18.580.359",\
    "roll": "-8.192.259",\
    "yaw": "-5.636.987",\
    "eyes": "open",\
    "eyesdetailed": 99.881,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 9.3,\
    "neutral": 90.395,\
    "sadness": 15\
},{\
    "ID": 273,\
    "gender": "Male",\
    "age": 37,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Antoine-Jean Gros",\
    "Title": "Bonaparte at the Pont D&#39;Arcole",\
    "area": "Europe",\
    "Year": 1796,\
    "url": "http://use2-uploads2.wikiart.org/00118/images/antoine-jean-gros/bonaparte-at-the-pont-d-arcole-1796.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/antoine-jean-gros",\
    "smile": "no",\
    "smiledetailed": 8,\
    "pitch": "45.376.644",\
    "roll": "30.554.726",\
    "yaw": "-37.245.792",\
    "eyes": "open",\
    "eyesdetailed": 96.044,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 16,\
    "neutral": 98.265,\
    "sadness": 1.68\
},{\
    "ID": 274,\
    "gender": "Male",\
    "age": 35,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Pierre-Paul Prud&#39;hon",\
    "Title": "Portrait of Georges Anthony",\
    "area": "Europe",\
    "Year": 1796,\
    "url": "http://use2-uploads5.wikiart.org/images/pierre-paul-prud-hon/portrait-of-georges-anthony-1796.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/pierre-paul-prud-hon",\
    "smile": "no",\
    "smiledetailed": 82,\
    "pitch": "20.417.023",\
    "roll": "18.606.818",\
    "yaw": "-24.381.306",\
    "eyes": "open",\
    "eyesdetailed": 99.908,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 126,\
    "neutral": 99.572,\
    "sadness": 12\
},{\
    "ID": 279,\
    "gender": "Female",\
    "age": 43,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Marie-Guillemine Benoist",\
    "Title": "Portrait of a Lady",\
    "area": "Europe",\
    "Year": 1799,\
    "url": "http://use2-uploads0.wikiart.org/images/marie-guillemine-benoist/portrait-of-a-lady-1799.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/marie-guillemine-benoist",\
    "smile": "no",\
    "smiledetailed": 13.541,\
    "pitch": "27.537.913",\
    "roll": -590.037,\
    "yaw": "24.391.506",\
    "eyes": "open",\
    "eyesdetailed": 99.986,\
    "mouth": "closedm",\
    "mouthdetailed": 0.01,\
    "happy": 27.611,\
    "neutral": 69.079,\
    "sadness": 114\
},{\
    "ID": 291,\
    "gender": "Male",\
    "age": 34,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John Simpson ",\
    "Title": "Elizabeth Sykes,\ Mrs Wilbraham Egerton",\
    "area": "Europe",\
    "Year": 1805,\
    "url": "http://use2-uploads7.wikiart.org/images/john-simpson/elizabeth-sykes-mrs-wilbraham-egerton-1805.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-simpson",\
    "smile": "no",\
    "smiledetailed": 1.088,\
    "pitch": "-74.729.857",\
    "roll": "-29.298.842",\
    "yaw": "4.525.161",\
    "eyes": "open",\
    "eyesdetailed": 99.794,\
    "mouth": "closedm",\
    "mouthdetailed": 414,\
    "happy": 267,\
    "neutral": 8.383,\
    "sadness": 88.442\
},{\
    "ID": 296,\
    "gender": "Male",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Anne-Louis Girodet",\
    "Title": "Chateaubriand Meditating on the Ruins of Rome",\
    "area": "Europe",\
    "Year": 1808,\
    "url": "http://use2-uploads6.wikiart.org/images/anne-louis-girodet/chateaubriand-meditating-on-the-ruins-of-rome-1808(1).jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/anne-louis-girodet",\
    "smile": "no",\
    "smiledetailed": 3.74,\
    "pitch": "18.501.923",\
    "roll": "1.132.817",\
    "yaw": "3.254.108",\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closedm",\
    "mouthdetailed": 0.01,\
    "happy": 0.01,\
    "neutral": 99.972,\
    "sadness": 4\
},{\
    "ID": 312,\
    "gender": "Female",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Christoffer Wilhelm Eckersberg",\
    "Title": "Portrait of Anna Maria Magnani",\
    "area": "North",\
    "Year": 1814,\
    "url": "http://use2-uploads0.wikiart.org/images/christoffer-wilhelm-eckersberg/portrait-of-anna-maria-magnani-1814.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/christoffer-wilhelm-eckersberg",\
    "smile": "no",\
    "smiledetailed": 2.412,\
    "pitch": "10.612.311",\
    "roll": "-33.285.756",\
    "yaw": "18.189.938",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 45,\
    "happy": 4,\
    "neutral": 95.843,\
    "sadness": 1.245\
},{\
    "ID": 313,\
    "gender": "Male",\
    "age": 30,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Horace Vernet",\
    "Title": "The Emperor Napoleon I",\
    "area": "Europe",\
    "Year": 1815,\
    "url": "http://use2-uploads2.wikiart.org/images/horace-vernet/the-emperor-napoleon-i-1815.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/horace-vernet",\
    "smile": "no",\
    "smiledetailed": 557,\
    "pitch": "-15.128.169",\
    "roll": "27.141.356",\
    "yaw": "29.876.532",\
    "eyes": "open",\
    "eyesdetailed": 99.668,\
    "mouth": "openm",\
    "mouthdetailed": 89.269,\
    "happy": 2.869,\
    "neutral": 86.711,\
    "sadness": 9.874\
},{\
    "ID": 316,\
    "gender": "Male",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "David Wilkie",\
    "Title": "Billy Waters,\ mariner and street performer/ beggar",\
    "area": "North",\
    "Year": 1815,\
    "url": "http://use2-uploads0.wikiart.org/images/david-wilkie/billy-waters-mariner-and-street-performer-beggar-1815.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/david-wilkie",\
    "smile": "no",\
    "smiledetailed": 7.97,\
    "pitch": "10.644.907",\
    "roll": "-8.121.505",\
    "yaw": "12.863.357",\
    "eyes": "open",\
    "eyesdetailed": 96.694,\
    "mouth": "closedm",\
    "mouthdetailed": 911,\
    "happy": 69.955,\
    "neutral": 30.028,\
    "sadness": 0.01\
},{\
    "ID": 339,\
    "gender": "Female",\
    "age": 33,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism,\Romanticism",\
    "Artist": "Ary Scheffer",\
    "Title": "Charlotte Rothsch,\ Baroness Anselm De Rothschild",\
    "area": "South",\
    "Year": 1828,\
    "url": "http://use2-uploads0.wikiart.org/00151/images/ary-scheffer/charlotte-rothsch-baroness-anselm-de-rothschild-1828.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/ary-scheffer",\
    "smile": "no",\
    "smiledetailed": 13.29,\
    "pitch": "3.159.983",\
    "roll": "17.283.098",\
    "yaw": "-22.782.133",\
    "eyes": "open",\
    "eyesdetailed": 99.8,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 898,\
    "neutral": 99.098,\
    "sadness": 0\
},{\
    "ID": 343,\
    "gender": "Male",\
    "age": 82,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Joaquin Manuel Fernandez Cruzado",\
    "Title": "Retrato de hombre",\
    "area": "Europe",\
    "Year": 1830,\
    "url": "http://use2-uploads7.wikiart.org/images/joaquin-manuel-fernandez-cruzado/retrato-de-hombre-1830.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/joaquin-manuel-fernandez-cruzado",\
    "smile": "no",\
    "smiledetailed": 0.06,\
    "pitch": "52.631.516",\
    "roll": "-39.528.737",\
    "yaw": "8.718.282",\
    "eyes": "open",\
    "eyesdetailed": 95.022,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 125,\
    "neutral": 99.394,\
    "sadness": 474\
},{\
    "ID": 345,\
    "gender": "Female",\
    "age": 58,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "George Catlin",\
    "Title": "Kei-a-gis-gis,\ a woman of the Plains Ojibwa",\
    "area": "Europe",\
    "Year": 1832,\
    "url": "http://use2-uploads4.wikiart.org/images/george-catlin/kei-a-gis-gis-a-woman-of-the-plains-ojibwa-1832.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/george-catlin",\
    "smile": "yes",\
    "smiledetailed": 60.414,\
    "pitch": "74.872.403",\
    "roll": "44.631.176",\
    "yaw": "1.795.415",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 362,\
    "happy": 97.891,\
    "neutral": 17,\
    "sadness": 1.082\
},{\
    "ID": 349,\
    "gender": "Male",\
    "age": 73,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "George Catlin",\
    "Title": "M&#243;-sho-la-t&#250;b-bee,\ He Who Puts Out and Kills,\ Chief of the Tribe",\
    "area": "Europe",\
    "Year": 1834,\
    "url": "http://use2-uploads5.wikiart.org/images/george-catlin/m-sho-la-t-b-bee-he-who-puts-out-and-kills-chief-of-the-tribe-1834.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/george-catlin",\
    "smile": "no",\
    "smiledetailed": 579,\
    "pitch": "34.985.762",\
    "roll": "-7.926.125",\
    "yaw": "-20.816.854",\
    "eyes": "open",\
    "eyesdetailed": 99.812,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 6.366,\
    "neutral": 85.299,\
    "sadness": 847\
},{\
    "ID": 416,\
    "gender": "Female",\
    "age": 28,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Nicolae Grigorescu",\
    "Title": "Peasant Woman from Muscel",\
    "area": "Europe",\
    "Year": 1874,\
    "url": "http://use2-uploads1.wikiart.org/images/nicolae-grigorescu/peasant-woman-from-muscel-1874.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/nicolae-grigorescu",\
    "smile": "yes",\
    "smiledetailed": 52.416,\
    "pitch": "4.163.017",\
    "roll": "22.328.572",\
    "yaw": "23.175.508",\
    "eyes": "open",\
    "eyesdetailed": 99.996,\
    "mouth": "closedm",\
    "mouthdetailed": 6,\
    "happy": 51.431,\
    "neutral": 43.402,\
    "sadness": 4.823\
},{\
    "ID": 418,\
    "gender": "Female",\
    "age": 28,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Vladimir Makovsky",\
    "Title": "A girl with geese",\
    "area": "Europe",\
    "Year": 1875,\
    "url": "http://use2-uploads1.wikiart.org/images/vladimir-makovsky/a-girl-with-geese-1875.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/vladimir-makovsky",\
    "smile": "no",\
    "smiledetailed": 33.068,\
    "pitch": "13.853.062",\
    "roll": "70.024.323",\
    "yaw": "-4.844.666",\
    "eyes": "open",\
    "eyesdetailed": 53.651,\
    "mouth": "closedm",\
    "mouthdetailed": 449,\
    "happy": 2.9,\
    "neutral": 39.623,\
    "sadness": 11.667\
},{\
    "ID": 420,\
    "gender": "Female",\
    "age": 20,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "William-Adolphe Bouguereau",\
    "Title": "The Little Knitter",\
    "area": "Europe",\
    "Year": 1882,\
    "url": "http://use2-uploads2.wikiart.org/images/william-adolphe-bouguereau/the-little-knitter-1882.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/william-adolphe-bouguereau",\
    "smile": "yes",\
    "smiledetailed": 239,\
    "pitch": "8.394.834",\
    "roll": 521.076,\
    "yaw": "3.649.832",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 6,\
    "neutral": 98.367,\
    "sadness": 156\
},{\
    "ID": 421,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "The Muse Erato at her Lyre",\
    "area": "Europe",\
    "Year": 1895,\
    "url": "http://use2-uploads4.wikiart.org/images/john-william-godward/the-muse-erato-at-her-lyre-1895.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "no",\
    "smiledetailed": 13,\
    "pitch": "17.341.635",\
    "roll": 0.9181266,\
    "yaw": "59.013.298",\
    "eyes": "closed",\
    "eyesdetailed": 1.173,\
    "mouth": "openm",\
    "mouthdetailed": 98.975,\
    "happy": 437,\
    "neutral": 98.912,\
    "sadness": 54\
},{\
    "ID": 422,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "Contemplation",\
    "area": "Europe",\
    "Year": 1903,\
    "url": "http://use2-uploads0.wikiart.org/images/john-william-godward/contemplation-1903.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "no",\
    "smiledetailed": 26,\
    "pitch": "-19.343.112",\
    "roll": "-70.242.267",\
    "yaw": "24.506.693",\
    "eyes": "open",\
    "eyesdetailed": 99.965,\
    "mouth": "closedm",\
    "mouthdetailed": 38,\
    "happy": 0,\
    "neutral": 99.723,\
    "sadness": 276\
},{\
    "ID": 423,\
    "gender": "Female",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "Nerissa",\
    "area": "Europe",\
    "Year": 1906,\
    "url": "http://use2-uploads3.wikiart.org/images/john-william-godward/nerissa-1906.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "yes",\
    "smiledetailed": 187,\
    "pitch": "2.361.642",\
    "roll": "-64.054.394",\
    "yaw": "-34.827.585",\
    "eyes": "open",\
    "eyesdetailed": 99.982,\
    "mouth": "closedm",\
    "mouthdetailed": 3.653,\
    "happy": 14,\
    "neutral": 99.624,\
    "sadness": 146\
},{\
    "ID": 424,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "Under the Blossom that Hangs on the Bough",\
    "area": "Europe",\
    "Year": 1917,\
    "url": "http://use2-uploads1.wikiart.org/images/john-william-godward/under-the-blossom-that-hangs-on-the-bough-1917.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "no",\
    "smiledetailed": 0.75,\
    "pitch": "-38.595.169",\
    "roll": "-21.341.467",\
    "yaw": "7.281.146",\
    "eyes": "open",\
    "eyesdetailed": 56,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1.034,\
    "neutral": 84.726,\
    "sadness": 10.218\
},{\
    "ID": 425,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "A Song without Words",\
    "area": "Europe",\
    "Year": 1919,\
    "url": "http://use2-uploads7.wikiart.org/images/john-william-godward/a-song-without-words-1919.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "yes",\
    "smiledetailed": 60.145,\
    "pitch": "-4.010.156",\
    "roll": "-54.153.282",\
    "yaw": "80.924.736",\
    "eyes": "closed",\
    "eyesdetailed": 6.524,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 21.553,\
    "neutral": 66.637,\
    "sadness": 3.807\
},{\
    "ID": 426,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "Contemplation",\
    "area": "Europe",\
    "Year": 1922,\
    "url": "http://use2-uploads0.wikiart.org/images/john-william-godward/contemplation-1922.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "yes",\
    "smiledetailed": 203,\
    "pitch": "-75.774.856",\
    "roll": "29.711.817",\
    "yaw": "-12.636.443",\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "openm",\
    "mouthdetailed": 126,\
    "happy": 83,\
    "neutral": 99.833,\
    "sadness": 71\
},{\
    "ID": 427,\
    "gender": "Male",\
    "age": 39,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Alexandre Jacovleff",\
    "Title": "The Kuli-Kuta Dance,\ Niamey",\
    "area": "Europe",\
    "Year": 1926,\
    "url": "http://use2-uploads7.wikiart.org/images/alexandre-yevgenievich-jacovleff/the-kuli-kuta-dance-niamey-1926.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/alexandre-jacovleff",\
    "smile": "yes",\
    "smiledetailed": 90.528,\
    "pitch": "17.379.036",\
    "roll": "9.180.663",\
    "yaw": "3.323.635",\
    "eyes": "open",\
    "eyesdetailed": 555,\
    "mouth": "openm",\
    "mouthdetailed": 984,\
    "happy": 1.256,\
    "neutral": 26,\
    "sadness": 59.619\
},{\
    "ID": 428,\
    "gender": "Female",\
    "age": 47,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Masaccio",\
    "Title": "Portrait of a Young Man",\
    "area": "North",\
    "Year": "1423-1425",\
    "url": "http://use2-uploads7.wikiart.org/images/masaccio/portrait-of-a-young-man-1425.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/masaccio",\
    "smile": "no",\
    "smiledetailed": 2.598,\
    "pitch": 484.698,\
    "roll": "-2.690.304",\
    "yaw": "76.677.315",\
    "eyes": "closed",\
    "eyesdetailed": 2,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 4.127,\
    "neutral": 56.115,\
    "sadness": 111\
},{\
    "ID": 443,\
    "gender": "Female",\
    "age": 48,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Martin Schongauer",\
    "Title": "Portrait of a young woman",\
    "area": "Europe",\
    "Year": "1475-1480",\
    "url": "http://use2-uploads4.wikiart.org/images/martin-schongauer/portrait-of-a-young-woman.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/martin-schongauer",\
    "smile": "no",\
    "smiledetailed": 14.221,\
    "pitch": "22.396.789",\
    "roll": "-17.497.347",\
    "yaw": "17.873.049",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 386,\
    "neutral": 99.602,\
    "sadness": 1\
},{\
    "ID": 459,\
    "gender": "Female",\
    "age": 28,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Giorgione",\
    "Title": "The Sleeping Venus",\
    "area": "North",\
    "Year": "1508-1510",\
    "url": "http://use2-uploads3.wikiart.org/the-sleeping-venus-1510(2).jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/giorgione",\
    "smile": "no",\
    "smiledetailed": 215,\
    "pitch": "5.981.752",\
    "roll": "-4.375.413",\
    "yaw": "10.656.422",\
    "eyes": "closed",\
    "eyesdetailed": 79,\
    "mouth": "closedm",\
    "mouthdetailed": 3,\
    "happy": 9.718,\
    "neutral": 89.316,\
    "sadness": 487\
},{\
    "ID": 564,\
    "gender": "Male",\
    "age": 52,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Jan van Eyck",\
    "Title": "Portrait of Giovanni Arnolfini",\
    "area": "South",\
    "Year": 1435,\
    "url": "http://use2-uploads0.wikiart.org/images/jan-van-eyck/portrait-of-giovanni-arnolfini-1435.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jan-van-eyck/portrait-of-giovanni-arnolfini-1435",\
    "#untitled": "http://www.wikiart.org/en/jan-van-eyck",\
    "smile": "no",\
    "smiledetailed": 489,\
    "pitch": "11.212.548",\
    "roll": "-41.974.277",\
    "yaw": "22.968.197",\
    "eyes": "open",\
    "eyesdetailed": 89.873,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1.065,\
    "neutral": 97.19,\
    "sadness": 1.359\
},{\
    "ID": 574,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Vasily Tropinin",\
    "Title": "The Lacemaker",\
    "area": "Europe",\
    "Year": 1823,\
    "url": "http://use2-uploads8.wikiart.org/images/vasily-tropinin/the-lacemaker.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/vasily-tropinin/the-lacemaker",\
    "#untitled": "http://www.wikiart.org/en/vasily-tropinin",\
    "smile": "no",\
    "smiledetailed": 3.068,\
    "pitch": -0.80643874,\
    "roll": "-18.041.588",\
    "yaw": "4.785.442",\
    "eyes": "closed",\
    "eyesdetailed": 4.306,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 1.06,\
    "neutral": 98.828,\
    "sadness": 5\
},{\
    "ID": 578,\
    "gender": "Male",\
    "age": 28,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Dosso Dossi",\
    "Title": "A Personification Of Geometry",\
    "area": "Europe",\
    "Year": "XVI cent.",\
    "url": "http://use2-uploads2.wikiart.org/images/dosso-dossi/a-personification-of-geometry.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/dosso-dossi/a-personification-of-geometry",\
    "#untitled": "http://www.wikiart.org/en/dosso-dossi",\
    "smile": "yes",\
    "smiledetailed": 51.824,\
    "pitch": "-33.183.012",\
    "roll": "14.448.154",\
    "yaw": "-5.872.727",\
    "eyes": "closed",\
    "eyesdetailed": 20.764,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 9,\
    "neutral": 99.415,\
    "sadness": 155\
},{\
    "ID": 583,\
    "gender": "Female",\
    "age": 39,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Domingos Sequeira",\
    "Title": "Retrato de D. Carlota Joaquina,\ Rainha de Portugal",\
    "area": "Europe",\
    "Year": 1802,\
    "url": "http://use2-uploads5.wikiart.org/images/domingos-sequeira/retrato-de-d-carlota-joaquina-rainha-de-portugal-1802.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/domingos-sequeira/retrato-de-d-carlota-joaquina-rainha-de-portugal-1802",\
    "#untitled": "http://www.wikiart.org/en/domingos-sequeira",\
    "smile": "no",\
    "smiledetailed": 2.133,\
    "pitch": 0.032073714,\
    "roll": "29.568.589",\
    "yaw": "-25.877.188",\
    "eyes": "open",\
    "eyesdetailed": 99.811,\
    "mouth": "closedm",\
    "mouthdetailed": 45,\
    "happy": 2.709,\
    "neutral": 94.972,\
    "sadness": 0.31\
},{\
    "ID": 585,\
    "gender": "Male",\
    "age": 31,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Petrus Christus",\
    "Title": "Edward Grimston",\
    "area": "Europe",\
    "Year": 1446,\
    "url": "http://use2-uploads6.wikiart.org/images/petrus-christus/edward-grimston-1446.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/petrus-christus/edward-grimston-1446",\
    "#untitled": "http://www.wikiart.org/en/petrus-christus",\
    "smile": "no",\
    "smiledetailed": 313,\
    "pitch": "4.907.036",\
    "roll": "-16.130.209",\
    "yaw": "-27.447.535",\
    "eyes": "open",\
    "eyesdetailed": 99.99,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 2.39,\
    "neutral": 88.498,\
    "sadness": 35\
},{\
    "ID": 590,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Louise Elisabeth Vigee Le Brun",\
    "Title": "Anna Ivanovna Tolstaya",\
    "area": "Europe",\
    "Year": 1774,\
    "url": "http://use2-uploads5.wikiart.org/images/louise-elisabeth-vigee-le-brun/anna-ivanovna-tolstaya.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/louise-elisabeth-vigee-le-brun/anna-ivanovna-tolstaya",\
    "#untitled": "http://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
    "smile": "no",\
    "smiledetailed": 9.359,\
    "pitch": "7.075.654",\
    "roll": "38.934.271",\
    "yaw": "-1.807.042",\
    "eyes": "open",\
    "eyesdetailed": 99.58,\
    "mouth": "closedm",\
    "mouthdetailed": 1.007,\
    "happy": 0.62,\
    "neutral": 99.294,\
    "sadness": 46\
},{\
    "ID": 594,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Maarten de Vos",\
    "Title": "The Rape of Europa",\
    "area": "Europe",\
    "Year": 1590,\
    "url": "http://use2-uploads4.wikiart.org/00103/images/maarten-de-vos/the-rape-of-europa-1590.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/maarten-de-vos/the-rape-of-europa-1590",\
    "#untitled": "http://www.wikiart.org/en/maarten-de-vos",\
    "smile": "no",\
    "smiledetailed": 1.147,\
    "pitch": "-12.347.165",\
    "roll": "-23.302.507",\
    "yaw": "5.782.875",\
    "eyes": "closed",\
    "eyesdetailed": 14.628,\
    "mouth": "closedm",\
    "mouthdetailed": 498,\
    "happy": 9.85,\
    "neutral": 89.065,\
    "sadness": 19\
},{\
    "ID": 599,\
    "gender": "Male",\
    "age": 20,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Albert Anker",\
    "Title": "Bildnis Emilie Weiss (mit Pl&#252;schtier)",\
    "area": "Europe",\
    "Year": 1868,\
    "url": "http://use2-uploads5.wikiart.org/images/albert-anker/bildnis-emilie-weiss-mit-pl-schtier-1868.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/albert-anker/bildnis-emilie-weiss-mit-pl-schtier-1868",\
    "#untitled": "http://www.wikiart.org/en/albert-anker",\
    "smile": "no",\
    "smiledetailed": 157,\
    "pitch": "5.210.959",\
    "roll": "5.918.475",\
    "yaw": "-8.558.863",\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 211,\
    "happy": 87,\
    "neutral": 55.216,\
    "sadness": 8.668\
},{\
    "ID": 621,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Guido Reni",\
    "Title": "The Penitent Magdalene",\
    "area": "North",\
    "Year": 1635,\
    "url": "http://use2-uploads8.wikiart.org/images/guido-reni/the-penitent-magdalene-1635.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/guido-reni/the-penitent-magdalene-1635",\
    "#untitled": "http://www.wikiart.org/en/guido-reni",\
    "smile": "no",\
    "smiledetailed": 1.978,\
    "pitch": "-2.211.943",\
    "roll": "22.965.208",\
    "yaw": 546.345,\
    "eyes": "open",\
    "eyesdetailed": 80.339,\
    "mouth": "closedm",\
    "mouthdetailed": 61,\
    "happy": 9.086,\
    "neutral": 82.951,\
    "sadness": 31\
},{\
    "ID": 627,\
    "gender": "Male",\
    "age": 66,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Joseph Ducreux",\
    "Title": "Self-portrait,\ yawning",\
    "area": "Europe",\
    "Year": 1783,\
    "url": "http://use2-uploads2.wikiart.org/images/joseph-ducreux/self-portrait-yawning-1783.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/joseph-ducreux/self-portrait-yawning-1783",\
    "#untitled": "http://www.wikiart.org/en/joseph-ducreux",\
    "smile": "no",\
    "smiledetailed": 10.397,\
    "pitch": "-12.680.047",\
    "roll": "-23.286.469",\
    "yaw": "-30.047.028",\
    "eyes": "open",\
    "eyesdetailed": 84.324,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 28,\
    "neutral": 114,\
    "sadness": 27.762\
},{\
    "ID": 629,\
    "gender": "Female",\
    "age": 35,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Marc Nattier",\
    "Title": "Portrait of Madame Maria Zeffirina",\
    "area": "North",\
    "Year": 1751,\
    "url": "http://use2-uploads0.wikiart.org/images/jean-marc-nattier/portrait-of-madame-maria-zeffirina-1751.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-marc-nattier/portrait-of-madame-maria-zeffirina-1751",\
    "#untitled": "http://www.wikiart.org/en/jean-marc-nattier",\
    "smile": "no",\
    "smiledetailed": 3.156,\
    "pitch": "20.336.998",\
    "roll": "9.447.328",\
    "yaw": "29.451.752",\
    "eyes": "open",\
    "eyesdetailed": 51.191,\
    "mouth": "closedm",\
    "mouthdetailed": 21,\
    "happy": 1.008,\
    "neutral": 59.21,\
    "sadness": 44\
},{\
    "ID": 633,\
    "gender": "Male",\
    "age": 45,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Fyodor Rokotov",\
    "Title": "Portrait of Count I.G.Orlov",\
    "area": "South",\
    "Year": "1762-1765",\
    "url": "http://use2-uploads3.wikiart.org/images/fyodor-rokotov/portrait-of-count-i-g-orlov.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/fyodor-rokotov/portrait-of-count-i-g-orlov",\
    "#untitled": "http://www.wikiart.org/en/fyodor-rokotov",\
    "smile": "no",\
    "smiledetailed": 4.569,\
    "pitch": -0.8823776,\
    "roll": "21.923.482",\
    "yaw": "-15.238.022",\
    "eyes": "open",\
    "eyesdetailed": 99.731,\
    "mouth": "closedm",\
    "mouthdetailed": 7,\
    "happy": 30.645,\
    "neutral": 2.754,\
    "sadness": 764\
},{\
    "ID": 636,\
    "gender": "Male",\
    "age": 40,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Dirk Bouts",\
    "Title": "Portrait of a Man",\
    "area": "Europe",\
    "Year": 1462,\
    "url": "http://use2-uploads3.wikiart.org/images/dirk-bouts/portrait-of-a-man-1462.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/dirk-bouts/portrait-of-a-man-1462",\
    "#untitled": "http://www.wikiart.org/en/dirk-bouts",\
    "smile": "no",\
    "smiledetailed": 3.558,\
    "pitch": "64.332.566",\
    "roll": "39.148.774",\
    "yaw": "2.664.356",\
    "eyes": "open",\
    "eyesdetailed": 99.998,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 363,\
    "neutral": 99.456,\
    "sadness": 5\
},{\
    "ID": 653,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Theodore Chasseriau",\
    "Title": "Portrait de Mlle de Cabarrus",\
    "area": "Europe",\
    "Year": 1848,\
    "url": "http://use2-uploads5.wikiart.org/images/theodore-chasseriau/portrait-de-mlle-de-cabarrus-1848.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/theodore-chasseriau/portrait-de-mlle-de-cabarrus-1848",\
    "#untitled": "http://www.wikiart.org/en/theodore-chasseriau",\
    "smile": "no",\
    "smiledetailed": 35,\
    "pitch": "42.484.107",\
    "roll": -0.32370892,\
    "yaw": "66.990.094",\
    "eyes": "open",\
    "eyesdetailed": 99.97,\
    "mouth": "closedm",\
    "mouthdetailed": 0.08,\
    "happy": 45,\
    "neutral": 99.953,\
    "sadness": 0\
},{\
    "ID": 654,\
    "gender": "Male",\
    "age": 41,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Bernhard Strigel",\
    "Title": "Portrait of a Gentleman",\
    "area": "Europe",\
    "Year": 1520,\
    "url": "http://use2-uploads1.wikiart.org/images/bernhard-strigel/portrait-of-a-gentleman.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/bernhard-strigel/portrait-of-a-gentleman",\
    "#untitled": "http://www.wikiart.org/en/bernhard-strigel",\
    "smile": "no",\
    "smiledetailed": 7,\
    "pitch": "4.808.269",\
    "roll": "-29.449.222",\
    "yaw": "15.038.631",\
    "eyes": "open",\
    "eyesdetailed": 98.421,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 5,\
    "neutral": 99.991,\
    "sadness": 0\
},{\
    "ID": 657,\
    "gender": "Female",\
    "age": 53,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Orest Kiprensky",\
    "Title": "Portrait of A. Davydov",\
    "area": "Europe",\
    "Year": 1809,\
    "url": "http://use2-uploads3.wikiart.org/images/orest-kiprensky/portrait-of-a-davydov-1809.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/orest-kiprensky/portrait-of-a-davydov-1809",\
    "#untitled": "http://www.wikiart.org/en/orest-kiprensky",\
    "smile": "no",\
    "smiledetailed": 0,\
    "pitch": "28.979.547",\
    "roll": -405.533,\
    "yaw": "1.792.543",\
    "eyes": "open",\
    "eyesdetailed": 99.998,\
    "mouth": "closedm",\
    "mouthdetailed": 5,\
    "happy": 2,\
    "neutral": 99.21,\
    "sadness": 2\
},{\
    "ID": 665,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Giovanni Antonio Boltraffio",\
    "Title": "Madonna and Child",\
    "area": "Europe",\
    "Year": 1500,\
    "url": "http://use2-uploads2.wikiart.org/images/giovanni-antonio-boltraffio/madonna-and-child-1500.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/giovanni-antonio-boltraffio/madonna-and-child-1500",\
    "#untitled": "http://www.wikiart.org/en/giovanni-antonio-boltraffio",\
    "smile": "no",\
    "smiledetailed": 14.062,\
    "pitch": "9.533.469",\
    "roll": "3.249.614",\
    "yaw": "5.217.456",\
    "eyes": "closed",\
    "eyesdetailed": 165,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 95.598,\
    "neutral": 1.678,\
    "sadness": 2.591\
},{\
    "ID": 669,\
    "gender": "Male",\
    "age": 24,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John Singleton Copley",\
    "Title": "Boy with Squirrel (Henry Pelham)",\
    "area": "Europe",\
    "Year": 1765,\
    "url": "http://use2-uploads0.wikiart.org/images/john-singleton-copley/boy-with-squirrel-henry-pelham-1765.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-singleton-copley/boy-with-squirrel-henry-pelham-1765",\
    "#untitled": "http://www.wikiart.org/en/john-singleton-copley",\
    "smile": "no",\
    "smiledetailed": 182,\
    "pitch": "-9.380.261",\
    "roll": "-19.773.779",\
    "yaw": "9.169.021",\
    "eyes": "closed",\
    "eyesdetailed": 0,\
    "mouth": "closedm",\
    "mouthdetailed": 4,\
    "happy": 1.904,\
    "neutral": 95.532,\
    "sadness": 11\
},{\
    "ID": 702,\
    "gender": "Female",\
    "age": 24,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Louise Elisabeth Vigee Le Brun",\
    "Title": "Portrait of Anna Pitt as Hebe",\
    "area": "Europe",\
    "Year": 1792,\
    "url": "http://use2-uploads8.wikiart.org/images/louise-elisabeth-vigee-le-brun/portrait-of-anna-pitt-as-hebe-1792.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/louise-elisabeth-vigee-le-brun/portrait-of-anna-pitt-as-hebe-1792",\
    "#untitled": "http://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
    "smile": "no",\
    "smiledetailed": 166,\
    "pitch": "51.680.984",\
    "roll": "-12.896.024",\
    "yaw": "42.711.673",\
    "eyes": "open",\
    "eyesdetailed": 99.57,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 2.305,\
    "neutral": 88.917,\
    "sadness": 4\
},{\
    "ID": 715,\
    "gender": "Female",\
    "age": 47,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Domenico Ghirlandaio",\
    "Title": "Portrait of Giovane Donna",\
    "area": "North",\
    "Year": "XV cent.",\
    "url": "http://use2-uploads7.wikiart.org/images/domenico-ghirlandaio/portrait-of-giovane-donna.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/domenico-ghirlandaio/portrait-of-giovane-donna",\
    "#untitled": "http://www.wikiart.org/en/domenico-ghirlandaio",\
    "smile": "no",\
    "smiledetailed": 73,\
    "pitch": "5.308.079",\
    "roll": "6.245.734",\
    "yaw": "27.117.826",\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 13,\
    "neutral": 42.111,\
    "sadness": 55.235\
},{\
    "ID": 726,\
    "gender": "Male",\
    "age": 36,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Antonello da Messina",\
    "Title": "Portrait of a Man (The Condottiero)",\
    "area": "Europe",\
    "Year": 1475,\
    "url": "http://use2-uploads2.wikiart.org/images/antonello-da-messina/portrait-of-a-man-the-condottiero-1475.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/antonello-da-messina/portrait-of-a-man-the-condottiero-1475",\
    "#untitled": "http://www.wikiart.org/en/antonello-da-messina",\
    "smile": "no",\
    "smiledetailed": 222,\
    "pitch": "-39.541.612",\
    "roll": "38.058.674",\
    "yaw": "37.547.356",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 5,\
    "happy": 535,\
    "neutral": 81.012,\
    "sadness": 97\
},{\
    "ID": 737,\
    "gender": "Female",\
    "age": 52,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Baptiste Greuze",\
    "Title": "The Milkmaid",\
    "area": "North",\
    "Year": 1780,\
    "url": "http://use2-uploads8.wikiart.org/images/jean-baptiste-greuze/the-milkmaid-1780.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-baptiste-greuze/the-milkmaid-1780",\
    "#untitled": "http://www.wikiart.org/en/jean-baptiste-greuze",\
    "smile": "no",\
    "smiledetailed": 1.85,\
    "pitch": 0.34767285,\
    "roll": "-1.711.342",\
    "yaw": "13.458.755",\
    "eyes": "open",\
    "eyesdetailed": 99.963,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 3.663,\
    "neutral": 96.261,\
    "sadness": 19\
},{\
    "ID": 741,\
    "gender": "Female",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Maurice Quentin de La Tour",\
    "Title": "Portrait of Madame de Pompadour",\
    "area": "South",\
    "Year": 1748,\
    "url": "http://use2-uploads1.wikiart.org/images/maurice-quentin-de-la-tour/portrait-of-madame-de-pompadour.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/maurice-quentin-de-la-tour/portrait-of-madame-de-pompadour",\
    "#untitled": "http://www.wikiart.org/en/maurice-quentin-de-la-tour",\
    "smile": "no",\
    "smiledetailed": 822,\
    "pitch": "-6.068.535",\
    "roll": "-9.167.225",\
    "yaw": "42.626.762",\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 28.421,\
    "neutral": 53.205,\
    "sadness": 206\
},{\
    "ID": 753,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "George Catlin",\
    "Title": "Sha-k&#243;-ka (mint),\ a Mandan girl",\
    "area": "Europe",\
    "Year": 1832,\
    "url": "http://use2-uploads7.wikiart.org/images/george-catlin/sha-k-ka-mint-a-mandan-girl-1832.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/george-catlin/sha-k-ka-mint-a-mandan-girl-1832",\
    "#untitled": "http://www.wikiart.org/en/george-catlin",\
    "smile": "no",\
    "smiledetailed": 0.04,\
    "pitch": "6.089.483",\
    "roll": "66.785.655",\
    "yaw": "-20.515.696",\
    "eyes": "open",\
    "eyesdetailed": 99.031,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 2.539,\
    "neutral": 91.792,\
    "sadness": 4.863\
},{\
    "ID": 754,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Antoine Watteau",\
    "Title": "Diana at her Bath",\
    "area": "Europe",\
    "Year": "1715-1716",\
    "url": "http://use2-uploads8.wikiart.org/images/antoine-watteau/diana-at-her-bath-1716.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/antoine-watteau/diana-at-her-bath-1716",\
    "#untitled": "http://www.wikiart.org/en/antoine-watteau",\
    "smile": "no",\
    "smiledetailed": 12.507,\
    "pitch": "20.463.055",\
    "roll": "2.466.766",\
    "yaw": "19.827.297",\
    "eyes": "closed",\
    "eyesdetailed": 24.638,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 261,\
    "neutral": 5.905,\
    "sadness": 72\
},{\
    "ID": 758,\
    "gender": "Male",\
    "age": 66,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Carl-Ludwig Johann Christineck",\
    "Title": "Portrait of Semen Ivanovich Mordvinov as Chevalier of the Order of St. Andrew",\
    "area": "Europe",\
    "Year": 1771,\
    "url": "http://use2-uploads1.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-semen-ivanovich-mordvinov-as-chevalier-of-the-order-of-st-andrew-1771.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/carl-ludwig-johann-christineck/portrait-of-semen-ivanovich-mordvinov-as-chevalier-of-the-order-of-st-andrew-1771",\
    "#untitled": "http://www.wikiart.org/en/carl-ludwig-johann-christineck",\
    "smile": "no",\
    "smiledetailed": 2.832,\
    "pitch": "4.520.572",\
    "roll": "28.729.582",\
    "yaw": "11.804.332",\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 11.282,\
    "neutral": 83.412,\
    "sadness": 4.83\
},{\
    "ID": 760,\
    "gender": "Female",\
    "age": 37,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Domenico Ghirlandaio",\
    "Title": "Portrait of Giovanna Tornabuoni",\
    "area": "Europe",\
    "Year": "1485-1488",\
    "url": "http://use2-uploads4.wikiart.org/images/domenico-ghirlandaio/portrait-of-giovanna-tornabuoni.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/domenico-ghirlandaio/portrait-of-giovanna-tornabuoni",\
    "#untitled": "http://www.wikiart.org/en/domenico-ghirlandaio",\
    "smile": "no",\
    "smiledetailed": 17.442,\
    "pitch": "57.244.153",\
    "roll": "-37.522.192",\
    "yaw": "36.976.643",\
    "eyes": "open",\
    "eyesdetailed": 99.342,\
    "mouth": "closedm",\
    "mouthdetailed": 15,\
    "happy": 22.57,\
    "neutral": 27.452,\
    "sadness": 436\
},{\
    "ID": 768,\
    "gender": "Female",\
    "age": 33,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Albert Anker",\
    "Title": "Louise Anker",\
    "area": "Europe",\
    "Year": 1874,\
    "url": "http://use2-uploads0.wikiart.org/images/albert-anker/louise-anker-1874.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/albert-anker/louise-anker-1874",\
    "#untitled": "http://www.wikiart.org/en/albert-anker",\
    "smile": "no",\
    "smiledetailed": 0.63,\
    "pitch": "6.244.259",\
    "roll": "-5.599.981",\
    "yaw": "4.119.642",\
    "eyes": "open",\
    "eyesdetailed": 99.978,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 1.262,\
    "neutral": 98.655,\
    "sadness": 2\
},{\
    "ID": 769,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Paolo Uccello",\
    "Title": "A Young Lady of Fashion",\
    "area": "Europe",\
    "Year": 1464,\
    "url": "http://use2-uploads7.wikiart.org/images/paolo-uccello/a-young-lady-of-fashion.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/paolo-uccello/a-young-lady-of-fashion",\
    "#untitled": "http://www.wikiart.org/en/paolo-uccello",\
    "smile": "no",\
    "smiledetailed": 7.699,\
    "pitch": -0.12253103,\
    "roll": "-24.017.322",\
    "yaw": 836.621,\
    "eyes": "closed",\
    "eyesdetailed": 193,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 799,\
    "neutral": 84.898,\
    "sadness": 12.579\
},{\
    "ID": 770,\
    "gender": "Female",\
    "age": 34,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Antoine Pesne",\
    "Title": "Johanna Holstein Gottorp",\
    "area": "Europe",\
    "Year": 1746,\
    "url": "http://use2-uploads8.wikiart.org/images/antoine-pesne/johanna-holstein-gottorp.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/antoine-pesne/johanna-holstein-gottorp",\
    "#untitled": "http://www.wikiart.org/en/antoine-pesne",\
    "smile": "no",\
    "smiledetailed": 122,\
    "pitch": "13.505.008",\
    "roll": "-12.489.914",\
    "yaw": "-15.577.601",\
    "eyes": "open",\
    "eyesdetailed": 99.908,\
    "mouth": "closedm",\
    "mouthdetailed": 3,\
    "happy": 2.356,\
    "neutral": 95.652,\
    "sadness": 8\
},{\
    "ID": 791,\
    "gender": "Female",\
    "age": 41,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Bernardo Strozzi",\
    "Title": "Gamba Player",\
    "area": "North",\
    "Year": 1635,\
    "url": "http://use2-uploads8.wikiart.org/images/bernardo-strozzi/gamba-player.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/bernardo-strozzi/gamba-player",\
    "#untitled": "http://www.wikiart.org/en/bernardo-strozzi",\
    "smile": "no",\
    "smiledetailed": 289,\
    "pitch": "11.286.137",\
    "roll": "-76.448.054",\
    "yaw": "-9.676.282",\
    "eyes": "open",\
    "eyesdetailed": 99.66,\
    "mouth": "closedm",\
    "mouthdetailed": 76,\
    "happy": 29,\
    "neutral": 99.746,\
    "sadness": 222\
},{\
    "ID": 793,\
    "gender": "Male",\
    "age": 44,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hans Holbein the Younger",\
    "Title": "Portrait of Henry VIII,\ King of England",\
    "area": "Europe",\
    "Year": 1535,\
    "url": "http://use2-uploads6.wikiart.org/images/hans-holbein-the-younger/portrait-of-henry-viii-king-of-england.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/hans-holbein-the-younger/portrait-of-henry-viii-king-of-england",\
    "#untitled": "http://www.wikiart.org/en/hans-holbein-the-younger",\
    "smile": "no",\
    "smiledetailed": 1.247,\
    "pitch": "19.035.106",\
    "roll": "4.321.514",\
    "yaw": "-37.899.372",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 171,\
    "happy": 29,\
    "neutral": 13.025,\
    "sadness": 74\
},{\
    "ID": 803,\
    "gender": "Female",\
    "age": 52,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Annibale Carracci",\
    "Title": "The Laughing Youth",\
    "area": "North",\
    "Year": 1583,\
    "url": "http://use2-uploads2.wikiart.org/images/annibale-carracci/the-laughing-youth-1583.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/annibale-carracci/the-laughing-youth-1583",\
    "#untitled": "http://www.wikiart.org/en/annibale-carracci",\
    "smile": "yes",\
    "smiledetailed": 85.296,\
    "pitch": "10.039.703",\
    "roll": "25.455.229",\
    "yaw": "-3.469.808",\
    "eyes": "closed",\
    "eyesdetailed": 4.359,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 99.642,\
    "neutral": 21,\
    "sadness": 6\
},{\
    "ID": 804,\
    "gender": "Female",\
    "age": 43,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hans Memling",\
    "Title": "Portrait of an Old Woman",\
    "area": "South",\
    "Year": "1468-1470",\
    "url": "http://use2-uploads3.wikiart.org/images/hans-memling/portrait-of-an-old-woman-1470.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/hans-memling/portrait-of-an-old-woman-1470",\
    "#untitled": "http://www.wikiart.org/en/hans-memling",\
    "smile": "no",\
    "smiledetailed": 8.986,\
    "pitch": "-25.000.207",\
    "roll": "-16.406.765",\
    "yaw": "2.634.341",\
    "eyes": "open",\
    "eyesdetailed": 99.062,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 2,\
    "neutral": 99.997,\
    "sadness": 0\
},{\
    "ID": 808,\
    "gender": "Male",\
    "age": 43,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John Singleton Copley",\
    "Title": "Paul Revere",\
    "area": "Europe",\
    "Year": "1768-1770",\
    "url": "http://use2-uploads1.wikiart.org/images/john-singleton-copley/paul-revere-1770-1.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-singleton-copley/paul-revere-1770-1",\
    "#untitled": "http://www.wikiart.org/en/john-singleton-copley",\
    "smile": "no",\
    "smiledetailed": 314,\
    "pitch": "-9.739.158",\
    "roll": -0.7107372,\
    "yaw": "-24.665.815",\
    "eyes": "open",\
    "eyesdetailed": 85.371,\
    "mouth": "closedm",\
    "mouthdetailed": 111,\
    "happy": 53,\
    "neutral": 99.843,\
    "sadness": 1\
},{\
    "ID": 811,\
    "gender": "Female",\
    "age": 33,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Bartolomeo Veneto",\
    "Title": "Portrait of a Lady in a Green Dress",\
    "area": "Europe",\
    "Year": 1530,\
    "url": "http://use2-uploads1.wikiart.org/images/bartolomeo-veneto/portrait-of-a-lady-in-a-green-dress-1530.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/bartolomeo-veneto/portrait-of-a-lady-in-a-green-dress-1530",\
    "#untitled": "http://www.wikiart.org/en/bartolomeo-veneto",\
    "smile": "no",\
    "smiledetailed": 34,\
    "pitch": "79.779.334",\
    "roll": -795.552,\
    "yaw": "2.212.148",\
    "eyes": "open",\
    "eyesdetailed": 99.795,\
    "mouth": "closedm",\
    "mouthdetailed": 654,\
    "happy": 113,\
    "neutral": 58.803,\
    "sadness": 40.659\
},{\
    "ID": 813,\
    "gender": "Male",\
    "age": 59,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hans Holbein the Younger",\
    "Title": "Portrait of Erasmus of Rotterdam",\
    "area": "Europe",\
    "Year": 1523,\
    "url": "http://use2-uploads5.wikiart.org/images/hans-holbein-the-younger/portrait-of-erasmus-of-rotterdam-1523.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/hans-holbein-the-younger/portrait-of-erasmus-of-rotterdam-1523",\
    "#untitled": "http://www.wikiart.org/en/hans-holbein-the-younger",\
    "smile": "no",\
    "smiledetailed": 32.236,\
    "pitch": "30.982.013",\
    "roll": "-4.086.504",\
    "yaw": "26.606.508",\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 19.551,\
    "neutral": 78.106,\
    "sadness": 0.01\
},{\
    "ID": 818,\
    "gender": "Female",\
    "age": 63,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Carl-Ludwig Johann Christineck",\
    "Title": "Teresa Schnee",\
    "area": "Europe",\
    "Year": 1777,\
    "url": "http://use2-uploads1.wikiart.org/images/carl-ludwig-johann-christineck/teresa-schnee-1777.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/carl-ludwig-johann-christineck/teresa-schnee-1777",\
    "#untitled": "http://www.wikiart.org/en/carl-ludwig-johann-christineck",\
    "smile": "no",\
    "smiledetailed": 5.156,\
    "pitch": -0.32737696,\
    "roll": "60.253.215",\
    "yaw": "20.754.631",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 79.894,\
    "neutral": 16.472,\
    "sadness": 2.155\
},{\
    "ID": 824,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Marc Nattier",\
    "Title": "Madame Louise of France",\
    "area": "Europe",\
    "Year": 1748,\
    "url": "http://use2-uploads7.wikiart.org/images/jean-marc-nattier/madame-louise-of-france-1748.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/jean-marc-nattier/madame-louise-of-france-1748",\
    "#untitled": "http://www.wikiart.org/en/jean-marc-nattier",\
    "smile": "no",\
    "smiledetailed": 30.01,\
    "pitch": "25.350.888",\
    "roll": "10.778.601",\
    "yaw": "-62.839.384",\
    "eyes": "open",\
    "eyesdetailed": 98.044,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 96.069,\
    "neutral": 3.041,\
    "sadness": 113\
},{\
    "ID": 828,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Edouard Manet",\
    "Title": "The Fifer",\
    "area": "Europe",\
    "Year": 1866,\
    "url": "http://use2-uploads7.wikiart.org/images/edouard-manet/the-fifer-1866.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/edouard-manet/the-fifer-1866",\
    "#untitled": "http://www.wikiart.org/en/edouard-manet",\
    "smile": "no",\
    "smiledetailed": 3.05,\
    "pitch": "70.820.045",\
    "roll": "4.359.239",\
    "yaw": "-70.507.793",\
    "eyes": "open",\
    "eyesdetailed": 99.994,\
    "mouth": "closedm",\
    "mouthdetailed": 566,\
    "happy": 14,\
    "neutral": 4.192,\
    "sadness": 12\
},{\
    "ID": 839,\
    "gender": "Male",\
    "age": 51,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John Trumbull",\
    "Title": "Portrait of George Washington and William &#39;Billy&#39; Lee",\
    "area": "Europe",\
    "Year": 1780,\
    "url": "http://use2-uploads4.wikiart.org/images/john-trumbull/portrait-of-george-washington-and-william-billy-lee-1780.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-trumbull/portrait-of-george-washington-and-william-billy-lee-1780",\
    "#untitled": "http://www.wikiart.org/en/john-trumbull",\
    "smile": "no",\
    "smiledetailed": 1.324,\
    "pitch": "77.698.607",\
    "roll": "-18.969.237",\
    "yaw": "9.663.105",\
    "eyes": "open",\
    "eyesdetailed": 94.772,\
    "mouth": "closedm",\
    "mouthdetailed": 1.584,\
    "happy": 102,\
    "neutral": 99.894,\
    "sadness": 3\
},{\
    "ID": 847,\
    "gender": "Male",\
    "age": 33,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Camille Corot",\
    "Title": "Woman Reading in a Landscape",\
    "area": "North",\
    "Year": 1869,\
    "url": "http://use2-uploads3.wikiart.org/images/camille-corot/woman-reading-in-a-landscape.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/camille-corot/woman-reading-in-a-landscape",\
    "#untitled": "http://www.wikiart.org/en/camille-corot",\
    "smile": "no",\
    "smiledetailed": 3.549,\
    "pitch": "1.815.444",\
    "roll": "-13.683.229",\
    "yaw": "4.536.227",\
    "eyes": "open",\
    "eyesdetailed": 78.684,\
    "mouth": "closedm",\
    "mouthdetailed": 9,\
    "happy": 121,\
    "neutral": 95.201,\
    "sadness": 4.328\
},{\
    "ID": 856,\
    "gender": "Female",\
    "age": 30,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Domingos Sequeira",\
    "Title": "Retrato de Conde de Farrobo",\
    "area": "Europe",\
    "Year": 1813,\
    "url": "http://use2-uploads2.wikiart.org/images/domingos-sequeira/retrato-de-conde-de-farrobo-1813.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/domingos-sequeira/retrato-de-conde-de-farrobo-1813",\
    "#untitled": "http://www.wikiart.org/en/domingos-sequeira",\
    "smile": "no",\
    "smiledetailed": 1.922,\
    "pitch": "8.639.946",\
    "roll": "-40.770.817",\
    "yaw": "21.009.727",\
    "eyes": "open",\
    "eyesdetailed": 99.714,\
    "mouth": "closedm",\
    "mouthdetailed": 0.39,\
    "happy": 173,\
    "neutral": 96.37,\
    "sadness": 1\
},{\
    "ID": 863,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "David Allan",\
    "Title": "James Abercromby of Tullibody,\ Esq.",\
    "area": "North",\
    "Year": 1779,\
    "url": "http://use2-uploads2.wikiart.org/images/david-allan/james-abercromby-of-tullibody-esq-1779.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/david-allan/james-abercromby-of-tullibody-esq-1779",\
    "#untitled": "http://www.wikiart.org/en/david-allan",\
    "smile": "yes",\
    "smiledetailed": 75.381,\
    "pitch": "58.400.946",\
    "roll": "19.191.716",\
    "yaw": "5.315.729",\
    "eyes": "open",\
    "eyesdetailed": 99.996,\
    "mouth": "closedm",\
    "mouthdetailed": 3,\
    "happy": 99.308,\
    "neutral": 427,\
    "sadness": 232\
},{\
    "ID": 864,\
    "gender": "Female",\
    "age": 43,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Nicholas Hilliard",\
    "Title": "Francis Bacon,\ Viscount St Alban",\
    "area": "South",\
    "Year": 1578,\
    "url": "http://use2-uploads6.wikiart.org/images/nicholas-hilliard/francis-bacon-viscount-st-alban-1578.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/nicholas-hilliard/francis-bacon-viscount-st-alban-1578",\
    "#untitled": "http://www.wikiart.org/en/nicholas-hilliard",\
    "smile": "no",\
    "smiledetailed": 2.943,\
    "pitch": "-14.594.893",\
    "roll": "-50.306.044",\
    "yaw": "25.532.349",\
    "eyes": "open",\
    "eyesdetailed": 99.911,\
    "mouth": "openm",\
    "mouthdetailed": 99.627,\
    "happy": 31.996,\
    "neutral": 62.712,\
    "sadness": 4.809\
},{\
    "ID": 866,\
    "gender": "Male",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Henry Raeburn",\
    "Title": "The Skating Minister (The Reverend Robert Walker Skating on Duddingston Loch)",\
    "area": "Europe",\
    "Year": 1784,\
    "url": "http://use2-uploads3.wikiart.org/images/henry-raeburn/portrait-of-the-reverend-robert-walker-skating.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/henry-raeburn/portrait-of-the-reverend-robert-walker-skating",\
    "#untitled": "http://www.wikiart.org/en/henry-raeburn",\
    "smile": "no",\
    "smiledetailed": 352,\
    "pitch": "-29.992.565",\
    "roll": "-11.921.496",\
    "yaw": "29.841.387",\
    "eyes": "open",\
    "eyesdetailed": 99.571,\
    "mouth": "openm",\
    "mouthdetailed": 96.369,\
    "happy": 4.559,\
    "neutral": 79.671,\
    "sadness": 79\
},{\
    "ID": 908,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Fyodor Rokotov",\
    "Title": "Portrait of V.N.Surovtseva",\
    "area": "Europe",\
    "Year": 1780,\
    "url": "http://use2-uploads2.wikiart.org/images/fyodor-rokotov/portrait-of-v-n-surovtseva.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/fyodor-rokotov/portrait-of-v-n-surovtseva",\
    "#untitled": "http://www.wikiart.org/en/fyodor-rokotov",\
    "smile": "no",\
    "smiledetailed": 9.972,\
    "pitch": "17.686.211",\
    "roll": "3.178.375",\
    "yaw": "-11.887.629",\
    "eyes": "open",\
    "eyesdetailed": 98.817,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 55.017,\
    "neutral": 44.334,\
    "sadness": 167\
},{\
    "ID": 917,\
    "gender": "Male",\
    "age": 37,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Alexandre Jacovleff",\
    "Title": "Self-portrait",\
    "area": "Europe",\
    "Year": 1917,\
    "url": "http://use2-uploads3.wikiart.org/images/alexandre-yevgenievich-jacovleff/self-portrait-1917.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/alexandre-jacovleff/self-portrait-1917",\
    "#untitled": "http://www.wikiart.org/en/alexandre-jacovleff",\
    "smile": "no",\
    "smiledetailed": 439,\
    "pitch": "26.160.538",\
    "roll": "-29.473.827",\
    "yaw": "-31.231.602",\
    "eyes": "open",\
    "eyesdetailed": 99.649,\
    "mouth": "closedm",\
    "mouthdetailed": 24,\
    "happy": 0.04,\
    "neutral": 94.296,\
    "sadness": 561\
},{\
    "ID": 934,\
    "gender": "Female",\
    "age": 67,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Eduard von Gebhardt",\
    "Title": "Estonian peasant",\
    "area": "Europe",\
    "Year": 1867,\
    "url": "http://use2-uploads2.wikiart.org/images/eduard-von-gebhardt/estonian-peasant-1867.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/eduard-von-gebhardt/estonian-peasant-1867",\
    "#untitled": "http://www.wikiart.org/en/eduard-von-gebhardt",\
    "smile": "no",\
    "smiledetailed": 377,\
    "pitch": "8.282.712",\
    "roll": -0.35383454,\
    "yaw": "5.366.132",\
    "eyes": "closed",\
    "eyesdetailed": 10.107,\
    "mouth": "closedm",\
    "mouthdetailed": 409,\
    "happy": 99,\
    "neutral": 85.727,\
    "sadness": 1.08\
},{\
    "ID": 947,\
    "gender": "Female",\
    "age": 24,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Giovanni Bellini",\
    "Title": "Naked young woman in front of the mirror",\
    "area": "Europe",\
    "Year": 1515,\
    "url": "http://use2-uploads0.wikiart.org/images/giovanni-bellini/naked-young-woman-in-front-of-the-mirror.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/giovanni-bellini/naked-young-woman-in-front-of-the-mirror-1515-1",\
    "#untitled": "http://www.wikiart.org/en/giovanni-bellini",\
    "smile": "no",\
    "smiledetailed": 149,\
    "pitch": 0.48218745,\
    "roll": "23.389.462",\
    "yaw": "-28.591.904",\
    "eyes": "open",\
    "eyesdetailed": 99.989,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 0,\
    "neutral": 100,\
    "sadness": 0\
},{\
    "ID": 955,\
    "gender": "Female",\
    "age": 35,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Giovanni Antonio Boltraffio",\
    "Title": "Portrait of Gerolamo Casio",\
    "area": "Europe",\
    "Year": 1495,\
    "url": "http://use2-uploads2.wikiart.org/images/giovanni-antonio-boltraffio/portrait-of-gerolamo-casio-1495.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/giovanni-antonio-boltraffio/portrait-of-gerolamo-casio-1495",\
    "#untitled": "http://www.wikiart.org/en/giovanni-antonio-boltraffio",\
    "smile": "no",\
    "smiledetailed": 2.521,\
    "pitch": "8.523.123",\
    "roll": "-15.289.536",\
    "yaw": "7.175.809",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 6,\
    "happy": 5.841,\
    "neutral": 70.197,\
    "sadness": 93\
},{\
    "ID": 969,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Orest Kiprensky",\
    "Title": "Girl wearing the poppy wreath",\
    "area": "Europe",\
    "Year": 1819,\
    "url": "http://use2-uploads2.wikiart.org/images/orest-kiprensky/girl-wearing-the-poppy-wreath-1819.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/orest-kiprensky/girl-wearing-the-poppy-wreath-1819",\
    "#untitled": "http://www.wikiart.org/en/orest-kiprensky",\
    "smile": "no",\
    "smiledetailed": 518,\
    "pitch": "22.572.153",\
    "roll": "-15.785.879",\
    "yaw": "17.534.601",\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "openm",\
    "mouthdetailed": 97.095,\
    "happy": 8.737,\
    "neutral": 84.055,\
    "sadness": 124\
},{\
    "ID": 970,\
    "gender": "Male",\
    "age": 47,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Pietro Perugino",\
    "Title": "Polyptych Annunziata (St. Illuminata)",\
    "area": "North",\
    "Year": "XV-XVI cent.",\
    "url": "http://use2-uploads2.wikiart.org/images/pietro-perugino/polyptych-annunziata-st-illuminata.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/pietro-perugino/polyptych-annunziata-st-illuminata",\
    "#untitled": "http://www.wikiart.org/en/pietro-perugino",\
    "smile": "no",\
    "smiledetailed": 10.68,\
    "pitch": "-20.010.574",\
    "roll": "-13.016.684",\
    "yaw": "42.778.458",\
    "eyes": "open",\
    "eyesdetailed": 99.663,\
    "mouth": "closedm",\
    "mouthdetailed": 26,\
    "happy": 1.743,\
    "neutral": 34.766,\
    "sadness": 453\
},{\
    "ID": 979,\
    "gender": "Male",\
    "age": 34,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Albrecht Durer",\
    "Title": "Self-Portrait",\
    "area": "Europe",\
    "Year": 1498,\
    "url": "http://use2-uploads3.wikiart.org/images/albrecht-durer/self-portrait-1498.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/albrecht-durer/self-portrait-1498",\
    "#untitled": "http://www.wikiart.org/en/albrecht-durer",\
    "smile": "no",\
    "smiledetailed": 2.116,\
    "pitch": "14.729.115",\
    "roll": "-44.331.365",\
    "yaw": "-7.055.661",\
    "eyes": "open",\
    "eyesdetailed": 99.713,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 0.43,\
    "neutral": 33.434,\
    "sadness": 7.959\
},{\
    "ID": 981,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hugo van der Goes",\
    "Title": "Portrait Of A Man",\
    "area": "North",\
    "Year": 1475,\
    "url": "http://use2-uploads1.wikiart.org/images/hugo-van-der-goes/portrait-of-a-man-1475.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/hugo-van-der-goes/portrait-of-a-man-1475",\
    "#untitled": "http://www.wikiart.org/en/hugo-van-der-goes",\
    "smile": "no",\
    "smiledetailed": 699,\
    "pitch": "-5.361.267",\
    "roll": "-45.305.805",\
    "yaw": "-20.909.348",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 901,\
    "neutral": 27.757,\
    "sadness": 114\
},{\
    "ID": 1000,\
    "gender": "Female",\
    "age": 63,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Louise Elisabeth Vigee Le Brun",\
    "Title": "Portrait of Madame de Stael as Corinne",\
    "area": "Europe",\
    "Year": 1808,\
    "url": "http://use2-uploads8.wikiart.org/images/louise-elisabeth-vigee-le-brun/portrait-of-madame-de-stael-as-corinne-1808.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/louise-elisabeth-vigee-le-brun/portrait-of-madame-de-stael-as-corinne-1808",\
    "#untitled": "http://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
    "smile": "no",\
    "smiledetailed": 11.325,\
    "pitch": "-12.074.766",\
    "roll": "42.806.163",\
    "yaw": "68.383.846",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "openm",\
    "mouthdetailed": 100,\
    "happy": 98.956,\
    "neutral": 113,\
    "sadness": 0.12\
},{\
    "ID": 1003,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "William Williams",\
    "Title": "Deborah Hall",\
    "area": "North",\
    "Year": 1766,\
    "url": "http://use2-uploads4.wikiart.org/images/william-williams/deborah-hall-1766.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/william-williams/deborah-hall-1766",\
    "#untitled": "http://www.wikiart.org/en/william-williams",\
    "smile": "no",\
    "smiledetailed": 13,\
    "pitch": "65.398.192",\
    "roll": "-24.069.498",\
    "yaw": "14.478.087",\
    "eyes": "open",\
    "eyesdetailed": 99.717,\
    "mouth": "closedm",\
    "mouthdetailed": 1,\
    "happy": 3,\
    "neutral": 99.986,\
    "sadness": 0\
},{\
    "ID": 1007,\
    "gender": "Female",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Marie-Guillemine Benoist",\
    "Title": "Portrait of Pauline Bonaparte",\
    "area": "Europe",\
    "Year": 1808,\
    "url": "http://use2-uploads2.wikiart.org/images/marie-guillemine-benoist/portrait-of-pauline-bonaparte-1808.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/marie-guillemine-benoist/portrait-of-pauline-bonaparte-1808",\
    "#untitled": "http://www.wikiart.org/en/marie-guillemine-benoist",\
    "smile": "no",\
    "smiledetailed": 35.103,\
    "pitch": "8.773.307",\
    "roll": "-17.568.749",\
    "yaw": "18.481.323",\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closedm",\
    "mouthdetailed": 41,\
    "happy": 3.052,\
    "neutral": 95.317,\
    "sadness": 21\
},{\
    "ID": 1015,\
    "gender": "Female",\
    "age": 47,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Anthony van Dyck",\
    "Title": "James Stuart,\ Duke Of Richmond And Lennox With His Attributes",\
    "area": "Europe",\
    "Year": 1633,\
    "url": "http://use2-uploads7.wikiart.org/images/anthony-van-dyck/james-stuart-duke-of-richmond-and-lennox-with-his-attributes-1634.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/anthony-van-dyck/james-stuart-duke-of-richmond-and-lennox-with-his-attributes-1634",\
    "#untitled": "http://www.wikiart.org/en/anthony-van-dyck",\
    "smile": "yes",\
    "smiledetailed": 233,\
    "pitch": 0.97789013,\
    "roll": "-55.872.483",\
    "yaw": "3.643.249",\
    "eyes": "open",\
    "eyesdetailed": 99.996,\
    "mouth": "closedm",\
    "mouthdetailed": 1.851,\
    "happy": 423,\
    "neutral": 91.116,\
    "sadness": 6.905\
},{\
    "ID": 1018,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Rosalba Carriera",\
    "Title": "A Tyrolean Innkeeper",\
    "area": "Europe",\
    "Year": 1728,\
    "url": "http://use2-uploads3.wikiart.org/images/rosalba-carriera/a-tyrolean-innkeeper-1728.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/rosalba-carriera/a-tyrolean-innkeeper-1728",\
    "#untitled": "http://www.wikiart.org/en/rosalba-carriera",\
    "smile": "yes",\
    "smiledetailed": 219,\
    "pitch": "46.898.475",\
    "roll": "-19.921.656",\
    "yaw": "14.184.588",\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closedm",\
    "mouthdetailed": 2,\
    "happy": 4.557,\
    "neutral": 95.321,\
    "sadness": 1\
},{\
    "ID": 1020,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Camille Corot",\
    "Title": "The Woman with a Pearl",\
    "area": "South",\
    "Year": "1868-1870",\
    "url": "http://use2-uploads2.wikiart.org/images/camille-corot/the-woman-with-a-pearl-1870.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/camille-corot/the-woman-with-a-pearl-1870",\
    "#untitled": "http://www.wikiart.org/en/camille-corot",\
    "smile": "no",\
    "smiledetailed": 0.16,\
    "pitch": "10.473.006",\
    "roll": "-72.423.997",\
    "yaw": "20.639.177",\
    "eyes": "open",\
    "eyesdetailed": 99.946,\
    "mouth": "closedm",\
    "mouthdetailed": 0,\
    "happy": 5,\
    "neutral": 99.982,\
    "sadness": 6\
},{\
    "ID": 1026,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John William Godward",\
    "Title": "Grecian Idyll",\
    "area": "Europe",\
    "Year": 1907,\
    "url": "http://use2-uploads0.wikiart.org/images/john-william-godward/grecian-idyll-1907.jpg",\
    "Artist Info URL": "http://www.wikiart.org/en/john-william-godward/grecian-idyll-1907",\
    "#untitled": "http://www.wikiart.org/en/john-william-godward",\
    "smile": "no",\
    "smiledetailed": 47,\
    "pitch": -0.26313132,\
    "roll": "76.621.194",\
    "yaw": "17.546.841",\
    "eyes": "open",\
    "eyesdetailed": 98.084,\
    "mouth": "closedm",\
    "mouthdetailed": 0.08,\
    "happy": 4,\
    "neutral": 99.89,\
    "sadness": 97\
},{\
    "ID": 2,\
    "gender": "Male",\
    "age": 48,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Ticiano Vecellio",\
    "Title": "Portrait of Ariosto",\
    "area": "Europe",\
    "Year": 1508,\
    "url": "https://use2-uploads1.wikiart.org/images/titian/portrait-of-ariosto-1510.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/titian",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 378,\
    "pitch": -6.6525574,\
    "roll": -2.4492779,\
    "yaw": -40.162395,\
    "eyes": "open",\
    "eyesdetailed": 99.173,\
    "mouth": "open",\
    "mouthdetailed": 185,\
    "happiness": 1,\
    "neutral": 73.212,\
    "sadness": 26.78\
  },{\
    "ID": 3,\
    "gender": "Female",\
    "age": 51,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Andrea del Castagno",\
    "Title": "Portrait of a Gentleman",\
    "area": "Europe",\
    "Year": 1449,\
    "url": "https://use2-uploads4.wikiart.org/images/andrea-del-castagno/portrait-of-a-gentleman.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/andrea-del-castagno",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 14.184,\
    "pitch": -4.6954794,\
    "roll": -1.7073052,\
    "yaw": 34.43904,\
    "eyes": "open",\
    "eyesdetailed": 99.988,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 2.907,\
    "neutral": 10.771,\
    "sadness": 26.176\
  },{\
    "ID": 4,\
    "gender": "Male",\
    "age": 39,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Albrecht Durer",\
    "Title": "Self-Portrait at the Age of Twenty Eight",\
    "area": "Europe",\
    "Year": 1500,\
    "url": "https://use2-uploads3.wikiart.org/images/albrecht-durer/self-portrait-at-the-age-of-twenty-eight-1500.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/albrecht-durer",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 41,\
    "pitch": -0.21305238,\
    "roll": -1.2150005,\
    "yaw": -2.810831,\
    "eyes": "open",\
    "eyesdetailed": 99.97,\
    "mouth": "closed",\
    "mouthdetailed": 42,\
    "happiness": 1,\
    "neutral": 99.991,\
    "sadness": 2\
  },{\
    "ID": 5,\
    "gender": "Male",\
    "age": 24,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Vittore Carpaccio",\
    "Title": "Portrait of a Knight",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "https://use2-uploads4.wikiart.org/images/vittore-carpaccio/portrait-of-a-knight-1510.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vittore-carpaccio",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 7,\
    "pitch": 8.422058,\
    "roll": 10.188081,\
    "yaw": -2.3103728,\
    "eyes": "open",\
    "eyesdetailed": 99.856,\
    "mouth": "closed",\
    "mouthdetailed": 1.637,\
    "happiness": 179,\
    "neutral": 26.596,\
    "sadness": 61.857\
  },{\
    "ID": 6,\
    "gender": "Female",\
    "age": 29,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Bartolomeo Veneto",\
    "Title": "Portrait of a Noble Lady",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "https://use2-uploads0.wikiart.org/00112/images/bartolomeo-veneto/portrait-of-a-noble-lady.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bartolomeo-veneto",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 9.517,\
    "pitch": 0.023891147,\
    "roll": -4.581854,\
    "yaw": 35.15609,\
    "eyes": "open",\
    "eyesdetailed": 99.949,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 612,\
    "neutral": 98.777,\
    "sadness": 155\
  },{\
    "ID": 7,\
    "gender": "Male",\
    "age": 45,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Rogier van der Weyden",\
    "Title": "Man holding book",\
    "area": "Europe",\
    "Year": 1449,\
    "url": "https://use2-uploads8.wikiart.org/images/rogier-van-der-weyden/man-holding-book.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rogier-van-der-weyden",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 102,\
    "pitch": 1.5909474,\
    "roll": 2.1170926,\
    "yaw": 33.625195,\
    "eyes": "open",\
    "eyesdetailed": 99.992,\
    "mouth": "closed",\
    "mouthdetailed": 43,\
    "happiness": 0,\
    "neutral": 99.997,\
    "sadness": 2\
  },{\
    "ID": 11,\
    "gender": "Male",\
    "age": 39,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Gerard David",\
    "Title": "Portrait of a Goldsmith",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "https://use2-uploads6.wikiart.org/images/gerard-david/portrait-of-a-goldsmith.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/gerard-david",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 189,\
    "pitch": 4.02637,\
    "roll": -3.5533981,\
    "yaw": 21.86806,\
    "eyes": "open",\
    "eyesdetailed": 99.865,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 1.82,\
    "neutral": 97.496,\
    "sadness": 16\
  },{\
    "ID": 12,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Pieter Aertsen",\
    "Title": "Market woman at a vegetable stand",\
    "area": "Europe",\
    "Year": 1567,\
    "url": "https://use2-uploads5.wikiart.org/images/pieter-aertsen/market-woman-at-a-vegetable-stand-1567.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pieter-aertsen",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 56,\
    "pitch": 8.585293,\
    "roll": -23.33981,\
    "yaw": 21.350029,\
    "eyes": "open",\
    "eyesdetailed": 99.88,\
    "mouth": "closed",\
    "mouthdetailed": 14,\
    "happiness": 1,\
    "neutral": 99.998,\
    "sadness": 0\
  },{\
    "ID": 13,\
    "gender": "Male",\
    "age": 30,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Albrecht Durer",\
    "Title": "Self-Portrait",\
    "area": "Europe",\
    "Year": 1493,\
    "url": "https://use2-uploads3.wikiart.org/images/albrecht-durer/self-portrait-1493.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/albrecht-durer",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 127,\
    "pitch": -4.220735,\
    "roll": -7.2948766,\
    "yaw": -37.946774,\
    "eyes": "open",\
    "eyesdetailed": 99.989,\
    "mouth": "open",\
    "mouthdetailed": 692,\
    "happiness": 19,\
    "neutral": 99.447,\
    "sadness": 3\
  },{\
    "ID": 14,\
    "gender": "Female",\
    "age": 44,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Rogier van der Weyden",\
    "Title": "Portrait of a Lady",\
    "area": "Europe",\
    "Year": 1460,\
    "url": "https://use2-uploads0.wikiart.org/images/rogier-van-der-weyden/portrait-of-a-lady-1460(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rogier-van-der-weyden",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 142,\
    "pitch": 4.867308,\
    "roll": -2.8333097,\
    "yaw": 34.858044,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 85,\
    "neutral": 96.751,\
    "sadness": 3.139\
  },{\
    "ID": 15,\
    "gender": "Male",\
    "age": 38,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Bartolomeo Veneto",\
    "Title": "Portrait of a Noble Man",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "https://use2-uploads8.wikiart.org/00112/images/bartolomeo-veneto/portrait-of-a-noble-man.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bartolomeo-veneto",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 327,\
    "pitch": 9.375536,\
    "roll": -7.927124,\
    "yaw": 14.959858,\
    "eyes": "open",\
    "eyesdetailed": 97.74,\
    "mouth": "open",\
    "mouthdetailed": 99.721,\
    "happiness": 99,\
    "neutral": 45.3,\
    "sadness": 2.77\
  },{\
    "ID": 16,\
    "gender": "Female",\
    "age": 39,\
    "Style": "Renaissance Art",\
    "Category": "High Renaissance",\
    "Artist": "Pietro Perugino",\
    "Title": "Madonna and Child",\
    "area": "Europe",\
    "Year": 1495,\
    "url": "https://use2-uploads3.wikiart.org/images/pietro-perugino/madonna-and-child.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pietro-perugino",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 0.07,\
    "pitch": 8.2488365,\
    "roll": -28.496881,\
    "yaw": 17.717949,\
    "eyes": "open",\
    "eyesdetailed": 99.614,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 78,\
    "neutral": 99.471,\
    "sadness": 41\
  },{\
    "ID": 17,\
    "gender": "Male",\
    "age": 28,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Petrus Christus",\
    "Title": "Potrait of a Carthusian",\
    "area": "Europe",\
    "Year": 1446,\
    "url": "https://use2-uploads5.wikiart.org/images/petrus-christus/potrait-of-a-carthusian-1446.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/petrus-christus",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 36,\
    "pitch": 5.171088,\
    "roll": -1.5145437,\
    "yaw": -23.585022,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 1.438,\
    "happiness": 0,\
    "neutral": 100,\
    "sadness": 0\
  },{\
    "ID": 20,\
    "gender": "Female",\
    "age": 20,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hans Holbein the Younger",\
    "Title": "Portrait of a Lady, thought to be Anne Boleyn",\
    "area": "Europe",\
    "Year": 1534,\
    "url": "https://use2-uploads3.wikiart.org/images/hans-holbein-the-younger/portrait-of-a-lady-thought-to-be-anne-boleyn.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hans-holbein-the-younger",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 759,\
    "pitch": 1.1379676,\
    "roll": 5.0800223,\
    "yaw": -46.07565,\
    "eyes": "open",\
    "eyesdetailed": 99.867,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 2.819,\
    "neutral": 69.714,\
    "sadness": 23.725\
  },{\
    "ID": 22,\
    "gender": "Male",\
    "age": 40,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Hans Holbein the Younger",\
    "Title": "Portrait of Thomas Cromwell",\
    "area": "Europe",\
    "Year": 1533,\
    "url": "https://use2-uploads4.wikiart.org/images/hans-holbein-the-younger/portrait-of-thomas-cromwell.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hans-holbein-the-younger",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 72,\
    "pitch": -13.643966,\
    "roll": 6.9446697,\
    "yaw": 74.793755,\
    "eyes": "closed",\
    "eyesdetailed": 8.745,\
    "mouth": "open",\
    "mouthdetailed": 508,\
    "happiness": 3.768,\
    "neutral": 84.236,\
    "sadness": 1.374\
  },{\
    "ID": 23,\
    "gender": "Male",\
    "age": 55,\
    "Style": "Renaissance Art",\
    "Category": "Early Renaissance",\
    "Artist": "Domenico Ghirlandaio",\
    "Title": "Old Man with a Young Boy",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "https://use2-uploads6.wikiart.org/images/domenico-ghirlandaio/old-man-with-a-young-boy.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domenico-ghirlandaio",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 194,\
    "pitch": 10.762893,\
    "roll": -2.6632695,\
    "yaw": -31.810001,\
    "eyes": "open",\
    "eyesdetailed": 97.273,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 17,\
    "neutral": 99.949,\
    "sadness": 0.02\
  },{\
    "ID": 26,\
    "gender": "Male",\
    "age": 60,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Bernhard Strigel",\
    "Title": "Portrait of Georg Tannstetter (Collimitius)",\
    "area": "Europe",\
    "Year": 1515,\
    "url": "https://use2-uploads1.wikiart.org/images/bernhard-strigel/portrait-of-georg-tannstetter-collimitius.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bernhard-strigel",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 35,\
    "pitch": -2.6151805,\
    "roll": 4.036066,\
    "yaw": -27.053682,\
    "eyes": "open",\
    "eyesdetailed": 98.959,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0,\
    "neutral": 99.999,\
    "sadness": 0\
  },{\
    "ID": 27,\
    "gender": "Male",\
    "age": 42,\
    "Style": "Renaissance Art",\
    "Category": "Northern Renaissance",\
    "Artist": "Rogier van der Weyden",\
    "Title": "Portrait of Charles the Bold",\
    "area": "Europe",\
    "Year": 1510,\
    "url": "https://use2-uploads4.wikiart.org/images/rogier-van-der-weyden/portrait-of-charles-the-bold-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rogier-van-der-weyden",\
    "": "",\
    "smile": "no",\
    "smiledetailed": "0.24",\
    "pitch": "7.4199724",\
    "roll": "-1.8872977",\
    "yaw": "25.981627",\
    "eyes": "open",\
    "eyesdetailed": "98.959",\
    "mouth": "cloesd",\
    "mouthdetailed": "0",\
    "happiness": "0",\
    "neutral": "99.999",\
    "sadness": "0"\
  },{\
    "ID": 28,\
    "gender": "Male",\
    "age": 72,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "George Romney",\
    "Title": "Admiral John Forbes (1714â1796)",\
    "area": "Europe",\
    "Year": 1778,\
    "url": "https://use2-uploads0.wikiart.org/images/george-romney/admiral-john-forbes-1714-1796-1778.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-romney",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 376,\
    "pitch": 1.9918402,\
    "roll": -9.094906,\
    "yaw": 24.352488,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 14.978,\
    "neutral": 49.672,\
    "sadness": 34.965\
  },{\
    "ID": 32,\
    "gender": "Male",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Vasily Tropinin",\
    "Title": "Portrait of Alexander Pushkin",\
    "area": "Europe",\
    "Year": 1827,\
    "url": "https://use2-uploads5.wikiart.org/images/vasily-tropinin/not_detected_241177.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vasily-tropinin",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 5.391,\
    "pitch": 0.2738846,\
    "roll": -8.599382,\
    "yaw": -20.441442,\
    "eyes": "open",\
    "eyesdetailed": 99.994,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0,\
    "neutral": 100,\
    "sadness": 0\
  },{\
    "ID": 36,\
    "gender": "Male",\
    "age": 71,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Charles Turner",\
    "Title": "Cyril Jackson",\
    "area": "Europe",\
    "Year": 1811,\
    "url": "https://use2-uploads3.wikiart.org/images/charles-turner/cyril-jackson-1811.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/charles-turner",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 17,\
    "pitch": 7.171772,\
    "roll": -7.395189,\
    "yaw": 11.02053,\
    "eyes": "open",\
    "eyesdetailed": 99.073,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 3,\
    "neutral": 99.771,\
    "sadness": 216\
  },{\
    "ID": 37,\
    "gender": "Male",\
    "age": 44,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Artemisia Gentileschi",\
    "Title": "Portrait of a Condottiero",\
    "area": "Europe",\
    "Year": 1622,\
    "url": "https://use2-uploads4.wikiart.org/images/artemisia-gentileschi/portrait-of-a-condottiero-1622.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/artemisia-gentileschi",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 90.611,\
    "pitch": 3.2302225,\
    "roll": -3.6506217,\
    "yaw": -9.015575,\
    "eyes": "open",\
    "eyesdetailed": 99.274,\
    "mouth": "open",\
    "mouthdetailed": 97.798,\
    "happiness": 99.976,\
    "neutral": 4,\
    "sadness": 6\
  },{\
    "ID": 38,\
    "gender": "Male",\
    "age": 39,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Jacob Jordaens",\
    "Title": "Portrait of a Young Married Couple",\
    "area": "Europe",\
    "Year": 1620,\
    "url": "https://use2-uploads6.wikiart.org/images/jacob-jordaens/portrait-of-a-young-married-couple-1620.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jacob-jordaens",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 142,\
    "pitch": 7.1525316,\
    "roll": -2.054493,\
    "yaw": -10.424069,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 17,\
    "happiness": 227,\
    "neutral": 98.145,\
    "sadness": 497\
  },{\
    "ID": 39,\
    "gender": "Female",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Mikhail Shibanov",\
    "Title": "Portrait of A. G. Spiridov",\
    "area": "Europe",\
    "Year": 1772,\
    "url": "https://use2-uploads7.wikiart.org/images/mikhail-shibanov/portrait-of-a-g-spiridov-1772.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/mikhail-shibanov",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 6.301,\
    "pitch": 6.324619,\
    "roll": 4.109851,\
    "yaw": -17.308249,\
    "eyes": "open",\
    "eyesdetailed": 99.341,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 1,\
    "neutral": 99.879,\
    "sadness": 81\
  },{\
    "ID": 40,\
    "gender": "Male",\
    "age": 63,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Allan Ramsay",\
    "Title": "Portrait of David Hume",\
    "area": "Europe",\
    "Year": 1766,\
    "url": "https://use2-uploads5.wikiart.org/images/allan-ramsay/portrait-of-david-hume.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/allan-ramsay",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 5.362,\
    "pitch": 1.5180684,\
    "roll": 0.37998977,\
    "yaw": -3.7447784,\
    "eyes": "open",\
    "eyesdetailed": 99.276,\
    "mouth": "closed",\
    "mouthdetailed": 0.01,\
    "happiness": 64,\
    "neutral": 99.871,\
    "sadness": 59\
  },{\
    "ID": 41,\
    "gender": "Male",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Pierre-Paul Prud&#39;hon",\
    "Title": "Arnauld de Beaufort",\
    "area": "Europe",\
    "Year": 1818,\
    "url": "https://use2-uploads6.wikiart.org/images/pierre-paul-prud-hon/arnauld-de-beaufort-1818.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pierre-paul-prud-hon",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 358,\
    "pitch": 15.647796,\
    "roll": 0.048924748,\
    "yaw": -12.165686,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0.05,\
    "neutral": 658,\
    "sadness": 6.855\
  },{\
    "ID": 43,\
    "gender": "Male",\
    "age": 51,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Dmitry Levitzky",\
    "Title": "Portrait of Alexander Kokorinov, Director and First Rector of the Academy of Arts in St. Petersburg.",\
    "area": "Europe",\
    "Year": 1769,\
    "url": "https://use2-uploads5.wikiart.org/images/dmitry-levitzky/portrait-of-alexander-kokorinov-director-and-first-rector-of-the-academy-of-arts-in-st-1769.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/dmitry-levitzky",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 387,\
    "pitch": 2.506548,\
    "roll": 5.4014063,\
    "yaw": 15.670031,\
    "eyes": "open",\
    "eyesdetailed": 99.988,\
    "mouth": "closed",\
    "mouthdetailed": 87,\
    "happiness": 491,\
    "neutral": 99.164,\
    "sadness": 57\
  },{\
    "ID": 46,\
    "gender": "Male",\
    "age": 49,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Rembrandt",\
    "Title": "Self-portrait with Saskia in the Parable of the Prodigal Son",\
    "area": "",\
    "Year": 1635,\
    "url": "https://use2-uploads4.wikiart.org/images/rembrandt/self-portrait-with-saskia-in-the-parable-of-the-prodigal-son.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rembrandt",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 98.085,\
    "pitch": 7.658737,\
    "roll": 15.115259,\
    "yaw": 31.996279,\
    "eyes": "open",\
    "eyesdetailed": 80.452,\
    "mouth": "open",\
    "mouthdetailed": 99.992,\
    "happiness": 99.97,\
    "neutral": 26,\
    "sadness": 0\
  },{\
    "ID": 47,\
    "gender": "Female",\
    "age": 64,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Charles Turner",\
    "Title": "Harriot Beauclerk (n&#233;e Mellon), Duchess of St Albans",\
    "area": "Europe",\
    "Year": 1806,\
    "url": "https://use2-uploads3.wikiart.org/images/charles-turner/harriot-beauclerk-n-e-mellon-duchess-of-st-albans-1806.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/charles-turner",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 13.397,\
    "pitch": 9.897163,\
    "roll": 17.477661,\
    "yaw": 47.069252,\
    "eyes": "open",\
    "eyesdetailed": 98.127,\
    "mouth": "closed",\
    "mouthdetailed": 27.951,\
    "happiness": 61.953,\
    "neutral": 25.604,\
    "sadness": 79\
  },{\
    "ID": 50,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Constantin Stahi",\
    "Title": "Portrait of a Girl",\
    "area": "Europe",\
    "Year": 1873,\
    "url": "https://use2-uploads1.wikiart.org/images/constantin-stahi/portrait-of-a-girl-1873.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/constantin-stahi",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 32.603,\
    "pitch": -2.1869872,\
    "roll": -16.94519,\
    "yaw": 59.70441,\
    "eyes": "open",\
    "eyesdetailed": 91.988,\
    "mouth": "closed",\
    "mouthdetailed": 7.842,\
    "happiness": 31.398,\
    "neutral": 68.465,\
    "sadness": 3\
  },{\
    "ID": 51,\
    "gender": "Male",\
    "age": 63,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Joshua Reynolds",\
    "Title": "Mrs Siddons as the Tragic Muse",\
    "area": "Europe",\
    "Year": 1784,\
    "url": "https://use2-uploads3.wikiart.org/images/joshua-reynolds/mrs-siddons-as-the-tragic-muse-1789.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/joshua-reynolds",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 5.364,\
    "pitch": 1.4646785,\
    "roll": 0.41173586,\
    "yaw": -3.6673086,\
    "eyes": "open",\
    "eyesdetailed": 99.266,\
    "mouth": "closed",\
    "mouthdetailed": 0.01,\
    "happiness": 68,\
    "neutral": 99.867,\
    "sadness": 59\
  },{\
    "ID": 52,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Pierre-Paul Prud&#39;hon",\
    "Title": "Portrait of the Empress Josephine",\
    "area": "Europe",\
    "Year": 1805,\
    "url": "https://use2-uploads2.wikiart.org/images/pierre-paul-prud-hon/portrait-of-the-empress-josephine-1805.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pierre-paul-prud-hon",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.505,\
    "pitch": -1.2879951,\
    "roll": -20.277401,\
    "yaw": 40.611263,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 5.775,\
    "neutral": 93.543,\
    "sadness": 2\
  },{\
    "ID": 54,\
    "gender": "Female",\
    "age": 24,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Allan Ramsay",\
    "Title": "George III",\
    "area": "Europe",\
    "Year": 1700,\
    "url": "https://use2-uploads2.wikiart.org/images/allan-ramsay/george-iii.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/allan-ramsay",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 49,\
    "pitch": -1.1046507,\
    "roll": -1.4477235,\
    "yaw": 25.736658,\
    "eyes": "open",\
    "eyesdetailed": 99.923,\
    "mouth": "closed",\
    "mouthdetailed": 6,\
    "happiness": 0.14,\
    "neutral": 99.436,\
    "sadness": 0.2\
  },{\
    "ID": 56,\
    "gender": "Female",\
    "age": 19,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Gheorghe Tattarescu",\
    "Title": "Woman with Tambourine",\
    "area": "Europe",\
    "Year": 1800,\
    "url": "https://use2-uploads2.wikiart.org/images/gheorghe-tattarescu/woman-with-tambourine.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/gheorghe-tattarescu",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 39,\
    "pitch": 4.191131,\
    "roll": -17.082796,\
    "yaw": 13.0082445,\
    "eyes": "open",\
    "eyesdetailed": 99.991,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0,\
    "neutral": 99.995,\
    "sadness": 5\
  },{\
    "ID": 58,\
    "gender": "Female",\
    "age": 45,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Judith Leyster",\
    "Title": "A Youth with a Jug",\
    "area": "Europe",\
    "Year": 1629,\
    "url": "https://use2-uploads3.wikiart.org/images/judith-leyster/a-youth-with-a-jug.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/judith-leyster",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 99.695,\
    "pitch": 23.591816,\
    "roll": -10.837547,\
    "yaw": 18.185505,\
    "eyes": "open",\
    "eyesdetailed": 99.919,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 5.045,\
    "neutral": 6,\
    "sadness": 3.055\
  },{\
    "ID": 59,\
    "gender": "Male",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Franz Xaver Winterhalter",\
    "Title": "Portrait of Leonilla, Princess of Sayn Wittgenstein",\
    "area": "Europe",\
    "Year": 1843,\
    "url": "https://use2-uploads0.wikiart.org/images/franz-xaver-winterhalter/portrait-of-leonilla-princess-of-sayn-wittgenstein.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/franz-xaver-winterhalter",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 2.038,\
    "pitch": 2.6661506,\
    "roll": 5.5369806,\
    "yaw": -28.969099,\
    "eyes": "open",\
    "eyesdetailed": 99.656,\
    "mouth": "closed",\
    "mouthdetailed": 4.118,\
    "happiness": 219,\
    "neutral": 58.884,\
    "sadness": 31\
  },{\
    "ID": 62,\
    "gender": "Female",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Fyodor Rokotov",\
    "Title": "Portrait of Count Alexey Bobrinsky as a Child",\
    "area": "Europe",\
    "Year": 1760,\
    "url": "https://use2-uploads0.wikiart.org/images/fyodor-rokotov/portrait-of-a-g-bobrinsky-in-his-childhood.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-rokotov",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 88.649,\
    "pitch": 2.6309955,\
    "roll": 2.419659,\
    "yaw": 13.415312,\
    "eyes": "open",\
    "eyesdetailed": 99.993,\
    "mouth": "closed",\
    "mouthdetailed": 2,\
    "happiness": 98.663,\
    "neutral": 1.331,\
    "sadness": 1\
  },{\
    "ID": 64,\
    "gender": "Male",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Henry Raeburn",\
    "Title": "General Sir William Maxwell",\
    "area": "Europe",\
    "Year": 1700,\
    "url": "https://use2-uploads2.wikiart.org/images/henry-raeburn/general-sir-william-maxwell.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/henry-raeburn",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 219,\
    "pitch": -2.5207326,\
    "roll": 4.047352,\
    "yaw": 19.750616,\
    "eyes": "open",\
    "eyesdetailed": 99.843,\
    "mouth": "closed",\
    "mouthdetailed": 5,\
    "happiness": 2.597,\
    "neutral": 97.398,\
    "sadness": 2\
  },{\
    "ID": 65,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "John Hoppner",\
    "Title": "Jane Elizabeth, Countess of Oxford",\
    "area": "Europe",\
    "Year": 1797,\
    "url": "https://use2-uploads3.wikiart.org/images/john-hoppner/jane-elizabeth-countess-of-oxford-1797.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-hoppner",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 731,\
    "pitch": 0.6978336,\
    "roll": 11.398715,\
    "yaw": -51.495007,\
    "eyes": "open",\
    "eyesdetailed": 97.635,\
    "mouth": "closed",\
    "mouthdetailed": 5,\
    "happiness": 3.325,\
    "neutral": 96.641,\
    "sadness": 5\
  },{\
    "ID": 66,\
    "gender": "Female",\
    "age": 34,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Rosalba Carriera",\
    "Title": "Lady in a Turkish Costume (Felicita Sartori)",\
    "area": "Europe",\
    "Year": 1728,\
    "url": "https://use2-uploads7.wikiart.org/images/rosalba-carriera/lady-in-a-turkish-costume-felicita-sartori-1728.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rosalba-carriera",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 9.837,\
    "pitch": 3.4732335,\
    "roll": -18.548817,\
    "yaw": 9.010399,\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closed",\
    "mouthdetailed": 4,\
    "happiness": 20.432,\
    "neutral": 32.659,\
    "sadness": 32.848\
  },{\
    "ID": 68,\
    "gender": "Female",\
    "age": 30,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Pierre-Paul Prud&#39;hon",\
    "Title": "Portrait of Constance Mayer",\
    "area": "Europe",\
    "Year": 1804,\
    "url": "https://use2-uploads5.wikiart.org/images/pierre-paul-prud-hon/portrait-of-constance-mayer-1804.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pierre-paul-prud-hon",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 96.09,\
    "pitch": 11.037566,\
    "roll": -17.758488,\
    "yaw": -6.06178,\
    "eyes": "open",\
    "eyesdetailed": 83.308,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 85.954,\
    "neutral": 22,\
    "sadness": 1.518\
  },{\
    "ID": 71,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Vasily Tropinin",\
    "Title": "Boy with a Dead Goldfinch",\
    "area": "Europe",\
    "Year": 1829,\
    "url": "https://use2-uploads7.wikiart.org/images/vasily-tropinin/boy-with-a-dead-goldfinch-1829.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vasily-tropinin",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 4.216,\
    "pitch": -1.0028118,\
    "roll": 10.061953,\
    "yaw": -37.44836,\
    "eyes": "open",\
    "eyesdetailed": 95.97,\
    "mouth": "open",\
    "mouthdetailed": 60.516,\
    "happiness": 18,\
    "neutral": 99.353,\
    "sadness": 0.23\
  },{\
    "ID": 72,\
    "gender": "Male",\
    "age": 49,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Adolph Menzel",\
    "Title": "Portrait of Paul Johann Ludwig von Heyse",\
    "area": "Europe",\
    "Year": 1853,\
    "url": "https://use2-uploads5.wikiart.org/images/adolph-menzel/portrait-of-paul-johann-ludwig-von-heyse-1853(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/adolph-menzel",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 496,\
    "pitch": -0.24884598,\
    "roll": 1.2650731,\
    "yaw": 21.96937,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 91,\
    "neutral": 99.667,\
    "sadness": 19\
  },{\
    "ID": 74,\
    "gender": "Male",\
    "age": 30,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Baptiste-Simeon Chardin",\
    "Title": "Boy with a Top",\
    "area": "Europe",\
    "Year": 1735,\
    "url": "https://use2-uploads4.wikiart.org/images/jean-baptiste-simeon-chardin/boy-with-a-top.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-baptiste-simeon-chardin",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 269,\
    "pitch": 10.583779,\
    "roll": -12.378269,\
    "yaw": 54.5209,\
    "eyes": "closed",\
    "eyesdetailed": 23.653,\
    "mouth": "closed",\
    "mouthdetailed": 1.183,\
    "happiness": 28,\
    "neutral": 99.499,\
    "sadness": 423\
  },{\
    "ID": 75,\
    "gender": "Female",\
    "age": 51,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Giovanni Battista Tiepolo",\
    "Title": "Apollo and Diana",\
    "area": "Europe",\
    "Year": 1757,\
    "url": "https://use2-uploads8.wikiart.org/images/giovanni-battista-tiepolo/apollo-and-diana-1757.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giovanni-battista-tiepolo",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 615,\
    "pitch": 7.2540913,\
    "roll": 17.834839,\
    "yaw": 20.69632,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "open",\
    "mouthdetailed": 78.43,\
    "happiness": 91,\
    "neutral": 93.648,\
    "sadness": 4.488\
  },{\
    "ID": 76,\
    "gender": "Male",\
    "age": 55,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Adriaen Brouwer",\
    "Title": "Youth Making a Face",\
    "area": "Europe",\
    "Year": 1633,\
    "url": "https://use2-uploads5.wikiart.org/images/adriaen-brouwer/youth-making-a-face.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/adriaen-brouwer",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 16.721,\
    "pitch": 7.9757376,\
    "roll": -15.70117,\
    "yaw": -5.918459,\
    "eyes": "open",\
    "eyesdetailed": 99.892,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 6.67,\
    "neutral": 80.093,\
    "sadness": 122\
  },{\
    "ID": 78,\
    "gender": "Male",\
    "age": 44,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Theodore Gericault",\
    "Title": "Portrait of a Kleptomaniac",\
    "area": "Europe",\
    "Year": 1819,\
    "url": "https://use2-uploads2.wikiart.org/images/theodore-gericault/portrait-of-a-kleptomaniac-1822.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/theodore-gericault",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 2.306,\
    "pitch": 4.0956135,\
    "roll": -6.661321,\
    "yaw": -5.6663156,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 27,\
    "neutral": 96.887,\
    "sadness": 13\
  },{\
    "ID": 79,\
    "gender": "Female",\
    "age": 34,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Henry Raeburn",\
    "Title": "Portrait of Mrs. E. Bethune",\
    "area": "Europe",\
    "Year": 1750,\
    "url": "https://use2-uploads0.wikiart.org/images/henry-raeburn/portrait-of-mrs-e-bethune.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/henry-raeburn",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 2.064,\
    "pitch": -0.72844046,\
    "roll": 3.5680437,\
    "yaw": -23.465384,\
    "eyes": "open",\
    "eyesdetailed": 99.994,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 4.459,\
    "neutral": 95.271,\
    "sadness": 168\
  },{\
    "ID": 80,\
    "gender": "Male",\
    "age": 72,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Fyodor Bronnikov",\
    "Title": "The old beggar",\
    "area": "Europe",\
    "Year": 1869,\
    "url": "https://use2-uploads6.wikiart.org/images/fyodor-bronnikov/the-old-beggar-1869.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-bronnikov",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 2.636,\
    "pitch": 2.8890166,\
    "roll": 3.631402,\
    "yaw": -5.7240853,\
    "eyes": "open",\
    "eyesdetailed": 94.107,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 7.544,\
    "neutral": 36.043,\
    "sadness": 3.842\
  },{\
    "ID": 83,\
    "gender": "Male",\
    "age": 49,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Ivan Kramskoy",\
    "Title": "Portrait of Leo Tolstoy",\
    "area": "Europe",\
    "Year": 1873,\
    "url": "https://use2-uploads3.wikiart.org/images/ivan-kramskoy/portrait-of-leo-tolstoy-1873.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/ivan-kramskoy",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 84,\
    "pitch": 5.5631146,\
    "roll": -4.171719,\
    "yaw": 10.590696,\
    "eyes": "open",\
    "eyesdetailed": 99.99,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 19,\
    "neutral": 2.902,\
    "sadness": 1\
  },{\
    "ID": 85,\
    "gender": "Female",\
    "age": 36,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Pierre-Paul Prud&#39;hon",\
    "Title": "The King of Rome",\
    "area": "Europe",\
    "Year": 1811,\
    "url": "https://use2-uploads3.wikiart.org/images/pierre-paul-prud-hon/the-king-of-rome-1811.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pierre-paul-prud-hon",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 479,\
    "pitch": -1.5118614,\
    "roll": 53.37447,\
    "yaw": 5.3202505,\
    "eyes": "closed",\
    "eyesdetailed": 6.682,\
    "mouth": "closed",\
    "mouthdetailed": 7.266,\
    "happiness": 14,\
    "neutral": 99.383,\
    "sadness": 287\
  },{\
    "ID": 88,\
    "gender": "Female",\
    "age": 21,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Anne Vallayer-Coster",\
    "Title": "Portrait of Marie Antoinette",\
    "area": "Europe",\
    "Year": 1780,\
    "url": "https://use2-uploads6.wikiart.org/images/anne-vallayer-coster/portrait-of-marie-antoinette-1780.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/anne-vallayer-coster",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.536,\
    "pitch": 3.709964,\
    "roll": 2.0132926,\
    "yaw": -19.24806,\
    "eyes": "open",\
    "eyesdetailed": 99.893,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 46.304,\
    "neutral": 52.27,\
    "sadness": 75\
  },{\
    "ID": 89,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Louise Elisabeth Vigee Le Brun",\
    "Title": "Lady Hamilton",\
    "area": "Europe",\
    "Year": 1750,\
    "url": "https://use2-uploads5.wikiart.org/images/louise-elisabeth-vigee-le-brun/lady-hamilton.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 88.342,\
    "pitch": 3.4603472,\
    "roll": 24.37748,\
    "yaw": 26.966848,\
    "eyes": "open",\
    "eyesdetailed": 99.1,\
    "mouth": "open",\
    "mouthdetailed": 879,\
    "happiness": 97.835,\
    "neutral": 2.08,\
    "sadness": 9\
  },{\
    "ID": 91,\
    "gender": "Male",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Antoine Pesne",\
    "Title": "Frederick II of Prussia",\
    "area": "Europe",\
    "Year": 1757,\
    "url": "https://use2-uploads3.wikiart.org/images/antoine-pesne/frederick-ii-of-prussia-1757.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antoine-pesne",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 725,\
    "pitch": 1.5407319,\
    "roll": 0.26310143,\
    "yaw": 21.413532,\
    "eyes": "open",\
    "eyesdetailed": 99.942,\
    "mouth": "open",\
    "mouthdetailed": 82.537,\
    "happiness": 913,\
    "neutral": 97.853,\
    "sadness": 15\
  },{\
    "ID": 92,\
    "gender": "Female",\
    "age": 68,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Charles Turner",\
    "Title": "Catherine Whitmore (n&#233;e Thomason)",\
    "area": "Europe",\
    "Year": 1810,\
    "url": "https://use2-uploads3.wikiart.org/images/charles-turner/catherine-whitmore-n-e-thomason-1810.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/charles-turner",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 367,\
    "pitch": 1.4503591,\
    "roll": 5.192284,\
    "yaw": -13.134574,\
    "eyes": "open",\
    "eyesdetailed": 99.954,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 202,\
    "neutral": 99.76,\
    "sadness": 0.01\
  },{\
    "ID": 93,\
    "gender": "Female",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Louise Elisabeth Vigee Le Brun",\
    "Title": "Queen Marie Antoinette of France",\
    "area": "Europe",\
    "Year": 1783,\
    "url": "https://use2-uploads2.wikiart.org/images/louise-elisabeth-vigee-le-brun/queen-marie-antoinette-of-france-1783.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 12.449,\
    "pitch": 0.4369033,\
    "roll": 0.63840497,\
    "yaw": -22.115654,\
    "eyes": "open",\
    "eyesdetailed": 99.434,\
    "mouth": "closed",\
    "mouthdetailed": 56.701,\
    "happiness": 83.004,\
    "neutral": 16.301,\
    "sadness": 33\
  },{\
    "ID": 94,\
    "gender": "Male",\
    "age": 24,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Pierre-Narcisse Guerin",\
    "Title": "Portrait of Louis du Vergier",\
    "area": "Europe",\
    "Year": 1819,\
    "url": "https://use2-uploads8.wikiart.org/images/pierre-narcisse-guerin/portrait-of-louis-du-vergier-1819.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pierre-narcisse-guerin",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 543,\
    "pitch": -5.2992916,\
    "roll": -7.077303,\
    "yaw": 30.358591,\
    "eyes": "open",\
    "eyesdetailed": 98.85,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 95,\
    "neutral": 96.916,\
    "sadness": 71\
  },{\
    "ID": 95,\
    "gender": "Male",\
    "age": 28,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Allan Ramsay",\
    "Title": "Mary Digges (1737-1829) Lady Robert Manners",\
    "area": "Europe",\
    "Year": 1700,\
    "url": "https://use2-uploads6.wikiart.org/images/allan-ramsay/mary-digges-1737-1829-lady-robert-manners.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/allan-ramsay",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 2.856,\
    "pitch": 2.7159426,\
    "roll": 4.842083,\
    "yaw": -19.325686,\
    "eyes": "open",\
    "eyesdetailed": 98.681,\
    "mouth": "closed",\
    "mouthdetailed": 1.813,\
    "happiness": 1.749,\
    "neutral": 98.251,\
    "sadness": 0\
  },{\
    "ID": 96,\
    "gender": "Female",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Fyodor Rokotov",\
    "Title": "Portrait of Alexandra Struiskaya",\
    "area": "Europe",\
    "Year": 1772,\
    "url": "https://use2-uploads8.wikiart.org/images/fyodor-rokotov/portrait-of-alexandra-struiskaya.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-rokotov",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 6.363,\
    "pitch": 1.2477466,\
    "roll": 2.7089167,\
    "yaw": 10.68935,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 16.507,\
    "neutral": 80.249,\
    "sadness": 39\
  },{\
    "ID": 98,\
    "gender": "Male",\
    "age": 63,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Cornelis de Vos",\
    "Title": "Portrait of Elisabeth Mertens and her Late Husband",\
    "area": "Europe",\
    "Year": 1630,\
    "url": "https://use2-uploads0.wikiart.org/images/cornelis-de-vos/portrait-of-elisabeth-mertens-and-her-late-husband.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/cornelis-de-vos",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 75,\
    "pitch": -8.71002,\
    "roll": 4.162196,\
    "yaw": 16.696598,\
    "eyes": "open",\
    "eyesdetailed": 99.501,\
    "mouth": "closed",\
    "mouthdetailed": 4.03,\
    "happiness": 7,\
    "neutral": 76.188,\
    "sadness": 23.379\
  },{\
    "ID": 99,\
    "gender": "Male",\
    "age": 19,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Anton Raphael Mengs",\
    "Title": "Carlos IV, Prince of Asturias",\
    "area": "Europe",\
    "Year": 1765,\
    "url": "https://use2-uploads2.wikiart.org/00118/images/anton-raphael-mengs/carlos-iv-prince-of-asturias-1765.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/anton-raphael-mengs",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 2.175,\
    "pitch": 3.016782,\
    "roll": -0.936629,\
    "yaw": -17.914913,\
    "eyes": "open",\
    "eyesdetailed": 99.974,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 622,\
    "neutral": 98.848,\
    "sadness": 349\
  },{\
    "ID": 100,\
    "gender": "Female",\
    "age": 51,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Allan Ramsay",\
    "Title": "Portrait of Augusta of Saxe Gotha, Princess of Wales",\
    "area": "Europe",\
    "Year": 1780,\
    "url": "https://use2-uploads7.wikiart.org/images/allan-ramsay/portrait-of-augusta-of-saxe-gotha-princess-of-wales.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/allan-ramsay",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1.003,\
    "pitch": -1.7690063,\
    "roll": -0.4410616,\
    "yaw": 41.353676,\
    "eyes": "open",\
    "eyesdetailed": 64.405,\
    "mouth": "closed",\
    "mouthdetailed": 4,\
    "happiness": 64,\
    "neutral": 14.435,\
    "sadness": 4.047\
  },{\
    "ID": 101,\
    "gender": "Female",\
    "age": 42,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Fyodor Rokotov",\
    "Title": "Portrait of an Unknown Man in a Cocked Hat",\
    "area": "Europe",\
    "Year": 1770,\
    "url": "https://use2-uploads0.wikiart.org/images/fyodor-rokotov/portrait-of-an-unknown-man-in-a-cocked-hat.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-rokotov",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 87.016,\
    "pitch": 1.0328578,\
    "roll": 0.5650869,\
    "yaw": 9.397067,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "open",\
    "mouthdetailed": 237,\
    "happiness": 20.883,\
    "neutral": 76.514,\
    "sadness": 2.091\
  },{\
    "ID": 103,\
    "gender": "Male",\
    "age": 47,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Charles Turner",\
    "Title": "Henry Rich, 1st Earl of Holland",\
    "area": "Europe",\
    "Year": 1810,\
    "url": "https://use2-uploads2.wikiart.org/images/charles-turner/henry-rich-1st-earl-of-holland-1810.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/charles-turner",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 57.203,\
    "pitch": 0.39576763,\
    "roll": -0.56462204,\
    "yaw": -14.62686,\
    "eyes": "open",\
    "eyesdetailed": 99.99,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 3.797,\
    "neutral": 31.157,\
    "sadness": 47\
  },{\
    "ID": 104,\
    "gender": "Male",\
    "age": 46,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Thomas Gainsborough",\
    "Title": "John Plampin",\
    "area": "Europe",\
    "Year": 1753,\
    "url": "https://use2-uploads2.wikiart.org/images/thomas-gainsborough/john-plampin.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/thomas-gainsborough",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 70.02,\
    "pitch": 0.7898174,\
    "roll": 2.2639706,\
    "yaw": -14.445996,\
    "eyes": "open",\
    "eyesdetailed": 42.236,\
    "mouth": "closed",\
    "mouthdetailed": 2.12,\
    "happiness": 11.429,\
    "neutral": 79.145,\
    "sadness": 9.001\
  },{\
    "ID": 105,\
    "gender": "Male",\
    "age": 70,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Jacob Jordaens",\
    "Title": "Portrait of Johan Wierts",\
    "area": "Europe",\
    "Year": 1635,\
    "url": "https://use2-uploads5.wikiart.org/images/jacob-jordaens/portrait-of-johan-wierts-1635.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jacob-jordaens",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 0.45,\
    "pitch": 9.940434,\
    "roll": -8.173816,\
    "yaw": -2.8160605,\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closed",\
    "mouthdetailed": 18.733,\
    "happiness": 569,\
    "neutral": 72.547,\
    "sadness": 19\
  },{\
    "ID": 106,\
    "gender": "Male",\
    "age": 54,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "John Simpson",\
    "Title": "Captain Peter Heywood",\
    "area": "Europe",\
    "Year": 1822,\
    "url": "https://use2-uploads0.wikiart.org/images/john-simpson/captain-peter-heywood-1822.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-simpson",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 0,\
    "pitch": 5.4069657,\
    "roll": -11.638098,\
    "yaw": 19.252981,\
    "eyes": "open",\
    "eyesdetailed": 99.993,\
    "mouth": "closed",\
    "mouthdetailed": 5,\
    "happiness": 12,\
    "neutral": 99.568,\
    "sadness": 318\
  },{\
    "ID": 107,\
    "gender": "Male",\
    "age": 38,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Allan Ramsay",\
    "Title": "The painter&#39;s wife, Margaret Lindsay",\
    "area": "Europe",\
    "Year": 1700,\
    "url": "https://use2-uploads0.wikiart.org/images/allan-ramsay/the-painter-s-wife-margaret-lindsay.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/allan-ramsay",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.319,\
    "pitch": 6.426038,\
    "roll": 2.8014798,\
    "yaw": -33.767868,\
    "eyes": "open",\
    "eyesdetailed": 99.98,\
    "mouth": "closed",\
    "mouthdetailed": 3.609,\
    "happiness": 61,\
    "neutral": 99.914,\
    "sadness": 15\
  },{\
    "ID": 108,\
    "gender": "Male",\
    "age": 50,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "William-Adolphe Bouguereau",\
    "Title": "Portrait of the Artist",\
    "area": "Europe",\
    "Year": 1879,\
    "url": "https://use2-uploads6.wikiart.org/images/william-adolphe-bouguereau/portrait-of-the-artist-1879.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/william-adolphe-bouguereau",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1,\
    "pitch": -0.7993677,\
    "roll": -5.5747323,\
    "yaw": 30.45738,\
    "eyes": "open",\
    "eyesdetailed": 99.851,\
    "mouth": "closed",\
    "mouthdetailed": 57,\
    "happiness": 1,\
    "neutral": 99.339,\
    "sadness": 575\
  },{\
    "ID": 109,\
    "gender": "Male",\
    "age": 68,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "George Catlin",\
    "Title": "See-non-ty-a, an Iowa Medicine Man",\
    "area": "North America",\
    "Year": 1845,\
    "url": "https://use2-uploads4.wikiart.org/images/george-catlin/see-non-ty-a-an-iowa-medicine-man-1845.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-catlin",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1.458,\
    "pitch": -4.2340655,\
    "roll": -5.0872035,\
    "yaw": -0.87711835,\
    "eyes": "open",\
    "eyesdetailed": 99.998,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 2,\
    "neutral": 1.217,\
    "sadness": 98.707\
  },{\
    "ID": 110,\
    "gender": "Female",\
    "age": 58,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Charles Turner",\
    "Title": "Elizabeth Cromwell (n&#233;e Steward)",\
    "area": "Europe",\
    "Year": 1810,\
    "url": "https://use2-uploads4.wikiart.org/images/charles-turner/elizabeth-cromwell-n-e-steward-1810-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/charles-turner",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 66,\
    "pitch": -1.1992582,\
    "roll": 2.3230805,\
    "yaw": -28.723816,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 25.403,\
    "happiness": 1.932,\
    "neutral": 46.072,\
    "sadness": 51.228\
  },{\
    "ID": 112,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Francisco de Zurbaran",\
    "Title": "St. Rufina of Seville",\
    "area": "Europe",\
    "Year": 1635,\
    "url": "https://use2-uploads5.wikiart.org/images/francisco-zurbaran/st-rufina-of-seville-1640.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/francisco-de-zurbaran",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 56,\
    "pitch": 1.2912772,\
    "roll": 25.067797,\
    "yaw": 34.993576,\
    "eyes": "open",\
    "eyesdetailed": 99.82,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 7,\
    "neutral": 99.889,\
    "sadness": 1\
  },{\
    "ID": 113,\
    "gender": "Male",\
    "age": 77,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Rosalba Carriera",\
    "Title": "Portrait of a Gentleman in Red",\
    "area": "Europe",\
    "Year": 1739,\
    "url": "https://use2-uploads4.wikiart.org/images/rosalba-carriera/portrait-of-a-gentleman-in-red-1739.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rosalba-carriera",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 0.3,\
    "pitch": 0.5269474,\
    "roll": 2.3300235,\
    "yaw": 21.076027,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 32,\
    "happiness": 6,\
    "neutral": 99.993,\
    "sadness": 0\
  },{\
    "ID": 114,\
    "gender": "Male",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "John Hoppner",\
    "Title": "Captain Peter Parker",\
    "area": "Europe",\
    "Year": 1808,\
    "url": "https://use2-uploads8.wikiart.org/images/john-hoppner/captain-peter-parker-1808.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-hoppner",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.046,\
    "pitch": -3.4052958,\
    "roll": 3.713415,\
    "yaw": 43.03248,\
    "eyes": "open",\
    "eyesdetailed": 99.951,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 25,\
    "neutral": 99.961,\
    "sadness": 3\
  },{\
    "ID": 115,\
    "gender": "Female",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Giovanni Battista Tiepolo",\
    "Title": "A Young Woman With a Macaw",\
    "area": "Europe",\
    "Year": 1758,\
    "url": "https://use2-uploads4.wikiart.org/images/giovanni-battista-tiepolo/a-young-woman-with-a-macaw.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giovanni-battista-tiepolo",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 943,\
    "pitch": 6.239774,\
    "roll": 20.698812,\
    "yaw": 27.397848,\
    "eyes": "open",\
    "eyesdetailed": 99.998,\
    "mouth": "closed",\
    "mouthdetailed": 4,\
    "happiness": 3,\
    "neutral": 99.036,\
    "sadness": 2\
  },{\
    "ID": 118,\
    "gender": "Male",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Antoine-Jean Gros",\
    "Title": "Equestrian Portrait of Joachim Murat",\
    "area": "Europe",\
    "Year": 1812,\
    "url": "https://use2-uploads8.wikiart.org/00118/images/antoine-jean-gros/equestrian-portrait-of-joachim-murat-1812.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antoine-jean-gros",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.601,\
    "pitch": -1.3339274,\
    "roll": -0.7925662,\
    "yaw": -33.593918,\
    "eyes": "closed",\
    "eyesdetailed": 40.643,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 5.334,\
    "neutral": 63.254,\
    "sadness": 1.556\
  },{\
    "ID": 120,\
    "gender": "Female",\
    "age": 37,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Rosalba Carriera",\
    "Title": "A Venetian Lady from the House of Barbarigo (Caterina Sagredo Barbarigo)",\
    "area": "Europe",\
    "Year": 1735,\
    "url": "https://use2-uploads8.wikiart.org/images/rosalba-carriera/a-venetian-lady-from-the-house-of-barbarigo-caterina-sagredo-barbarigo-1735.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rosalba-carriera",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1.174,\
    "pitch": -4.4280415,\
    "roll": -8.078085,\
    "yaw": 25.627548,\
    "eyes": "open",\
    "eyesdetailed": 99.969,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 517,\
    "neutral": 98.937,\
    "sadness": 438\
  },{\
    "ID": 121,\
    "gender": "Male",\
    "age": 62,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Jean Auguste Dominique Ingres",\
    "Title": "Portrait of French journalist Louis-Fran&#231;ois Bertin",\
    "area": "Europe",\
    "Year": 1832,\
    "url": "https://use2-uploads6.wikiart.org/images/pierre-narcisse-guerin/the-portrait-of-the-chouan-rochejaquelin.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-auguste-dominique-ingres",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 51,\
    "pitch": 3.5018396,\
    "roll": -5.2049828,\
    "yaw": 1.9586506,\
    "eyes": "open",\
    "eyesdetailed": 99.985,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 15,\
    "neutral": 99.978,\
    "sadness": 0\
  },{\
    "ID": 125,\
    "gender": "Male",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Thomas Gainsborough",\
    "Title": "Mr. and Mrs. Andrews",\
    "area": "Europe",\
    "Year": 1749,\
    "url": "https://use2-uploads4.wikiart.org/images/thomas-gainsborough/mr-and-mrs-andrews-1749.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/thomas-gainsborough",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 169,\
    "pitch": 2.948728,\
    "roll": 3.2766168,\
    "yaw": -15.346649,\
    "eyes": "open",\
    "eyesdetailed": 99.999,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 20.343,\
    "neutral": 62.339,\
    "sadness": 8.873\
  },{\
    "ID": 127,\
    "gender": "Male",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "William Hogarth",\
    "Title": "William Cavendish, Marquess of Hartington, Later 4th Duke of Devonshire",\
    "area": "Europe",\
    "Year": 1741,\
    "url": "https://use2-uploads6.wikiart.org/images/william-hogarth/william-cavendish-marquess-of-hartington-later-4th-duke-of-devonshire-1741.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/william-hogarth",\
    "": "",\
    "smile": "",\
    "smiledetailed": 101,\
    "pitch": 3.698329,\
    "roll": -1.9360874,\
    "yaw": 23.27431,\
    "eyes": "open",\
    "eyesdetailed": 61.691,\
    "mouth": "open",\
    "mouthdetailed": 465,\
    "happiness": 6,\
    "neutral": 99.447,\
    "sadness": 15\
  },{\
    "ID": 128,\
    "gender": "Female",\
    "age": 20,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Rosalba Carriera",\
    "Title": "Crown Prince Friedrich Christian of Saxony",\
    "area": "Europe",\
    "Year": 1739,\
    "url": "https://use2-uploads7.wikiart.org/images/rosalba-carriera/crown-prince-friedrich-christian-of-saxony-1739.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rosalba-carriera",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 145,\
    "pitch": -1.0979922,\
    "roll": 1.5044528,\
    "yaw": -21.362871,\
    "eyes": "open",\
    "eyesdetailed": 99.404,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 1.11,\
    "neutral": 97.729,\
    "sadness": 34\
  },{\
    "ID": 130,\
    "gender": "Female",\
    "age": 23,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "George Romney",\
    "Title": "A Lady in a Brown Dress. &#39;The Parson&#39;s Daughter&#39;",\
    "area": "Europe",\
    "Year": 1785,\
    "url": "https://use2-uploads7.wikiart.org/images/george-romney/a-lady-in-a-brown-dress-the-parson-s-daughter-1785.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-romney",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.769,\
    "pitch": -8.51593,\
    "roll": -8.416075,\
    "yaw": 37.821476,\
    "eyes": "open",\
    "eyesdetailed": 99.951,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 22.785,\
    "neutral": 77.19,\
    "sadness": 3\
  },{\
    "ID": 131,\
    "gender": "Female",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Henry Raeburn",\
    "Title": "Boy and Rabbit",\
    "area": "Europe",\
    "Year": 1814,\
    "url": "https://use2-uploads7.wikiart.org/images/henry-raeburn/boy-and-rabbit.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/henry-raeburn",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1.274,\
    "pitch": 0.30913094,\
    "roll": 12.883867,\
    "yaw": 13.816487,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 7,\
    "neutral": 95.232,\
    "sadness": 4.737\
  },{\
    "ID": 132,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Alexey Venetsianov",\
    "Title": "Sleeping Herd-Boy",\
    "area": "Europe",\
    "Year": 1824,\
    "url": "https://use2-uploads6.wikiart.org/images/alexey-venetsianov/sleeping-herd-boy.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/alexey-venetsianov",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 651,\
    "pitch": 3.2062829,\
    "roll": 16.93768,\
    "yaw": -4.9610267,\
    "eyes": "closed",\
    "eyesdetailed": 2.951,\
    "mouth": "closed",\
    "mouthdetailed": 14.739,\
    "happiness": 0.01,\
    "neutral": 83.354,\
    "sadness": 15.311\
  },{\
    "ID": 133,\
    "gender": "Female",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Franz Xaver Winterhalter",\
    "Title": "Portrait of Victoria of the United Kingdom",\
    "area": "Europe",\
    "Year": 1843,\
    "url": "https://use2-uploads1.wikiart.org/images/franz-xaver-winterhalter/portrait-of-victoria-of-the-united-kingdom.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/franz-xaver-winterhalter",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1.173,\
    "pitch": 5.027414,\
    "roll": 0.4434873,\
    "yaw": 1.5196402,\
    "eyes": "open",\
    "eyesdetailed": 99.991,\
    "mouth": "closed",\
    "mouthdetailed": 0.03,\
    "happiness": 4,\
    "neutral": 99.992,\
    "sadness": 0\
  },{\
    "ID": 134,\
    "gender": "Female",\
    "age": 30,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "John Russell",\
    "Title": "Small Girl Presenting Cherries",\
    "area": "Europe",\
    "Year": 1780,\
    "url": "https://use2-uploads0.wikiart.org/images/john-russell/small-girl-presenting-cherries-1780.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-russell",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 30.997,\
    "pitch": 0.8412069,\
    "roll": -33.348877,\
    "yaw": 16.026052,\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closed",\
    "mouthdetailed": 22,\
    "happiness": 63.453,\
    "neutral": 34.611,\
    "sadness": 1.886\
  },{\
    "ID": 135,\
    "gender": "Female",\
    "age": 38,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "John Constable",\
    "Title": "Portrait of Maria Bicknell",\
    "area": "Europe",\
    "Year": 1816,\
    "url": "https://use2-uploads7.wikiart.org/images/john-constable/portrait-of-maria-bicknell-1816.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-constable",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 4.794,\
    "pitch": -1.746767,\
    "roll": -0.9831169,\
    "yaw": 50.3692,\
    "eyes": "open",\
    "eyesdetailed": 99.841,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 6.447,\
    "neutral": 93.501,\
    "sadness": 3\
  },{\
    "ID": 136,\
    "gender": "Male",\
    "age": 31,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Alexey Venetsianov",\
    "Title": "Girl with Burak",\
    "area": "Europe",\
    "Year": 1824,\
    "url": "https://use2-uploads4.wikiart.org/images/alexey-venetsianov/girl-with-burak.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/alexey-venetsianov",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 151,\
    "pitch": 9.341651,\
    "roll": -12.341871,\
    "yaw": 21.520157,\
    "eyes": "open",\
    "eyesdetailed": 99.994,\
    "mouth": "closed",\
    "mouthdetailed": 45,\
    "happiness": 2.51,\
    "neutral": 85.343,\
    "sadness": 4.821\
  },{\
    "ID": 137,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Marie-Guillemine Benoist",\
    "Title": "Portrait of Elisa Bonaparte, Grand Duchess of Tuscany",\
    "area": "Europe",\
    "Year": 1805,\
    "url": "https://use2-uploads7.wikiart.org/images/marie-guillemine-benoist/portrait-of-elisa-bonaparte-grand-duchess-of-tuscany-1805.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/marie-guillemine-benoist",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 39.585,\
    "pitch": 6.4591265,\
    "roll": 7.0467987,\
    "yaw": -8.503266,\
    "eyes": "closed",\
    "eyesdetailed": 8,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 115,\
    "neutral": 57.51,\
    "sadness": 1.959\
  },{\
    "ID": 138,\
    "gender": "Male",\
    "age": 55,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Charles Willson Peale",\
    "Title": "William Smith and His Grandson",\
    "area": "North America",\
    "Year": 1788,\
    "url": "https://use2-uploads0.wikiart.org/images/charles-willson-peale/william-smith-and-his-grandson-1788.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/charles-willson-peale",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 548,\
    "pitch": 9.077607,\
    "roll": -4.814181,\
    "yaw": 17.493578,\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 597,\
    "neutral": 99.213,\
    "sadness": 13\
  },{\
    "ID": 140,\
    "gender": "Male",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Antoine Pesne",\
    "Title": "Frederik I of Prussia",\
    "area": "Europe",\
    "Year": 1650,\
    "url": "https://use2-uploads6.wikiart.org/images/antoine-pesne/frederik-i-von-preu-en.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antoine-pesne",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1.019,\
    "pitch": 3.2357945,\
    "roll": -4.648258,\
    "yaw": -9.411427,\
    "eyes": "open",\
    "eyesdetailed": 99.888,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 30.502,\
    "neutral": 58.119,\
    "sadness": 97\
  },{\
    "ID": 141,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Thomas Sully",\
    "Title": "Portrait of the Artist",\
    "area": "North America",\
    "Year": 1821,\
    "url": "https://use2-uploads1.wikiart.org/images/thomas-sully/portrait-of-the-artist-1821.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/thomas-sully",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 16,\
    "pitch": 2.9705837,\
    "roll": 7.3855658,\
    "yaw": -19.218105,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 0,\
    "neutral": 99.997,\
    "sadness": 0\
  },{\
    "ID": 143,\
    "gender": "Female",\
    "age": 33,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Thomas Lawrence",\
    "Title": "Henrietta Maria Hill, Marchioness of Ailesbury",\
    "area": "Europe",\
    "Year": 1809,\
    "url": "https://use2-uploads0.wikiart.org/images/thomas-lawrence/henrietta-maria-hill-marchioness-of-ailesbury-1809.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/thomas-lawrence",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 0.04,\
    "pitch": -8.24138,\
    "roll": -1.037731,\
    "yaw": 36.84229,\
    "eyes": "open",\
    "eyesdetailed": 99.883,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 84,\
    "neutral": 99.808,\
    "sadness": 5\
  },{\
    "ID": 144,\
    "gender": "Female",\
    "age": 36,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Carolus-Duran",\
    "Title": "Portrait of Madame Marie Clerc",\
    "area": "Europe",\
    "Year": 1874,\
    "url": "https://use2-uploads8.wikiart.org/00121/images/carolus-duran/portrait-of-madame-marie-clerc-1974.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/carolus-duran",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 13,\
    "pitch": 9.600755,\
    "roll": 9.168089,\
    "yaw": 0.97934747,\
    "eyes": "open",\
    "eyesdetailed": 99.965,\
    "mouth": "closed",\
    "mouthdetailed": 46.739,\
    "happiness": 857,\
    "neutral": 99.134,\
    "sadness": 1\
  },{\
    "ID": 145,\
    "gender": "Male",\
    "age": 44,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Orest Kiprensky",\
    "Title": "Portrait of Colonel Evgraf V. Davydov",\
    "area": "Europe",\
    "Year": 1809,\
    "url": "https://use2-uploads0.wikiart.org/images/orest-kiprensky/portrait-of-colonel-evgraf-v-davydov-1809.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/orest-kiprensky",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 37,\
    "pitch": 1.1645079,\
    "roll": 2.349157,\
    "yaw": 14.446977,\
    "eyes": "open",\
    "eyesdetailed": 99.997,\
    "mouth": "closed",\
    "mouthdetailed": 3,\
    "happiness": 0,\
    "neutral": 99.666,\
    "sadness": 0\
  },{\
    "ID": 146,\
    "gender": "Female",\
    "age": 54,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Judith Leyster",\
    "Title": "Laughing Children with a Cat",\
    "area": "Europe",\
    "Year": 1629,\
    "url": "https://use2-uploads0.wikiart.org/images/judith-leyster/laughing-children-with-a-cat-1629.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/judith-leyster",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 99.938,\
    "pitch": -19.15046,\
    "roll": -19.603746,\
    "yaw": 16.969841,\
    "eyes": "open",\
    "eyesdetailed": 98.654,\
    "mouth": "open",\
    "mouthdetailed": 99.192,\
    "happiness": 95.395,\
    "neutral": 135,\
    "sadness": 2.728\
  },{\
    "ID": 147,\
    "gender": "Male",\
    "age": 82,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "David Wilkie",\
    "Title": "Sir Robert Liston,  Diplomat",\
    "area": "Europe",\
    "Year": 1811,\
    "url": "https://use2-uploads5.wikiart.org/images/david-wilkie/sir-robert-liston-diplomat-1811.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/david-wilkie",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 389,\
    "pitch": 1.039991,\
    "roll": -3.1983325,\
    "yaw": 19.850996,\
    "eyes": "open",\
    "eyesdetailed": 99.989,\
    "mouth": "closed",\
    "mouthdetailed": 16,\
    "happiness": 612,\
    "neutral": 98.904,\
    "sadness": 1\
  },{\
    "ID": 148,\
    "gender": "Male",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Caravaggio",\
    "Title": "Young Sick Bacchus",\
    "area": "Europe",\
    "Year": 1593,\
    "url": "https://use2-uploads2.wikiart.org/images/caravaggio/young-sick-bacchus(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/caravaggio",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 475,\
    "pitch": 0.5533059,\
    "roll": -18.538713,\
    "yaw": -21.103905,\
    "eyes": "open",\
    "eyesdetailed": 70.404,\
    "mouth": "open",\
    "mouthdetailed": 95.553,\
    "happiness": 15.847,\
    "neutral": 66.179,\
    "sadness": 24\
  },{\
    "ID": 150,\
    "gender": "Female",\
    "age": 34,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Ary Scheffer",\
    "Title": "Julie Salis Schwabe",\
    "area": "Europe",\
    "Year": 1850,\
    "url": "https://use2-uploads8.wikiart.org/00151/images/ary-scheffer/julie-salis-schwabe-1850.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/ary-scheffer",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 9,\
    "pitch": 3.5003192,\
    "roll": 4.4979243,\
    "yaw": 9.415342,\
    "eyes": "open",\
    "eyesdetailed": 99.796,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0.05,\
    "neutral": 99.881,\
    "sadness": 39\
  },{\
    "ID": 151,\
    "gender": "Female",\
    "age": 27,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Agostino Carracci",\
    "Title": "Portrait of Christine of Lorraine, Grand Duchess of Tuscany",\
    "area": "Europe",\
    "Year": 1589,\
    "url": "https://use2-uploads6.wikiart.org/images/agostino-carracci/portrait-of-christine-of-lorraine-grand-duchess-of-tuscany-1589.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/agostino-carracci",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3.866,\
    "pitch": 14.170956,\
    "roll": 0.78634304,\
    "yaw": 16.251755,\
    "eyes": "open",\
    "eyesdetailed": 98.058,\
    "mouth": "open",\
    "mouthdetailed": 97.111,\
    "happiness": 484,\
    "neutral": 99.443,\
    "sadness": 4\
  },{\
    "ID": 152,\
    "gender": "Female",\
    "age": 18,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Artemisia Gentileschi",\
    "Title": "Woman Playing a Lute",\
    "area": "Europe",\
    "Year": 1628,\
    "url": "https://use2-uploads3.wikiart.org/images/artemisia-gentileschi/woman-playing-a-lute.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/artemisia-gentileschi",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 5.217,\
    "pitch": -21.497852,\
    "roll": -17.311537,\
    "yaw": 64.57305,\
    "eyes": "closed",\
    "eyesdetailed": 0.23,\
    "mouth": "open",\
    "mouthdetailed": 96.948,\
    "happiness": 25,\
    "neutral": 99.853,\
    "sadness": 0\
  },{\
    "ID": 153,\
    "gender": "Male",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "John Simpson",\
    "Title": "Sir John Fleming Leicester",\
    "area": "Europe",\
    "Year": 1826,\
    "url": "https://use2-uploads5.wikiart.org/images/john-simpson/sir-john-fleming-leicester-1826.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-simpson",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 316,\
    "pitch": 5.3853116,\
    "roll": -9.343349,\
    "yaw": 15.785755,\
    "eyes": "open",\
    "eyesdetailed": 97.781,\
    "mouth": "closed",\
    "mouthdetailed": 33,\
    "happiness": 188,\
    "neutral": 71.569,\
    "sadness": 53\
  },{\
    "ID": 154,\
    "gender": "Male",\
    "age": 25,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "John Hoppner",\
    "Title": "Peter Leopold Nassau Cowper, 5th Earl Cowper",\
    "area": "Europe",\
    "Year": 1750,\
    "url": "https://use2-uploads8.wikiart.org/images/john-hoppner/peter-leopold-nassau-cowper-5th-earl-cowper.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-hoppner",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 1,\
    "pitch": 2.6508937,\
    "roll": -0.683109,\
    "yaw": -5.550248,\
    "eyes": "open",\
    "eyesdetailed": 99.936,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0,\
    "neutral": 100,\
    "sadness": 0\
  },{\
    "ID": 155,\
    "gender": "Female",\
    "age": 42,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Frans Hals",\
    "Title": "Fisher Boy",\
    "area": "Europe",\
    "Year": 1630,\
    "url": "https://use2-uploads5.wikiart.org/images/frans-hals/fisher-boy-1632.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/frans-hals",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 99.098,\
    "pitch": -2.466295,\
    "roll": -17.317781,\
    "yaw": 14.522519,\
    "eyes": "open",\
    "eyesdetailed": 100,\
    "mouth": "closed",\
    "mouthdetailed": 41.801,\
    "happiness": 99.638,\
    "neutral": 157,\
    "sadness": 193\
  },{\
    "ID": 156,\
    "gender": "Female",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Theodore Chasseriau",\
    "Title": "The Two Sisters",\
    "area": "Europe",\
    "Year": 1843,\
    "url": "https://use2-uploads1.wikiart.org/images/theodore-chasseriau/the-two-sisters-1843.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/theodore-chasseriau",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 225,\
    "pitch": -0.08443821,\
    "roll": -1.1766,\
    "yaw": -25.464308,\
    "eyes": "open",\
    "eyesdetailed": 98.896,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 15,\
    "neutral": 99.985,\
    "sadness": 0\
  },{\
    "ID": 157,\
    "gender": "Female",\
    "age": 26,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "George Romney",\
    "Title": "Charlotte Bettesworth (c.1755â1841), Mrs John Sargent",\
    "area": "Europe",\
    "Year": 1778,\
    "url": "https://use2-uploads3.wikiart.org/images/george-romney/charlotte-bettesworth-c-1755-1841-mrs-john-sargent-1778.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-romney",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 37,\
    "pitch": 4.9888296,\
    "roll": 16.596262,\
    "yaw": -18.55045,\
    "eyes": "open",\
    "eyesdetailed": 99.951,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 569,\
    "neutral": 99.411,\
    "sadness": 2\
  },{\
    "ID": 158,\
    "gender": "Male",\
    "age": 54,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "Vasily Perov",\
    "Title": "Portrait of the Author Feodor Dostoyevsky",\
    "area": "Europe",\
    "Year": 1872,\
    "url": "https://use2-uploads2.wikiart.org/images/vasily-perov/portrait-of-the-author-feodor-dostoyevsky-1872.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vasily-perov",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 3,\
    "pitch": 3.1295283,\
    "roll": 5.8150196,\
    "yaw": 50.29585,\
    "eyes": "open",\
    "eyesdetailed": 99.954,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 0.09,\
    "neutral": 13.579,\
    "sadness": 22.642\
  },{\
    "ID": 159,\
    "gender": "Female",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "David Allan",\
    "Title": "Portrait of Two Boys",\
    "area": "Europe",\
    "Year": 1783,\
    "url": "https://use2-uploads7.wikiart.org/images/david-allan/portrait-of-two-boys-1783.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/david-allan",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 16.684,\
    "pitch": 5.470289,\
    "roll": 0.5136464,\
    "yaw": 1.2832253,\
    "eyes": "open",\
    "eyesdetailed": 99.389,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 87.8,\
    "neutral": 11.43,\
    "sadness": 206\
  },{\
    "ID": 160,\
    "gender": "Male",\
    "age": 58,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Alexandre Jacovleff",\
    "Title": "Portrait of Vasily Shuhaev in his Studio",\
    "area": "Europe",\
    "Year": 1928,\
    "url": "https://use2-uploads4.wikiart.org/images/alexandre-yevgenievich-jacovleff/portrait-of-vasily-shuhaeva-in-his-studio-1928.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/alexandre-jacovleff",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 323,\
    "pitch": -3.2047844,\
    "roll": 2.8313434,\
    "yaw": 35.862095,\
    "eyes": "open",\
    "eyesdetailed": 75.473,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 23.107,\
    "neutral": 72.025,\
    "sadness": 0.02\
  },{\
    "ID": 161,\
    "gender": "Female",\
    "age": 32,\
    "Style": "Post Renaissance Art",\
    "Category": "Rococo",\
    "Artist": "Jean-Baptiste Greuze",\
    "Title": "Portrait of Madame Courcelles",\
    "area": "Europe",\
    "Year": 1750,\
    "url": "https://use2-uploads7.wikiart.org/images/jean-baptiste-greuze/portrait-of-madame-courcelles-1750.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-baptiste-greuze",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 11.57,\
    "pitch": 3.7545373,\
    "roll": 5.2266836,\
    "yaw": -8.01471,\
    "eyes": "open",\
    "eyesdetailed": 99.984,\
    "mouth": "closed",\
    "mouthdetailed": 3.886,\
    "happiness": 4.066,\
    "neutral": 40.529,\
    "sadness": 2\
  },{\
    "ID": 162,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Francisco de Zurbaran",\
    "Title": "Portrait of Fra Zumel Francisco",\
    "area": "Europe",\
    "Year": 1633,\
    "url": "https://use2-uploads2.wikiart.org/images/francisco-zurbaran/portrait-of-fra-zumel-francisco.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/francisco-de-zurbaran",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 645,\
    "pitch": -2.196915,\
    "roll": -12.039566,\
    "yaw": -13.082902,\
    "eyes": "open",\
    "eyesdetailed": 95.815,\
    "mouth": "closed",\
    "mouthdetailed": 21,\
    "happiness": 19,\
    "neutral": 97.751,\
    "sadness": 42\
  },{\
    "ID": 163,\
    "gender": "Male",\
    "age": 18,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "Thomas Lawrence",\
    "Title": "John Arthur Douglas Bloomfield, 2nd Baron Bloomfield",\
    "area": "Europe",\
    "Year": 1819,\
    "url": "https://use2-uploads6.wikiart.org/images/thomas-lawrence/john-arthur-douglas-bloomfield-2nd-baron-bloomfield-1819.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/thomas-lawrence",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 6.286,\
    "pitch": -3.040511,\
    "roll": -0.6556623,\
    "yaw": 52.28762,\
    "eyes": "open",\
    "eyesdetailed": 96.693,\
    "mouth": "closed",\
    "mouthdetailed": 3,\
    "happiness": 81.884,\
    "neutral": 14.87,\
    "sadness": 1.729\
  },{\
    "ID": 164,\
    "gender": "Male",\
    "age": 22,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Caravaggio",\
    "Title": "Boy with a Basket of Fruit",\
    "area": "Europe",\
    "Year": 1593,\
    "url": "https://use2-uploads1.wikiart.org/images/caravaggio/boy-with-a-basket-of-fruit(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/caravaggio",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 6.5,\
    "pitch": -3.6507044,\
    "roll": -16.772604,\
    "yaw": -29.14662,\
    "eyes": "open",\
    "eyesdetailed": 99.924,\
    "mouth": "open",\
    "mouthdetailed": 79.006,\
    "happiness": 1,\
    "neutral": 99.09,\
    "sadness": 0\
  },{\
    "ID": 165,\
    "gender": "Female",\
    "age": 46,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Domingos Sequeira",\
    "Title": "Retrato de D. Jo&#227;o VI",\
    "area": "Europe",\
    "Year": 1750,\
    "url": "https://use2-uploads8.wikiart.org/images/domingos-sequeira/retrato-de-d-jo-o-vi.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domingos-sequeira",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 18,\
    "pitch": 11.179599,\
    "roll": -4.1157994,\
    "yaw": 23.11449,\
    "eyes": "open",\
    "eyesdetailed": 98.724,\
    "mouth": "open",\
    "mouthdetailed": 99.973,\
    "happiness": 11,\
    "neutral": 98.557,\
    "sadness": 6\
  },{\
    "ID": 166,\
    "gender": "Male",\
    "age": 29,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "Dmitry Levitzky",\
    "Title": "Portrait of Alexander Lanskoy, Aide-de-camp to the Empress",\
    "area": "Europe",\
    "Year": 1782,\
    "url": "https://use2-uploads3.wikiart.org/images/dmitry-levitzky/portrait-of-alexander-lanskoy-aide-de-camp-to-the-empress-1782.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/dmitry-levitzky",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 4.837,\
    "pitch": 3.5634723,\
    "roll": -2.8686447,\
    "yaw": -22.993975,\
    "eyes": "open",\
    "eyesdetailed": 99.984,\
    "mouth": "closed",\
    "mouthdetailed": 1,\
    "happiness": 2.628,\
    "neutral": 95.29,\
    "sadness": 11\
  },{\
    "ID": 167,\
    "gender": "Male",\
    "age": 41,\
    "Style": "Post Renaissance Art",\
    "Category": "Romanticism",\
    "Artist": "David Allan",\
    "Title": "Sir William Hamilton",\
    "area": "Europe",\
    "Year": 1775,\
    "url": "https://use2-uploads7.wikiart.org/images/david-allan/sir-william-hamilton-1775.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/david-allan",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 15,\
    "pitch": 1.0438133,\
    "roll": -3.2724652,\
    "yaw": 22.706955,\
    "eyes": "open",\
    "eyesdetailed": 94.471,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 189,\
    "neutral": 99.518,\
    "sadness": 279\
  },{\
    "ID": 168,\
    "gender": "Male",\
    "age": 40,\
    "Style": "Post Renaissance Art",\
    "Category": "Baroque",\
    "Artist": "Anthony van Dyck",\
    "Title": "Self portrait with a Sunflower",\
    "area": "Europe",\
    "Year": 1632,\
    "url": "https://use2-uploads4.wikiart.org/images/anthony-van-dyck/self-portrait-with-a-sunflower-1632.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/anthony-van-dyck",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 641,\
    "pitch": 3.3100293,\
    "roll": -4.241677,\
    "yaw": -44.116585,\
    "eyes": "open",\
    "eyesdetailed": 99.898,\
    "mouth": "closed",\
    "mouthdetailed": 0,\
    "happiness": 1.296,\
    "neutral": 98.685,\
    "sadness": 2\
  },{\
    "ID": 169,\
    "gender": "Male",\
    "age": 46,\
    "Style": "Post Renaissance Art",\
    "Category": "Realism",\
    "Artist": "George Catlin",\
    "Title": "Ah-yaw-ne-tak-o&#225;r-ron, a Warrior",\
    "area": "North America",\
    "Year": 1831,\
    "url": "https://use2-uploads2.wikiart.org/images/george-catlin/ah-yaw-ne-tak-o-r-ron-a-warrior-1831.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-catlin",\
    "": "",\
    "smile": "yes",\
    "smiledetailed": 701,\
    "pitch": 5.786649,\
    "roll": -0.74927175,\
    "yaw": 2.6474104,\
    "eyes": "open",\
    "eyesdetailed": 98.404,\
    "mouth": "closed",\
    "mouthdetailed": 18.962,\
    "happiness": 312,\
    "neutral": 68.627,\
    "sadness": 30.696\
  },{\
    "ID": 170,\
    "gender": "Male",\
    "age": 33,\
    "Style": "Post Renaissance Art",\
    "Category": "Neoclassicism",\
    "Artist": "William Hamilton",\
    "Title": "John Philip Kemble (1757â1823), as Richard in &#39;Richard III&#39; by William Shakespeare",\
    "area": "Europe",\
    "Year": 1788,\
    "url": "https://use2-uploads6.wikiart.org/images/william-hamilton/john-philip-kemble-1757-1823-as-richard-in-richard-iii-by-william-shakespeare-1788.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/william-hamilton",\
    "": "",\
    "smile": "no",\
    "smiledetailed": 13.173,\
    "pitch": 4.232541,\
    "roll": 22.610292,\
    "yaw": 43.251812,\
    "eyes": "closed",\
    "eyesdetailed": 1.241,\
    "mouth": "open",\
    "mouthdetailed": 99.789,\
    "happiness": 22,\
    "neutral": 81.581,\
    "sadness": 19\
  }\
]';
