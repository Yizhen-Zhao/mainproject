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
    "url": "https://use2-uploads2.wikiart.org/images/rogier-van-der-weyden/portrait-of-a-young-woman-in-a-pinned-hat-1435.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rogier-van-der-weyden",\
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
    "url": "https://use2-uploads3.wikiart.org/images/konrad-witz/the-synagoge.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/konrad-witz",\
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
    "url": "https://use2-uploads1.wikiart.org/images/pisanello/portrait-of-a-princess-of-the-house-of-este-1449.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pisanello",\
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
    "url": "https://use2-uploads6.wikiart.org/images/rogier-van-der-weyden/saint-ivo-1450.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rogier-van-der-weyden",\
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
    "url": "https://use2-uploads7.wikiart.org/images/rogier-van-der-weyden/portrait-of-a-woman-1464.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rogier-van-der-weyden",\
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
    "url": "https://use2-uploads1.wikiart.org/images/petrus-christus/portrait-of-a-young-girl.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/petrus-christus",\
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
    "url": "https://use2-uploads7.wikiart.org/images/dirk-bouts/portrait-of-a-man.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/dirk-bouts",\
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
    "url": "https://use2-uploads4.wikiart.org/images/antonello-da-messina/virgin-of-the-annunciation-1473.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antonello-da-messina",\
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
    "url": "https://use2-uploads3.wikiart.org/images/jean-hey/portrait-of-charles-ii-of-bourbon.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-hey",\
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
    "url": "https://use2-uploads0.wikiart.org/images/domenico-ghirlandaio/portrait-of-a-girl.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domenico-ghirlandaio",\
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
    "url": "https://use2-uploads5.wikiart.org/images/jean-hey/portrait-of-margaret-of-austria-portrait-of-a-young-princess-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-hey",\
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
    "url": "https://use2-uploads8.wikiart.org/images/sandro-botticelli/portrait-of-dante(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/sandro-botticelli",\
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
    "url": "https://use2-uploads8.wikiart.org/images/leonardo-da-vinci/the-lady-with-the-ermine-cecilia-gallerani-1496.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/leonardo-da-vinci",\
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
    "url": "https://use2-uploads3.wikiart.org/images/vittore-carpaccio/portrait-of-a-woman-1498.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vittore-carpaccio",\
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
    "url": "https://use2-uploads5.wikiart.org/images/pinturicchio/portrait-of-a-boy-1500.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pinturicchio",\
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
    "url": "https://use2-uploads5.wikiart.org/images/giovanni-antonio-boltraffio/portrait-of-a-lady-as-st-lucy-1500.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giovanni-antonio-boltraffio",\
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
    "url": "https://use2-uploads2.wikiart.org/images/piero-di-cosimo/a-young-man-1500.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/piero-di-cosimo",\
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
    "url": "https://use2-uploads5.wikiart.org/images/gerard-david/the-angel-of-the-annunciation-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/gerard-david",\
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
    "url": "https://use2-uploads1.wikiart.org/images/andrea-solario/portrait-of-charles-d-amboise-1507.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/andrea-solario",\
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
    "url": "https://use2-uploads3.wikiart.org/00112/images/bartolomeo-veneto/portrait-of-a-bearded-gentleman-1510.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bartolomeo-veneto",\
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
    "url": "https://use2-uploads1.wikiart.org/images/vittore-carpaccio/portrait-of-a-venetian-nobleman.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vittore-carpaccio",\
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
    "url": "https://use2-uploads0.wikiart.org/images/bernhard-strigel/portrait-of-louis-ii-of-hungary.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bernhard-strigel",\
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
    "url": "https://use2-uploads6.wikiart.org/images/lucas-cranach-the-elder/portrait-of-martin-luther-as-an-augustinian-monk.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/lucas-cranach-the-elder",\
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
    "url": "https://use2-uploads6.wikiart.org/images/hans-baldung/portrait-of-a-lady-1530.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hans-baldung",\
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
    "url": "https://use2-uploads7.wikiart.org/images/pieter-aertsen/cook-in-front-of-the-stove-1559.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pieter-aertsen",\
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
    "url": "https://use2-uploads7.wikiart.org/images/nicholas-hilliard/elizabeth-i-the-pelican-portrait-1575.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/nicholas-hilliard",\
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
    "url": "https://use2-uploads1.wikiart.org/images/nicholas-hilliard/sir-walter-ralegh-1585.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/nicholas-hilliard",\
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
    "url": "https://use2-uploads1.wikiart.org/images/caravaggio/the-lute-player-1(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/caravaggio",\
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
    "url": "https://use2-uploads4.wikiart.org/00115/images/otto-van-veen/portrait-of-nicolaas-rockox-1600.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/otto-van-veen",\
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
    "url": "https://use2-uploads2.wikiart.org/images/artemisia-gentileschi/self-portrait-as-a-female-martyr-1615.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/artemisia-gentileschi",\
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
    "url": "https://use2-uploads7.wikiart.org/images/hendrick-terbrugghen/singing-boy-1627.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hendrick-terbrugghen",\
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
    "url": "https://use2-uploads4.wikiart.org/00124/images/william-dobson/portrait-thought-to-be-judith-dobson-1634-1640-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/william-dobson",\
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
    "url": "https://use2-uploads8.wikiart.org/images/jean-marc-nattier/portrait-of-tsar-peter-i-1717.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-marc-nattier",\
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
    "url": "https://use2-uploads1.wikiart.org/images/jean-baptiste-greuze/1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-baptiste-greuze",\
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
    "url": "https://use2-uploads7.wikiart.org/images/joseph-marie-vien/greek-woman-at-the-bath-1767.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/joseph-marie-vien",\
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
    "url": "https://use2-uploads5.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-anna-muravyova-1768.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/carl-ludwig-johann-christineck",\
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
    "url": "https://use2-uploads2.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-alexey-bobrinsky-as-a-child-1769-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/carl-ludwig-johann-christineck",\
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
    "url": "https://use2-uploads4.wikiart.org/images/john-russell/micoc-and-tootac-1769.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-russell",\
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
    "url": "https://use2-uploads2.wikiart.org/images/jean-baptiste-greuze/portrait-of-the-comtesse-du-barry-1771.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-baptiste-greuze",\
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
    "url": "https://use2-uploads4.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-count-orlov-chesmensky-1779.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/carl-ludwig-johann-christineck",\
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
    "url": "https://use2-uploads4.wikiart.org/images/joshua-reynolds/lady-jane-halliday.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/joshua-reynolds",\
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
    "url": "https://use2-uploads1.wikiart.org/images/fyodor-rokotov/portrait-of-catherine-ii-of-russia.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-rokotov",\
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
    "url": "https://use2-uploads0.wikiart.org/images/jean-baptiste-greuze/jean-baptiste-greuze-the-white-hat-2120759508.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-baptiste-greuze",\
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
    "url": "https://use2-uploads3.wikiart.org/images/john-hoppner/mary-robinson-as-perdita-1782.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-hoppner",\
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
    "url": "https://use2-uploads2.wikiart.org/images/henry-raeburn/rear-admiral-charles-inglis.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/henry-raeburn",\
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
    "url": "https://use2-uploads3.wikiart.org/images/dmitry-levitzky/portrait-of-countess-n-f-vorontsova.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/dmitry-levitzky",\
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
    "url": "https://use2-uploads5.wikiart.org/images/mikhail-shibanov/alexandr-matveevich-dmitriev-mamonov.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/mikhail-shibanov",\
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
    "url": "https://use2-uploads6.wikiart.org/images/thomas-gainsborough/mrs-sarah-siddons-the-actress-1785.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/thomas-gainsborough",\
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
    "url": "https://use2-uploads2.wikiart.org/00118/images/antoine-jean-gros/bonaparte-at-the-pont-d-arcole-1796.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antoine-jean-gros",\
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
    "url": "https://use2-uploads5.wikiart.org/images/pierre-paul-prud-hon/portrait-of-georges-anthony-1796.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pierre-paul-prud-hon",\
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
    "url": "https://use2-uploads0.wikiart.org/images/marie-guillemine-benoist/portrait-of-a-lady-1799.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/marie-guillemine-benoist",\
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
    "url": "https://use2-uploads7.wikiart.org/images/john-simpson/elizabeth-sykes-mrs-wilbraham-egerton-1805.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-simpson",\
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
    "url": "https://use2-uploads6.wikiart.org/images/anne-louis-girodet/chateaubriand-meditating-on-the-ruins-of-rome-1808(1).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/anne-louis-girodet",\
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
    "url": "https://use2-uploads0.wikiart.org/images/christoffer-wilhelm-eckersberg/portrait-of-anna-maria-magnani-1814.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/christoffer-wilhelm-eckersberg",\
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
    "url": "https://use2-uploads2.wikiart.org/images/horace-vernet/the-emperor-napoleon-i-1815.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/horace-vernet",\
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
    "url": "https://use2-uploads0.wikiart.org/images/david-wilkie/billy-waters-mariner-and-street-performer-beggar-1815.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/david-wilkie",\
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
    "url": "https://use2-uploads0.wikiart.org/00151/images/ary-scheffer/charlotte-rothsch-baroness-anselm-de-rothschild-1828.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/ary-scheffer",\
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
    "url": "https://use2-uploads7.wikiart.org/images/joaquin-manuel-fernandez-cruzado/retrato-de-hombre-1830.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/joaquin-manuel-fernandez-cruzado",\
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
    "url": "https://use2-uploads4.wikiart.org/images/george-catlin/kei-a-gis-gis-a-woman-of-the-plains-ojibwa-1832.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-catlin",\
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
    "url": "https://use2-uploads5.wikiart.org/images/george-catlin/m-sho-la-t-b-bee-he-who-puts-out-and-kills-chief-of-the-tribe-1834.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-catlin",\
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
    "url": "https://use2-uploads1.wikiart.org/images/nicolae-grigorescu/peasant-woman-from-muscel-1874.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/nicolae-grigorescu",\
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
    "url": "https://use2-uploads1.wikiart.org/images/vladimir-makovsky/a-girl-with-geese-1875.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vladimir-makovsky",\
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
    "url": "https://use2-uploads2.wikiart.org/images/william-adolphe-bouguereau/the-little-knitter-1882.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/william-adolphe-bouguereau",\
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
    "url": "https://use2-uploads4.wikiart.org/images/john-william-godward/the-muse-erato-at-her-lyre-1895.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward",\
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
    "url": "https://use2-uploads0.wikiart.org/images/john-william-godward/contemplation-1903.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward",\
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
    "url": "https://use2-uploads3.wikiart.org/images/john-william-godward/nerissa-1906.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward",\
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
    "url": "https://use2-uploads1.wikiart.org/images/john-william-godward/under-the-blossom-that-hangs-on-the-bough-1917.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward",\
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
    "url": "https://use2-uploads7.wikiart.org/images/john-william-godward/a-song-without-words-1919.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward",\
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
    "url": "https://use2-uploads0.wikiart.org/images/john-william-godward/contemplation-1922.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward",\
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
    "url": "https://use2-uploads7.wikiart.org/images/alexandre-yevgenievich-jacovleff/the-kuli-kuta-dance-niamey-1926.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/alexandre-jacovleff",\
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
    "url": "https://use2-uploads7.wikiart.org/images/masaccio/portrait-of-a-young-man-1425.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/masaccio",\
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
    "url": "https://use2-uploads4.wikiart.org/images/martin-schongauer/portrait-of-a-young-woman.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/martin-schongauer",\
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
    "url": "https://use2-uploads3.wikiart.org/the-sleeping-venus-1510(2).jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giorgione",\
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
    "url": "https://use2-uploads0.wikiart.org/images/jan-van-eyck/portrait-of-giovanni-arnolfini-1435.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jan-van-eyck/portrait-of-giovanni-arnolfini-1435",\
    "#untitled": "https://www.wikiart.org/en/jan-van-eyck",\
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
    "url": "https://use2-uploads8.wikiart.org/images/vasily-tropinin/the-lacemaker.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/vasily-tropinin/the-lacemaker",\
    "#untitled": "https://www.wikiart.org/en/vasily-tropinin",\
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
    "url": "https://use2-uploads2.wikiart.org/images/dosso-dossi/a-personification-of-geometry.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/dosso-dossi/a-personification-of-geometry",\
    "#untitled": "https://www.wikiart.org/en/dosso-dossi",\
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
    "url": "https://use2-uploads5.wikiart.org/images/domingos-sequeira/retrato-de-d-carlota-joaquina-rainha-de-portugal-1802.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domingos-sequeira/retrato-de-d-carlota-joaquina-rainha-de-portugal-1802",\
    "#untitled": "https://www.wikiart.org/en/domingos-sequeira",\
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
    "url": "https://use2-uploads6.wikiart.org/images/petrus-christus/edward-grimston-1446.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/petrus-christus/edward-grimston-1446",\
    "#untitled": "https://www.wikiart.org/en/petrus-christus",\
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
    "url": "https://use2-uploads5.wikiart.org/images/louise-elisabeth-vigee-le-brun/anna-ivanovna-tolstaya.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun/anna-ivanovna-tolstaya",\
    "#untitled": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
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
    "url": "https://use2-uploads4.wikiart.org/00103/images/maarten-de-vos/the-rape-of-europa-1590.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/maarten-de-vos/the-rape-of-europa-1590",\
    "#untitled": "https://www.wikiart.org/en/maarten-de-vos",\
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
    "url": "https://use2-uploads5.wikiart.org/images/albert-anker/bildnis-emilie-weiss-mit-pl-schtier-1868.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/albert-anker/bildnis-emilie-weiss-mit-pl-schtier-1868",\
    "#untitled": "https://www.wikiart.org/en/albert-anker",\
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
    "url": "https://use2-uploads8.wikiart.org/images/guido-reni/the-penitent-magdalene-1635.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/guido-reni/the-penitent-magdalene-1635",\
    "#untitled": "https://www.wikiart.org/en/guido-reni",\
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
    "url": "https://use2-uploads2.wikiart.org/images/joseph-ducreux/self-portrait-yawning-1783.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/joseph-ducreux/self-portrait-yawning-1783",\
    "#untitled": "https://www.wikiart.org/en/joseph-ducreux",\
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
    "url": "https://use2-uploads0.wikiart.org/images/jean-marc-nattier/portrait-of-madame-maria-zeffirina-1751.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-marc-nattier/portrait-of-madame-maria-zeffirina-1751",\
    "#untitled": "https://www.wikiart.org/en/jean-marc-nattier",\
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
    "url": "https://use2-uploads3.wikiart.org/images/fyodor-rokotov/portrait-of-count-i-g-orlov.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-rokotov/portrait-of-count-i-g-orlov",\
    "#untitled": "https://www.wikiart.org/en/fyodor-rokotov",\
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
    "url": "https://use2-uploads3.wikiart.org/images/dirk-bouts/portrait-of-a-man-1462.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/dirk-bouts/portrait-of-a-man-1462",\
    "#untitled": "https://www.wikiart.org/en/dirk-bouts",\
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
    "url": "https://use2-uploads5.wikiart.org/images/theodore-chasseriau/portrait-de-mlle-de-cabarrus-1848.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/theodore-chasseriau/portrait-de-mlle-de-cabarrus-1848",\
    "#untitled": "https://www.wikiart.org/en/theodore-chasseriau",\
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
    "url": "https://use2-uploads1.wikiart.org/images/bernhard-strigel/portrait-of-a-gentleman.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bernhard-strigel/portrait-of-a-gentleman",\
    "#untitled": "https://www.wikiart.org/en/bernhard-strigel",\
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
    "url": "https://use2-uploads3.wikiart.org/images/orest-kiprensky/portrait-of-a-davydov-1809.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/orest-kiprensky/portrait-of-a-davydov-1809",\
    "#untitled": "https://www.wikiart.org/en/orest-kiprensky",\
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
    "url": "https://use2-uploads2.wikiart.org/images/giovanni-antonio-boltraffio/madonna-and-child-1500.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giovanni-antonio-boltraffio/madonna-and-child-1500",\
    "#untitled": "https://www.wikiart.org/en/giovanni-antonio-boltraffio",\
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
    "url": "https://use2-uploads0.wikiart.org/images/john-singleton-copley/boy-with-squirrel-henry-pelham-1765.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-singleton-copley/boy-with-squirrel-henry-pelham-1765",\
    "#untitled": "https://www.wikiart.org/en/john-singleton-copley",\
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
    "url": "https://use2-uploads8.wikiart.org/images/louise-elisabeth-vigee-le-brun/portrait-of-anna-pitt-as-hebe-1792.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun/portrait-of-anna-pitt-as-hebe-1792",\
    "#untitled": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
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
    "url": "https://use2-uploads7.wikiart.org/images/domenico-ghirlandaio/portrait-of-giovane-donna.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domenico-ghirlandaio/portrait-of-giovane-donna",\
    "#untitled": "https://www.wikiart.org/en/domenico-ghirlandaio",\
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
    "url": "https://use2-uploads2.wikiart.org/images/antonello-da-messina/portrait-of-a-man-the-condottiero-1475.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antonello-da-messina/portrait-of-a-man-the-condottiero-1475",\
    "#untitled": "https://www.wikiart.org/en/antonello-da-messina",\
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
    "url": "https://use2-uploads8.wikiart.org/images/jean-baptiste-greuze/the-milkmaid-1780.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-baptiste-greuze/the-milkmaid-1780",\
    "#untitled": "https://www.wikiart.org/en/jean-baptiste-greuze",\
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
    "url": "https://use2-uploads1.wikiart.org/images/maurice-quentin-de-la-tour/portrait-of-madame-de-pompadour.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/maurice-quentin-de-la-tour/portrait-of-madame-de-pompadour",\
    "#untitled": "https://www.wikiart.org/en/maurice-quentin-de-la-tour",\
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
    "url": "https://use2-uploads7.wikiart.org/images/george-catlin/sha-k-ka-mint-a-mandan-girl-1832.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/george-catlin/sha-k-ka-mint-a-mandan-girl-1832",\
    "#untitled": "https://www.wikiart.org/en/george-catlin",\
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
    "url": "https://use2-uploads8.wikiart.org/images/antoine-watteau/diana-at-her-bath-1716.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antoine-watteau/diana-at-her-bath-1716",\
    "#untitled": "https://www.wikiart.org/en/antoine-watteau",\
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
    "url": "https://use2-uploads1.wikiart.org/images/carl-ludwig-johann-christineck/portrait-of-semen-ivanovich-mordvinov-as-chevalier-of-the-order-of-st-andrew-1771.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/carl-ludwig-johann-christineck/portrait-of-semen-ivanovich-mordvinov-as-chevalier-of-the-order-of-st-andrew-1771",\
    "#untitled": "https://www.wikiart.org/en/carl-ludwig-johann-christineck",\
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
    "url": "https://use2-uploads4.wikiart.org/images/domenico-ghirlandaio/portrait-of-giovanna-tornabuoni.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domenico-ghirlandaio/portrait-of-giovanna-tornabuoni",\
    "#untitled": "https://www.wikiart.org/en/domenico-ghirlandaio",\
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
    "url": "https://use2-uploads0.wikiart.org/images/albert-anker/louise-anker-1874.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/albert-anker/louise-anker-1874",\
    "#untitled": "https://www.wikiart.org/en/albert-anker",\
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
    "url": "https://use2-uploads7.wikiart.org/images/paolo-uccello/a-young-lady-of-fashion.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/paolo-uccello/a-young-lady-of-fashion",\
    "#untitled": "https://www.wikiart.org/en/paolo-uccello",\
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
    "url": "https://use2-uploads8.wikiart.org/images/antoine-pesne/johanna-holstein-gottorp.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/antoine-pesne/johanna-holstein-gottorp",\
    "#untitled": "https://www.wikiart.org/en/antoine-pesne",\
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
    "url": "https://use2-uploads8.wikiart.org/images/bernardo-strozzi/gamba-player.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bernardo-strozzi/gamba-player",\
    "#untitled": "https://www.wikiart.org/en/bernardo-strozzi",\
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
    "url": "https://use2-uploads6.wikiart.org/images/hans-holbein-the-younger/portrait-of-henry-viii-king-of-england.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hans-holbein-the-younger/portrait-of-henry-viii-king-of-england",\
    "#untitled": "https://www.wikiart.org/en/hans-holbein-the-younger",\
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
    "url": "https://use2-uploads2.wikiart.org/images/annibale-carracci/the-laughing-youth-1583.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/annibale-carracci/the-laughing-youth-1583",\
    "#untitled": "https://www.wikiart.org/en/annibale-carracci",\
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
    "url": "https://use2-uploads3.wikiart.org/images/hans-memling/portrait-of-an-old-woman-1470.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hans-memling/portrait-of-an-old-woman-1470",\
    "#untitled": "https://www.wikiart.org/en/hans-memling",\
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
    "url": "https://use2-uploads1.wikiart.org/images/john-singleton-copley/paul-revere-1770-1.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-singleton-copley/paul-revere-1770-1",\
    "#untitled": "https://www.wikiart.org/en/john-singleton-copley",\
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
    "url": "https://use2-uploads1.wikiart.org/images/bartolomeo-veneto/portrait-of-a-lady-in-a-green-dress-1530.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/bartolomeo-veneto/portrait-of-a-lady-in-a-green-dress-1530",\
    "#untitled": "https://www.wikiart.org/en/bartolomeo-veneto",\
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
    "url": "https://use2-uploads5.wikiart.org/images/hans-holbein-the-younger/portrait-of-erasmus-of-rotterdam-1523.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hans-holbein-the-younger/portrait-of-erasmus-of-rotterdam-1523",\
    "#untitled": "https://www.wikiart.org/en/hans-holbein-the-younger",\
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
    "url": "https://use2-uploads1.wikiart.org/images/carl-ludwig-johann-christineck/teresa-schnee-1777.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/carl-ludwig-johann-christineck/teresa-schnee-1777",\
    "#untitled": "https://www.wikiart.org/en/carl-ludwig-johann-christineck",\
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
    "url": "https://use2-uploads7.wikiart.org/images/jean-marc-nattier/madame-louise-of-france-1748.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/jean-marc-nattier/madame-louise-of-france-1748",\
    "#untitled": "https://www.wikiart.org/en/jean-marc-nattier",\
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
    "url": "https://use2-uploads7.wikiart.org/images/edouard-manet/the-fifer-1866.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/edouard-manet/the-fifer-1866",\
    "#untitled": "https://www.wikiart.org/en/edouard-manet",\
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
    "url": "https://use2-uploads4.wikiart.org/images/john-trumbull/portrait-of-george-washington-and-william-billy-lee-1780.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-trumbull/portrait-of-george-washington-and-william-billy-lee-1780",\
    "#untitled": "https://www.wikiart.org/en/john-trumbull",\
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
    "url": "https://use2-uploads3.wikiart.org/images/camille-corot/woman-reading-in-a-landscape.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/camille-corot/woman-reading-in-a-landscape",\
    "#untitled": "https://www.wikiart.org/en/camille-corot",\
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
    "url": "https://use2-uploads2.wikiart.org/images/domingos-sequeira/retrato-de-conde-de-farrobo-1813.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/domingos-sequeira/retrato-de-conde-de-farrobo-1813",\
    "#untitled": "https://www.wikiart.org/en/domingos-sequeira",\
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
    "url": "https://use2-uploads2.wikiart.org/images/david-allan/james-abercromby-of-tullibody-esq-1779.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/david-allan/james-abercromby-of-tullibody-esq-1779",\
    "#untitled": "https://www.wikiart.org/en/david-allan",\
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
    "url": "https://use2-uploads6.wikiart.org/images/nicholas-hilliard/francis-bacon-viscount-st-alban-1578.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/nicholas-hilliard/francis-bacon-viscount-st-alban-1578",\
    "#untitled": "https://www.wikiart.org/en/nicholas-hilliard",\
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
    "url": "https://use2-uploads3.wikiart.org/images/henry-raeburn/portrait-of-the-reverend-robert-walker-skating.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/henry-raeburn/portrait-of-the-reverend-robert-walker-skating",\
    "#untitled": "https://www.wikiart.org/en/henry-raeburn",\
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
    "url": "https://use2-uploads2.wikiart.org/images/fyodor-rokotov/portrait-of-v-n-surovtseva.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/fyodor-rokotov/portrait-of-v-n-surovtseva",\
    "#untitled": "https://www.wikiart.org/en/fyodor-rokotov",\
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
    "url": "https://use2-uploads3.wikiart.org/images/alexandre-yevgenievich-jacovleff/self-portrait-1917.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/alexandre-jacovleff/self-portrait-1917",\
    "#untitled": "https://www.wikiart.org/en/alexandre-jacovleff",\
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
    "url": "https://use2-uploads2.wikiart.org/images/eduard-von-gebhardt/estonian-peasant-1867.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/eduard-von-gebhardt/estonian-peasant-1867",\
    "#untitled": "https://www.wikiart.org/en/eduard-von-gebhardt",\
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
    "url": "https://use2-uploads0.wikiart.org/images/giovanni-bellini/naked-young-woman-in-front-of-the-mirror.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giovanni-bellini/naked-young-woman-in-front-of-the-mirror-1515-1",\
    "#untitled": "https://www.wikiart.org/en/giovanni-bellini",\
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
    "url": "https://use2-uploads2.wikiart.org/images/giovanni-antonio-boltraffio/portrait-of-gerolamo-casio-1495.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/giovanni-antonio-boltraffio/portrait-of-gerolamo-casio-1495",\
    "#untitled": "https://www.wikiart.org/en/giovanni-antonio-boltraffio",\
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
    "url": "https://use2-uploads2.wikiart.org/images/orest-kiprensky/girl-wearing-the-poppy-wreath-1819.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/orest-kiprensky/girl-wearing-the-poppy-wreath-1819",\
    "#untitled": "https://www.wikiart.org/en/orest-kiprensky",\
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
    "url": "https://use2-uploads2.wikiart.org/images/pietro-perugino/polyptych-annunziata-st-illuminata.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/pietro-perugino/polyptych-annunziata-st-illuminata",\
    "#untitled": "https://www.wikiart.org/en/pietro-perugino",\
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
    "url": "https://use2-uploads3.wikiart.org/images/albrecht-durer/self-portrait-1498.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/albrecht-durer/self-portrait-1498",\
    "#untitled": "https://www.wikiart.org/en/albrecht-durer",\
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
    "url": "https://use2-uploads1.wikiart.org/images/hugo-van-der-goes/portrait-of-a-man-1475.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/hugo-van-der-goes/portrait-of-a-man-1475",\
    "#untitled": "https://www.wikiart.org/en/hugo-van-der-goes",\
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
    "url": "https://use2-uploads8.wikiart.org/images/louise-elisabeth-vigee-le-brun/portrait-of-madame-de-stael-as-corinne-1808.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun/portrait-of-madame-de-stael-as-corinne-1808",\
    "#untitled": "https://www.wikiart.org/en/louise-elisabeth-vigee-le-brun",\
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
    "url": "https://use2-uploads4.wikiart.org/images/william-williams/deborah-hall-1766.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/william-williams/deborah-hall-1766",\
    "#untitled": "https://www.wikiart.org/en/william-williams",\
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
    "url": "https://use2-uploads2.wikiart.org/images/marie-guillemine-benoist/portrait-of-pauline-bonaparte-1808.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/marie-guillemine-benoist/portrait-of-pauline-bonaparte-1808",\
    "#untitled": "https://www.wikiart.org/en/marie-guillemine-benoist",\
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
    "url": "https://use2-uploads7.wikiart.org/images/anthony-van-dyck/james-stuart-duke-of-richmond-and-lennox-with-his-attributes-1634.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/anthony-van-dyck/james-stuart-duke-of-richmond-and-lennox-with-his-attributes-1634",\
    "#untitled": "https://www.wikiart.org/en/anthony-van-dyck",\
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
    "url": "https://use2-uploads3.wikiart.org/images/rosalba-carriera/a-tyrolean-innkeeper-1728.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/rosalba-carriera/a-tyrolean-innkeeper-1728",\
    "#untitled": "https://www.wikiart.org/en/rosalba-carriera",\
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
    "url": "https://use2-uploads2.wikiart.org/images/camille-corot/the-woman-with-a-pearl-1870.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/camille-corot/the-woman-with-a-pearl-1870",\
    "#untitled": "https://www.wikiart.org/en/camille-corot",\
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
    "url": "https://use2-uploads0.wikiart.org/images/john-william-godward/grecian-idyll-1907.jpg",\
    "Artist Info URL": "https://www.wikiart.org/en/john-william-godward/grecian-idyll-1907",\
    "#untitled": "https://www.wikiart.org/en/john-william-godward",\
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
}\
]';
