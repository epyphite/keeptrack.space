/* /////////////////////////////////////////////////////////////////////////////

(c) 2016-2020, Theodore Kruczek
http://keeptrack.space

All code is Copyright © 2016-2020 by Theodore Kruczek. All rights reserved.
No part of this web site may be reproduced, published, distributed, displayed,
performed, copied or stored for public or private use, without written
permission of the author.

No part of this code may be modified or changed or exploited in any way used
for derivative works, or offered for sale, or used to construct any kind of database
or mirrored at any other location without the express written permission of the author.

///////////////////////////////////////////////////////////////////////////// */

var starManager = {}
starManager.stars = [
  {
    "name": 28,
    "hr": 3,
    "bf": "33    Psc",
    "pname": "",
    "ra": 0.088928,
    "dec": -5.707618,
    "dist": 39.4945,
    "vmag": 4.61
  },
  {
    "name": 87,
    "hr": 4,
    "bf": "86    Peg",
    "pname": "",
    "ra": 0.094989,
    "dec": 13.396266,
    "dist": 114.2857,
    "vmag": 5.55
  },
  {
    "name": 144,
    "hr": 7,
    "bf": "10    Cas",
    "pname": "",
    "ra": 0.10737,
    "dec": 64.196168,
    "dist": 265.9574,
    "vmag": 5.57
  },
  {
    "name": 358,
    "hr": 15,
    "bf": "21Alp And",
    "pname": "Alpheratz",
    "ra": 0.139791,
    "dec": 29.090432,
    "dist": 29.7442,
    "vmag": 2.07
  },
  {
    "name": 432,
    "hr": 21,
    "bf": "11Bet Cas",
    "pname": "Caph",
    "ra": 0.152887,
    "dec": 59.14978,
    "dist": 16.7842,
    "vmag": 2.28
  },
  {
    "name": 448,
    "hr": 22,
    "bf": "87    Peg",
    "pname": "",
    "ra": 0.150672,
    "dec": 18.211963,
    "dist": 87.4126,
    "vmag": 5.57
  },
  {
    "name": 493,
    "hr": 24,
    "bf": "Kap1Scl",
    "pname": "",
    "ra": 0.155851,
    "dec": -27.987928,
    "dist": 77.4593,
    "vmag": 5.42
  },
  {
    "name": 496,
    "hr": 25,
    "bf": "Eps Phe",
    "pname": "",
    "ra": 0.156836,
    "dec": -45.747426,
    "dist": 44.2087,
    "vmag": 3.88
  },
  {
    "name": 560,
    "hr": 26,
    "bf": "34    Psc",
    "pname": "",
    "ra": 0.167278,
    "dec": 11.145813,
    "dist": 93.633,
    "vmag": 5.54
  },
  {
    "name": 571,
    "hr": 27,
    "bf": "22    And",
    "pname": "",
    "ra": 0.172012,
    "dec": 46.072272,
    "dist": 377.3585,
    "vmag": 5.01
  },
  {
    "name": 636,
    "hr": 30,
    "bf": "Gam3Oct",
    "pname": "",
    "ra": 0.167293,
    "dec": -82.224047,
    "dist": 78.064,
    "vmag": 5.29
  },
  {
    "name": 693,
    "hr": 33,
    "bf": "6    Cet",
    "pname": "",
    "ra": 0.187739,
    "dec": -15.467977,
    "dist": 18.7477,
    "vmag": 4.89
  },
  {
    "name": 720,
    "hr": 34,
    "bf": "Kap2Scl",
    "pname": "",
    "ra": 0.192894,
    "dec": -27.799737,
    "dist": 243.309,
    "vmag": 5.41
  },
  {
    "name": 739,
    "hr": 35,
    "bf": "The Scl",
    "pname": "",
    "ra": 0.195552,
    "dec": -35.133119,
    "dist": 21.2766,
    "vmag": 5.24
  },
  {
    "name": 886,
    "hr": 39,
    "bf": "88Gam Peg",
    "pname": "Algenib",
    "ra": 0.220598,
    "dec": 15.183596,
    "dist": 120.048,
    "vmag": 2.83
  },
  {
    "name": 905,
    "hr": 41,
    "bf": "23    And",
    "pname": "",
    "ra": 0.22524,
    "dec": 41.03537,
    "dist": 34.904,
    "vmag": 5.71
  },
  {
    "name": 1013,
    "hr": 45,
    "bf": "89Chi Peg",
    "pname": "",
    "ra": 0.243378,
    "dec": 20.206702,
    "dist": 112.8668,
    "vmag": 4.79
  },
  {
    "name": 1038,
    "hr": 48,
    "bf": "7    Cet",
    "pname": "",
    "ra": 0.244005,
    "dec": -18.932866,
    "dist": 137.1742,
    "vmag": 4.44
  },
  {
    "name": 1061,
    "hr": 50,
    "bf": "35    Psc",
    "pname": "",
    "ra": 0.249677,
    "dec": 8.820962,
    "dist": 77.7605,
    "vmag": 6.02
  },
  {
    "name": 1227,
    "hr": 59,
    "bf": "36    Psc",
    "pname": "",
    "ra": 0.276122,
    "dec": 8.240154,
    "dist": 125,
    "vmag": 6.12
  },
  {
    "name": 1280,
    "hr": 63,
    "bf": "24The And",
    "pname": "",
    "ra": 0.284863,
    "dec": 38.681636,
    "dist": 94.697,
    "vmag": 4.61
  },
  {
    "name": 1404,
    "hr": 68,
    "bf": "25Sig And",
    "pname": "",
    "ra": 0.305463,
    "dec": 36.785224,
    "dist": 41.3223,
    "vmag": 4.51
  },
  {
    "name": 1438,
    "hr": 70,
    "bf": "26    And",
    "pname": "",
    "ra": 0.311712,
    "dec": 43.791141,
    "dist": 202.8398,
    "vmag": 6.1
  },
  {
    "name": 1522,
    "hr": 74,
    "bf": "8Iot Cet",
    "pname": "",
    "ra": 0.323799,
    "dec": -8.823921,
    "dist": 84.1751,
    "vmag": 3.56
  },
  {
    "name": 1581,
    "hr": 77,
    "bf": "Zet Tuc",
    "pname": "",
    "ra": 0.334142,
    "dec": -64.874791,
    "dist": 8.5866,
    "vmag": 4.23
  },
  {
    "name": 1635,
    "hr": 80,
    "bf": "41    Psc",
    "pname": "",
    "ra": 0.343295,
    "dec": 8.190271,
    "dist": 125,
    "vmag": 5.38
  },
  {
    "name": 1671,
    "hr": 82,
    "bf": "27Rho And",
    "pname": "",
    "ra": 0.352017,
    "dec": 37.968603,
    "dist": 48.5437,
    "vmag": 5.16
  },
  {
    "name": 1685,
    "hr": 83,
    "bf": "Pi  Tuc",
    "pname": "",
    "ra": 0.344178,
    "dec": -69.624913,
    "dist": 97.561,
    "vmag": 5.5
  },
  {
    "name": 1737,
    "hr": 84,
    "bf": "Iot Scl",
    "pname": "",
    "ra": 0.358665,
    "dec": -28.981469,
    "dist": 101.3171,
    "vmag": 5.18
  },
  {
    "name": 1796,
    "hr": 86,
    "bf": "42    Psc",
    "pname": "",
    "ra": 0.373745,
    "dec": 13.482488,
    "dist": 153.8462,
    "vmag": 6.25
  },
  {
    "name": 1835,
    "hr": 88,
    "bf": "9    Cet",
    "pname": "",
    "ra": 0.381051,
    "dec": -12.209438,
    "dist": 20.8638,
    "vmag": 6.39
  },
  {
    "name": 2011,
    "hr": 93,
    "bf": "12    Cas",
    "pname": "",
    "ra": 0.413193,
    "dec": 61.831057,
    "dist": 215.0538,
    "vmag": 5.38
  },
  {
    "name": 2114,
    "hr": 97,
    "bf": "44    Psc",
    "pname": "",
    "ra": 0.423391,
    "dec": 1.939692,
    "dist": 144.0922,
    "vmag": 5.77
  },
  {
    "name": 2151,
    "hr": 98,
    "bf": "Bet Hyi",
    "pname": "",
    "ra": 0.427916,
    "dec": -77.254247,
    "dist": 7.4588,
    "vmag": 2.82
  },
  {
    "name": 2261,
    "hr": 99,
    "bf": "Alp Phe",
    "pname": "Ankaa",
    "ra": 0.438056,
    "dec": -42.305981,
    "dist": 25.974,
    "vmag": 2.4
  },
  {
    "name": 2262,
    "hr": 100,
    "bf": "Kap Phe",
    "pname": "",
    "ra": 0.436716,
    "dec": -43.679829,
    "dist": 23.8095,
    "vmag": 3.93
  },
  {
    "name": 2273,
    "hr": 101,
    "bf": "10    Cet",
    "pname": "",
    "ra": 0.443726,
    "dec": -0.049533,
    "dist": 138.3126,
    "vmag": 6.16
  },
  {
    "name": 2411,
    "hr": 103,
    "bf": "47    Psc",
    "pname": "",
    "ra": 0.467475,
    "dec": 17.893125,
    "dist": 162.0746,
    "vmag": 5.01
  },
  {
    "name": 2429,
    "hr": 105,
    "bf": "Eta Scl",
    "pname": "",
    "ra": 0.465472,
    "dec": -33.007167,
    "dist": 138.5042,
    "vmag": 4.86
  },
  {
    "name": 2436,
    "hr": 106,
    "bf": "48    Psc",
    "pname": "",
    "ra": 0.470195,
    "dec": 16.445065,
    "dist": 233.6449,
    "vmag": 6.05
  },
  {
    "name": 2628,
    "hr": 114,
    "bf": "28    And",
    "pname": "",
    "ra": 0.502045,
    "dec": 29.751557,
    "dist": 62.7746,
    "vmag": 5.2
  },
  {
    "name": 2637,
    "hr": 117,
    "bf": "12    Cet",
    "pname": "",
    "ra": 0.500655,
    "dec": -3.957332,
    "dist": 173.913,
    "vmag": 5.72
  },
  {
    "name": 2729,
    "hr": 121,
    "bf": "13    Cas",
    "pname": "",
    "ra": 0.52367,
    "dec": 66.519617,
    "dist": 233.1002,
    "vmag": 6.18
  },
  {
    "name": 2772,
    "hr": 123,
    "bf": "14Lam Cas",
    "pname": "",
    "ra": 0.529539,
    "dec": 54.522289,
    "dist": 115.7407,
    "vmag": 4.74
  },
  {
    "name": 2834,
    "hr": 125,
    "bf": "Lam1Phe",
    "pname": "",
    "ra": 0.523594,
    "dec": -48.803514,
    "dist": 52.9661,
    "vmag": 4.76
  },
  {
    "name": 2884,
    "hr": 126,
    "bf": "Bet1Tuc",
    "pname": "",
    "ra": 0.525725,
    "dec": -62.958218,
    "dist": 41.4079,
    "vmag": 4.36
  },
  {
    "name": 2885,
    "hr": 127,
    "bf": "Bet2Tuc",
    "pname": "",
    "ra": 0.525946,
    "dec": -62.965561,
    "dist": 51.6529,
    "vmag": 4.53
  },
  {
    "name": 2905,
    "hr": 130,
    "bf": "15Kap Cas",
    "pname": "",
    "ra": 0.549997,
    "dec": 62.931783,
    "dist": 100000,
    "vmag": 4.17
  },
  {
    "name": 2910,
    "hr": 131,
    "bf": "52    Psc",
    "pname": "",
    "ra": 0.543189,
    "dec": 20.294316,
    "dist": 80,
    "vmag": 5.38
  },
  {
    "name": 2913,
    "hr": 132,
    "bf": "51    Psc",
    "pname": "",
    "ra": 0.539939,
    "dec": 6.955463,
    "dist": 80.9717,
    "vmag": 5.69
  },
  {
    "name": 3003,
    "hr": 136,
    "bf": "Bet3Tuc",
    "pname": "",
    "ra": 0.545512,
    "dec": -63.0315,
    "dist": 45.5581,
    "vmag": 5.07
  },
  {
    "name": 3038,
    "hr": 137,
    "bf": "16    Cas",
    "pname": "",
    "ra": 0.573583,
    "dec": 66.750351,
    "dist": 189.7533,
    "vmag": 6.47
  },
  {
    "name": 3112,
    "hr": 139,
    "bf": "The Tuc",
    "pname": "",
    "ra": 0.556463,
    "dec": -71.266246,
    "dist": 130.039,
    "vmag": 6.11
  },
  {
    "name": 3196,
    "hr": 142,
    "bf": "13    Cet",
    "pname": "",
    "ra": 0.587466,
    "dec": -3.592846,
    "dist": 21.254,
    "vmag": 5.2
  },
  {
    "name": 3229,
    "hr": 143,
    "bf": "14    Cet",
    "pname": "",
    "ra": 0.592454,
    "dec": -0.50561,
    "dist": 54.4959,
    "vmag": 5.94
  },
  {
    "name": 3302,
    "hr": 147,
    "bf": "Lam2Phe",
    "pname": "",
    "ra": 0.594767,
    "dec": -48.000907,
    "dist": 34.8189,
    "vmag": 5.51
  },
  {
    "name": 3360,
    "hr": 153,
    "bf": "17Zet Cas",
    "pname": "",
    "ra": 0.616188,
    "dec": 53.896909,
    "dist": 181.8182,
    "vmag": 3.69
  },
  {
    "name": 3369,
    "hr": 154,
    "bf": "29Pi  And",
    "pname": "",
    "ra": 0.61468,
    "dec": 33.719344,
    "dist": 183.4862,
    "vmag": 4.34
  },
  {
    "name": 3379,
    "hr": 155,
    "bf": "53    Psc",
    "pname": "",
    "ra": 0.613142,
    "dec": 15.231725,
    "dist": 318.4713,
    "vmag": 5.89
  },
  {
    "name": 3546,
    "hr": 163,
    "bf": "30Eps And",
    "pname": "",
    "ra": 0.642602,
    "dec": 29.311751,
    "dist": 50.226,
    "vmag": 4.34
  },
  {
    "name": 3627,
    "hr": 165,
    "bf": "31Del And",
    "pname": "",
    "ra": 0.655462,
    "dec": 30.861024,
    "dist": 32.352,
    "vmag": 3.27
  },
  {
    "name": 3651,
    "hr": 166,
    "bf": "54    Psc",
    "pname": "",
    "ra": 0.656063,
    "dec": 21.250472,
    "dist": 11.0595,
    "vmag": 5.88
  },
  {
    "name": 3690,
    "hr": 167,
    "bf": "55    Psc",
    "pname": "",
    "ra": 0.665436,
    "dec": 21.438495,
    "dist": 127.0648,
    "vmag": 5.36
  },
  {
    "name": 3712,
    "hr": 168,
    "bf": "18Alp Cas",
    "pname": "Shedir",
    "ra": 0.675116,
    "dec": 56.537331,
    "dist": 69.979,
    "vmag": 2.24
  },
  {
    "name": 3817,
    "hr": 175,
    "bf": "32    And",
    "pname": "",
    "ra": 0.68533,
    "dec": 39.458664,
    "dist": 108.8139,
    "vmag": 5.3
  },
  {
    "name": 3901,
    "hr": 179,
    "bf": "19Xi  Cas",
    "pname": "",
    "ra": 0.701081,
    "dec": 50.512526,
    "dist": 438.5965,
    "vmag": 4.8
  },
  {
    "name": 3919,
    "hr": 180,
    "bf": "Mu  Phe",
    "pname": "",
    "ra": 0.688766,
    "dec": -46.085007,
    "dist": 75.358,
    "vmag": 4.59
  },
  {
    "name": 3980,
    "hr": 183,
    "bf": "Xi  Phe",
    "pname": "",
    "ra": 0.69621,
    "dec": -56.501315,
    "dist": 67.0241,
    "vmag": 5.72
  },
  {
    "name": 4058,
    "hr": 184,
    "bf": "20Pi  Cas",
    "pname": "",
    "ra": 0.724466,
    "dec": 47.024546,
    "dist": 53.6769,
    "vmag": 4.95
  },
  {
    "name": 4065,
    "hr": 185,
    "bf": "Lam1Scl",
    "pname": "",
    "ra": 0.711914,
    "dec": -38.463483,
    "dist": 145.1379,
    "vmag": 6.05
  },
  {
    "name": 4089,
    "hr": 187,
    "bf": "Rho Tuc",
    "pname": "",
    "ra": 0.707869,
    "dec": -65.46803,
    "dist": 41.0341,
    "vmag": 5.38
  },
  {
    "name": 4128,
    "hr": 188,
    "bf": "16Bet Cet",
    "pname": "Diphda",
    "ra": 0.72649,
    "dec": -17.986605,
    "dist": 29.5334,
    "vmag": 2.04
  },
  {
    "name": 4150,
    "hr": 191,
    "bf": "Eta Phe",
    "pname": "",
    "ra": 0.722567,
    "dec": -57.46306,
    "dist": 75.5287,
    "vmag": 4.36
  },
  {
    "name": 4161,
    "hr": 192,
    "bf": "21    Cas",
    "pname": "",
    "ra": 0.760862,
    "dec": 74.988073,
    "dist": 93.0233,
    "vmag": 5.64
  },
  {
    "name": 4180,
    "hr": 193,
    "bf": "22Omi Cas",
    "pname": "",
    "ra": 0.74542,
    "dec": 48.284364,
    "dist": 215.5172,
    "vmag": 4.48
  },
  {
    "name": 4188,
    "hr": 194,
    "bf": "17Phi1Cet",
    "pname": "",
    "ra": 0.7365,
    "dec": -10.60955,
    "dist": 71.6332,
    "vmag": 4.77
  },
  {
    "name": 4211,
    "hr": 195,
    "bf": "Lam2Scl",
    "pname": "",
    "ra": 0.736683,
    "dec": -38.421686,
    "dist": 103.8422,
    "vmag": 5.9
  },
  {
    "name": 4307,
    "hr": 203,
    "bf": "18    Cet",
    "pname": "",
    "ra": 0.757969,
    "dec": -12.88081,
    "dist": 30.9981,
    "vmag": 6.15
  },
  {
    "name": 4382,
    "hr": 208,
    "bf": "23    Cas",
    "pname": "",
    "ra": 0.796119,
    "dec": 74.847573,
    "dist": 236.4066,
    "vmag": 5.42
  },
  {
    "name": 4408,
    "hr": 211,
    "bf": "57    Psc",
    "pname": "",
    "ra": 0.775822,
    "dec": 15.475504,
    "dist": 238.0952,
    "vmag": 5.36
  },
  {
    "name": 4482,
    "hr": 213,
    "bf": "58    Psc",
    "pname": "",
    "ra": 0.783738,
    "dec": 11.973849,
    "dist": 86.8056,
    "vmag": 5.51
  },
  {
    "name": 4490,
    "hr": 214,
    "bf": "59    Psc",
    "pname": "",
    "ra": 0.787118,
    "dec": 19.578702,
    "dist": 100.6036,
    "vmag": 6.11
  },
  {
    "name": 4502,
    "hr": 215,
    "bf": "34Zet And",
    "pname": "",
    "ra": 0.788981,
    "dec": 24.267178,
    "dist": 58.0046,
    "vmag": 4.08
  },
  {
    "name": 4526,
    "hr": 216,
    "bf": "60    Psc",
    "pname": "",
    "ra": 0.789898,
    "dec": 6.740956,
    "dist": 141.2429,
    "vmag": 5.98
  },
  {
    "name": 4568,
    "hr": 217,
    "bf": "61    Psc",
    "pname": "",
    "ra": 0.798562,
    "dec": 20.925346,
    "dist": 57.0451,
    "vmag": 6.51
  },
  {
    "name": 4614,
    "hr": 219,
    "bf": "24Eta Cas",
    "pname": "",
    "ra": 0.81826,
    "dec": 57.815187,
    "dist": 5.9531,
    "vmag": 3.46
  },
  {
    "name": 4627,
    "hr": 221,
    "bf": "62    Psc",
    "pname": "",
    "ra": 0.804836,
    "dec": 7.299928,
    "dist": 177.6199,
    "vmag": 5.92
  },
  {
    "name": 4636,
    "hr": 223,
    "bf": "25Nu  Cas",
    "pname": "",
    "ra": 0.813892,
    "dec": 50.968168,
    "dist": 126.2626,
    "vmag": 4.9
  },
  {
    "name": 4656,
    "hr": 224,
    "bf": "63Del Psc",
    "pname": "",
    "ra": 0.811373,
    "dec": 7.585079,
    "dist": 95.4198,
    "vmag": 4.44
  },
  {
    "name": 4676,
    "hr": 225,
    "bf": "64    Psc",
    "pname": "",
    "ra": 0.816308,
    "dec": 16.940644,
    "dist": 23.4522,
    "vmag": 5.07
  },
  {
    "name": 4727,
    "hr": 226,
    "bf": "35Nu  And",
    "pname": "",
    "ra": 0.830234,
    "dec": 41.078911,
    "dist": 189.3939,
    "vmag": 4.53
  },
  {
    "name": 4757,
    "hr": 230,
    "bf": "65    Psc",
    "pname": "",
    "ra": 0.831433,
    "dec": 27.710286,
    "dist": 88.574,
    "vmag": 5.55
  },
  {
    "name": 4813,
    "hr": 235,
    "bf": "19Phi2Cet",
    "pname": "",
    "ra": 0.835443,
    "dec": -10.644326,
    "dist": 15.753,
    "vmag": 5.17
  },
  {
    "name": 4815,
    "hr": 236,
    "bf": "Lam Hyi",
    "pname": "",
    "ra": 0.809777,
    "dec": -74.923438,
    "dist": 64.9351,
    "vmag": 5.09
  },
  {
    "name": 4919,
    "hr": 242,
    "bf": "Rho Phe",
    "pname": "",
    "ra": 0.844768,
    "dec": -50.986816,
    "dist": 74.239,
    "vmag": 5.24
  },
  {
    "name": 5112,
    "hr": 248,
    "bf": "20    Cet",
    "pname": "",
    "ra": 0.883471,
    "dec": -1.14426,
    "dist": 179.8561,
    "vmag": 4.78
  },
  {
    "name": 5190,
    "hr": 252,
    "bf": "Lam1Tuc",
    "pname": "",
    "ra": 0.873477,
    "dec": -69.503764,
    "dist": 63.2911,
    "vmag": 6.67
  },
  {
    "name": 5234,
    "hr": 253,
    "bf": "26Ups1Cas",
    "pname": "",
    "ra": 0.916715,
    "dec": 58.972698,
    "dist": 100.7049,
    "vmag": 4.83
  },
  {
    "name": 5267,
    "hr": 254,
    "bf": "66    Psc",
    "pname": "",
    "ra": 0.909785,
    "dec": 19.188417,
    "dist": 108.1081,
    "vmag": 5.8
  },
  {
    "name": 5268,
    "hr": 255,
    "bf": "21    Cet",
    "pname": "",
    "ra": 0.904887,
    "dec": -8.740662,
    "dist": 131.406,
    "vmag": 6.15
  },
  {
    "name": 5286,
    "hr": 258,
    "bf": "36    And",
    "pname": "",
    "ra": 0.916139,
    "dec": 23.628335,
    "dist": 37.9795,
    "vmag": 5.46
  },
  {
    "name": 5382,
    "hr": 262,
    "bf": "67    Psc",
    "pname": "",
    "ra": 0.93292,
    "dec": 27.209381,
    "dist": 77.7605,
    "vmag": 6.08
  },
  {
    "name": 5394,
    "hr": 264,
    "bf": "27Gam Cas",
    "pname": "Cih",
    "ra": 0.945143,
    "dec": 60.71674,
    "dist": 168.3502,
    "vmag": 2.15
  },
  {
    "name": 5395,
    "hr": 265,
    "bf": "28Ups2Cas",
    "pname": "",
    "ra": 0.944432,
    "dec": 59.181056,
    "dist": 61.2745,
    "vmag": 4.62
  },
  {
    "name": 5437,
    "hr": 267,
    "bf": "22Phi3Cet",
    "pname": "",
    "ra": 0.933747,
    "dec": -11.266526,
    "dist": 168.9189,
    "vmag": 5.35
  },
  {
    "name": 5448,
    "hr": 269,
    "bf": "37Mu  And",
    "pname": "",
    "ra": 0.945885,
    "dec": 38.499345,
    "dist": 39.7772,
    "vmag": 3.86
  },
  {
    "name": 5457,
    "hr": 270,
    "bf": "Lam2Tuc",
    "pname": "",
    "ra": 0.916751,
    "dec": -69.527084,
    "dist": 68.0272,
    "vmag": 5.45
  },
  {
    "name": 5516,
    "hr": 271,
    "bf": "38Eta And",
    "pname": "",
    "ra": 0.953445,
    "dec": 23.417648,
    "dist": 70.4225,
    "vmag": 4.4
  },
  {
    "name": 5575,
    "hr": 274,
    "bf": "68    Psc",
    "pname": "",
    "ra": 0.963931,
    "dec": 28.992217,
    "dist": 198.8072,
    "vmag": 5.44
  },
  {
    "name": 5722,
    "hr": 279,
    "bf": "23Phi4Cet",
    "pname": "",
    "ra": 0.978852,
    "dec": -11.379975,
    "dist": 98.0392,
    "vmag": 5.62
  },
  {
    "name": 5737,
    "hr": 280,
    "bf": "Alp Scl",
    "pname": "",
    "ra": 0.976766,
    "dec": -29.357449,
    "dist": 238.0952,
    "vmag": 4.3
  },
  {
    "name": 6055,
    "hr": 288,
    "bf": "Xi  Scl",
    "pname": "",
    "ra": 1.02174,
    "dec": -38.916527,
    "dist": 157.4803,
    "vmag": 5.59
  },
  {
    "name": 6116,
    "hr": 290,
    "bf": "39    And",
    "pname": "",
    "ra": 1.048407,
    "dec": 41.345157,
    "dist": 107.2961,
    "vmag": 5.95
  },
  {
    "name": 6118,
    "hr": 291,
    "bf": "69Sig Psc",
    "pname": "",
    "ra": 1.046971,
    "dec": 31.804263,
    "dist": 132.9787,
    "vmag": 5.5
  },
  {
    "name": 6178,
    "hr": 293,
    "bf": "Sig Scl",
    "pname": "",
    "ra": 1.040674,
    "dec": -31.552005,
    "dist": 71.2251,
    "vmag": 5.5
  },
  {
    "name": 6186,
    "hr": 294,
    "bf": "71Eps Psc",
    "pname": "",
    "ra": 1.049058,
    "dec": 7.890135,
    "dist": 55.7414,
    "vmag": 4.27
  },
  {
    "name": 6192,
    "hr": 295,
    "bf": "Ome Phe",
    "pname": "",
    "ra": 1.033838,
    "dec": -57.002389,
    "dist": 120.6273,
    "vmag": 6.12
  },
  {
    "name": 6203,
    "hr": 296,
    "bf": "25    Cet",
    "pname": "",
    "ra": 1.050705,
    "dec": -4.836601,
    "dist": 102.2495,
    "vmag": 5.4
  },
  {
    "name": 6288,
    "hr": 301,
    "bf": "26    Cet",
    "pname": "",
    "ra": 1.063619,
    "dec": 1.366846,
    "dist": 60.1323,
    "vmag": 6.06
  },
  {
    "name": 6386,
    "hr": 307,
    "bf": "73    Psc",
    "pname": "",
    "ra": 1.081288,
    "dec": 5.656262,
    "dist": 199.6008,
    "vmag": 6.03
  },
  {
    "name": 6397,
    "hr": 308,
    "bf": "72    Psc",
    "pname": "",
    "ra": 1.084821,
    "dec": 14.946133,
    "dist": 54.5852,
    "vmag": 5.64
  },
  {
    "name": 6456,
    "hr": 310,
    "bf": "74Psi1Psc",
    "pname": "",
    "ra": 1.094709,
    "dec": 21.473181,
    "dist": 84.317,
    "vmag": 5.33
  },
  {
    "name": 6457,
    "hr": 311,
    "bf": "74Psi1Psc",
    "pname": "",
    "ra": 1.094919,
    "dec": 21.465442,
    "dist": 85.9107,
    "vmag": 5.55
  },
  {
    "name": 6479,
    "hr": 313,
    "bf": "77    Psc",
    "pname": "",
    "ra": 1.097008,
    "dec": 4.908372,
    "dist": 40.6339,
    "vmag": 6.35
  },
  {
    "name": 6480,
    "hr": 314,
    "bf": "77    Psc",
    "pname": "",
    "ra": 1.097622,
    "dec": 4.90941,
    "dist": 42.9553,
    "vmag": 7.26
  },
  {
    "name": 6482,
    "hr": 315,
    "bf": "27    Cet",
    "pname": "",
    "ra": 1.093579,
    "dec": -9.979323,
    "dist": 92.9368,
    "vmag": 6.09
  },
  {
    "name": 6530,
    "hr": 317,
    "bf": "28    Cet",
    "pname": "",
    "ra": 1.10143,
    "dec": -9.839354,
    "dist": 180.8318,
    "vmag": 5.58
  },
  {
    "name": 6557,
    "hr": 319,
    "bf": "75    Psc",
    "pname": "",
    "ra": 1.109341,
    "dec": 12.956039,
    "dist": 133.3333,
    "vmag": 6.14
  },
  {
    "name": 6582,
    "hr": 321,
    "bf": "30Mu  Cas",
    "pname": "",
    "ra": 1.137477,
    "dec": 54.92034,
    "dist": 7.554,
    "vmag": 5.17
  },
  {
    "name": 6595,
    "hr": 322,
    "bf": "Bet Phe",
    "pname": "",
    "ra": 1.101407,
    "dec": -46.718414,
    "dist": 100000,
    "vmag": 3.32
  },
  {
    "name": 6658,
    "hr": 324,
    "bf": "41    And",
    "pname": "",
    "ra": 1.133559,
    "dec": 43.942092,
    "dist": 58.9623,
    "vmag": 5.04
  },
  {
    "name": 6680,
    "hr": 327,
    "bf": "78    Psc",
    "pname": "",
    "ra": 1.133701,
    "dec": 32.01213,
    "dist": 41.3907,
    "vmag": 6.23
  },
  {
    "name": 6695,
    "hr": 328,
    "bf": "79Psi2Psc",
    "pname": "",
    "ra": 1.132544,
    "dec": 20.739113,
    "dist": 47.3037,
    "vmag": 5.56
  },
  {
    "name": 6706,
    "hr": 329,
    "bf": "30    Cet",
    "pname": "",
    "ra": 1.129502,
    "dec": -9.78555,
    "dist": 47.1476,
    "vmag": 5.71
  },
  {
    "name": 6763,
    "hr": 330,
    "bf": "80    Psc",
    "pname": "",
    "ra": 1.1395,
    "dec": 5.649819,
    "dist": 35.2113,
    "vmag": 5.51
  },
  {
    "name": 6767,
    "hr": 331,
    "bf": "Ups Phe",
    "pname": "",
    "ra": 1.129957,
    "dec": -41.486916,
    "dist": 56.9476,
    "vmag": 5.21
  },
  {
    "name": 6793,
    "hr": 332,
    "bf": "Iot Tuc",
    "pname": "",
    "ra": 1.121838,
    "dec": -61.775289,
    "dist": 93.2836,
    "vmag": 5.36
  },
  {
    "name": 6805,
    "hr": 334,
    "bf": "31Eta Cet",
    "pname": "",
    "ra": 1.143164,
    "dec": -10.182264,
    "dist": 37.9939,
    "vmag": 3.46
  },
  {
    "name": 6811,
    "hr": 335,
    "bf": "42Phi And",
    "pname": "",
    "ra": 1.158368,
    "dec": 47.241792,
    "dist": 219.7802,
    "vmag": 4.26
  },
  {
    "name": 6829,
    "hr": 336,
    "bf": "31    Cas",
    "pname": "",
    "ra": 1.177579,
    "dec": 68.778621,
    "dist": 84.8896,
    "vmag": 5.32
  },
  {
    "name": 6860,
    "hr": 337,
    "bf": "43Bet And",
    "pname": "Mirach",
    "ra": 1.162194,
    "dec": 35.620558,
    "dist": 60.5327,
    "vmag": 2.07
  },
  {
    "name": 6882,
    "hr": 338,
    "bf": "Zet Phe",
    "pname": "",
    "ra": 1.139742,
    "dec": -55.24576,
    "dist": 91.5751,
    "vmag": 3.94
  },
  {
    "name": 6903,
    "hr": 339,
    "bf": "81Psi3Psc",
    "pname": "",
    "ra": 1.163667,
    "dec": 19.658408,
    "dist": 115.4734,
    "vmag": 5.57
  },
  {
    "name": 6920,
    "hr": 340,
    "bf": "44    And",
    "pname": "",
    "ra": 1.17188,
    "dec": 42.081475,
    "dist": 52.2739,
    "vmag": 5.67
  },
  {
    "name": 6961,
    "hr": 343,
    "bf": "33The Cas",
    "pname": "",
    "ra": 1.185017,
    "dec": 55.149901,
    "dist": 40.95,
    "vmag": 4.34
  },
  {
    "name": 6972,
    "hr": 345,
    "bf": "32    Cas",
    "pname": "",
    "ra": 1.194829,
    "dec": 65.018854,
    "dist": 119.0476,
    "vmag": 5.57
  },
  {
    "name": 6976,
    "hr": 346,
    "bf": "32    Cet",
    "pname": "",
    "ra": 1.169985,
    "dec": -8.906135,
    "dist": 118.624,
    "vmag": 6.4
  },
  {
    "name": 7014,
    "hr": 347,
    "bf": "33    Cet",
    "pname": "",
    "ra": 1.175987,
    "dec": 2.44567,
    "dist": 235.2941,
    "vmag": 5.97
  },
  {
    "name": 7019,
    "hr": 348,
    "bf": "45    And",
    "pname": "",
    "ra": 1.186189,
    "dec": 37.724121,
    "dist": 242.1308,
    "vmag": 5.8
  },
  {
    "name": 7034,
    "hr": 349,
    "bf": "82    Psc",
    "pname": "",
    "ra": 1.185213,
    "dec": 31.424736,
    "dist": 147.2754,
    "vmag": 5.15
  },
  {
    "name": 7087,
    "hr": 351,
    "bf": "84Chi Psc",
    "pname": "",
    "ra": 1.190894,
    "dec": 21.03465,
    "dist": 117.6471,
    "vmag": 4.66
  },
  {
    "name": 7106,
    "hr": 352,
    "bf": "83Tau Psc",
    "pname": "",
    "ra": 1.194342,
    "dec": 30.089638,
    "dist": 51.7598,
    "vmag": 4.51
  },
  {
    "name": 7147,
    "hr": 353,
    "bf": "34    Cet",
    "pname": "",
    "ra": 1.195419,
    "dec": -2.251079,
    "dist": 171.8213,
    "vmag": 5.93
  },
  {
    "name": 7318,
    "hr": 360,
    "bf": "85Phi Psc",
    "pname": "",
    "ra": 1.229152,
    "dec": 24.583713,
    "dist": 136.7989,
    "vmag": 4.67
  },
  {
    "name": 7344,
    "hr": 361,
    "bf": "86Zet Psc",
    "pname": "",
    "ra": 1.228857,
    "dec": 7.575354,
    "dist": 53.3049,
    "vmag": 5.21
  },
  {
    "name": 7345,
    "hr": 362,
    "bf": "86Zet Psc",
    "pname": "",
    "ra": 1.22924,
    "dec": 7.578261,
    "dist": 93.985,
    "vmag": 6.44
  },
  {
    "name": 7374,
    "hr": 364,
    "bf": "87    Psc",
    "pname": "",
    "ra": 1.235453,
    "dec": 16.133479,
    "dist": 139.47,
    "vmag": 5.97
  },
  {
    "name": 7439,
    "hr": 366,
    "bf": "37    Cet",
    "pname": "",
    "ra": 1.240011,
    "dec": -7.922826,
    "dist": 23.3863,
    "vmag": 5.14
  },
  {
    "name": 7446,
    "hr": 367,
    "bf": "88    Psc",
    "pname": "",
    "ra": 1.245109,
    "dec": 6.995136,
    "dist": 159.2357,
    "vmag": 6.04
  },
  {
    "name": 7476,
    "hr": 368,
    "bf": "38    Cet",
    "pname": "",
    "ra": 1.246992,
    "dec": -0.973795,
    "dist": 42.9185,
    "vmag": 5.7
  },
  {
    "name": 7570,
    "hr": 370,
    "bf": "Nu  Phe",
    "pname": "",
    "ra": 1.253043,
    "dec": -45.531664,
    "dist": 15.1149,
    "vmag": 4.97
  },
  {
    "name": 7672,
    "hr": 373,
    "bf": "39    Cet",
    "pname": "",
    "ra": 1.276747,
    "dec": -2.500368,
    "dist": 80.5802,
    "vmag": 5.42
  },
  {
    "name": 7788,
    "hr": 377,
    "bf": "Kap Tuc",
    "pname": "",
    "ra": 1.262704,
    "dec": -68.875927,
    "dist": 20.9556,
    "vmag": 4.25
  },
  {
    "name": 7804,
    "hr": 378,
    "bf": "89    Psc",
    "pname": "",
    "ra": 1.296654,
    "dec": 3.614466,
    "dist": 75.3012,
    "vmag": 5.13
  },
  {
    "name": 7927,
    "hr": 382,
    "bf": "34Phi Cas",
    "pname": "",
    "ra": 1.334699,
    "dec": 58.231611,
    "dist": 100000,
    "vmag": 4.95
  },
  {
    "name": 7964,
    "hr": 383,
    "bf": "90Ups Psc",
    "pname": "",
    "ra": 1.324443,
    "dec": 27.264059,
    "dist": 94.4287,
    "vmag": 4.74
  },
  {
    "name": 8003,
    "hr": 384,
    "bf": "35    Cas",
    "pname": "",
    "ra": 1.35145,
    "dec": 64.658131,
    "dist": 78.125,
    "vmag": 6.33
  },
  {
    "name": 8036,
    "hr": 385,
    "bf": "42    Cet",
    "pname": "",
    "ra": 1.330082,
    "dec": -0.509029,
    "dist": 100.7049,
    "vmag": 5.87
  },
  {
    "name": 8126,
    "hr": 389,
    "bf": "91    Psc",
    "pname": "",
    "ra": 1.352047,
    "dec": 28.738207,
    "dist": 107.4114,
    "vmag": 5.23
  },
  {
    "name": 8207,
    "hr": 390,
    "bf": "46Xi  And",
    "pname": "",
    "ra": 1.372337,
    "dec": 45.528778,
    "dist": 65.7462,
    "vmag": 4.87
  },
  {
    "name": 8335,
    "hr": 393,
    "bf": "43    Cet",
    "pname": "",
    "ra": 1.376342,
    "dec": -0.449673,
    "dist": 137.3626,
    "vmag": 6.5
  },
  {
    "name": 8374,
    "hr": 395,
    "bf": "47    And",
    "pname": "",
    "ra": 1.394612,
    "dec": 37.714943,
    "dist": 63.857,
    "vmag": 5.6
  },
  {
    "name": 8491,
    "hr": 399,
    "bf": "36Psi Cas",
    "pname": "",
    "ra": 1.432208,
    "dec": 68.130012,
    "dist": 59.8086,
    "vmag": 4.72
  },
  {
    "name": 8511,
    "hr": 401,
    "bf": "44    Cet",
    "pname": "",
    "ra": 1.400705,
    "dec": -8.007416,
    "dist": 67.5219,
    "vmag": 6.21
  },
  {
    "name": 8512,
    "hr": 402,
    "bf": "45The Cet",
    "pname": "",
    "ra": 1.40039,
    "dec": -8.183257,
    "dist": 34.8918,
    "vmag": 3.6
  },
  {
    "name": 8538,
    "hr": 403,
    "bf": "37Del Cas",
    "pname": "Ruchbah",
    "ra": 1.430216,
    "dec": 60.235283,
    "dist": 30.4785,
    "vmag": 2.66
  },
  {
    "name": 8705,
    "hr": 412,
    "bf": "46    Cet",
    "pname": "",
    "ra": 1.427009,
    "dec": -14.598796,
    "dist": 88.1834,
    "vmag": 4.9
  },
  {
    "name": 8723,
    "hr": 413,
    "bf": "93Rho Psc",
    "pname": "",
    "ra": 1.437573,
    "dec": 19.172346,
    "dist": 25.2143,
    "vmag": 5.35
  },
  {
    "name": 8763,
    "hr": 414,
    "bf": "94    Psc",
    "pname": "",
    "ra": 1.44491,
    "dec": 19.240422,
    "dist": 85.5432,
    "vmag": 5.5
  },
  {
    "name": 8799,
    "hr": 417,
    "bf": "48Ome And",
    "pname": "",
    "ra": 1.460915,
    "dec": 45.406687,
    "dist": 28.6205,
    "vmag": 4.83
  },
  {
    "name": 8829,
    "hr": 421,
    "bf": "47    Cet",
    "pname": "",
    "ra": 1.447657,
    "dec": -13.056512,
    "dist": 37.4672,
    "vmag": 5.51
  },
  {
    "name": 8890,
    "hr": 424,
    "bf": "1Alp UMi",
    "pname": "Polaris",
    "ra": 2.52975,
    "dec": 89.264109,
    "dist": 132.626,
    "vmag": 1.97
  },
  {
    "name": 9021,
    "hr": 427,
    "bf": "38    Cas",
    "pname": "",
    "ra": 1.520444,
    "dec": 70.264604,
    "dist": 28.9771,
    "vmag": 5.82
  },
  {
    "name": 9053,
    "hr": 429,
    "bf": "Gam Phe",
    "pname": "",
    "ra": 1.472759,
    "dec": -43.318234,
    "dist": 71.6332,
    "vmag": 3.41
  },
  {
    "name": 9057,
    "hr": 430,
    "bf": "49    And",
    "pname": "",
    "ra": 1.501695,
    "dec": 47.007274,
    "dist": 90.1713,
    "vmag": 5.27
  },
  {
    "name": 9100,
    "hr": 432,
    "bf": "97    Psc",
    "pname": "",
    "ra": 1.498017,
    "dec": 18.355669,
    "dist": 146.1988,
    "vmag": 6.01
  },
  {
    "name": 9132,
    "hr": 433,
    "bf": "48    Cet",
    "pname": "",
    "ra": 1.49337,
    "dec": -21.629339,
    "dist": 71.3776,
    "vmag": 5.11
  },
  {
    "name": 9138,
    "hr": 434,
    "bf": "98Mu  Psc",
    "pname": "",
    "ra": 1.503087,
    "dec": 6.14382,
    "dist": 93.1966,
    "vmag": 4.84
  },
  {
    "name": 9270,
    "hr": 437,
    "bf": "99Eta Psc",
    "pname": "",
    "ra": 1.524725,
    "dec": 15.345823,
    "dist": 107.1811,
    "vmag": 3.62
  },
  {
    "name": 9362,
    "hr": 440,
    "bf": "Del Phe",
    "pname": "",
    "ra": 1.520851,
    "dec": -49.072702,
    "dist": 43.573,
    "vmag": 3.93
  },
  {
    "name": 9408,
    "hr": 442,
    "bf": "39Chi Cas",
    "pname": "",
    "ra": 1.565528,
    "dec": 59.23204,
    "dist": 63.8162,
    "vmag": 4.68
  },
  {
    "name": 9672,
    "hr": 451,
    "bf": "49    Cet",
    "pname": "",
    "ra": 1.57716,
    "dec": -15.676359,
    "dist": 59.3824,
    "vmag": 5.62
  },
  {
    "name": 9766,
    "hr": 455,
    "bf": "101    Psc",
    "pname": "",
    "ra": 1.596234,
    "dec": 14.661422,
    "dist": 476.1905,
    "vmag": 6.23
  },
  {
    "name": 9774,
    "hr": 456,
    "bf": "40    Cas",
    "pname": "",
    "ra": 1.641926,
    "dec": 73.04004,
    "dist": 140.4494,
    "vmag": 5.28
  },
  {
    "name": 9826,
    "hr": 458,
    "bf": "50Ups And",
    "pname": "",
    "ra": 1.613299,
    "dec": 41.405459,
    "dist": 13.4916,
    "vmag": 4.1
  },
  {
    "name": 9856,
    "hr": 459,
    "bf": "50    Cet",
    "pname": "",
    "ra": 1.599713,
    "dec": -15.400183,
    "dist": 167.5042,
    "vmag": 5.41
  },
  {
    "name": 9906,
    "hr": 462,
    "bf": "Tau Scl",
    "pname": "",
    "ra": 1.602361,
    "dec": -29.907317,
    "dist": 69.3481,
    "vmag": 5.69
  },
  {
    "name": 9919,
    "hr": 463,
    "bf": "102Pi  Psc",
    "pname": "",
    "ra": 1.61831,
    "dec": 12.141535,
    "dist": 35.0877,
    "vmag": 5.54
  },
  {
    "name": 9927,
    "hr": 464,
    "bf": "51    And",
    "pname": "",
    "ra": 1.633205,
    "dec": 48.628213,
    "dist": 54.3183,
    "vmag": 3.59
  },
  {
    "name": 10072,
    "hr": 469,
    "bf": "52Chi And",
    "pname": "",
    "ra": 1.655835,
    "dec": 44.386165,
    "dist": 76.746,
    "vmag": 5.01
  },
  {
    "name": 10144,
    "hr": 472,
    "bf": "Alp Eri",
    "pname": "Achernar",
    "ra": 1.628556,
    "dec": -57.236757,
    "dist": 42.7533,
    "vmag": 0.45
  },
  {
    "name": 10164,
    "hr": 475,
    "bf": "105    Psc",
    "pname": "",
    "ra": 1.661338,
    "dec": 16.405858,
    "dist": 120.1923,
    "vmag": 5.98
  },
  {
    "name": 10205,
    "hr": 477,
    "bf": "53Tau And",
    "pname": "",
    "ra": 1.676337,
    "dec": 40.577049,
    "dist": 218.3406,
    "vmag": 4.96
  },
  {
    "name": 10221,
    "hr": 478,
    "bf": "43    Cas",
    "pname": "",
    "ra": 1.705688,
    "dec": 68.043021,
    "dist": 119.1895,
    "vmag": 5.57
  },
  {
    "name": 10250,
    "hr": 480,
    "bf": "42    Cas",
    "pname": "",
    "ra": 1.715493,
    "dec": 70.622526,
    "dist": 85.1064,
    "vmag": 5.18
  },
  {
    "name": 10380,
    "hr": 489,
    "bf": "106Nu  Psc",
    "pname": "",
    "ra": 1.690526,
    "dec": 5.487613,
    "dist": 111.3586,
    "vmag": 4.45
  },
  {
    "name": 10425,
    "hr": 491,
    "bf": "44    Cas",
    "pname": "",
    "ra": 1.722151,
    "dec": 60.551332,
    "dist": 320.5128,
    "vmag": 5.78
  },
  {
    "name": 10476,
    "hr": 493,
    "bf": "107    Psc",
    "pname": "",
    "ra": 1.70827,
    "dec": 20.268504,
    "dist": 7.5324,
    "vmag": 5.24
  },
  {
    "name": 10516,
    "hr": 496,
    "bf": "Phi Per",
    "pname": "φ-Per",
    "ra": 1.727675,
    "dec": 50.688732,
    "dist": 220.2643,
    "vmag": 4.01
  },
  {
    "name": 10537,
    "hr": 497,
    "bf": "Pi  Scl",
    "pname": "",
    "ra": 1.702389,
    "dec": -32.32697,
    "dist": 65.8762,
    "vmag": 5.25
  },
  {
    "name": 10697,
    "hr": 508,
    "bf": "109    Psc",
    "pname": "",
    "ra": 1.748841,
    "dec": 20.083149,
    "dist": 32.5733,
    "vmag": 6.27
  },
  {
    "name": 10700,
    "hr": 509,
    "bf": "52Tau Cet",
    "pname": "",
    "ra": 1.734479,
    "dec": -15.93748,
    "dist": 3.6502,
    "vmag": 3.49
  },
  {
    "name": 10761,
    "hr": 510,
    "bf": "110Omi Psc",
    "pname": "",
    "ra": 1.756564,
    "dec": 9.157736,
    "dist": 85.6898,
    "vmag": 4.26
  },
  {
    "name": 10830,
    "hr": 514,
    "bf": "Eps Scl",
    "pname": "",
    "ra": 1.760763,
    "dec": -25.05261,
    "dist": 28.1136,
    "vmag": 5.29
  },
  {
    "name": 10859,
    "hr": 516,
    "bf": "Tau1Hyi",
    "pname": "",
    "ra": 1.689256,
    "dec": -79.1482,
    "dist": 120.7729,
    "vmag": 6.33
  },
  {
    "name": 10982,
    "hr": 522,
    "bf": "4    Ari",
    "pname": "",
    "ra": 1.803038,
    "dec": 16.955551,
    "dist": 84.3882,
    "vmag": 5.86
  },
  {
    "name": 11154,
    "hr": 530,
    "bf": "1    Ari",
    "pname": "",
    "ra": 1.835714,
    "dec": 22.275338,
    "dist": 179.5332,
    "vmag": 5.83
  },
  {
    "name": 11171,
    "hr": 531,
    "bf": "53Chi Cet",
    "pname": "",
    "ra": 1.826418,
    "dec": -10.68641,
    "dist": 23.1857,
    "vmag": 4.66
  },
  {
    "name": 11241,
    "hr": 533,
    "bf": "1    Per",
    "pname": "",
    "ra": 1.866476,
    "dec": 55.147385,
    "dist": 396.8254,
    "vmag": 5.53
  },
  {
    "name": 11291,
    "hr": 536,
    "bf": "2    Per",
    "pname": "",
    "ra": 1.869268,
    "dec": 50.792794,
    "dist": 147.929,
    "vmag": 5.7
  },
  {
    "name": 11353,
    "hr": 539,
    "bf": "55Zet Cet",
    "pname": "",
    "ra": 1.857676,
    "dec": -10.335038,
    "dist": 72.0461,
    "vmag": 3.74
  },
  {
    "name": 11415,
    "hr": 542,
    "bf": "45Eps Cas",
    "pname": "",
    "ra": 1.906584,
    "dec": 63.670101,
    "dist": 126.2626,
    "vmag": 3.35
  },
  {
    "name": 11428,
    "hr": 543,
    "bf": "55    And",
    "pname": "",
    "ra": 1.888152,
    "dec": 40.72979,
    "dist": 193.4236,
    "vmag": 5.42
  },
  {
    "name": 11443,
    "hr": 544,
    "bf": "2Alp Tri",
    "pname": "",
    "ra": 1.884696,
    "dec": 29.578829,
    "dist": 19.4175,
    "vmag": 3.42
  },
  {
    "name": 11502,
    "hr": 546,
    "bf": "5Gam2Ari",
    "pname": "Mesarthim",
    "ra": 1.89217,
    "dec": 19.293852,
    "dist": 50.3018,
    "vmag": 3.88
  },
  {
    "name": 11529,
    "hr": 548,
    "bf": "46Ome Cas",
    "pname": "",
    "ra": 1.933337,
    "dec": 68.685242,
    "dist": 215.0538,
    "vmag": 4.97
  },
  {
    "name": 11559,
    "hr": 549,
    "bf": "111Xi  Psc",
    "pname": "",
    "ra": 1.892597,
    "dec": 3.187536,
    "dist": 54.9149,
    "vmag": 4.61
  },
  {
    "name": 11604,
    "hr": 550,
    "bf": "Tau2Hyi",
    "pname": "",
    "ra": 1.796291,
    "dec": -80.176311,
    "dist": 61.8429,
    "vmag": 6.05
  },
  {
    "name": 11636,
    "hr": 553,
    "bf": "6Bet Ari",
    "pname": "Sheratan",
    "ra": 1.910668,
    "dec": 20.808035,
    "dist": 17.9856,
    "vmag": 2.64
  },
  {
    "name": 11695,
    "hr": 555,
    "bf": "Psi Phe",
    "pname": "",
    "ra": 1.894102,
    "dec": -46.302669,
    "dist": 104.8218,
    "vmag": 4.39
  },
  {
    "name": 11749,
    "hr": 557,
    "bf": "56    And",
    "pname": "",
    "ra": 1.935927,
    "dec": 37.25183,
    "dist": 96.9932,
    "vmag": 5.69
  },
  {
    "name": 11753,
    "hr": 558,
    "bf": "Phi Phe",
    "pname": "",
    "ra": 1.906122,
    "dec": -42.49695,
    "dist": 94.0734,
    "vmag": 5.12
  },
  {
    "name": 11763,
    "hr": 559,
    "bf": "7    Ari",
    "pname": "",
    "ra": 1.930844,
    "dec": 23.577322,
    "dist": 170.9402,
    "vmag": 5.76
  },
  {
    "name": 11909,
    "hr": 563,
    "bf": "8Iot Ari",
    "pname": "",
    "ra": 1.955848,
    "dec": 17.817532,
    "dist": 159.4896,
    "vmag": 5.09
  },
  {
    "name": 11930,
    "hr": 565,
    "bf": "56    Cet",
    "pname": "",
    "ra": 1.944499,
    "dec": -22.526785,
    "dist": 108.2251,
    "vmag": 4.92
  },
  {
    "name": 11937,
    "hr": 566,
    "bf": "Chi Eri",
    "pname": "",
    "ra": 1.932564,
    "dec": -51.608896,
    "dist": 17.8508,
    "vmag": 3.69
  },
  {
    "name": 11949,
    "hr": 568,
    "bf": "3    Per",
    "pname": "",
    "ra": 1.975973,
    "dec": 49.204352,
    "dist": 75.0188,
    "vmag": 5.7
  },
  {
    "name": 11973,
    "hr": 569,
    "bf": "9Lam Ari",
    "pname": "",
    "ra": 1.965478,
    "dec": 23.596061,
    "dist": 39.4945,
    "vmag": 4.79
  },
  {
    "name": 11977,
    "hr": 570,
    "bf": "Eta2Hyi",
    "pname": "",
    "ra": 1.915572,
    "dec": -67.647303,
    "dist": 67.0691,
    "vmag": 4.68
  },
  {
    "name": 12111,
    "hr": 575,
    "bf": "48    Cas",
    "pname": "",
    "ra": 2.032644,
    "dec": 70.90702,
    "dist": 35.2609,
    "vmag": 4.49
  },
  {
    "name": 12216,
    "hr": 580,
    "bf": "50    Cas",
    "pname": "",
    "ra": 2.057268,
    "dec": 72.421294,
    "dist": 48.1696,
    "vmag": 3.95
  },
  {
    "name": 12230,
    "hr": 581,
    "bf": "47    Cas",
    "pname": "",
    "ra": 2.085315,
    "dec": 77.281341,
    "dist": 33.1565,
    "vmag": 5.27
  },
  {
    "name": 12235,
    "hr": 582,
    "bf": "112    Psc",
    "pname": "",
    "ra": 2.002544,
    "dec": 3.097015,
    "dist": 33.5008,
    "vmag": 5.89
  },
  {
    "name": 12255,
    "hr": 583,
    "bf": "57    Cet",
    "pname": "",
    "ra": 1.996166,
    "dec": -20.824539,
    "dist": 180.5054,
    "vmag": 5.43
  },
  {
    "name": 12274,
    "hr": 585,
    "bf": "59Ups Cet",
    "pname": "",
    "ra": 2.000084,
    "dec": -21.077831,
    "dist": 89.7666,
    "vmag": 3.99
  },
  {
    "name": 12279,
    "hr": 586,
    "bf": "52    Cas",
    "pname": "",
    "ra": 2.047913,
    "dec": 64.901466,
    "dist": 83.8926,
    "vmag": 6
  },
  {
    "name": 12301,
    "hr": 589,
    "bf": "53    Cas",
    "pname": "",
    "ra": 2.050052,
    "dec": 64.390018,
    "dist": 537.6344,
    "vmag": 5.59
  },
  {
    "name": 12303,
    "hr": 590,
    "bf": "4    Per",
    "pname": "",
    "ra": 2.038359,
    "dec": 54.487541,
    "dist": 223.2143,
    "vmag": 4.99
  },
  {
    "name": 12311,
    "hr": 591,
    "bf": "Alp Hyi",
    "pname": "",
    "ra": 1.979451,
    "dec": -61.569859,
    "dist": 22.0119,
    "vmag": 2.86
  },
  {
    "name": 12339,
    "hr": 592,
    "bf": "49    Cas",
    "pname": "",
    "ra": 2.092103,
    "dec": 76.11506,
    "dist": 122.6994,
    "vmag": 5.22
  },
  {
    "name": 12363,
    "hr": 593,
    "bf": "Sig Hyi",
    "pname": "",
    "ra": 1.930642,
    "dec": -78.348548,
    "dist": 40.6174,
    "vmag": 6.15
  },
  {
    "name": 12438,
    "hr": 594,
    "bf": "Pi  For",
    "pname": "",
    "ra": 2.020759,
    "dec": -30.00183,
    "dist": 90.2527,
    "vmag": 5.34
  },
  {
    "name": 12446,
    "hr": 595,
    "bf": "113Alp Psc",
    "pname": "",
    "ra": 2.034117,
    "dec": 2.763759,
    "dist": 46.1681,
    "vmag": 3.82
  },
  {
    "name": 12471,
    "hr": 599,
    "bf": "3Eps Tri",
    "pname": "",
    "ra": 2.049433,
    "dec": 33.284135,
    "dist": 120.048,
    "vmag": 5.5
  },
  {
    "name": 12524,
    "hr": 602,
    "bf": "Chi Phe",
    "pname": "",
    "ra": 2.02844,
    "dec": -44.713509,
    "dist": 115.0748,
    "vmag": 5.15
  },
  {
    "name": 12533,
    "hr": 603,
    "bf": "57Gam1And",
    "pname": "Almaak",
    "ra": 2.064984,
    "dec": 42.329725,
    "dist": 120.4819,
    "vmag": 2.1
  },
  {
    "name": 12558,
    "hr": 605,
    "bf": "10    Ari",
    "pname": "",
    "ra": 2.060927,
    "dec": 25.935471,
    "dist": 48.7092,
    "vmag": 5.64
  },
  {
    "name": 12573,
    "hr": 607,
    "bf": "60    Cet",
    "pname": "",
    "ra": 2.053236,
    "dec": 0.128507,
    "dist": 86.1326,
    "vmag": 5.42
  },
  {
    "name": 12641,
    "hr": 610,
    "bf": "61    Cet",
    "pname": "",
    "ra": 2.063381,
    "dec": -0.340251,
    "dist": 110.9878,
    "vmag": 5.96
  },
  {
    "name": 12767,
    "hr": 612,
    "bf": "Nu  For",
    "pname": "",
    "ra": 2.074844,
    "dec": -29.296819,
    "dist": 113.7656,
    "vmag": 4.68
  },
  {
    "name": 12869,
    "hr": 613,
    "bf": "12Kap Ari",
    "pname": "",
    "ra": 2.109423,
    "dec": 22.648317,
    "dist": 55.6793,
    "vmag": 5.03
  },
  {
    "name": 12885,
    "hr": 615,
    "bf": "11    Ari",
    "pname": "",
    "ra": 2.113676,
    "dec": 25.704553,
    "dist": 268.8172,
    "vmag": 6.01
  },
  {
    "name": 12929,
    "hr": 617,
    "bf": "13Alp Ari",
    "pname": "Hamal",
    "ra": 2.119555,
    "dec": 23.462423,
    "dist": 20.1776,
    "vmag": 2.01
  },
  {
    "name": 13041,
    "hr": 620,
    "bf": "58    And",
    "pname": "",
    "ra": 2.141454,
    "dec": 37.859077,
    "dist": 58.6854,
    "vmag": 4.78
  },
  {
    "name": 13161,
    "hr": 622,
    "bf": "4Bet Tri",
    "pname": "",
    "ra": 2.159058,
    "dec": 34.987297,
    "dist": 38.8954,
    "vmag": 3
  },
  {
    "name": 13174,
    "hr": 623,
    "bf": "14    Ari",
    "pname": "",
    "ra": 2.157036,
    "dec": 25.939892,
    "dist": 88.4956,
    "vmag": 4.98
  },
  {
    "name": 13267,
    "hr": 627,
    "bf": "5    Per",
    "pname": "",
    "ra": 2.191443,
    "dec": 57.645543,
    "dist": 100000,
    "vmag": 6.38
  },
  {
    "name": 13294,
    "hr": 628,
    "bf": "59    And",
    "pname": "",
    "ra": 2.181342,
    "dec": 39.039526,
    "dist": 139.6648,
    "vmag": 6.09
  },
  {
    "name": 13295,
    "hr": 629,
    "bf": "59    And",
    "pname": "",
    "ra": 2.181575,
    "dec": 39.043286,
    "dist": 100000,
    "vmag": 6.82
  },
  {
    "name": 13325,
    "hr": 631,
    "bf": "15    Ari",
    "pname": "",
    "ra": 2.177109,
    "dec": 19.500338,
    "dist": 171.2329,
    "vmag": 5.68
  },
  {
    "name": 13363,
    "hr": 633,
    "bf": "16    Ari",
    "pname": "",
    "ra": 2.186682,
    "dec": 25.936938,
    "dist": 235.2941,
    "vmag": 6.01
  },
  {
    "name": 13372,
    "hr": 634,
    "bf": "5    Tri",
    "pname": "",
    "ra": 2.190283,
    "dec": 31.526398,
    "dist": 108.2251,
    "vmag": 6.24
  },
  {
    "name": 13421,
    "hr": 635,
    "bf": "64    Cet",
    "pname": "",
    "ra": 2.189189,
    "dec": 8.569805,
    "dist": 40.7166,
    "vmag": 5.64
  },
  {
    "name": 13468,
    "hr": 639,
    "bf": "63    Cet",
    "pname": "",
    "ra": 2.193287,
    "dec": -1.825429,
    "dist": 119.0476,
    "vmag": 5.94
  },
  {
    "name": 13474,
    "hr": 640,
    "bf": "55    Cas",
    "pname": "",
    "ra": 2.241417,
    "dec": 66.524428,
    "dist": 218.8184,
    "vmag": 6.05
  },
  {
    "name": 13480,
    "hr": 642,
    "bf": "6    Tri",
    "pname": "",
    "ra": 2.206191,
    "dec": 30.303067,
    "dist": 89.1266,
    "vmag": 4.94
  },
  {
    "name": 13520,
    "hr": 643,
    "bf": "60    And",
    "pname": "",
    "ra": 2.220369,
    "dec": 44.231652,
    "dist": 162.6016,
    "vmag": 4.84
  },
  {
    "name": 13555,
    "hr": 646,
    "bf": "17Eta Ari",
    "pname": "",
    "ra": 2.213355,
    "dec": 21.210993,
    "dist": 28.8684,
    "vmag": 5.23
  },
  {
    "name": 13596,
    "hr": 648,
    "bf": "19    Ari",
    "pname": "",
    "ra": 2.217584,
    "dec": 15.27986,
    "dist": 146.8429,
    "vmag": 5.72
  },
  {
    "name": 13611,
    "hr": 649,
    "bf": "65Xi 1Cet",
    "pname": "",
    "ra": 2.216665,
    "dec": 8.846717,
    "dist": 117.5088,
    "vmag": 4.36
  },
  {
    "name": 13612,
    "hr": 650,
    "bf": "66    Cet",
    "pname": "",
    "ra": 2.213206,
    "dec": -2.393637,
    "dist": 39.6983,
    "vmag": 5.65
  },
  {
    "name": 13709,
    "hr": 652,
    "bf": "Mu  For",
    "pname": "",
    "ra": 2.21513,
    "dec": -30.723825,
    "dist": 98.2318,
    "vmag": 5.27
  },
  {
    "name": 13869,
    "hr": 655,
    "bf": "7    Tri",
    "pname": "",
    "ra": 2.265635,
    "dec": 33.358895,
    "dist": 86.0585,
    "vmag": 5.25
  },
  {
    "name": 13871,
    "hr": 656,
    "bf": "20    Ari",
    "pname": "",
    "ra": 2.262789,
    "dec": 25.782937,
    "dist": 42.1053,
    "vmag": 5.79
  },
  {
    "name": 13872,
    "hr": 657,
    "bf": "21    Ari",
    "pname": "",
    "ra": 2.261884,
    "dec": 25.043043,
    "dist": 51.0725,
    "vmag": 5.57
  },
  {
    "name": 13974,
    "hr": 660,
    "bf": "8Del Tri",
    "pname": "",
    "ra": 2.284191,
    "dec": 34.224231,
    "dist": 10.784,
    "vmag": 4.84
  },
  {
    "name": 13982,
    "hr": 661,
    "bf": "8    Per",
    "pname": "",
    "ra": 2.29996,
    "dec": 57.89982,
    "dist": 125.9446,
    "vmag": 5.75
  },
  {
    "name": 13994,
    "hr": 662,
    "bf": "7    Per",
    "pname": "",
    "ra": 2.301275,
    "dec": 57.516321,
    "dist": 251.2563,
    "vmag": 5.99
  },
  {
    "name": 14055,
    "hr": 664,
    "bf": "9Gam Tri",
    "pname": "",
    "ra": 2.288573,
    "dec": 33.847194,
    "dist": 34.4353,
    "vmag": 4.03
  },
  {
    "name": 14129,
    "hr": 666,
    "bf": "67    Cet",
    "pname": "",
    "ra": 2.283068,
    "dec": -6.422116,
    "dist": 102.0408,
    "vmag": 5.51
  },
  {
    "name": 14141,
    "hr": 667,
    "bf": "Pi 1Hyi",
    "pname": "",
    "ra": 2.237366,
    "dec": -67.841441,
    "dist": 238.0952,
    "vmag": 5.57
  },
  {
    "name": 14191,
    "hr": 669,
    "bf": "22The Ari",
    "pname": "",
    "ra": 2.302094,
    "dec": 19.901164,
    "dist": 137.1742,
    "vmag": 5.58
  },
  {
    "name": 14212,
    "hr": 670,
    "bf": "62    And",
    "pname": "",
    "ra": 2.321337,
    "dec": 47.379973,
    "dist": 75.358,
    "vmag": 5.31
  },
  {
    "name": 14228,
    "hr": 674,
    "bf": "Phi Eri",
    "pname": "",
    "ra": 2.275154,
    "dec": -51.512165,
    "dist": 47.1254,
    "vmag": 3.56
  },
  {
    "name": 14252,
    "hr": 675,
    "bf": "10    Tri",
    "pname": "",
    "ra": 2.315831,
    "dec": 28.642674,
    "dist": 115.4734,
    "vmag": 5.29
  },
  {
    "name": 14287,
    "hr": 678,
    "bf": "Pi 2Hyi",
    "pname": "",
    "ra": 2.25794,
    "dec": -67.746366,
    "dist": 149.7006,
    "vmag": 5.67
  },
  {
    "name": 14386,
    "hr": 681,
    "bf": "68Omi Cet",
    "pname": "Mira",
    "ra": 2.322442,
    "dec": -2.977643,
    "dist": 91.659,
    "vmag": 6.47
  },
  {
    "name": 14392,
    "hr": 682,
    "bf": "63    And",
    "pname": "",
    "ra": 2.349499,
    "dec": 50.151466,
    "dist": 120.3369,
    "vmag": 5.57
  },
  {
    "name": 14489,
    "hr": 685,
    "bf": "9    Per",
    "pname": "",
    "ra": 2.372621,
    "dec": 55.845653,
    "dist": 100000,
    "vmag": 5.16
  },
  {
    "name": 14652,
    "hr": 689,
    "bf": "69    Cet",
    "pname": "",
    "ra": 2.36573,
    "dec": 0.395675,
    "dist": 330.033,
    "vmag": 5.29
  },
  {
    "name": 14690,
    "hr": 691,
    "bf": "70    Cet",
    "pname": "",
    "ra": 2.37011,
    "dec": -0.884852,
    "dist": 80.1282,
    "vmag": 5.42
  },
  {
    "name": 14770,
    "hr": 694,
    "bf": "64    And",
    "pname": "",
    "ra": 2.406919,
    "dec": 50.006546,
    "dist": 122.399,
    "vmag": 5.19
  },
  {
    "name": 14802,
    "hr": 695,
    "bf": "Kap For",
    "pname": "",
    "ra": 2.375704,
    "dec": -23.816326,
    "dist": 21.9635,
    "vmag": 5.19
  },
  {
    "name": 14818,
    "hr": 696,
    "bf": "10    Per",
    "pname": "",
    "ra": 2.421119,
    "dec": 56.609823,
    "dist": 100000,
    "vmag": 6.25
  },
  {
    "name": 14872,
    "hr": 699,
    "bf": "65    And",
    "pname": "",
    "ra": 2.42706,
    "dec": 50.278631,
    "dist": 113.2503,
    "vmag": 4.73
  },
  {
    "name": 14951,
    "hr": 702,
    "bf": "24Xi  Ari",
    "pname": "",
    "ra": 2.413627,
    "dec": 10.610565,
    "dist": 267.3797,
    "vmag": 5.48
  },
  {
    "name": 15004,
    "hr": 704,
    "bf": "71    Cet",
    "pname": "",
    "ra": 2.416219,
    "dec": -2.780031,
    "dist": 273.9726,
    "vmag": 6.34
  },
  {
    "name": 15008,
    "hr": 705,
    "bf": "Del Hyi",
    "pname": "",
    "ra": 2.362498,
    "dec": -68.659418,
    "dist": 42.8266,
    "vmag": 4.08
  },
  {
    "name": 15089,
    "hr": 707,
    "bf": "Iot Cas",
    "pname": "",
    "ra": 2.484437,
    "dec": 67.402474,
    "dist": 40.7332,
    "vmag": 4.46
  },
  {
    "name": 15130,
    "hr": 708,
    "bf": "72Rho Cet",
    "pname": "",
    "ra": 2.432501,
    "dec": -12.29048,
    "dist": 139.8601,
    "vmag": 4.88
  },
  {
    "name": 15138,
    "hr": 709,
    "bf": "66    And",
    "pname": "",
    "ra": 2.46438,
    "dec": 50.569974,
    "dist": 56.5291,
    "vmag": 6.16
  },
  {
    "name": 15176,
    "hr": 712,
    "bf": "11    Tri",
    "pname": "",
    "ra": 2.457715,
    "dec": 31.80128,
    "dist": 85.2515,
    "vmag": 5.55
  },
  {
    "name": 15233,
    "hr": 714,
    "bf": "Lam Hor",
    "pname": "",
    "ra": 2.414987,
    "dec": -60.311947,
    "dist": 49.3827,
    "vmag": 5.36
  },
  {
    "name": 15248,
    "hr": 715,
    "bf": "Kap Hyi",
    "pname": "",
    "ra": 2.38123,
    "dec": -73.645792,
    "dist": 97.2763,
    "vmag": 5.99
  },
  {
    "name": 15257,
    "hr": 717,
    "bf": "12    Tri",
    "pname": "",
    "ra": 2.469439,
    "dec": 29.66933,
    "dist": 49.8256,
    "vmag": 5.29
  },
  {
    "name": 15318,
    "hr": 718,
    "bf": "73Xi 2Cet",
    "pname": "",
    "ra": 2.469317,
    "dec": 8.460054,
    "dist": 59.2066,
    "vmag": 4.3
  },
  {
    "name": 15335,
    "hr": 720,
    "bf": "13    Tri",
    "pname": "",
    "ra": 2.480139,
    "dec": 29.93176,
    "dist": 31.407,
    "vmag": 5.89
  },
  {
    "name": 15371,
    "hr": 721,
    "bf": "Kap Eri",
    "pname": "",
    "ra": 2.449755,
    "dec": -47.70384,
    "dist": 155.7632,
    "vmag": 4.24
  },
  {
    "name": 15427,
    "hr": 724,
    "bf": "Phi For",
    "pname": "",
    "ra": 2.467139,
    "dec": -33.811039,
    "dist": 46.5983,
    "vmag": 5.13
  },
  {
    "name": 15550,
    "hr": 729,
    "bf": "26    Ari",
    "pname": "",
    "ra": 2.510671,
    "dec": 19.855301,
    "dist": 66.0502,
    "vmag": 6.14
  },
  {
    "name": 15596,
    "hr": 731,
    "bf": "27    Ari",
    "pname": "",
    "ra": 2.51511,
    "dec": 17.703856,
    "dist": 88.4956,
    "vmag": 6.21
  },
  {
    "name": 15656,
    "hr": 736,
    "bf": "14    Tri",
    "pname": "",
    "ra": 2.535045,
    "dec": 36.147271,
    "dist": 132.8021,
    "vmag": 5.15
  },
  {
    "name": 15779,
    "hr": 739,
    "bf": "75    Cet",
    "pname": "",
    "ra": 2.53595,
    "dec": -1.034896,
    "dist": 81.4332,
    "vmag": 5.36
  },
  {
    "name": 15798,
    "hr": 740,
    "bf": "76Sig Cet",
    "pname": "",
    "ra": 2.534786,
    "dec": -15.244677,
    "dist": 26.6951,
    "vmag": 4.74
  },
  {
    "name": 15814,
    "hr": 741,
    "bf": "29    Ari",
    "pname": "",
    "ra": 2.548372,
    "dec": 15.034554,
    "dist": 29.9401,
    "vmag": 6
  },
  {
    "name": 15975,
    "hr": 744,
    "bf": "Lam1For",
    "pname": "",
    "ra": 2.551952,
    "dec": -34.649967,
    "dist": 111.8568,
    "vmag": 5.91
  },
  {
    "name": 16046,
    "hr": 749,
    "bf": "Ome For",
    "pname": "",
    "ra": 2.564085,
    "dec": -28.232343,
    "dist": 148.368,
    "vmag": 4.96
  },
  {
    "name": 16058,
    "hr": 750,
    "bf": "15    Tri",
    "pname": "",
    "ra": 2.596336,
    "dec": 34.687558,
    "dist": 193.7984,
    "vmag": 5.38
  },
  {
    "name": 16074,
    "hr": 752,
    "bf": "77    Cet",
    "pname": "",
    "ra": 2.578507,
    "dec": -7.859445,
    "dist": 140.647,
    "vmag": 5.74
  },
  {
    "name": 16161,
    "hr": 754,
    "bf": "78Nu  Cet",
    "pname": "",
    "ra": 2.597909,
    "dec": 5.593246,
    "dist": 104.2753,
    "vmag": 4.87
  },
  {
    "name": 16212,
    "hr": 759,
    "bf": "80    Cet",
    "pname": "",
    "ra": 2.600013,
    "dec": -7.831597,
    "dist": 142.6534,
    "vmag": 5.53
  },
  {
    "name": 16234,
    "hr": 763,
    "bf": "31    Ari",
    "pname": "",
    "ra": 2.610531,
    "dec": 12.447639,
    "dist": 34.7343,
    "vmag": 5.64
  },
  {
    "name": 16232,
    "hr": 764,
    "bf": "30    Ari",
    "pname": "",
    "ra": 2.616037,
    "dec": 24.648063,
    "dist": 40.783,
    "vmag": 7.1
  },
  {
    "name": 16246,
    "hr": 765,
    "bf": "30    Ari",
    "pname": "",
    "ra": 2.61681,
    "dec": 24.647222,
    "dist": 41.7537,
    "vmag": 6.48
  },
  {
    "name": 16307,
    "hr": 767,
    "bf": "Iot1For",
    "pname": "",
    "ra": 2.602574,
    "dec": -30.044978,
    "dist": 178.5714,
    "vmag": 5.74
  },
  {
    "name": 16400,
    "hr": 771,
    "bf": "81    Cet",
    "pname": "",
    "ra": 2.628278,
    "dec": -3.396175,
    "dist": 92.5069,
    "vmag": 5.65
  },
  {
    "name": 16417,
    "hr": 772,
    "bf": "Lam2For",
    "pname": "",
    "ra": 2.616281,
    "dec": -34.577977,
    "dist": 25.7798,
    "vmag": 5.78
  },
  {
    "name": 16432,
    "hr": 773,
    "bf": "32Nu  Ari",
    "pname": "",
    "ra": 2.646943,
    "dec": 21.961408,
    "dist": 103.3058,
    "vmag": 5.45
  },
  {
    "name": 16522,
    "hr": 776,
    "bf": "Mu  Hyi",
    "pname": "",
    "ra": 2.527834,
    "dec": -79.109382,
    "dist": 87.0322,
    "vmag": 5.27
  },
  {
    "name": 16538,
    "hr": 777,
    "bf": "Iot2For",
    "pname": "",
    "ra": 2.638515,
    "dec": -30.194062,
    "dist": 33.9443,
    "vmag": 5.84
  },
  {
    "name": 16555,
    "hr": 778,
    "bf": "Eta Hor",
    "pname": "",
    "ra": 2.623425,
    "dec": -52.543086,
    "dist": 45.5581,
    "vmag": 5.3
  },
  {
    "name": 16582,
    "hr": 779,
    "bf": "82Del Cet",
    "pname": "",
    "ra": 2.658044,
    "dec": 0.328511,
    "dist": 199.2032,
    "vmag": 4.08
  },
  {
    "name": 16620,
    "hr": 781,
    "bf": "83Eps Cet",
    "pname": "",
    "ra": 2.659398,
    "dec": -11.872156,
    "dist": 21.4823,
    "vmag": 4.83
  },
  {
    "name": 16628,
    "hr": 782,
    "bf": "33    Ari",
    "pname": "",
    "ra": 2.678075,
    "dec": 27.060943,
    "dist": 70.9723,
    "vmag": 5.3
  },
  {
    "name": 16727,
    "hr": 785,
    "bf": "11    Per",
    "pname": "",
    "ra": 2.717451,
    "dec": 55.106019,
    "dist": 132.2751,
    "vmag": 5.76
  },
  {
    "name": 16739,
    "hr": 788,
    "bf": "12    Per",
    "pname": "",
    "ra": 2.704144,
    "dec": 40.193944,
    "dist": 24.1896,
    "vmag": 4.91
  },
  {
    "name": 16765,
    "hr": 790,
    "bf": "84    Cet",
    "pname": "",
    "ra": 2.687222,
    "dec": -0.695653,
    "dist": 22.5887,
    "vmag": 5.72
  },
  {
    "name": 16811,
    "hr": 793,
    "bf": "34Mu  Ari",
    "pname": "",
    "ra": 2.706094,
    "dec": 20.011465,
    "dist": 116.8224,
    "vmag": 5.74
  },
  {
    "name": 16815,
    "hr": 794,
    "bf": "Iot Eri",
    "pname": "",
    "ra": 2.677781,
    "dec": -39.855375,
    "dist": 46.1894,
    "vmag": 4.11
  },
  {
    "name": 16895,
    "hr": 799,
    "bf": "13The Per",
    "pname": "",
    "ra": 2.736634,
    "dec": 49.228448,
    "dist": 11.1272,
    "vmag": 4.1
  },
  {
    "name": 16901,
    "hr": 800,
    "bf": "14    Per",
    "pname": "",
    "ra": 2.734766,
    "dec": 44.29704,
    "dist": 301.2048,
    "vmag": 5.43
  },
  {
    "name": 16908,
    "hr": 801,
    "bf": "35    Ari",
    "pname": "",
    "ra": 2.724198,
    "dec": 27.707146,
    "dist": 105.1525,
    "vmag": 4.65
  },
  {
    "name": 16920,
    "hr": 802,
    "bf": "Zet Hor",
    "pname": "",
    "ra": 2.677666,
    "dec": -54.549911,
    "dist": 49.0918,
    "vmag": 5.21
  },
  {
    "name": 16970,
    "hr": 804,
    "bf": "86Gam Cet",
    "pname": "",
    "ra": 2.721678,
    "dec": 3.235818,
    "dist": 24.4081,
    "vmag": 3.47
  },
  {
    "name": 16978,
    "hr": 806,
    "bf": "Eps Hyi",
    "pname": "",
    "ra": 2.659799,
    "dec": -68.266946,
    "dist": 46.5549,
    "vmag": 4.12
  },
  {
    "name": 17017,
    "hr": 808,
    "bf": "36    Ari",
    "pname": "",
    "ra": 2.738642,
    "dec": 17.763928,
    "dist": 103.5197,
    "vmag": 6.4
  },
  {
    "name": 17036,
    "hr": 809,
    "bf": "37Omi Ari",
    "pname": "",
    "ra": 2.742493,
    "dec": 15.311862,
    "dist": 182.1494,
    "vmag": 5.78
  },
  {
    "name": 17051,
    "hr": 810,
    "bf": "Iot Hor",
    "pname": "",
    "ra": 2.709265,
    "dec": -50.800294,
    "dist": 17.1674,
    "vmag": 5.4
  },
  {
    "name": 17081,
    "hr": 811,
    "bf": "89Pi  Cet",
    "pname": "",
    "ra": 2.735375,
    "dec": -13.858696,
    "dist": 120.4819,
    "vmag": 4.24
  },
  {
    "name": 17093,
    "hr": 812,
    "bf": "38    Ari",
    "pname": "",
    "ra": 2.749328,
    "dec": 12.445761,
    "dist": 36.3372,
    "vmag": 5.17
  },
  {
    "name": 17094,
    "hr": 813,
    "bf": "87Mu  Cet",
    "pname": "",
    "ra": 2.749039,
    "dec": 10.114146,
    "dist": 25.7732,
    "vmag": 4.27
  },
  {
    "name": 17206,
    "hr": 818,
    "bf": "1Tau1Eri",
    "pname": "",
    "ra": 2.751715,
    "dec": -18.572563,
    "dist": 14.2207,
    "vmag": 4.47
  },
  {
    "name": 17361,
    "hr": 824,
    "bf": "39    Ari",
    "pname": "",
    "ra": 2.79848,
    "dec": 29.247118,
    "dist": 52.6039,
    "vmag": 4.52
  },
  {
    "name": 17459,
    "hr": 828,
    "bf": "40    Ari",
    "pname": "",
    "ra": 2.808913,
    "dec": 18.28379,
    "dist": 141.6431,
    "vmag": 5.83
  },
  {
    "name": 17504,
    "hr": 833,
    "bf": "Gam Hor",
    "pname": "",
    "ra": 2.757629,
    "dec": -63.704553,
    "dist": 55.991,
    "vmag": 5.73
  },
  {
    "name": 17506,
    "hr": 834,
    "bf": "15Eta Per",
    "pname": "η-Per",
    "ra": 2.844945,
    "dec": 55.895496,
    "dist": 269.5418,
    "vmag": 3.77
  },
  {
    "name": 17528,
    "hr": 835,
    "bf": "Eta1For",
    "pname": "",
    "ra": 2.79271,
    "dec": -35.550621,
    "dist": 152.6718,
    "vmag": 6.51
  },
  {
    "name": 17543,
    "hr": 836,
    "bf": "42Pi  Ari",
    "pname": "",
    "ra": 2.821544,
    "dec": 17.464309,
    "dist": 239.2344,
    "vmag": 5.26
  },
  {
    "name": 17566,
    "hr": 837,
    "bf": "Zet Hyi",
    "pname": "",
    "ra": 2.759048,
    "dec": -67.616617,
    "dist": 87.184,
    "vmag": 4.83
  },
  {
    "name": 17573,
    "hr": 838,
    "bf": "41    Ari",
    "pname": "c-Ari",
    "ra": 2.833063,
    "dec": 27.260507,
    "dist": 50.7872,
    "vmag": 3.61
  },
  {
    "name": 17584,
    "hr": 840,
    "bf": "16    Per",
    "pname": "16-Per",
    "ra": 2.843063,
    "dec": 38.318644,
    "dist": 37.0233,
    "vmag": 4.22
  },
  {
    "name": 17652,
    "hr": 841,
    "bf": "Bet For",
    "pname": "",
    "ra": 2.818169,
    "dec": -32.405898,
    "dist": 52.9381,
    "vmag": 4.45
  },
  {
    "name": 17709,
    "hr": 843,
    "bf": "17    Per",
    "pname": "",
    "ra": 2.858566,
    "dec": 35.059741,
    "dist": 143.2665,
    "vmag": 4.56
  },
  {
    "name": 17713,
    "hr": 844,
    "bf": "Gam1For",
    "pname": "",
    "ra": 2.830824,
    "dec": -24.560311,
    "dist": 133.6898,
    "vmag": 6.14
  },
  {
    "name": 17729,
    "hr": 845,
    "bf": "Gam2For",
    "pname": "",
    "ra": 2.831716,
    "dec": -27.941981,
    "dist": 140.647,
    "vmag": 5.39
  },
  {
    "name": 17769,
    "hr": 847,
    "bf": "43Sig Ari",
    "pname": "",
    "ra": 2.858218,
    "dec": 15.082071,
    "dist": 151.5152,
    "vmag": 5.52
  },
  {
    "name": 17793,
    "hr": 848,
    "bf": "Eta2For",
    "pname": "",
    "ra": 2.837438,
    "dec": -35.843636,
    "dist": 137.931,
    "vmag": 5.92
  },
  {
    "name": 17824,
    "hr": 850,
    "bf": "2Tau2Eri",
    "pname": "",
    "ra": 2.850645,
    "dec": -21.004019,
    "dist": 57.3066,
    "vmag": 4.76
  },
  {
    "name": 17829,
    "hr": 851,
    "bf": "Eta3For",
    "pname": "",
    "ra": 2.844557,
    "dec": -35.675849,
    "dist": 140.8451,
    "vmag": 5.48
  },
  {
    "name": 17848,
    "hr": 852,
    "bf": "Nu  Hor",
    "pname": "",
    "ra": 2.817062,
    "dec": -62.806521,
    "dist": 50.4541,
    "vmag": 5.25
  },
  {
    "name": 17878,
    "hr": 854,
    "bf": "18Tau Per",
    "pname": "",
    "ra": 2.904295,
    "dec": 52.762479,
    "dist": 77.9423,
    "vmag": 3.93
  },
  {
    "name": 17904,
    "hr": 855,
    "bf": "20    Per",
    "pname": "",
    "ra": 2.895168,
    "dec": 38.337488,
    "dist": 70.6714,
    "vmag": 5.34
  },
  {
    "name": 18149,
    "hr": 863,
    "bf": "Psi For",
    "pname": "",
    "ra": 2.892885,
    "dec": -38.437004,
    "dist": 58.5138,
    "vmag": 5.93
  },
  {
    "name": 18191,
    "hr": 867,
    "bf": "45Rho2Ari",
    "pname": "",
    "ra": 2.930138,
    "dec": 18.33164,
    "dist": 107.7586,
    "vmag": 5.76
  },
  {
    "name": 18256,
    "hr": 869,
    "bf": "46Rho3Ari",
    "pname": "",
    "ra": 2.940596,
    "dec": 18.023119,
    "dist": 35.3482,
    "vmag": 5.58
  },
  {
    "name": 18293,
    "hr": 872,
    "bf": "Nu  Hyi",
    "pname": "",
    "ra": 2.841255,
    "dec": -75.066947,
    "dist": 104.0583,
    "vmag": 4.76
  },
  {
    "name": 18296,
    "hr": 873,
    "bf": "21    Per",
    "pname": "",
    "ra": 2.954801,
    "dec": 31.934219,
    "dist": 98.0392,
    "vmag": 5.1
  },
  {
    "name": 18322,
    "hr": 874,
    "bf": "3Eta Eri",
    "pname": "",
    "ra": 2.940458,
    "dec": -8.898144,
    "dist": 41.8585,
    "vmag": 3.89
  },
  {
    "name": 18404,
    "hr": 878,
    "bf": "47    Ari",
    "pname": "",
    "ra": 2.968114,
    "dec": 20.668733,
    "dist": 33.1675,
    "vmag": 5.8
  },
  {
    "name": 18411,
    "hr": 879,
    "bf": "22Pi  Per",
    "pname": "",
    "ra": 2.979352,
    "dec": 39.662728,
    "dist": 94.9668,
    "vmag": 4.68
  },
  {
    "name": 18449,
    "hr": 882,
    "bf": "24    Per",
    "pname": "",
    "ra": 2.984356,
    "dec": 35.183128,
    "dist": 112.8668,
    "vmag": 4.94
  },
  {
    "name": 18454,
    "hr": 883,
    "bf": "4    Eri",
    "pname": "",
    "ra": 2.9566,
    "dec": -23.862164,
    "dist": 47.6872,
    "vmag": 5.44
  },
  {
    "name": 18519,
    "hr": 887,
    "bf": "48Eps Ari",
    "pname": "",
    "ra": 2.986868,
    "dec": 21.340429,
    "dist": 101.9368,
    "vmag": 4.63
  },
  {
    "name": 18535,
    "hr": 889,
    "bf": "6    Eri",
    "pname": "",
    "ra": 2.968258,
    "dec": -23.606012,
    "dist": 203.252,
    "vmag": 5.82
  },
  {
    "name": 18604,
    "hr": 896,
    "bf": "91Lam Cet",
    "pname": "",
    "ra": 2.99525,
    "dec": 8.907365,
    "dist": 176.6784,
    "vmag": 4.71
  },
  {
    "name": 18622,
    "hr": 897,
    "bf": "The1Eri",
    "pname": "Acamar",
    "ra": 2.971023,
    "dec": -40.304672,
    "dist": 49.4315,
    "vmag": 2.88
  },
  {
    "name": 18633,
    "hr": 899,
    "bf": "5    Eri",
    "pname": "",
    "ra": 2.994767,
    "dec": -2.464952,
    "dist": 111.1111,
    "vmag": 5.56
  },
  {
    "name": 18692,
    "hr": 901,
    "bf": "Zet For",
    "pname": "",
    "ra": 2.993381,
    "dec": -25.274133,
    "dist": 32.6158,
    "vmag": 5.69
  },
  {
    "name": 18760,
    "hr": 904,
    "bf": "7    Eri",
    "pname": "",
    "ra": 3.014133,
    "dec": -2.878618,
    "dist": 255.102,
    "vmag": 6.11
  },
  {
    "name": 18769,
    "hr": 905,
    "bf": "49    Ari",
    "pname": "",
    "ra": 3.031706,
    "dec": 26.462354,
    "dist": 64.3501,
    "vmag": 5.91
  },
  {
    "name": 18784,
    "hr": 907,
    "bf": "8Rho1Eri",
    "pname": "",
    "ra": 3.019451,
    "dec": -7.663012,
    "dist": 99.3049,
    "vmag": 5.75
  },
  {
    "name": 18866,
    "hr": 909,
    "bf": "Bet Hor",
    "pname": "",
    "ra": 2.979939,
    "dec": -64.071284,
    "dist": 90.3342,
    "vmag": 4.98
  },
  {
    "name": 18883,
    "hr": 910,
    "bf": "93    Cet",
    "pname": "",
    "ra": 3.039588,
    "dec": 4.352884,
    "dist": 168.6341,
    "vmag": 5.62
  },
  {
    "name": 18884,
    "hr": 911,
    "bf": "92Alp Cet",
    "pname": "Menkar",
    "ra": 3.037992,
    "dec": 4.089734,
    "dist": 76.3942,
    "vmag": 2.54
  },
  {
    "name": 18907,
    "hr": 914,
    "bf": "Eps For",
    "pname": "",
    "ra": 3.027115,
    "dec": -28.091554,
    "dist": 32.1958,
    "vmag": 5.88
  },
  {
    "name": 18925,
    "hr": 915,
    "bf": "23Gam Per",
    "pname": "γ-Per",
    "ra": 3.079942,
    "dec": 53.50644,
    "dist": 74.5712,
    "vmag": 2.91
  },
  {
    "name": 18953,
    "hr": 917,
    "bf": "9Rho2Eri",
    "pname": "",
    "ra": 3.045076,
    "dec": -7.685472,
    "dist": 81.1688,
    "vmag": 5.32
  },
  {
    "name": 18978,
    "hr": 919,
    "bf": "11Tau3Eri",
    "pname": "",
    "ra": 3.039863,
    "dec": -23.624472,
    "dist": 27.1739,
    "vmag": 4.08
  },
  {
    "name": 19058,
    "hr": 921,
    "bf": "25Rho Per",
    "pname": "ρ-Per",
    "ra": 3.08627,
    "dec": 38.840274,
    "dist": 94.3396,
    "vmag": 3.32
  },
  {
    "name": 19107,
    "hr": 925,
    "bf": "10Rho3Eri",
    "pname": "",
    "ra": 3.071254,
    "dec": -7.600857,
    "dist": 41.5628,
    "vmag": 5.26
  },
  {
    "name": 19134,
    "hr": 927,
    "bf": "52    Ari",
    "pname": "",
    "ra": 3.090747,
    "dec": 25.255174,
    "dist": 165.2893,
    "vmag": 5.45
  },
  {
    "name": 19319,
    "hr": 934,
    "bf": "Mu  Hor",
    "pname": "",
    "ra": 3.060239,
    "dec": -59.737775,
    "dist": 43.4028,
    "vmag": 5.12
  },
  {
    "name": 19356,
    "hr": 936,
    "bf": "26Bet Per",
    "pname": "Algol",
    "ra": 3.136148,
    "dec": 40.955648,
    "dist": 27.571,
    "vmag": 2.09
  },
  {
    "name": 19373,
    "hr": 937,
    "bf": "Iot Per",
    "pname": "",
    "ra": 3.151005,
    "dec": 49.613278,
    "dist": 10.5407,
    "vmag": 4.05
  },
  {
    "name": 19374,
    "hr": 938,
    "bf": "53    Ari",
    "pname": "",
    "ra": 3.123798,
    "dec": 17.879995,
    "dist": 255.102,
    "vmag": 6.13
  },
  {
    "name": 19400,
    "hr": 939,
    "bf": "The Hyi",
    "pname": "",
    "ra": 3.037615,
    "dec": -71.902457,
    "dist": 157.7287,
    "vmag": 5.51
  },
  {
    "name": 19460,
    "hr": 940,
    "bf": "54    Ari",
    "pname": "",
    "ra": 3.139197,
    "dec": 18.795053,
    "dist": 234.7418,
    "vmag": 6.24
  },
  {
    "name": 19476,
    "hr": 941,
    "bf": "27Kap Per",
    "pname": "κ-Per",
    "ra": 3.158258,
    "dec": 44.857544,
    "dist": 34.5662,
    "vmag": 3.79
  },
  {
    "name": 19548,
    "hr": 944,
    "bf": "55    Ari",
    "pname": "",
    "ra": 3.160206,
    "dec": 29.07708,
    "dist": 323.6246,
    "vmag": 5.74
  },
  {
    "name": 19656,
    "hr": 947,
    "bf": "28Ome Per",
    "pname": "",
    "ra": 3.188163,
    "dec": 39.611582,
    "dist": 88.3392,
    "vmag": 4.61
  },
  {
    "name": 19787,
    "hr": 951,
    "bf": "57Del Ari",
    "pname": "",
    "ra": 3.193822,
    "dec": 19.726677,
    "dist": 52.0291,
    "vmag": 4.35
  },
  {
    "name": 19832,
    "hr": 954,
    "bf": "56    Ari",
    "pname": "",
    "ra": 3.203957,
    "dec": 27.256968,
    "dist": 154.0832,
    "vmag": 5.78
  },
  {
    "name": 19994,
    "hr": 962,
    "bf": "94    Cet",
    "pname": "",
    "ra": 3.212899,
    "dec": -1.196101,
    "dist": 22.5785,
    "vmag": 5.07
  },
  {
    "name": 20010,
    "hr": 963,
    "bf": "Alp For",
    "pname": "",
    "ra": 3.201249,
    "dec": -28.987618,
    "dist": 14.2369,
    "vmag": 3.8
  },
  {
    "name": 20150,
    "hr": 972,
    "bf": "58Zet Ari",
    "pname": "",
    "ra": 3.24836,
    "dec": 21.044441,
    "dist": 80.3859,
    "vmag": 4.87
  },
  {
    "name": 20315,
    "hr": 982,
    "bf": "30    Per",
    "pname": "",
    "ra": 3.296485,
    "dec": 44.025024,
    "dist": 224.2152,
    "vmag": 5.49
  },
  {
    "name": 20320,
    "hr": 984,
    "bf": "13Zet Eri",
    "pname": "",
    "ra": 3.263896,
    "dec": -8.81973,
    "dist": 33.6474,
    "vmag": 4.8
  },
  {
    "name": 20365,
    "hr": 987,
    "bf": "29    Per",
    "pname": "",
    "ra": 3.310482,
    "dec": 50.222174,
    "dist": 195.3125,
    "vmag": 5.16
  },
  {
    "name": 20395,
    "hr": 988,
    "bf": "14    Eri",
    "pname": "",
    "ra": 3.276602,
    "dec": -9.154676,
    "dist": 34.1763,
    "vmag": 6.14
  },
  {
    "name": 20418,
    "hr": 989,
    "bf": "31    Per",
    "pname": "",
    "ra": 3.318787,
    "dec": 50.094966,
    "dist": 171.8213,
    "vmag": 5.05
  },
  {
    "name": 20559,
    "hr": 992,
    "bf": "95    Cet",
    "pname": "",
    "ra": 3.306229,
    "dec": -0.930288,
    "dist": 67.1592,
    "vmag": 5.62
  },
  {
    "name": 20610,
    "hr": 994,
    "bf": "15    Eri",
    "pname": "",
    "ra": 3.30614,
    "dec": -22.511118,
    "dist": 78.3085,
    "vmag": 4.86
  },
  {
    "name": 20618,
    "hr": 995,
    "bf": "59    Ari",
    "pname": "",
    "ra": 3.332166,
    "dec": 27.071134,
    "dist": 67.2495,
    "vmag": 5.91
  },
  {
    "name": 20630,
    "hr": 996,
    "bf": "96Kap1Cet",
    "pname": "",
    "ra": 3.322693,
    "dec": 3.370198,
    "dist": 9.1399,
    "vmag": 4.84
  },
  {
    "name": 20663,
    "hr": 1000,
    "bf": "60    Ari",
    "pname": "",
    "ra": 3.340437,
    "dec": 25.662739,
    "dist": 91.4077,
    "vmag": 6.14
  },
  {
    "name": 20677,
    "hr": 1002,
    "bf": "32    Per",
    "pname": "",
    "ra": 3.357381,
    "dec": 43.329651,
    "dist": 46.1681,
    "vmag": 4.96
  },
  {
    "name": 20720,
    "hr": 1003,
    "bf": "16Tau4Eri",
    "pname": "",
    "ra": 3.325278,
    "dec": -21.757864,
    "dist": 93.3707,
    "vmag": 3.7
  },
  {
    "name": 20756,
    "hr": 1005,
    "bf": "61Tau1Ari",
    "pname": "",
    "ra": 3.353784,
    "dec": 21.147086,
    "dist": 156.0062,
    "vmag": 5.27
  },
  {
    "name": 20766,
    "hr": 1006,
    "bf": "Zet1Ret",
    "pname": "",
    "ra": 3.295903,
    "dec": -62.575322,
    "dist": 12.0077,
    "vmag": 5.53
  },
  {
    "name": 20791,
    "hr": 1007,
    "bf": "97Kap2Cet",
    "pname": "",
    "ra": 3.35189,
    "dec": 3.67562,
    "dist": 98.912,
    "vmag": 5.7
  },
  {
    "name": 20807,
    "hr": 1010,
    "bf": "Zet2Ret",
    "pname": "",
    "ra": 3.303309,
    "dec": -62.506363,
    "dist": 12.0322,
    "vmag": 5.24
  },
  {
    "name": 20825,
    "hr": 1012,
    "bf": "62    Ari",
    "pname": "",
    "ra": 3.36997,
    "dec": 27.607553,
    "dist": 271.0027,
    "vmag": 5.55
  },
  {
    "name": 20893,
    "hr": 1015,
    "bf": "63Tau2Ari",
    "pname": "",
    "ra": 3.379234,
    "dec": 20.742069,
    "dist": 97.371,
    "vmag": 5.1
  },
  {
    "name": 20902,
    "hr": 1017,
    "bf": "33Alp Per",
    "pname": "Mirphak",
    "ra": 3.405378,
    "dec": 49.86118,
    "dist": 155.2795,
    "vmag": 1.79
  },
  {
    "name": 21017,
    "hr": 1022,
    "bf": "64    Ari",
    "pname": "",
    "ra": 3.405132,
    "dec": 24.724063,
    "dist": 63.7755,
    "vmag": 5.5
  },
  {
    "name": 21024,
    "hr": 1025,
    "bf": "Iot Hyi",
    "pname": "",
    "ra": 3.265951,
    "dec": -77.388454,
    "dist": 29.7089,
    "vmag": 5.51
  },
  {
    "name": 21050,
    "hr": 1027,
    "bf": "65    Ari",
    "pname": "",
    "ra": 3.407255,
    "dec": 20.803489,
    "dist": 95.6938,
    "vmag": 6.07
  },
  {
    "name": 21120,
    "hr": 1030,
    "bf": "1Omi Tau",
    "pname": "",
    "ra": 3.413554,
    "dec": 9.02887,
    "dist": 89.2061,
    "vmag": 3.61
  },
  {
    "name": 21364,
    "hr": 1038,
    "bf": "2Xi  Tau",
    "pname": "",
    "ra": 3.45282,
    "dec": 9.73268,
    "dist": 64.1026,
    "vmag": 3.73
  },
  {
    "name": 21423,
    "hr": 1042,
    "bf": "Chi1For",
    "pname": "",
    "ra": 3.432177,
    "dec": -35.920885,
    "dist": 107.8749,
    "vmag": 6.39
  },
  {
    "name": 21428,
    "hr": 1044,
    "bf": "34    Per",
    "pname": "",
    "ra": 3.489456,
    "dec": 49.508948,
    "dist": 165.2893,
    "vmag": 4.67
  },
  {
    "name": 21467,
    "hr": 1048,
    "bf": "66    Ari",
    "pname": "",
    "ra": 3.474046,
    "dec": 22.804006,
    "dist": 64.433,
    "vmag": 6.03
  },
  {
    "name": 21552,
    "hr": 1052,
    "bf": "35Sig Per",
    "pname": "",
    "ra": 3.509579,
    "dec": 47.995216,
    "dist": 110.2536,
    "vmag": 4.36
  },
  {
    "name": 21574,
    "hr": 1054,
    "bf": "Chi2For",
    "pname": "",
    "ra": 3.459281,
    "dec": -35.681323,
    "dist": 139.47,
    "vmag": 5.71
  },
  {
    "name": 21635,
    "hr": 1058,
    "bf": "Chi3For",
    "pname": "",
    "ra": 3.469867,
    "dec": -35.853426,
    "dist": 114.2857,
    "vmag": 6.49
  },
  {
    "name": 21686,
    "hr": 1061,
    "bf": "4    Tau",
    "pname": "",
    "ra": 3.506797,
    "dec": 11.336442,
    "dist": 110.742,
    "vmag": 5.14
  },
  {
    "name": 21754,
    "hr": 1066,
    "bf": "5    Tau",
    "pname": "",
    "ra": 3.514549,
    "dec": 12.936678,
    "dist": 104.9318,
    "vmag": 4.14
  },
  {
    "name": 21770,
    "hr": 1069,
    "bf": "36    Per",
    "pname": "",
    "ra": 3.540631,
    "dec": 46.056862,
    "dist": 36.324,
    "vmag": 5.3
  },
  {
    "name": 21790,
    "hr": 1070,
    "bf": "17    Eri",
    "pname": "",
    "ra": 3.510294,
    "dec": -5.075145,
    "dist": 123.9157,
    "vmag": 4.74
  },
  {
    "name": 21933,
    "hr": 1079,
    "bf": "6    Tau",
    "pname": "",
    "ra": 3.543319,
    "dec": 9.373438,
    "dist": 107.4114,
    "vmag": 5.76
  },
  {
    "name": 22001,
    "hr": 1083,
    "bf": "Kap Ret",
    "pname": "",
    "ra": 3.489558,
    "dec": -62.937527,
    "dist": 21.6826,
    "vmag": 4.71
  },
  {
    "name": 22049,
    "hr": 1084,
    "bf": "18Eps Eri",
    "pname": "",
    "ra": 3.548848,
    "dec": -9.458262,
    "dist": 3.2161,
    "vmag": 3.72
  },
  {
    "name": 22091,
    "hr": 1086,
    "bf": "7    Tau",
    "pname": "",
    "ra": 3.574062,
    "dec": 24.464393,
    "dist": 131.5789,
    "vmag": 5.95
  },
  {
    "name": 22192,
    "hr": 1087,
    "bf": "37Psi Per",
    "pname": "",
    "ra": 3.608159,
    "dec": 48.192634,
    "dist": 178.8909,
    "vmag": 4.32
  },
  {
    "name": 22203,
    "hr": 1088,
    "bf": "19Tau5Eri",
    "pname": "",
    "ra": 3.563132,
    "dec": -21.632883,
    "dist": 89.9281,
    "vmag": 4.26
  },
  {
    "name": 22470,
    "hr": 1100,
    "bf": "20    Eri",
    "pname": "",
    "ra": 3.604837,
    "dec": -17.467064,
    "dist": 149.2537,
    "vmag": 5.24
  },
  {
    "name": 22484,
    "hr": 1101,
    "bf": "10    Tau",
    "pname": "",
    "ra": 3.614551,
    "dec": 0.401662,
    "dist": 13.9626,
    "vmag": 4.29
  },
  {
    "name": 22713,
    "hr": 1111,
    "bf": "21    Eri",
    "pname": "",
    "ra": 3.65031,
    "dec": -5.62621,
    "dist": 33.7041,
    "vmag": 5.97
  },
  {
    "name": 22789,
    "hr": 1114,
    "bf": "Tau For",
    "pname": "",
    "ra": 3.646575,
    "dec": -27.943054,
    "dist": 117.7856,
    "vmag": 6.01
  },
  {
    "name": 22796,
    "hr": 1115,
    "bf": "12    Tau",
    "pname": "",
    "ra": 3.664201,
    "dec": 3.056863,
    "dist": 114.0251,
    "vmag": 5.55
  },
  {
    "name": 22805,
    "hr": 1118,
    "bf": "11    Tau",
    "pname": "",
    "ra": 3.67953,
    "dec": 25.329492,
    "dist": 146.4129,
    "vmag": 6.11
  },
  {
    "name": 22920,
    "hr": 1121,
    "bf": "22    Eri",
    "pname": "",
    "ra": 3.677315,
    "dec": -5.210706,
    "dist": 152.207,
    "vmag": 5.53
  },
  {
    "name": 22928,
    "hr": 1122,
    "bf": "39Del Per",
    "pname": "δ-Per",
    "ra": 3.715416,
    "dec": 47.787551,
    "dist": 158.2278,
    "vmag": 3.01
  },
  {
    "name": 22951,
    "hr": 1123,
    "bf": "40    Per",
    "pname": "",
    "ra": 3.706291,
    "dec": 33.965026,
    "dist": 323.6246,
    "vmag": 4.97
  },
  {
    "name": 23016,
    "hr": 1126,
    "bf": "13    Tau",
    "pname": "",
    "ra": 3.705263,
    "dec": 19.700254,
    "dist": 165.2893,
    "vmag": 5.68
  },
  {
    "name": 23180,
    "hr": 1131,
    "bf": "38Omi Per",
    "pname": "Atik",
    "ra": 3.738648,
    "dec": 32.288248,
    "dist": 343.6426,
    "vmag": 3.84
  },
  {
    "name": 23183,
    "hr": 1132,
    "bf": "14    Tau",
    "pname": "",
    "ra": 3.72978,
    "dec": 19.665032,
    "dist": 125.6281,
    "vmag": 6.13
  },
  {
    "name": 23227,
    "hr": 1134,
    "bf": "Del For",
    "pname": "",
    "ra": 3.704139,
    "dec": -31.938361,
    "dist": 259.7403,
    "vmag": 4.99
  },
  {
    "name": 23230,
    "hr": 1135,
    "bf": "41Nu  Per",
    "pname": "",
    "ra": 3.753232,
    "dec": 42.578549,
    "dist": 170.6485,
    "vmag": 3.77
  },
  {
    "name": 23249,
    "hr": 1136,
    "bf": "23Del Eri",
    "pname": "",
    "ra": 3.720806,
    "dec": -9.763395,
    "dist": 9.0408,
    "vmag": 3.52
  },
  {
    "name": 23288,
    "hr": 1140,
    "bf": "16    Tau",
    "pname": "",
    "ra": 3.746726,
    "dec": 24.28947,
    "dist": 115.6069,
    "vmag": 5.45
  },
  {
    "name": 23302,
    "hr": 1142,
    "bf": "17    Tau",
    "pname": "",
    "ra": 3.747927,
    "dec": 24.113339,
    "dist": 124.0695,
    "vmag": 3.72
  },
  {
    "name": 23324,
    "hr": 1144,
    "bf": "18    Tau",
    "pname": "",
    "ra": 3.752705,
    "dec": 24.83926,
    "dist": 125.4705,
    "vmag": 5.66
  },
  {
    "name": 23338,
    "hr": 1145,
    "bf": "19    Tau",
    "pname": "",
    "ra": 3.75347,
    "dec": 24.467278,
    "dist": 125.4705,
    "vmag": 4.3
  },
  {
    "name": 23363,
    "hr": 1146,
    "bf": "24    Eri",
    "pname": "",
    "ra": 3.741808,
    "dec": -1.163091,
    "dist": 200.8032,
    "vmag": 5.24
  },
  {
    "name": 23401,
    "hr": 1148,
    "bf": "Gam Cam",
    "pname": "",
    "ra": 3.839302,
    "dec": 71.332266,
    "dist": 110.011,
    "vmag": 4.59
  },
  {
    "name": 23408,
    "hr": 1149,
    "bf": "20    Tau",
    "pname": "",
    "ra": 3.763779,
    "dec": 24.367748,
    "dist": 117.5088,
    "vmag": 3.87
  },
  {
    "name": 23413,
    "hr": 1150,
    "bf": "25    Eri",
    "pname": "",
    "ra": 3.749027,
    "dec": -0.29672,
    "dist": 120.919,
    "vmag": 5.56
  },
  {
    "name": 23432,
    "hr": 1151,
    "bf": "21    Tau",
    "pname": "",
    "ra": 3.765132,
    "dec": 24.554511,
    "dist": 114.0251,
    "vmag": 5.76
  },
  {
    "name": 23441,
    "hr": 1152,
    "bf": "22    Tau",
    "pname": "",
    "ra": 3.767472,
    "dec": 24.527898,
    "dist": 116.5501,
    "vmag": 6.43
  },
  {
    "name": 23466,
    "hr": 1153,
    "bf": "29    Tau",
    "pname": "",
    "ra": 3.761234,
    "dec": 6.049991,
    "dist": 163.6661,
    "vmag": 5.34
  },
  {
    "name": 23480,
    "hr": 1156,
    "bf": "23    Tau",
    "pname": "",
    "ra": 3.772104,
    "dec": 23.948358,
    "dist": 116.5501,
    "vmag": 4.14
  },
  {
    "name": 23614,
    "hr": 1162,
    "bf": "26Pi  Eri",
    "pname": "",
    "ra": 3.769037,
    "dec": -12.101589,
    "dist": 147.4926,
    "vmag": 4.43
  },
  {
    "name": 23630,
    "hr": 1165,
    "bf": "25Eta Tau",
    "pname": "Alcyone",
    "ra": 3.79141,
    "dec": 24.105137,
    "dist": 123.6094,
    "vmag": 2.85
  },
  {
    "name": 23738,
    "hr": 1171,
    "bf": "Sig For",
    "pname": "",
    "ra": 3.774286,
    "dec": -29.338157,
    "dist": 101.0101,
    "vmag": 5.91
  },
  {
    "name": 23754,
    "hr": 1173,
    "bf": "27Tau6Eri",
    "pname": "",
    "ra": 3.780804,
    "dec": -23.249723,
    "dist": 17.6274,
    "vmag": 4.22
  },
  {
    "name": 23793,
    "hr": 1174,
    "bf": "30    Tau",
    "pname": "",
    "ra": 3.804519,
    "dec": 11.143294,
    "dist": 139.0821,
    "vmag": 5.08
  },
  {
    "name": 23817,
    "hr": 1175,
    "bf": "Bet Ret",
    "pname": "",
    "ra": 3.736593,
    "dec": -64.806903,
    "dist": 29.8597,
    "vmag": 3.84
  },
  {
    "name": 23848,
    "hr": 1177,
    "bf": "42    Per",
    "pname": "",
    "ra": 3.825748,
    "dec": 33.091382,
    "dist": 82.3045,
    "vmag": 5.14
  },
  {
    "name": 23850,
    "hr": 1178,
    "bf": "27    Tau",
    "pname": "",
    "ra": 3.819373,
    "dec": 24.053415,
    "dist": 117.2333,
    "vmag": 3.62
  },
  {
    "name": 23862,
    "hr": 1180,
    "bf": "28    Tau",
    "pname": "",
    "ra": 3.819782,
    "dec": 24.136712,
    "dist": 117.096,
    "vmag": 5.05
  },
  {
    "name": 23878,
    "hr": 1181,
    "bf": "28Tau7Eri",
    "pname": "",
    "ra": 3.794347,
    "dec": -23.874677,
    "dist": 76.9231,
    "vmag": 5.24
  },
  {
    "name": 23940,
    "hr": 1184,
    "bf": "Rho For",
    "pname": "",
    "ra": 3.7989,
    "dec": -30.167882,
    "dist": 82.4402,
    "vmag": 5.52
  },
  {
    "name": 24263,
    "hr": 1199,
    "bf": "31    Tau",
    "pname": "",
    "ra": 3.86673,
    "dec": 6.534907,
    "dist": 238.6635,
    "vmag": 5.66
  },
  {
    "name": 24388,
    "hr": 1202,
    "bf": "30    Eri",
    "pname": "",
    "ra": 3.878238,
    "dec": -5.361259,
    "dist": 179.5332,
    "vmag": 5.48
  },
  {
    "name": 24398,
    "hr": 1203,
    "bf": "44Zet Per",
    "pname": "ζ-Per",
    "ra": 3.9022,
    "dec": 31.883635,
    "dist": 230.4147,
    "vmag": 2.84
  },
  {
    "name": 24512,
    "hr": 1208,
    "bf": "Gam Hyi",
    "pname": "",
    "ra": 3.787295,
    "dec": -74.238962,
    "dist": 65.6168,
    "vmag": 3.26
  },
  {
    "name": 24546,
    "hr": 1210,
    "bf": "43    Per",
    "pname": "",
    "ra": 3.94347,
    "dec": 50.695381,
    "dist": 37.4392,
    "vmag": 5.28
  },
  {
    "name": 24554,
    "hr": 1211,
    "bf": "32    Eri",
    "pname": "",
    "ra": 3.904862,
    "dec": -2.95473,
    "dist": 95.9693,
    "vmag": 4.46
  },
  {
    "name": 24587,
    "hr": 1213,
    "bf": "33Tau8Eri",
    "pname": "",
    "ra": 3.895195,
    "dec": -24.61223,
    "dist": 115.6069,
    "vmag": 4.64
  },
  {
    "name": 24740,
    "hr": 1218,
    "bf": "32    Tau",
    "pname": "",
    "ra": 3.947798,
    "dec": 22.477971,
    "dist": 42.337,
    "vmag": 5.62
  },
  {
    "name": 24760,
    "hr": 1220,
    "bf": "45Eps Per",
    "pname": "ε-Per",
    "ra": 3.96423,
    "dec": 40.010215,
    "dist": 195.6947,
    "vmag": 2.9
  },
  {
    "name": 24769,
    "hr": 1221,
    "bf": "33    Tau",
    "pname": "",
    "ra": 3.951058,
    "dec": 23.17555,
    "dist": 208.7683,
    "vmag": 6.05
  },
  {
    "name": 24912,
    "hr": 1228,
    "bf": "46Xi  Per",
    "pname": "Menkib",
    "ra": 3.98275,
    "dec": 35.791033,
    "dist": 381.6794,
    "vmag": 3.98
  },
  {
    "name": 25025,
    "hr": 1231,
    "bf": "34Gam Eri",
    "pname": "Zaurak",
    "ra": 3.967157,
    "dec": -13.508515,
    "dist": 62.3441,
    "vmag": 2.97
  },
  {
    "name": 25204,
    "hr": 1239,
    "bf": "35Lam Tau",
    "pname": "",
    "ra": 4.011338,
    "dec": 12.490347,
    "dist": 148.368,
    "vmag": 3.41
  },
  {
    "name": 25267,
    "hr": 1240,
    "bf": "36Tau9Eri",
    "pname": "",
    "ra": 3.998745,
    "dec": -24.016215,
    "dist": 100.4016,
    "vmag": 4.62
  },
  {
    "name": 25340,
    "hr": 1244,
    "bf": "35    Eri",
    "pname": "",
    "ra": 4.025569,
    "dec": -1.54966,
    "dist": 126.9036,
    "vmag": 5.28
  },
  {
    "name": 25422,
    "hr": 1247,
    "bf": "Del Ret",
    "pname": "",
    "ra": 3.979095,
    "dec": -61.400185,
    "dist": 161.2903,
    "vmag": 4.56
  },
  {
    "name": 25490,
    "hr": 1251,
    "bf": "38Nu  Tau",
    "pname": "",
    "ra": 4.052606,
    "dec": 5.989305,
    "dist": 35.8551,
    "vmag": 3.91
  },
  {
    "name": 25555,
    "hr": 1252,
    "bf": "36    Tau",
    "pname": "",
    "ra": 4.072687,
    "dec": 24.105993,
    "dist": 347.2222,
    "vmag": 5.46
  },
  {
    "name": 25558,
    "hr": 1253,
    "bf": "40    Tau",
    "pname": "",
    "ra": 4.06239,
    "dec": 5.435624,
    "dist": 196.4637,
    "vmag": 5.32
  },
  {
    "name": 25604,
    "hr": 1256,
    "bf": "37    Tau",
    "pname": "",
    "ra": 4.078253,
    "dec": 22.081926,
    "dist": 57.3723,
    "vmag": 4.36
  },
  {
    "name": 25642,
    "hr": 1261,
    "bf": "47Lam Per",
    "pname": "",
    "ra": 4.109735,
    "dec": 50.351262,
    "dist": 129.3661,
    "vmag": 4.25
  },
  {
    "name": 25680,
    "hr": 1262,
    "bf": "39    Tau",
    "pname": "",
    "ra": 4.088958,
    "dec": 22.008905,
    "dist": 16.9377,
    "vmag": 5.9
  },
  {
    "name": 25705,
    "hr": 1264,
    "bf": "Gam Ret",
    "pname": "",
    "ra": 4.014946,
    "dec": -62.159284,
    "dist": 143.8849,
    "vmag": 4.48
  },
  {
    "name": 25728,
    "hr": 1266,
    "bf": "Iot Ret",
    "pname": "",
    "ra": 4.021697,
    "dec": -61.078822,
    "dist": 97.8474,
    "vmag": 4.97
  },
  {
    "name": 25823,
    "hr": 1268,
    "bf": "41    Tau",
    "pname": "",
    "ra": 4.110114,
    "dec": 27.599903,
    "dist": 128.866,
    "vmag": 5.18
  },
  {
    "name": 25867,
    "hr": 1269,
    "bf": "42Psi Tau",
    "pname": "",
    "ra": 4.116795,
    "dec": 29.001299,
    "dist": 27.6014,
    "vmag": 5.21
  },
  {
    "name": 25940,
    "hr": 1273,
    "bf": "48    Per",
    "pname": "",
    "ra": 4.144357,
    "dec": 47.712513,
    "dist": 146.1988,
    "vmag": 3.96
  },
  {
    "name": 25975,
    "hr": 1277,
    "bf": "49    Per",
    "pname": "",
    "ra": 4.137612,
    "dec": 37.727493,
    "dist": 44.0917,
    "vmag": 6.07
  },
  {
    "name": 25998,
    "hr": 1278,
    "bf": "50    Per",
    "pname": "",
    "ra": 4.143497,
    "dec": 38.039733,
    "dist": 20.9952,
    "vmag": 5.52
  },
  {
    "name": 26162,
    "hr": 1283,
    "bf": "43Ome1Tau",
    "pname": "",
    "ra": 4.152768,
    "dec": 19.609217,
    "dist": 87.0322,
    "vmag": 5.51
  },
  {
    "name": 26322,
    "hr": 1287,
    "bf": "44    Tau",
    "pname": "",
    "ra": 4.180517,
    "dec": 26.480952,
    "dist": 62.9327,
    "vmag": 5.39
  },
  {
    "name": 26409,
    "hr": 1290,
    "bf": "37    Eri",
    "pname": "",
    "ra": 4.172923,
    "dec": -6.923852,
    "dist": 107.7586,
    "vmag": 5.44
  },
  {
    "name": 26462,
    "hr": 1292,
    "bf": "45    Tau",
    "pname": "",
    "ra": 4.188967,
    "dec": 5.523047,
    "dist": 36.9822,
    "vmag": 5.71
  },
  {
    "name": 26574,
    "hr": 1298,
    "bf": "38Omi1Eri",
    "pname": "",
    "ra": 4.197761,
    "dec": -6.837581,
    "dist": 37.3134,
    "vmag": 4.04
  },
  {
    "name": 26612,
    "hr": 1302,
    "bf": "Del Hor",
    "pname": "",
    "ra": 4.180708,
    "dec": -41.993573,
    "dist": 54.8246,
    "vmag": 4.93
  },
  {
    "name": 26630,
    "hr": 1303,
    "bf": "51Mu  Per",
    "pname": "",
    "ra": 4.248295,
    "dec": 48.409331,
    "dist": 276.2431,
    "vmag": 4.12
  },
  {
    "name": 26673,
    "hr": 1306,
    "bf": "52    Per",
    "pname": "",
    "ra": 4.248143,
    "dec": 40.483671,
    "dist": 291.5452,
    "vmag": 4.67
  },
  {
    "name": 26690,
    "hr": 1309,
    "bf": "46    Tau",
    "pname": "",
    "ra": 4.225862,
    "dec": 7.716045,
    "dist": 36.3372,
    "vmag": 5.29
  },
  {
    "name": 26722,
    "hr": 1311,
    "bf": "47    Tau",
    "pname": "",
    "ra": 4.232329,
    "dec": 9.263824,
    "dist": 101.7294,
    "vmag": 4.84
  },
  {
    "name": 26846,
    "hr": 1318,
    "bf": "39    Eri",
    "pname": "",
    "ra": 4.239914,
    "dec": -10.256283,
    "dist": 74.2942,
    "vmag": 4.87
  },
  {
    "name": 26911,
    "hr": 1319,
    "bf": "48    Tau",
    "pname": "",
    "ra": 4.262856,
    "dec": 15.400695,
    "dist": 45.4133,
    "vmag": 6.31
  },
  {
    "name": 26912,
    "hr": 1320,
    "bf": "49Mu  Tau",
    "pname": "",
    "ra": 4.258905,
    "dec": 8.892357,
    "dist": 139.6648,
    "vmag": 4.27
  },
  {
    "name": 26965,
    "hr": 1325,
    "bf": "40Omi2Eri",
    "pname": "",
    "ra": 4.254537,
    "dec": -7.652871,
    "dist": 4.9845,
    "vmag": 4.43
  },
  {
    "name": 26967,
    "hr": 1326,
    "bf": "Alp Hor",
    "pname": "",
    "ra": 4.233363,
    "dec": -42.294368,
    "dist": 35.2609,
    "vmag": 3.85
  },
  {
    "name": 27045,
    "hr": 1329,
    "bf": "50Ome2Tau",
    "pname": "",
    "ra": 4.287684,
    "dec": 20.578591,
    "dist": 28.9436,
    "vmag": 4.93
  },
  {
    "name": 27176,
    "hr": 1331,
    "bf": "51    Tau",
    "pname": "",
    "ra": 4.306444,
    "dec": 21.579297,
    "dist": 54.0541,
    "vmag": 5.64
  },
  {
    "name": 27256,
    "hr": 1336,
    "bf": "Alp Ret",
    "pname": "",
    "ra": 4.240404,
    "dec": -62.473858,
    "dist": 49.554,
    "vmag": 3.33
  },
  {
    "name": 27290,
    "hr": 1338,
    "bf": "Gam Dor",
    "pname": "",
    "ra": 4.267097,
    "dec": -51.486648,
    "dist": 20.4625,
    "vmag": 4.26
  },
  {
    "name": 27295,
    "hr": 1339,
    "bf": "53    Tau",
    "pname": "",
    "ra": 4.323916,
    "dec": 21.142307,
    "dist": 82.7815,
    "vmag": 5.5
  },
  {
    "name": 27309,
    "hr": 1341,
    "bf": "56    Tau",
    "pname": "",
    "ra": 4.326862,
    "dec": 21.773491,
    "dist": 100,
    "vmag": 5.34
  },
  {
    "name": 27348,
    "hr": 1343,
    "bf": "54    Per",
    "pname": "",
    "ra": 4.340178,
    "dec": 34.566725,
    "dist": 66.9344,
    "vmag": 4.93
  },
  {
    "name": 27371,
    "hr": 1346,
    "bf": "54Gam Tau",
    "pname": "",
    "ra": 4.329889,
    "dec": 15.627642,
    "dist": 49.5295,
    "vmag": 3.65
  },
  {
    "name": 27376,
    "hr": 1347,
    "bf": "41Ups4Eri",
    "pname": "",
    "ra": 4.298237,
    "dec": -33.798348,
    "dist": 54.5554,
    "vmag": 3.55
  },
  {
    "name": 27382,
    "hr": 1348,
    "bf": "52Phi Tau",
    "pname": "",
    "ra": 4.339227,
    "dec": 27.350754,
    "dist": 98.4252,
    "vmag": 4.97
  },
  {
    "name": 27396,
    "hr": 1350,
    "bf": "53    Per",
    "pname": "",
    "ra": 4.359211,
    "dec": 46.498878,
    "dist": 155.521,
    "vmag": 4.8
  },
  {
    "name": 27397,
    "hr": 1351,
    "bf": "57    Tau",
    "pname": "",
    "ra": 4.332695,
    "dec": 14.035201,
    "dist": 45.7038,
    "vmag": 5.58
  },
  {
    "name": 27442,
    "hr": 1355,
    "bf": "Eps Ret",
    "pname": "",
    "ra": 4.274738,
    "dec": -59.302156,
    "dist": 18.2382,
    "vmag": 4.44
  },
  {
    "name": 27459,
    "hr": 1356,
    "bf": "58    Tau",
    "pname": "",
    "ra": 4.343419,
    "dec": 15.095453,
    "dist": 46.9484,
    "vmag": 5.26
  },
  {
    "name": 27628,
    "hr": 1368,
    "bf": "60    Tau",
    "pname": "",
    "ra": 4.367643,
    "dec": 14.077198,
    "dist": 44.3853,
    "vmag": 5.72
  },
  {
    "name": 27638,
    "hr": 1369,
    "bf": "59Chi Tau",
    "pname": "",
    "ra": 4.376373,
    "dec": 25.629314,
    "dist": 89.2857,
    "vmag": 5.38
  },
  {
    "name": 27657,
    "hr": 1372,
    "bf": "The Ret",
    "pname": "",
    "ra": 4.294519,
    "dec": -63.255405,
    "dist": 141.2429,
    "vmag": 5.88
  },
  {
    "name": 27697,
    "hr": 1373,
    "bf": "61Del1Tau",
    "pname": "",
    "ra": 4.382247,
    "dec": 17.542514,
    "dist": 47.7099,
    "vmag": 3.77
  },
  {
    "name": 27749,
    "hr": 1376,
    "bf": "63    Tau",
    "pname": "",
    "ra": 4.390294,
    "dec": 16.77726,
    "dist": 49.9002,
    "vmag": 5.64
  },
  {
    "name": 27777,
    "hr": 1377,
    "bf": "55    Per",
    "pname": "",
    "ra": 4.408098,
    "dec": 34.130758,
    "dist": 137.3626,
    "vmag": 5.73
  },
  {
    "name": 27778,
    "hr": 1378,
    "bf": "62    Tau",
    "pname": "",
    "ra": 4.399934,
    "dec": 24.300992,
    "dist": 278.5515,
    "vmag": 6.34
  },
  {
    "name": 27786,
    "hr": 1379,
    "bf": "56    Per",
    "pname": "",
    "ra": 4.410404,
    "dec": 33.959686,
    "dist": 40.6174,
    "vmag": 5.77
  },
  {
    "name": 27819,
    "hr": 1380,
    "bf": "64Del2Tau",
    "pname": "",
    "ra": 4.401599,
    "dec": 17.44413,
    "dist": 49.4805,
    "vmag": 4.8
  },
  {
    "name": 27820,
    "hr": 1381,
    "bf": "66    Tau",
    "pname": "",
    "ra": 4.397729,
    "dec": 9.460968,
    "dist": 121.3592,
    "vmag": 5.1
  },
  {
    "name": 27861,
    "hr": 1383,
    "bf": "42Xi  Eri",
    "pname": "",
    "ra": 4.394681,
    "dec": -3.74547,
    "dist": 64.1026,
    "vmag": 5.17
  },
  {
    "name": 27934,
    "hr": 1387,
    "bf": "65Kap1Tau",
    "pname": "",
    "ra": 4.422822,
    "dec": 22.293874,
    "dist": 47.1921,
    "vmag": 4.21
  },
  {
    "name": 27946,
    "hr": 1388,
    "bf": "67Kap2Tau",
    "pname": "",
    "ra": 4.423614,
    "dec": 22.199998,
    "dist": 45.3926,
    "vmag": 5.27
  },
  {
    "name": 27962,
    "hr": 1389,
    "bf": "68Del3Tau",
    "pname": "",
    "ra": 4.424828,
    "dec": 17.92791,
    "dist": 45.5373,
    "vmag": 4.3
  },
  {
    "name": 27991,
    "hr": 1391,
    "bf": "70    Tau",
    "pname": "",
    "ra": 4.427032,
    "dec": 15.94101,
    "dist": 47.1698,
    "vmag": 6.44
  },
  {
    "name": 28024,
    "hr": 1392,
    "bf": "69Ups Tau",
    "pname": "",
    "ra": 4.438461,
    "dec": 22.813583,
    "dist": 47.1476,
    "vmag": 4.28
  },
  {
    "name": 28028,
    "hr": 1393,
    "bf": "43    Eri",
    "pname": "",
    "ra": 4.400613,
    "dec": -34.016846,
    "dist": 90.8265,
    "vmag": 3.97
  },
  {
    "name": 28052,
    "hr": 1394,
    "bf": "71    Tau",
    "pname": "",
    "ra": 4.439094,
    "dec": 15.618265,
    "dist": 49.0918,
    "vmag": 4.48
  },
  {
    "name": 28093,
    "hr": 1395,
    "bf": "Eta Ret",
    "pname": "",
    "ra": 4.364796,
    "dec": -63.386391,
    "dist": 117.9245,
    "vmag": 5.24
  },
  {
    "name": 28100,
    "hr": 1396,
    "bf": "73Pi  Tau",
    "pname": "",
    "ra": 4.443437,
    "dec": 14.713782,
    "dist": 127.7139,
    "vmag": 4.69
  },
  {
    "name": 28149,
    "hr": 1399,
    "bf": "72    Tau",
    "pname": "",
    "ra": 4.454847,
    "dec": 22.996337,
    "dist": 115.8749,
    "vmag": 5.53
  },
  {
    "name": 28292,
    "hr": 1407,
    "bf": "75    Tau",
    "pname": "",
    "ra": 4.473992,
    "dec": 16.359672,
    "dist": 57.241,
    "vmag": 4.96
  },
  {
    "name": 28294,
    "hr": 1408,
    "bf": "76    Tau",
    "pname": "",
    "ra": 4.473167,
    "dec": 14.740974,
    "dist": 57.5705,
    "vmag": 5.9
  },
  {
    "name": 28305,
    "hr": 1409,
    "bf": "74Eps Tau",
    "pname": "",
    "ra": 4.476943,
    "dec": 19.180431,
    "dist": 44.964,
    "vmag": 3.53
  },
  {
    "name": 28307,
    "hr": 1411,
    "bf": "77The1Tau",
    "pname": "",
    "ra": 4.476248,
    "dec": 15.962181,
    "dist": 47.3261,
    "vmag": 3.84
  },
  {
    "name": 28319,
    "hr": 1412,
    "bf": "78The2Tau",
    "pname": "",
    "ra": 4.477705,
    "dec": 15.870883,
    "dist": 46.1042,
    "vmag": 3.4
  },
  {
    "name": 28355,
    "hr": 1414,
    "bf": "79    Tau",
    "pname": "",
    "ra": 4.480601,
    "dec": 13.047602,
    "dist": 48.852,
    "vmag": 5.02
  },
  {
    "name": 28446,
    "hr": 1417,
    "bf": "1    Cam",
    "pname": "",
    "ra": 4.533845,
    "dec": 53.91083,
    "dist": 100000,
    "vmag": 5.78
  },
  {
    "name": 28485,
    "hr": 1422,
    "bf": "80    Tau",
    "pname": "",
    "ra": 4.502388,
    "dec": 15.63784,
    "dist": 45.8295,
    "vmag": 5.58
  },
  {
    "name": 28525,
    "hr": 1426,
    "bf": "Del Men",
    "pname": "",
    "ra": 4.299776,
    "dec": -80.214033,
    "dist": 129.8701,
    "vmag": 5.67
  },
  {
    "name": 28546,
    "hr": 1428,
    "bf": "81    Tau",
    "pname": "",
    "ra": 4.510802,
    "dec": 15.691879,
    "dist": 44.9236,
    "vmag": 5.47
  },
  {
    "name": 28556,
    "hr": 1430,
    "bf": "83    Tau",
    "pname": "",
    "ra": 4.510378,
    "dec": 13.724402,
    "dist": 45.208,
    "vmag": 5.4
  },
  {
    "name": 28677,
    "hr": 1432,
    "bf": "85    Tau",
    "pname": "",
    "ra": 4.531043,
    "dec": 15.85156,
    "dist": 45.1671,
    "vmag": 6.01
  },
  {
    "name": 28704,
    "hr": 1434,
    "bf": "57    Per",
    "pname": "",
    "ra": 4.556917,
    "dec": 43.063893,
    "dist": 59.1716,
    "vmag": 6.09
  },
  {
    "name": 28749,
    "hr": 1437,
    "bf": "45    Eri",
    "pname": "",
    "ra": 4.531296,
    "dec": -0.044011,
    "dist": 201.2072,
    "vmag": 4.91
  },
  {
    "name": 28873,
    "hr": 1443,
    "bf": "Del Cae",
    "pname": "",
    "ra": 4.513916,
    "dec": -44.953749,
    "dist": 215.9827,
    "vmag": 5.07
  },
  {
    "name": 28910,
    "hr": 1444,
    "bf": "86Rho Tau",
    "pname": "",
    "ra": 4.564143,
    "dec": 14.844424,
    "dist": 48.5201,
    "vmag": 4.65
  },
  {
    "name": 29009,
    "hr": 1449,
    "bf": "46    Eri",
    "pname": "",
    "ra": 4.565202,
    "dec": -6.738908,
    "dist": 253.8071,
    "vmag": 5.71
  },
  {
    "name": 29064,
    "hr": 1451,
    "bf": "47    Eri",
    "pname": "",
    "ra": 4.569897,
    "dec": -8.231352,
    "dist": 304.878,
    "vmag": 5.2
  },
  {
    "name": 29085,
    "hr": 1453,
    "bf": "50Ups1Eri",
    "pname": "",
    "ra": 4.55849,
    "dec": -29.766492,
    "dist": 38.956,
    "vmag": 4.49
  },
  {
    "name": 29094,
    "hr": 1454,
    "bf": "58    Per",
    "pname": "",
    "ra": 4.611508,
    "dec": 41.264808,
    "dist": 244.4988,
    "vmag": 4.25
  },
  {
    "name": 29116,
    "hr": 1456,
    "bf": "Nu  Men",
    "pname": "",
    "ra": 4.349455,
    "dec": -81.57992,
    "dist": 52.0562,
    "vmag": 5.78
  },
  {
    "name": 29139,
    "hr": 1457,
    "bf": "87Alp Tau",
    "pname": "Aldebaran",
    "ra": 4.598677,
    "dec": 16.509301,
    "dist": 20.4332,
    "vmag": 0.87
  },
  {
    "name": 29140,
    "hr": 1458,
    "bf": "88    Tau",
    "pname": "",
    "ra": 4.594239,
    "dec": 10.16079,
    "dist": 47.8927,
    "vmag": 4.25
  },
  {
    "name": 29248,
    "hr": 1463,
    "bf": "48Nu  Eri",
    "pname": "",
    "ra": 4.605317,
    "dec": -3.352459,
    "dist": 207.0393,
    "vmag": 3.93
  },
  {
    "name": 29291,
    "hr": 1464,
    "bf": "52Ups2Eri",
    "pname": "",
    "ra": 4.592512,
    "dec": -30.562341,
    "dist": 65.5738,
    "vmag": 3.81
  },
  {
    "name": 29305,
    "hr": 1465,
    "bf": "Alp Dor",
    "pname": "",
    "ra": 4.566598,
    "dec": -55.044975,
    "dist": 51.7063,
    "vmag": 3.3
  },
  {
    "name": 29316,
    "hr": 1466,
    "bf": "2    Cam",
    "pname": "",
    "ra": 4.666126,
    "dec": 53.473021,
    "dist": 44.4642,
    "vmag": 5.36
  },
  {
    "name": 29317,
    "hr": 1467,
    "bf": "3    Cam",
    "pname": "",
    "ra": 4.66519,
    "dec": 53.079535,
    "dist": 129.5337,
    "vmag": 5.07
  },
  {
    "name": 29375,
    "hr": 1472,
    "bf": "89    Tau",
    "pname": "",
    "ra": 4.635956,
    "dec": 16.033291,
    "dist": 49.8256,
    "vmag": 5.78
  },
  {
    "name": 29388,
    "hr": 1473,
    "bf": "90    Tau",
    "pname": "",
    "ra": 4.635961,
    "dec": 12.510838,
    "dist": 47.081,
    "vmag": 4.27
  },
  {
    "name": 29391,
    "hr": 1474,
    "bf": "51    Eri",
    "pname": "",
    "ra": 4.626703,
    "dec": -2.473548,
    "dist": 29.4291,
    "vmag": 5.22
  },
  {
    "name": 29479,
    "hr": 1478,
    "bf": "91Sig1Tau",
    "pname": "",
    "ra": 4.65256,
    "dec": 15.799846,
    "dist": 45.0857,
    "vmag": 5.08
  },
  {
    "name": 29488,
    "hr": 1479,
    "bf": "92Sig2Tau",
    "pname": "",
    "ra": 4.654583,
    "dec": 15.917977,
    "dist": 47.6872,
    "vmag": 4.67
  },
  {
    "name": 29503,
    "hr": 1481,
    "bf": "53    Eri",
    "pname": "",
    "ra": 4.63634,
    "dec": -14.30402,
    "dist": 33.6814,
    "vmag": 3.86
  },
  {
    "name": 29589,
    "hr": 1484,
    "bf": "93    Tau",
    "pname": "",
    "ra": 4.667616,
    "dec": 12.197609,
    "dist": 127.7139,
    "vmag": 5.45
  },
  {
    "name": 29722,
    "hr": 1494,
    "bf": "59    Per",
    "pname": "",
    "ra": 4.715089,
    "dec": 43.365138,
    "dist": 73.9645,
    "vmag": 5.3
  },
  {
    "name": 29755,
    "hr": 1496,
    "bf": "54    Eri",
    "pname": "",
    "ra": 4.674031,
    "dec": -19.671493,
    "dist": 112.9944,
    "vmag": 4.32
  },
  {
    "name": 29763,
    "hr": 1497,
    "bf": "94Tau Tau",
    "pname": "",
    "ra": 4.704084,
    "dec": 22.956926,
    "dist": 122.1001,
    "vmag": 4.27
  },
  {
    "name": 29859,
    "hr": 1499,
    "bf": "95    Tau",
    "pname": "",
    "ra": 4.720488,
    "dec": 24.08892,
    "dist": 48.2625,
    "vmag": 6.18
  },
  {
    "name": 29875,
    "hr": 1502,
    "bf": "Alp Cae",
    "pname": "",
    "ra": 4.676039,
    "dec": -41.863752,
    "dist": 20.1654,
    "vmag": 4.44
  },
  {
    "name": 29992,
    "hr": 1503,
    "bf": "Bet Cae",
    "pname": "",
    "ra": 4.700965,
    "dec": -37.144297,
    "dist": 28.6697,
    "vmag": 5.04
  },
  {
    "name": 30020,
    "hr": 1505,
    "bf": "55    Eri",
    "pname": "",
    "ra": 4.726318,
    "dec": -8.794317,
    "dist": 653.5948,
    "vmag": 5.98
  },
  {
    "name": 30076,
    "hr": 1508,
    "bf": "56    Eri",
    "pname": "",
    "ra": 4.734811,
    "dec": -8.503571,
    "dist": 100000,
    "vmag": 5.78
  },
  {
    "name": 30121,
    "hr": 1511,
    "bf": "4    Cam",
    "pname": "",
    "ra": 4.800069,
    "dec": 56.757183,
    "dist": 52.7704,
    "vmag": 5.29
  },
  {
    "name": 30185,
    "hr": 1516,
    "bf": "Lam Pic",
    "pname": "",
    "ra": 4.712899,
    "dec": -50.481334,
    "dist": 114.8106,
    "vmag": 5.3
  },
  {
    "name": 30211,
    "hr": 1520,
    "bf": "57Mu  Eri",
    "pname": "",
    "ra": 4.758375,
    "dec": -3.254657,
    "dist": 160,
    "vmag": 4.01
  },
  {
    "name": 30478,
    "hr": 1530,
    "bf": "Kap Dor",
    "pname": "",
    "ra": 4.739205,
    "dec": -59.732733,
    "dist": 67.0241,
    "vmag": 5.28
  },
  {
    "name": 30495,
    "hr": 1532,
    "bf": "58    Eri",
    "pname": "",
    "ra": 4.793413,
    "dec": -16.934456,
    "dist": 13.2767,
    "vmag": 5.49
  },
  {
    "name": 30605,
    "hr": 1537,
    "bf": "96    Tau",
    "pname": "",
    "ra": 4.828912,
    "dec": 15.904221,
    "dist": 333.3333,
    "vmag": 6.09
  },
  {
    "name": 30606,
    "hr": 1538,
    "bf": "59    Eri",
    "pname": "",
    "ra": 4.809037,
    "dec": -16.329484,
    "dist": 41.7188,
    "vmag": 5.76
  },
  {
    "name": 30608,
    "hr": 1539,
    "bf": "Zet Cae",
    "pname": "",
    "ra": 4.797104,
    "dec": -30.020372,
    "dist": 131.7523,
    "vmag": 6.35
  },
  {
    "name": 30612,
    "hr": 1541,
    "bf": "Mu  Men",
    "pname": "",
    "ra": 4.717764,
    "dec": -70.931027,
    "dist": 150.6024,
    "vmag": 5.53
  },
  {
    "name": 30614,
    "hr": 1542,
    "bf": "9Alp Cam",
    "pname": "",
    "ra": 4.900836,
    "dec": 66.342678,
    "dist": 100000,
    "vmag": 4.26
  },
  {
    "name": 30652,
    "hr": 1543,
    "bf": "1Pi 3Ori",
    "pname": "",
    "ra": 4.830669,
    "dec": 6.961276,
    "dist": 8.0684,
    "vmag": 3.19
  },
  {
    "name": 30739,
    "hr": 1544,
    "bf": "2Pi 2Ori",
    "pname": "",
    "ra": 4.843534,
    "dec": 8.900176,
    "dist": 68.8231,
    "vmag": 4.35
  },
  {
    "name": 30780,
    "hr": 1547,
    "bf": "97    Tau",
    "pname": "",
    "ra": 4.856239,
    "dec": 18.839861,
    "dist": 51.2558,
    "vmag": 5.08
  },
  {
    "name": 30814,
    "hr": 1549,
    "bf": "60    Eri",
    "pname": "",
    "ra": 4.83656,
    "dec": -16.217159,
    "dist": 72.3066,
    "vmag": 5.03
  },
  {
    "name": 30834,
    "hr": 1551,
    "bf": "2    Aur",
    "pname": "",
    "ra": 4.877218,
    "dec": 36.703187,
    "dist": 184.5018,
    "vmag": 4.79
  },
  {
    "name": 30836,
    "hr": 1552,
    "bf": "3Pi 4Ori",
    "pname": "",
    "ra": 4.853434,
    "dec": 5.605104,
    "dist": 322.5806,
    "vmag": 3.68
  },
  {
    "name": 30958,
    "hr": 1555,
    "bf": "5    Cam",
    "pname": "",
    "ra": 4.917537,
    "dec": 55.259109,
    "dist": 190.1141,
    "vmag": 5.52
  },
  {
    "name": 30959,
    "hr": 1556,
    "bf": "4Omi1Ori",
    "pname": "",
    "ra": 4.875545,
    "dec": 14.250642,
    "dist": 199.6008,
    "vmag": 4.71
  },
  {
    "name": 31109,
    "hr": 1560,
    "bf": "61Ome Eri",
    "pname": "",
    "ra": 4.881575,
    "dec": -5.452695,
    "dist": 72.0461,
    "vmag": 4.36
  },
  {
    "name": 31139,
    "hr": 1562,
    "bf": "5    Ori",
    "pname": "",
    "ra": 4.889659,
    "dec": 2.508225,
    "dist": 181.1594,
    "vmag": 5.33
  },
  {
    "name": 31203,
    "hr": 1563,
    "bf": "Iot Pic",
    "pname": "",
    "ra": 4.848706,
    "dec": -53.461508,
    "dist": 41.5628,
    "vmag": 5.58
  },
  {
    "name": 31204,
    "hr": 1564,
    "bf": "Iot Pic",
    "pname": "",
    "ra": 4.849036,
    "dec": -53.459698,
    "dist": 38.5356,
    "vmag": 6.42
  },
  {
    "name": 31237,
    "hr": 1567,
    "bf": "8Pi 5Ori",
    "pname": "",
    "ra": 4.904193,
    "dec": 2.440672,
    "dist": 411.5226,
    "vmag": 3.71
  },
  {
    "name": 31278,
    "hr": 1568,
    "bf": "7    Cam",
    "pname": "",
    "ra": 4.95478,
    "dec": 53.752101,
    "dist": 114.0251,
    "vmag": 4.43
  },
  {
    "name": 31283,
    "hr": 1569,
    "bf": "6    Ori",
    "pname": "",
    "ra": 4.913027,
    "dec": 11.426006,
    "dist": 69.979,
    "vmag": 5.18
  },
  {
    "name": 31295,
    "hr": 1570,
    "bf": "7Pi 1Ori",
    "pname": "",
    "ra": 4.914924,
    "dec": 10.150833,
    "dist": 35.6633,
    "vmag": 4.64
  },
  {
    "name": 31398,
    "hr": 1577,
    "bf": "3Iot Aur",
    "pname": "Hassaleh",
    "ra": 4.949894,
    "dec": 33.16609,
    "dist": 151.2859,
    "vmag": 2.69
  },
  {
    "name": 31421,
    "hr": 1580,
    "bf": "9Omi2Ori",
    "pname": "",
    "ra": 4.939521,
    "dec": 13.514466,
    "dist": 57.0125,
    "vmag": 4.06
  },
  {
    "name": 31512,
    "hr": 1582,
    "bf": "62    Eri",
    "pname": "",
    "ra": 4.940052,
    "dec": -5.171356,
    "dist": 227.2727,
    "vmag": 5.5
  },
  {
    "name": 31553,
    "hr": 1586,
    "bf": "99    Tau",
    "pname": "",
    "ra": 4.963513,
    "dec": 23.948562,
    "dist": 139.6648,
    "vmag": 5.79
  },
  {
    "name": 31579,
    "hr": 1588,
    "bf": "8    Cam",
    "pname": "",
    "ra": 4.996204,
    "dec": 53.155451,
    "dist": 176.3668,
    "vmag": 6.09
  },
  {
    "name": 31592,
    "hr": 1590,
    "bf": "98    Tau",
    "pname": "",
    "ra": 4.969275,
    "dec": 25.050405,
    "dist": 87.184,
    "vmag": 5.79
  },
  {
    "name": 31647,
    "hr": 1592,
    "bf": "4Ome Aur",
    "pname": "",
    "ra": 4.987612,
    "dec": 37.890245,
    "dist": 52.2739,
    "vmag": 4.93
  },
  {
    "name": 31761,
    "hr": 1599,
    "bf": "5    Aur",
    "pname": "",
    "ra": 5.005095,
    "dec": 39.394701,
    "dist": 59.7372,
    "vmag": 5.95
  },
  {
    "name": 31767,
    "hr": 1601,
    "bf": "10Pi 6Ori",
    "pname": "",
    "ra": 4.975806,
    "dec": 1.714016,
    "dist": 289.8551,
    "vmag": 4.47
  },
  {
    "name": 31780,
    "hr": 1602,
    "bf": "6    Aur",
    "pname": "",
    "ra": 5.006449,
    "dec": 39.654653,
    "dist": 336.7003,
    "vmag": 6.46
  },
  {
    "name": 31910,
    "hr": 1603,
    "bf": "10Bet Cam",
    "pname": "",
    "ra": 5.05697,
    "dec": 60.442245,
    "dist": 267.3797,
    "vmag": 4.03
  },
  {
    "name": 31964,
    "hr": 1605,
    "bf": "7Eps Aur",
    "pname": "",
    "ra": 5.032815,
    "dec": 43.823308,
    "dist": 653.5948,
    "vmag": 3.03
  },
  {
    "name": 32008,
    "hr": 1608,
    "bf": "63    Eri",
    "pname": "",
    "ra": 4.997348,
    "dec": -10.263325,
    "dist": 53.9665,
    "vmag": 5.39
  },
  {
    "name": 32045,
    "hr": 1611,
    "bf": "64    Eri",
    "pname": "",
    "ra": 4.998816,
    "dec": -12.537416,
    "dist": 88.968,
    "vmag": 4.78
  },
  {
    "name": 32068,
    "hr": 1612,
    "bf": "8Zet Aur",
    "pname": "",
    "ra": 5.041301,
    "dec": 41.075837,
    "dist": 240.9639,
    "vmag": 3.69
  },
  {
    "name": 32249,
    "hr": 1617,
    "bf": "65Psi Eri",
    "pname": "",
    "ra": 5.023985,
    "dec": -7.173965,
    "dist": 226.7574,
    "vmag": 4.8
  },
  {
    "name": 32301,
    "hr": 1620,
    "bf": "102Iot Tau",
    "pname": "",
    "ra": 5.051596,
    "dec": 21.589962,
    "dist": 52.9661,
    "vmag": 4.62
  },
  {
    "name": 32343,
    "hr": 1622,
    "bf": "11    Cam",
    "pname": "",
    "ra": 5.102349,
    "dec": 58.972372,
    "dist": 210.084,
    "vmag": 5.22
  },
  {
    "name": 32357,
    "hr": 1623,
    "bf": "12    Cam",
    "pname": "",
    "ra": 5.103372,
    "dec": 59.02134,
    "dist": 218.8184,
    "vmag": 6.08
  },
  {
    "name": 32440,
    "hr": 1629,
    "bf": "Eta Men",
    "pname": "",
    "ra": 4.919765,
    "dec": -74.936852,
    "dist": 204.918,
    "vmag": 5.47
  },
  {
    "name": 32503,
    "hr": 1634,
    "bf": "1    Lep",
    "pname": "",
    "ra": 5.045828,
    "dec": -22.795052,
    "dist": 143.472,
    "vmag": 5.74
  },
  {
    "name": 32537,
    "hr": 1637,
    "bf": "9    Aur",
    "pname": "",
    "ra": 5.111289,
    "dec": 51.59772,
    "dist": 26.2881,
    "vmag": 4.98
  },
  {
    "name": 32549,
    "hr": 1638,
    "bf": "11    Ori",
    "pname": "",
    "ra": 5.076153,
    "dec": 15.404105,
    "dist": 111.9821,
    "vmag": 4.65
  },
  {
    "name": 32630,
    "hr": 1641,
    "bf": "10Eta Aur",
    "pname": "",
    "ra": 5.10858,
    "dec": 41.234474,
    "dist": 74.6269,
    "vmag": 3.18
  },
  {
    "name": 32743,
    "hr": 1649,
    "bf": "Eta1Pic",
    "pname": "",
    "ra": 5.046861,
    "dec": -49.151407,
    "dist": 26.0756,
    "vmag": 5.37
  },
  {
    "name": 32831,
    "hr": 1652,
    "bf": "Gam1Cae",
    "pname": "",
    "ra": 5.07344,
    "dec": -35.482978,
    "dist": 55.5864,
    "vmag": 4.55
  },
  {
    "name": 32846,
    "hr": 1653,
    "bf": "Gam2Cae",
    "pname": "",
    "ra": 5.073931,
    "dec": -35.705109,
    "dist": 98.3284,
    "vmag": 6.32
  },
  {
    "name": 32887,
    "hr": 1654,
    "bf": "2Eps Lep",
    "pname": "",
    "ra": 5.091018,
    "dec": -22.371032,
    "dist": 65.4022,
    "vmag": 3.19
  },
  {
    "name": 32923,
    "hr": 1656,
    "bf": "104    Tau",
    "pname": "",
    "ra": 5.124164,
    "dec": 18.645052,
    "dist": 15.4345,
    "vmag": 4.91
  },
  {
    "name": 32964,
    "hr": 1657,
    "bf": "66    Eri",
    "pname": "",
    "ra": 5.112681,
    "dec": -4.655163,
    "dist": 94.697,
    "vmag": 5.12
  },
  {
    "name": 32977,
    "hr": 1658,
    "bf": "106    Tau",
    "pname": "",
    "ra": 5.130111,
    "dec": 20.418379,
    "dist": 58.1058,
    "vmag": 5.28
  },
  {
    "name": 32990,
    "hr": 1659,
    "bf": "103    Tau",
    "pname": "",
    "ra": 5.135173,
    "dec": 24.265175,
    "dist": 458.7156,
    "vmag": 5.5
  },
  {
    "name": 32991,
    "hr": 1660,
    "bf": "105    Tau",
    "pname": "",
    "ra": 5.132066,
    "dec": 21.704821,
    "dist": 331.1258,
    "vmag": 5.84
  },
  {
    "name": 33021,
    "hr": 1662,
    "bf": "13    Ori",
    "pname": "",
    "ra": 5.127309,
    "dec": 9.47178,
    "dist": 27.6702,
    "vmag": 6.15
  },
  {
    "name": 33042,
    "hr": 1663,
    "bf": "Eta2Pic",
    "pname": "",
    "ra": 5.082776,
    "dec": -49.577837,
    "dist": 136.0544,
    "vmag": 5.05
  },
  {
    "name": 33054,
    "hr": 1664,
    "bf": "14    Ori",
    "pname": "",
    "ra": 5.131359,
    "dec": 8.498429,
    "dist": 64.6412,
    "vmag": 5.33
  },
  {
    "name": 33111,
    "hr": 1666,
    "bf": "67Bet Eri",
    "pname": "Cursa",
    "ra": 5.130829,
    "dec": -5.086446,
    "dist": 27.3973,
    "vmag": 2.78
  },
  {
    "name": 33254,
    "hr": 1672,
    "bf": "16    Ori",
    "pname": "",
    "ra": 5.155456,
    "dec": 9.829579,
    "dist": 54.7046,
    "vmag": 5.43
  },
  {
    "name": 33256,
    "hr": 1673,
    "bf": "68    Eri",
    "pname": "",
    "ra": 5.145472,
    "dec": -4.456207,
    "dist": 25.4582,
    "vmag": 5.11
  },
  {
    "name": 33262,
    "hr": 1674,
    "bf": "Zet Dor",
    "pname": "",
    "ra": 5.091853,
    "dec": -57.472704,
    "dist": 11.6455,
    "vmag": 4.71
  },
  {
    "name": 33276,
    "hr": 1676,
    "bf": "15    Ori",
    "pname": "",
    "ra": 5.161654,
    "dec": 15.597232,
    "dist": 165.0165,
    "vmag": 4.81
  },
  {
    "name": 33285,
    "hr": 1677,
    "bf": "Bet Men",
    "pname": "",
    "ra": 5.045279,
    "dec": -71.3143,
    "dist": 243.309,
    "vmag": 5.3
  },
  {
    "name": 33296,
    "hr": 1678,
    "bf": "14    Cam",
    "pname": "",
    "ra": 5.225353,
    "dec": 62.691132,
    "dist": 79.3021,
    "vmag": 6.49
  },
  {
    "name": 33328,
    "hr": 1679,
    "bf": "69Lam Eri",
    "pname": "",
    "ra": 5.15244,
    "dec": -8.754081,
    "dist": 248.7562,
    "vmag": 4.25
  },
  {
    "name": 33641,
    "hr": 1689,
    "bf": "11Mu  Aur",
    "pname": "",
    "ra": 5.223811,
    "dec": 38.484498,
    "dist": 46.9043,
    "vmag": 4.82
  },
  {
    "name": 33802,
    "hr": 1696,
    "bf": "3Iot Lep",
    "pname": "",
    "ra": 5.204973,
    "dec": -11.869219,
    "dist": 71.0732,
    "vmag": 4.45
  },
  {
    "name": 33856,
    "hr": 1698,
    "bf": "17Rho Ori",
    "pname": "",
    "ra": 5.221523,
    "dec": 2.861265,
    "dist": 107.2961,
    "vmag": 4.46
  },
  {
    "name": 33904,
    "hr": 1702,
    "bf": "5Mu  Lep",
    "pname": "",
    "ra": 5.215528,
    "dec": -16.205468,
    "dist": 57.0125,
    "vmag": 3.29
  },
  {
    "name": 33949,
    "hr": 1705,
    "bf": "4Kap Lep",
    "pname": "",
    "ra": 5.220522,
    "dec": -12.941291,
    "dist": 223.2143,
    "vmag": 4.36
  },
  {
    "name": 33959,
    "hr": 1706,
    "bf": "14    Aur",
    "pname": "",
    "ra": 5.256777,
    "dec": 32.6876,
    "dist": 87.5657,
    "vmag": 5.01
  },
  {
    "name": 34029,
    "hr": 1708,
    "bf": "13Alp Aur",
    "pname": "Capella",
    "ra": 5.27815,
    "dec": 45.997991,
    "dist": 13.1234,
    "vmag": 0.08
  },
  {
    "name": 34053,
    "hr": 1711,
    "bf": "108    Tau",
    "pname": "",
    "ra": 5.257682,
    "dec": 22.284858,
    "dist": 214.5923,
    "vmag": 6.26
  },
  {
    "name": 34085,
    "hr": 1713,
    "bf": "19Bet Ori",
    "pname": "Rigel",
    "ra": 5.242298,
    "dec": -8.20164,
    "dist": 264.5503,
    "vmag": 0.18
  },
  {
    "name": 34172,
    "hr": 1716,
    "bf": "Xi  Men",
    "pname": "",
    "ra": 4.980829,
    "dec": -82.470512,
    "dist": 113.1222,
    "vmag": 5.84
  },
  {
    "name": 34203,
    "hr": 1718,
    "bf": "18    Ori",
    "pname": "",
    "ra": 5.267815,
    "dec": 11.341354,
    "dist": 135.8696,
    "vmag": 5.52
  },
  {
    "name": 34233,
    "hr": 1719,
    "bf": "15    Cam",
    "pname": "",
    "ra": 5.324404,
    "dec": 58.117365,
    "dist": 240.9639,
    "vmag": 6.13
  },
  {
    "name": 34334,
    "hr": 1726,
    "bf": "16    Aur",
    "pname": "",
    "ra": 5.302935,
    "dec": 33.371613,
    "dist": 71.2251,
    "vmag": 4.54
  },
  {
    "name": 34364,
    "hr": 1728,
    "bf": "17    Aur",
    "pname": "",
    "ra": 5.305249,
    "dec": 33.767348,
    "dist": 122.1001,
    "vmag": 6.15
  },
  {
    "name": 34411,
    "hr": 1729,
    "bf": "15Lam Aur",
    "pname": "",
    "ra": 5.318995,
    "dec": 40.099051,
    "dist": 12.631,
    "vmag": 4.69
  },
  {
    "name": 34499,
    "hr": 1734,
    "bf": "18    Aur",
    "pname": "",
    "ra": 5.323261,
    "dec": 33.985421,
    "dist": 68.5871,
    "vmag": 6.49
  },
  {
    "name": 34503,
    "hr": 1735,
    "bf": "20Tau Ori",
    "pname": "",
    "ra": 5.293442,
    "dec": -6.844409,
    "dist": 151.5152,
    "vmag": 3.59
  },
  {
    "name": 34559,
    "hr": 1739,
    "bf": "109    Tau",
    "pname": "",
    "ra": 5.321278,
    "dec": 22.096494,
    "dist": 75.815,
    "vmag": 4.96
  },
  {
    "name": 34578,
    "hr": 1740,
    "bf": "19    Aur",
    "pname": "",
    "ra": 5.333589,
    "dec": 33.958054,
    "dist": 636.9427,
    "vmag": 5.05
  },
  {
    "name": 34642,
    "hr": 1743,
    "bf": "Omi Col",
    "pname": "",
    "ra": 5.291411,
    "dec": -34.895207,
    "dist": 32.4465,
    "vmag": 4.81
  },
  {
    "name": 34649,
    "hr": 1744,
    "bf": "The Dor",
    "pname": "",
    "ra": 5.229288,
    "dec": -67.185255,
    "dist": 150.6024,
    "vmag": 4.81
  },
  {
    "name": 34658,
    "hr": 1746,
    "bf": "21    Ori",
    "pname": "",
    "ra": 5.319783,
    "dec": 2.595806,
    "dist": 61.9579,
    "vmag": 5.34
  },
  {
    "name": 34759,
    "hr": 1749,
    "bf": "20Rho Aur",
    "pname": "",
    "ra": 5.363448,
    "dec": 41.804572,
    "dist": 162.3377,
    "vmag": 5.22
  },
  {
    "name": 34787,
    "hr": 1751,
    "bf": "16    Cam",
    "pname": "",
    "ra": 5.391065,
    "dec": 57.544395,
    "dist": 103.0928,
    "vmag": 5.24
  },
  {
    "name": 34816,
    "hr": 1756,
    "bf": "6Lam Lep",
    "pname": "",
    "ra": 5.326257,
    "dec": -13.176788,
    "dist": 261.0966,
    "vmag": 4.29
  },
  {
    "name": 34863,
    "hr": 1757,
    "bf": "7Nu  Lep",
    "pname": "",
    "ra": 5.333062,
    "dec": -12.315585,
    "dist": 102.2495,
    "vmag": 5.29
  },
  {
    "name": 35039,
    "hr": 1765,
    "bf": "22    Ori",
    "pname": "",
    "ra": 5.362708,
    "dec": -0.382465,
    "dist": 284.9003,
    "vmag": 4.72
  },
  {
    "name": 35072,
    "hr": 1767,
    "bf": "Zet Pic",
    "pname": "",
    "ra": 5.322813,
    "dec": -50.605967,
    "dist": 35.7143,
    "vmag": 5.44
  },
  {
    "name": 35076,
    "hr": 1768,
    "bf": "22    Aur",
    "pname": "",
    "ra": 5.389686,
    "dec": 28.936761,
    "dist": 162.6016,
    "vmag": 6.45
  },
  {
    "name": 35149,
    "hr": 1770,
    "bf": "23    Ori",
    "pname": "",
    "ra": 5.380556,
    "dec": 3.544452,
    "dist": 476.1905,
    "vmag": 4.99
  },
  {
    "name": 35186,
    "hr": 1773,
    "bf": "21Sig Aur",
    "pname": "",
    "ra": 5.410873,
    "dec": 37.385346,
    "dist": 143.2665,
    "vmag": 5.02
  },
  {
    "name": 35189,
    "hr": 1774,
    "bf": "110    Tau",
    "pname": "",
    "ra": 5.393807,
    "dec": 16.699298,
    "dist": 124.8439,
    "vmag": 6.09
  },
  {
    "name": 35296,
    "hr": 1780,
    "bf": "111    Tau",
    "pname": "",
    "ra": 5.407071,
    "dec": 17.383534,
    "dist": 14.3864,
    "vmag": 5
  },
  {
    "name": 35337,
    "hr": 1783,
    "bf": "8    Lep",
    "pname": "",
    "ra": 5.39171,
    "dec": -13.927352,
    "dist": 505.0505,
    "vmag": 5.25
  },
  {
    "name": 35369,
    "hr": 1784,
    "bf": "29    Ori",
    "pname": "",
    "ra": 5.399119,
    "dec": -7.808065,
    "dist": 48.2393,
    "vmag": 4.13
  },
  {
    "name": 35410,
    "hr": 1787,
    "bf": "27    Ori",
    "pname": "",
    "ra": 5.40803,
    "dec": -0.891328,
    "dist": 57.2082,
    "vmag": 5.07
  },
  {
    "name": 35411,
    "hr": 1788,
    "bf": "28Eta Ori",
    "pname": "",
    "ra": 5.407949,
    "dec": -2.397146,
    "dist": 299.4012,
    "vmag": 3.35
  },
  {
    "name": 35439,
    "hr": 1789,
    "bf": "25Psi1Ori",
    "pname": "",
    "ra": 5.412452,
    "dec": 1.846445,
    "dist": 318.4713,
    "vmag": 4.89
  },
  {
    "name": 35468,
    "hr": 1790,
    "bf": "24Gam Ori",
    "pname": "Bellatrix",
    "ra": 5.418851,
    "dec": 6.349702,
    "dist": 77.3994,
    "vmag": 1.64
  },
  {
    "name": 35497,
    "hr": 1791,
    "bf": "112Bet Tau",
    "pname": "Alnath",
    "ra": 5.438198,
    "dec": 28.60745,
    "dist": 41.0509,
    "vmag": 1.65
  },
  {
    "name": 35532,
    "hr": 1798,
    "bf": "113    Tau",
    "pname": "",
    "ra": 5.434923,
    "dec": 16.700161,
    "dist": 179.5332,
    "vmag": 6.23
  },
  {
    "name": 35580,
    "hr": 1801,
    "bf": "Kap Pic",
    "pname": "",
    "ra": 5.372819,
    "dec": -56.134401,
    "dist": 194.5525,
    "vmag": 6.1
  },
  {
    "name": 35583,
    "hr": 1802,
    "bf": "17    Cam",
    "pname": "",
    "ra": 5.502835,
    "dec": 63.06722,
    "dist": 288.1844,
    "vmag": 5.43
  },
  {
    "name": 35620,
    "hr": 1805,
    "bf": "24Phi Aur",
    "pname": "",
    "ra": 5.460802,
    "dec": 34.475892,
    "dist": 138.8889,
    "vmag": 5.08
  },
  {
    "name": 35671,
    "hr": 1808,
    "bf": "115    Tau",
    "pname": "",
    "ra": 5.452804,
    "dec": 17.962216,
    "dist": 168.3502,
    "vmag": 5.4
  },
  {
    "name": 35708,
    "hr": 1810,
    "bf": "114    Tau",
    "pname": "",
    "ra": 5.460579,
    "dec": 21.936965,
    "dist": 191.5709,
    "vmag": 4.88
  },
  {
    "name": 35715,
    "hr": 1811,
    "bf": "30Psi2Ori",
    "pname": "",
    "ra": 5.447286,
    "dec": 3.095674,
    "dist": 348.4321,
    "vmag": 4.59
  },
  {
    "name": 35770,
    "hr": 1814,
    "bf": "116    Tau",
    "pname": "",
    "ra": 5.462669,
    "dec": 15.874052,
    "dist": 130.039,
    "vmag": 5.52
  },
  {
    "name": 35802,
    "hr": 1816,
    "bf": "117    Tau",
    "pname": "",
    "ra": 5.467114,
    "dec": 17.23913,
    "dist": 187.9699,
    "vmag": 5.77
  },
  {
    "name": 35860,
    "hr": 1818,
    "bf": "The Pic",
    "pname": "",
    "ra": 5.412858,
    "dec": -52.316245,
    "dist": 157.2327,
    "vmag": 6.26
  },
  {
    "name": 35943,
    "hr": 1821,
    "bf": "118    Tau",
    "pname": "",
    "ra": 5.487916,
    "dec": 25.150215,
    "dist": 130.3781,
    "vmag": 5.47
  },
  {
    "name": 36066,
    "hr": 1828,
    "bf": "18    Cam",
    "pname": "",
    "ra": 5.542707,
    "dec": 57.221071,
    "dist": 42.6985,
    "vmag": 6.44
  },
  {
    "name": 36079,
    "hr": 1829,
    "bf": "9Bet Lep",
    "pname": "Nihal",
    "ra": 5.470756,
    "dec": -20.759441,
    "dist": 49.1642,
    "vmag": 2.81
  },
  {
    "name": 36167,
    "hr": 1834,
    "bf": "31    Ori",
    "pname": "",
    "ra": 5.49555,
    "dec": -1.092239,
    "dist": 155.7632,
    "vmag": 4.71
  },
  {
    "name": 36189,
    "hr": 1836,
    "bf": "Lam Dor",
    "pname": "",
    "ra": 5.438687,
    "dec": -58.91252,
    "dist": 140.4494,
    "vmag": 5.14
  },
  {
    "name": 36267,
    "hr": 1839,
    "bf": "32    Ori",
    "pname": "",
    "ra": 5.51307,
    "dec": 5.948139,
    "dist": 92.8505,
    "vmag": 4.2
  },
  {
    "name": 36351,
    "hr": 1842,
    "bf": "33    Ori",
    "pname": "",
    "ra": 5.520703,
    "dec": 3.292133,
    "dist": 348.4321,
    "vmag": 5.46
  },
  {
    "name": 36371,
    "hr": 1843,
    "bf": "25Chi Aur",
    "pname": "",
    "ra": 5.545465,
    "dec": 32.192022,
    "dist": 100000,
    "vmag": 4.71
  },
  {
    "name": 36389,
    "hr": 1845,
    "bf": "119    Tau",
    "pname": "",
    "ra": 5.536875,
    "dec": 18.594234,
    "dist": 549.4505,
    "vmag": 4.32
  },
  {
    "name": 36473,
    "hr": 1849,
    "bf": "10    Lep",
    "pname": "",
    "ra": 5.518785,
    "dec": -20.863659,
    "dist": 83.2639,
    "vmag": 5.53
  },
  {
    "name": 36486,
    "hr": 1852,
    "bf": "34Del Ori",
    "pname": "Mintaka",
    "ra": 5.533445,
    "dec": -0.299092,
    "dist": 212.3142,
    "vmag": 2.25
  },
  {
    "name": 36512,
    "hr": 1855,
    "bf": "36Ups Ori",
    "pname": "",
    "ra": 5.532183,
    "dec": -7.301537,
    "dist": 877.193,
    "vmag": 4.62
  },
  {
    "name": 36570,
    "hr": 1857,
    "bf": "19    Cam",
    "pname": "",
    "ra": 5.620852,
    "dec": 64.15469,
    "dist": 111.2347,
    "vmag": 6.15
  },
  {
    "name": 36576,
    "hr": 1858,
    "bf": "120    Tau",
    "pname": "",
    "ra": 5.558786,
    "dec": 18.540231,
    "dist": 476.1905,
    "vmag": 5.67
  },
  {
    "name": 36597,
    "hr": 1862,
    "bf": "Eps Col",
    "pname": "",
    "ra": 5.520209,
    "dec": -35.470519,
    "dist": 80.7103,
    "vmag": 3.86
  },
  {
    "name": 36653,
    "hr": 1864,
    "bf": "35    Ori",
    "pname": "",
    "ra": 5.565079,
    "dec": 14.305578,
    "dist": 136.7989,
    "vmag": 5.6
  },
  {
    "name": 36673,
    "hr": 1865,
    "bf": "11Alp Lep",
    "pname": "Arneb",
    "ra": 5.545504,
    "dec": -17.822289,
    "dist": 680.2721,
    "vmag": 2.58
  },
  {
    "name": 36777,
    "hr": 1872,
    "bf": "38    Ori",
    "pname": "",
    "ra": 5.571326,
    "dec": 3.766895,
    "dist": 84.6024,
    "vmag": 5.32
  },
  {
    "name": 36819,
    "hr": 1875,
    "bf": "121    Tau",
    "pname": "",
    "ra": 5.590869,
    "dec": 24.039589,
    "dist": 169.4915,
    "vmag": 5.37
  },
  {
    "name": 36822,
    "hr": 1876,
    "bf": "37Phi1Ori",
    "pname": "",
    "ra": 5.580344,
    "dec": 9.489579,
    "dist": 333.3333,
    "vmag": 4.39
  },
  {
    "name": 36861,
    "hr": 1879,
    "bf": "39Lam Ori",
    "pname": "",
    "ra": 5.585633,
    "dec": 9.934158,
    "dist": 336.7003,
    "vmag": 3.39
  },
  {
    "name": 37018,
    "hr": 1892,
    "bf": "42    Ori",
    "pname": "",
    "ra": 5.589768,
    "dec": -4.838358,
    "dist": 271.0027,
    "vmag": 4.58
  },
  {
    "name": 37020,
    "hr": 1893,
    "bf": "41The1Ori",
    "pname": "",
    "ra": 5.587728,
    "dec": -5.387315,
    "dist": 100000,
    "vmag": 4.98
  },
  {
    "name": 37022,
    "hr": 1895,
    "bf": "41The1Ori",
    "pname": "",
    "ra": 5.587907,
    "dec": -5.389696,
    "dist": 100000,
    "vmag": 5.13
  },
  {
    "name": 37023,
    "hr": 1896,
    "bf": "41The1Ori",
    "pname": "",
    "ra": 5.588111,
    "dec": -5.38768,
    "dist": 100000,
    "vmag": 6.71
  },
  {
    "name": 37041,
    "hr": 1897,
    "bf": "43The2Ori",
    "pname": "",
    "ra": 5.589695,
    "dec": -5.41606,
    "dist": 473.9336,
    "vmag": 4.98
  },
  {
    "name": 37043,
    "hr": 1899,
    "bf": "44Iot Ori",
    "pname": "Hatsya",
    "ra": 5.590551,
    "dec": -5.909901,
    "dist": 714.2857,
    "vmag": 2.75
  },
  {
    "name": 37077,
    "hr": 1901,
    "bf": "45    Ori",
    "pname": "",
    "ra": 5.594301,
    "dec": -4.856067,
    "dist": 110.2536,
    "vmag": 5.24
  },
  {
    "name": 37128,
    "hr": 1903,
    "bf": "46Eps Ori",
    "pname": "Alnilam",
    "ra": 5.603559,
    "dec": -1.20192,
    "dist": 606.0606,
    "vmag": 1.69
  },
  {
    "name": 37147,
    "hr": 1905,
    "bf": "122    Tau",
    "pname": "",
    "ra": 5.617704,
    "dec": 17.040324,
    "dist": 48.5909,
    "vmag": 5.53
  },
  {
    "name": 37160,
    "hr": 1907,
    "bf": "40Phi2Ori",
    "pname": "",
    "ra": 5.615108,
    "dec": 9.290673,
    "dist": 36.0231,
    "vmag": 4.09
  },
  {
    "name": 37202,
    "hr": 1910,
    "bf": "123Zet Tau",
    "pname": "",
    "ra": 5.627413,
    "dec": 21.142549,
    "dist": 136.4256,
    "vmag": 2.97
  },
  {
    "name": 37269,
    "hr": 1914,
    "bf": "26    Aur",
    "pname": "",
    "ra": 5.643913,
    "dec": 30.492412,
    "dist": 173.6111,
    "vmag": 5.4
  },
  {
    "name": 37350,
    "hr": 1922,
    "bf": "Bet Dor",
    "pname": "",
    "ra": 5.560421,
    "dec": -62.489825,
    "dist": 308.642,
    "vmag": 3.76
  },
  {
    "name": 37430,
    "hr": 1926,
    "bf": "Nu 1Col",
    "pname": "",
    "ra": 5.621251,
    "dec": -27.871362,
    "dist": 39.3701,
    "vmag": 6.15
  },
  {
    "name": 37438,
    "hr": 1928,
    "bf": "125    Tau",
    "pname": "",
    "ra": 5.662277,
    "dec": 25.897091,
    "dist": 131.0616,
    "vmag": 5.18
  },
  {
    "name": 37468,
    "hr": 1931,
    "bf": "48Sig Ori",
    "pname": "",
    "ra": 5.645769,
    "dec": -2.600069,
    "dist": 328.9474,
    "vmag": 3.77
  },
  {
    "name": 37490,
    "hr": 1934,
    "bf": "47Ome Ori",
    "pname": "",
    "ra": 5.653096,
    "dec": 4.121467,
    "dist": 423.7288,
    "vmag": 4.5
  },
  {
    "name": 37495,
    "hr": 1935,
    "bf": "Nu 2Col",
    "pname": "",
    "ra": 5.629061,
    "dec": -28.68969,
    "dist": 40.7997,
    "vmag": 5.28
  },
  {
    "name": 37507,
    "hr": 1937,
    "bf": "49    Ori",
    "pname": "",
    "ra": 5.648079,
    "dec": -7.212829,
    "dist": 44.603,
    "vmag": 4.77
  },
  {
    "name": 37601,
    "hr": 1941,
    "bf": "24    Cam",
    "pname": "",
    "ra": 5.71713,
    "dec": 56.581522,
    "dist": 59.1716,
    "vmag": 6.05
  },
  {
    "name": 37638,
    "hr": 1943,
    "bf": "23    Cam",
    "pname": "",
    "ra": 5.735682,
    "dec": 61.476536,
    "dist": 110.9878,
    "vmag": 6.17
  },
  {
    "name": 37711,
    "hr": 1946,
    "bf": "126    Tau",
    "pname": "",
    "ra": 5.688255,
    "dec": 16.534148,
    "dist": 194.9318,
    "vmag": 4.84
  },
  {
    "name": 37742,
    "hr": 1948,
    "bf": "50Zet Ori",
    "pname": "Alnitak",
    "ra": 5.679313,
    "dec": -1.942572,
    "dist": 225.7336,
    "vmag": 1.74
  },
  {
    "name": 37763,
    "hr": 1953,
    "bf": "Gam Men",
    "pname": "",
    "ra": 5.531318,
    "dec": -76.340964,
    "dist": 31.3578,
    "vmag": 5.18
  },
  {
    "name": 37795,
    "hr": 1956,
    "bf": "Alp Col",
    "pname": "Phakt",
    "ra": 5.660817,
    "dec": -34.074108,
    "dist": 80.1282,
    "vmag": 2.65
  },
  {
    "name": 37984,
    "hr": 1963,
    "bf": "51    Ori",
    "pname": "",
    "ra": 5.707953,
    "dec": 1.474629,
    "dist": 90.009,
    "vmag": 4.9
  },
  {
    "name": 38090,
    "hr": 1968,
    "bf": "12    Lep",
    "pname": "",
    "ra": 5.703877,
    "dec": -22.373715,
    "dist": 304.878,
    "vmag": 5.88
  },
  {
    "name": 38091,
    "hr": 1969,
    "bf": "26    Cam",
    "pname": "",
    "ra": 5.775106,
    "dec": 56.115575,
    "dist": 60.7903,
    "vmag": 5.93
  },
  {
    "name": 38104,
    "hr": 1971,
    "bf": "27Omi Aur",
    "pname": "",
    "ra": 5.765012,
    "dec": 49.826255,
    "dist": 126.7427,
    "vmag": 5.46
  },
  {
    "name": 38393,
    "hr": 1983,
    "bf": "13Gam Lep",
    "pname": "",
    "ra": 5.741057,
    "dec": -22.448382,
    "dist": 8.927,
    "vmag": 3.59
  },
  {
    "name": 38478,
    "hr": 1985,
    "bf": "129    Tau",
    "pname": "",
    "ra": 5.779305,
    "dec": 15.822497,
    "dist": 225.2252,
    "vmag": 6
  },
  {
    "name": 38545,
    "hr": 1989,
    "bf": "131    Tau",
    "pname": "",
    "ra": 5.786987,
    "dec": 14.488322,
    "dist": 104.1667,
    "vmag": 5.72
  },
  {
    "name": 38558,
    "hr": 1990,
    "bf": "130    Tau",
    "pname": "",
    "ra": 5.79061,
    "dec": 17.729141,
    "dist": 546.4481,
    "vmag": 5.47
  },
  {
    "name": 38602,
    "hr": 1991,
    "bf": "Iot Men",
    "pname": "",
    "ra": 5.593372,
    "dec": -78.820839,
    "dist": 261.7801,
    "vmag": 6.04
  },
  {
    "name": 38618,
    "hr": 1992,
    "bf": "29    Cam",
    "pname": "",
    "ra": 5.842745,
    "dec": 56.918938,
    "dist": 146.4129,
    "vmag": 6.53
  },
  {
    "name": 38622,
    "hr": 1993,
    "bf": "133    Tau",
    "pname": "",
    "ra": 5.795252,
    "dec": 13.899599,
    "dist": 194.1748,
    "vmag": 5.28
  },
  {
    "name": 38656,
    "hr": 1995,
    "bf": "29Tau Aur",
    "pname": "",
    "ra": 5.819567,
    "dec": 39.181071,
    "dist": 63.4115,
    "vmag": 4.51
  },
  {
    "name": 38666,
    "hr": 1996,
    "bf": "Mu  Col",
    "pname": "",
    "ra": 5.766637,
    "dec": -32.306435,
    "dist": 408.1633,
    "vmag": 5.18
  },
  {
    "name": 38678,
    "hr": 1998,
    "bf": "14Zet Lep",
    "pname": "",
    "ra": 5.782595,
    "dec": -14.82195,
    "dist": 21.6076,
    "vmag": 3.55
  },
  {
    "name": 38710,
    "hr": 1999,
    "bf": "52    Ori",
    "pname": "",
    "ra": 5.800065,
    "dec": 6.454156,
    "dist": 165.0165,
    "vmag": 5.26
  },
  {
    "name": 38751,
    "hr": 2002,
    "bf": "132    Tau",
    "pname": "",
    "ra": 5.816935,
    "dec": 24.567535,
    "dist": 111.4827,
    "vmag": 4.88
  },
  {
    "name": 38771,
    "hr": 2004,
    "bf": "53Kap Ori",
    "pname": "Saiph",
    "ra": 5.795941,
    "dec": -9.669605,
    "dist": 198.4127,
    "vmag": 2.07
  },
  {
    "name": 38831,
    "hr": 2006,
    "bf": "30    Cam",
    "pname": "",
    "ra": 5.87146,
    "dec": 58.964088,
    "dist": 148.368,
    "vmag": 6.14
  },
  {
    "name": 38899,
    "hr": 2010,
    "bf": "134    Tau",
    "pname": "",
    "ra": 5.825814,
    "dec": 12.651324,
    "dist": 76.2777,
    "vmag": 4.89
  },
  {
    "name": 38944,
    "hr": 2011,
    "bf": "31Ups Aur",
    "pname": "",
    "ra": 5.850675,
    "dec": 37.305573,
    "dist": 160.2564,
    "vmag": 4.72
  },
  {
    "name": 39003,
    "hr": 2012,
    "bf": "32Nu  Aur",
    "pname": "",
    "ra": 5.858166,
    "dec": 39.14848,
    "dist": 70.6215,
    "vmag": 3.97
  },
  {
    "name": 39014,
    "hr": 2015,
    "bf": "Del Dor",
    "pname": "",
    "ra": 5.746223,
    "dec": -65.735526,
    "dist": 45.8716,
    "vmag": 4.34
  },
  {
    "name": 39019,
    "hr": 2016,
    "bf": "135    Tau",
    "pname": "",
    "ra": 5.841363,
    "dec": 14.305608,
    "dist": 97.0874,
    "vmag": 5.54
  },
  {
    "name": 39060,
    "hr": 2020,
    "bf": "Bet Pic",
    "pname": "",
    "ra": 5.788079,
    "dec": -51.066514,
    "dist": 19.4401,
    "vmag": 3.85
  },
  {
    "name": 39091,
    "hr": 2022,
    "bf": "Pi  Men",
    "pname": "",
    "ra": 5.61916,
    "dec": -80.469122,
    "dist": 18.315,
    "vmag": 5.65
  },
  {
    "name": 39220,
    "hr": 2027,
    "bf": "31    Cam",
    "pname": "",
    "ra": 5.916063,
    "dec": 59.888367,
    "dist": 143.6782,
    "vmag": 5.2
  },
  {
    "name": 39283,
    "hr": 2029,
    "bf": "30Xi  Aur",
    "pname": "",
    "ra": 5.914107,
    "dec": 55.706947,
    "dist": 73.046,
    "vmag": 4.96
  },
  {
    "name": 39291,
    "hr": 2031,
    "bf": "55    Ori",
    "pname": "",
    "ra": 5.856107,
    "dec": -7.518003,
    "dist": 321.5434,
    "vmag": 5.36
  },
  {
    "name": 39317,
    "hr": 2033,
    "bf": "137    Tau",
    "pname": "",
    "ra": 5.872859,
    "dec": 14.171787,
    "dist": 130.039,
    "vmag": 5.6
  },
  {
    "name": 39357,
    "hr": 2034,
    "bf": "136    Tau",
    "pname": "",
    "ra": 5.88879,
    "dec": 27.612262,
    "dist": 129.7017,
    "vmag": 4.56
  },
  {
    "name": 39364,
    "hr": 2035,
    "bf": "15Del Lep",
    "pname": "",
    "ra": 5.855357,
    "dec": -20.879089,
    "dist": 34.8675,
    "vmag": 3.76
  },
  {
    "name": 39400,
    "hr": 2037,
    "bf": "56    Ori",
    "pname": "",
    "ra": 5.874011,
    "dec": 1.855134,
    "dist": 386.1004,
    "vmag": 4.76
  },
  {
    "name": 39425,
    "hr": 2040,
    "bf": "Bet Col",
    "pname": "",
    "ra": 5.849329,
    "dec": -35.768309,
    "dist": 26.7308,
    "vmag": 3.12
  },
  {
    "name": 39523,
    "hr": 2042,
    "bf": "Gam Pic",
    "pname": "",
    "ra": 5.830451,
    "dec": -56.166663,
    "dist": 54.2005,
    "vmag": 4.5
  },
  {
    "name": 39587,
    "hr": 2047,
    "bf": "54Chi1Ori",
    "pname": "",
    "ra": 5.906386,
    "dec": 20.276174,
    "dist": 8.6633,
    "vmag": 4.39
  },
  {
    "name": 39698,
    "hr": 2052,
    "bf": "57    Ori",
    "pname": "",
    "ra": 5.915746,
    "dec": 19.749614,
    "dist": 558.6592,
    "vmag": 5.92
  },
  {
    "name": 39764,
    "hr": 2056,
    "bf": "Lam Col",
    "pname": "",
    "ra": 5.885245,
    "dec": -33.801361,
    "dist": 102.5641,
    "vmag": 4.88
  },
  {
    "name": 39801,
    "hr": 2061,
    "bf": "58Alp Ori",
    "pname": "Betelgeuse",
    "ra": 5.919529,
    "dec": 7.407063,
    "dist": 152.6718,
    "vmag": 0.45
  },
  {
    "name": 39810,
    "hr": 2062,
    "bf": "Lam Men",
    "pname": "",
    "ra": 5.796706,
    "dec": -72.70225,
    "dist": 138.6963,
    "vmag": 6.54
  },
  {
    "name": 39844,
    "hr": 2064,
    "bf": "Eps Dor",
    "pname": "",
    "ra": 5.831539,
    "dec": -66.901187,
    "dist": 176.0563,
    "vmag": 5.1
  },
  {
    "name": 40035,
    "hr": 2077,
    "bf": "33Del Aur",
    "pname": "",
    "ra": 5.992111,
    "dec": 54.284656,
    "dist": 38.6399,
    "vmag": 3.72
  },
  {
    "name": 40111,
    "hr": 2084,
    "bf": "139    Tau",
    "pname": "",
    "ra": 5.966571,
    "dec": 25.953912,
    "dist": 476.1905,
    "vmag": 4.81
  },
  {
    "name": 40136,
    "hr": 2085,
    "bf": "16Eta Lep",
    "pname": "",
    "ra": 5.940082,
    "dec": -14.1677,
    "dist": 14.8787,
    "vmag": 3.71
  },
  {
    "name": 40176,
    "hr": 2087,
    "bf": "Xi  Col",
    "pname": "",
    "ra": 5.924975,
    "dec": -37.120668,
    "dist": 102.0408,
    "vmag": 4.97
  },
  {
    "name": 40183,
    "hr": 2088,
    "bf": "34Bet Aur",
    "pname": "Menkalinan",
    "ra": 5.992149,
    "dec": 44.947433,
    "dist": 24.8694,
    "vmag": 1.9
  },
  {
    "name": 40239,
    "hr": 2091,
    "bf": "35Pi  Aur",
    "pname": "",
    "ra": 5.998917,
    "dec": 45.936736,
    "dist": 230.4147,
    "vmag": 4.3
  },
  {
    "name": 40248,
    "hr": 2092,
    "bf": "Sig Col",
    "pname": "",
    "ra": 5.939151,
    "dec": -31.38244,
    "dist": 510.2041,
    "vmag": 5.52
  },
  {
    "name": 40312,
    "hr": 2095,
    "bf": "37The Aur",
    "pname": "",
    "ra": 5.995351,
    "dec": 37.212585,
    "dist": 50.7614,
    "vmag": 2.65
  },
  {
    "name": 40372,
    "hr": 2100,
    "bf": "59    Ori",
    "pname": "",
    "ra": 5.973456,
    "dec": 1.837108,
    "dist": 111.7318,
    "vmag": 5.89
  },
  {
    "name": 40394,
    "hr": 2101,
    "bf": "36    Aur",
    "pname": "",
    "ra": 6.016267,
    "dec": 47.901923,
    "dist": 354.6099,
    "vmag": 5.71
  },
  {
    "name": 40446,
    "hr": 2103,
    "bf": "60    Ori",
    "pname": "",
    "ra": 5.980437,
    "dec": 0.552979,
    "dist": 136.612,
    "vmag": 5.21
  },
  {
    "name": 40494,
    "hr": 2106,
    "bf": "Gam Col",
    "pname": "",
    "ra": 5.958947,
    "dec": -35.28328,
    "dist": 266.6667,
    "vmag": 4.36
  },
  {
    "name": 40535,
    "hr": 2107,
    "bf": "1    Mon",
    "pname": "",
    "ra": 5.983633,
    "dec": -9.382223,
    "dist": 90.3342,
    "vmag": 6.15
  },
  {
    "name": 40536,
    "hr": 2108,
    "bf": "2    Mon",
    "pname": "",
    "ra": 5.984531,
    "dec": -9.55825,
    "dist": 87.7963,
    "vmag": 5.04
  },
  {
    "name": 40801,
    "hr": 2119,
    "bf": "38    Aur",
    "pname": "",
    "ra": 6.054982,
    "dec": 42.911564,
    "dist": 65.2316,
    "vmag": 6.08
  },
  {
    "name": 40808,
    "hr": 2120,
    "bf": "Eta Col",
    "pname": "",
    "ra": 5.985778,
    "dec": -42.815135,
    "dist": 144.7178,
    "vmag": 3.96
  },
  {
    "name": 40932,
    "hr": 2124,
    "bf": "61Mu  Ori",
    "pname": "",
    "ra": 6.039722,
    "dec": 9.647276,
    "dist": 47.5059,
    "vmag": 4.12
  },
  {
    "name": 40953,
    "hr": 2125,
    "bf": "Kap Men",
    "pname": "",
    "ra": 5.837999,
    "dec": -79.361362,
    "dist": 87.4126,
    "vmag": 5.46
  },
  {
    "name": 40967,
    "hr": 2128,
    "bf": "3    Mon",
    "pname": "",
    "ra": 6.030673,
    "dec": -10.59793,
    "dist": 240.3846,
    "vmag": 4.92
  },
  {
    "name": 41040,
    "hr": 2130,
    "bf": "64    Ori",
    "pname": "",
    "ra": 6.057602,
    "dec": 19.690561,
    "dist": 220.2643,
    "vmag": 5.14
  },
  {
    "name": 41074,
    "hr": 2132,
    "bf": "39    Aur",
    "pname": "",
    "ra": 6.084276,
    "dec": 42.981635,
    "dist": 49.7265,
    "vmag": 5.9
  },
  {
    "name": 41116,
    "hr": 2134,
    "bf": "1    Gem",
    "pname": "",
    "ra": 6.068671,
    "dec": 23.263341,
    "dist": 47.5511,
    "vmag": 4.16
  },
  {
    "name": 41117,
    "hr": 2135,
    "bf": "62Chi2Ori",
    "pname": "",
    "ra": 6.065329,
    "dec": 20.138452,
    "dist": 552.4862,
    "vmag": 4.64
  },
  {
    "name": 41357,
    "hr": 2143,
    "bf": "40    Aur",
    "pname": "",
    "ra": 6.109749,
    "dec": 38.482644,
    "dist": 104.4932,
    "vmag": 5.35
  },
  {
    "name": 41361,
    "hr": 2144,
    "bf": "63    Ori",
    "pname": "",
    "ra": 6.082829,
    "dec": 5.41997,
    "dist": 401.6064,
    "vmag": 5.67
  },
  {
    "name": 41380,
    "hr": 2145,
    "bf": "66    Ori",
    "pname": "",
    "ra": 6.082878,
    "dec": 4.158671,
    "dist": 100000,
    "vmag": 5.63
  },
  {
    "name": 41511,
    "hr": 2148,
    "bf": "17    Lep",
    "pname": "",
    "ra": 6.083091,
    "dec": -16.484435,
    "dist": 278.5515,
    "vmag": 4.92
  },
  {
    "name": 41597,
    "hr": 2152,
    "bf": "37    Cam",
    "pname": "",
    "ra": 6.16639,
    "dec": 58.935694,
    "dist": 116.8224,
    "vmag": 5.35
  },
  {
    "name": 41695,
    "hr": 2155,
    "bf": "18The Lep",
    "pname": "",
    "ra": 6.10259,
    "dec": -14.935254,
    "dist": 52.9661,
    "vmag": 4.67
  },
  {
    "name": 41753,
    "hr": 2159,
    "bf": "67Nu  Ori",
    "pname": "",
    "ra": 6.126201,
    "dec": 14.768472,
    "dist": 158.2278,
    "vmag": 4.42
  },
  {
    "name": 41927,
    "hr": 2165,
    "bf": "36    Cam",
    "pname": "",
    "ra": 6.214182,
    "dec": 65.718422,
    "dist": 219.2982,
    "vmag": 5.36
  },
  {
    "name": 42042,
    "hr": 2168,
    "bf": "19    Lep",
    "pname": "",
    "ra": 6.128233,
    "dec": -19.165866,
    "dist": 257.0694,
    "vmag": 5.28
  },
  {
    "name": 42078,
    "hr": 2171,
    "bf": "Pi 1Col",
    "pname": "",
    "ra": 6.111402,
    "dec": -42.298804,
    "dist": 83.4028,
    "vmag": 6.15
  },
  {
    "name": 42087,
    "hr": 2173,
    "bf": "3    Gem",
    "pname": "",
    "ra": 6.162218,
    "dec": 23.113466,
    "dist": 100000,
    "vmag": 5.75
  },
  {
    "name": 42126,
    "hr": 2175,
    "bf": "41    Aur",
    "pname": "",
    "ra": 6.193496,
    "dec": 48.710989,
    "dist": 102.459,
    "vmag": 5.78
  },
  {
    "name": 42167,
    "hr": 2177,
    "bf": "The Col",
    "pname": "",
    "ra": 6.125453,
    "dec": -37.25292,
    "dist": 221.2389,
    "vmag": 5
  },
  {
    "name": 42303,
    "hr": 2181,
    "bf": "Pi 2Col",
    "pname": "",
    "ra": 6.13135,
    "dec": -42.154043,
    "dist": 74.4602,
    "vmag": 5.5
  },
  {
    "name": 42398,
    "hr": 2185,
    "bf": "5    Gem",
    "pname": "",
    "ra": 6.192307,
    "dec": 24.420253,
    "dist": 174.216,
    "vmag": 5.83
  },
  {
    "name": 42509,
    "hr": 2193,
    "bf": "68    Ori",
    "pname": "",
    "ra": 6.200372,
    "dec": 19.790543,
    "dist": 255.102,
    "vmag": 5.76
  },
  {
    "name": 42525,
    "hr": 2194,
    "bf": "Eta1Dor",
    "pname": "",
    "ra": 6.102603,
    "dec": -66.039621,
    "dist": 98.6193,
    "vmag": 5.72
  },
  {
    "name": 42543,
    "hr": 2197,
    "bf": "6    Gem",
    "pname": "",
    "ra": 6.205305,
    "dec": 22.908514,
    "dist": 100000,
    "vmag": 6.51
  },
  {
    "name": 42545,
    "hr": 2198,
    "bf": "69    Ori",
    "pname": "",
    "ra": 6.200911,
    "dec": 16.130406,
    "dist": 162.0746,
    "vmag": 4.95
  },
  {
    "name": 42560,
    "hr": 2199,
    "bf": "70Xi  Ori",
    "pname": "",
    "ra": 6.198999,
    "dec": 14.208765,
    "dist": 186.2197,
    "vmag": 4.45
  },
  {
    "name": 42633,
    "hr": 2201,
    "bf": "40    Cam",
    "pname": "",
    "ra": 6.261257,
    "dec": 59.998975,
    "dist": 150.8296,
    "vmag": 5.37
  },
  {
    "name": 42933,
    "hr": 2212,
    "bf": "Del Pic",
    "pname": "",
    "ra": 6.171642,
    "dec": -54.968645,
    "dist": 398.4064,
    "vmag": 4.72
  },
  {
    "name": 42973,
    "hr": 2215,
    "bf": "1    Lyn",
    "pname": "",
    "ra": 6.298563,
    "dec": 61.515286,
    "dist": 195.6947,
    "vmag": 5.01
  },
  {
    "name": 42995,
    "hr": 2216,
    "bf": "7Eta Gem",
    "pname": "",
    "ra": 6.247961,
    "dec": 22.506799,
    "dist": 117.9245,
    "vmag": 3.31
  },
  {
    "name": 43039,
    "hr": 2219,
    "bf": "44Kap Aur",
    "pname": "",
    "ra": 6.256304,
    "dec": 29.498076,
    "dist": 54.2594,
    "vmag": 4.32
  },
  {
    "name": 43042,
    "hr": 2220,
    "bf": "71    Ori",
    "pname": "",
    "ra": 6.247467,
    "dec": 19.156448,
    "dist": 20.816,
    "vmag": 5.2
  },
  {
    "name": 43107,
    "hr": 2221,
    "bf": "Nu  Dor",
    "pname": "",
    "ra": 6.145643,
    "dec": -68.843409,
    "dist": 91.9118,
    "vmag": 5.06
  },
  {
    "name": 43153,
    "hr": 2223,
    "bf": "72    Ori",
    "pname": "",
    "ra": 6.25698,
    "dec": 16.143175,
    "dist": 160.2564,
    "vmag": 5.34
  },
  {
    "name": 43232,
    "hr": 2227,
    "bf": "5Gam Mon",
    "pname": "",
    "ra": 6.247592,
    "dec": -6.274776,
    "dist": 152.6718,
    "vmag": 3.99
  },
  {
    "name": 43244,
    "hr": 2228,
    "bf": "42    Aur",
    "pname": "",
    "ra": 6.29296,
    "dec": 46.423953,
    "dist": 71.1744,
    "vmag": 6.53
  },
  {
    "name": 43247,
    "hr": 2229,
    "bf": "73    Ori",
    "pname": "",
    "ra": 6.26249,
    "dec": 12.551067,
    "dist": 357.1429,
    "vmag": 5.44
  },
  {
    "name": 43261,
    "hr": 2230,
    "bf": "8    Gem",
    "pname": "",
    "ra": 6.271957,
    "dec": 23.970027,
    "dist": 136.9863,
    "vmag": 6.09
  },
  {
    "name": 43378,
    "hr": 2238,
    "bf": "2    Lyn",
    "pname": "",
    "ra": 6.327052,
    "dec": 59.010964,
    "dist": 48.0077,
    "vmag": 4.44
  },
  {
    "name": 43380,
    "hr": 2239,
    "bf": "43    Aur",
    "pname": "",
    "ra": 6.304684,
    "dec": 46.360443,
    "dist": 121.2121,
    "vmag": 6.33
  },
  {
    "name": 43384,
    "hr": 2240,
    "bf": "9    Gem",
    "pname": "",
    "ra": 6.282974,
    "dec": 23.740909,
    "dist": 100000,
    "vmag": 6.24
  },
  {
    "name": 43386,
    "hr": 2241,
    "bf": "74    Ori",
    "pname": "",
    "ra": 6.274061,
    "dec": 12.272163,
    "dist": 19.2493,
    "vmag": 5.04
  },
  {
    "name": 43455,
    "hr": 2245,
    "bf": "Eta2Dor",
    "pname": "",
    "ra": 6.1875,
    "dec": -65.589417,
    "dist": 196.4637,
    "vmag": 5.01
  },
  {
    "name": 43525,
    "hr": 2247,
    "bf": "75    Ori",
    "pname": "",
    "ra": 6.285172,
    "dec": 9.94239,
    "dist": 69.1085,
    "vmag": 5.39
  },
  {
    "name": 43760,
    "hr": 2255,
    "bf": "6    Mon",
    "pname": "",
    "ra": 6.29309,
    "dec": -10.724988,
    "dist": 425.5319,
    "vmag": 6.76
  },
  {
    "name": 43785,
    "hr": 2256,
    "bf": "Kap Col",
    "pname": "",
    "ra": 6.275871,
    "dec": -35.140519,
    "dist": 55.9597,
    "vmag": 4.37
  },
  {
    "name": 43812,
    "hr": 2257,
    "bf": "4    Lyn",
    "pname": "",
    "ra": 6.367654,
    "dec": 59.372099,
    "dist": 152.207,
    "vmag": 6.05
  },
  {
    "name": 43834,
    "hr": 2261,
    "bf": "Alp Men",
    "pname": "",
    "ra": 6.170632,
    "dec": -74.753045,
    "dist": 10.1978,
    "vmag": 5.08
  },
  {
    "name": 43905,
    "hr": 2264,
    "bf": "45    Aur",
    "pname": "",
    "ra": 6.362811,
    "dec": 53.452179,
    "dist": 59.2066,
    "vmag": 5.34
  },
  {
    "name": 44112,
    "hr": 2273,
    "bf": "7    Mon",
    "pname": "",
    "ra": 6.328555,
    "dec": -7.822908,
    "dist": 267.3797,
    "vmag": 5.27
  },
  {
    "name": 44402,
    "hr": 2282,
    "bf": "1Zet CMa",
    "pname": "",
    "ra": 6.338553,
    "dec": -30.063367,
    "dist": 111.1111,
    "vmag": 3.02
  },
  {
    "name": 44478,
    "hr": 2286,
    "bf": "13Mu  Gem",
    "pname": "",
    "ra": 6.382673,
    "dec": 22.513586,
    "dist": 71.0227,
    "vmag": 2.87
  },
  {
    "name": 44537,
    "hr": 2289,
    "bf": "46Psi1Aur",
    "pname": "",
    "ra": 6.414973,
    "dec": 49.287893,
    "dist": 100000,
    "vmag": 4.92
  },
  {
    "name": 44708,
    "hr": 2293,
    "bf": "5    Lyn",
    "pname": "",
    "ra": 6.44691,
    "dec": 58.417409,
    "dist": 191.9386,
    "vmag": 5.21
  },
  {
    "name": 44743,
    "hr": 2294,
    "bf": "2Bet CMa",
    "pname": "Mirzam",
    "ra": 6.378329,
    "dec": -17.955918,
    "dist": 151.0574,
    "vmag": 1.98
  },
  {
    "name": 44762,
    "hr": 2296,
    "bf": "Del Col",
    "pname": "",
    "ra": 6.368564,
    "dec": -33.4364,
    "dist": 71.736,
    "vmag": 3.85
  },
  {
    "name": 44769,
    "hr": 2298,
    "bf": "8Eps Mon",
    "pname": "",
    "ra": 6.396135,
    "dec": 4.592865,
    "dist": 37.4953,
    "vmag": 4.39
  },
  {
    "name": 45229,
    "hr": 2320,
    "bf": "Nu  Pic",
    "pname": "",
    "ra": 6.382179,
    "dec": -56.369969,
    "dist": 48.2625,
    "vmag": 5.6
  },
  {
    "name": 45348,
    "hr": 2326,
    "bf": "Alp Car",
    "pname": "Canopus",
    "ra": 6.399195,
    "dec": -52.69566,
    "dist": 94.7867,
    "vmag": -0.62
  },
  {
    "name": 45394,
    "hr": 2330,
    "bf": "16    Gem",
    "pname": "",
    "ra": 6.465742,
    "dec": 20.49632,
    "dist": 142.4501,
    "vmag": 6.22
  },
  {
    "name": 45410,
    "hr": 2331,
    "bf": "6    Lyn",
    "pname": "",
    "ra": 6.51309,
    "dec": 58.162633,
    "dist": 55.8036,
    "vmag": 5.86
  },
  {
    "name": 45412,
    "hr": 2332,
    "bf": "48    Aur",
    "pname": "",
    "ra": 6.476136,
    "dec": 30.493034,
    "dist": 100000,
    "vmag": 5.75
  },
  {
    "name": 45466,
    "hr": 2338,
    "bf": "47    Aur",
    "pname": "",
    "ra": 6.500827,
    "dec": 46.685554,
    "dist": 187.2659,
    "vmag": 5.88
  },
  {
    "name": 45542,
    "hr": 2343,
    "bf": "18Nu  Gem",
    "pname": "",
    "ra": 6.482719,
    "dec": 20.212133,
    "dist": 166.9449,
    "vmag": 4.13
  },
  {
    "name": 45546,
    "hr": 2344,
    "bf": "10    Mon",
    "pname": "",
    "ra": 6.465992,
    "dec": -4.762154,
    "dist": 333.3333,
    "vmag": 5.06
  },
  {
    "name": 45669,
    "hr": 2352,
    "bf": "Pi 1Dor",
    "pname": "",
    "ra": 6.37729,
    "dec": -69.984043,
    "dist": 189.7533,
    "vmag": 5.56
  },
  {
    "name": 45725,
    "hr": 2356,
    "bf": "11Bet Mon",
    "pname": "",
    "ra": 6.480297,
    "dec": -7.033062,
    "dist": 207.4689,
    "vmag": 3.76
  },
  {
    "name": 45813,
    "hr": 2361,
    "bf": "Lam CMa",
    "pname": "",
    "ra": 6.469503,
    "dec": -32.58007,
    "dist": 129.8701,
    "vmag": 4.47
  },
  {
    "name": 46031,
    "hr": 2371,
    "bf": "19    Gem",
    "pname": "",
    "ra": 6.527065,
    "dec": 15.903501,
    "dist": 134.9528,
    "vmag": 6.38
  },
  {
    "name": 46101,
    "hr": 2376,
    "bf": "7    Lyn",
    "pname": "",
    "ra": 6.575777,
    "dec": 55.353042,
    "dist": 295.858,
    "vmag": 6.45
  },
  {
    "name": 46116,
    "hr": 2377,
    "bf": "Pi 2Dor",
    "pname": "",
    "ra": 6.424623,
    "dec": -69.690299,
    "dist": 82.7815,
    "vmag": 5.37
  },
  {
    "name": 46241,
    "hr": 2382,
    "bf": "12    Mon",
    "pname": "",
    "ra": 6.538668,
    "dec": 4.855999,
    "dist": 172.4138,
    "vmag": 5.88
  },
  {
    "name": 46300,
    "hr": 2385,
    "bf": "13    Mon",
    "pname": "",
    "ra": 6.548396,
    "dec": 7.332965,
    "dist": 100000,
    "vmag": 4.47
  },
  {
    "name": 46328,
    "hr": 2387,
    "bf": "4Xi 1CMa",
    "pname": "",
    "ra": 6.530935,
    "dec": -23.418422,
    "dist": 423.7288,
    "vmag": 4.34
  },
  {
    "name": 46480,
    "hr": 2394,
    "bf": "8    Lyn",
    "pname": "",
    "ra": 6.6282,
    "dec": 61.481233,
    "dist": 52.0562,
    "vmag": 5.94
  },
  {
    "name": 46553,
    "hr": 2398,
    "bf": "49    Aur",
    "pname": "",
    "ra": 6.586684,
    "dec": 28.022314,
    "dist": 113.3787,
    "vmag": 5.26
  },
  {
    "name": 46590,
    "hr": 2402,
    "bf": "11    Lyn",
    "pname": "",
    "ra": 6.627332,
    "dec": 56.857531,
    "dist": 101.7294,
    "vmag": 5.87
  },
  {
    "name": 46642,
    "hr": 2404,
    "bf": "14    Mon",
    "pname": "",
    "ra": 6.579533,
    "dec": 7.572482,
    "dist": 115.4734,
    "vmag": 6.44
  },
  {
    "name": 46860,
    "hr": 2412,
    "bf": "Mu  Pic",
    "pname": "",
    "ra": 6.532864,
    "dec": -58.753835,
    "dist": 232.0186,
    "vmag": 5.69
  },
  {
    "name": 46933,
    "hr": 2414,
    "bf": "5Xi 2CMa",
    "pname": "",
    "ra": 6.584274,
    "dec": -22.964793,
    "dist": 135.318,
    "vmag": 4.54
  },
  {
    "name": 47070,
    "hr": 2419,
    "bf": "51    Aur",
    "pname": "",
    "ra": 6.644317,
    "dec": 39.390854,
    "dist": 149.7006,
    "vmag": 5.7
  },
  {
    "name": 47100,
    "hr": 2420,
    "bf": "52Psi3Aur",
    "pname": "",
    "ra": 6.646995,
    "dec": 39.902559,
    "dist": 420.1681,
    "vmag": 5.34
  },
  {
    "name": 47105,
    "hr": 2421,
    "bf": "24Gam Gem",
    "pname": "Alhena",
    "ra": 6.628528,
    "dec": 16.399252,
    "dist": 33.5121,
    "vmag": 1.93
  },
  {
    "name": 47138,
    "hr": 2423,
    "bf": "6Nu 1CMa",
    "pname": "",
    "ra": 6.606347,
    "dec": -18.659904,
    "dist": 107.5269,
    "vmag": 5.71
  },
  {
    "name": 47152,
    "hr": 2425,
    "bf": "53    Aur",
    "pname": "",
    "ra": 6.639725,
    "dec": 28.984354,
    "dist": 106.2699,
    "vmag": 5.76
  },
  {
    "name": 47174,
    "hr": 2427,
    "bf": "50Psi2Aur",
    "pname": "",
    "ra": 6.655507,
    "dec": 42.488877,
    "dist": 127.551,
    "vmag": 4.8
  },
  {
    "name": 47205,
    "hr": 2429,
    "bf": "7Nu 2CMa",
    "pname": "",
    "ra": 6.611399,
    "dec": -19.255879,
    "dist": 19.7511,
    "vmag": 3.95
  },
  {
    "name": 47395,
    "hr": 2438,
    "bf": "54    Aur",
    "pname": "",
    "ra": 6.6592,
    "dec": 28.263134,
    "dist": 258.3979,
    "vmag": 6.02
  },
  {
    "name": 47442,
    "hr": 2443,
    "bf": "8Nu 3CMa",
    "pname": "",
    "ra": 6.631506,
    "dec": -18.237478,
    "dist": 129.199,
    "vmag": 4.42
  },
  {
    "name": 47670,
    "hr": 2451,
    "bf": "Nu  Pup",
    "pname": "",
    "ra": 6.629353,
    "dec": -43.195934,
    "dist": 113.8952,
    "vmag": 3.17
  },
  {
    "name": 47731,
    "hr": 2453,
    "bf": "25    Gem",
    "pname": "",
    "ra": 6.689138,
    "dec": 28.196638,
    "dist": 632.9114,
    "vmag": 6.45
  },
  {
    "name": 47839,
    "hr": 2456,
    "bf": "15    Mon",
    "pname": "",
    "ra": 6.682961,
    "dec": 9.895754,
    "dist": 281.6901,
    "vmag": 4.66
  },
  {
    "name": 47914,
    "hr": 2459,
    "bf": "55Psi4Aur",
    "pname": "",
    "ra": 6.718051,
    "dec": 44.52445,
    "dist": 99.2063,
    "vmag": 5.04
  },
  {
    "name": 48097,
    "hr": 2466,
    "bf": "26    Gem",
    "pname": "",
    "ra": 6.706757,
    "dec": 17.645303,
    "dist": 43.63,
    "vmag": 5.2
  },
  {
    "name": 48250,
    "hr": 2470,
    "bf": "12    Lyn",
    "pname": "",
    "ra": 6.770595,
    "dec": 59.44167,
    "dist": 65.8328,
    "vmag": 4.86
  },
  {
    "name": 48329,
    "hr": 2473,
    "bf": "27Eps Gem",
    "pname": "",
    "ra": 6.732202,
    "dec": 25.131124,
    "dist": 259.0674,
    "vmag": 3.06
  },
  {
    "name": 48432,
    "hr": 2477,
    "bf": "13    Lyn",
    "pname": "",
    "ra": 6.780417,
    "dec": 57.169176,
    "dist": 64.6831,
    "vmag": 5.34
  },
  {
    "name": 48433,
    "hr": 2478,
    "bf": "30    Gem",
    "pname": "",
    "ra": 6.733137,
    "dec": 13.228017,
    "dist": 88.574,
    "vmag": 4.49
  },
  {
    "name": 48450,
    "hr": 2480,
    "bf": "28    Gem",
    "pname": "",
    "ra": 6.745961,
    "dec": 28.970932,
    "dist": 145.9854,
    "vmag": 5.42
  },
  {
    "name": 48682,
    "hr": 2483,
    "bf": "56Psi5Aur",
    "pname": "",
    "ra": 6.778983,
    "dec": 43.577427,
    "dist": 16.7168,
    "vmag": 5.24
  },
  {
    "name": 48737,
    "hr": 2484,
    "bf": "31Xi  Gem",
    "pname": "",
    "ra": 6.754824,
    "dec": 12.895591,
    "dist": 17.9986,
    "vmag": 3.35
  },
  {
    "name": 48781,
    "hr": 2487,
    "bf": "57Psi6Aur",
    "pname": "",
    "ra": 6.794327,
    "dec": 48.789476,
    "dist": 110.4972,
    "vmag": 5.22
  },
  {
    "name": 48843,
    "hr": 2489,
    "bf": "32    Gem",
    "pname": "",
    "ra": 6.765055,
    "dec": 12.693561,
    "dist": 877.193,
    "vmag": 6.47
  },
  {
    "name": 48879,
    "hr": 2490,
    "bf": "42    Cam",
    "pname": "",
    "ra": 6.849191,
    "dec": 67.571934,
    "dist": 283.2861,
    "vmag": 5.14
  },
  {
    "name": 48915,
    "hr": 2491,
    "bf": "9Alp CMa",
    "pname": "Sirius",
    "ra": 6.752481,
    "dec": -16.716116,
    "dist": 2.6371,
    "vmag": -1.44
  },
  {
    "name": 48917,
    "hr": 2492,
    "bf": "10    CMa",
    "pname": "",
    "ra": 6.741241,
    "dec": -31.070523,
    "dist": 100000,
    "vmag": 5.23
  },
  {
    "name": 48977,
    "hr": 2494,
    "bf": "16    Mon",
    "pname": "",
    "ra": 6.775671,
    "dec": 8.587153,
    "dist": 263.1579,
    "vmag": 5.92
  },
  {
    "name": 49161,
    "hr": 2503,
    "bf": "17    Mon",
    "pname": "",
    "ra": 6.788842,
    "dec": 8.037254,
    "dist": 151.0574,
    "vmag": 4.77
  },
  {
    "name": 49229,
    "hr": 2504,
    "bf": "11    CMa",
    "pname": "",
    "ra": 6.780859,
    "dec": -14.425971,
    "dist": 243.9024,
    "vmag": 5.28
  },
  {
    "name": 49293,
    "hr": 2506,
    "bf": "18    Mon",
    "pname": "",
    "ra": 6.79768,
    "dec": 2.412159,
    "dist": 112.8668,
    "vmag": 4.48
  },
  {
    "name": 49333,
    "hr": 2509,
    "bf": "12    CMa",
    "pname": "",
    "ra": 6.783745,
    "dec": -21.015402,
    "dist": 241.5459,
    "vmag": 6.07
  },
  {
    "name": 49340,
    "hr": 2511,
    "bf": "43    Cam",
    "pname": "",
    "ra": 6.895068,
    "dec": 68.888309,
    "dist": 300.3003,
    "vmag": 5.11
  },
  {
    "name": 49520,
    "hr": 2516,
    "bf": "58Psi7Aur",
    "pname": "",
    "ra": 6.846097,
    "dec": 41.78123,
    "dist": 116.144,
    "vmag": 4.99
  },
  {
    "name": 49606,
    "hr": 2519,
    "bf": "33    Gem",
    "pname": "",
    "ra": 6.83051,
    "dec": 16.202888,
    "dist": 263.1579,
    "vmag": 5.87
  },
  {
    "name": 49618,
    "hr": 2520,
    "bf": "14    Lyn",
    "pname": "",
    "ra": 6.884738,
    "dec": 59.448543,
    "dist": 149.2537,
    "vmag": 5.34
  },
  {
    "name": 49738,
    "hr": 2525,
    "bf": "35    Gem",
    "pname": "",
    "ra": 6.840416,
    "dec": 13.413177,
    "dist": 540.5405,
    "vmag": 5.68
  },
  {
    "name": 49908,
    "hr": 2529,
    "bf": "36    Gem",
    "pname": "",
    "ra": 6.859179,
    "dec": 21.761148,
    "dist": 150.6024,
    "vmag": 5.28
  },
  {
    "name": 50013,
    "hr": 2538,
    "bf": "13Kap CMa",
    "pname": "",
    "ra": 6.830683,
    "dec": -32.508478,
    "dist": 202.0202,
    "vmag": 3.5
  },
  {
    "name": 50018,
    "hr": 2539,
    "bf": "59    Aur",
    "pname": "",
    "ra": 6.883725,
    "dec": 38.869157,
    "dist": 150.6024,
    "vmag": 6.1
  },
  {
    "name": 50019,
    "hr": 2540,
    "bf": "34The Gem",
    "pname": "",
    "ra": 6.879816,
    "dec": 33.961254,
    "dist": 57.971,
    "vmag": 3.6
  },
  {
    "name": 50037,
    "hr": 2541,
    "bf": "60    Aur",
    "pname": "",
    "ra": 6.887054,
    "dec": 38.438013,
    "dist": 69.541,
    "vmag": 6.32
  },
  {
    "name": 50204,
    "hr": 2547,
    "bf": "61Psi8Aur",
    "pname": "",
    "ra": 6.899187,
    "dec": 38.505018,
    "dist": 229.3578,
    "vmag": 6.46
  },
  {
    "name": 50241,
    "hr": 2550,
    "bf": "Alp Pic",
    "pname": "",
    "ra": 6.803194,
    "dec": -61.941391,
    "dist": 29.6033,
    "vmag": 3.24
  },
  {
    "name": 50310,
    "hr": 2553,
    "bf": "Tau Pup",
    "pname": "",
    "ra": 6.832266,
    "dec": -50.61456,
    "dist": 55.8036,
    "vmag": 2.94
  },
  {
    "name": 50506,
    "hr": 2559,
    "bf": "Zet Men",
    "pname": "",
    "ra": 6.667474,
    "dec": -80.813593,
    "dist": 126.9036,
    "vmag": 5.61
  },
  {
    "name": 50522,
    "hr": 2560,
    "bf": "15    Lyn",
    "pname": "",
    "ra": 6.954612,
    "dec": 58.422759,
    "dist": 54.6747,
    "vmag": 4.35
  },
  {
    "name": 50635,
    "hr": 2564,
    "bf": "38    Gem",
    "pname": "",
    "ra": 6.910732,
    "dec": 13.177827,
    "dist": 25.6279,
    "vmag": 4.73
  },
  {
    "name": 50658,
    "hr": 2568,
    "bf": "Psi9Aur",
    "pname": "",
    "ra": 6.942238,
    "dec": 46.273998,
    "dist": 386.1004,
    "vmag": 5.85
  },
  {
    "name": 50692,
    "hr": 2569,
    "bf": "37    Gem",
    "pname": "",
    "ra": 6.921853,
    "dec": 25.375697,
    "dist": 17.2414,
    "vmag": 5.74
  },
  {
    "name": 50707,
    "hr": 2571,
    "bf": "15    CMa",
    "pname": "",
    "ra": 6.892474,
    "dec": -20.224254,
    "dist": 373.1343,
    "vmag": 4.82
  },
  {
    "name": 50778,
    "hr": 2574,
    "bf": "14The CMa",
    "pname": "",
    "ra": 6.903167,
    "dec": -12.038628,
    "dist": 79.9361,
    "vmag": 4.08
  },
  {
    "name": 50877,
    "hr": 2580,
    "bf": "16Omi1CMa",
    "pname": "",
    "ra": 6.902209,
    "dec": -24.184211,
    "dist": 100000,
    "vmag": 3.89
  },
  {
    "name": 50973,
    "hr": 2585,
    "bf": "16    Lyn",
    "pname": "",
    "ra": 6.960309,
    "dec": 45.094094,
    "dist": 73.8552,
    "vmag": 4.9
  },
  {
    "name": 51055,
    "hr": 2588,
    "bf": "17    CMa",
    "pname": "",
    "ra": 6.917427,
    "dec": -20.404876,
    "dist": 154.5595,
    "vmag": 5.8
  },
  {
    "name": 51199,
    "hr": 2590,
    "bf": "19Pi  CMa",
    "pname": "",
    "ra": 6.927064,
    "dec": -20.136497,
    "dist": 29.5858,
    "vmag": 4.66
  },
  {
    "name": 51250,
    "hr": 2593,
    "bf": "18Mu  CMa",
    "pname": "",
    "ra": 6.935179,
    "dec": -14.04343,
    "dist": 381.6794,
    "vmag": 5
  },
  {
    "name": 51309,
    "hr": 2596,
    "bf": "20Iot CMa",
    "pname": "",
    "ra": 6.935618,
    "dec": -17.054242,
    "dist": 769.2308,
    "vmag": 4.36
  },
  {
    "name": 51440,
    "hr": 2600,
    "bf": "62    Aur",
    "pname": "",
    "ra": 6.984126,
    "dec": 38.052317,
    "dist": 256.4103,
    "vmag": 6.02
  },
  {
    "name": 51530,
    "hr": 2601,
    "bf": "39    Gem",
    "pname": "",
    "ra": 6.979839,
    "dec": 26.081079,
    "dist": 47.6644,
    "vmag": 6.2
  },
  {
    "name": 51557,
    "hr": 2602,
    "bf": "Iot Vol",
    "pname": "",
    "ra": 6.857495,
    "dec": -70.963411,
    "dist": 172.7116,
    "vmag": 5.41
  },
  {
    "name": 51688,
    "hr": 2605,
    "bf": "40    Gem",
    "pname": "",
    "ra": 6.991092,
    "dec": 25.914171,
    "dist": 366.3004,
    "vmag": 6.4
  },
  {
    "name": 52005,
    "hr": 2615,
    "bf": "41    Gem",
    "pname": "",
    "ra": 7.004396,
    "dec": 16.078998,
    "dist": 100000,
    "vmag": 5.73
  },
  {
    "name": 52089,
    "hr": 2618,
    "bf": "21Eps CMa",
    "pname": "Adhara",
    "ra": 6.977097,
    "dec": -28.972084,
    "dist": 124.2236,
    "vmag": 1.5
  },
  {
    "name": 52497,
    "hr": 2630,
    "bf": "42Ome Gem",
    "pname": "",
    "ra": 7.040217,
    "dec": 24.215446,
    "dist": 456.621,
    "vmag": 5.2
  },
  {
    "name": 52877,
    "hr": 2646,
    "bf": "22Sig CMa",
    "pname": "",
    "ra": 7.028652,
    "dec": -27.93483,
    "dist": 343.6426,
    "vmag": 3.49
  },
  {
    "name": 52918,
    "hr": 2648,
    "bf": "19    Mon",
    "pname": "",
    "ra": 7.048549,
    "dec": -4.239231,
    "dist": 373.1343,
    "vmag": 4.99
  },
  {
    "name": 52973,
    "hr": 2650,
    "bf": "43Zet Gem",
    "pname": "",
    "ra": 7.068481,
    "dec": 20.570297,
    "dist": 421.9409,
    "vmag": 4.01
  },
  {
    "name": 53138,
    "hr": 2653,
    "bf": "24Omi2CMa",
    "pname": "",
    "ra": 7.050409,
    "dec": -23.833291,
    "dist": 847.4576,
    "vmag": 3.02
  },
  {
    "name": 53244,
    "hr": 2657,
    "bf": "23Gam CMa",
    "pname": "",
    "ra": 7.062637,
    "dec": -15.633286,
    "dist": 135.5014,
    "vmag": 4.11
  },
  {
    "name": 53257,
    "hr": 2659,
    "bf": "44    Gem",
    "pname": "",
    "ra": 7.088436,
    "dec": 22.637458,
    "dist": 123.0012,
    "vmag": 6
  },
  {
    "name": 54131,
    "hr": 2684,
    "bf": "45    Gem",
    "pname": "",
    "ra": 7.139455,
    "dec": 15.930675,
    "dist": 98.912,
    "vmag": 5.47
  },
  {
    "name": 54239,
    "hr": 2689,
    "bf": "The Men",
    "pname": "",
    "ra": 6.942911,
    "dec": -79.420193,
    "dist": 107.9914,
    "vmag": 5.45
  },
  {
    "name": 54605,
    "hr": 2693,
    "bf": "25Del CMa",
    "pname": "Wezen",
    "ra": 7.139857,
    "dec": -26.3932,
    "dist": 492.6108,
    "vmag": 1.83
  },
  {
    "name": 54716,
    "hr": 2696,
    "bf": "63    Aur",
    "pname": "",
    "ra": 7.194255,
    "dec": 39.320549,
    "dist": 148.8095,
    "vmag": 4.91
  },
  {
    "name": 54719,
    "hr": 2697,
    "bf": "46Tau Gem",
    "pname": "",
    "ra": 7.185659,
    "dec": 30.245163,
    "dist": 98.4252,
    "vmag": 4.41
  },
  {
    "name": 54801,
    "hr": 2700,
    "bf": "47    Gem",
    "pname": "",
    "ra": 7.189741,
    "dec": 26.856587,
    "dist": 119.1895,
    "vmag": 5.75
  },
  {
    "name": 54810,
    "hr": 2701,
    "bf": "20    Mon",
    "pname": "",
    "ra": 7.170467,
    "dec": -4.237106,
    "dist": 62.1891,
    "vmag": 4.91
  },
  {
    "name": 55052,
    "hr": 2706,
    "bf": "48    Gem",
    "pname": "",
    "ra": 7.207327,
    "dec": 24.128594,
    "dist": 109.7695,
    "vmag": 5.85
  },
  {
    "name": 55057,
    "hr": 2707,
    "bf": "21    Mon",
    "pname": "",
    "ra": 7.189893,
    "dec": -0.301928,
    "dist": 87.184,
    "vmag": 5.44
  },
  {
    "name": 55185,
    "hr": 2714,
    "bf": "22Del Mon",
    "pname": "",
    "ra": 7.197739,
    "dec": -0.492764,
    "dist": 117.7856,
    "vmag": 4.15
  },
  {
    "name": 55280,
    "hr": 2715,
    "bf": "18    Lyn",
    "pname": "",
    "ra": 7.265267,
    "dec": 59.637467,
    "dist": 61.0128,
    "vmag": 5.2
  },
  {
    "name": 55383,
    "hr": 2717,
    "bf": "51    Gem",
    "pname": "",
    "ra": 7.222854,
    "dec": 16.158966,
    "dist": 165.8375,
    "vmag": 5.07
  },
  {
    "name": 55522,
    "hr": 2718,
    "bf": "26    CMa",
    "pname": "",
    "ra": 7.203393,
    "dec": -25.942588,
    "dist": 257.0694,
    "vmag": 5.91
  },
  {
    "name": 55621,
    "hr": 2725,
    "bf": "52    Gem",
    "pname": "",
    "ra": 7.244993,
    "dec": 24.884984,
    "dist": 92.081,
    "vmag": 5.84
  },
  {
    "name": 55864,
    "hr": 2735,
    "bf": "Gam1Vol",
    "pname": "",
    "ra": 7.145098,
    "dec": -70.497087,
    "dist": 49.6524,
    "vmag": 5.68
  },
  {
    "name": 55865,
    "hr": 2736,
    "bf": "Gam2Vol",
    "pname": "",
    "ra": 7.145788,
    "dec": -70.498932,
    "dist": 42.8633,
    "vmag": 3.78
  },
  {
    "name": 55870,
    "hr": 2738,
    "bf": "53    Gem",
    "pname": "",
    "ra": 7.26588,
    "dec": 27.897419,
    "dist": 235.8491,
    "vmag": 5.75
  },
  {
    "name": 56003,
    "hr": 2744,
    "bf": "24    Mon",
    "pname": "",
    "ra": 7.255391,
    "dec": -0.161283,
    "dist": 138.5042,
    "vmag": 6.42
  },
  {
    "name": 56014,
    "hr": 2745,
    "bf": "27    CMa",
    "pname": "",
    "ra": 7.237559,
    "dec": -26.352507,
    "dist": 531.9149,
    "vmag": 4.42
  },
  {
    "name": 56139,
    "hr": 2749,
    "bf": "28Ome CMa",
    "pname": "",
    "ra": 7.246849,
    "dec": -26.772667,
    "dist": 279.3296,
    "vmag": 4.01
  },
  {
    "name": 56221,
    "hr": 2753,
    "bf": "64    Aur",
    "pname": "",
    "ra": 7.300616,
    "dec": 40.883392,
    "dist": 85.2515,
    "vmag": 5.87
  },
  {
    "name": 56537,
    "hr": 2763,
    "bf": "54Lam Gem",
    "pname": "",
    "ra": 7.30155,
    "dec": 16.540383,
    "dist": 30.931,
    "vmag": 3.58
  },
  {
    "name": 56820,
    "hr": 2772,
    "bf": "47    Cam",
    "pname": "",
    "ra": 7.37144,
    "dec": 59.901996,
    "dist": 73.8007,
    "vmag": 6.36
  },
  {
    "name": 56855,
    "hr": 2773,
    "bf": "Pi  Pup",
    "pname": "",
    "ra": 7.285711,
    "dec": -37.09747,
    "dist": 247.5248,
    "vmag": 2.71
  },
  {
    "name": 56986,
    "hr": 2777,
    "bf": "55Del Gem",
    "pname": "",
    "ra": 7.335383,
    "dec": 21.98232,
    "dist": 18.5391,
    "vmag": 3.5
  },
  {
    "name": 57060,
    "hr": 2781,
    "bf": "29    CMa",
    "pname": "",
    "ra": 7.311216,
    "dec": -24.558701,
    "dist": 584.7953,
    "vmag": 4.88
  },
  {
    "name": 57061,
    "hr": 2782,
    "bf": "30Tau CMa",
    "pname": "",
    "ra": 7.311802,
    "dec": -24.954375,
    "dist": 917.4312,
    "vmag": 4.37
  },
  {
    "name": 57102,
    "hr": 2783,
    "bf": "19    Lyn",
    "pname": "",
    "ra": 7.38079,
    "dec": 55.28432,
    "dist": 100000,
    "vmag": 6.86
  },
  {
    "name": 57103,
    "hr": 2784,
    "bf": "19    Lyn",
    "pname": "",
    "ra": 7.381127,
    "dec": 55.281392,
    "dist": 100000,
    "vmag": 5.8
  },
  {
    "name": 57264,
    "hr": 2793,
    "bf": "65    Aur",
    "pname": "",
    "ra": 7.367397,
    "dec": 36.760584,
    "dist": 72.3589,
    "vmag": 5.12
  },
  {
    "name": 57423,
    "hr": 2795,
    "bf": "56    Gem",
    "pname": "",
    "ra": 7.365795,
    "dec": 20.443658,
    "dist": 135.8696,
    "vmag": 5.09
  },
  {
    "name": 57623,
    "hr": 2803,
    "bf": "Del Vol",
    "pname": "",
    "ra": 7.280508,
    "dec": -67.957152,
    "dist": 226.2443,
    "vmag": 3.97
  },
  {
    "name": 57669,
    "hr": 2805,
    "bf": "66    Aur",
    "pname": "",
    "ra": 7.402352,
    "dec": 40.672389,
    "dist": 370.3704,
    "vmag": 5.23
  },
  {
    "name": 57727,
    "hr": 2808,
    "bf": "57    Gem",
    "pname": "",
    "ra": 7.391254,
    "dec": 25.050531,
    "dist": 48.7329,
    "vmag": 5.04
  },
  {
    "name": 57744,
    "hr": 2810,
    "bf": "58    Gem",
    "pname": "",
    "ra": 7.39115,
    "dec": 22.945349,
    "dist": 87.6424,
    "vmag": 6.17
  },
  {
    "name": 57927,
    "hr": 2816,
    "bf": "59    Gem",
    "pname": "",
    "ra": 7.409292,
    "dec": 27.637857,
    "dist": 57.4053,
    "vmag": 5.77
  },
  {
    "name": 58142,
    "hr": 2818,
    "bf": "21    Lyn",
    "pname": "",
    "ra": 7.445237,
    "dec": 49.211527,
    "dist": 83.8926,
    "vmag": 4.61
  },
  {
    "name": 58187,
    "hr": 2820,
    "bf": "1    CMi",
    "pname": "",
    "ra": 7.416161,
    "dec": 11.669524,
    "dist": 96.9932,
    "vmag": 5.37
  },
  {
    "name": 58207,
    "hr": 2821,
    "bf": "60Iot Gem",
    "pname": "",
    "ra": 7.428779,
    "dec": 27.79808,
    "dist": 36.9004,
    "vmag": 3.78
  },
  {
    "name": 58350,
    "hr": 2827,
    "bf": "31Eta CMa",
    "pname": "Aludra",
    "ra": 7.401584,
    "dec": -29.303104,
    "dist": 609.7561,
    "vmag": 2.45
  },
  {
    "name": 58367,
    "hr": 2828,
    "bf": "2Eps CMi",
    "pname": "",
    "ra": 7.427471,
    "dec": 9.276097,
    "dist": 319.4888,
    "vmag": 4.99
  },
  {
    "name": 58579,
    "hr": 2837,
    "bf": "61    Gem",
    "pname": "",
    "ra": 7.448981,
    "dec": 20.257557,
    "dist": 136.9863,
    "vmag": 5.94
  },
  {
    "name": 58715,
    "hr": 2845,
    "bf": "3Bet CMi",
    "pname": "Gomeisa",
    "ra": 7.452512,
    "dec": 8.289315,
    "dist": 49.5786,
    "vmag": 2.89
  },
  {
    "name": 58728,
    "hr": 2846,
    "bf": "63    Gem",
    "pname": "",
    "ra": 7.462324,
    "dec": 21.445247,
    "dist": 32.0205,
    "vmag": 5.2
  },
  {
    "name": 58855,
    "hr": 2849,
    "bf": "22    Lyn",
    "pname": "",
    "ra": 7.498867,
    "dec": 49.672463,
    "dist": 20.2388,
    "vmag": 5.35
  },
  {
    "name": 58923,
    "hr": 2851,
    "bf": "5Eta CMi",
    "pname": "",
    "ra": 7.467243,
    "dec": 6.941968,
    "dist": 97.561,
    "vmag": 5.22
  },
  {
    "name": 58946,
    "hr": 2852,
    "bf": "62Rho Gem",
    "pname": "",
    "ra": 7.485195,
    "dec": 31.78455,
    "dist": 18.0473,
    "vmag": 4.16
  },
  {
    "name": 58972,
    "hr": 2854,
    "bf": "4Gam CMi",
    "pname": "",
    "ra": 7.469387,
    "dec": 8.92553,
    "dist": 97.561,
    "vmag": 4.33
  },
  {
    "name": 59037,
    "hr": 2857,
    "bf": "64    Gem",
    "pname": "",
    "ra": 7.489012,
    "dec": 28.118275,
    "dist": 54.0249,
    "vmag": 5.07
  },
  {
    "name": 59148,
    "hr": 2861,
    "bf": "65    Gem",
    "pname": "",
    "ra": 7.49688,
    "dec": 27.916146,
    "dist": 148.368,
    "vmag": 5.01
  },
  {
    "name": 59294,
    "hr": 2864,
    "bf": "6    CMi",
    "pname": "",
    "ra": 7.496606,
    "dec": 12.006564,
    "dist": 175.4386,
    "vmag": 4.55
  },
  {
    "name": 59717,
    "hr": 2878,
    "bf": "Sig Pup",
    "pname": "",
    "ra": 7.487179,
    "dec": -43.301432,
    "dist": 59.3824,
    "vmag": 3.25
  },
  {
    "name": 59881,
    "hr": 2880,
    "bf": "7Del1CMi",
    "pname": "",
    "ra": 7.534986,
    "dec": 1.914481,
    "dist": 233.1002,
    "vmag": 5.24
  },
  {
    "name": 60107,
    "hr": 2886,
    "bf": "68    Gem",
    "pname": "",
    "ra": 7.560134,
    "dec": 15.826662,
    "dist": 129.8701,
    "vmag": 5.27
  },
  {
    "name": 60111,
    "hr": 2887,
    "bf": "8Del2CMi",
    "pname": "",
    "ra": 7.553241,
    "dec": 3.290379,
    "dist": 41.7537,
    "vmag": 5.59
  },
  {
    "name": 60178,
    "hr": 2890,
    "bf": "66Alp Gem",
    "pname": "",
    "ra": 7.576827,
    "dec": 31.89052,
    "dist": 15.8053,
    "vmag": 2.85
  },
  {
    "name": 60179,
    "hr": 2891,
    "bf": "66Alp Gem",
    "pname": "Castor",
    "ra": 7.576634,
    "dec": 31.888276,
    "dist": 15.5958,
    "vmag": 1.58
  },
  {
    "name": 60357,
    "hr": 2901,
    "bf": "9Del3CMi",
    "pname": "",
    "ra": 7.571081,
    "dec": 3.371725,
    "dist": 176.3668,
    "vmag": 5.83
  },
  {
    "name": 60522,
    "hr": 2905,
    "bf": "69Ups Gem",
    "pname": "",
    "ra": 7.598708,
    "dec": 26.895741,
    "dist": 83.0565,
    "vmag": 4.06
  },
  {
    "name": 60816,
    "hr": 2919,
    "bf": "Eps Men",
    "pname": "",
    "ra": 7.42727,
    "dec": -79.094188,
    "dist": 143.0615,
    "vmag": 5.54
  },
  {
    "name": 60986,
    "hr": 2924,
    "bf": "70    Gem",
    "pname": "",
    "ra": 7.64246,
    "dec": 35.04855,
    "dist": 114.0251,
    "vmag": 5.58
  },
  {
    "name": 61064,
    "hr": 2927,
    "bf": "25    Mon",
    "pname": "",
    "ra": 7.621303,
    "dec": -4.110979,
    "dist": 67.5219,
    "vmag": 5.14
  },
  {
    "name": 61106,
    "hr": 2929,
    "bf": "23    Lyn",
    "pname": "",
    "ra": 7.680429,
    "dec": 57.082865,
    "dist": 214.1328,
    "vmag": 6.09
  },
  {
    "name": 61110,
    "hr": 2930,
    "bf": "71Omi Gem",
    "pname": "",
    "ra": 7.65276,
    "dec": 34.584346,
    "dist": 50.9944,
    "vmag": 4.89
  },
  {
    "name": 61338,
    "hr": 2938,
    "bf": "74    Gem",
    "pname": "",
    "ra": 7.657942,
    "dec": 17.674519,
    "dist": 161.0306,
    "vmag": 5.04
  },
  {
    "name": 61421,
    "hr": 2943,
    "bf": "10Alp CMi",
    "pname": "Procyon",
    "ra": 7.655033,
    "dec": 5.224993,
    "dist": 3.5142,
    "vmag": 0.4
  },
  {
    "name": 61497,
    "hr": 2946,
    "bf": "24    Lyn",
    "pname": "",
    "ra": 7.716788,
    "dec": 58.71036,
    "dist": 81.8331,
    "vmag": 4.93
  },
  {
    "name": 61935,
    "hr": 2970,
    "bf": "26Alp Mon",
    "pname": "",
    "ra": 7.687454,
    "dec": -9.551131,
    "dist": 45.3104,
    "vmag": 3.94
  },
  {
    "name": 62044,
    "hr": 2973,
    "bf": "75Sig Gem",
    "pname": "",
    "ra": 7.721867,
    "dec": 28.88351,
    "dist": 38.3436,
    "vmag": 4.23
  },
  {
    "name": 62066,
    "hr": 2975,
    "bf": "51    Cam",
    "pname": "",
    "ra": 7.777793,
    "dec": 65.455676,
    "dist": 100.7049,
    "vmag": 5.93
  },
  {
    "name": 62140,
    "hr": 2977,
    "bf": "49    Cam",
    "pname": "",
    "ra": 7.774289,
    "dec": 62.830522,
    "dist": 96.7118,
    "vmag": 6.5
  },
  {
    "name": 62285,
    "hr": 2983,
    "bf": "76    Gem",
    "pname": "",
    "ra": 7.735254,
    "dec": 25.784159,
    "dist": 194.5525,
    "vmag": 5.3
  },
  {
    "name": 62345,
    "hr": 2985,
    "bf": "77Kap Gem",
    "pname": "",
    "ra": 7.740793,
    "dec": 24.397993,
    "dist": 43.3463,
    "vmag": 3.57
  },
  {
    "name": 62509,
    "hr": 2990,
    "bf": "78Bet Gem",
    "pname": "Pollux",
    "ra": 7.755277,
    "dec": 28.026199,
    "dist": 10.3584,
    "vmag": 1.16
  },
  {
    "name": 62510,
    "hr": 2991,
    "bf": "79    Gem",
    "pname": "",
    "ra": 7.752593,
    "dec": 20.316045,
    "dist": 158.4786,
    "vmag": 6.53
  },
  {
    "name": 62576,
    "hr": 2993,
    "bf": "1    Pup",
    "pname": "",
    "ra": 7.725663,
    "dec": -28.410885,
    "dist": 236.9668,
    "vmag": 4.63
  },
  {
    "name": 62623,
    "hr": 2996,
    "bf": "3    Pup",
    "pname": "",
    "ra": 7.73013,
    "dec": -28.954826,
    "dist": 100000,
    "vmag": 3.94
  },
  {
    "name": 62721,
    "hr": 3003,
    "bf": "81    Gem",
    "pname": "",
    "ra": 7.768736,
    "dec": 18.510043,
    "dist": 104.0583,
    "vmag": 4.89
  },
  {
    "name": 62832,
    "hr": 3008,
    "bf": "11    CMi",
    "pname": "",
    "ra": 7.771167,
    "dec": 10.768252,
    "dist": 92.4214,
    "vmag": 5.25
  },
  {
    "name": 62863,
    "hr": 3009,
    "bf": "2    Pup",
    "pname": "",
    "ra": 7.757981,
    "dec": -14.686167,
    "dist": 100000,
    "vmag": 7.03
  },
  {
    "name": 62864,
    "hr": 3010,
    "bf": "2    Pup",
    "pname": "",
    "ra": 7.758092,
    "dec": -14.690537,
    "dist": 77.821,
    "vmag": 6.06
  },
  {
    "name": 62898,
    "hr": 3013,
    "bf": "80Pi  Gem",
    "pname": "",
    "ra": 7.791757,
    "dec": 33.415697,
    "dist": 202.8398,
    "vmag": 5.14
  },
  {
    "name": 62952,
    "hr": 3015,
    "bf": "4    Pup",
    "pname": "",
    "ra": 7.765797,
    "dec": -14.563805,
    "dist": 72.0981,
    "vmag": 5.03
  },
  {
    "name": 63208,
    "hr": 3021,
    "bf": "82    Gem",
    "pname": "",
    "ra": 7.809344,
    "dec": 23.14098,
    "dist": 241.5459,
    "vmag": 6.18
  },
  {
    "name": 63295,
    "hr": 3024,
    "bf": "Zet Vol",
    "pname": "",
    "ra": 7.697004,
    "dec": -72.606098,
    "dist": 43.2339,
    "vmag": 3.93
  },
  {
    "name": 63336,
    "hr": 3029,
    "bf": "5    Pup",
    "pname": "",
    "ra": 7.799089,
    "dec": -12.192705,
    "dist": 28.5959,
    "vmag": 5.48
  },
  {
    "name": 63462,
    "hr": 3034,
    "bf": "Omi Pup",
    "pname": "",
    "ra": 7.801436,
    "dec": -25.937169,
    "dist": 434.7826,
    "vmag": 4.4
  },
  {
    "name": 63697,
    "hr": 3044,
    "bf": "6    Pup",
    "pname": "",
    "ra": 7.828111,
    "dec": -17.228408,
    "dist": 78.064,
    "vmag": 5.17
  },
  {
    "name": 63700,
    "hr": 3045,
    "bf": "7Xi  Pup",
    "pname": "",
    "ra": 7.821571,
    "dec": -24.859786,
    "dist": 367.6471,
    "vmag": 3.34
  },
  {
    "name": 63975,
    "hr": 3059,
    "bf": "13Zet CMi",
    "pname": "",
    "ra": 7.861663,
    "dec": 1.766868,
    "dist": 191.2046,
    "vmag": 5.12
  },
  {
    "name": 64077,
    "hr": 3063,
    "bf": "8    Pup",
    "pname": "",
    "ra": 7.861358,
    "dec": -12.819405,
    "dist": 75.4717,
    "vmag": 6.37
  },
  {
    "name": 64096,
    "hr": 3064,
    "bf": "9    Pup",
    "pname": "",
    "ra": 7.862862,
    "dec": -13.898029,
    "dist": 16.5044,
    "vmag": 5.16
  },
  {
    "name": 64106,
    "hr": 3065,
    "bf": "25    Lyn",
    "pname": "",
    "ra": 7.90813,
    "dec": 47.385982,
    "dist": 246.9136,
    "vmag": 6.25
  },
  {
    "name": 64144,
    "hr": 3066,
    "bf": "26    Lyn",
    "pname": "",
    "ra": 7.911864,
    "dec": 47.564596,
    "dist": 257.732,
    "vmag": 5.47
  },
  {
    "name": 64145,
    "hr": 3067,
    "bf": "83Phi Gem",
    "pname": "",
    "ra": 7.891616,
    "dec": 26.765783,
    "dist": 68.2128,
    "vmag": 4.97
  },
  {
    "name": 64238,
    "hr": 3073,
    "bf": "10    Pup",
    "pname": "",
    "ra": 7.871911,
    "dec": -14.846175,
    "dist": 334.4482,
    "vmag": 5.69
  },
  {
    "name": 64648,
    "hr": 3086,
    "bf": "85    Gem",
    "pname": "",
    "ra": 7.927749,
    "dec": 19.88397,
    "dist": 114.8106,
    "vmag": 5.38
  },
  {
    "name": 64960,
    "hr": 3095,
    "bf": "1    Cnc",
    "pname": "",
    "ra": 7.949848,
    "dec": 15.790281,
    "dist": 142.8571,
    "vmag": 5.8
  },
  {
    "name": 65228,
    "hr": 3102,
    "bf": "11    Pup",
    "pname": "",
    "ra": 7.94765,
    "dec": -22.880119,
    "dist": 160,
    "vmag": 4.2
  },
  {
    "name": 65339,
    "hr": 3109,
    "bf": "53    Cam",
    "pname": "",
    "ra": 8.028465,
    "dec": 60.324353,
    "dist": 98.7167,
    "vmag": 6.02
  },
  {
    "name": 65345,
    "hr": 3110,
    "bf": "14    CMi",
    "pname": "",
    "ra": 7.972404,
    "dec": 2.224767,
    "dist": 74.0741,
    "vmag": 5.3
  },
  {
    "name": 65575,
    "hr": 3117,
    "bf": "Chi Car",
    "pname": "",
    "ra": 7.946313,
    "dec": -52.98236,
    "dist": 139.47,
    "vmag": 3.46
  },
  {
    "name": 65695,
    "hr": 3122,
    "bf": "27    Mon",
    "pname": "",
    "ra": 7.995598,
    "dec": -3.679583,
    "dist": 84.246,
    "vmag": 4.93
  },
  {
    "name": 65699,
    "hr": 3123,
    "bf": "12    Pup",
    "pname": "",
    "ra": 7.984921,
    "dec": -23.310396,
    "dist": 263.8522,
    "vmag": 5.09
  },
  {
    "name": 65714,
    "hr": 3124,
    "bf": "2Ome1Cnc",
    "pname": "",
    "ra": 8.01552,
    "dec": 25.392836,
    "dist": 203.252,
    "vmag": 5.87
  },
  {
    "name": 65759,
    "hr": 3128,
    "bf": "3    Cnc",
    "pname": "",
    "ra": 8.013141,
    "dec": 17.308703,
    "dist": 243.309,
    "vmag": 5.6
  },
  {
    "name": 65856,
    "hr": 3132,
    "bf": "4Ome2Cnc",
    "pname": "",
    "ra": 8.028822,
    "dec": 25.089465,
    "dist": 145.9854,
    "vmag": 6.32
  },
  {
    "name": 65873,
    "hr": 3134,
    "bf": "5    Cnc",
    "pname": "",
    "ra": 8.02508,
    "dec": 16.455309,
    "dist": 165.5629,
    "vmag": 5.99
  },
  {
    "name": 65953,
    "hr": 3141,
    "bf": "28    Mon",
    "pname": "",
    "ra": 8.020371,
    "dec": -1.392608,
    "dist": 137.931,
    "vmag": 4.69
  },
  {
    "name": 66216,
    "hr": 3149,
    "bf": "Chi Gem",
    "pname": "",
    "ra": 8.058634,
    "dec": 27.794332,
    "dist": 78.5546,
    "vmag": 4.94
  },
  {
    "name": 66664,
    "hr": 3163,
    "bf": "8    Cnc",
    "pname": "",
    "ra": 8.08458,
    "dec": 13.118215,
    "dist": 65.7895,
    "vmag": 5.14
  },
  {
    "name": 66811,
    "hr": 3165,
    "bf": "Zet Pup",
    "pname": "Naos",
    "ra": 8.059737,
    "dec": -40.003148,
    "dist": 332.2259,
    "vmag": 2.21
  },
  {
    "name": 66824,
    "hr": 3167,
    "bf": "28    Lyn",
    "pname": "",
    "ra": 8.119429,
    "dec": 43.260365,
    "dist": 193.4236,
    "vmag": 6.35
  },
  {
    "name": 66834,
    "hr": 3168,
    "bf": "14    Pup",
    "pname": "",
    "ra": 8.078172,
    "dec": -19.728148,
    "dist": 406.5041,
    "vmag": 6.12
  },
  {
    "name": 66875,
    "hr": 3169,
    "bf": "9Mu 1Cnc",
    "pname": "",
    "ra": 8.10511,
    "dec": 22.63549,
    "dist": 228.3105,
    "vmag": 5.96
  },
  {
    "name": 67006,
    "hr": 3173,
    "bf": "27    Lyn",
    "pname": "",
    "ra": 8.140963,
    "dec": 51.50667,
    "dist": 76.6871,
    "vmag": 4.78
  },
  {
    "name": 67228,
    "hr": 3176,
    "bf": "10Mu 2Cnc",
    "pname": "",
    "ra": 8.129404,
    "dec": 21.581816,
    "dist": 23.2883,
    "vmag": 5.3
  },
  {
    "name": 67483,
    "hr": 3184,
    "bf": "12    Cnc",
    "pname": "",
    "ra": 8.145124,
    "dec": 13.640917,
    "dist": 80,
    "vmag": 6.25
  },
  {
    "name": 67523,
    "hr": 3185,
    "bf": "15Rho Pup",
    "pname": "",
    "ra": 8.125737,
    "dec": -24.304324,
    "dist": 19.4818,
    "vmag": 2.83
  },
  {
    "name": 67594,
    "hr": 3188,
    "bf": "29Zet Mon",
    "pname": "",
    "ra": 8.143236,
    "dec": -2.983786,
    "dist": 324.6753,
    "vmag": 4.36
  },
  {
    "name": 67767,
    "hr": 3191,
    "bf": "14Psi Cnc",
    "pname": "",
    "ra": 8.174218,
    "dec": 25.507334,
    "dist": 41.3565,
    "vmag": 5.73
  },
  {
    "name": 67797,
    "hr": 3192,
    "bf": "16    Pup",
    "pname": "",
    "ra": 8.150455,
    "dec": -19.245014,
    "dist": 142.6534,
    "vmag": 4.4
  },
  {
    "name": 68146,
    "hr": 3202,
    "bf": "18    Pup",
    "pname": "",
    "ra": 8.177731,
    "dec": -13.799207,
    "dist": 22.3814,
    "vmag": 5.53
  },
  {
    "name": 68273,
    "hr": 3207,
    "bf": "Gam2Vel",
    "pname": "",
    "ra": 8.158876,
    "dec": -47.336588,
    "dist": 342.4658,
    "vmag": 1.75
  },
  {
    "name": 68255,
    "hr": 3210,
    "bf": "16Zet2Cnc",
    "pname": "",
    "ra": 8.203535,
    "dec": 17.647771,
    "dist": 25.0815,
    "vmag": 4.67
  },
  {
    "name": 68290,
    "hr": 3211,
    "bf": "19    Pup",
    "pname": "",
    "ra": 8.187863,
    "dec": -12.926999,
    "dist": 54.1712,
    "vmag": 4.72
  },
  {
    "name": 68351,
    "hr": 3215,
    "bf": "15    Cnc",
    "pname": "",
    "ra": 8.21913,
    "dec": 29.656536,
    "dist": 209.6436,
    "vmag": 5.62
  },
  {
    "name": 68520,
    "hr": 3223,
    "bf": "Eps Vol",
    "pname": "",
    "ra": 8.132173,
    "dec": -68.617062,
    "dist": 172.4138,
    "vmag": 4.35
  },
  {
    "name": 68752,
    "hr": 3229,
    "bf": "20    Pup",
    "pname": "",
    "ra": 8.222213,
    "dec": -15.788221,
    "dist": 266.6667,
    "vmag": 4.99
  },
  {
    "name": 68930,
    "hr": 3235,
    "bf": "29    Lyn",
    "pname": "",
    "ra": 8.297338,
    "dec": 59.571133,
    "dist": 91.8274,
    "vmag": 5.63
  },
  {
    "name": 69267,
    "hr": 3249,
    "bf": "17Bet Cnc",
    "pname": "",
    "ra": 8.275256,
    "dec": 9.185545,
    "dist": 93.0233,
    "vmag": 3.53
  },
  {
    "name": 69548,
    "hr": 3254,
    "bf": "30    Lyn",
    "pname": "",
    "ra": 8.340564,
    "dec": 57.743278,
    "dist": 32.352,
    "vmag": 5.89
  },
  {
    "name": 69665,
    "hr": 3257,
    "bf": "21    Pup",
    "pname": "",
    "ra": 8.289759,
    "dec": -16.285111,
    "dist": 273.9726,
    "vmag": 6.32
  },
  {
    "name": 69897,
    "hr": 3262,
    "bf": "18Chi Cnc",
    "pname": "",
    "ra": 8.334406,
    "dec": 27.217707,
    "dist": 18.2715,
    "vmag": 5.13
  },
  {
    "name": 70011,
    "hr": 3268,
    "bf": "19Lam Cnc",
    "pname": "",
    "ra": 8.34226,
    "dec": 24.022314,
    "dist": 140.2525,
    "vmag": 5.92
  },
  {
    "name": 70272,
    "hr": 3275,
    "bf": "31    Lyn",
    "pname": "",
    "ra": 8.380588,
    "dec": 43.188131,
    "dist": 117.2333,
    "vmag": 4.25
  },
  {
    "name": 70569,
    "hr": 3284,
    "bf": "20    Cnc",
    "pname": "",
    "ra": 8.3894,
    "dec": 18.3322,
    "dist": 117.7856,
    "vmag": 5.94
  },
  {
    "name": 70673,
    "hr": 3289,
    "bf": "22    Pup",
    "pname": "",
    "ra": 8.37968,
    "dec": -13.054793,
    "dist": 126.1034,
    "vmag": 6.13
  },
  {
    "name": 70734,
    "hr": 3290,
    "bf": "21    Cnc",
    "pname": "",
    "ra": 8.39867,
    "dec": 10.632063,
    "dist": 272.4796,
    "vmag": 6.11
  },
  {
    "name": 70958,
    "hr": 3297,
    "bf": "1    Hya",
    "pname": "",
    "ra": 8.409726,
    "dec": -3.75124,
    "dist": 26.617,
    "vmag": 5.61
  },
  {
    "name": 71030,
    "hr": 3299,
    "bf": "25    Cnc",
    "pname": "",
    "ra": 8.430523,
    "dec": 17.046267,
    "dist": 44.9438,
    "vmag": 6.11
  },
  {
    "name": 71046,
    "hr": 3301,
    "bf": "Kap1Vol",
    "pname": "",
    "ra": 8.330274,
    "dec": -71.514906,
    "dist": 133.3333,
    "vmag": 5.33
  },
  {
    "name": 71066,
    "hr": 3302,
    "bf": "Kap2Vol",
    "pname": "",
    "ra": 8.333486,
    "dec": -71.505377,
    "dist": 128.3697,
    "vmag": 5.63
  },
  {
    "name": 71093,
    "hr": 3304,
    "bf": "22Phi1Cnc",
    "pname": "",
    "ra": 8.44103,
    "dec": 27.893583,
    "dist": 114.4165,
    "vmag": 5.58
  },
  {
    "name": 71129,
    "hr": 3307,
    "bf": "Eps Car",
    "pname": "Avior",
    "ra": 8.375236,
    "dec": -59.509483,
    "dist": 185.5288,
    "vmag": 1.86
  },
  {
    "name": 71150,
    "hr": 3310,
    "bf": "23Phi2Cnc",
    "pname": "",
    "ra": 8.446408,
    "dec": 26.935489,
    "dist": 84.5309,
    "vmag": 6.3
  },
  {
    "name": 71152,
    "hr": 3312,
    "bf": "24    Cnc",
    "pname": "",
    "ra": 8.444387,
    "dec": 24.534166,
    "dist": 79.7448,
    "vmag": 6.51
  },
  {
    "name": 71243,
    "hr": 3318,
    "bf": "Alp Cha",
    "pname": "",
    "ra": 8.308703,
    "dec": -76.919722,
    "dist": 19.5618,
    "vmag": 4.05
  },
  {
    "name": 71250,
    "hr": 3319,
    "bf": "27    Cnc",
    "pname": "",
    "ra": 8.445539,
    "dec": 12.654612,
    "dist": 276.2431,
    "vmag": 5.56
  },
  {
    "name": 71297,
    "hr": 3321,
    "bf": "2    Hya",
    "pname": "",
    "ra": 8.440891,
    "dec": -3.987479,
    "dist": 50.025,
    "vmag": 5.6
  },
  {
    "name": 71369,
    "hr": 3323,
    "bf": "1Omi UMa",
    "pname": "",
    "ra": 8.504431,
    "dec": 60.718169,
    "dist": 54.9149,
    "vmag": 3.35
  },
  {
    "name": 71496,
    "hr": 3329,
    "bf": "28    Cnc",
    "pname": "",
    "ra": 8.476884,
    "dec": 24.144934,
    "dist": 136.612,
    "vmag": 6.05
  },
  {
    "name": 71555,
    "hr": 3333,
    "bf": "29    Cnc",
    "pname": "",
    "ra": 8.477039,
    "dec": 14.210822,
    "dist": 105.2632,
    "vmag": 5.94
  },
  {
    "name": 71576,
    "hr": 3334,
    "bf": "Eta Vol",
    "pname": "",
    "ra": 8.367918,
    "dec": -73.399985,
    "dist": 116.8224,
    "vmag": 5.28
  },
  {
    "name": 71701,
    "hr": 3340,
    "bf": "The Cha",
    "pname": "",
    "ra": 8.344115,
    "dec": -77.484477,
    "dist": 47.619,
    "vmag": 4.34
  },
  {
    "name": 71878,
    "hr": 3347,
    "bf": "Bet Vol",
    "pname": "",
    "ra": 8.428951,
    "dec": -66.13689,
    "dist": 32.9707,
    "vmag": 3.77
  },
  {
    "name": 72037,
    "hr": 3354,
    "bf": "2    UMa",
    "pname": "",
    "ra": 8.576711,
    "dec": 65.14517,
    "dist": 46.7508,
    "vmag": 5.47
  },
  {
    "name": 72041,
    "hr": 3355,
    "bf": "30Ups1Cnc",
    "pname": "",
    "ra": 8.525145,
    "dec": 24.081105,
    "dist": 76.6284,
    "vmag": 5.71
  },
  {
    "name": 72094,
    "hr": 3357,
    "bf": "31The Cnc",
    "pname": "",
    "ra": 8.526592,
    "dec": 18.09442,
    "dist": 127.2265,
    "vmag": 5.33
  },
  {
    "name": 72291,
    "hr": 3365,
    "bf": "32    Lyn",
    "pname": "",
    "ra": 8.556042,
    "dec": 36.436429,
    "dist": 37.092,
    "vmag": 6.2
  },
  {
    "name": 72292,
    "hr": 3366,
    "bf": "33Eta Cnc",
    "pname": "",
    "ra": 8.545139,
    "dec": 20.441162,
    "dist": 91.4913,
    "vmag": 5.33
  },
  {
    "name": 72324,
    "hr": 3369,
    "bf": "32Ups2Cnc",
    "pname": "",
    "ra": 8.55003,
    "dec": 24.08479,
    "dist": 170.3578,
    "vmag": 6.35
  },
  {
    "name": 72359,
    "hr": 3372,
    "bf": "34    Cnc",
    "pname": "",
    "ra": 8.544409,
    "dec": 10.066008,
    "dist": 165.2893,
    "vmag": 6.48
  },
  {
    "name": 72524,
    "hr": 3377,
    "bf": "33    Lyn",
    "pname": "",
    "ra": 8.578858,
    "dec": 36.419619,
    "dist": 108.8139,
    "vmag": 5.76
  },
  {
    "name": 72779,
    "hr": 3387,
    "bf": "35    Cnc",
    "pname": "",
    "ra": 8.588735,
    "dec": 19.590063,
    "dist": 202.8398,
    "vmag": 6.55
  },
  {
    "name": 72905,
    "hr": 3391,
    "bf": "3Pi 1UMa",
    "pname": "",
    "ra": 8.653257,
    "dec": 65.020907,
    "dist": 14.3554,
    "vmag": 5.63
  },
  {
    "name": 72968,
    "hr": 3398,
    "bf": "3    Hya",
    "pname": "",
    "ra": 8.591166,
    "dec": -7.982292,
    "dist": 92.8505,
    "vmag": 5.72
  },
  {
    "name": 73108,
    "hr": 3403,
    "bf": "4Pi 2UMa",
    "pname": "",
    "ra": 8.67024,
    "dec": 64.327936,
    "dist": 78.4929,
    "vmag": 4.59
  },
  {
    "name": 73143,
    "hr": 3406,
    "bf": "36    Cnc",
    "pname": "",
    "ra": 8.61827,
    "dec": 9.65558,
    "dist": 149.7006,
    "vmag": 5.92
  },
  {
    "name": 73262,
    "hr": 3410,
    "bf": "4Del Hya",
    "pname": "",
    "ra": 8.627602,
    "dec": 5.703782,
    "dist": 49.1642,
    "vmag": 4.14
  },
  {
    "name": 73316,
    "hr": 3412,
    "bf": "37    Cnc",
    "pname": "",
    "ra": 8.63477,
    "dec": 9.57461,
    "dist": 111.9821,
    "vmag": 6.54
  },
  {
    "name": 73471,
    "hr": 3418,
    "bf": "5Sig Hya",
    "pname": "",
    "ra": 8.645955,
    "dec": 3.341435,
    "dist": 114.2857,
    "vmag": 4.45
  },
  {
    "name": 73495,
    "hr": 3420,
    "bf": "Eta Pyx",
    "pname": "",
    "ra": 8.631154,
    "dec": -26.255,
    "dist": 71.0732,
    "vmag": 5.24
  },
  {
    "name": 73593,
    "hr": 3422,
    "bf": "34    Lyn",
    "pname": "",
    "ra": 8.683629,
    "dec": 45.83401,
    "dist": 55.2792,
    "vmag": 5.35
  },
  {
    "name": 73665,
    "hr": 3427,
    "bf": "39    Cnc",
    "pname": "",
    "ra": 8.66845,
    "dec": 20.007788,
    "dist": 186.5672,
    "vmag": 6.39
  },
  {
    "name": 73731,
    "hr": 3429,
    "bf": "41Eps Cnc",
    "pname": "",
    "ra": 8.67417,
    "dec": 19.544808,
    "dist": 179.8561,
    "vmag": 6.29
  },
  {
    "name": 73840,
    "hr": 3431,
    "bf": "6    Hya",
    "pname": "",
    "ra": 8.667076,
    "dec": -12.475372,
    "dist": 119.0476,
    "vmag": 4.98
  },
  {
    "name": 73898,
    "hr": 3433,
    "bf": "Zet Pyx",
    "pname": "",
    "ra": 8.661799,
    "dec": -29.561084,
    "dist": 74.9064,
    "vmag": 4.86
  },
  {
    "name": 74006,
    "hr": 3438,
    "bf": "Bet Pyx",
    "pname": "",
    "ra": 8.668373,
    "dec": -35.308352,
    "dist": 127.551,
    "vmag": 3.97
  },
  {
    "name": 74137,
    "hr": 3441,
    "bf": "9    Hya",
    "pname": "",
    "ra": 8.695371,
    "dec": -15.943384,
    "dist": 64.9351,
    "vmag": 4.87
  },
  {
    "name": 74198,
    "hr": 3449,
    "bf": "43Gam Cnc",
    "pname": "",
    "ra": 8.721431,
    "dec": 21.468501,
    "dist": 55.5556,
    "vmag": 4.66
  },
  {
    "name": 74228,
    "hr": 3450,
    "bf": "45    Cnc",
    "pname": "",
    "ra": 8.720091,
    "dec": 12.680876,
    "dist": 284.0909,
    "vmag": 5.62
  },
  {
    "name": 74280,
    "hr": 3454,
    "bf": "7Eta Hya",
    "pname": "",
    "ra": 8.72041,
    "dec": 3.398662,
    "dist": 179.8561,
    "vmag": 4.3
  },
  {
    "name": 74405,
    "hr": 3460,
    "bf": "The Vol",
    "pname": "",
    "ra": 8.651428,
    "dec": -70.386745,
    "dist": 73.6377,
    "vmag": 5.19
  },
  {
    "name": 74442,
    "hr": 3461,
    "bf": "47Del Cnc",
    "pname": "",
    "ra": 8.74475,
    "dec": 18.154309,
    "dist": 40.032,
    "vmag": 3.94
  },
  {
    "name": 74485,
    "hr": 3464,
    "bf": "46    Cnc",
    "pname": "",
    "ra": 8.755951,
    "dec": 30.697752,
    "dist": 181.1594,
    "vmag": 6.12
  },
  {
    "name": 74521,
    "hr": 3465,
    "bf": "49    Cnc",
    "pname": "",
    "ra": 8.745844,
    "dec": 10.08167,
    "dist": 129.7017,
    "vmag": 5.63
  },
  {
    "name": 74575,
    "hr": 3468,
    "bf": "Alp Pyx",
    "pname": "",
    "ra": 8.726539,
    "dec": -33.186385,
    "dist": 269.5418,
    "vmag": 3.68
  },
  {
    "name": 74591,
    "hr": 3469,
    "bf": "10    Hya",
    "pname": "",
    "ra": 8.750356,
    "dec": 5.680588,
    "dist": 64.5578,
    "vmag": 6.13
  },
  {
    "name": 74738,
    "hr": 3474,
    "bf": "48Iot Cnc",
    "pname": "",
    "ra": 8.777773,
    "dec": 28.765059,
    "dist": 85.5432,
    "vmag": 6.58
  },
  {
    "name": 74739,
    "hr": 3475,
    "bf": "48Iot Cnc",
    "pname": "",
    "ra": 8.778284,
    "dec": 28.759898,
    "dist": 101.5228,
    "vmag": 4.03
  },
  {
    "name": 74873,
    "hr": 3481,
    "bf": "50    Cnc",
    "pname": "",
    "ra": 8.782227,
    "dec": 12.109952,
    "dist": 53.9665,
    "vmag": 5.89
  },
  {
    "name": 74874,
    "hr": 3482,
    "bf": "11Eps Hya",
    "pname": "",
    "ra": 8.779587,
    "dec": 6.418809,
    "dist": 39.6354,
    "vmag": 3.38
  },
  {
    "name": 74918,
    "hr": 3484,
    "bf": "12    Hya",
    "pname": "",
    "ra": 8.772927,
    "dec": -13.54772,
    "dist": 75.1315,
    "vmag": 4.32
  },
  {
    "name": 74956,
    "hr": 3485,
    "bf": "Del Vel",
    "pname": "",
    "ra": 8.745059,
    "dec": -54.708821,
    "dist": 24.6975,
    "vmag": 1.93
  },
  {
    "name": 75137,
    "hr": 3492,
    "bf": "13Rho Hya",
    "pname": "",
    "ra": 8.807214,
    "dec": 5.837812,
    "dist": 108.5776,
    "vmag": 4.35
  },
  {
    "name": 75333,
    "hr": 3500,
    "bf": "14    Hya",
    "pname": "",
    "ra": 8.822702,
    "dec": -3.443023,
    "dist": 138.1215,
    "vmag": 5.3
  },
  {
    "name": 75416,
    "hr": 3502,
    "bf": "Eta Cha",
    "pname": "",
    "ra": 8.688773,
    "dec": -78.963359,
    "dist": 94.9668,
    "vmag": 5.46
  },
  {
    "name": 75486,
    "hr": 3505,
    "bf": "5    UMa",
    "pname": "",
    "ra": 8.889601,
    "dec": 61.962268,
    "dist": 88.8099,
    "vmag": 5.72
  },
  {
    "name": 75506,
    "hr": 3508,
    "bf": "35    Lyn",
    "pname": "",
    "ra": 8.865787,
    "dec": 43.726603,
    "dist": 81.2348,
    "vmag": 5.15
  },
  {
    "name": 75528,
    "hr": 3510,
    "bf": "54    Cnc",
    "pname": "",
    "ra": 8.850407,
    "dec": 15.350651,
    "dist": 38.3142,
    "vmag": 6.36
  },
  {
    "name": 75691,
    "hr": 3518,
    "bf": "Gam Pyx",
    "pname": "",
    "ra": 8.842204,
    "dec": -27.709844,
    "dist": 63.5728,
    "vmag": 4.02
  },
  {
    "name": 75698,
    "hr": 3519,
    "bf": "51Sig1Cnc",
    "pname": "",
    "ra": 8.876284,
    "dec": 32.474157,
    "dist": 64.4745,
    "vmag": 5.67
  },
  {
    "name": 75716,
    "hr": 3521,
    "bf": "53    Cnc",
    "pname": "",
    "ra": 8.874608,
    "dec": 28.259159,
    "dist": 271.7391,
    "vmag": 6.25
  },
  {
    "name": 75732,
    "hr": 3522,
    "bf": "55Rho1Cnc",
    "pname": "",
    "ra": 8.876625,
    "dec": 28.330819,
    "dist": 12.3411,
    "vmag": 5.96
  },
  {
    "name": 75737,
    "hr": 3523,
    "bf": "15    Hya",
    "pname": "",
    "ra": 8.859559,
    "dec": -7.177226,
    "dist": 136.7989,
    "vmag": 5.55
  },
  {
    "name": 75958,
    "hr": 3531,
    "bf": "6    UMa",
    "pname": "",
    "ra": 8.943741,
    "dec": 64.603831,
    "dist": 94.0734,
    "vmag": 5.57
  },
  {
    "name": 75959,
    "hr": 3532,
    "bf": "57    Cnc",
    "pname": "",
    "ra": 8.904091,
    "dec": 30.579115,
    "dist": 141.4427,
    "vmag": 5.4
  },
  {
    "name": 76219,
    "hr": 3540,
    "bf": "58Rho2Cnc",
    "pname": "",
    "ra": 8.927689,
    "dec": 27.927481,
    "dist": 149.2537,
    "vmag": 5.23
  },
  {
    "name": 76294,
    "hr": 3547,
    "bf": "16Zet Hya",
    "pname": "",
    "ra": 8.92323,
    "dec": 5.945563,
    "dist": 51.2558,
    "vmag": 3.11
  },
  {
    "name": 76351,
    "hr": 3550,
    "bf": "60    Cnc",
    "pname": "",
    "ra": 8.932097,
    "dec": 11.626023,
    "dist": 213.2196,
    "vmag": 5.44
  },
  {
    "name": 76369,
    "hr": 3552,
    "bf": "17    Hya",
    "pname": "",
    "ra": 8.924891,
    "dec": -7.971153,
    "dist": 88.4956,
    "vmag": 6.07
  },
  {
    "name": 76398,
    "hr": 3555,
    "bf": "59Sig2Cnc",
    "pname": "",
    "ra": 8.949056,
    "dec": 32.91043,
    "dist": 59.5593,
    "vmag": 5.44
  },
  {
    "name": 76483,
    "hr": 3556,
    "bf": "Del Pyx",
    "pname": "",
    "ra": 8.925434,
    "dec": -27.681871,
    "dist": 75.815,
    "vmag": 4.87
  },
  {
    "name": 76543,
    "hr": 3561,
    "bf": "62Omi1Cnc",
    "pname": "",
    "ra": 8.954152,
    "dec": 15.322762,
    "dist": 45.7247,
    "vmag": 5.22
  },
  {
    "name": 76572,
    "hr": 3563,
    "bf": "61    Cnc",
    "pname": "",
    "ra": 8.966295,
    "dec": 30.233826,
    "dist": 55.5247,
    "vmag": 6.25
  },
  {
    "name": 76582,
    "hr": 3565,
    "bf": "63Omi2Cnc",
    "pname": "",
    "ra": 8.959777,
    "dec": 15.581281,
    "dist": 46.1255,
    "vmag": 5.68
  },
  {
    "name": 76644,
    "hr": 3569,
    "bf": "9Iot UMa",
    "pname": "",
    "ra": 8.986828,
    "dec": 48.041826,
    "dist": 14.5096,
    "vmag": 3.12
  },
  {
    "name": 76756,
    "hr": 3572,
    "bf": "65Alp Cnc",
    "pname": "",
    "ra": 8.974784,
    "dec": 11.857701,
    "dist": 57.7367,
    "vmag": 4.26
  },
  {
    "name": 76813,
    "hr": 3575,
    "bf": "64Sig3Cnc",
    "pname": "",
    "ra": 8.992405,
    "dec": 32.418559,
    "dist": 90.6618,
    "vmag": 5.23
  },
  {
    "name": 76827,
    "hr": 3576,
    "bf": "8Rho UMa",
    "pname": "",
    "ra": 9.04242,
    "dec": 67.629619,
    "dist": 96.432,
    "vmag": 4.74
  },
  {
    "name": 77104,
    "hr": 3587,
    "bf": "66    Cnc",
    "pname": "",
    "ra": 9.023369,
    "dec": 32.252296,
    "dist": 143.0615,
    "vmag": 5.89
  },
  {
    "name": 77190,
    "hr": 3589,
    "bf": "67    Cnc",
    "pname": "",
    "ra": 9.030234,
    "dec": 27.902593,
    "dist": 58.0046,
    "vmag": 6.07
  },
  {
    "name": 77327,
    "hr": 3594,
    "bf": "12Kap UMa",
    "pname": "",
    "ra": 9.060427,
    "dec": 47.156525,
    "dist": 109.8901,
    "vmag": 3.57
  },
  {
    "name": 77350,
    "hr": 3595,
    "bf": "69Nu  Cnc",
    "pname": "",
    "ra": 9.045629,
    "dec": 24.452915,
    "dist": 120.3369,
    "vmag": 5.45
  },
  {
    "name": 77557,
    "hr": 3601,
    "bf": "70    Cnc",
    "pname": "",
    "ra": 9.069408,
    "dec": 27.898304,
    "dist": 195.3125,
    "vmag": 6.67
  },
  {
    "name": 77800,
    "hr": 3609,
    "bf": "11Sig1UMa",
    "pname": "",
    "ra": 9.139867,
    "dec": 66.873235,
    "dist": 159.7444,
    "vmag": 5.15
  },
  {
    "name": 77996,
    "hr": 3613,
    "bf": "18Ome Hya",
    "pname": "",
    "ra": 9.099546,
    "dec": 5.092316,
    "dist": 274.7253,
    "vmag": 4.99
  },
  {
    "name": 78045,
    "hr": 3615,
    "bf": "Alp Vol",
    "pname": "",
    "ra": 9.040777,
    "dec": -66.396076,
    "dist": 38.2995,
    "vmag": 4
  },
  {
    "name": 78154,
    "hr": 3616,
    "bf": "13Sig2UMa",
    "pname": "",
    "ra": 9.173204,
    "dec": 67.134018,
    "dist": 20.3791,
    "vmag": 4.8
  },
  {
    "name": 78209,
    "hr": 3619,
    "bf": "15    UMa",
    "pname": "",
    "ra": 9.147863,
    "dec": 51.604648,
    "dist": 28.8184,
    "vmag": 4.46
  },
  {
    "name": 78235,
    "hr": 3621,
    "bf": "72Tau Cnc",
    "pname": "",
    "ra": 9.133348,
    "dec": 29.654235,
    "dist": 83.8926,
    "vmag": 5.42
  },
  {
    "name": 78316,
    "hr": 3623,
    "bf": "76Kap Cnc",
    "pname": "",
    "ra": 9.129115,
    "dec": 10.668191,
    "dist": 162.8664,
    "vmag": 5.23
  },
  {
    "name": 78362,
    "hr": 3624,
    "bf": "14Tau UMa",
    "pname": "",
    "ra": 9.181941,
    "dec": 63.513633,
    "dist": 38.7297,
    "vmag": 4.67
  },
  {
    "name": 78418,
    "hr": 3626,
    "bf": "75    Cnc",
    "pname": "",
    "ra": 9.146483,
    "dec": 26.629112,
    "dist": 31.0078,
    "vmag": 5.95
  },
  {
    "name": 78515,
    "hr": 3627,
    "bf": "77Xi  Cnc",
    "pname": "",
    "ra": 9.155982,
    "dec": 22.045446,
    "dist": 114.4165,
    "vmag": 5.16
  },
  {
    "name": 78541,
    "hr": 3628,
    "bf": "Kap Pyx",
    "pname": "",
    "ra": 9.134133,
    "dec": -25.858536,
    "dist": 171.8213,
    "vmag": 4.62
  },
  {
    "name": 78556,
    "hr": 3630,
    "bf": "19    Hya",
    "pname": "",
    "ra": 9.14505,
    "dec": -8.589524,
    "dist": 188.3239,
    "vmag": 5.6
  },
  {
    "name": 78647,
    "hr": 3634,
    "bf": "Lam Vel",
    "pname": "",
    "ra": 9.133268,
    "dec": -43.432589,
    "dist": 166.9449,
    "vmag": 2.23
  },
  {
    "name": 78715,
    "hr": 3640,
    "bf": "79    Cnc",
    "pname": "",
    "ra": 9.172461,
    "dec": 21.996415,
    "dist": 112.8668,
    "vmag": 6.04
  },
  {
    "name": 78732,
    "hr": 3641,
    "bf": "20    Hya",
    "pname": "",
    "ra": 9.15988,
    "dec": -8.787648,
    "dist": 147.7105,
    "vmag": 5.47
  },
  {
    "name": 78922,
    "hr": 3644,
    "bf": "Eps Pyx",
    "pname": "",
    "ra": 9.16567,
    "dec": -30.365401,
    "dist": 64.9773,
    "vmag": 5.59
  },
  {
    "name": 79028,
    "hr": 3648,
    "bf": "16    UMa",
    "pname": "",
    "ra": 9.239041,
    "dec": 61.423318,
    "dist": 19.5695,
    "vmag": 5.18
  },
  {
    "name": 79096,
    "hr": 3650,
    "bf": "81Pi 1Cnc",
    "pname": "",
    "ra": 9.204878,
    "dec": 14.996037,
    "dist": 20.3625,
    "vmag": 6.49
  },
  {
    "name": 79158,
    "hr": 3652,
    "bf": "36    Lyn",
    "pname": "",
    "ra": 9.230059,
    "dec": 43.217825,
    "dist": 178.2531,
    "vmag": 5.3
  },
  {
    "name": 79193,
    "hr": 3655,
    "bf": "21    Hya",
    "pname": "",
    "ra": 9.207234,
    "dec": -7.109827,
    "dist": 86.7303,
    "vmag": 6.1
  },
  {
    "name": 79354,
    "hr": 3660,
    "bf": "17    UMa",
    "pname": "",
    "ra": 9.263832,
    "dec": 56.741406,
    "dist": 220.7506,
    "vmag": 5.28
  },
  {
    "name": 79439,
    "hr": 3662,
    "bf": "18    UMa",
    "pname": "",
    "ra": 9.269808,
    "dec": 54.021857,
    "dist": 35.8423,
    "vmag": 4.8
  },
  {
    "name": 79469,
    "hr": 3665,
    "bf": "22The Hya",
    "pname": "",
    "ra": 9.239405,
    "dec": 2.31428,
    "dist": 34.7947,
    "vmag": 3.89
  },
  {
    "name": 79554,
    "hr": 3669,
    "bf": "82Pi 2Cnc",
    "pname": "",
    "ra": 9.253848,
    "dec": 14.941507,
    "dist": 186.2197,
    "vmag": 5.36
  },
  {
    "name": 79837,
    "hr": 3678,
    "bf": "Zet Oct",
    "pname": "",
    "ra": 8.944949,
    "dec": -85.663152,
    "dist": 49.7512,
    "vmag": 5.43
  },
  {
    "name": 79910,
    "hr": 3681,
    "bf": "23    Hya",
    "pname": "",
    "ra": 9.27826,
    "dec": -6.353144,
    "dist": 75.2445,
    "vmag": 5.24
  },
  {
    "name": 79931,
    "hr": 3683,
    "bf": "24    Hya",
    "pname": "",
    "ra": 9.278158,
    "dec": -8.744759,
    "dist": 207.4689,
    "vmag": 5.49
  },
  {
    "name": 80007,
    "hr": 3685,
    "bf": "Bet Car",
    "pname": "Miaplacidus",
    "ra": 9.220041,
    "dec": -69.717208,
    "dist": 34.6981,
    "vmag": 1.67
  },
  {
    "name": 80081,
    "hr": 3690,
    "bf": "38    Lyn",
    "pname": "",
    "ra": 9.314069,
    "dec": 36.802597,
    "dist": 38.2702,
    "vmag": 3.82
  },
  {
    "name": 80404,
    "hr": 3699,
    "bf": "Iot Car",
    "pname": "Tureis",
    "ra": 9.284838,
    "dec": -59.275229,
    "dist": 234.7418,
    "vmag": 2.21
  },
  {
    "name": 80493,
    "hr": 3705,
    "bf": "40Alp Lyn",
    "pname": "",
    "ra": 9.350925,
    "dec": 34.392562,
    "dist": 62.2665,
    "vmag": 3.14
  },
  {
    "name": 80499,
    "hr": 3706,
    "bf": "26    Hya",
    "pname": "",
    "ra": 9.329551,
    "dec": -11.974853,
    "dist": 103.3058,
    "vmag": 4.77
  },
  {
    "name": 80586,
    "hr": 3709,
    "bf": "27    Hya",
    "pname": "",
    "ra": 9.341394,
    "dec": -9.555695,
    "dist": 68.2128,
    "vmag": 4.8
  },
  {
    "name": 80874,
    "hr": 3718,
    "bf": "The Pyx",
    "pname": "",
    "ra": 9.35822,
    "dec": -25.965439,
    "dist": 154.0832,
    "vmag": 4.71
  },
  {
    "name": 81146,
    "hr": 3731,
    "bf": "1Kap Leo",
    "pname": "",
    "ra": 9.410906,
    "dec": 26.182324,
    "dist": 61.7284,
    "vmag": 4.47
  },
  {
    "name": 81169,
    "hr": 3733,
    "bf": "Lam Pyx",
    "pname": "",
    "ra": 9.386739,
    "dec": -28.833873,
    "dist": 58.8928,
    "vmag": 4.71
  },
  {
    "name": 81188,
    "hr": 3734,
    "bf": "Kap Vel",
    "pname": "",
    "ra": 9.368562,
    "dec": -55.010668,
    "dist": 175.4386,
    "vmag": 2.47
  },
  {
    "name": 81420,
    "hr": 3738,
    "bf": "28    Hya",
    "pname": "",
    "ra": 9.423343,
    "dec": -5.117394,
    "dist": 275.4821,
    "vmag": 5.6
  },
  {
    "name": 81728,
    "hr": 3744,
    "bf": "29    Hya",
    "pname": "",
    "ra": 9.454067,
    "dec": -9.223712,
    "dist": 234.7418,
    "vmag": 6.53
  },
  {
    "name": 81797,
    "hr": 3748,
    "bf": "30Alp Hya",
    "pname": "Alphard",
    "ra": 9.45979,
    "dec": -8.658603,
    "dist": 55.2792,
    "vmag": 1.99
  },
  {
    "name": 81858,
    "hr": 3754,
    "bf": "2Ome Leo",
    "pname": "",
    "ra": 9.474278,
    "dec": 9.056778,
    "dist": 33.1675,
    "vmag": 5.4
  },
  {
    "name": 81873,
    "hr": 3755,
    "bf": "3    Leo",
    "pname": "",
    "ra": 9.474771,
    "dec": 8.188298,
    "dist": 124.2236,
    "vmag": 5.72
  },
  {
    "name": 81937,
    "hr": 3757,
    "bf": "23    UMa",
    "pname": "",
    "ra": 9.525453,
    "dec": 63.061861,
    "dist": 23.8152,
    "vmag": 3.65
  },
  {
    "name": 81997,
    "hr": 3759,
    "bf": "31Tau1Hya",
    "pname": "",
    "ra": 9.485805,
    "dec": -2.768964,
    "dist": 17.334,
    "vmag": 4.59
  },
  {
    "name": 82087,
    "hr": 3764,
    "bf": "7    LMi",
    "pname": "",
    "ra": 9.512006,
    "dec": 33.655711,
    "dist": 153.8462,
    "vmag": 5.87
  },
  {
    "name": 82150,
    "hr": 3765,
    "bf": "Eps Ant",
    "pname": "",
    "ra": 9.487423,
    "dec": -35.951335,
    "dist": 217.8649,
    "vmag": 4.51
  },
  {
    "name": 82189,
    "hr": 3768,
    "bf": "22    UMa",
    "pname": "",
    "ra": 9.581508,
    "dec": 72.205679,
    "dist": 49.0918,
    "vmag": 5.77
  },
  {
    "name": 82198,
    "hr": 3769,
    "bf": "8    LMi",
    "pname": "",
    "ra": 9.525671,
    "dec": 35.103273,
    "dist": 147.0588,
    "vmag": 5.39
  },
  {
    "name": 82210,
    "hr": 3771,
    "bf": "24    UMa",
    "pname": "",
    "ra": 9.574703,
    "dec": 69.830343,
    "dist": 31.9285,
    "vmag": 4.54
  },
  {
    "name": 82308,
    "hr": 3773,
    "bf": "4Lam Leo",
    "pname": "",
    "ra": 9.528675,
    "dec": 22.967971,
    "dist": 100.9082,
    "vmag": 4.32
  },
  {
    "name": 82328,
    "hr": 3775,
    "bf": "25The UMa",
    "pname": "",
    "ra": 9.547715,
    "dec": 51.6773,
    "dist": 13.4789,
    "vmag": 3.17
  },
  {
    "name": 82381,
    "hr": 3779,
    "bf": "6    Leo",
    "pname": "",
    "ra": 9.53266,
    "dec": 9.715767,
    "dist": 153.1394,
    "vmag": 5.07
  },
  {
    "name": 82383,
    "hr": 3780,
    "bf": "Zet1Ant",
    "pname": "",
    "ra": 9.512804,
    "dec": -31.889222,
    "dist": 124.3781,
    "vmag": 5.75
  },
  {
    "name": 82395,
    "hr": 3782,
    "bf": "5Xi  Leo",
    "pname": "",
    "ra": 9.532428,
    "dec": 11.299827,
    "dist": 66.0939,
    "vmag": 4.99
  },
  {
    "name": 82434,
    "hr": 3786,
    "bf": "Psi Vel",
    "pname": "",
    "ra": 9.511674,
    "dec": -40.466769,
    "dist": 18.8147,
    "vmag": 3.6
  },
  {
    "name": 82446,
    "hr": 3787,
    "bf": "32Tau2Hya",
    "pname": "",
    "ra": 9.533036,
    "dec": -1.184664,
    "dist": 158.7302,
    "vmag": 4.54
  },
  {
    "name": 82513,
    "hr": 3789,
    "bf": "Zet2Ant",
    "pname": "",
    "ra": 9.525601,
    "dec": -31.871831,
    "dist": 117.6471,
    "vmag": 5.91
  },
  {
    "name": 82522,
    "hr": 3791,
    "bf": "9    LMi",
    "pname": "",
    "ra": 9.558433,
    "dec": 36.486949,
    "dist": 149.0313,
    "vmag": 6.19
  },
  {
    "name": 82554,
    "hr": 3795,
    "bf": "Iot Cha",
    "pname": "",
    "ra": 9.40268,
    "dec": -80.786876,
    "dist": 58.1395,
    "vmag": 5.34
  },
  {
    "name": 82621,
    "hr": 3799,
    "bf": "26    UMa",
    "pname": "",
    "ra": 9.580405,
    "dec": 52.051477,
    "dist": 80.3859,
    "vmag": 4.47
  },
  {
    "name": 82635,
    "hr": 3800,
    "bf": "10    LMi",
    "pname": "",
    "ra": 9.570384,
    "dec": 36.397558,
    "dist": 56.7215,
    "vmag": 4.54
  },
  {
    "name": 82870,
    "hr": 3814,
    "bf": "33    Hya",
    "pname": "",
    "ra": 9.575736,
    "dec": -5.914948,
    "dist": 173.6111,
    "vmag": 5.56
  },
  {
    "name": 82885,
    "hr": 3815,
    "bf": "11    LMi",
    "pname": "",
    "ra": 9.594334,
    "dec": 35.810133,
    "dist": 11.3688,
    "vmag": 5.4
  },
  {
    "name": 83023,
    "hr": 3818,
    "bf": "7    Leo",
    "pname": "",
    "ra": 9.598024,
    "dec": 14.379588,
    "dist": 209.6436,
    "vmag": 6.32
  },
  {
    "name": 83189,
    "hr": 3826,
    "bf": "8    Leo",
    "pname": "",
    "ra": 9.617384,
    "dec": 16.437952,
    "dist": 355.8719,
    "vmag": 5.73
  },
  {
    "name": 83240,
    "hr": 3827,
    "bf": "10    Leo",
    "pname": "",
    "ra": 9.620185,
    "dec": 6.835802,
    "dist": 75.3012,
    "vmag": 5
  },
  {
    "name": 83287,
    "hr": 3829,
    "bf": "42    Lyn",
    "pname": "",
    "ra": 9.639383,
    "dec": 40.239793,
    "dist": 37.5799,
    "vmag": 5.28
  },
  {
    "name": 83373,
    "hr": 3832,
    "bf": "34    Hya",
    "pname": "",
    "ra": 9.630974,
    "dec": -9.424446,
    "dist": 130.039,
    "vmag": 6.4
  },
  {
    "name": 83506,
    "hr": 3839,
    "bf": "27    UMa",
    "pname": "",
    "ra": 9.715895,
    "dec": 72.252618,
    "dist": 146.6276,
    "vmag": 5.15
  },
  {
    "name": 83618,
    "hr": 3845,
    "bf": "35Iot Hya",
    "pname": "",
    "ra": 9.664267,
    "dec": -1.14281,
    "dist": 80.7103,
    "vmag": 3.9
  },
  {
    "name": 83650,
    "hr": 3846,
    "bf": "37    Hya",
    "pname": "",
    "ra": 9.66317,
    "dec": -10.570271,
    "dist": 307.6923,
    "vmag": 6.31
  },
  {
    "name": 83754,
    "hr": 3849,
    "bf": "38Kap Hya",
    "pname": "",
    "ra": 9.671768,
    "dec": -14.332292,
    "dist": 133.6898,
    "vmag": 5.07
  },
  {
    "name": 83805,
    "hr": 3851,
    "bf": "43    Lyn",
    "pname": "",
    "ra": 9.700098,
    "dec": 39.757851,
    "dist": 106.4963,
    "vmag": 5.61
  },
  {
    "name": 83808,
    "hr": 3852,
    "bf": "14Omi Leo",
    "pname": "",
    "ra": 9.685843,
    "dec": 9.892308,
    "dist": 39.9521,
    "vmag": 3.52
  },
  {
    "name": 83821,
    "hr": 3853,
    "bf": "13    Leo",
    "pname": "",
    "ra": 9.694024,
    "dec": 25.912876,
    "dist": 169.2047,
    "vmag": 6.26
  },
  {
    "name": 83951,
    "hr": 3857,
    "bf": "13    LMi",
    "pname": "",
    "ra": 9.711873,
    "dec": 35.093371,
    "dist": 53.2765,
    "vmag": 6.12
  },
  {
    "name": 83979,
    "hr": 3860,
    "bf": "Zet Cha",
    "pname": "",
    "ra": 9.564857,
    "dec": -80.941258,
    "dist": 175.4386,
    "vmag": 5.07
  },
  {
    "name": 84107,
    "hr": 3861,
    "bf": "15    Leo",
    "pname": "",
    "ra": 9.725906,
    "dec": 29.974473,
    "dist": 49.0196,
    "vmag": 5.64
  },
  {
    "name": 84179,
    "hr": 3865,
    "bf": "28    UMa",
    "pname": "",
    "ra": 9.765382,
    "dec": 63.653313,
    "dist": 77.4593,
    "vmag": 6.51
  },
  {
    "name": 84194,
    "hr": 3866,
    "bf": "16Psi Leo",
    "pname": "",
    "ra": 9.728862,
    "dec": 14.021692,
    "dist": 187.2659,
    "vmag": 5.36
  },
  {
    "name": 84367,
    "hr": 3871,
    "bf": "The Ant",
    "pname": "",
    "ra": 9.736694,
    "dec": -27.769471,
    "dist": 104.0583,
    "vmag": 4.78
  },
  {
    "name": 84441,
    "hr": 3873,
    "bf": "17Eps Leo",
    "pname": "Ras Elased Australis",
    "ra": 9.764188,
    "dec": 23.774255,
    "dist": 75.643,
    "vmag": 2.97
  },
  {
    "name": 84561,
    "hr": 3877,
    "bf": "18    Leo",
    "pname": "",
    "ra": 9.773147,
    "dec": 11.810043,
    "dist": 156.9859,
    "vmag": 5.67
  },
  {
    "name": 84722,
    "hr": 3880,
    "bf": "19    Leo",
    "pname": "",
    "ra": 9.790546,
    "dec": 11.568165,
    "dist": 84.674,
    "vmag": 6.44
  },
  {
    "name": 84999,
    "hr": 3888,
    "bf": "29Ups UMa",
    "pname": "",
    "ra": 9.849867,
    "dec": 59.038735,
    "dist": 35.6379,
    "vmag": 3.78
  },
  {
    "name": 85040,
    "hr": 3889,
    "bf": "20    Leo",
    "pname": "",
    "ra": 9.830582,
    "dec": 21.179422,
    "dist": 191.5709,
    "vmag": 6.1
  },
  {
    "name": 85123,
    "hr": 3890,
    "bf": "Ups Car",
    "pname": "",
    "ra": 9.785036,
    "dec": -65.072007,
    "dist": 440.5286,
    "vmag": 2.92
  },
  {
    "name": 85217,
    "hr": 3893,
    "bf": "4    Sex",
    "pname": "",
    "ra": 9.841689,
    "dec": 4.34365,
    "dist": 44.6628,
    "vmag": 6.24
  },
  {
    "name": 85235,
    "hr": 3894,
    "bf": "30Phi UMa",
    "pname": "",
    "ra": 9.868433,
    "dec": 54.064332,
    "dist": 156.0062,
    "vmag": 4.55
  },
  {
    "name": 85268,
    "hr": 3896,
    "bf": "23    Leo",
    "pname": "",
    "ra": 9.850551,
    "dec": 13.066239,
    "dist": 369.0037,
    "vmag": 6.45
  },
  {
    "name": 85364,
    "hr": 3899,
    "bf": "6    Sex",
    "pname": "",
    "ra": 9.853898,
    "dec": -4.24335,
    "dist": 63.5728,
    "vmag": 6.01
  },
  {
    "name": 85376,
    "hr": 3900,
    "bf": "22    Leo",
    "pname": "",
    "ra": 9.864732,
    "dec": 24.395369,
    "dist": 41.4594,
    "vmag": 5.29
  },
  {
    "name": 85396,
    "hr": 3902,
    "bf": "Nu  Cha",
    "pname": "",
    "ra": 9.772352,
    "dec": -76.77612,
    "dist": 56.5291,
    "vmag": 5.43
  },
  {
    "name": 85444,
    "hr": 3903,
    "bf": "39Ups1Hya",
    "pname": "",
    "ra": 9.85797,
    "dec": -14.846603,
    "dist": 80.9061,
    "vmag": 4.11
  },
  {
    "name": 85503,
    "hr": 3905,
    "bf": "24Mu  Leo",
    "pname": "",
    "ra": 9.879398,
    "dec": 26.006951,
    "dist": 38.0518,
    "vmag": 3.88
  },
  {
    "name": 85504,
    "hr": 3906,
    "bf": "7    Sex",
    "pname": "",
    "ra": 9.870045,
    "dec": 2.454131,
    "dist": 202.8398,
    "vmag": 6.02
  },
  {
    "name": 85558,
    "hr": 3909,
    "bf": "γ-Sextans",
    "pname": "",
    "ra": 9.875121,
    "dec": -8.10503,
    "dist": 85.1064,
    "vmag": 5.07
  },
  {
    "name": 85795,
    "hr": 3917,
    "bf": "31    UMa",
    "pname": "",
    "ra": 9.928612,
    "dec": 49.819843,
    "dist": 63.7755,
    "vmag": 5.27
  },
  {
    "name": 86146,
    "hr": 3928,
    "bf": "19    LMi",
    "pname": "",
    "ra": 9.96141,
    "dec": 41.055633,
    "dist": 28.1452,
    "vmag": 5.11
  },
  {
    "name": 86360,
    "hr": 3937,
    "bf": "27Nu  Leo",
    "pname": "",
    "ra": 9.970382,
    "dec": 12.4448,
    "dist": 153.1394,
    "vmag": 5.26
  },
  {
    "name": 86440,
    "hr": 3940,
    "bf": "Phi Vel",
    "pname": "",
    "ra": 9.947708,
    "dec": -54.56779,
    "dist": 487.8049,
    "vmag": 3.52
  },
  {
    "name": 86611,
    "hr": 3945,
    "bf": "12    Sex",
    "pname": "",
    "ra": 9.995301,
    "dec": 3.384792,
    "dist": 59.8444,
    "vmag": 6.69
  },
  {
    "name": 86629,
    "hr": 3947,
    "bf": "Eta Ant",
    "pname": "",
    "ra": 9.981191,
    "dec": -35.890973,
    "dist": 33.3111,
    "vmag": 5.23
  },
  {
    "name": 86663,
    "hr": 3950,
    "bf": "29Pi  Leo",
    "pname": "",
    "ra": 10.003557,
    "dec": 8.044223,
    "dist": 124.533,
    "vmag": 4.68
  },
  {
    "name": 86728,
    "hr": 3951,
    "bf": "20    LMi",
    "pname": "",
    "ra": 10.016864,
    "dec": 31.923672,
    "dist": 15.0466,
    "vmag": 5.37
  },
  {
    "name": 87301,
    "hr": 3961,
    "bf": "13    Sex",
    "pname": "",
    "ra": 10.069009,
    "dec": 3.201055,
    "dist": 56.0224,
    "vmag": 6.43
  },
  {
    "name": 87504,
    "hr": 3970,
    "bf": "40Ups2Hya",
    "pname": "",
    "ra": 10.085408,
    "dec": -13.064626,
    "dist": 96.1538,
    "vmag": 4.6
  },
  {
    "name": 87682,
    "hr": 3973,
    "bf": "14    Sex",
    "pname": "",
    "ra": 10.113174,
    "dec": 5.611493,
    "dist": 109.1703,
    "vmag": 6.2
  },
  {
    "name": 87696,
    "hr": 3974,
    "bf": "21-LMi",
    "pname": "",
    "ra": 10.123821,
    "dec": 35.244693,
    "dist": 28.2406,
    "vmag": 4.49
  },
  {
    "name": 87737,
    "hr": 3975,
    "bf": "30Eta Leo",
    "pname": "",
    "ra": 10.122209,
    "dec": 16.762664,
    "dist": 389.1051,
    "vmag": 3.48
  },
  {
    "name": 87837,
    "hr": 3980,
    "bf": "31    Leo",
    "pname": "",
    "ra": 10.131742,
    "dec": 9.997508,
    "dist": 90.5797,
    "vmag": 4.39
  },
  {
    "name": 87887,
    "hr": 3981,
    "bf": "α-Sextans",
    "pname": "",
    "ra": 10.1323,
    "dec": -0.371637,
    "dist": 86.881,
    "vmag": 4.48
  },
  {
    "name": 87901,
    "hr": 3982,
    "bf": "32Alp Leo",
    "pname": "Regulus",
    "ra": 10.139532,
    "dec": 11.967207,
    "dist": 24.3132,
    "vmag": 1.36
  },
  {
    "name": 87971,
    "hr": 3983,
    "bf": "Mu 1Cha",
    "pname": "",
    "ra": 10.012191,
    "dec": -82.21467,
    "dist": 115.0748,
    "vmag": 5.53
  },
  {
    "name": 88195,
    "hr": 3989,
    "bf": "17    Sex",
    "pname": "",
    "ra": 10.168761,
    "dec": -8.40817,
    "dist": 182.8154,
    "vmag": 5.91
  },
  {
    "name": 88284,
    "hr": 3994,
    "bf": "41Lam Hya",
    "pname": "",
    "ra": 10.176467,
    "dec": -12.354083,
    "dist": 34.5066,
    "vmag": 3.61
  },
  {
    "name": 88333,
    "hr": 3996,
    "bf": "18    Sex",
    "pname": "",
    "ra": 10.182184,
    "dec": -8.418462,
    "dist": 145.1379,
    "vmag": 5.64
  },
  {
    "name": 88351,
    "hr": 3997,
    "bf": "Mu 2Cha",
    "pname": "",
    "ra": 10.068706,
    "dec": -81.565492,
    "dist": 159.7444,
    "vmag": 6.6
  },
  {
    "name": 88355,
    "hr": 3998,
    "bf": "34    Leo",
    "pname": "",
    "ra": 10.193947,
    "dec": 13.355114,
    "dist": 64.5995,
    "vmag": 6.43
  },
  {
    "name": 88547,
    "hr": 4004,
    "bf": "19    Sex",
    "pname": "",
    "ra": 10.213435,
    "dec": 4.61468,
    "dist": 127.551,
    "vmag": 5.77
  },
  {
    "name": 88786,
    "hr": 4014,
    "bf": "22    LMi",
    "pname": "",
    "ra": 10.251762,
    "dec": 31.468066,
    "dist": 203.252,
    "vmag": 6.47
  },
  {
    "name": 88960,
    "hr": 4024,
    "bf": "23    LMi",
    "pname": "",
    "ra": 10.270677,
    "dec": 29.310501,
    "dist": 79.9361,
    "vmag": 5.49
  },
  {
    "name": 88983,
    "hr": 4026,
    "bf": "32    UMa",
    "pname": "",
    "ra": 10.300583,
    "dec": 65.108351,
    "dist": 79.5545,
    "vmag": 5.74
  },
  {
    "name": 88986,
    "hr": 4027,
    "bf": "24    LMi",
    "pname": "",
    "ra": 10.274469,
    "dec": 28.682479,
    "dist": 33.1895,
    "vmag": 6.46
  },
  {
    "name": 89010,
    "hr": 4030,
    "bf": "35    Leo",
    "pname": "",
    "ra": 10.275639,
    "dec": 23.503095,
    "dist": 31.1721,
    "vmag": 5.95
  },
  {
    "name": 89025,
    "hr": 4031,
    "bf": "36Zet Leo",
    "pname": "",
    "ra": 10.278171,
    "dec": 23.417311,
    "dist": 84.0336,
    "vmag": 3.43
  },
  {
    "name": 89021,
    "hr": 4033,
    "bf": "33Lam UMa",
    "pname": "",
    "ra": 10.284952,
    "dec": 42.914365,
    "dist": 42.1585,
    "vmag": 3.45
  },
  {
    "name": 89056,
    "hr": 4035,
    "bf": "37    Leo",
    "pname": "",
    "ra": 10.277983,
    "dec": 13.728334,
    "dist": 179.5332,
    "vmag": 5.42
  },
  {
    "name": 89080,
    "hr": 4037,
    "bf": "Ome Car",
    "pname": "",
    "ra": 10.228961,
    "dec": -70.037903,
    "dist": 104.8218,
    "vmag": 3.29
  },
  {
    "name": 89125,
    "hr": 4039,
    "bf": "39    Leo",
    "pname": "",
    "ra": 10.287378,
    "dec": 23.10622,
    "dist": 22.805,
    "vmag": 5.81
  },
  {
    "name": 89254,
    "hr": 4042,
    "bf": "22Eps Sex",
    "pname": "",
    "ra": 10.293834,
    "dec": -8.068914,
    "dist": 59.312,
    "vmag": 5.25
  },
  {
    "name": 89449,
    "hr": 4054,
    "bf": "40    Leo",
    "pname": "",
    "ra": 10.328938,
    "dec": 19.470914,
    "dist": 21.3675,
    "vmag": 4.78
  },
  {
    "name": 89484,
    "hr": 4057,
    "bf": "41Gam1Leo",
    "pname": "Algieba",
    "ra": 10.332873,
    "dec": 19.841489,
    "dist": 39.8883,
    "vmag": 2.01
  },
  {
    "name": 89688,
    "hr": 4064,
    "bf": "23    Sex",
    "pname": "",
    "ra": 10.350557,
    "dec": 2.289724,
    "dist": 769.2308,
    "vmag": 6.66
  },
  {
    "name": 89758,
    "hr": 4069,
    "bf": "34Mu  UMa",
    "pname": "",
    "ra": 10.372155,
    "dec": 41.499516,
    "dist": 70.6215,
    "vmag": 3.06
  },
  {
    "name": 89774,
    "hr": 4070,
    "bf": "42    Leo",
    "pname": "",
    "ra": 10.363973,
    "dec": 14.975773,
    "dist": 142.6534,
    "vmag": 6.16
  },
  {
    "name": 89904,
    "hr": 4075,
    "bf": "27    LMi",
    "pname": "",
    "ra": 10.385091,
    "dec": 33.908145,
    "dist": 74.2942,
    "vmag": 5.89
  },
  {
    "name": 89962,
    "hr": 4077,
    "bf": "43    Leo",
    "pname": "",
    "ra": 10.383458,
    "dec": 6.542643,
    "dist": 71.1238,
    "vmag": 6.06
  },
  {
    "name": 90040,
    "hr": 4081,
    "bf": "28    LMi",
    "pname": "",
    "ra": 10.40239,
    "dec": 33.718531,
    "dist": 130.039,
    "vmag": 5.52
  },
  {
    "name": 90044,
    "hr": 4082,
    "bf": "25    Sex",
    "pname": "",
    "ra": 10.390688,
    "dec": -4.074035,
    "dist": 104.1667,
    "vmag": 5.93
  },
  {
    "name": 90254,
    "hr": 4088,
    "bf": "44    Leo",
    "pname": "",
    "ra": 10.420887,
    "dec": 8.784845,
    "dist": 314.4654,
    "vmag": 5.61
  },
  {
    "name": 90277,
    "hr": 4090,
    "bf": "30    LMi",
    "pname": "",
    "ra": 10.431895,
    "dec": 33.79612,
    "dist": 71.5308,
    "vmag": 4.72
  },
  {
    "name": 90432,
    "hr": 4094,
    "bf": "42Mu  Hya",
    "pname": "",
    "ra": 10.434842,
    "dec": -16.83629,
    "dist": 71.7875,
    "vmag": 3.83
  },
  {
    "name": 90537,
    "hr": 4100,
    "bf": "β-LMi",
    "pname": "",
    "ra": 10.464727,
    "dec": 36.707212,
    "dist": 47.1921,
    "vmag": 4.2
  },
  {
    "name": 90569,
    "hr": 4101,
    "bf": "45    Leo",
    "pname": "",
    "ra": 10.460831,
    "dec": 9.762396,
    "dist": 129.199,
    "vmag": 6.01
  },
  {
    "name": 90610,
    "hr": 4104,
    "bf": "Alp Ant",
    "pname": "",
    "ra": 10.45253,
    "dec": -31.067779,
    "dist": 112.2334,
    "vmag": 4.28
  },
  {
    "name": 90633,
    "hr": 4106,
    "bf": "35    UMa",
    "pname": "",
    "ra": 10.498453,
    "dec": 65.626233,
    "dist": 101.2146,
    "vmag": 6.32
  },
  {
    "name": 90839,
    "hr": 4112,
    "bf": "36    UMa",
    "pname": "",
    "ra": 10.510461,
    "dec": 55.980536,
    "dist": 12.7796,
    "vmag": 4.82
  },
  {
    "name": 90840,
    "hr": 4113,
    "bf": "32    LMi",
    "pname": "",
    "ra": 10.501792,
    "dec": 38.925132,
    "dist": 231.4815,
    "vmag": 5.79
  },
  {
    "name": 90882,
    "hr": 4116,
    "bf": "29Del Sex",
    "pname": "",
    "ra": 10.491306,
    "dec": -2.739078,
    "dist": 98.7167,
    "vmag": 5.19
  },
  {
    "name": 90972,
    "hr": 4118,
    "bf": "Del Ant",
    "pname": "",
    "ra": 10.493161,
    "dec": -30.607065,
    "dist": 133.1558,
    "vmag": 5.57
  },
  {
    "name": 90994,
    "hr": 4119,
    "bf": "β-Sextans",
    "pname": "",
    "ra": 10.504855,
    "dec": -0.637026,
    "dist": 124.0695,
    "vmag": 5.08
  },
  {
    "name": 91130,
    "hr": 4124,
    "bf": "33    LMi",
    "pname": "",
    "ra": 10.530937,
    "dec": 32.379554,
    "dist": 78.0031,
    "vmag": 5.9
  },
  {
    "name": 91232,
    "hr": 4127,
    "bf": "46    Leo",
    "pname": "",
    "ra": 10.536604,
    "dec": 14.13727,
    "dist": 212.766,
    "vmag": 5.43
  },
  {
    "name": 91316,
    "hr": 4133,
    "bf": "47Rho Leo",
    "pname": "",
    "ra": 10.546853,
    "dec": 9.306586,
    "dist": 100000,
    "vmag": 3.84
  },
  {
    "name": 91365,
    "hr": 4137,
    "bf": "34    LMi",
    "pname": "",
    "ra": 10.558587,
    "dec": 34.988695,
    "dist": 209.6436,
    "vmag": 5.57
  },
  {
    "name": 91480,
    "hr": 4141,
    "bf": "37    UMa",
    "pname": "",
    "ra": 10.586017,
    "dec": 57.082637,
    "dist": 26.5252,
    "vmag": 5.16
  },
  {
    "name": 91550,
    "hr": 4145,
    "bf": "44    Hya",
    "pname": "",
    "ra": 10.566912,
    "dec": -23.745165,
    "dist": 244.4988,
    "vmag": 5.08
  },
  {
    "name": 91612,
    "hr": 4146,
    "bf": "48    Leo",
    "pname": "",
    "ra": 10.580004,
    "dec": 6.953749,
    "dist": 81.5661,
    "vmag": 5.07
  },
  {
    "name": 91636,
    "hr": 4148,
    "bf": "49    Leo",
    "pname": "",
    "ra": 10.583933,
    "dec": 8.650425,
    "dist": 131.406,
    "vmag": 5.67
  },
  {
    "name": 91752,
    "hr": 4150,
    "bf": "35    LMi",
    "pname": "",
    "ra": 10.605949,
    "dec": 36.326927,
    "dist": 47.9616,
    "vmag": 6.29
  },
  {
    "name": 91880,
    "hr": 4156,
    "bf": "Phi2Hya",
    "pname": "",
    "ra": 10.604628,
    "dec": -16.344326,
    "dist": 232.0186,
    "vmag": 6.01
  },
  {
    "name": 92125,
    "hr": 4166,
    "bf": "37    LMi",
    "pname": "",
    "ra": 10.645337,
    "dec": 31.976237,
    "dist": 177.305,
    "vmag": 4.68
  },
  {
    "name": 92168,
    "hr": 4168,
    "bf": "38    LMi",
    "pname": "",
    "ra": 10.65213,
    "dec": 37.91,
    "dist": 52.3286,
    "vmag": 5.84
  },
  {
    "name": 92214,
    "hr": 4171,
    "bf": "Phi3Hya",
    "pname": "",
    "ra": 10.643043,
    "dec": -16.876572,
    "dist": 64.5578,
    "vmag": 4.91
  },
  {
    "name": 92305,
    "hr": 4174,
    "bf": "Gam Cha",
    "pname": "",
    "ra": 10.591166,
    "dec": -78.607786,
    "dist": 128.041,
    "vmag": 4.11
  },
  {
    "name": 92424,
    "hr": 4178,
    "bf": "38    UMa",
    "pname": "",
    "ra": 10.69908,
    "dec": 65.71628,
    "dist": 69.541,
    "vmag": 5.12
  },
  {
    "name": 92588,
    "hr": 4182,
    "bf": "33    Sex",
    "pname": "",
    "ra": 10.690052,
    "dec": -1.741491,
    "dist": 36.8189,
    "vmag": 6.25
  },
  {
    "name": 92728,
    "hr": 4187,
    "bf": "39    UMa",
    "pname": "",
    "ra": 10.728702,
    "dec": 57.199203,
    "dist": 113.3787,
    "vmag": 5.79
  },
  {
    "name": 92769,
    "hr": 4189,
    "bf": "40    LMi",
    "pname": "",
    "ra": 10.717191,
    "dec": 26.325577,
    "dist": 48.3793,
    "vmag": 5.51
  },
  {
    "name": 92825,
    "hr": 4192,
    "bf": "41    LMi",
    "pname": "",
    "ra": 10.7236,
    "dec": 23.188404,
    "dist": 70.2741,
    "vmag": 5.08
  },
  {
    "name": 92841,
    "hr": 4193,
    "bf": "35    Sex",
    "pname": "",
    "ra": 10.722478,
    "dec": 4.747669,
    "dist": 169.4915,
    "vmag": 5.77
  },
  {
    "name": 93030,
    "hr": 4199,
    "bf": "The Car",
    "pname": "",
    "ra": 10.715949,
    "dec": -64.39445,
    "dist": 139.6648,
    "vmag": 2.74
  },
  {
    "name": 93102,
    "hr": 4201,
    "bf": "36    Sex",
    "pname": "",
    "ra": 10.752627,
    "dec": 2.48797,
    "dist": 147.0588,
    "vmag": 6.27
  },
  {
    "name": 93132,
    "hr": 4202,
    "bf": "41    UMa",
    "pname": "",
    "ra": 10.772919,
    "dec": 57.365914,
    "dist": 214.5923,
    "vmag": 6.34
  },
  {
    "name": 93152,
    "hr": 4203,
    "bf": "42    LMi",
    "pname": "",
    "ra": 10.764416,
    "dec": 30.682313,
    "dist": 117.2333,
    "vmag": 5.36
  },
  {
    "name": 93257,
    "hr": 4208,
    "bf": "51    Leo",
    "pname": "",
    "ra": 10.773484,
    "dec": 18.891523,
    "dist": 57.2082,
    "vmag": 5.5
  },
  {
    "name": 93291,
    "hr": 4209,
    "bf": "52    Leo",
    "pname": "",
    "ra": 10.773689,
    "dec": 14.194645,
    "dist": 88.1057,
    "vmag": 5.49
  },
  {
    "name": 93497,
    "hr": 4216,
    "bf": "Mu  Vel",
    "pname": "",
    "ra": 10.779488,
    "dec": -49.420255,
    "dist": 35.9195,
    "vmag": 2.69
  },
  {
    "name": 93636,
    "hr": 4223,
    "bf": "43    LMi",
    "pname": "",
    "ra": 10.815899,
    "dec": 29.416057,
    "dist": 181.1594,
    "vmag": 6.15
  },
  {
    "name": 93702,
    "hr": 4227,
    "bf": "53    Leo",
    "pname": "",
    "ra": 10.820953,
    "dec": 10.545202,
    "dist": 116.6861,
    "vmag": 5.32
  },
  {
    "name": 93742,
    "hr": 4229,
    "bf": "40    Sex",
    "pname": "",
    "ra": 10.821465,
    "dec": -4.02393,
    "dist": 85.9845,
    "vmag": 6.61
  },
  {
    "name": 93765,
    "hr": 4230,
    "bf": "44    LMi",
    "pname": "",
    "ra": 10.831591,
    "dec": 27.973948,
    "dist": 86.6551,
    "vmag": 6.05
  },
  {
    "name": 93779,
    "hr": 4231,
    "bf": "Del1Cha",
    "pname": "",
    "ra": 10.754546,
    "dec": -80.469597,
    "dist": 106.8376,
    "vmag": 5.46
  },
  {
    "name": 93813,
    "hr": 4232,
    "bf": "Nu  Hya",
    "pname": "",
    "ra": 10.827079,
    "dec": -16.193648,
    "dist": 44.0723,
    "vmag": 3.11
  },
  {
    "name": 93845,
    "hr": 4234,
    "bf": "Del2Cha",
    "pname": "",
    "ra": 10.763087,
    "dec": -80.540188,
    "dist": 107.5269,
    "vmag": 4.45
  },
  {
    "name": 93859,
    "hr": 4235,
    "bf": "43    UMa",
    "pname": "",
    "ra": 10.853067,
    "dec": 56.58225,
    "dist": 109.529,
    "vmag": 5.66
  },
  {
    "name": 93875,
    "hr": 4236,
    "bf": "42    UMa",
    "pname": "",
    "ra": 10.856594,
    "dec": 59.320119,
    "dist": 83.5422,
    "vmag": 5.57
  },
  {
    "name": 93903,
    "hr": 4237,
    "bf": "41    Sex",
    "pname": "",
    "ra": 10.838349,
    "dec": -8.897763,
    "dist": 95.2381,
    "vmag": 5.8
  },
  {
    "name": 94247,
    "hr": 4246,
    "bf": "44    UMa",
    "pname": "",
    "ra": 10.892911,
    "dec": 54.585128,
    "dist": 200.4008,
    "vmag": 5.12
  },
  {
    "name": 94264,
    "hr": 4247,
    "bf": "46-LMi",
    "pname": "",
    "ra": 10.888526,
    "dec": 34.214871,
    "dist": 29.0867,
    "vmag": 3.79
  },
  {
    "name": 94334,
    "hr": 4248,
    "bf": "45Ome UMa",
    "pname": "",
    "ra": 10.899648,
    "dec": 43.189956,
    "dist": 75.5287,
    "vmag": 4.66
  },
  {
    "name": 94480,
    "hr": 4254,
    "bf": "48    LMi",
    "pname": "",
    "ra": 10.911714,
    "dec": 25.490722,
    "dist": 118.9061,
    "vmag": 6.19
  },
  {
    "name": 94600,
    "hr": 4258,
    "bf": "46    UMa",
    "pname": "",
    "ra": 10.928999,
    "dec": 33.506929,
    "dist": 72.6216,
    "vmag": 5.02
  },
  {
    "name": 94601,
    "hr": 4259,
    "bf": "54    Leo",
    "pname": "",
    "ra": 10.92689,
    "dec": 24.749718,
    "dist": 87.9507,
    "vmag": 4.3
  },
  {
    "name": 94672,
    "hr": 4265,
    "bf": "55    Leo",
    "pname": "",
    "ra": 10.928444,
    "dec": 0.736922,
    "dist": 44.8632,
    "vmag": 5.91
  },
  {
    "name": 94705,
    "hr": 4267,
    "bf": "56    Leo",
    "pname": "",
    "ra": 10.933742,
    "dec": 6.185371,
    "dist": 119.1895,
    "vmag": 5.91
  },
  {
    "name": 94747,
    "hr": 4270,
    "bf": "50    LMi",
    "pname": "",
    "ra": 10.942897,
    "dec": 25.500244,
    "dist": 78.4929,
    "vmag": 6.36
  },
  {
    "name": 94890,
    "hr": 4273,
    "bf": "Iot Ant",
    "pname": "",
    "ra": 10.945289,
    "dec": -37.137765,
    "dist": 58.2751,
    "vmag": 4.6
  },
  {
    "name": 95128,
    "hr": 4277,
    "bf": "47    UMa",
    "pname": "",
    "ra": 10.99112,
    "dec": 40.430257,
    "dist": 14.0627,
    "vmag": 5.03
  },
  {
    "name": 95272,
    "hr": 4287,
    "bf": "7Alp Crt",
    "pname": "",
    "ra": 10.996244,
    "dec": -18.298783,
    "dist": 48.8043,
    "vmag": 4.08
  },
  {
    "name": 95310,
    "hr": 4288,
    "bf": "49    UMa",
    "pname": "",
    "ra": 11.014009,
    "dec": 39.212092,
    "dist": 115.4734,
    "vmag": 5.06
  },
  {
    "name": 95345,
    "hr": 4291,
    "bf": "58    Leo",
    "pname": "",
    "ra": 11.009347,
    "dec": 3.617494,
    "dist": 110.4972,
    "vmag": 4.84
  },
  {
    "name": 95382,
    "hr": 4294,
    "bf": "59    Leo",
    "pname": "",
    "ra": 11.012445,
    "dec": 6.101449,
    "dist": 46.3607,
    "vmag": 4.98
  },
  {
    "name": 95418,
    "hr": 4295,
    "bf": "β-UMa",
    "pname": "Merak",
    "ra": 11.030677,
    "dec": 56.382427,
    "dist": 24.4499,
    "vmag": 2.34
  },
  {
    "name": 95578,
    "hr": 4299,
    "bf": "61    Leo",
    "pname": "",
    "ra": 11.030465,
    "dec": -2.484585,
    "dist": 179.2115,
    "vmag": 4.73
  },
  {
    "name": 95608,
    "hr": 4300,
    "bf": "60    Leo",
    "pname": "",
    "ra": 11.038827,
    "dec": 20.179842,
    "dist": 38.8651,
    "vmag": 4.42
  },
  {
    "name": 95689,
    "hr": 4301,
    "bf": "α-UMa",
    "pname": "Dubhe",
    "ra": 11.062155,
    "dec": 61.751033,
    "dist": 37.679,
    "vmag": 1.81
  },
  {
    "name": 95849,
    "hr": 4306,
    "bf": "62    Leo",
    "pname": "",
    "ra": 11.060164,
    "dec": -0.000833,
    "dist": 185.8736,
    "vmag": 5.95
  },
  {
    "name": 95934,
    "hr": 4309,
    "bf": "51    UMa",
    "pname": "",
    "ra": 11.075344,
    "dec": 38.241365,
    "dist": 78.8644,
    "vmag": 6.01
  },
  {
    "name": 96097,
    "hr": 4310,
    "bf": "63Chi Leo",
    "pname": "",
    "ra": 11.083619,
    "dec": 7.336007,
    "dist": 28.9939,
    "vmag": 4.62
  },
  {
    "name": 96124,
    "hr": 4312,
    "bf": "Eta Oct",
    "pname": "",
    "ra": 10.987258,
    "dec": -84.593893,
    "dist": 105.4852,
    "vmag": 6.19
  },
  {
    "name": 96202,
    "hr": 4314,
    "bf": "Chi1Hya",
    "pname": "",
    "ra": 11.088867,
    "dec": -27.293612,
    "dist": 43.2339,
    "vmag": 4.92
  },
  {
    "name": 96314,
    "hr": 4317,
    "bf": "Chi2Hya",
    "pname": "",
    "ra": 11.099324,
    "dec": -27.287853,
    "dist": 212.3142,
    "vmag": 5.69
  },
  {
    "name": 96436,
    "hr": 4319,
    "bf": "65    Leo",
    "pname": "",
    "ra": 11.115058,
    "dec": 1.955525,
    "dist": 63.2111,
    "vmag": 5.52
  },
  {
    "name": 96528,
    "hr": 4322,
    "bf": "64    Leo",
    "pname": "",
    "ra": 11.127696,
    "dec": 23.323762,
    "dist": 77.4593,
    "vmag": 6.48
  },
  {
    "name": 96738,
    "hr": 4332,
    "bf": "67    Leo",
    "pname": "",
    "ra": 11.146969,
    "dec": 24.658464,
    "dist": 141.2429,
    "vmag": 5.7
  },
  {
    "name": 96833,
    "hr": 4335,
    "bf": "52Psi UMa",
    "pname": "",
    "ra": 11.161062,
    "dec": 44.498487,
    "dist": 44.3066,
    "vmag": 3
  },
  {
    "name": 97277,
    "hr": 4343,
    "bf": "11Bet Crt",
    "pname": "",
    "ra": 11.194302,
    "dec": -22.825847,
    "dist": 104.2753,
    "vmag": 4.46
  },
  {
    "name": 97411,
    "hr": 4347,
    "bf": "Psi Crt",
    "pname": "",
    "ra": 11.208437,
    "dec": -18.499862,
    "dist": 153.8462,
    "vmag": 6.11
  },
  {
    "name": 97585,
    "hr": 4356,
    "bf": "69    Leo",
    "pname": "",
    "ra": 11.22932,
    "dec": -0.069502,
    "dist": 161.8123,
    "vmag": 5.4
  },
  {
    "name": 97603,
    "hr": 4357,
    "bf": "68Del Leo",
    "pname": "Zosma",
    "ra": 11.235138,
    "dec": 20.523717,
    "dist": 17.9147,
    "vmag": 2.56
  },
  {
    "name": 97633,
    "hr": 4359,
    "bf": "70The Leo",
    "pname": "",
    "ra": 11.237335,
    "dec": 15.42957,
    "dist": 50.6073,
    "vmag": 3.33
  },
  {
    "name": 97778,
    "hr": 4362,
    "bf": "72    Leo",
    "pname": "",
    "ra": 11.253397,
    "dec": 23.095502,
    "dist": 294.1176,
    "vmag": 4.56
  },
  {
    "name": 97907,
    "hr": 4365,
    "bf": "73    Leo",
    "pname": "",
    "ra": 11.264417,
    "dec": 13.307578,
    "dist": 118.4834,
    "vmag": 5.31
  },
  {
    "name": 98058,
    "hr": 4368,
    "bf": "74Phi Leo",
    "pname": "",
    "ra": 11.277695,
    "dec": -3.651601,
    "dist": 56.4653,
    "vmag": 4.45
  },
  {
    "name": 98118,
    "hr": 4371,
    "bf": "75    Leo",
    "pname": "",
    "ra": 11.288167,
    "dec": 2.010556,
    "dist": 101.833,
    "vmag": 5.18
  },
  {
    "name": 98230,
    "hr": 4374,
    "bf": "53Xi  UMa",
    "pname": "",
    "ra": 11.303118,
    "dec": 31.528783,
    "dist": 10.4167,
    "vmag": 4.8
  },
  {
    "name": 98231,
    "hr": 4375,
    "bf": "53Xi  UMa",
    "pname": "",
    "ra": 11.303118,
    "dec": 31.528783,
    "dist": 10.4167,
    "vmag": 4.33
  },
  {
    "name": 98262,
    "hr": 4377,
    "bf": "54Nu  UMa",
    "pname": "",
    "ra": 11.307983,
    "dec": 33.094306,
    "dist": 122.399,
    "vmag": 3.49
  },
  {
    "name": 98353,
    "hr": 4380,
    "bf": "55    UMa",
    "pname": "",
    "ra": 11.318864,
    "dec": 38.185557,
    "dist": 58.8235,
    "vmag": 4.76
  },
  {
    "name": 98366,
    "hr": 4381,
    "bf": "76    Leo",
    "pname": "",
    "ra": 11.315266,
    "dec": 1.650395,
    "dist": 90.2527,
    "vmag": 5.9
  },
  {
    "name": 98430,
    "hr": 4382,
    "bf": "12Del Crt",
    "pname": "",
    "ra": 11.322347,
    "dec": -14.778541,
    "dist": 56.9476,
    "vmag": 3.56
  },
  {
    "name": 98664,
    "hr": 4386,
    "bf": "77Sig Leo",
    "pname": "",
    "ra": 11.352276,
    "dec": 6.029322,
    "dist": 67.4764,
    "vmag": 4.05
  },
  {
    "name": 98718,
    "hr": 4390,
    "bf": "Pi  Cen",
    "pname": "",
    "ra": 11.350117,
    "dec": -54.491019,
    "dist": 109.6491,
    "vmag": 3.9
  },
  {
    "name": 98839,
    "hr": 4392,
    "bf": "56    UMa",
    "pname": "",
    "ra": 11.380442,
    "dec": 43.482703,
    "dist": 163.3987,
    "vmag": 4.99
  },
  {
    "name": 98991,
    "hr": 4395,
    "bf": "13Lam Crt",
    "pname": "",
    "ra": 11.389415,
    "dec": -18.779973,
    "dist": 42.8816,
    "vmag": 5.08
  },
  {
    "name": 99028,
    "hr": 4399,
    "bf": "78Iot Leo",
    "pname": "",
    "ra": 11.398736,
    "dec": 10.529509,
    "dist": 23.6742,
    "vmag": 4
  },
  {
    "name": 99055,
    "hr": 4400,
    "bf": "79    Leo",
    "pname": "",
    "ra": 11.400646,
    "dec": 1.407765,
    "dist": 108.4599,
    "vmag": 5.39
  },
  {
    "name": 99167,
    "hr": 4402,
    "bf": "14Eps Crt",
    "pname": "",
    "ra": 11.410164,
    "dec": -10.859323,
    "dist": 115.3403,
    "vmag": 4.81
  },
  {
    "name": 99211,
    "hr": 4405,
    "bf": "15Gam Crt",
    "pname": "",
    "ra": 11.414702,
    "dec": -17.68401,
    "dist": 25.2398,
    "vmag": 4.06
  },
  {
    "name": 99285,
    "hr": 4408,
    "bf": "81    Leo",
    "pname": "",
    "ra": 11.426771,
    "dec": 16.456539,
    "dist": 43.9174,
    "vmag": 5.58
  },
  {
    "name": 99329,
    "hr": 4410,
    "bf": "80    Leo",
    "pname": "",
    "ra": 11.430571,
    "dec": 3.86011,
    "dist": 55.9284,
    "vmag": 6.35
  },
  {
    "name": 99491,
    "hr": 4414,
    "bf": "83    Leo",
    "pname": "",
    "ra": 11.445923,
    "dec": 3.013102,
    "dist": 17.7462,
    "vmag": 6.49
  },
  {
    "name": 99564,
    "hr": 4416,
    "bf": "16Kap Crt",
    "pname": "",
    "ra": 11.452644,
    "dec": -12.356749,
    "dist": 70.0771,
    "vmag": 5.93
  },
  {
    "name": 99648,
    "hr": 4418,
    "bf": "84Tau Leo",
    "pname": "",
    "ra": 11.465622,
    "dec": 2.856265,
    "dist": 172.4138,
    "vmag": 4.95
  },
  {
    "name": 99787,
    "hr": 4422,
    "bf": "57    UMa",
    "pname": "",
    "ra": 11.484481,
    "dec": 39.336974,
    "dist": 65.2316,
    "vmag": 5.3
  },
  {
    "name": 99902,
    "hr": 4426,
    "bf": "85    Leo",
    "pname": "",
    "ra": 11.494957,
    "dec": 15.413269,
    "dist": 134.2282,
    "vmag": 5.74
  },
  {
    "name": 99984,
    "hr": 4431,
    "bf": "58    UMa",
    "pname": "",
    "ra": 11.508651,
    "dec": 43.173242,
    "dist": 53.4188,
    "vmag": 5.94
  },
  {
    "name": 99998,
    "hr": 4432,
    "bf": "87    Leo",
    "pname": "",
    "ra": 11.505248,
    "dec": -3.003501,
    "dist": 185.1852,
    "vmag": 4.77
  },
  {
    "name": 100006,
    "hr": 4433,
    "bf": "86    Leo",
    "pname": "",
    "ra": 11.508065,
    "dec": 18.409801,
    "dist": 96.5251,
    "vmag": 5.54
  },
  {
    "name": 100029,
    "hr": 4434,
    "bf": "1Lam Dra",
    "pname": "",
    "ra": 11.523407,
    "dec": 69.331076,
    "dist": 102.145,
    "vmag": 3.82
  },
  {
    "name": 100180,
    "hr": 4437,
    "bf": "88    Leo",
    "pname": "",
    "ra": 11.529153,
    "dec": 14.364505,
    "dist": 23.3263,
    "vmag": 6.27
  },
  {
    "name": 100261,
    "hr": 4441,
    "bf": "Omi1Cen",
    "pname": "",
    "ra": 11.529464,
    "dec": -59.442061,
    "dist": 100000,
    "vmag": 5.07
  },
  {
    "name": 100262,
    "hr": 4442,
    "bf": "Omi2Cen",
    "pname": "",
    "ra": 11.530223,
    "dec": -59.515648,
    "dist": 100000,
    "vmag": 5.12
  },
  {
    "name": 100407,
    "hr": 4450,
    "bf": "Xi  Hya",
    "pname": "",
    "ra": 11.550038,
    "dec": -31.857625,
    "dist": 39.7456,
    "vmag": 3.54
  },
  {
    "name": 100563,
    "hr": 4455,
    "bf": "89    Leo",
    "pname": "",
    "ra": 11.572764,
    "dec": 3.060165,
    "dist": 27.2257,
    "vmag": 5.76
  },
  {
    "name": 100600,
    "hr": 4456,
    "bf": "90    Leo",
    "pname": "",
    "ra": 11.57847,
    "dec": 16.796915,
    "dist": 581.3953,
    "vmag": 5.95
  },
  {
    "name": 100696,
    "hr": 4461,
    "bf": "2    Dra",
    "pname": "",
    "ra": 11.600744,
    "dec": 69.322952,
    "dist": 72.8332,
    "vmag": 5.19
  },
  {
    "name": 100841,
    "hr": 4467,
    "bf": "Lam Cen",
    "pname": "",
    "ra": 11.596363,
    "dec": -63.019841,
    "dist": 128.7001,
    "vmag": 3.11
  },
  {
    "name": 100889,
    "hr": 4468,
    "bf": "21The Crt",
    "pname": "",
    "ra": 11.611365,
    "dec": -9.802247,
    "dist": 85.9845,
    "vmag": 4.7
  },
  {
    "name": 100920,
    "hr": 4471,
    "bf": "91Ups Leo",
    "pname": "",
    "ra": 11.615814,
    "dec": -0.823749,
    "dist": 55.6483,
    "vmag": 4.3
  },
  {
    "name": 101107,
    "hr": 4477,
    "bf": "59    UMa",
    "pname": "",
    "ra": 11.639056,
    "dec": 43.625429,
    "dist": 46.49,
    "vmag": 5.56
  },
  {
    "name": 101132,
    "hr": 4479,
    "bf": "Pi  Cha",
    "pname": "",
    "ra": 11.621074,
    "dec": -75.896544,
    "dist": 41.511,
    "vmag": 5.64
  },
  {
    "name": 101133,
    "hr": 4480,
    "bf": "60    UMa",
    "pname": "",
    "ra": 11.642645,
    "dec": 46.834209,
    "dist": 99.2063,
    "vmag": 6.09
  },
  {
    "name": 101153,
    "hr": 4483,
    "bf": "1Ome Vir",
    "pname": "",
    "ra": 11.641002,
    "dec": 8.134298,
    "dist": 152.439,
    "vmag": 5.24
  },
  {
    "name": 101198,
    "hr": 4488,
    "bf": "24Iot Crt",
    "pname": "",
    "ra": 11.644449,
    "dec": -13.201943,
    "dist": 26.7308,
    "vmag": 5.48
  },
  {
    "name": 101431,
    "hr": 4494,
    "bf": "Omi Hya",
    "pname": "",
    "ra": 11.670221,
    "dec": -34.74466,
    "dist": 137.5516,
    "vmag": 4.7
  },
  {
    "name": 101484,
    "hr": 4495,
    "bf": "92    Leo",
    "pname": "",
    "ra": 11.679742,
    "dec": 21.35273,
    "dist": 82.7815,
    "vmag": 5.26
  },
  {
    "name": 101501,
    "hr": 4496,
    "bf": "61    UMa",
    "pname": "",
    "ra": 11.684171,
    "dec": 34.201635,
    "dist": 9.6117,
    "vmag": 5.31
  },
  {
    "name": 101606,
    "hr": 4501,
    "bf": "62    UMa",
    "pname": "",
    "ra": 11.69286,
    "dec": 31.746058,
    "dist": 41.1523,
    "vmag": 5.73
  },
  {
    "name": 101673,
    "hr": 4504,
    "bf": "3    Dra",
    "pname": "",
    "ra": 11.707889,
    "dec": 66.744906,
    "dist": 184.5018,
    "vmag": 5.32
  },
  {
    "name": 102070,
    "hr": 4514,
    "bf": "27Zet Crt",
    "pname": "",
    "ra": 11.746049,
    "dec": -18.350674,
    "dist": 108.2251,
    "vmag": 4.71
  },
  {
    "name": 102124,
    "hr": 4515,
    "bf": "2Xi  Vir",
    "pname": "",
    "ra": 11.754733,
    "dec": 8.258119,
    "dist": 37.4111,
    "vmag": 4.84
  },
  {
    "name": 102212,
    "hr": 4517,
    "bf": "3Nu  Vir",
    "pname": "",
    "ra": 11.764322,
    "dec": 6.529376,
    "dist": 90.0901,
    "vmag": 4.04
  },
  {
    "name": 102224,
    "hr": 4518,
    "bf": "63Chi UMa",
    "pname": "",
    "ra": 11.767515,
    "dec": 47.779406,
    "dist": 56.3063,
    "vmag": 3.69
  },
  {
    "name": 102249,
    "hr": 4520,
    "bf": "Lam Mus",
    "pname": "",
    "ra": 11.760141,
    "dec": -66.728763,
    "dist": 38.9864,
    "vmag": 3.63
  },
  {
    "name": 102509,
    "hr": 4527,
    "bf": "93    Leo",
    "pname": "",
    "ra": 11.799762,
    "dec": 20.218931,
    "dist": 71.3267,
    "vmag": 4.5
  },
  {
    "name": 102510,
    "hr": 4528,
    "bf": "4    Vir",
    "pname": "",
    "ra": 11.798584,
    "dec": 8.245895,
    "dist": 59.1716,
    "vmag": 5.31
  },
  {
    "name": 102584,
    "hr": 4530,
    "bf": "Mu  Mus",
    "pname": "",
    "ra": 11.80403,
    "dec": -66.81491,
    "dist": 131.7523,
    "vmag": 4.75
  },
  {
    "name": 102647,
    "hr": 4534,
    "bf": "94Bet Leo",
    "pname": "Denebola",
    "ra": 11.817663,
    "dec": 14.57206,
    "dist": 10.9999,
    "vmag": 2.14
  },
  {
    "name": 102870,
    "hr": 4540,
    "bf": "5Bet Vir",
    "pname": "",
    "ra": 11.844922,
    "dec": 1.764718,
    "dist": 10.929,
    "vmag": 3.59
  },
  {
    "name": 103192,
    "hr": 4552,
    "bf": "Bet Hya",
    "pname": "",
    "ra": 11.881813,
    "dec": -33.908124,
    "dist": 94.9668,
    "vmag": 4.29
  },
  {
    "name": 103287,
    "hr": 4554,
    "bf": "γ-UMa",
    "pname": "Phecda",
    "ra": 11.897168,
    "dec": 53.69476,
    "dist": 25.5037,
    "vmag": 2.41
  },
  {
    "name": 103484,
    "hr": 4559,
    "bf": "6    Vir",
    "pname": "",
    "ra": 11.917537,
    "dec": 8.443943,
    "dist": 52.5762,
    "vmag": 5.58
  },
  {
    "name": 103483,
    "hr": 4560,
    "bf": "65    UMa",
    "pname": "",
    "ra": 11.918263,
    "dec": 46.476846,
    "dist": 211.8644,
    "vmag": 6.54
  },
  {
    "name": 103498,
    "hr": 4561,
    "bf": "65    UMa",
    "pname": "",
    "ra": 11.919813,
    "dec": 46.469782,
    "dist": 296.7359,
    "vmag": 7.03
  },
  {
    "name": 103578,
    "hr": 4564,
    "bf": "95    Leo",
    "pname": "",
    "ra": 11.927926,
    "dec": 15.646818,
    "dist": 151.7451,
    "vmag": 5.53
  },
  {
    "name": 103605,
    "hr": 4566,
    "bf": "66    UMa",
    "pname": "",
    "ra": 11.932892,
    "dec": 56.59856,
    "dist": 94.8767,
    "vmag": 5.83
  },
  {
    "name": 103632,
    "hr": 4567,
    "bf": "30Eta Crt",
    "pname": "",
    "ra": 11.933599,
    "dec": -17.150829,
    "dist": 77.101,
    "vmag": 5.17
  },
  {
    "name": 104174,
    "hr": 4583,
    "bf": "Eps Cha",
    "pname": "",
    "ra": 11.993796,
    "dec": -78.221839,
    "dist": 110.8647,
    "vmag": 4.88
  },
  {
    "name": 104181,
    "hr": 4585,
    "bf": "7    Vir",
    "pname": "",
    "ra": 11.999142,
    "dec": 3.655197,
    "dist": 93.633,
    "vmag": 5.36
  },
  {
    "name": 104321,
    "hr": 4589,
    "bf": "8Pi  Vir",
    "pname": "",
    "ra": 12.014553,
    "dec": 6.614322,
    "dist": 117.7856,
    "vmag": 4.65
  },
  {
    "name": 104513,
    "hr": 4594,
    "bf": "67    UMa",
    "pname": "",
    "ra": 12.035239,
    "dec": 43.0456,
    "dist": 34.27,
    "vmag": 5.22
  },
  {
    "name": 104671,
    "hr": 4599,
    "bf": "The1Cru",
    "pname": "",
    "ra": 12.050447,
    "dec": -63.31293,
    "dist": 72.0461,
    "vmag": 4.32
  },
  {
    "name": 104827,
    "hr": 4602,
    "bf": "2    Com",
    "pname": "",
    "ra": 12.071277,
    "dec": 21.459153,
    "dist": 101.0101,
    "vmag": 5.89
  },
  {
    "name": 104841,
    "hr": 4603,
    "bf": "The2Cru",
    "pname": "",
    "ra": 12.072008,
    "dec": -63.165711,
    "dist": 261.7801,
    "vmag": 4.72
  },
  {
    "name": 104902,
    "hr": 4605,
    "bf": "Kap Cha",
    "pname": "",
    "ra": 12.079616,
    "dec": -76.519061,
    "dist": 146.1988,
    "vmag": 5.04
  },
  {
    "name": 104979,
    "hr": 4608,
    "bf": "9Omi Vir",
    "pname": "",
    "ra": 12.086817,
    "dec": 8.732985,
    "dist": 50.0501,
    "vmag": 4.12
  },
  {
    "name": 105211,
    "hr": 4616,
    "bf": "Eta Cru",
    "pname": "",
    "ra": 12.114687,
    "dec": -64.61373,
    "dist": 19.755,
    "vmag": 4.14
  },
  {
    "name": 105435,
    "hr": 4621,
    "bf": "Del Cen",
    "pname": "",
    "ra": 12.13931,
    "dec": -50.722425,
    "dist": 127.2265,
    "vmag": 2.58
  },
  {
    "name": 105452,
    "hr": 4623,
    "bf": "1Alp Crv",
    "pname": "",
    "ra": 12.140225,
    "dec": -24.728875,
    "dist": 14.9365,
    "vmag": 4.02
  },
  {
    "name": 105639,
    "hr": 4626,
    "bf": "10    Vir",
    "pname": "",
    "ra": 12.161475,
    "dec": 1.897889,
    "dist": 73.046,
    "vmag": 5.95
  },
  {
    "name": 105702,
    "hr": 4629,
    "bf": "11    Vir",
    "pname": "",
    "ra": 12.167616,
    "dec": 5.807008,
    "dist": 44.0529,
    "vmag": 5.72
  },
  {
    "name": 105707,
    "hr": 4630,
    "bf": "2Eps Crv",
    "pname": "",
    "ra": 12.168746,
    "dec": -22.619766,
    "dist": 97.4659,
    "vmag": 3.02
  },
  {
    "name": 105778,
    "hr": 4632,
    "bf": "3    Com",
    "pname": "",
    "ra": 12.175453,
    "dec": 16.809271,
    "dist": 224.2152,
    "vmag": 6.4
  },
  {
    "name": 105850,
    "hr": 4635,
    "bf": "3    Crv",
    "pname": "",
    "ra": 12.184401,
    "dec": -23.602423,
    "dist": 58.8235,
    "vmag": 5.45
  },
  {
    "name": 105937,
    "hr": 4638,
    "bf": "Rho Cen",
    "pname": "",
    "ra": 12.194202,
    "dec": -52.36846,
    "dist": 116.144,
    "vmag": 3.97
  },
  {
    "name": 105981,
    "hr": 4640,
    "bf": "4    Com",
    "pname": "",
    "ra": 12.19755,
    "dec": 25.87028,
    "dist": 271.7391,
    "vmag": 5.66
  },
  {
    "name": 106002,
    "hr": 4641,
    "bf": "68    UMa",
    "pname": "",
    "ra": 12.195806,
    "dec": 57.054408,
    "dist": 271.7391,
    "vmag": 6.34
  },
  {
    "name": 106057,
    "hr": 4643,
    "bf": "5    Com",
    "pname": "",
    "ra": 12.202581,
    "dec": 20.542064,
    "dist": 130.3781,
    "vmag": 5.6
  },
  {
    "name": 106251,
    "hr": 4650,
    "bf": "12    Vir",
    "pname": "",
    "ra": 12.223872,
    "dec": 10.262341,
    "dist": 50.1756,
    "vmag": 5.85
  },
  {
    "name": 106490,
    "hr": 4656,
    "bf": "Del Cru",
    "pname": "",
    "ra": 12.252427,
    "dec": -58.748928,
    "dist": 105.8201,
    "vmag": 2.79
  },
  {
    "name": 106591,
    "hr": 4660,
    "bf": "δ-UMa",
    "pname": "Megrez",
    "ra": 12.257086,
    "dec": 57.032617,
    "dist": 24.6853,
    "vmag": 3.32
  },
  {
    "name": 106625,
    "hr": 4662,
    "bf": "4Gam Crv",
    "pname": "Gienah Ghurab",
    "ra": 12.263437,
    "dec": -17.541929,
    "dist": 47.1032,
    "vmag": 2.58
  },
  {
    "name": 106661,
    "hr": 4663,
    "bf": "6    Com",
    "pname": "",
    "ra": 12.266719,
    "dec": 14.899071,
    "dist": 60.9013,
    "vmag": 5.09
  },
  {
    "name": 106690,
    "hr": 4666,
    "bf": "2    CVn",
    "pname": "",
    "ra": 12.268763,
    "dec": 40.66018,
    "dist": 236.4066,
    "vmag": 5.69
  },
  {
    "name": 106714,
    "hr": 4667,
    "bf": "7    Com",
    "pname": "",
    "ra": 12.272372,
    "dec": 23.945409,
    "dist": 76.4526,
    "vmag": 4.93
  },
  {
    "name": 106849,
    "hr": 4671,
    "bf": "Eps Mus",
    "pname": "",
    "ra": 12.292917,
    "dec": -67.960736,
    "dist": 92.4214,
    "vmag": 4.06
  },
  {
    "name": 106911,
    "hr": 4674,
    "bf": "Bet Cha",
    "pname": "",
    "ra": 12.305812,
    "dec": -79.31224,
    "dist": 91.4913,
    "vmag": 4.24
  },
  {
    "name": 106983,
    "hr": 4679,
    "bf": "Zet Cru",
    "pname": "",
    "ra": 12.307298,
    "dec": -64.003071,
    "dist": 109.6491,
    "vmag": 4.06
  },
  {
    "name": 107070,
    "hr": 4681,
    "bf": "13    Vir",
    "pname": "",
    "ra": 12.311199,
    "dec": -0.787184,
    "dist": 114.5475,
    "vmag": 5.9
  },
  {
    "name": 107168,
    "hr": 4685,
    "bf": "8    Com",
    "pname": "",
    "ra": 12.321998,
    "dec": 23.034673,
    "dist": 85.6898,
    "vmag": 6.26
  },
  {
    "name": 107213,
    "hr": 4688,
    "bf": "9    Com",
    "pname": "",
    "ra": 12.324873,
    "dec": 28.156916,
    "dist": 54.4662,
    "vmag": 6.38
  },
  {
    "name": 107259,
    "hr": 4689,
    "bf": "15Eta Vir",
    "pname": "",
    "ra": 12.331766,
    "dec": -0.666803,
    "dist": 81.367,
    "vmag": 3.89
  },
  {
    "name": 107274,
    "hr": 4690,
    "bf": "3    CVn",
    "pname": "",
    "ra": 12.330199,
    "dec": 48.984148,
    "dist": 180.8318,
    "vmag": 5.28
  },
  {
    "name": 107328,
    "hr": 4695,
    "bf": "16    Vir",
    "pname": "",
    "ra": 12.339161,
    "dec": 3.312574,
    "dist": 94.4287,
    "vmag": 4.97
  },
  {
    "name": 107348,
    "hr": 4696,
    "bf": "5Zet Crv",
    "pname": "",
    "ra": 12.34268,
    "dec": -22.215901,
    "dist": 127.3885,
    "vmag": 5.2
  },
  {
    "name": 107383,
    "hr": 4697,
    "bf": "11    Com",
    "pname": "",
    "ra": 12.345286,
    "dec": 17.792868,
    "dist": 88.8889,
    "vmag": 4.72
  },
  {
    "name": 107446,
    "hr": 4700,
    "bf": "Eps Cru",
    "pname": "",
    "ra": 12.356031,
    "dec": -60.401147,
    "dist": 70.4722,
    "vmag": 3.59
  },
  {
    "name": 107465,
    "hr": 4701,
    "bf": "70    UMa",
    "pname": "",
    "ra": 12.347461,
    "dec": 57.864118,
    "dist": 194.9318,
    "vmag": 5.54
  },
  {
    "name": 107566,
    "hr": 4703,
    "bf": "Zet2Mus",
    "pname": "",
    "ra": 12.368713,
    "dec": -67.522105,
    "dist": 101.1122,
    "vmag": 5.15
  },
  {
    "name": 107567,
    "hr": 4704,
    "bf": "Zet1Mus",
    "pname": "",
    "ra": 12.370009,
    "dec": -68.307316,
    "dist": 100.2004,
    "vmag": 5.73
  },
  {
    "name": 107700,
    "hr": 4707,
    "bf": "12    Com",
    "pname": "",
    "ra": 12.375087,
    "dec": 25.84616,
    "dist": 90.3342,
    "vmag": 4.78
  },
  {
    "name": 107705,
    "hr": 4708,
    "bf": "17    Vir",
    "pname": "",
    "ra": 12.375566,
    "dec": 5.305444,
    "dist": 29.9222,
    "vmag": 6.46
  },
  {
    "name": 107815,
    "hr": 4711,
    "bf": "6    Crv",
    "pname": "",
    "ra": 12.38933,
    "dec": -24.840669,
    "dist": 101.5228,
    "vmag": 5.66
  },
  {
    "name": 107904,
    "hr": 4715,
    "bf": "4    CVn",
    "pname": "",
    "ra": 12.396397,
    "dec": 42.542743,
    "dist": 95.1475,
    "vmag": 6.03
  },
  {
    "name": 107950,
    "hr": 4716,
    "bf": "5    CVn",
    "pname": "",
    "ra": 12.400414,
    "dec": 51.562257,
    "dist": 118.4834,
    "vmag": 4.76
  },
  {
    "name": 107966,
    "hr": 4717,
    "bf": "13    Com",
    "pname": "",
    "ra": 12.405146,
    "dec": 26.098606,
    "dist": 81.103,
    "vmag": 5.17
  },
  {
    "name": 108135,
    "hr": 4726,
    "bf": "71    UMa",
    "pname": "",
    "ra": 12.41756,
    "dec": 56.777828,
    "dist": 263.1579,
    "vmag": 5.82
  },
  {
    "name": 108225,
    "hr": 4728,
    "bf": "6    CVn",
    "pname": "",
    "ra": 12.43082,
    "dec": 39.018616,
    "dist": 80.1925,
    "vmag": 5.01
  },
  {
    "name": 108248,
    "hr": 4730,
    "bf": "Alp1Cru",
    "pname": "Acrux",
    "ra": 12.443311,
    "dec": -63.099092,
    "dist": 98.7167,
    "vmag": 0.77
  },
  {
    "name": 108283,
    "hr": 4733,
    "bf": "14    Com",
    "pname": "",
    "ra": 12.440018,
    "dec": 27.268237,
    "dist": 84.6024,
    "vmag": 4.92
  },
  {
    "name": 108381,
    "hr": 4737,
    "bf": "15Gam Com",
    "pname": "",
    "ra": 12.448966,
    "dec": 28.268423,
    "dist": 51.2821,
    "vmag": 4.35
  },
  {
    "name": 108382,
    "hr": 4738,
    "bf": "16    Com",
    "pname": "",
    "ra": 12.449805,
    "dec": 26.825699,
    "dist": 85.1789,
    "vmag": 4.98
  },
  {
    "name": 108483,
    "hr": 4743,
    "bf": "Sig Cen",
    "pname": "",
    "ra": 12.467331,
    "dec": -50.230635,
    "dist": 126.2626,
    "vmag": 3.91
  },
  {
    "name": 108502,
    "hr": 4745,
    "bf": "73    UMa",
    "pname": "",
    "ra": 12.459754,
    "dec": 55.712724,
    "dist": 127.8772,
    "vmag": 5.68
  },
  {
    "name": 108662,
    "hr": 4752,
    "bf": "17    Com",
    "pname": "",
    "ra": 12.481863,
    "dec": 25.912852,
    "dist": 72.8863,
    "vmag": 5.29
  },
  {
    "name": 108722,
    "hr": 4753,
    "bf": "18    Com",
    "pname": "",
    "ra": 12.490845,
    "dec": 24.108925,
    "dist": 61.6143,
    "vmag": 5.47
  },
  {
    "name": 108765,
    "hr": 4756,
    "bf": "20    Com",
    "pname": "",
    "ra": 12.495344,
    "dec": 20.896109,
    "dist": 84.0336,
    "vmag": 5.68
  },
  {
    "name": 108767,
    "hr": 4757,
    "bf": "7Del Crv",
    "pname": "Algorab",
    "ra": 12.497739,
    "dec": -16.515432,
    "dist": 26.6312,
    "vmag": 2.94
  },
  {
    "name": 108844,
    "hr": 4760,
    "bf": "74    UMa",
    "pname": "",
    "ra": 12.499267,
    "dec": 58.405742,
    "dist": 83.7521,
    "vmag": 5.37
  },
  {
    "name": 108845,
    "hr": 4761,
    "bf": "7    CVn",
    "pname": "",
    "ra": 12.500815,
    "dec": 51.535631,
    "dist": 44.7628,
    "vmag": 6.21
  },
  {
    "name": 108861,
    "hr": 4762,
    "bf": "75    UMa",
    "pname": "",
    "ra": 12.501178,
    "dec": 58.767773,
    "dist": 119.7605,
    "vmag": 6.07
  },
  {
    "name": 108903,
    "hr": 4763,
    "bf": "Gam Cru",
    "pname": "Gacrux",
    "ra": 12.519429,
    "dec": -57.113212,
    "dist": 27.1518,
    "vmag": 1.59
  },
  {
    "name": 108907,
    "hr": 4765,
    "bf": "4    Dra",
    "pname": "",
    "ra": 12.501868,
    "dec": 69.201123,
    "dist": 190.4762,
    "vmag": 5.01
  },
  {
    "name": 108945,
    "hr": 4766,
    "bf": "21    Com",
    "pname": "",
    "ra": 12.516823,
    "dec": 24.567168,
    "dist": 82.713,
    "vmag": 5.47
  },
  {
    "name": 109026,
    "hr": 4773,
    "bf": "Gam Mus",
    "pname": "",
    "ra": 12.541134,
    "dec": -72.132988,
    "dist": 99.6016,
    "vmag": 3.84
  },
  {
    "name": 109085,
    "hr": 4775,
    "bf": "8Eta Crv",
    "pname": "",
    "ra": 12.53451,
    "dec": -16.196007,
    "dist": 18.2815,
    "vmag": 4.3
  },
  {
    "name": 109217,
    "hr": 4777,
    "bf": "20    Vir",
    "pname": "",
    "ra": 12.5508,
    "dec": 10.295671,
    "dist": 144.9275,
    "vmag": 6.29
  },
  {
    "name": 109307,
    "hr": 4780,
    "bf": "22    Com",
    "pname": "",
    "ra": 12.559506,
    "dec": 24.282984,
    "dist": 89.0472,
    "vmag": 6.28
  },
  {
    "name": 109309,
    "hr": 4781,
    "bf": "21    Vir",
    "pname": "",
    "ra": 12.562986,
    "dec": -9.452077,
    "dist": 79.2393,
    "vmag": 5.48
  },
  {
    "name": 109358,
    "hr": 4785,
    "bf": "8Bet CVn",
    "pname": "",
    "ra": 12.562411,
    "dec": 41.35748,
    "dist": 8.4395,
    "vmag": 4.24
  },
  {
    "name": 109379,
    "hr": 4786,
    "bf": "9Bet Crv",
    "pname": "Kraz",
    "ra": 12.573121,
    "dec": -23.396759,
    "dist": 44.6628,
    "vmag": 2.65
  },
  {
    "name": 109387,
    "hr": 4787,
    "bf": "5Kap Dra",
    "pname": "",
    "ra": 12.558058,
    "dec": 69.788238,
    "dist": 150.3759,
    "vmag": 3.85
  },
  {
    "name": 109485,
    "hr": 4789,
    "bf": "23    Com",
    "pname": "",
    "ra": 12.580857,
    "dec": 22.629259,
    "dist": 95.057,
    "vmag": 4.8
  },
  {
    "name": 109510,
    "hr": 4791,
    "bf": "24    Com",
    "pname": "",
    "ra": 12.5851,
    "dec": 18.377065,
    "dist": 51.8403,
    "vmag": 6.57
  },
  {
    "name": 109511,
    "hr": 4792,
    "bf": "24    Com",
    "pname": "",
    "ra": 12.585489,
    "dec": 18.377058,
    "dist": 138.1215,
    "vmag": 5.03
  },
  {
    "name": 109551,
    "hr": 4795,
    "bf": "6    Dra",
    "pname": "",
    "ra": 12.578902,
    "dec": 70.02177,
    "dist": 184.5018,
    "vmag": 4.95
  },
  {
    "name": 109668,
    "hr": 4798,
    "bf": "Alp Mus",
    "pname": "",
    "ra": 12.619739,
    "dec": -69.135564,
    "dist": 96.7118,
    "vmag": 2.69
  },
  {
    "name": 109704,
    "hr": 4799,
    "bf": "25    Vir",
    "pname": "",
    "ra": 12.613154,
    "dec": -5.831898,
    "dist": 69.0131,
    "vmag": 5.88
  },
  {
    "name": 109742,
    "hr": 4801,
    "bf": "25    Com",
    "pname": "",
    "ra": 12.616204,
    "dec": 17.089536,
    "dist": 194.5525,
    "vmag": 5.7
  },
  {
    "name": 109787,
    "hr": 4802,
    "bf": "Tau Cen",
    "pname": "",
    "ra": 12.628394,
    "dec": -48.541304,
    "dist": 40.2414,
    "vmag": 3.85
  },
  {
    "name": 109980,
    "hr": 4811,
    "bf": "9    CVn",
    "pname": "",
    "ra": 12.646189,
    "dec": 40.874662,
    "dist": 67.8426,
    "vmag": 6.35
  },
  {
    "name": 110014,
    "hr": 4813,
    "bf": "26Chi Vir",
    "pname": "",
    "ra": 12.654102,
    "dec": -7.995564,
    "dist": 90.009,
    "vmag": 4.66
  },
  {
    "name": 110024,
    "hr": 4815,
    "bf": "26    Com",
    "pname": "",
    "ra": 12.652031,
    "dec": 21.062559,
    "dist": 83.8223,
    "vmag": 5.49
  },
  {
    "name": 110304,
    "hr": 4819,
    "bf": "Gam Cen",
    "pname": "",
    "ra": 12.691971,
    "dec": -48.959888,
    "dist": 39.9042,
    "vmag": 2.2
  },
  {
    "name": 110377,
    "hr": 4824,
    "bf": "27    Vir",
    "pname": "",
    "ra": 12.692887,
    "dec": 10.42627,
    "dist": 62.8931,
    "vmag": 6.22
  },
  {
    "name": 110379,
    "hr": 4825,
    "bf": "29Gam Vir",
    "pname": "Porrima",
    "ra": 12.694345,
    "dec": -1.449375,
    "dist": 11.685,
    "vmag": 2.74
  },
  {
    "name": 110380,
    "hr": 4826,
    "bf": "29Gam Vir",
    "pname": "",
    "ra": 12.694171,
    "dec": -1.449235,
    "dist": 11.8301,
    "vmag": 3.52
  },
  {
    "name": 110411,
    "hr": 4828,
    "bf": "30Rho Vir",
    "pname": "",
    "ra": 12.698071,
    "dec": 10.235625,
    "dist": 36.2713,
    "vmag": 4.88
  },
  {
    "name": 110423,
    "hr": 4829,
    "bf": "31    Vir",
    "pname": "",
    "ra": 12.699199,
    "dec": 6.806617,
    "dist": 71.5308,
    "vmag": 5.57
  },
  {
    "name": 110462,
    "hr": 4833,
    "bf": "76    UMa",
    "pname": "",
    "ra": 12.692759,
    "dec": 62.713039,
    "dist": 160,
    "vmag": 6.02
  },
  {
    "name": 110829,
    "hr": 4842,
    "bf": "Iot Cru",
    "pname": "",
    "ra": 12.76055,
    "dec": -60.981318,
    "dist": 36.8053,
    "vmag": 4.69
  },
  {
    "name": 110879,
    "hr": 4844,
    "bf": "Bet Mus",
    "pname": "",
    "ra": 12.771346,
    "dec": -68.108119,
    "dist": 104.712,
    "vmag": 3.04
  },
  {
    "name": 110897,
    "hr": 4845,
    "bf": "10    CVn",
    "pname": "",
    "ra": 12.749852,
    "dec": 39.278916,
    "dist": 17.3762,
    "vmag": 5.95
  },
  {
    "name": 110951,
    "hr": 4847,
    "bf": "32    Vir",
    "pname": "",
    "ra": 12.760294,
    "dec": 7.673326,
    "dist": 77.4593,
    "vmag": 5.22
  },
  {
    "name": 111028,
    "hr": 4849,
    "bf": "33    Vir",
    "pname": "",
    "ra": 12.772928,
    "dec": 9.539684,
    "dist": 45.1467,
    "vmag": 5.65
  },
  {
    "name": 111067,
    "hr": 4851,
    "bf": "27    Com",
    "pname": "",
    "ra": 12.777433,
    "dec": 16.577691,
    "dist": 104.1667,
    "vmag": 5.12
  },
  {
    "name": 111123,
    "hr": 4853,
    "bf": "Bet Cru",
    "pname": "Becrux",
    "ra": 12.795359,
    "dec": -59.688764,
    "dist": 85.3971,
    "vmag": 1.25
  },
  {
    "name": 111164,
    "hr": 4855,
    "bf": "34    Vir",
    "pname": "",
    "ra": 12.787123,
    "dec": 11.958088,
    "dist": 83.2639,
    "vmag": 6.11
  },
  {
    "name": 111239,
    "hr": 4858,
    "bf": "35    Vir",
    "pname": "",
    "ra": 12.797614,
    "dec": 3.572716,
    "dist": 178.8909,
    "vmag": 6.42
  },
  {
    "name": 111308,
    "hr": 4861,
    "bf": "28    Com",
    "pname": "",
    "ra": 12.803982,
    "dec": 13.553018,
    "dist": 125.7862,
    "vmag": 6.47
  },
  {
    "name": 111335,
    "hr": 4863,
    "bf": "7    Dra",
    "pname": "",
    "ra": 12.792873,
    "dec": 66.790304,
    "dist": 227.2727,
    "vmag": 5.43
  },
  {
    "name": 111397,
    "hr": 4865,
    "bf": "29    Com",
    "pname": "",
    "ra": 12.815059,
    "dec": 14.122584,
    "dist": 122.399,
    "vmag": 5.71
  },
  {
    "name": 111421,
    "hr": 4866,
    "bf": "11    CVn",
    "pname": "",
    "ra": 12.811617,
    "dec": 48.466838,
    "dist": 137.5516,
    "vmag": 6.25
  },
  {
    "name": 111469,
    "hr": 4869,
    "bf": "30    Com",
    "pname": "",
    "ra": 12.821516,
    "dec": 27.552379,
    "dist": 92.9368,
    "vmag": 5.76
  },
  {
    "name": 111482,
    "hr": 4870,
    "bf": "Iot Oct",
    "pname": "",
    "ra": 12.916219,
    "dec": -85.123369,
    "dist": 107.8749,
    "vmag": 5.45
  },
  {
    "name": 111765,
    "hr": 4878,
    "bf": "37    Vir",
    "pname": "",
    "ra": 12.860247,
    "dec": 3.056788,
    "dist": 183.4862,
    "vmag": 6.02
  },
  {
    "name": 111812,
    "hr": 4883,
    "bf": "31    Com",
    "pname": "",
    "ra": 12.861645,
    "dec": 27.540712,
    "dist": 89.1266,
    "vmag": 4.93
  },
  {
    "name": 111862,
    "hr": 4884,
    "bf": "32    Com",
    "pname": "",
    "ra": 12.870071,
    "dec": 17.073943,
    "dist": 598.8024,
    "vmag": 6.32
  },
  {
    "name": 111973,
    "hr": 4890,
    "bf": "Kap Cru",
    "pname": "",
    "ra": 12.896923,
    "dec": -60.376244,
    "dist": 100000,
    "vmag": 5.89
  },
  {
    "name": 111998,
    "hr": 4891,
    "bf": "38    Vir",
    "pname": "",
    "ra": 12.886433,
    "dec": -3.553098,
    "dist": 32.7332,
    "vmag": 6.11
  },
  {
    "name": 112033,
    "hr": 4894,
    "bf": "35    Com",
    "pname": "",
    "ra": 12.888263,
    "dec": 21.244943,
    "dist": 86.8056,
    "vmag": 4.89
  },
  {
    "name": 112078,
    "hr": 4897,
    "bf": "Lam Cru",
    "pname": "",
    "ra": 12.910889,
    "dec": -59.146701,
    "dist": 117.6471,
    "vmag": 4.62
  },
  {
    "name": 112092,
    "hr": 4898,
    "bf": "Mu 1Cru",
    "pname": "",
    "ra": 12.9099,
    "dec": -57.177924,
    "dist": 127.0648,
    "vmag": 4.03
  },
  {
    "name": 112091,
    "hr": 4899,
    "bf": "Mu 2Cru",
    "pname": "",
    "ra": 12.910251,
    "dec": -57.16867,
    "dist": 124.8439,
    "vmag": 5.08
  },
  {
    "name": 112097,
    "hr": 4900,
    "bf": "41    Vir",
    "pname": "",
    "ra": 12.897142,
    "dec": 12.418416,
    "dist": 60.9013,
    "vmag": 6.25
  },
  {
    "name": 112142,
    "hr": 4902,
    "bf": "40Psi Vir",
    "pname": "",
    "ra": 12.905879,
    "dec": -9.538994,
    "dist": 166.9449,
    "vmag": 4.77
  },
  {
    "name": 112185,
    "hr": 4905,
    "bf": "ε-UMa",
    "pname": "Alioth",
    "ra": 12.900472,
    "dec": 55.959821,
    "dist": 25.31,
    "vmag": 1.76
  },
  {
    "name": 112300,
    "hr": 4910,
    "bf": "43Del Vir",
    "pname": "",
    "ra": 12.926725,
    "dec": 3.39747,
    "dist": 60.8273,
    "vmag": 3.39
  },
  {
    "name": 112412,
    "hr": 4914,
    "bf": "12Alp1CVn",
    "pname": "",
    "ra": 12.933468,
    "dec": 38.314912,
    "dist": 36.9004,
    "vmag": 5.61
  },
  {
    "name": 112413,
    "hr": 4915,
    "bf": "12Alp2CVn",
    "pname": "Cor Caroli",
    "ra": 12.933807,
    "dec": 38.31838,
    "dist": 35.1989,
    "vmag": 2.89
  },
  {
    "name": 112429,
    "hr": 4916,
    "bf": "8    Dra",
    "pname": "",
    "ra": 12.924598,
    "dec": 65.438474,
    "dist": 29.2912,
    "vmag": 5.23
  },
  {
    "name": 112769,
    "hr": 4920,
    "bf": "36    Com",
    "pname": "",
    "ra": 12.982068,
    "dec": 17.409446,
    "dist": 99.4036,
    "vmag": 4.76
  },
  {
    "name": 112846,
    "hr": 4921,
    "bf": "44    Vir",
    "pname": "",
    "ra": 12.99431,
    "dec": -3.811926,
    "dist": 77.9423,
    "vmag": 5.79
  },
  {
    "name": 112985,
    "hr": 4923,
    "bf": "Del Mus",
    "pname": "",
    "ra": 13.037759,
    "dec": -71.548855,
    "dist": 27.8707,
    "vmag": 3.61
  },
  {
    "name": 112989,
    "hr": 4924,
    "bf": "37    Com",
    "pname": "",
    "ra": 13.004576,
    "dec": 30.785021,
    "dist": 202.4291,
    "vmag": 4.88
  },
  {
    "name": 112992,
    "hr": 4925,
    "bf": "46    Vir",
    "pname": "",
    "ra": 13.009985,
    "dec": -3.368488,
    "dist": 100.3009,
    "vmag": 5.99
  },
  {
    "name": 113092,
    "hr": 4928,
    "bf": "9    Dra",
    "pname": "",
    "ra": 12.998665,
    "dec": 66.597272,
    "dist": 191.5709,
    "vmag": 5.37
  },
  {
    "name": 113095,
    "hr": 4929,
    "bf": "38    Com",
    "pname": "",
    "ra": 13.019337,
    "dec": 17.123147,
    "dist": 124.6883,
    "vmag": 5.97
  },
  {
    "name": 113139,
    "hr": 4931,
    "bf": "78    UMa",
    "pname": "",
    "ra": 13.012125,
    "dec": 56.366338,
    "dist": 25.4453,
    "vmag": 4.93
  },
  {
    "name": 113226,
    "hr": 4932,
    "bf": "47Eps Vir",
    "pname": "Vindemiatrix",
    "ra": 13.036278,
    "dec": 10.95915,
    "dist": 33.6022,
    "vmag": 2.85
  },
  {
    "name": 113314,
    "hr": 4933,
    "bf": "Xi 1Cen",
    "pname": "",
    "ra": 13.059256,
    "dec": -49.527264,
    "dist": 67.6133,
    "vmag": 4.83
  },
  {
    "name": 113459,
    "hr": 4937,
    "bf": "48    Vir",
    "pname": "",
    "ra": 13.065117,
    "dec": -3.663143,
    "dist": 155.0388,
    "vmag": 6.62
  },
  {
    "name": 113791,
    "hr": 4942,
    "bf": "Xi 2Cen",
    "pname": "",
    "ra": 13.11518,
    "dec": -49.906246,
    "dist": 143.2665,
    "vmag": 4.27
  },
  {
    "name": 113797,
    "hr": 4943,
    "bf": "14    CVn",
    "pname": "",
    "ra": 13.095678,
    "dec": 35.798899,
    "dist": 104.3841,
    "vmag": 5.2
  },
  {
    "name": 113848,
    "hr": 4946,
    "bf": "39    Com",
    "pname": "",
    "ra": 13.105901,
    "dec": 21.153397,
    "dist": 49.6771,
    "vmag": 6
  },
  {
    "name": 113866,
    "hr": 4949,
    "bf": "40    Com",
    "pname": "",
    "ra": 13.106278,
    "dec": 22.616187,
    "dist": 225.7336,
    "vmag": 5.53
  },
  {
    "name": 113904,
    "hr": 4952,
    "bf": "The Mus",
    "pname": "",
    "ra": 13.135321,
    "dec": -65.306023,
    "dist": 100000,
    "vmag": 5.44
  },
  {
    "name": 113996,
    "hr": 4954,
    "bf": "41    Com",
    "pname": "",
    "ra": 13.119646,
    "dec": 27.624741,
    "dist": 101.626,
    "vmag": 4.8
  },
  {
    "name": 114038,
    "hr": 4955,
    "bf": "49    Vir",
    "pname": "",
    "ra": 13.131614,
    "dec": -10.740408,
    "dist": 94.2507,
    "vmag": 5.15
  },
  {
    "name": 114149,
    "hr": 4958,
    "bf": "45Psi Hya",
    "pname": "",
    "ra": 13.150909,
    "dec": -23.11807,
    "dist": 70.9723,
    "vmag": 4.94
  },
  {
    "name": 114287,
    "hr": 4961,
    "bf": "50    Vir",
    "pname": "",
    "ra": 13.162578,
    "dec": -10.329327,
    "dist": 212.766,
    "vmag": 5.95
  },
  {
    "name": 114330,
    "hr": 4963,
    "bf": "51The Vir",
    "pname": "",
    "ra": 13.165831,
    "dec": -5.53901,
    "dist": 96.8054,
    "vmag": 4.38
  },
  {
    "name": 114376,
    "hr": 4967,
    "bf": "15    CVn",
    "pname": "",
    "ra": 13.161676,
    "dec": 38.533885,
    "dist": 370.3704,
    "vmag": 6.25
  },
  {
    "name": 114378,
    "hr": 4968,
    "bf": "42Alp Com",
    "pname": "",
    "ra": 13.166469,
    "dec": 17.529431,
    "dist": 17.8253,
    "vmag": 4.32
  },
  {
    "name": 114379,
    "hr": 4969,
    "bf": "42Alp Com",
    "pname": "",
    "ra": 13.166389,
    "dec": 17.528977,
    "dist": 14.3246,
    "vmag": 5.17
  },
  {
    "name": 114447,
    "hr": 4971,
    "bf": "17    CVn",
    "pname": "",
    "ra": 13.167563,
    "dec": 38.498981,
    "dist": 63.2911,
    "vmag": 5.91
  },
  {
    "name": 114642,
    "hr": 4981,
    "bf": "53    Vir",
    "pname": "",
    "ra": 13.200984,
    "dec": -16.198601,
    "dist": 33.9098,
    "vmag": 5.04
  },
  {
    "name": 114710,
    "hr": 4983,
    "bf": "43Bet Com",
    "pname": "",
    "ra": 13.197904,
    "dec": 27.878183,
    "dist": 9.1291,
    "vmag": 4.23
  },
  {
    "name": 114846,
    "hr": 4990,
    "bf": "54    Vir",
    "pname": "",
    "ra": 13.224121,
    "dec": -18.826406,
    "dist": 194.1748,
    "vmag": 6.26
  },
  {
    "name": 114911,
    "hr": 4993,
    "bf": "Eta Mus",
    "pname": "",
    "ra": 13.25416,
    "dec": -67.894589,
    "dist": 117.3709,
    "vmag": 4.79
  },
  {
    "name": 114946,
    "hr": 4995,
    "bf": "55    Vir",
    "pname": "",
    "ra": 13.236361,
    "dec": -19.930947,
    "dist": 38.9712,
    "vmag": 5.31
  },
  {
    "name": 115202,
    "hr": 5001,
    "bf": "57    Vir",
    "pname": "",
    "ra": 13.266322,
    "dec": -19.943103,
    "dist": 38.4763,
    "vmag": 5.21
  },
  {
    "name": 115271,
    "hr": 5004,
    "bf": "19    CVn",
    "pname": "",
    "ra": 13.258882,
    "dec": 40.855199,
    "dist": 74.0741,
    "vmag": 5.77
  },
  {
    "name": 115383,
    "hr": 5011,
    "bf": "59    Vir",
    "pname": "",
    "ra": 13.279588,
    "dec": 9.424156,
    "dist": 17.5593,
    "vmag": 5.19
  },
  {
    "name": 115521,
    "hr": 5015,
    "bf": "60Sig Vir",
    "pname": "",
    "ra": 13.293412,
    "dec": 5.469869,
    "dist": 207.0393,
    "vmag": 4.78
  },
  {
    "name": 115604,
    "hr": 5017,
    "bf": "20    CVn",
    "pname": "",
    "ra": 13.292379,
    "dec": 40.572608,
    "dist": 81.0373,
    "vmag": 4.72
  },
  {
    "name": 115617,
    "hr": 5019,
    "bf": "61    Vir",
    "pname": "",
    "ra": 13.306763,
    "dec": -18.311196,
    "dist": 8.5551,
    "vmag": 4.74
  },
  {
    "name": 115659,
    "hr": 5020,
    "bf": "46Gam Hya",
    "pname": "",
    "ra": 13.315359,
    "dec": -23.171512,
    "dist": 41.0341,
    "vmag": 2.99
  },
  {
    "name": 115735,
    "hr": 5023,
    "bf": "21    CVn",
    "pname": "",
    "ra": 13.304034,
    "dec": 49.682062,
    "dist": 84.246,
    "vmag": 5.14
  },
  {
    "name": 115892,
    "hr": 5028,
    "bf": "Iot Cen",
    "pname": "",
    "ra": 13.343296,
    "dec": -36.712295,
    "dist": 18.0213,
    "vmag": 2.75
  },
  {
    "name": 116010,
    "hr": 5032,
    "bf": "23    CVn",
    "pname": "",
    "ra": 13.3386,
    "dec": 40.150548,
    "dist": 156.0062,
    "vmag": 5.6
  },
  {
    "name": 116235,
    "hr": 5040,
    "bf": "64    Vir",
    "pname": "",
    "ra": 13.369358,
    "dec": 5.154764,
    "dist": 65.9196,
    "vmag": 5.89
  },
  {
    "name": 116244,
    "hr": 5042,
    "bf": "Iot1Mus",
    "pname": "",
    "ra": 13.418694,
    "dec": -74.887818,
    "dist": 67.7966,
    "vmag": 5.04
  },
  {
    "name": 116292,
    "hr": 5044,
    "bf": "63    Vir",
    "pname": "",
    "ra": 13.383643,
    "dec": -17.735274,
    "dist": 93.8086,
    "vmag": 5.36
  },
  {
    "name": 116365,
    "hr": 5047,
    "bf": "65    Vir",
    "pname": "",
    "ra": 13.388582,
    "dec": -4.924427,
    "dist": 381.6794,
    "vmag": 5.88
  },
  {
    "name": 116568,
    "hr": 5050,
    "bf": "66    Vir",
    "pname": "",
    "ra": 13.40923,
    "dec": -5.16401,
    "dist": 29.967,
    "vmag": 5.76
  },
  {
    "name": 116579,
    "hr": 5051,
    "bf": "Iot2Mus",
    "pname": "",
    "ra": 13.455154,
    "dec": -74.691755,
    "dist": 159.4896,
    "vmag": 6.62
  },
  {
    "name": 116656,
    "hr": 5054,
    "bf": "79Zet UMa",
    "pname": "Mizar",
    "ra": 13.398747,
    "dec": 54.925362,
    "dist": 26.3089,
    "vmag": 2.23
  },
  {
    "name": 116657,
    "hr": 5055,
    "bf": "79Zet UMa",
    "pname": "",
    "ra": 13.398996,
    "dec": 54.920471,
    "dist": 24.1546,
    "vmag": 3.95
  },
  {
    "name": 116658,
    "hr": 5056,
    "bf": "67Alp Vir",
    "pname": "Spica",
    "ra": 13.419883,
    "dec": -11.161322,
    "dist": 76.5697,
    "vmag": 0.98
  },
  {
    "name": 116842,
    "hr": 5062,
    "bf": "80    UMa",
    "pname": "Alcor",
    "ra": 13.420413,
    "dec": 54.987958,
    "dist": 25.0564,
    "vmag": 3.99
  },
  {
    "name": 116870,
    "hr": 5064,
    "bf": "68    Vir",
    "pname": "",
    "ra": 13.445325,
    "dec": -12.707664,
    "dist": 134.9528,
    "vmag": 5.27
  },
  {
    "name": 116976,
    "hr": 5068,
    "bf": "69    Vir",
    "pname": "",
    "ra": 13.457546,
    "dec": -15.973578,
    "dist": 85.9107,
    "vmag": 4.76
  },
  {
    "name": 117176,
    "hr": 5072,
    "bf": "70    Vir",
    "pname": "",
    "ra": 13.473837,
    "dec": 13.778787,
    "dist": 17.9856,
    "vmag": 4.97
  },
  {
    "name": 117304,
    "hr": 5081,
    "bf": "71    Vir",
    "pname": "",
    "ra": 13.486945,
    "dec": 10.81831,
    "dist": 98.2318,
    "vmag": 5.65
  },
  {
    "name": 117374,
    "hr": 5084,
    "bf": "Kap Oct",
    "pname": "",
    "ra": 13.682257,
    "dec": -85.786043,
    "dist": 83.7521,
    "vmag": 5.56
  },
  {
    "name": 117436,
    "hr": 5088,
    "bf": "72    Vir",
    "pname": "",
    "ra": 13.507146,
    "dec": -6.470265,
    "dist": 53.2198,
    "vmag": 6.1
  },
  {
    "name": 117661,
    "hr": 5094,
    "bf": "73    Vir",
    "pname": "",
    "ra": 13.534114,
    "dec": -18.72888,
    "dist": 76.5697,
    "vmag": 6.01
  },
  {
    "name": 117675,
    "hr": 5095,
    "bf": "74    Vir",
    "pname": "",
    "ra": 13.532746,
    "dec": -6.255816,
    "dist": 122.549,
    "vmag": 4.68
  },
  {
    "name": 117789,
    "hr": 5099,
    "bf": "75    Vir",
    "pname": "",
    "ra": 13.547679,
    "dec": -15.363012,
    "dist": 157.7287,
    "vmag": 5.52
  },
  {
    "name": 117818,
    "hr": 5100,
    "bf": "76    Vir",
    "pname": "",
    "ra": 13.549465,
    "dec": -10.165,
    "dist": 72.0981,
    "vmag": 5.21
  },
  {
    "name": 118022,
    "hr": 5105,
    "bf": "78    Vir",
    "pname": "",
    "ra": 13.56887,
    "dec": 3.658967,
    "dist": 56.6572,
    "vmag": 4.92
  },
  {
    "name": 118098,
    "hr": 5107,
    "bf": "79Zet Vir",
    "pname": "",
    "ra": 13.57822,
    "dec": -0.59582,
    "dist": 22.7118,
    "vmag": 3.38
  },
  {
    "name": 118214,
    "hr": 5109,
    "bf": "81    UMa",
    "pname": "",
    "ra": 13.568698,
    "dec": 55.348434,
    "dist": 91.5751,
    "vmag": 5.6
  },
  {
    "name": 118219,
    "hr": 5111,
    "bf": "80    Vir",
    "pname": "",
    "ra": 13.592027,
    "dec": -5.396191,
    "dist": 97.1817,
    "vmag": 5.7
  },
  {
    "name": 118232,
    "hr": 5112,
    "bf": "24    CVn",
    "pname": "",
    "ra": 13.57425,
    "dec": 49.015973,
    "dist": 55.2792,
    "vmag": 4.68
  },
  {
    "name": 118623,
    "hr": 5127,
    "bf": "25    CVn",
    "pname": "",
    "ra": 13.624345,
    "dec": 36.294898,
    "dist": 60.9013,
    "vmag": 4.82
  },
  {
    "name": 118716,
    "hr": 5132,
    "bf": "Eps Cen",
    "pname": "",
    "ra": 13.664796,
    "dec": -53.466394,
    "dist": 131.0616,
    "vmag": 2.29
  },
  {
    "name": 119024,
    "hr": 5142,
    "bf": "82    UMa",
    "pname": "",
    "ra": 13.658472,
    "dec": 52.921208,
    "dist": 53.5906,
    "vmag": 5.46
  },
  {
    "name": 119055,
    "hr": 5144,
    "bf": "1    Boo",
    "pname": "",
    "ra": 13.677909,
    "dec": 19.955719,
    "dist": 100.6036,
    "vmag": 5.73
  },
  {
    "name": 119126,
    "hr": 5149,
    "bf": "2    Boo",
    "pname": "",
    "ra": 13.683986,
    "dec": 22.495768,
    "dist": 102.9866,
    "vmag": 5.63
  },
  {
    "name": 119149,
    "hr": 5150,
    "bf": "82    Vir",
    "pname": "",
    "ra": 13.693549,
    "dec": -8.702984,
    "dist": 156.25,
    "vmag": 5.03
  },
  {
    "name": 119228,
    "hr": 5154,
    "bf": "83    UMa",
    "pname": "",
    "ra": 13.678967,
    "dec": 54.681634,
    "dist": 160.5136,
    "vmag": 4.63
  },
  {
    "name": 119425,
    "hr": 5159,
    "bf": "84    Vir",
    "pname": "",
    "ra": 13.717698,
    "dec": 3.537903,
    "dist": 73.0994,
    "vmag": 5.35
  },
  {
    "name": 119605,
    "hr": 5165,
    "bf": "83    Vir",
    "pname": "",
    "ra": 13.741618,
    "dec": -16.179072,
    "dist": 252.5253,
    "vmag": 5.55
  },
  {
    "name": 119756,
    "hr": 5168,
    "bf": "1    Cen",
    "pname": "",
    "ra": 13.761471,
    "dec": -33.043721,
    "dist": 19.4024,
    "vmag": 4.23
  },
  {
    "name": 119786,
    "hr": 5170,
    "bf": "85    Vir",
    "pname": "",
    "ra": 13.759741,
    "dec": -15.767467,
    "dist": 106.0445,
    "vmag": 6.18
  },
  {
    "name": 119853,
    "hr": 5173,
    "bf": "86    Vir",
    "pname": "",
    "ra": 13.765644,
    "dec": -12.426528,
    "dist": 124.6883,
    "vmag": 5.5
  },
  {
    "name": 120052,
    "hr": 5181,
    "bf": "87    Vir",
    "pname": "",
    "ra": 13.790386,
    "dec": -17.859839,
    "dist": 207.4689,
    "vmag": 5.41
  },
  {
    "name": 120064,
    "hr": 5182,
    "bf": "3    Boo",
    "pname": "",
    "ra": 13.778701,
    "dec": 25.702236,
    "dist": 89.6861,
    "vmag": 5.97
  },
  {
    "name": 120136,
    "hr": 5185,
    "bf": "4Tau Boo",
    "pname": "",
    "ra": 13.78771,
    "dec": 17.456906,
    "dist": 15.6177,
    "vmag": 4.5
  },
  {
    "name": 120198,
    "hr": 5187,
    "bf": "84    UMa",
    "pname": "",
    "ra": 13.776573,
    "dec": 54.432679,
    "dist": 89.0472,
    "vmag": 5.68
  },
  {
    "name": 120307,
    "hr": 5190,
    "bf": "Nu  Cen",
    "pname": "",
    "ra": 13.825078,
    "dec": -41.687709,
    "dist": 133.8688,
    "vmag": 3.41
  },
  {
    "name": 120315,
    "hr": 5191,
    "bf": "85Eta UMa",
    "pname": "Alkaid",
    "ra": 13.792354,
    "dec": 49.313265,
    "dist": 31.8674,
    "vmag": 1.85
  },
  {
    "name": 120323,
    "hr": 5192,
    "bf": "2    Cen",
    "pname": "",
    "ra": 13.824091,
    "dec": -34.450776,
    "dist": 56.1167,
    "vmag": 4.19
  },
  {
    "name": 120324,
    "hr": 5193,
    "bf": "Mu  Cen",
    "pname": "",
    "ra": 13.826943,
    "dec": -42.473732,
    "dist": 155.0388,
    "vmag": 3.47
  },
  {
    "name": 120452,
    "hr": 5196,
    "bf": "89    Vir",
    "pname": "",
    "ra": 13.831191,
    "dec": -18.134168,
    "dist": 74.9064,
    "vmag": 4.96
  },
  {
    "name": 120477,
    "hr": 5200,
    "bf": "5Ups Boo",
    "pname": "",
    "ra": 13.824623,
    "dec": 15.797905,
    "dist": 80.7754,
    "vmag": 4.05
  },
  {
    "name": 120539,
    "hr": 5201,
    "bf": "6    Boo",
    "pname": "",
    "ra": 13.828564,
    "dec": 21.264105,
    "dist": 123.0012,
    "vmag": 4.92
  },
  {
    "name": 120709,
    "hr": 5210,
    "bf": "3    Cen",
    "pname": "",
    "ra": 13.863779,
    "dec": -32.994089,
    "dist": 105.3741,
    "vmag": 4.32
  },
  {
    "name": 120955,
    "hr": 5221,
    "bf": "4    Cen",
    "pname": "",
    "ra": 13.886817,
    "dec": -31.927612,
    "dist": 195.3125,
    "vmag": 4.75
  },
  {
    "name": 121107,
    "hr": 5225,
    "bf": "7    Boo",
    "pname": "",
    "ra": 13.886925,
    "dec": 17.932868,
    "dist": 211.4165,
    "vmag": 5.71
  },
  {
    "name": 121130,
    "hr": 5226,
    "bf": "10    Dra",
    "pname": "",
    "ra": 13.857205,
    "dec": 64.723272,
    "dist": 113.8952,
    "vmag": 4.58
  },
  {
    "name": 121263,
    "hr": 5231,
    "bf": "Zet Cen",
    "pname": "",
    "ra": 13.925667,
    "dec": -47.288375,
    "dist": 117.096,
    "vmag": 2.55
  },
  {
    "name": 121299,
    "hr": 5232,
    "bf": "90    Vir",
    "pname": "",
    "ra": 13.911707,
    "dec": -1.503125,
    "dist": 75.5858,
    "vmag": 5.16
  },
  {
    "name": 121370,
    "hr": 5235,
    "bf": "8Eta Boo",
    "pname": "Mufrid",
    "ra": 13.911411,
    "dec": 18.397717,
    "dist": 11.396,
    "vmag": 2.68
  },
  {
    "name": 121409,
    "hr": 5238,
    "bf": "86    UMa",
    "pname": "",
    "ra": 13.897507,
    "dec": 53.728677,
    "dist": 146.8429,
    "vmag": 5.7
  },
  {
    "name": 121607,
    "hr": 5244,
    "bf": "92    Vir",
    "pname": "",
    "ra": 13.941077,
    "dec": 1.050581,
    "dist": 90.2527,
    "vmag": 5.9
  },
  {
    "name": 121710,
    "hr": 5247,
    "bf": "9    Boo",
    "pname": "",
    "ra": 13.942827,
    "dec": 27.492082,
    "dist": 178.2531,
    "vmag": 5.02
  },
  {
    "name": 121743,
    "hr": 5248,
    "bf": "Phi Cen",
    "pname": "",
    "ra": 13.971186,
    "dec": -42.100753,
    "dist": 161.0306,
    "vmag": 3.83
  },
  {
    "name": 121790,
    "hr": 5249,
    "bf": "Ups1Cen",
    "pname": "",
    "ra": 13.977987,
    "dec": -44.803584,
    "dist": 131.0616,
    "vmag": 3.87
  },
  {
    "name": 121847,
    "hr": 5250,
    "bf": "47    Hya",
    "pname": "",
    "ra": 13.975319,
    "dec": -24.972249,
    "dist": 102.0408,
    "vmag": 5.2
  },
  {
    "name": 121996,
    "hr": 5255,
    "bf": "10    Boo",
    "pname": "",
    "ra": 13.977479,
    "dec": 21.696219,
    "dist": 144.7178,
    "vmag": 5.76
  },
  {
    "name": 122066,
    "hr": 5257,
    "bf": "48    Hya",
    "pname": "",
    "ra": 14.000037,
    "dec": -25.010403,
    "dist": 55.991,
    "vmag": 5.77
  },
  {
    "name": 122223,
    "hr": 5260,
    "bf": "Ups2Cen",
    "pname": "",
    "ra": 14.028748,
    "dec": -45.603421,
    "dist": 389.1051,
    "vmag": 4.34
  },
  {
    "name": 122250,
    "hr": 5261,
    "bf": "The Aps",
    "pname": "",
    "ra": 14.088903,
    "dec": -76.796752,
    "dist": 113.1222,
    "vmag": 5.69
  },
  {
    "name": 122405,
    "hr": 5263,
    "bf": "11    Boo",
    "pname": "",
    "ra": 14.01958,
    "dec": 27.386594,
    "dist": 90.9918,
    "vmag": 6.23
  },
  {
    "name": 122408,
    "hr": 5264,
    "bf": "93Tau Vir",
    "pname": "",
    "ra": 14.027443,
    "dec": 1.544532,
    "dist": 68.9655,
    "vmag": 4.23
  },
  {
    "name": 122451,
    "hr": 5267,
    "bf": "Bet Cen",
    "pname": "Hadar",
    "ra": 14.063729,
    "dec": -60.373039,
    "dist": 120.1923,
    "vmag": 0.61
  },
  {
    "name": 122980,
    "hr": 5285,
    "bf": "Chi Cen",
    "pname": "",
    "ra": 14.10077,
    "dec": -41.179633,
    "dist": 156.4945,
    "vmag": 4.36
  },
  {
    "name": 123123,
    "hr": 5287,
    "bf": "49Pi  Hya",
    "pname": "",
    "ra": 14.106193,
    "dec": -26.682361,
    "dist": 30.9598,
    "vmag": 3.25
  },
  {
    "name": 123139,
    "hr": 5288,
    "bf": "5The Cen",
    "pname": "Menkent",
    "ra": 14.111395,
    "dec": -36.369954,
    "dist": 18.0343,
    "vmag": 2.06
  },
  {
    "name": 123255,
    "hr": 5290,
    "bf": "95    Vir",
    "pname": "",
    "ra": 14.111896,
    "dec": -9.313515,
    "dist": 58.0383,
    "vmag": 5.46
  },
  {
    "name": 123299,
    "hr": 5291,
    "bf": "11Alp Dra",
    "pname": "Thuban",
    "ra": 14.073165,
    "dec": 64.37585,
    "dist": 92.9368,
    "vmag": 3.67
  },
  {
    "name": 123630,
    "hr": 5298,
    "bf": "96    Vir",
    "pname": "",
    "ra": 14.150165,
    "dec": -10.334546,
    "dist": 127.2265,
    "vmag": 6.45
  },
  {
    "name": 123782,
    "hr": 5300,
    "bf": "13    Boo",
    "pname": "",
    "ra": 14.138145,
    "dec": 49.458167,
    "dist": 168.3502,
    "vmag": 5.26
  },
  {
    "name": 123998,
    "hr": 5303,
    "bf": "Eta Aps",
    "pname": "",
    "ra": 14.303877,
    "dec": -81.00776,
    "dist": 42.337,
    "vmag": 4.89
  },
  {
    "name": 123999,
    "hr": 5304,
    "bf": "12    Boo",
    "pname": "",
    "ra": 14.173315,
    "dec": 25.091677,
    "dist": 37.4251,
    "vmag": 4.82
  },
  {
    "name": 124063,
    "hr": 5305,
    "bf": "3    UMi",
    "pname": "",
    "ra": 14.115681,
    "dec": 74.593781,
    "dist": 130.8901,
    "vmag": 6.43
  },
  {
    "name": 124206,
    "hr": 5312,
    "bf": "50    Hya",
    "pname": "",
    "ra": 14.212785,
    "dec": -27.261186,
    "dist": 66.7111,
    "vmag": 5.07
  },
  {
    "name": 124294,
    "hr": 5315,
    "bf": "κ-Vir",
    "pname": "",
    "ra": 14.214929,
    "dec": -10.273702,
    "dist": 78.125,
    "vmag": 4.18
  },
  {
    "name": 124547,
    "hr": 5321,
    "bf": "4    UMi",
    "pname": "",
    "ra": 14.147498,
    "dec": 77.547514,
    "dist": 140.056,
    "vmag": 4.8
  },
  {
    "name": 124570,
    "hr": 5323,
    "bf": "14    Boo",
    "pname": "",
    "ra": 14.234773,
    "dec": 12.959444,
    "dist": 33.9213,
    "vmag": 5.53
  },
  {
    "name": 124674,
    "hr": 5328,
    "bf": "17Kap1Boo",
    "pname": "",
    "ra": 14.224385,
    "dec": 51.787868,
    "dist": 46.4468,
    "vmag": 6.62
  },
  {
    "name": 124675,
    "hr": 5329,
    "bf": "17Kap2Boo",
    "pname": "",
    "ra": 14.224718,
    "dec": 51.789965,
    "dist": 50.1002,
    "vmag": 4.53
  },
  {
    "name": 124679,
    "hr": 5330,
    "bf": "15    Boo",
    "pname": "",
    "ra": 14.247458,
    "dec": 10.10061,
    "dist": 81.2348,
    "vmag": 5.29
  },
  {
    "name": 124771,
    "hr": 5336,
    "bf": "Eps Aps",
    "pname": "",
    "ra": 14.373108,
    "dec": -80.108945,
    "dist": 197.6285,
    "vmag": 5.06
  },
  {
    "name": 124850,
    "hr": 5338,
    "bf": "99Iot Vir",
    "pname": "",
    "ra": 14.266908,
    "dec": -6.000547,
    "dist": 22.237,
    "vmag": 4.07
  },
  {
    "name": 124882,
    "hr": 5339,
    "bf": "Del Oct",
    "pname": "",
    "ra": 14.448801,
    "dec": -83.667884,
    "dist": 91.659,
    "vmag": 4.31
  },
  {
    "name": 124897,
    "hr": 5340,
    "bf": "16Alp Boo",
    "pname": "Arcturus",
    "ra": 14.26103,
    "dec": 19.18241,
    "dist": 11.2575,
    "vmag": -0.05
  },
  {
    "name": 125161,
    "hr": 5350,
    "bf": "21Iot Boo",
    "pname": "",
    "ra": 14.269439,
    "dec": 51.367231,
    "dist": 29.0698,
    "vmag": 4.75
  },
  {
    "name": 125162,
    "hr": 5351,
    "bf": "19Lam Boo",
    "pname": "",
    "ra": 14.273074,
    "dec": 46.088305,
    "dist": 30.3582,
    "vmag": 4.18
  },
  {
    "name": 125238,
    "hr": 5354,
    "bf": "Iot Lup",
    "pname": "",
    "ra": 14.323396,
    "dec": -46.058093,
    "dist": 103.6269,
    "vmag": 3.55
  },
  {
    "name": 125337,
    "hr": 5359,
    "bf": "100Lam Vir",
    "pname": "",
    "ra": 14.318498,
    "dec": -13.371095,
    "dist": 57.1755,
    "vmag": 4.52
  },
  {
    "name": 125451,
    "hr": 5365,
    "bf": "18    Boo",
    "pname": "",
    "ra": 14.321188,
    "dec": 13.004299,
    "dist": 26.096,
    "vmag": 5.41
  },
  {
    "name": 125454,
    "hr": 5366,
    "bf": "102Ups Vir",
    "pname": "",
    "ra": 14.325689,
    "dec": -2.265518,
    "dist": 80.1925,
    "vmag": 5.14
  },
  {
    "name": 125473,
    "hr": 5367,
    "bf": "Psi Cen",
    "pname": "",
    "ra": 14.342623,
    "dec": -37.885295,
    "dist": 79.3651,
    "vmag": 4.05
  },
  {
    "name": 125560,
    "hr": 5370,
    "bf": "20    Boo",
    "pname": "",
    "ra": 14.329233,
    "dec": 16.306948,
    "dist": 57.3394,
    "vmag": 4.84
  },
  {
    "name": 125932,
    "hr": 5381,
    "bf": "51    Hya",
    "pname": "",
    "ra": 14.384942,
    "dec": -27.754017,
    "dist": 48.2625,
    "vmag": 4.78
  },
  {
    "name": 126035,
    "hr": 5383,
    "bf": "2    Lib",
    "pname": "",
    "ra": 14.390452,
    "dec": -11.714043,
    "dist": 102.6694,
    "vmag": 6.22
  },
  {
    "name": 126341,
    "hr": 5395,
    "bf": "Tau1Lup",
    "pname": "",
    "ra": 14.435619,
    "dec": -45.221424,
    "dist": 334.4482,
    "vmag": 4.56
  },
  {
    "name": 126354,
    "hr": 5396,
    "bf": "Tau2Lup",
    "pname": "",
    "ra": 14.436336,
    "dec": -45.379276,
    "dist": 97.8474,
    "vmag": 4.33
  },
  {
    "name": 126660,
    "hr": 5404,
    "bf": "23The Boo",
    "pname": "",
    "ra": 14.419967,
    "dec": 51.850744,
    "dist": 14.5307,
    "vmag": 4.04
  },
  {
    "name": 126661,
    "hr": 5405,
    "bf": "22    Boo",
    "pname": "",
    "ra": 14.440935,
    "dec": 19.2269,
    "dist": 89.1266,
    "vmag": 5.4
  },
  {
    "name": 126722,
    "hr": 5406,
    "bf": "104    Vir",
    "pname": "",
    "ra": 14.456774,
    "dec": -6.120332,
    "dist": 78.8644,
    "vmag": 6.18
  },
  {
    "name": 126769,
    "hr": 5407,
    "bf": "52    Hya",
    "pname": "",
    "ra": 14.469564,
    "dec": -29.491638,
    "dist": 120.6273,
    "vmag": 4.97
  },
  {
    "name": 126868,
    "hr": 5409,
    "bf": "105Phi Vir",
    "pname": "",
    "ra": 14.470038,
    "dec": -2.227957,
    "dist": 36.2582,
    "vmag": 4.81
  },
  {
    "name": 126927,
    "hr": 5410,
    "bf": "106    Vir",
    "pname": "",
    "ra": 14.478256,
    "dec": -6.900536,
    "dist": 191.5709,
    "vmag": 5.42
  },
  {
    "name": 127243,
    "hr": 5420,
    "bf": "24    Boo",
    "pname": "",
    "ra": 14.477197,
    "dec": 49.844851,
    "dist": 100,
    "vmag": 5.58
  },
  {
    "name": 127381,
    "hr": 5425,
    "bf": "Sig Lup",
    "pname": "",
    "ra": 14.543629,
    "dec": -50.457157,
    "dist": 176.3668,
    "vmag": 4.44
  },
  {
    "name": 127665,
    "hr": 5429,
    "bf": "25Rho Boo",
    "pname": "",
    "ra": 14.5305,
    "dec": 30.371437,
    "dist": 49.0918,
    "vmag": 3.57
  },
  {
    "name": 127700,
    "hr": 5430,
    "bf": "5    UMi",
    "pname": "",
    "ra": 14.458758,
    "dec": 75.695993,
    "dist": 110.011,
    "vmag": 4.25
  },
  {
    "name": 127739,
    "hr": 5434,
    "bf": "26    Boo",
    "pname": "",
    "ra": 14.542374,
    "dec": 22.260059,
    "dist": 54.0249,
    "vmag": 5.91
  },
  {
    "name": 127762,
    "hr": 5435,
    "bf": "27Gam Boo",
    "pname": "",
    "ra": 14.534636,
    "dec": 38.308253,
    "dist": 26.6099,
    "vmag": 3.04
  },
  {
    "name": 127972,
    "hr": 5440,
    "bf": "Eta Cen",
    "pname": "",
    "ra": 14.591786,
    "dec": -42.157824,
    "dist": 93.7207,
    "vmag": 2.33
  },
  {
    "name": 128167,
    "hr": 5447,
    "bf": "28Sig Boo",
    "pname": "",
    "ra": 14.578,
    "dec": 29.74513,
    "dist": 15.8328,
    "vmag": 4.47
  },
  {
    "name": 128345,
    "hr": 5453,
    "bf": "Rho Lup",
    "pname": "",
    "ra": 14.631454,
    "dec": -49.425828,
    "dist": 96.8992,
    "vmag": 4.05
  },
  {
    "name": 128620,
    "hr": 5459,
    "bf": "Alp1Cen",
    "pname": "Rigil Kentaurus",
    "ra": 14.660765,
    "dec": -60.833976,
    "dist": 1.3248,
    "vmag": -0.01
  },
  {
    "name": 128621,
    "hr": 5460,
    "bf": "Alp2Cen",
    "pname": "",
    "ra": 14.660346,
    "dec": -60.8383,
    "dist": 1.3248,
    "vmag": 1.35
  },
  {
    "name": 128898,
    "hr": 5463,
    "bf": "Alp Cir",
    "pname": "",
    "ra": 14.708492,
    "dec": -64.975138,
    "dist": 16.57,
    "vmag": 3.18
  },
  {
    "name": 129002,
    "hr": 5468,
    "bf": "33    Boo",
    "pname": "",
    "ra": 14.647289,
    "dec": 44.4045,
    "dist": 57.0125,
    "vmag": 5.39
  },
  {
    "name": 129056,
    "hr": 5469,
    "bf": "Alp Lup",
    "pname": "",
    "ra": 14.698823,
    "dec": -47.3882,
    "dist": 142.4501,
    "vmag": 2.3
  },
  {
    "name": 129078,
    "hr": 5470,
    "bf": "Alp Aps",
    "pname": "",
    "ra": 14.797701,
    "dec": -79.044751,
    "dist": 136.9863,
    "vmag": 3.83
  },
  {
    "name": 129174,
    "hr": 5475,
    "bf": "29Pi 1Boo",
    "pname": "",
    "ra": 14.678768,
    "dec": 16.418324,
    "dist": 93.7207,
    "vmag": 4.49
  },
  {
    "name": 129246,
    "hr": 5477,
    "bf": "30Zet Boo",
    "pname": "",
    "ra": 14.68582,
    "dec": 13.7283,
    "dist": 53.8793,
    "vmag": 3.78
  },
  {
    "name": 129312,
    "hr": 5480,
    "bf": "31    Boo",
    "pname": "",
    "ra": 14.694097,
    "dec": 8.161764,
    "dist": 164.7446,
    "vmag": 4.86
  },
  {
    "name": 129336,
    "hr": 5481,
    "bf": "32    Boo",
    "pname": "",
    "ra": 14.695423,
    "dec": 11.660662,
    "dist": 123.6094,
    "vmag": 5.55
  },
  {
    "name": 129433,
    "hr": 5484,
    "bf": "4    Lib",
    "pname": "",
    "ra": 14.720431,
    "dec": -24.997753,
    "dist": 152.439,
    "vmag": 5.7
  },
  {
    "name": 129502,
    "hr": 5487,
    "bf": "107Mu  Vir",
    "pname": "",
    "ra": 14.717673,
    "dec": -5.658207,
    "dist": 18.2715,
    "vmag": 3.87
  },
  {
    "name": 129712,
    "hr": 5490,
    "bf": "34    Boo",
    "pname": "",
    "ra": 14.723712,
    "dec": 26.52785,
    "dist": 215.9827,
    "vmag": 4.8
  },
  {
    "name": 129926,
    "hr": 5497,
    "bf": "54    Hya",
    "pname": "",
    "ra": 14.766691,
    "dec": -25.443181,
    "dist": 30.2847,
    "vmag": 5.15
  },
  {
    "name": 129956,
    "hr": 5501,
    "bf": "108    Vir",
    "pname": "",
    "ra": 14.75839,
    "dec": 0.717271,
    "dist": 151.2859,
    "vmag": 5.68
  },
  {
    "name": 129972,
    "hr": 5502,
    "bf": "35Omi Boo",
    "pname": "",
    "ra": 14.754017,
    "dec": 16.96428,
    "dist": 74.5156,
    "vmag": 4.6
  },
  {
    "name": 129978,
    "hr": 5503,
    "bf": "5    Lib",
    "pname": "",
    "ra": 14.766044,
    "dec": -15.459541,
    "dist": 444.4444,
    "vmag": 6.33
  },
  {
    "name": 129988,
    "hr": 5505,
    "bf": "36Eps Boo",
    "pname": "Izar",
    "ra": 14.749784,
    "dec": 27.074222,
    "dist": 62.1118,
    "vmag": 2.35
  },
  {
    "name": 130109,
    "hr": 5511,
    "bf": "109    Vir",
    "pname": "",
    "ra": 14.770812,
    "dec": 1.892885,
    "dist": 41.2371,
    "vmag": 3.73
  },
  {
    "name": 130158,
    "hr": 5514,
    "bf": "55    Hya",
    "pname": "",
    "ra": 14.789599,
    "dec": -25.624267,
    "dist": 227.7904,
    "vmag": 5.61
  },
  {
    "name": 130259,
    "hr": 5516,
    "bf": "56    Hya",
    "pname": "",
    "ra": 14.795779,
    "dec": -26.0875,
    "dist": 109.7695,
    "vmag": 5.23
  },
  {
    "name": 130274,
    "hr": 5517,
    "bf": "57    Hya",
    "pname": "",
    "ra": 14.799322,
    "dec": -26.646155,
    "dist": 137.1742,
    "vmag": 5.76
  },
  {
    "name": 130559,
    "hr": 5523,
    "bf": "7Mu  Lib",
    "pname": "",
    "ra": 14.821959,
    "dec": -14.149022,
    "dist": 72.9395,
    "vmag": 5.32
  },
  {
    "name": 130650,
    "hr": 5525,
    "bf": "Pi 1Oct",
    "pname": "",
    "ra": 15.030754,
    "dec": -83.227646,
    "dist": 120.7729,
    "vmag": 5.65
  },
  {
    "name": 130694,
    "hr": 5526,
    "bf": "58    Hya",
    "pname": "",
    "ra": 14.838147,
    "dec": -27.960371,
    "dist": 101.5228,
    "vmag": 4.42
  },
  {
    "name": 130807,
    "hr": 5528,
    "bf": "Omi Lup",
    "pname": "",
    "ra": 14.860641,
    "dec": -43.575359,
    "dist": 123.9157,
    "vmag": 4.32
  },
  {
    "name": 130819,
    "hr": 5530,
    "bf": "8Alp1Lib",
    "pname": "",
    "ra": 14.844773,
    "dec": -15.997237,
    "dist": 22.9779,
    "vmag": 5.15
  },
  {
    "name": 130841,
    "hr": 5531,
    "bf": "9Alp2Lib",
    "pname": "Zubenelgenubi",
    "ra": 14.847977,
    "dec": -16.041778,
    "dist": 23.2396,
    "vmag": 2.75
  },
  {
    "name": 130945,
    "hr": 5533,
    "bf": "38    Boo",
    "pname": "",
    "ra": 14.821853,
    "dec": 46.116205,
    "dist": 48.9956,
    "vmag": 5.76
  },
  {
    "name": 130952,
    "hr": 5535,
    "bf": "11    Lib",
    "pname": "",
    "ra": 14.850298,
    "dec": -2.29915,
    "dist": 67.0241,
    "vmag": 4.93
  },
  {
    "name": 131041,
    "hr": 5538,
    "bf": "39    Boo",
    "pname": "",
    "ra": 14.828143,
    "dec": 48.720804,
    "dist": 68.5871,
    "vmag": 5.68
  },
  {
    "name": 131058,
    "hr": 5539,
    "bf": "Zet Cir",
    "pname": "",
    "ra": 14.91183,
    "dec": -65.991095,
    "dist": 390.625,
    "vmag": 6.09
  },
  {
    "name": 131156,
    "hr": 5544,
    "bf": "37Xi  Boo",
    "pname": "",
    "ra": 14.856493,
    "dec": 19.10046,
    "dist": 6.7123,
    "vmag": 4.54
  },
  {
    "name": 131246,
    "hr": 5545,
    "bf": "Pi 2Oct",
    "pname": "",
    "ra": 15.079711,
    "dec": -83.038311,
    "dist": 598.8024,
    "vmag": 5.65
  },
  {
    "name": 131430,
    "hr": 5548,
    "bf": "12    Lib",
    "pname": "",
    "ra": 14.905592,
    "dec": -24.642202,
    "dist": 127.8772,
    "vmag": 5.27
  },
  {
    "name": 131492,
    "hr": 5551,
    "bf": "The Cir",
    "pname": "",
    "ra": 14.945554,
    "dec": -62.781016,
    "dist": 462.963,
    "vmag": 5.08
  },
  {
    "name": 131530,
    "hr": 5554,
    "bf": "13Xi 1Lib",
    "pname": "",
    "ra": 14.906354,
    "dec": -11.898348,
    "dist": 103.3058,
    "vmag": 5.78
  },
  {
    "name": 131596,
    "hr": 5557,
    "bf": "Ome Oct",
    "pname": "",
    "ra": 15.185777,
    "dec": -84.787812,
    "dist": 97.1817,
    "vmag": 5.88
  },
  {
    "name": 131873,
    "hr": 5563,
    "bf": "β-UMi",
    "pname": "Kochab",
    "ra": 14.845105,
    "dec": 74.155505,
    "dist": 40.1445,
    "vmag": 2.07
  },
  {
    "name": 131918,
    "hr": 5564,
    "bf": "15Xi 2Lib",
    "pname": "",
    "ra": 14.946142,
    "dec": -11.409701,
    "dist": 168.3502,
    "vmag": 5.48
  },
  {
    "name": 132052,
    "hr": 5570,
    "bf": "16    Lib",
    "pname": "",
    "ra": 14.953055,
    "dec": -4.346462,
    "dist": 26.9034,
    "vmag": 4.47
  },
  {
    "name": 132058,
    "hr": 5571,
    "bf": "Bet Lup",
    "pname": "",
    "ra": 14.975537,
    "dec": -43.13396,
    "dist": 117.3709,
    "vmag": 2.68
  },
  {
    "name": 132200,
    "hr": 5576,
    "bf": "Kap Cen",
    "pname": "",
    "ra": 14.986025,
    "dec": -42.104194,
    "dist": 117.5088,
    "vmag": 3.13
  },
  {
    "name": 132219,
    "hr": 5577,
    "bf": "59    Hya",
    "pname": "",
    "ra": 14.977572,
    "dec": -27.657314,
    "dist": 113.1222,
    "vmag": 5.65
  },
  {
    "name": 132230,
    "hr": 5578,
    "bf": "17    Lib",
    "pname": "",
    "ra": 14.970392,
    "dec": -11.15476,
    "dist": 109.4092,
    "vmag": 6.61
  },
  {
    "name": 132345,
    "hr": 5582,
    "bf": "18    Lib",
    "pname": "",
    "ra": 14.98155,
    "dec": -11.144014,
    "dist": 95.057,
    "vmag": 5.88
  },
  {
    "name": 132742,
    "hr": 5586,
    "bf": "19Del Lib",
    "pname": "",
    "ra": 15.016208,
    "dec": -8.518943,
    "dist": 90.009,
    "vmag": 4.91
  },
  {
    "name": 132772,
    "hr": 5588,
    "bf": "40    Boo",
    "pname": "",
    "ra": 14.993598,
    "dec": 39.265333,
    "dist": 51.4933,
    "vmag": 5.64
  },
  {
    "name": 132851,
    "hr": 5591,
    "bf": "60    Hya",
    "pname": "",
    "ra": 15.035119,
    "dec": -28.060611,
    "dist": 101.7294,
    "vmag": 5.83
  },
  {
    "name": 132905,
    "hr": 5593,
    "bf": "Eta Cir",
    "pname": "",
    "ra": 15.08003,
    "dec": -64.03135,
    "dist": 84.6024,
    "vmag": 5.16
  },
  {
    "name": 133124,
    "hr": 5600,
    "bf": "41Ome Boo",
    "pname": "",
    "ra": 15.035141,
    "dec": 25.008138,
    "dist": 113.8952,
    "vmag": 4.8
  },
  {
    "name": 133165,
    "hr": 5601,
    "bf": "110    Vir",
    "pname": "",
    "ra": 15.048344,
    "dec": 2.091303,
    "dist": 59.9161,
    "vmag": 4.39
  },
  {
    "name": 133208,
    "hr": 5602,
    "bf": "42Bet Boo",
    "pname": "",
    "ra": 15.032436,
    "dec": 40.390566,
    "dist": 69.0608,
    "vmag": 3.49
  },
  {
    "name": 133216,
    "hr": 5603,
    "bf": "20Sig Lib",
    "pname": "",
    "ra": 15.067839,
    "dec": -25.281965,
    "dist": 88.4173,
    "vmag": 3.25
  },
  {
    "name": 133242,
    "hr": 5605,
    "bf": "Pi  Lup",
    "pname": "",
    "ra": 15.085303,
    "dec": -47.051245,
    "dist": 135.8696,
    "vmag": 3.91
  },
  {
    "name": 133582,
    "hr": 5616,
    "bf": "43Psi Boo",
    "pname": "",
    "ra": 15.074098,
    "dec": 26.947649,
    "dist": 75.4148,
    "vmag": 4.52
  },
  {
    "name": 133640,
    "hr": 5618,
    "bf": "44    Boo",
    "pname": "",
    "ra": 15.063174,
    "dec": 47.65406,
    "dist": 12.5078,
    "vmag": 4.83
  },
  {
    "name": 133774,
    "hr": 5622,
    "bf": "21Nu  Lib",
    "pname": "",
    "ra": 15.110444,
    "dec": -16.256818,
    "dist": 213.2196,
    "vmag": 5.19
  },
  {
    "name": 133955,
    "hr": 5626,
    "bf": "Lam Lup",
    "pname": "",
    "ra": 15.147394,
    "dec": -45.279857,
    "dist": 238.0952,
    "vmag": 4.07
  },
  {
    "name": 133962,
    "hr": 5627,
    "bf": "47    Boo",
    "pname": "",
    "ra": 15.090515,
    "dec": 48.150972,
    "dist": 84.1043,
    "vmag": 5.59
  },
  {
    "name": 134083,
    "hr": 5634,
    "bf": "45    Boo",
    "pname": "",
    "ra": 15.121682,
    "dec": 24.869195,
    "dist": 19.5542,
    "vmag": 4.93
  },
  {
    "name": 134320,
    "hr": 5638,
    "bf": "46    Boo",
    "pname": "",
    "ra": 15.139939,
    "dec": 26.301152,
    "dist": 158.7302,
    "vmag": 5.67
  },
  {
    "name": 134481,
    "hr": 5646,
    "bf": "Kap1Lup",
    "pname": "",
    "ra": 15.198918,
    "dec": -48.737819,
    "dist": 55.1876,
    "vmag": 3.88
  },
  {
    "name": 134482,
    "hr": 5647,
    "bf": "Kap2Lup",
    "pname": "",
    "ra": 15.199363,
    "dec": -48.743687,
    "dist": 77.7605,
    "vmag": 5.7
  },
  {
    "name": 134505,
    "hr": 5649,
    "bf": "Zet Lup",
    "pname": "",
    "ra": 15.20476,
    "dec": -52.099247,
    "dist": 35.9712,
    "vmag": 3.41
  },
  {
    "name": 134759,
    "hr": 5652,
    "bf": "24Iot1Lib",
    "pname": "",
    "ra": 15.203692,
    "dec": -19.79171,
    "dist": 116.4144,
    "vmag": 4.54
  },
  {
    "name": 134967,
    "hr": 5656,
    "bf": "25Iot2Lib",
    "pname": "",
    "ra": 15.221997,
    "dec": -19.647572,
    "dist": 69.8812,
    "vmag": 6.07
  },
  {
    "name": 134987,
    "hr": 5657,
    "bf": "23    Lib",
    "pname": "",
    "ra": 15.224637,
    "dec": -25.309347,
    "dist": 26.2055,
    "vmag": 6.47
  },
  {
    "name": 135153,
    "hr": 5660,
    "bf": "1    Lup",
    "pname": "",
    "ra": 15.2437,
    "dec": -31.519121,
    "dist": 598.8024,
    "vmag": 4.91
  },
  {
    "name": 135230,
    "hr": 5662,
    "bf": "26    Lib",
    "pname": "",
    "ra": 15.242711,
    "dec": -17.768572,
    "dist": 245.098,
    "vmag": 6.18
  },
  {
    "name": 135240,
    "hr": 5664,
    "bf": "Del Cir",
    "pname": "",
    "ra": 15.282471,
    "dec": -60.957255,
    "dist": 100000,
    "vmag": 5.04
  },
  {
    "name": 135291,
    "hr": 5666,
    "bf": "Eps Cir",
    "pname": "",
    "ra": 15.294136,
    "dec": -63.610465,
    "dist": 125,
    "vmag": 4.85
  },
  {
    "name": 135379,
    "hr": 5670,
    "bf": "Bet Cir",
    "pname": "",
    "ra": 15.291917,
    "dec": -58.801208,
    "dist": 30.553,
    "vmag": 4.07
  },
  {
    "name": 135382,
    "hr": 5671,
    "bf": "Gam TrA",
    "pname": "",
    "ra": 15.315181,
    "dec": -68.679545,
    "dist": 56.3698,
    "vmag": 2.87
  },
  {
    "name": 135482,
    "hr": 5675,
    "bf": "3    Ser",
    "pname": "",
    "ra": 15.253154,
    "dec": 4.939362,
    "dist": 114.4165,
    "vmag": 5.32
  },
  {
    "name": 135502,
    "hr": 5676,
    "bf": "48Chi Boo",
    "pname": "",
    "ra": 15.241435,
    "dec": 29.164295,
    "dist": 77.3994,
    "vmag": 5.28
  },
  {
    "name": 135559,
    "hr": 5679,
    "bf": "4    Ser",
    "pname": "",
    "ra": 15.263633,
    "dec": 0.372139,
    "dist": 46.1467,
    "vmag": 5.62
  },
  {
    "name": 135722,
    "hr": 5681,
    "bf": "49Del Boo",
    "pname": "",
    "ra": 15.258376,
    "dec": 33.314833,
    "dist": 37.3413,
    "vmag": 3.46
  },
  {
    "name": 135734,
    "hr": 5683,
    "bf": "Mu  Lup",
    "pname": "",
    "ra": 15.308897,
    "dec": -47.875272,
    "dist": 102.8807,
    "vmag": 4.27
  },
  {
    "name": 135742,
    "hr": 5685,
    "bf": "27Bet Lib",
    "pname": "Zubeneschemali",
    "ra": 15.283449,
    "dec": -9.382917,
    "dist": 56.7537,
    "vmag": 2.61
  },
  {
    "name": 135758,
    "hr": 5686,
    "bf": "2    Lup",
    "pname": "",
    "ra": 15.297178,
    "dec": -30.148673,
    "dist": 99.9001,
    "vmag": 4.35
  },
  {
    "name": 136202,
    "hr": 5694,
    "bf": "5    Ser",
    "pname": "",
    "ra": 15.321888,
    "dec": 1.765408,
    "dist": 25.3807,
    "vmag": 5.04
  },
  {
    "name": 136298,
    "hr": 5695,
    "bf": "Del Lup",
    "pname": "",
    "ra": 15.356201,
    "dec": -40.647518,
    "dist": 271.0027,
    "vmag": 3.22
  },
  {
    "name": 136351,
    "hr": 5698,
    "bf": "Nu 1Lup",
    "pname": "",
    "ra": 15.368975,
    "dec": -47.927792,
    "dist": 35.8551,
    "vmag": 4.99
  },
  {
    "name": 136352,
    "hr": 5699,
    "bf": "Nu 2Lup",
    "pname": "",
    "ra": 15.363507,
    "dec": -48.317628,
    "dist": 14.8126,
    "vmag": 5.65
  },
  {
    "name": 136366,
    "hr": 5701,
    "bf": "28    Lib",
    "pname": "",
    "ra": 15.348244,
    "dec": -18.158658,
    "dist": 183.4862,
    "vmag": 6.16
  },
  {
    "name": 136407,
    "hr": 5703,
    "bf": "29Omi Lib",
    "pname": "",
    "ra": 15.350382,
    "dec": -15.548342,
    "dist": 56.6572,
    "vmag": 6.14
  },
  {
    "name": 136415,
    "hr": 5704,
    "bf": "Gam Cir",
    "pname": "",
    "ra": 15.389625,
    "dec": -59.320787,
    "dist": 137.5516,
    "vmag": 4.48
  },
  {
    "name": 136422,
    "hr": 5705,
    "bf": "Phi1Lup",
    "pname": "",
    "ra": 15.36344,
    "dec": -36.261376,
    "dist": 84.317,
    "vmag": 3.57
  },
  {
    "name": 136504,
    "hr": 5708,
    "bf": "Eps Lup",
    "pname": "",
    "ra": 15.378021,
    "dec": -44.689622,
    "dist": 156.9859,
    "vmag": 3.37
  },
  {
    "name": 136512,
    "hr": 5709,
    "bf": "1Omi CrB",
    "pname": "",
    "ra": 15.335714,
    "dec": 29.616209,
    "dist": 82.7815,
    "vmag": 5.51
  },
  {
    "name": 136514,
    "hr": 5710,
    "bf": "6    Ser",
    "pname": "",
    "ra": 15.350554,
    "dec": 0.715337,
    "dist": 73.3676,
    "vmag": 5.35
  },
  {
    "name": 136664,
    "hr": 5712,
    "bf": "Phi2Lup",
    "pname": "",
    "ra": 15.385931,
    "dec": -36.858489,
    "dist": 159.2357,
    "vmag": 4.54
  },
  {
    "name": 136726,
    "hr": 5714,
    "bf": "11    UMi",
    "pname": "",
    "ra": 15.284968,
    "dec": 71.823901,
    "dist": 122.1001,
    "vmag": 5.02
  },
  {
    "name": 136831,
    "hr": 5717,
    "bf": "7    Ser",
    "pname": "",
    "ra": 15.373122,
    "dec": 12.567521,
    "dist": 137.5516,
    "vmag": 6.29
  },
  {
    "name": 136849,
    "hr": 5718,
    "bf": "50    Boo",
    "pname": "",
    "ra": 15.363495,
    "dec": 32.933695,
    "dist": 80.3213,
    "vmag": 5.38
  },
  {
    "name": 136933,
    "hr": 5719,
    "bf": "Ups Lup",
    "pname": "",
    "ra": 15.412504,
    "dec": -39.710268,
    "dist": 124.6883,
    "vmag": 5.36
  },
  {
    "name": 137006,
    "hr": 5721,
    "bf": "8    Ser",
    "pname": "",
    "ra": 15.395475,
    "dec": -1.022384,
    "dist": 51.1247,
    "vmag": 6.11
  },
  {
    "name": 137052,
    "hr": 5723,
    "bf": "31Eps Lib",
    "pname": "",
    "ra": 15.403303,
    "dec": -10.322266,
    "dist": 31.2305,
    "vmag": 4.92
  },
  {
    "name": 137107,
    "hr": 5727,
    "bf": "2Eta CrB",
    "pname": "",
    "ra": 15.38675,
    "dec": 30.287812,
    "dist": 17.8635,
    "vmag": 4.99
  },
  {
    "name": 137108,
    "hr": 5728,
    "bf": "2Eta CrB",
    "pname": "",
    "ra": 15.38663,
    "dec": 30.2862,
    "dist": 18.622,
    "vmag": 5.96
  },
  {
    "name": 137333,
    "hr": 5729,
    "bf": "Rho Oct",
    "pname": "",
    "ra": 15.721161,
    "dec": -84.465273,
    "dist": 66.1376,
    "vmag": 5.57
  },
  {
    "name": 137387,
    "hr": 5730,
    "bf": "Kap1Aps",
    "pname": "",
    "ra": 15.525228,
    "dec": -73.389591,
    "dist": 380.2281,
    "vmag": 5.4
  },
  {
    "name": 137391,
    "hr": 5733,
    "bf": "51Mu 1Boo",
    "pname": "",
    "ra": 15.408181,
    "dec": 37.377167,
    "dist": 34.6861,
    "vmag": 4.31
  },
  {
    "name": 137392,
    "hr": 5734,
    "bf": "51Mu 2Boo",
    "pname": "",
    "ra": 15.40858,
    "dec": 37.3473,
    "dist": 36.062,
    "vmag": 6.51
  },
  {
    "name": 137422,
    "hr": 5735,
    "bf": "γ-UMi",
    "pname": "Pherkad",
    "ra": 15.345483,
    "dec": 71.834016,
    "dist": 149.2537,
    "vmag": 3
  },
  {
    "name": 137471,
    "hr": 5739,
    "bf": "9Tau1Ser",
    "pname": "",
    "ra": 15.429832,
    "dec": 15.428036,
    "dist": 211.4165,
    "vmag": 5.16
  },
  {
    "name": 137744,
    "hr": 5743,
    "bf": "32Zet1Lib",
    "pname": "",
    "ra": 15.470947,
    "dec": -16.716484,
    "dist": 240.3846,
    "vmag": 5.64
  },
  {
    "name": 137759,
    "hr": 5744,
    "bf": "12Iot Dra",
    "pname": "",
    "ra": 15.415494,
    "dec": 58.966065,
    "dist": 31.027,
    "vmag": 3.29
  },
  {
    "name": 137898,
    "hr": 5746,
    "bf": "10    Ser",
    "pname": "",
    "ra": 15.477288,
    "dec": 1.842081,
    "dist": 39.7456,
    "vmag": 5.15
  },
  {
    "name": 137909,
    "hr": 5747,
    "bf": "3Bet CrB",
    "pname": "",
    "ra": 15.463818,
    "dec": 29.105703,
    "dist": 34.2818,
    "vmag": 3.66
  },
  {
    "name": 138137,
    "hr": 5750,
    "bf": "34Zet3Lib",
    "pname": "",
    "ra": 15.511223,
    "dec": -16.609464,
    "dist": 155.7632,
    "vmag": 5.82
  },
  {
    "name": 138481,
    "hr": 5763,
    "bf": "52Nu 1Boo",
    "pname": "",
    "ra": 15.515488,
    "dec": 40.833047,
    "dist": 257.0694,
    "vmag": 5.04
  },
  {
    "name": 138485,
    "hr": 5764,
    "bf": "35Zet4Lib",
    "pname": "",
    "ra": 15.548673,
    "dec": -16.852844,
    "dist": 201.2072,
    "vmag": 5.53
  },
  {
    "name": 138527,
    "hr": 5770,
    "bf": "12Tau2Ser",
    "pname": "",
    "ra": 15.536021,
    "dec": 16.056169,
    "dist": 143.8849,
    "vmag": 6.22
  },
  {
    "name": 138538,
    "hr": 5771,
    "bf": "Eps TrA",
    "pname": "",
    "ra": 15.612,
    "dec": -66.317037,
    "dist": 61.8429,
    "vmag": 4.11
  },
  {
    "name": 138562,
    "hr": 5772,
    "bf": "11    Ser",
    "pname": "",
    "ra": 15.549427,
    "dec": -1.186399,
    "dist": 85.9107,
    "vmag": 5.5
  },
  {
    "name": 138629,
    "hr": 5774,
    "bf": "53Nu 2Boo",
    "pname": "",
    "ra": 15.529718,
    "dec": 40.899332,
    "dist": 119.0476,
    "vmag": 4.98
  },
  {
    "name": 138688,
    "hr": 5775,
    "bf": "36    Lib",
    "pname": "",
    "ra": 15.577033,
    "dec": -28.046983,
    "dist": 97.561,
    "vmag": 5.13
  },
  {
    "name": 138690,
    "hr": 5776,
    "bf": "Gam Lup",
    "pname": "",
    "ra": 15.585681,
    "dec": -41.166757,
    "dist": 129.0323,
    "vmag": 2.8
  },
  {
    "name": 138716,
    "hr": 5777,
    "bf": "37    Lib",
    "pname": "",
    "ra": 15.569638,
    "dec": -10.064529,
    "dist": 28.9268,
    "vmag": 4.61
  },
  {
    "name": 138749,
    "hr": 5778,
    "bf": "4The CrB",
    "pname": "",
    "ra": 15.548829,
    "dec": 31.359133,
    "dist": 115.0748,
    "vmag": 4.14
  },
  {
    "name": 138800,
    "hr": 5782,
    "bf": "Kap2Aps",
    "pname": "",
    "ra": 15.672598,
    "dec": -73.446685,
    "dist": 239.2344,
    "vmag": 5.64
  },
  {
    "name": 138905,
    "hr": 5787,
    "bf": "38Gam Lib",
    "pname": "",
    "ra": 15.592105,
    "dec": -14.789537,
    "dist": 50.025,
    "vmag": 3.91
  },
  {
    "name": 138917,
    "hr": 5788,
    "bf": "13Del Ser",
    "pname": "",
    "ra": 15.580041,
    "dec": 10.538867,
    "dist": 69.9301,
    "vmag": 3.8
  },
  {
    "name": 139006,
    "hr": 5793,
    "bf": "5Alp CrB",
    "pname": "Alphekka",
    "ra": 15.578128,
    "dec": 26.714693,
    "dist": 23.0097,
    "vmag": 2.22
  },
  {
    "name": 139063,
    "hr": 5794,
    "bf": "39Ups Lib",
    "pname": "",
    "ra": 15.61707,
    "dec": -28.135079,
    "dist": 68.5871,
    "vmag": 3.6
  },
  {
    "name": 139074,
    "hr": 5795,
    "bf": "15Tau3Ser",
    "pname": "",
    "ra": 15.592565,
    "dec": 17.655555,
    "dist": 116.2791,
    "vmag": 6.1
  },
  {
    "name": 139127,
    "hr": 5797,
    "bf": "Ome Lup",
    "pname": "",
    "ra": 15.634232,
    "dec": -42.567348,
    "dist": 67.0241,
    "vmag": 4.34
  },
  {
    "name": 139137,
    "hr": 5799,
    "bf": "14    Ser",
    "pname": "",
    "ra": 15.609364,
    "dec": -0.561531,
    "dist": 145.3488,
    "vmag": 6.51
  },
  {
    "name": 139153,
    "hr": 5800,
    "bf": "6Mu  CrB",
    "pname": "",
    "ra": 15.587476,
    "dec": 39.010067,
    "dist": 189.7533,
    "vmag": 5.14
  },
  {
    "name": 139195,
    "hr": 5802,
    "bf": "16    Ser",
    "pname": "",
    "ra": 15.608216,
    "dec": 10.010176,
    "dist": 70.8717,
    "vmag": 5.26
  },
  {
    "name": 139225,
    "hr": 5804,
    "bf": "18Tau5Ser",
    "pname": "",
    "ra": 15.608121,
    "dec": 16.119085,
    "dist": 52.0562,
    "vmag": 5.93
  },
  {
    "name": 139365,
    "hr": 5812,
    "bf": "40Tau Lib",
    "pname": "",
    "ra": 15.64427,
    "dec": -29.777754,
    "dist": 112.4859,
    "vmag": 3.66
  },
  {
    "name": 139446,
    "hr": 5814,
    "bf": "41    Lib",
    "pname": "",
    "ra": 15.648488,
    "dec": -19.301892,
    "dist": 95.4198,
    "vmag": 5.36
  },
  {
    "name": 139521,
    "hr": 5820,
    "bf": "3Psi1Lup",
    "pname": "",
    "ra": 15.662772,
    "dec": -34.411926,
    "dist": 67.3401,
    "vmag": 4.66
  },
  {
    "name": 139641,
    "hr": 5823,
    "bf": "54Phi Boo",
    "pname": "",
    "ra": 15.630441,
    "dec": 40.353433,
    "dist": 52.0291,
    "vmag": 5.25
  },
  {
    "name": 139663,
    "hr": 5824,
    "bf": "42    Lib",
    "pname": "",
    "ra": 15.67136,
    "dec": -23.818078,
    "dist": 117.2333,
    "vmag": 4.97
  },
  {
    "name": 139669,
    "hr": 5826,
    "bf": "15The UMi",
    "pname": "",
    "ra": 15.523619,
    "dec": 77.349352,
    "dist": 262.4672,
    "vmag": 5
  },
  {
    "name": 139891,
    "hr": 5833,
    "bf": "7Zet1CrB",
    "pname": "",
    "ra": 15.656299,
    "dec": 36.635812,
    "dist": 145.1379,
    "vmag": 4.64
  },
  {
    "name": 139997,
    "hr": 5838,
    "bf": "43Kap Lib",
    "pname": "",
    "ra": 15.699111,
    "dec": -19.678828,
    "dist": 94.6074,
    "vmag": 4.75
  },
  {
    "name": 140008,
    "hr": 5839,
    "bf": "4Psi2Lup",
    "pname": "",
    "ra": 15.711395,
    "dec": -34.710407,
    "dist": 111.4827,
    "vmag": 4.75
  },
  {
    "name": 140027,
    "hr": 5840,
    "bf": "19Tau6Ser",
    "pname": "",
    "ra": 15.683083,
    "dec": 16.024588,
    "dist": 185.8736,
    "vmag": 6
  },
  {
    "name": 140159,
    "hr": 5842,
    "bf": "21Iot Ser",
    "pname": "",
    "ra": 15.692516,
    "dec": 19.670401,
    "dist": 58.2751,
    "vmag": 4.51
  },
  {
    "name": 140160,
    "hr": 5843,
    "bf": "20Chi Ser",
    "pname": "",
    "ra": 15.696504,
    "dec": 12.847528,
    "dist": 67.3854,
    "vmag": 5.34
  },
  {
    "name": 140232,
    "hr": 5845,
    "bf": "22Tau7Ser",
    "pname": "",
    "ra": 15.698532,
    "dec": 18.464037,
    "dist": 53.0786,
    "vmag": 5.8
  },
  {
    "name": 140417,
    "hr": 5848,
    "bf": "44Eta Lib",
    "pname": "",
    "ra": 15.734556,
    "dec": -15.672834,
    "dist": 45.7457,
    "vmag": 5.41
  },
  {
    "name": 140436,
    "hr": 5849,
    "bf": "8Gam CrB",
    "pname": "",
    "ra": 15.712381,
    "dec": 26.295637,
    "dist": 44.7828,
    "vmag": 3.81
  },
  {
    "name": 140538,
    "hr": 5853,
    "bf": "23Psi Ser",
    "pname": "",
    "ra": 15.733839,
    "dec": 2.515173,
    "dist": 14.6585,
    "vmag": 5.86
  },
  {
    "name": 140573,
    "hr": 5854,
    "bf": "24Alp Ser",
    "pname": "Unukalhai",
    "ra": 15.737798,
    "dec": 6.425627,
    "dist": 22.6757,
    "vmag": 2.63
  },
  {
    "name": 140716,
    "hr": 5855,
    "bf": "9Pi  CrB",
    "pname": "",
    "ra": 15.73314,
    "dec": 32.515807,
    "dist": 74.6269,
    "vmag": 5.57
  },
  {
    "name": 140729,
    "hr": 5858,
    "bf": "26Tau8Ser",
    "pname": "",
    "ra": 15.745037,
    "dec": 17.264226,
    "dist": 113.6364,
    "vmag": 6.15
  },
  {
    "name": 140873,
    "hr": 5863,
    "bf": "25    Ser",
    "pname": "",
    "ra": 15.768233,
    "dec": -1.804193,
    "dist": 137.931,
    "vmag": 5.39
  },
  {
    "name": 141003,
    "hr": 5867,
    "bf": "28Bet Ser",
    "pname": "",
    "ra": 15.769793,
    "dec": 15.421826,
    "dist": 47.5511,
    "vmag": 3.65
  },
  {
    "name": 141004,
    "hr": 5868,
    "bf": "27Lam Ser",
    "pname": "",
    "ra": 15.77406,
    "dec": 7.353073,
    "dist": 12.1242,
    "vmag": 4.42
  },
  {
    "name": 141187,
    "hr": 5870,
    "bf": "31Ups Ser",
    "pname": "",
    "ra": 15.788144,
    "dec": 14.115348,
    "dist": 76.6871,
    "vmag": 5.71
  },
  {
    "name": 141477,
    "hr": 5879,
    "bf": "35Kap Ser",
    "pname": "",
    "ra": 15.812327,
    "dec": 18.141564,
    "dist": 117.096,
    "vmag": 4.09
  },
  {
    "name": 141513,
    "hr": 5881,
    "bf": "32Mu  Ser",
    "pname": "",
    "ra": 15.827002,
    "dec": -3.430208,
    "dist": 52.0021,
    "vmag": 3.54
  },
  {
    "name": 141556,
    "hr": 5883,
    "bf": "5Chi Lup",
    "pname": "",
    "ra": 15.849316,
    "dec": -33.627165,
    "dist": 59.8444,
    "vmag": 3.97
  },
  {
    "name": 141637,
    "hr": 5885,
    "bf": "1    Sco",
    "pname": "",
    "ra": 15.849652,
    "dec": -25.751295,
    "dist": 151.7451,
    "vmag": 4.63
  },
  {
    "name": 141680,
    "hr": 5888,
    "bf": "34Ome Ser",
    "pname": "",
    "ra": 15.838207,
    "dec": 2.196509,
    "dist": 83.8223,
    "vmag": 5.21
  },
  {
    "name": 141714,
    "hr": 5889,
    "bf": "10Del CrB",
    "pname": "",
    "ra": 15.82657,
    "dec": 26.068394,
    "dist": 52.1376,
    "vmag": 4.59
  },
  {
    "name": 141767,
    "hr": 5891,
    "bf": "Kap TrA",
    "pname": "",
    "ra": 15.924891,
    "dec": -68.603001,
    "dist": 370.3704,
    "vmag": 5.11
  },
  {
    "name": 141795,
    "hr": 5892,
    "bf": "37Eps Ser",
    "pname": "",
    "ra": 15.846935,
    "dec": 4.47773,
    "dist": 21.5983,
    "vmag": 3.71
  },
  {
    "name": 141851,
    "hr": 5895,
    "bf": "36    Ser",
    "pname": "",
    "ra": 15.854331,
    "dec": -3.090497,
    "dist": 49.7512,
    "vmag": 5.09
  },
  {
    "name": 141891,
    "hr": 5897,
    "bf": "Bet TrA",
    "pname": "",
    "ra": 15.919083,
    "dec": -63.430727,
    "dist": 12.3778,
    "vmag": 2.83
  },
  {
    "name": 141992,
    "hr": 5899,
    "bf": "38Rho Ser",
    "pname": "",
    "ra": 15.85442,
    "dec": 20.977919,
    "dist": 114.9425,
    "vmag": 4.74
  },
  {
    "name": 142091,
    "hr": 5901,
    "bf": "11Kap CrB",
    "pname": "",
    "ra": 15.85387,
    "dec": 35.657382,
    "dist": 30.4971,
    "vmag": 4.79
  },
  {
    "name": 142096,
    "hr": 5902,
    "bf": "45Lam Lib",
    "pname": "",
    "ra": 15.888905,
    "dec": -20.16704,
    "dist": 94.8767,
    "vmag": 5.04
  },
  {
    "name": 142105,
    "hr": 5903,
    "bf": "ζ-UMi",
    "pname": "",
    "ra": 15.734299,
    "dec": 77.794493,
    "dist": 113.1222,
    "vmag": 4.29
  },
  {
    "name": 142114,
    "hr": 5904,
    "bf": "2    Sco",
    "pname": "",
    "ra": 15.893533,
    "dec": -25.327142,
    "dist": 154.0832,
    "vmag": 4.59
  },
  {
    "name": 142198,
    "hr": 5908,
    "bf": "46The Lib",
    "pname": "",
    "ra": 15.897093,
    "dec": -16.729293,
    "dist": 51.6529,
    "vmag": 4.13
  },
  {
    "name": 142267,
    "hr": 5911,
    "bf": "39    Ser",
    "pname": "",
    "ra": 15.886694,
    "dec": 13.196623,
    "dist": 17.3491,
    "vmag": 6.07
  },
  {
    "name": 142301,
    "hr": 5912,
    "bf": "3    Sco",
    "pname": "",
    "ra": 15.910981,
    "dec": -25.243741,
    "dist": 157.9779,
    "vmag": 5.87
  },
  {
    "name": 142373,
    "hr": 5914,
    "bf": "1Chi Her",
    "pname": "",
    "ra": 15.877903,
    "dec": 42.451518,
    "dist": 15.8932,
    "vmag": 4.6
  },
  {
    "name": 142378,
    "hr": 5915,
    "bf": "47    Lib",
    "pname": "",
    "ra": 15.916768,
    "dec": -19.382926,
    "dist": 236.4066,
    "vmag": 5.95
  },
  {
    "name": 142445,
    "hr": 5917,
    "bf": "4    Sco",
    "pname": "",
    "ra": 15.925023,
    "dec": -26.265993,
    "dist": 125.1564,
    "vmag": 5.63
  },
  {
    "name": 142500,
    "hr": 5919,
    "bf": "40    Ser",
    "pname": "",
    "ra": 15.911188,
    "dec": 8.580337,
    "dist": 78.8644,
    "vmag": 6.28
  },
  {
    "name": 142629,
    "hr": 5925,
    "bf": "Xi 1Lup",
    "pname": "",
    "ra": 15.948193,
    "dec": -33.966134,
    "dist": 42.3729,
    "vmag": 5.14
  },
  {
    "name": 142630,
    "hr": 5926,
    "bf": "Xi 2Lup",
    "pname": "",
    "ra": 15.948366,
    "dec": -33.964281,
    "dist": 46.0617,
    "vmag": 5.59
  },
  {
    "name": 142669,
    "hr": 5928,
    "bf": "5Rho Sco",
    "pname": "",
    "ra": 15.948077,
    "dec": -29.214073,
    "dist": 144.7178,
    "vmag": 3.87
  },
  {
    "name": 142780,
    "hr": 5932,
    "bf": "2    Her",
    "pname": "",
    "ra": 15.910516,
    "dec": 43.138567,
    "dist": 200.4008,
    "vmag": 5.35
  },
  {
    "name": 142860,
    "hr": 5933,
    "bf": "41Gam Ser",
    "pname": "",
    "ra": 15.940882,
    "dec": 15.661617,
    "dist": 11.2537,
    "vmag": 3.85
  },
  {
    "name": 142908,
    "hr": 5936,
    "bf": "12Lam CrB",
    "pname": "",
    "ra": 15.929884,
    "dec": 37.946958,
    "dist": 41.5628,
    "vmag": 5.43
  },
  {
    "name": 142926,
    "hr": 5938,
    "bf": "4    Her",
    "pname": "",
    "ra": 15.925166,
    "dec": 42.566193,
    "dist": 164.4737,
    "vmag": 5.73
  },
  {
    "name": 142980,
    "hr": 5940,
    "bf": "Phi Ser",
    "pname": "",
    "ra": 15.954048,
    "dec": 14.41448,
    "dist": 73.9645,
    "vmag": 5.54
  },
  {
    "name": 142983,
    "hr": 5941,
    "bf": "48    Lib",
    "pname": "",
    "ra": 15.969825,
    "dec": -14.279358,
    "dist": 143.472,
    "vmag": 4.95
  },
  {
    "name": 143018,
    "hr": 5944,
    "bf": "6Pi  Sco",
    "pname": "",
    "ra": 15.980865,
    "dec": -26.114105,
    "dist": 179.5332,
    "vmag": 2.89
  },
  {
    "name": 143107,
    "hr": 5947,
    "bf": "13Eps CrB",
    "pname": "",
    "ra": 15.959794,
    "dec": 26.87788,
    "dist": 67.8887,
    "vmag": 4.14
  },
  {
    "name": 143118,
    "hr": 5948,
    "bf": "Eta Lup",
    "pname": "",
    "ra": 16.002036,
    "dec": -38.396706,
    "dist": 135.5014,
    "vmag": 3.42
  },
  {
    "name": 143275,
    "hr": 5953,
    "bf": "7Del Sco",
    "pname": "Dschubba",
    "ra": 16.005557,
    "dec": -22.62171,
    "dist": 150.6024,
    "vmag": 2.29
  },
  {
    "name": 143333,
    "hr": 5954,
    "bf": "49    Lib",
    "pname": "",
    "ra": 16.005447,
    "dec": -16.53335,
    "dist": 35.2113,
    "vmag": 5.47
  },
  {
    "name": 143459,
    "hr": 5959,
    "bf": "50    Lib",
    "pname": "",
    "ra": 16.013231,
    "dec": -8.411353,
    "dist": 150.1502,
    "vmag": 5.53
  },
  {
    "name": 143474,
    "hr": 5961,
    "bf": "Iot1Nor",
    "pname": "",
    "ra": 16.058931,
    "dec": -57.775064,
    "dist": 39.3856,
    "vmag": 4.63
  },
  {
    "name": 143546,
    "hr": 5962,
    "bf": "Eta Nor",
    "pname": "",
    "ra": 16.053579,
    "dec": -49.229695,
    "dist": 67.2948,
    "vmag": 4.65
  },
  {
    "name": 143666,
    "hr": 5966,
    "bf": "5    Her",
    "pname": "",
    "ra": 16.020644,
    "dec": 17.818397,
    "dist": 76.9231,
    "vmag": 5.1
  },
  {
    "name": 143761,
    "hr": 5968,
    "bf": "15Rho CrB",
    "pname": "",
    "ra": 16.017412,
    "dec": 33.303509,
    "dist": 17.2354,
    "vmag": 5.39
  },
  {
    "name": 143807,
    "hr": 5971,
    "bf": "14Iot CrB",
    "pname": "",
    "ra": 16.024047,
    "dec": 29.851061,
    "dist": 95.6023,
    "vmag": 4.98
  },
  {
    "name": 143894,
    "hr": 5972,
    "bf": "44Pi  Ser",
    "pname": "",
    "ra": 16.038248,
    "dec": 22.804454,
    "dist": 54.8847,
    "vmag": 4.82
  },
  {
    "name": 144046,
    "hr": 5976,
    "bf": "43    Ser",
    "pname": "",
    "ra": 16.062692,
    "dec": 4.986834,
    "dist": 110.6195,
    "vmag": 6.07
  },
  {
    "name": 144069,
    "hr": 5977,
    "bf": "Xi  Sco",
    "pname": "",
    "ra": 16.072774,
    "dec": -11.374611,
    "dist": 24.3309,
    "vmag": 5
  },
  {
    "name": 144070,
    "hr": 5978,
    "bf": "Xi  Sco",
    "pname": "",
    "ra": 16.072774,
    "dec": -11.374611,
    "dist": 24.3309,
    "vmag": 4.84
  },
  {
    "name": 144197,
    "hr": 5980,
    "bf": "Del Nor",
    "pname": "",
    "ra": 16.108176,
    "dec": -45.173185,
    "dist": 37.5094,
    "vmag": 4.73
  },
  {
    "name": 144206,
    "hr": 5982,
    "bf": "6Ups Her",
    "pname": "",
    "ra": 16.046634,
    "dec": 46.036705,
    "dist": 113.8952,
    "vmag": 4.72
  },
  {
    "name": 144217,
    "hr": 5984,
    "bf": "8Bet1Sco",
    "pname": "Graffias",
    "ra": 16.09062,
    "dec": -19.805453,
    "dist": 123.9157,
    "vmag": 2.56
  },
  {
    "name": 144218,
    "hr": 5985,
    "bf": "8Bet2Sco",
    "pname": "",
    "ra": 16.09071,
    "dec": -19.80186,
    "dist": 122.1001,
    "vmag": 4.9
  },
  {
    "name": 144284,
    "hr": 5986,
    "bf": "13The Dra",
    "pname": "",
    "ra": 16.031532,
    "dec": 58.565251,
    "dist": 21.0349,
    "vmag": 4.01
  },
  {
    "name": 144294,
    "hr": 5987,
    "bf": "The Lup",
    "pname": "",
    "ra": 16.109874,
    "dec": -36.802288,
    "dist": 127.0648,
    "vmag": 4.22
  },
  {
    "name": 144470,
    "hr": 5993,
    "bf": "9Ome1Sco",
    "pname": "",
    "ra": 16.113452,
    "dec": -20.669192,
    "dist": 144.5087,
    "vmag": 3.93
  },
  {
    "name": 144480,
    "hr": 5994,
    "bf": "Iot2Nor",
    "pname": "",
    "ra": 16.155154,
    "dec": -57.934318,
    "dist": 85.8369,
    "vmag": 5.57
  },
  {
    "name": 144608,
    "hr": 5997,
    "bf": "10Ome2Sco",
    "pname": "",
    "ra": 16.123424,
    "dec": -20.868764,
    "dist": 89.1266,
    "vmag": 4.31
  },
  {
    "name": 144708,
    "hr": 6002,
    "bf": "11    Sco",
    "pname": "",
    "ra": 16.126782,
    "dec": -12.74541,
    "dist": 112.3596,
    "vmag": 5.75
  },
  {
    "name": 144874,
    "hr": 6004,
    "bf": "45    Ser",
    "pname": "",
    "ra": 16.127094,
    "dec": 9.891743,
    "dist": 99.0099,
    "vmag": 5.63
  },
  {
    "name": 145001,
    "hr": 6008,
    "bf": "7Kap Her",
    "pname": "",
    "ra": 16.134591,
    "dec": 17.04698,
    "dist": 112.7396,
    "vmag": 5
  },
  {
    "name": 145000,
    "hr": 6009,
    "bf": "7Kap Her",
    "pname": "",
    "ra": 16.13471,
    "dec": 17.054382,
    "dist": 645.1613,
    "vmag": 6.25
  },
  {
    "name": 145002,
    "hr": 6010,
    "bf": "47    Ser",
    "pname": "",
    "ra": 16.141132,
    "dec": 8.53431,
    "dist": 247.5248,
    "vmag": 5.69
  },
  {
    "name": 145122,
    "hr": 6013,
    "bf": "8    Her",
    "pname": "",
    "ra": 16.146286,
    "dec": 17.205638,
    "dist": 97.7517,
    "vmag": 6.13
  },
  {
    "name": 145328,
    "hr": 6018,
    "bf": "16Tau CrB",
    "pname": "",
    "ra": 16.149529,
    "dec": 36.490944,
    "dist": 35.7782,
    "vmag": 4.73
  },
  {
    "name": 145361,
    "hr": 6019,
    "bf": "Zet Nor",
    "pname": "",
    "ra": 16.222984,
    "dec": -55.540947,
    "dist": 66.7557,
    "vmag": 5.78
  },
  {
    "name": 145366,
    "hr": 6020,
    "bf": "Del1Aps",
    "pname": "",
    "ra": 16.339119,
    "dec": -78.695745,
    "dist": 233.6449,
    "vmag": 4.68
  },
  {
    "name": 145388,
    "hr": 6021,
    "bf": "Del2Aps",
    "pname": "",
    "ra": 16.340795,
    "dec": -78.667496,
    "dist": 187.9699,
    "vmag": 5.27
  },
  {
    "name": 145389,
    "hr": 6023,
    "bf": "11Phi Her",
    "pname": "",
    "ra": 16.146162,
    "dec": 44.934906,
    "dist": 62.5391,
    "vmag": 4.23
  },
  {
    "name": 145397,
    "hr": 6024,
    "bf": "Kap Nor",
    "pname": "",
    "ra": 16.224648,
    "dec": -54.630467,
    "dist": 131.2336,
    "vmag": 4.95
  },
  {
    "name": 145502,
    "hr": 6027,
    "bf": "14Nu  Sco",
    "pname": "",
    "ra": 16.199926,
    "dec": -19.460708,
    "dist": 145.3488,
    "vmag": 4
  },
  {
    "name": 145482,
    "hr": 6028,
    "bf": "13    Sco",
    "pname": "",
    "ra": 16.205057,
    "dec": -27.926372,
    "dist": 146.8429,
    "vmag": 4.58
  },
  {
    "name": 145483,
    "hr": 6029,
    "bf": "12    Sco",
    "pname": "",
    "ra": 16.204456,
    "dec": -28.417305,
    "dist": 93.0233,
    "vmag": 5.67
  },
  {
    "name": 145544,
    "hr": 6030,
    "bf": "Del TrA",
    "pname": "",
    "ra": 16.257297,
    "dec": -63.685682,
    "dist": 186.2197,
    "vmag": 3.86
  },
  {
    "name": 145570,
    "hr": 6031,
    "bf": "15Psi Sco",
    "pname": "",
    "ra": 16.199997,
    "dec": -10.064253,
    "dist": 47.7099,
    "vmag": 4.93
  },
  {
    "name": 145607,
    "hr": 6033,
    "bf": "16    Sco",
    "pname": "",
    "ra": 16.202032,
    "dec": -8.547576,
    "dist": 77.3994,
    "vmag": 5.43
  },
  {
    "name": 145713,
    "hr": 6039,
    "bf": "10    Her",
    "pname": "",
    "ra": 16.193899,
    "dec": 23.494801,
    "dist": 209.205,
    "vmag": 5.74
  },
  {
    "name": 145842,
    "hr": 6045,
    "bf": "The Nor",
    "pname": "",
    "ra": 16.254257,
    "dec": -47.372021,
    "dist": 118.2033,
    "vmag": 5.13
  },
  {
    "name": 145892,
    "hr": 6047,
    "bf": "9    Her",
    "pname": "",
    "ra": 16.220953,
    "dec": 5.021086,
    "dist": 121.8027,
    "vmag": 5.46
  },
  {
    "name": 145897,
    "hr": 6048,
    "bf": "17Chi Sco",
    "pname": "",
    "ra": 16.230807,
    "dec": -11.837747,
    "dist": 116.0093,
    "vmag": 5.24
  },
  {
    "name": 146051,
    "hr": 6056,
    "bf": "1Del Oph",
    "pname": "",
    "ra": 16.239094,
    "dec": -3.694323,
    "dist": 52.4659,
    "vmag": 2.73
  },
  {
    "name": 146143,
    "hr": 6058,
    "bf": "Gam1Nor",
    "pname": "",
    "ra": 16.283593,
    "dec": -50.068122,
    "dist": 450.4505,
    "vmag": 4.97
  },
  {
    "name": 146233,
    "hr": 6060,
    "bf": "18    Sco",
    "pname": "",
    "ra": 16.260352,
    "dec": -8.369442,
    "dist": 13.9005,
    "vmag": 5.49
  },
  {
    "name": 146361,
    "hr": 6063,
    "bf": "17Sig CrB",
    "pname": "",
    "ra": 16.24469,
    "dec": 33.858613,
    "dist": 21.0793,
    "vmag": 5.23
  },
  {
    "name": 146362,
    "hr": 6064,
    "bf": "17Sig CrB",
    "pname": "",
    "ra": 16.244599,
    "dec": 33.856722,
    "dist": 21.6873,
    "vmag": 6.72
  },
  {
    "name": 146388,
    "hr": 6065,
    "bf": "16    Her",
    "pname": "",
    "ra": 16.257955,
    "dec": 18.808087,
    "dist": 106.6098,
    "vmag": 5.72
  },
  {
    "name": 146667,
    "hr": 6071,
    "bf": "Lam Nor",
    "pname": "",
    "ra": 16.321568,
    "dec": -42.673965,
    "dist": 106.9519,
    "vmag": 5.44
  },
  {
    "name": 146686,
    "hr": 6072,
    "bf": "Gam2Nor",
    "pname": "",
    "ra": 16.330687,
    "dec": -50.155508,
    "dist": 39.4789,
    "vmag": 4.01
  },
  {
    "name": 146738,
    "hr": 6074,
    "bf": "18Ups CrB",
    "pname": "",
    "ra": 16.279107,
    "dec": 29.150261,
    "dist": 204.499,
    "vmag": 5.8
  },
  {
    "name": 146791,
    "hr": 6075,
    "bf": "2Eps Oph",
    "pname": "",
    "ra": 16.305358,
    "dec": -4.692511,
    "dist": 32.6371,
    "vmag": 3.23
  },
  {
    "name": 146926,
    "hr": 6079,
    "bf": "19    UMi",
    "pname": "",
    "ra": 16.180424,
    "dec": 75.877563,
    "dist": 189.3939,
    "vmag": 5.48
  },
  {
    "name": 147084,
    "hr": 6081,
    "bf": "19Omi Sco",
    "pname": "",
    "ra": 16.343939,
    "dec": -24.16932,
    "dist": 269.5418,
    "vmag": 4.55
  },
  {
    "name": 147142,
    "hr": 6082,
    "bf": "20    UMi",
    "pname": "",
    "ra": 16.208936,
    "dec": 75.210681,
    "dist": 200.4008,
    "vmag": 6.36
  },
  {
    "name": 147165,
    "hr": 6084,
    "bf": "20Sig Sco",
    "pname": "",
    "ra": 16.353143,
    "dec": -25.592796,
    "dist": 213.6752,
    "vmag": 2.9
  },
  {
    "name": 147394,
    "hr": 6092,
    "bf": "22Tau Her",
    "pname": "",
    "ra": 16.329011,
    "dec": 46.313366,
    "dist": 94.2507,
    "vmag": 3.91
  },
  {
    "name": 147449,
    "hr": 6093,
    "bf": "50Sig Ser",
    "pname": "",
    "ra": 16.367875,
    "dec": 1.029039,
    "dist": 27.2702,
    "vmag": 4.82
  },
  {
    "name": 147547,
    "hr": 6095,
    "bf": "20Gam Her",
    "pname": "",
    "ra": 16.365338,
    "dec": 19.15313,
    "dist": 59.0667,
    "vmag": 3.74
  },
  {
    "name": 147584,
    "hr": 6098,
    "bf": "Zet TrA",
    "pname": "",
    "ra": 16.474422,
    "dec": -70.084401,
    "dist": 12.1168,
    "vmag": 4.9
  },
  {
    "name": 147675,
    "hr": 6102,
    "bf": "Gam Aps",
    "pname": "",
    "ra": 16.557609,
    "dec": -78.897148,
    "dist": 47.9157,
    "vmag": 3.86
  },
  {
    "name": 147677,
    "hr": 6103,
    "bf": "19Xi  CrB",
    "pname": "",
    "ra": 16.368287,
    "dec": 30.891996,
    "dist": 56.243,
    "vmag": 4.86
  },
  {
    "name": 147700,
    "hr": 6104,
    "bf": "4Psi Oph",
    "pname": "",
    "ra": 16.401718,
    "dec": -20.037327,
    "dist": 61.1621,
    "vmag": 4.48
  },
  {
    "name": 147749,
    "hr": 6107,
    "bf": "20Nu 1CrB",
    "pname": "",
    "ra": 16.372618,
    "dec": 33.799052,
    "dist": 196.4637,
    "vmag": 5.2
  },
  {
    "name": 147767,
    "hr": 6108,
    "bf": "21Nu 2CrB",
    "pname": "",
    "ra": 16.374783,
    "dec": 33.703478,
    "dist": 182.1494,
    "vmag": 5.4
  },
  {
    "name": 147787,
    "hr": 6109,
    "bf": "Iot TrA",
    "pname": "",
    "ra": 16.465918,
    "dec": -64.057942,
    "dist": 38.8048,
    "vmag": 5.28
  },
  {
    "name": 147869,
    "hr": 6111,
    "bf": "21    Her",
    "pname": "",
    "ra": 16.403008,
    "dec": 6.948207,
    "dist": 112.3596,
    "vmag": 5.83
  },
  {
    "name": 147933,
    "hr": 6112,
    "bf": "5Rho Oph",
    "pname": "",
    "ra": 16.426422,
    "dec": -23.447178,
    "dist": 110.742,
    "vmag": 4.57
  },
  {
    "name": 147971,
    "hr": 6115,
    "bf": "Eps Nor",
    "pname": "",
    "ra": 16.453067,
    "dec": -47.554786,
    "dist": 162.6016,
    "vmag": 4.46
  },
  {
    "name": 148048,
    "hr": 6116,
    "bf": "η-UMi",
    "pname": "",
    "ra": 16.291791,
    "dec": 75.75533,
    "dist": 29.7354,
    "vmag": 4.95
  },
  {
    "name": 148112,
    "hr": 6117,
    "bf": "24Ome Her",
    "pname": "",
    "ra": 16.423598,
    "dec": 14.03327,
    "dist": 76.6871,
    "vmag": 4.57
  },
  {
    "name": 148184,
    "hr": 6118,
    "bf": "7Chi Oph",
    "pname": "",
    "ra": 16.450399,
    "dec": -18.456251,
    "dist": 161.0306,
    "vmag": 4.22
  },
  {
    "name": 148283,
    "hr": 6123,
    "bf": "25    Her",
    "pname": "",
    "ra": 16.42338,
    "dec": 37.394079,
    "dist": 74.4602,
    "vmag": 5.53
  },
  {
    "name": 148367,
    "hr": 6129,
    "bf": "3Ups Oph",
    "pname": "",
    "ra": 16.463385,
    "dec": -8.371731,
    "dist": 40.95,
    "vmag": 4.62
  },
  {
    "name": 148387,
    "hr": 6132,
    "bf": "14Eta Dra",
    "pname": "",
    "ra": 16.39986,
    "dec": 61.514213,
    "dist": 28.2326,
    "vmag": 2.73
  },
  {
    "name": 148478,
    "hr": 6134,
    "bf": "21Alp Sco",
    "pname": "Antares",
    "ra": 16.490128,
    "dec": -26.432002,
    "dist": 169.7793,
    "vmag": 1.06
  },
  {
    "name": 148605,
    "hr": 6141,
    "bf": "22    Sco",
    "pname": "",
    "ra": 16.503466,
    "dec": -25.115224,
    "dist": 126.7427,
    "vmag": 4.79
  },
  {
    "name": 148783,
    "hr": 6146,
    "bf": "30    Her",
    "pname": "",
    "ra": 16.477373,
    "dec": 41.881677,
    "dist": 108.5776,
    "vmag": 4.83
  },
  {
    "name": 148786,
    "hr": 6147,
    "bf": "8Phi Oph",
    "pname": "",
    "ra": 16.518991,
    "dec": -16.612733,
    "dist": 74.6826,
    "vmag": 4.29
  },
  {
    "name": 148856,
    "hr": 6148,
    "bf": "27Bet Her",
    "pname": "Kornephoros",
    "ra": 16.503668,
    "dec": 21.489613,
    "dist": 42.6621,
    "vmag": 2.78
  },
  {
    "name": 148857,
    "hr": 6149,
    "bf": "10Lam Oph",
    "pname": "",
    "ra": 16.515229,
    "dec": 1.983923,
    "dist": 53.0786,
    "vmag": 3.82
  },
  {
    "name": 148890,
    "hr": 6151,
    "bf": "The TrA",
    "pname": "",
    "ra": 16.595775,
    "dec": -65.495399,
    "dist": 104.9318,
    "vmag": 5.5
  },
  {
    "name": 148898,
    "hr": 6153,
    "bf": "9Ome Oph",
    "pname": "",
    "ra": 16.535611,
    "dec": -21.46639,
    "dist": 51.7063,
    "vmag": 4.45
  },
  {
    "name": 149038,
    "hr": 6155,
    "bf": "Mu  Nor",
    "pname": "",
    "ra": 16.568061,
    "dec": -44.045315,
    "dist": 100000,
    "vmag": 4.86
  },
  {
    "name": 149081,
    "hr": 6156,
    "bf": "34    Her",
    "pname": "",
    "ra": 16.501681,
    "dec": 48.96109,
    "dist": 101.4199,
    "vmag": 6.44
  },
  {
    "name": 149121,
    "hr": 6158,
    "bf": "28    Her",
    "pname": "",
    "ra": 16.543246,
    "dec": 5.52122,
    "dist": 118.3432,
    "vmag": 5.63
  },
  {
    "name": 149161,
    "hr": 6159,
    "bf": "29    Her",
    "pname": "",
    "ra": 16.543415,
    "dec": 11.488041,
    "dist": 107.6426,
    "vmag": 4.84
  },
  {
    "name": 149212,
    "hr": 6161,
    "bf": "15    Dra",
    "pname": "",
    "ra": 16.4664,
    "dec": 68.768137,
    "dist": 149.2537,
    "vmag": 4.94
  },
  {
    "name": 149324,
    "hr": 6163,
    "bf": "Bet Aps",
    "pname": "",
    "ra": 16.718126,
    "dec": -77.517435,
    "dist": 48.1232,
    "vmag": 4.23
  },
  {
    "name": 149438,
    "hr": 6165,
    "bf": "23Tau Sco",
    "pname": "",
    "ra": 16.598043,
    "dec": -28.216016,
    "dist": 145.3488,
    "vmag": 2.82
  },
  {
    "name": 149630,
    "hr": 6168,
    "bf": "35Sig Her",
    "pname": "",
    "ra": 16.568384,
    "dec": 42.437041,
    "dist": 96.5251,
    "vmag": 4.2
  },
  {
    "name": 149661,
    "hr": 6171,
    "bf": "12    Oph",
    "pname": "",
    "ra": 16.605958,
    "dec": -2.324584,
    "dist": 9.7513,
    "vmag": 5.77
  },
  {
    "name": 149671,
    "hr": 6172,
    "bf": "Eta1TrA",
    "pname": "",
    "ra": 16.689756,
    "dec": -68.296123,
    "dist": 202.8398,
    "vmag": 5.89
  },
  {
    "name": 149757,
    "hr": 6175,
    "bf": "13Zet Oph",
    "pname": "",
    "ra": 16.619316,
    "dec": -10.56709,
    "dist": 112.2334,
    "vmag": 2.54
  },
  {
    "name": 150100,
    "hr": 6184,
    "bf": "16    Dra",
    "pname": "",
    "ra": 16.603174,
    "dec": 52.900048,
    "dist": 130.8901,
    "vmag": 5.53
  },
  {
    "name": 150117,
    "hr": 6185,
    "bf": "17    Dra",
    "pname": "",
    "ra": 16.603812,
    "dec": 52.924422,
    "dist": 126.4223,
    "vmag": 5.07
  },
  {
    "name": 150379,
    "hr": 6194,
    "bf": "36    Her",
    "pname": "",
    "ra": 16.676431,
    "dec": 4.207203,
    "dist": 93.1099,
    "vmag": 6.92
  },
  {
    "name": 150378,
    "hr": 6195,
    "bf": "37    Her",
    "pname": "",
    "ra": 16.677413,
    "dec": 4.219789,
    "dist": 90.009,
    "vmag": 5.77
  },
  {
    "name": 150450,
    "hr": 6200,
    "bf": "42    Her",
    "pname": "",
    "ra": 16.645794,
    "dec": 48.928342,
    "dist": 127.0648,
    "vmag": 4.86
  },
  {
    "name": 150557,
    "hr": 6205,
    "bf": "14    Oph",
    "pname": "",
    "ra": 16.695134,
    "dec": 1.181231,
    "dist": 55.5864,
    "vmag": 5.74
  },
  {
    "name": 150680,
    "hr": 6212,
    "bf": "40Zet Her",
    "pname": "",
    "ra": 16.688113,
    "dec": 31.602726,
    "dist": 10.7158,
    "vmag": 2.81
  },
  {
    "name": 150682,
    "hr": 6213,
    "bf": "39    Her",
    "pname": "",
    "ra": 16.693527,
    "dec": 26.91688,
    "dist": 43.7445,
    "vmag": 5.92
  },
  {
    "name": 150798,
    "hr": 6217,
    "bf": "Alp TrA",
    "pname": "Atria",
    "ra": 16.811077,
    "dec": -69.027715,
    "dist": 119.7605,
    "vmag": 1.91
  },
  {
    "name": 150997,
    "hr": 6220,
    "bf": "44Eta Her",
    "pname": "",
    "ra": 16.714933,
    "dec": 38.922254,
    "dist": 33.3111,
    "vmag": 3.48
  },
  {
    "name": 151101,
    "hr": 6223,
    "bf": "18    Dra",
    "pname": "",
    "ra": 16.681978,
    "dec": 64.589046,
    "dist": 225.7336,
    "vmag": 4.84
  },
  {
    "name": 151133,
    "hr": 6224,
    "bf": "16    Oph",
    "pname": "",
    "ra": 16.758243,
    "dec": 1.020161,
    "dist": 153.1394,
    "vmag": 6.02
  },
  {
    "name": 151179,
    "hr": 6225,
    "bf": "25    Sco",
    "pname": "",
    "ra": 16.780929,
    "dec": -25.52857,
    "dist": 216.4502,
    "vmag": 6.72
  },
  {
    "name": 151217,
    "hr": 6228,
    "bf": "43    Her",
    "pname": "",
    "ra": 16.763859,
    "dec": 8.582616,
    "dist": 108.5776,
    "vmag": 5.15
  },
  {
    "name": 151249,
    "hr": 6229,
    "bf": "Eta Ara",
    "pname": "",
    "ra": 16.82976,
    "dec": -59.041378,
    "dist": 91.7431,
    "vmag": 3.77
  },
  {
    "name": 151431,
    "hr": 6232,
    "bf": "19    Oph",
    "pname": "",
    "ra": 16.786043,
    "dec": 2.064526,
    "dist": 166.113,
    "vmag": 6.07
  },
  {
    "name": 151525,
    "hr": 6234,
    "bf": "45    Her",
    "pname": "",
    "ra": 16.796227,
    "dec": 5.246746,
    "dist": 120.6273,
    "vmag": 5.22
  },
  {
    "name": 151680,
    "hr": 6241,
    "bf": "26Eps Sco",
    "pname": "",
    "ra": 16.83608,
    "dec": -34.293232,
    "dist": 19.5351,
    "vmag": 2.29
  },
  {
    "name": 151769,
    "hr": 6243,
    "bf": "20    Oph",
    "pname": "",
    "ra": 16.830563,
    "dec": -10.783,
    "dist": 31.9795,
    "vmag": 4.64
  },
  {
    "name": 151890,
    "hr": 6247,
    "bf": "Mu 1Sco",
    "pname": "",
    "ra": 16.864509,
    "dec": -38.04738,
    "dist": 153.6098,
    "vmag": 3
  },
  {
    "name": 151956,
    "hr": 6250,
    "bf": "47    Her",
    "pname": "",
    "ra": 16.838717,
    "dec": 7.247683,
    "dist": 54.407,
    "vmag": 5.48
  },
  {
    "name": 151985,
    "hr": 6252,
    "bf": "Mu 2Sco",
    "pname": "",
    "ra": 16.872263,
    "dec": -38.017536,
    "dist": 145.3488,
    "vmag": 3.56
  },
  {
    "name": 152107,
    "hr": 6254,
    "bf": "52    Her",
    "pname": "",
    "ra": 16.820615,
    "dec": 45.983323,
    "dist": 55.2486,
    "vmag": 4.82
  },
  {
    "name": 152127,
    "hr": 6255,
    "bf": "21    Oph",
    "pname": "",
    "ra": 16.856925,
    "dec": 1.215947,
    "dist": 116.144,
    "vmag": 5.51
  },
  {
    "name": 152173,
    "hr": 6258,
    "bf": "50    Her",
    "pname": "",
    "ra": 16.844155,
    "dec": 29.806538,
    "dist": 327.8689,
    "vmag": 5.73
  },
  {
    "name": 152236,
    "hr": 6262,
    "bf": "Zet1Sco",
    "pname": "",
    "ra": 16.899924,
    "dec": -42.362025,
    "dist": 787.4016,
    "vmag": 4.7
  },
  {
    "name": 152308,
    "hr": 6268,
    "bf": "49    Her",
    "pname": "",
    "ra": 16.868014,
    "dec": 14.974215,
    "dist": 124.0695,
    "vmag": 6.51
  },
  {
    "name": 152326,
    "hr": 6270,
    "bf": "51    Her",
    "pname": "",
    "ra": 16.862573,
    "dec": 24.656433,
    "dist": 214.1328,
    "vmag": 5.03
  },
  {
    "name": 152334,
    "hr": 6271,
    "bf": "Zet2Sco",
    "pname": "",
    "ra": 16.909731,
    "dec": -42.361313,
    "dist": 40.568,
    "vmag": 3.62
  },
  {
    "name": 152598,
    "hr": 6279,
    "bf": "53    Her",
    "pname": "",
    "ra": 16.882796,
    "dec": 31.701674,
    "dist": 29.1886,
    "vmag": 5.34
  },
  {
    "name": 152601,
    "hr": 6280,
    "bf": "23    Oph",
    "pname": "",
    "ra": 16.909915,
    "dec": -6.153982,
    "dist": 73.8007,
    "vmag": 5.23
  },
  {
    "name": 152614,
    "hr": 6281,
    "bf": "25Iot Oph",
    "pname": "",
    "ra": 16.900131,
    "dec": 10.165359,
    "dist": 75.188,
    "vmag": 4.39
  },
  {
    "name": 152786,
    "hr": 6285,
    "bf": "Zet Ara",
    "pname": "",
    "ra": 16.977006,
    "dec": -55.990141,
    "dist": 149.0313,
    "vmag": 3.12
  },
  {
    "name": 152820,
    "hr": 6288,
    "bf": "27    Sco",
    "pname": "",
    "ra": 16.953104,
    "dec": -33.259492,
    "dist": 290.6977,
    "vmag": 5.48
  },
  {
    "name": 152849,
    "hr": 6291,
    "bf": "24    Oph",
    "pname": "",
    "ra": 16.946677,
    "dec": -23.150346,
    "dist": 93.1099,
    "vmag": 5.57
  },
  {
    "name": 152863,
    "hr": 6292,
    "bf": "56    Her",
    "pname": "",
    "ra": 16.917267,
    "dec": 25.730681,
    "dist": 136.7989,
    "vmag": 6.06
  },
  {
    "name": 152879,
    "hr": 6293,
    "bf": "54    Her",
    "pname": "",
    "ra": 16.922825,
    "dec": 18.433213,
    "dist": 120.048,
    "vmag": 5.35
  },
  {
    "name": 152980,
    "hr": 6295,
    "bf": "Eps1Ara",
    "pname": "",
    "ra": 16.993069,
    "dec": -53.160438,
    "dist": 110.6195,
    "vmag": 4.06
  },
  {
    "name": 153210,
    "hr": 6299,
    "bf": "27Kap Oph",
    "pname": "",
    "ra": 16.961139,
    "dec": 9.375033,
    "dist": 28.0426,
    "vmag": 3.19
  },
  {
    "name": 153287,
    "hr": 6305,
    "bf": "57    Her",
    "pname": "",
    "ra": 16.958624,
    "dec": 25.352841,
    "dist": 169.4915,
    "vmag": 6.27
  },
  {
    "name": 153363,
    "hr": 6310,
    "bf": "26    Oph",
    "pname": "",
    "ra": 17.002641,
    "dec": -24.98907,
    "dist": 33.7041,
    "vmag": 5.74
  },
  {
    "name": 153580,
    "hr": 6314,
    "bf": "Eps2Ara",
    "pname": "",
    "ra": 17.052419,
    "dec": -53.237028,
    "dist": 27.2257,
    "vmag": 5.27
  },
  {
    "name": 153597,
    "hr": 6315,
    "bf": "19    Dra",
    "pname": "",
    "ra": 16.93375,
    "dec": 65.134796,
    "dist": 15.2579,
    "vmag": 4.88
  },
  {
    "name": 153687,
    "hr": 6318,
    "bf": "30    Oph",
    "pname": "",
    "ra": 17.017667,
    "dec": -4.222644,
    "dist": 124.2236,
    "vmag": 4.82
  },
  {
    "name": 153697,
    "hr": 6319,
    "bf": "20    Dra",
    "pname": "",
    "ra": 16.94036,
    "dec": 65.039124,
    "dist": 69.9301,
    "vmag": 6.4
  },
  {
    "name": 153727,
    "hr": 6321,
    "bf": "29    Oph",
    "pname": "",
    "ra": 17.030904,
    "dec": -18.885538,
    "dist": 177.6199,
    "vmag": 6.28
  },
  {
    "name": 153751,
    "hr": 6322,
    "bf": "ε-UMi",
    "pname": "",
    "ra": 16.766159,
    "dec": 82.037262,
    "dist": 93.1966,
    "vmag": 4.21
  },
  {
    "name": 153808,
    "hr": 6324,
    "bf": "58Eps Her",
    "pname": "",
    "ra": 17.004827,
    "dec": 30.926405,
    "dist": 47.5285,
    "vmag": 3.92
  },
  {
    "name": 154029,
    "hr": 6332,
    "bf": "59    Her",
    "pname": "",
    "ra": 17.026767,
    "dec": 33.56827,
    "dist": 98.8142,
    "vmag": 5.27
  },
  {
    "name": 154356,
    "hr": 6346,
    "bf": "61    Her",
    "pname": "",
    "ra": 17.058392,
    "dec": 35.414049,
    "dist": 229.8851,
    "vmag": 6.19
  },
  {
    "name": 154494,
    "hr": 6355,
    "bf": "60    Her",
    "pname": "",
    "ra": 17.089636,
    "dec": 12.740828,
    "dist": 40.8664,
    "vmag": 4.89
  },
  {
    "name": 154905,
    "hr": 6369,
    "bf": "21Mu  Dra",
    "pname": "",
    "ra": 17.088929,
    "dec": 54.470042,
    "dist": 27.4348,
    "vmag": 4.91
  },
  {
    "name": 154906,
    "hr": 6370,
    "bf": "21Mu  Dra",
    "pname": "",
    "ra": 17.088714,
    "dec": 54.469093,
    "dist": 23.2558,
    "vmag": 5.63
  },
  {
    "name": 155125,
    "hr": 6378,
    "bf": "35Eta Oph",
    "pname": "",
    "ra": 17.172968,
    "dec": -15.72491,
    "dist": 27.0929,
    "vmag": 2.43
  },
  {
    "name": 155203,
    "hr": 6380,
    "bf": "Eta Sco",
    "pname": "",
    "ra": 17.202552,
    "dec": -43.239189,
    "dist": 22.5276,
    "vmag": 3.32
  },
  {
    "name": 155514,
    "hr": 6391,
    "bf": "63    Her",
    "pname": "",
    "ra": 17.184212,
    "dec": 24.237694,
    "dist": 82.3045,
    "vmag": 6.2
  },
  {
    "name": 155644,
    "hr": 6393,
    "bf": "37    Oph",
    "pname": "",
    "ra": 17.207725,
    "dec": 10.585168,
    "dist": 334.4482,
    "vmag": 5.32
  },
  {
    "name": 155763,
    "hr": 6396,
    "bf": "22Zet Dra",
    "pname": "",
    "ra": 17.146448,
    "dec": 65.714683,
    "dist": 100.7049,
    "vmag": 3.17
  },
  {
    "name": 155885,
    "hr": 6401,
    "bf": "36    Oph",
    "pname": "",
    "ra": 17.255836,
    "dec": -26.602829,
    "dist": 5.9333,
    "vmag": 4.33
  },
  {
    "name": 155886,
    "hr": 6402,
    "bf": "36    Oph",
    "pname": "",
    "ra": 17.255734,
    "dec": -26.603215,
    "dist": 5.9852,
    "vmag": 5.07
  },
  {
    "name": 156014,
    "hr": 6406,
    "bf": "64Alp1Her",
    "pname": "Rasalgethi",
    "ra": 17.244127,
    "dec": 14.390333,
    "dist": 110.2536,
    "vmag": 2.78
  },
  {
    "name": 156164,
    "hr": 6410,
    "bf": "65Del Her",
    "pname": "",
    "ra": 17.250531,
    "dec": 24.839204,
    "dist": 23.0362,
    "vmag": 3.12
  },
  {
    "name": 156190,
    "hr": 6411,
    "bf": "Iot Aps",
    "pname": "",
    "ra": 17.368299,
    "dec": -70.123208,
    "dist": 404.8583,
    "vmag": 5.39
  },
  {
    "name": 156266,
    "hr": 6415,
    "bf": "41    Oph",
    "pname": "",
    "ra": 17.276857,
    "dec": -0.445297,
    "dist": 63.0915,
    "vmag": 4.72
  },
  {
    "name": 156277,
    "hr": 6417,
    "bf": "Zet Aps",
    "pname": "",
    "ra": 17.366531,
    "dec": -67.770668,
    "dist": 91.1577,
    "vmag": 4.76
  },
  {
    "name": 156283,
    "hr": 6418,
    "bf": "67Pi  Her",
    "pname": "",
    "ra": 17.250788,
    "dec": 36.809162,
    "dist": 115.4734,
    "vmag": 3.16
  },
  {
    "name": 156349,
    "hr": 6424,
    "bf": "39Omi Oph",
    "pname": "",
    "ra": 17.300189,
    "dec": -24.286901,
    "dist": 90.4159,
    "vmag": 5.14
  },
  {
    "name": 156350,
    "hr": 6425,
    "bf": "39Omi Oph",
    "pname": "",
    "ra": 17.300169,
    "dec": -24.284111,
    "dist": 98.2318,
    "vmag": 6.59
  },
  {
    "name": 156633,
    "hr": 6431,
    "bf": "68    Her",
    "pname": "",
    "ra": 17.288769,
    "dec": 33.1001,
    "dist": 204.0816,
    "vmag": 4.8
  },
  {
    "name": 156729,
    "hr": 6436,
    "bf": "69    Her",
    "pname": "",
    "ra": 17.294517,
    "dec": 37.291498,
    "dist": 53.7924,
    "vmag": 4.64
  },
  {
    "name": 156897,
    "hr": 6445,
    "bf": "40Xi  Oph",
    "pname": "",
    "ra": 17.350101,
    "dec": -21.112933,
    "dist": 17.3551,
    "vmag": 4.39
  },
  {
    "name": 156928,
    "hr": 6446,
    "bf": "53Nu  Ser",
    "pname": "",
    "ra": 17.347128,
    "dec": -12.846875,
    "dist": 62.3053,
    "vmag": 4.32
  },
  {
    "name": 157042,
    "hr": 6451,
    "bf": "Iot Ara",
    "pname": "",
    "ra": 17.387799,
    "dec": -47.468197,
    "dist": 286.533,
    "vmag": 5.21
  },
  {
    "name": 157056,
    "hr": 6453,
    "bf": "42The Oph",
    "pname": "",
    "ra": 17.366827,
    "dec": -24.999545,
    "dist": 133.6898,
    "vmag": 3.27
  },
  {
    "name": 157198,
    "hr": 6457,
    "bf": "70    Her",
    "pname": "",
    "ra": 17.348391,
    "dec": 24.499435,
    "dist": 131.0616,
    "vmag": 5.13
  },
  {
    "name": 157214,
    "hr": 6458,
    "bf": "72    Her",
    "pname": "",
    "ra": 17.34432,
    "dec": 32.467743,
    "dist": 14.3266,
    "vmag": 5.38
  },
  {
    "name": 157236,
    "hr": 6459,
    "bf": "43    Oph",
    "pname": "",
    "ra": 17.389331,
    "dec": -28.142831,
    "dist": 251.2563,
    "vmag": 5.3
  },
  {
    "name": 157244,
    "hr": 6461,
    "bf": "Bet Ara",
    "pname": "",
    "ra": 17.421665,
    "dec": -55.529884,
    "dist": 198.0198,
    "vmag": 2.84
  },
  {
    "name": 157246,
    "hr": 6462,
    "bf": "Gam Ara",
    "pname": "",
    "ra": 17.423239,
    "dec": -56.377727,
    "dist": 341.2969,
    "vmag": 3.31
  },
  {
    "name": 157325,
    "hr": 6464,
    "bf": "74    Her",
    "pname": "",
    "ra": 17.339203,
    "dec": 46.24078,
    "dist": 170.9402,
    "vmag": 5.51
  },
  {
    "name": 157457,
    "hr": 6468,
    "bf": "Kap Ara",
    "pname": "",
    "ra": 17.433344,
    "dec": -50.63351,
    "dist": 139.6648,
    "vmag": 5.19
  },
  {
    "name": 157728,
    "hr": 6480,
    "bf": "73    Her",
    "pname": "",
    "ra": 17.40183,
    "dec": 22.960285,
    "dist": 42.6985,
    "vmag": 5.7
  },
  {
    "name": 157778,
    "hr": 6484,
    "bf": "75Rho Her",
    "pname": "",
    "ra": 17.394708,
    "dec": 37.145946,
    "dist": 120.6273,
    "vmag": 4.15
  },
  {
    "name": 157792,
    "hr": 6486,
    "bf": "44    Oph",
    "pname": "",
    "ra": 17.439504,
    "dec": -24.175309,
    "dist": 25.4972,
    "vmag": 4.16
  },
  {
    "name": 157919,
    "hr": 6492,
    "bf": "45    Oph",
    "pname": "",
    "ra": 17.455909,
    "dec": -29.867033,
    "dist": 34.2114,
    "vmag": 4.28
  },
  {
    "name": 157999,
    "hr": 6498,
    "bf": "49Sig Oph",
    "pname": "",
    "ra": 17.441911,
    "dec": 4.14036,
    "dist": 276.2431,
    "vmag": 4.34
  },
  {
    "name": 158094,
    "hr": 6500,
    "bf": "Del Ara",
    "pname": "",
    "ra": 17.518318,
    "dec": -60.683848,
    "dist": 60.6796,
    "vmag": 3.6
  },
  {
    "name": 158408,
    "hr": 6508,
    "bf": "34Ups Sco",
    "pname": "",
    "ra": 17.512732,
    "dec": -37.295811,
    "dist": 176.6784,
    "vmag": 2.7
  },
  {
    "name": 158414,
    "hr": 6509,
    "bf": "77    Her",
    "pname": "",
    "ra": 17.445623,
    "dec": 48.260065,
    "dist": 115.2074,
    "vmag": 5.83
  },
  {
    "name": 158427,
    "hr": 6510,
    "bf": "Alp Ara",
    "pname": "",
    "ra": 17.530695,
    "dec": -49.876145,
    "dist": 81.9672,
    "vmag": 2.84
  },
  {
    "name": 158643,
    "hr": 6519,
    "bf": "51    Oph",
    "pname": "",
    "ra": 17.523598,
    "dec": -23.962643,
    "dist": 124.3781,
    "vmag": 4.78
  },
  {
    "name": 158899,
    "hr": 6526,
    "bf": "76Lam Her",
    "pname": "",
    "ra": 17.512308,
    "dec": 26.110645,
    "dist": 113.2503,
    "vmag": 4.41
  },
  {
    "name": 158926,
    "hr": 6527,
    "bf": "35Lam Sco",
    "pname": "Shaula",
    "ra": 17.560145,
    "dec": -37.103821,
    "dist": 175.1313,
    "vmag": 1.62
  },
  {
    "name": 159139,
    "hr": 6533,
    "bf": "78    Her",
    "pname": "",
    "ra": 17.530439,
    "dec": 28.407499,
    "dist": 82.0345,
    "vmag": 5.66
  },
  {
    "name": 159181,
    "hr": 6536,
    "bf": "23Bet Dra",
    "pname": "Rastaban",
    "ra": 17.507213,
    "dec": 52.301387,
    "dist": 116.5501,
    "vmag": 2.79
  },
  {
    "name": 159217,
    "hr": 6537,
    "bf": "1Sig Ara",
    "pname": "",
    "ra": 17.594332,
    "dec": -46.505684,
    "dist": 116.0093,
    "vmag": 4.56
  },
  {
    "name": 159376,
    "hr": 6545,
    "bf": "52    Oph",
    "pname": "",
    "ra": 17.588472,
    "dec": -22.043822,
    "dist": 258.3979,
    "vmag": 6.47
  },
  {
    "name": 159480,
    "hr": 6548,
    "bf": "53    Oph",
    "pname": "",
    "ra": 17.57686,
    "dec": 9.5867,
    "dist": 103.5197,
    "vmag": 5.8
  },
  {
    "name": 159492,
    "hr": 6549,
    "bf": "Pi  Ara",
    "pname": "",
    "ra": 17.634871,
    "dec": -54.500434,
    "dist": 44.5633,
    "vmag": 5.25
  },
  {
    "name": 159532,
    "hr": 6553,
    "bf": "The Sco",
    "pname": "Sargas",
    "ra": 17.62198,
    "dec": -42.997824,
    "dist": 92.081,
    "vmag": 1.86
  },
  {
    "name": 159541,
    "hr": 6554,
    "bf": "24Nu 1Dra",
    "pname": "",
    "ra": 17.536251,
    "dec": 55.184243,
    "dist": 30.248,
    "vmag": 4.89
  },
  {
    "name": 159560,
    "hr": 6555,
    "bf": "25Nu 2Dra",
    "pname": "",
    "ra": 17.537767,
    "dec": 55.172958,
    "dist": 30.4878,
    "vmag": 4.86
  },
  {
    "name": 159561,
    "hr": 6556,
    "bf": "55Alp Oph",
    "pname": "Rasalhague",
    "ra": 17.582241,
    "dec": 12.560035,
    "dist": 14.8965,
    "vmag": 2.08
  },
  {
    "name": 159876,
    "hr": 6561,
    "bf": "55Xi  Ser",
    "pname": "",
    "ra": 17.626445,
    "dec": -15.398557,
    "dist": 32.2789,
    "vmag": 3.54
  },
  {
    "name": 159966,
    "hr": 6566,
    "bf": "27    Dra",
    "pname": "",
    "ra": 17.532745,
    "dec": 68.135024,
    "dist": 64.6831,
    "vmag": 5.07
  },
  {
    "name": 159975,
    "hr": 6567,
    "bf": "57Mu  Oph",
    "pname": "",
    "ra": 17.630754,
    "dec": -8.118771,
    "dist": 231.4815,
    "vmag": 4.58
  },
  {
    "name": 160032,
    "hr": 6569,
    "bf": "Lam Ara",
    "pname": "",
    "ra": 17.673276,
    "dec": -49.415587,
    "dist": 21.45,
    "vmag": 4.76
  },
  {
    "name": 160181,
    "hr": 6571,
    "bf": "79    Her",
    "pname": "",
    "ra": 17.625304,
    "dec": 24.309991,
    "dist": 76.6871,
    "vmag": 5.76
  },
  {
    "name": 160269,
    "hr": 6573,
    "bf": "26    Dra",
    "pname": "",
    "ra": 17.58317,
    "dec": 61.874554,
    "dist": 14.1904,
    "vmag": 5.23
  },
  {
    "name": 160290,
    "hr": 6574,
    "bf": "82    Her",
    "pname": "",
    "ra": 17.610457,
    "dec": 48.585634,
    "dist": 108.3424,
    "vmag": 5.35
  },
  {
    "name": 160578,
    "hr": 6580,
    "bf": "Kap Sco",
    "pname": "",
    "ra": 17.708132,
    "dec": -39.029983,
    "dist": 148.1481,
    "vmag": 2.39
  },
  {
    "name": 160613,
    "hr": 6581,
    "bf": "56Omi Ser",
    "pname": "",
    "ra": 17.690243,
    "dec": -12.875307,
    "dist": 53.1067,
    "vmag": 4.24
  },
  {
    "name": 160635,
    "hr": 6582,
    "bf": "Eta Pav",
    "pname": "",
    "ra": 17.762221,
    "dec": -64.723871,
    "dist": 107.9914,
    "vmag": 3.61
  },
  {
    "name": 160691,
    "hr": 6585,
    "bf": "Mu  Ara",
    "pname": "",
    "ra": 17.735752,
    "dec": -51.834053,
    "dist": 15.5111,
    "vmag": 5.12
  },
  {
    "name": 160762,
    "hr": 6588,
    "bf": "85Iot Her",
    "pname": "",
    "ra": 17.657747,
    "dec": 46.006332,
    "dist": 139.47,
    "vmag": 3.82
  },
  {
    "name": 160915,
    "hr": 6595,
    "bf": "58    Oph",
    "pname": "",
    "ra": 17.723833,
    "dec": -21.683194,
    "dist": 17.6523,
    "vmag": 4.86
  },
  {
    "name": 160922,
    "hr": 6596,
    "bf": "28Ome Dra",
    "pname": "",
    "ra": 17.615859,
    "dec": 68.75797,
    "dist": 23.1642,
    "vmag": 4.77
  },
  {
    "name": 161074,
    "hr": 6602,
    "bf": "83    Her",
    "pname": "",
    "ra": 17.707879,
    "dec": 24.564058,
    "dist": 124.3781,
    "vmag": 5.56
  },
  {
    "name": 161096,
    "hr": 6603,
    "bf": "60Bet Oph",
    "pname": "Cebalrai",
    "ra": 17.724543,
    "dec": 4.567303,
    "dist": 25.0941,
    "vmag": 2.76
  },
  {
    "name": 161239,
    "hr": 6608,
    "bf": "84    Her",
    "pname": "",
    "ra": 17.722659,
    "dec": 24.327821,
    "dist": 39.0625,
    "vmag": 5.73
  },
  {
    "name": 161270,
    "hr": 6609,
    "bf": "61    Oph",
    "pname": "",
    "ra": 17.742804,
    "dec": 2.579441,
    "dist": 84.8176,
    "vmag": 6.16
  },
  {
    "name": 161471,
    "hr": 6615,
    "bf": "Iot1Sco",
    "pname": "",
    "ra": 17.793078,
    "dec": -40.126997,
    "dist": 591.716,
    "vmag": 2.99
  },
  {
    "name": 161592,
    "hr": 6616,
    "bf": "3    Sgr",
    "pname": "",
    "ra": 17.792674,
    "dec": -27.830788,
    "dist": 302.1148,
    "vmag": 4.53
  },
  {
    "name": 161797,
    "hr": 6623,
    "bf": "86Mu  Her",
    "pname": "",
    "ra": 17.774319,
    "dec": 27.720676,
    "dist": 8.3105,
    "vmag": 3.42
  },
  {
    "name": 161868,
    "hr": 6629,
    "bf": "62Gam Oph",
    "pname": "",
    "ra": 17.798211,
    "dec": 2.707276,
    "dist": 31.5159,
    "vmag": 3.75
  },
  {
    "name": 161912,
    "hr": 6631,
    "bf": "Iot2Sco",
    "pname": "",
    "ra": 17.83642,
    "dec": -40.090435,
    "dist": 781.25,
    "vmag": 4.78
  },
  {
    "name": 162003,
    "hr": 6636,
    "bf": "31Psi1Dra",
    "pname": "",
    "ra": 17.698978,
    "dec": 72.148843,
    "dist": 22.8363,
    "vmag": 4.57
  },
  {
    "name": 162004,
    "hr": 6637,
    "bf": "31Psi1Dra",
    "pname": "",
    "ra": 17.699461,
    "dec": 72.156911,
    "dist": 23.0627,
    "vmag": 5.81
  },
  {
    "name": 162211,
    "hr": 6644,
    "bf": "87    Her",
    "pname": "",
    "ra": 17.813652,
    "dec": 25.622869,
    "dist": 64.9773,
    "vmag": 5.09
  },
  {
    "name": 162579,
    "hr": 6656,
    "bf": "30    Dra",
    "pname": "",
    "ra": 17.817862,
    "dec": 50.781075,
    "dist": 66.5336,
    "vmag": 5.02
  },
  {
    "name": 162732,
    "hr": 6664,
    "bf": "88    Her",
    "pname": "",
    "ra": 17.834259,
    "dec": 48.394152,
    "dist": 291.5452,
    "vmag": 6.78
  },
  {
    "name": 163217,
    "hr": 6677,
    "bf": "90    Her",
    "pname": "",
    "ra": 17.888341,
    "dec": 40.007959,
    "dist": 108.4599,
    "vmag": 5.17
  },
  {
    "name": 163506,
    "hr": 6685,
    "bf": "89    Her",
    "pname": "",
    "ra": 17.923663,
    "dec": 26.049991,
    "dist": 100000,
    "vmag": 5.47
  },
  {
    "name": 163588,
    "hr": 6688,
    "bf": "32Xi  Dra",
    "pname": "",
    "ra": 17.892134,
    "dec": 56.872643,
    "dist": 34.5066,
    "vmag": 3.73
  },
  {
    "name": 163770,
    "hr": 6695,
    "bf": "91The Her",
    "pname": "",
    "ra": 17.93755,
    "dec": 37.250539,
    "dist": 230.9469,
    "vmag": 3.86
  },
  {
    "name": 163917,
    "hr": 6698,
    "bf": "64Nu  Oph",
    "pname": "",
    "ra": 17.983775,
    "dec": -9.773632,
    "dist": 46.2107,
    "vmag": 3.32
  },
  {
    "name": 163955,
    "hr": 6700,
    "bf": "4    Sgr",
    "pname": "",
    "ra": 17.996543,
    "dec": -23.816133,
    "dist": 127.3885,
    "vmag": 4.74
  },
  {
    "name": 163989,
    "hr": 6701,
    "bf": "35    Dra",
    "pname": "",
    "ra": 17.824155,
    "dec": 76.962881,
    "dist": 31.7561,
    "vmag": 5.02
  },
  {
    "name": 163993,
    "hr": 6703,
    "bf": "92Xi  Her",
    "pname": "",
    "ra": 17.962744,
    "dec": 29.24788,
    "dist": 41.9463,
    "vmag": 3.7
  },
  {
    "name": 164058,
    "hr": 6705,
    "bf": "33Gam Dra",
    "pname": "Etamin",
    "ra": 17.943437,
    "dec": 51.488895,
    "dist": 47.3037,
    "vmag": 2.24
  },
  {
    "name": 164136,
    "hr": 6707,
    "bf": "94Nu  Her",
    "pname": "",
    "ra": 17.975041,
    "dec": 30.189277,
    "dist": 263.8522,
    "vmag": 4.41
  },
  {
    "name": 164259,
    "hr": 6710,
    "bf": "57Zet Ser",
    "pname": "",
    "ra": 18.008058,
    "dec": -3.690269,
    "dist": 23.5516,
    "vmag": 4.62
  },
  {
    "name": 164284,
    "hr": 6712,
    "bf": "66    Oph",
    "pname": "",
    "ra": 18.004388,
    "dec": 4.368615,
    "dist": 199.6008,
    "vmag": 4.79
  },
  {
    "name": 164349,
    "hr": 6713,
    "bf": "93    Her",
    "pname": "",
    "ra": 18.000949,
    "dec": 16.750919,
    "dist": 205.7613,
    "vmag": 4.67
  },
  {
    "name": 164353,
    "hr": 6714,
    "bf": "67    Oph",
    "pname": "",
    "ra": 18.010754,
    "dec": 2.931568,
    "dist": 377.3585,
    "vmag": 3.93
  },
  {
    "name": 164358,
    "hr": 6715,
    "bf": "6    Sgr",
    "pname": "",
    "ra": 18.023089,
    "dec": -17.156868,
    "dist": 806.4516,
    "vmag": 6.27
  },
  {
    "name": 164461,
    "hr": 6721,
    "bf": "Chi Oct",
    "pname": "",
    "ra": 18.91323,
    "dec": -87.605843,
    "dist": 78.7402,
    "vmag": 5.29
  },
  {
    "name": 164577,
    "hr": 6723,
    "bf": "68    Oph",
    "pname": "",
    "ra": 18.029222,
    "dec": 1.305076,
    "dist": 89.6861,
    "vmag": 4.42
  },
  {
    "name": 164584,
    "hr": 6724,
    "bf": "7    Sgr",
    "pname": "",
    "ra": 18.047527,
    "dec": -24.282468,
    "dist": 331.1258,
    "vmag": 5.37
  },
  {
    "name": 164613,
    "hr": 6725,
    "bf": "34Psi2Dra",
    "pname": "",
    "ra": 17.919762,
    "dec": 72.005127,
    "dist": 323.6246,
    "vmag": 5.43
  },
  {
    "name": 164668,
    "hr": 6729,
    "bf": "95    Her",
    "pname": "",
    "ra": 18.025113,
    "dec": 21.595782,
    "dist": 127.8772,
    "vmag": 4.26
  },
  {
    "name": 164764,
    "hr": 6733,
    "bf": "69Tau Oph",
    "pname": "",
    "ra": 18.051367,
    "dec": -8.180349,
    "dist": 51.3347,
    "vmag": 4.77
  },
  {
    "name": 164765,
    "hr": 6734,
    "bf": "69Tau Oph",
    "pname": "",
    "ra": 18.051202,
    "dec": -8.181708,
    "dist": 52.0291,
    "vmag": 5.24
  },
  {
    "name": 164794,
    "hr": 6736,
    "bf": "9    Sgr",
    "pname": "",
    "ra": 18.064568,
    "dec": -24.36073,
    "dist": 100000,
    "vmag": 5.89
  },
  {
    "name": 164852,
    "hr": 6738,
    "bf": "96    Her",
    "pname": "",
    "ra": 18.039736,
    "dec": 20.833632,
    "dist": 288.1844,
    "vmag": 5.25
  },
  {
    "name": 164900,
    "hr": 6741,
    "bf": "97    Her",
    "pname": "",
    "ra": 18.041709,
    "dec": 22.92323,
    "dist": 233.6449,
    "vmag": 6.22
  },
  {
    "name": 164975,
    "hr": 6742,
    "bf": "Gam1Sgr",
    "pname": "",
    "ra": 18.083674,
    "dec": -29.580087,
    "dist": 266.6667,
    "vmag": 4.66
  },
  {
    "name": 165024,
    "hr": 6743,
    "bf": "The Ara",
    "pname": "",
    "ra": 18.11052,
    "dec": -50.091477,
    "dist": 249.3766,
    "vmag": 3.65
  },
  {
    "name": 165040,
    "hr": 6745,
    "bf": "Pi  Pav",
    "pname": "",
    "ra": 18.143,
    "dec": -63.668553,
    "dist": 39.8565,
    "vmag": 4.33
  },
  {
    "name": 165135,
    "hr": 6746,
    "bf": "10Gam2Sgr",
    "pname": "Nash",
    "ra": 18.096803,
    "dec": -30.424091,
    "dist": 29.7,
    "vmag": 2.98
  },
  {
    "name": 165341,
    "hr": 6752,
    "bf": "70    Oph",
    "pname": "",
    "ra": 18.090913,
    "dec": 2.500099,
    "dist": 5.0834,
    "vmag": 4.03
  },
  {
    "name": 165499,
    "hr": 6761,
    "bf": "Iot Pav",
    "pname": "",
    "ra": 18.173948,
    "dec": -62.002197,
    "dist": 17.6118,
    "vmag": 5.47
  },
  {
    "name": 165625,
    "hr": 6765,
    "bf": "98    Her",
    "pname": "",
    "ra": 18.100528,
    "dec": 22.218879,
    "dist": 226.2443,
    "vmag": 4.96
  },
  {
    "name": 165760,
    "hr": 6770,
    "bf": "71    Oph",
    "pname": "",
    "ra": 18.121767,
    "dec": 8.733867,
    "dist": 83.612,
    "vmag": 4.64
  },
  {
    "name": 165777,
    "hr": 6771,
    "bf": "72    Oph",
    "pname": "",
    "ra": 18.122496,
    "dec": 9.563847,
    "dist": 26.6312,
    "vmag": 3.71
  },
  {
    "name": 165908,
    "hr": 6775,
    "bf": "99    Her",
    "pname": "",
    "ra": 18.117097,
    "dec": 30.56214,
    "dist": 15.6421,
    "vmag": 5.05
  },
  {
    "name": 166014,
    "hr": 6779,
    "bf": "103Omi Her",
    "pname": "",
    "ra": 18.125708,
    "dec": 28.762488,
    "dist": 103.6269,
    "vmag": 3.84
  },
  {
    "name": 166045,
    "hr": 6781,
    "bf": "100    Her",
    "pname": "",
    "ra": 18.130434,
    "dec": 26.10128,
    "dist": 49.6032,
    "vmag": 5.83
  },
  {
    "name": 166046,
    "hr": 6782,
    "bf": "100    Her",
    "pname": "",
    "ra": 18.130417,
    "dec": 26.09734,
    "dist": 38.5802,
    "vmag": 5.79
  },
  {
    "name": 166063,
    "hr": 6783,
    "bf": "Eps Tel",
    "pname": "",
    "ra": 18.187157,
    "dec": -45.954418,
    "dist": 128.2051,
    "vmag": 4.52
  },
  {
    "name": 166182,
    "hr": 6787,
    "bf": "102    Her",
    "pname": "",
    "ra": 18.14597,
    "dec": 20.814557,
    "dist": 280.8989,
    "vmag": 4.37
  },
  {
    "name": 166205,
    "hr": 6789,
    "bf": "δ-UMi",
    "pname": "Yildun",
    "ra": 17.536918,
    "dec": 86.58646,
    "dist": 52.7704,
    "vmag": 4.35
  },
  {
    "name": 166230,
    "hr": 6794,
    "bf": "101    Her",
    "pname": "",
    "ra": 18.148018,
    "dec": 20.045233,
    "dist": 100.8065,
    "vmag": 5.1
  },
  {
    "name": 166233,
    "hr": 6795,
    "bf": "73    Oph",
    "pname": "",
    "ra": 18.159415,
    "dec": 3.993276,
    "dist": 54.7945,
    "vmag": 5.71
  },
  {
    "name": 166464,
    "hr": 6801,
    "bf": "11    Sgr",
    "pname": "",
    "ra": 18.19537,
    "dec": -23.701235,
    "dist": 78.4929,
    "vmag": 4.96
  },
  {
    "name": 166865,
    "hr": 6809,
    "bf": "40    Dra",
    "pname": "",
    "ra": 18.000944,
    "dec": 80.000841,
    "dist": 72.6216,
    "vmag": 6.11
  },
  {
    "name": 166866,
    "hr": 6810,
    "bf": "41    Dra",
    "pname": "",
    "ra": 18.002526,
    "dec": 80.004095,
    "dist": 63.5324,
    "vmag": 5.74
  },
  {
    "name": 166926,
    "hr": 6811,
    "bf": "24    UMi",
    "pname": "",
    "ra": 17.513056,
    "dec": 86.968047,
    "dist": 46.8823,
    "vmag": 5.78
  },
  {
    "name": 166937,
    "hr": 6812,
    "bf": "13Mu  Sgr",
    "pname": "",
    "ra": 18.229392,
    "dec": -21.058834,
    "dist": 100000,
    "vmag": 3.84
  },
  {
    "name": 167006,
    "hr": 6815,
    "bf": "104    Her",
    "pname": "",
    "ra": 18.198377,
    "dec": 31.40535,
    "dist": 166.9449,
    "vmag": 4.96
  },
  {
    "name": 167036,
    "hr": 6816,
    "bf": "14    Sgr",
    "pname": "",
    "ra": 18.23775,
    "dec": -21.713164,
    "dist": 138.8889,
    "vmag": 5.49
  },
  {
    "name": 167264,
    "hr": 6822,
    "bf": "15    Sgr",
    "pname": "",
    "ra": 18.253585,
    "dec": -20.72827,
    "dist": 100000,
    "vmag": 5.29
  },
  {
    "name": 167263,
    "hr": 6823,
    "bf": "16    Sgr",
    "pname": "",
    "ra": 18.253603,
    "dec": -20.387974,
    "dist": 100000,
    "vmag": 5.96
  },
  {
    "name": 167468,
    "hr": 6829,
    "bf": "Phi Oct",
    "pname": "",
    "ra": 18.393456,
    "dec": -75.044277,
    "dist": 59.4884,
    "vmag": 5.47
  },
  {
    "name": 167618,
    "hr": 6832,
    "bf": "Eta Sgr",
    "pname": "",
    "ra": 18.293793,
    "dec": -36.761686,
    "dist": 44.7427,
    "vmag": 3.1
  },
  {
    "name": 168151,
    "hr": 6850,
    "bf": "36    Dra",
    "pname": "",
    "ra": 18.231545,
    "dec": 64.397287,
    "dist": 22.92,
    "vmag": 4.99
  },
  {
    "name": 168339,
    "hr": 6855,
    "bf": "Xi  Pav",
    "pname": "",
    "ra": 18.387117,
    "dec": -61.493901,
    "dist": 143.6782,
    "vmag": 4.35
  },
  {
    "name": 168454,
    "hr": 6859,
    "bf": "19Del Sgr",
    "pname": "Kaus Meridionalis",
    "ra": 18.3499,
    "dec": -29.828103,
    "dist": 106.6098,
    "vmag": 2.72
  },
  {
    "name": 168532,
    "hr": 6860,
    "bf": "105    Her",
    "pname": "",
    "ra": 18.319633,
    "dec": 24.446059,
    "dist": 298.5075,
    "vmag": 5.3
  },
  {
    "name": 168653,
    "hr": 6865,
    "bf": "37    Dra",
    "pname": "",
    "ra": 18.254739,
    "dec": 68.75581,
    "dist": 84.674,
    "vmag": 5.96
  },
  {
    "name": 168656,
    "hr": 6866,
    "bf": "74    Oph",
    "pname": "",
    "ra": 18.347795,
    "dec": 3.377165,
    "dist": 79.8722,
    "vmag": 4.85
  },
  {
    "name": 168720,
    "hr": 6868,
    "bf": "106    Her",
    "pname": "",
    "ra": 18.338309,
    "dec": 21.961297,
    "dist": 120.1923,
    "vmag": 4.92
  },
  {
    "name": 168723,
    "hr": 6869,
    "bf": "58Eta Ser",
    "pname": "",
    "ra": 18.355167,
    "dec": -2.898825,
    "dist": 18.5426,
    "vmag": 3.23
  },
  {
    "name": 168775,
    "hr": 6872,
    "bf": "1Kap Lyr",
    "pname": "",
    "ra": 18.331031,
    "dec": 36.064547,
    "dist": 77.1605,
    "vmag": 4.33
  },
  {
    "name": 168913,
    "hr": 6876,
    "bf": "108    Her",
    "pname": "",
    "ra": 18.349158,
    "dec": 29.858925,
    "dist": 56.1798,
    "vmag": 5.61
  },
  {
    "name": 168914,
    "hr": 6877,
    "bf": "107    Her",
    "pname": "",
    "ra": 18.350283,
    "dec": 28.869954,
    "dist": 80.6452,
    "vmag": 5.12
  },
  {
    "name": 169022,
    "hr": 6879,
    "bf": "20Eps Sgr",
    "pname": "Kaus Australis",
    "ra": 18.402868,
    "dec": -34.384616,
    "dist": 43.9367,
    "vmag": 1.79
  },
  {
    "name": 169156,
    "hr": 6884,
    "bf": "Zet Sct",
    "pname": "",
    "ra": 18.394329,
    "dec": -8.934383,
    "dist": 63.3714,
    "vmag": 4.66
  },
  {
    "name": 169233,
    "hr": 6888,
    "bf": "18    Sgr",
    "pname": "",
    "ra": 18.417066,
    "dec": -30.75657,
    "dist": 196.0784,
    "vmag": 5.58
  },
  {
    "name": 169414,
    "hr": 6895,
    "bf": "109    Her",
    "pname": "",
    "ra": 18.394967,
    "dec": 21.769752,
    "dist": 36.4697,
    "vmag": 3.85
  },
  {
    "name": 169420,
    "hr": 6896,
    "bf": "21    Sgr",
    "pname": "",
    "ra": 18.422511,
    "dec": -20.541679,
    "dist": 125.7862,
    "vmag": 4.81
  },
  {
    "name": 169467,
    "hr": 6897,
    "bf": "Alp Tel",
    "pname": "",
    "ra": 18.449561,
    "dec": -45.968459,
    "dist": 85.1789,
    "vmag": 3.49
  },
  {
    "name": 169702,
    "hr": 6903,
    "bf": "2Mu  Lyr",
    "pname": "",
    "ra": 18.40383,
    "dec": 39.507239,
    "dist": 134.5895,
    "vmag": 5.11
  },
  {
    "name": 169767,
    "hr": 6905,
    "bf": "Zet Tel",
    "pname": "",
    "ra": 18.480505,
    "dec": -49.070588,
    "dist": 38.6997,
    "vmag": 4.1
  },
  {
    "name": 169916,
    "hr": 6913,
    "bf": "22Lam Sgr",
    "pname": "Kaus Borealis",
    "ra": 18.466179,
    "dec": -25.4217,
    "dist": 23.9693,
    "vmag": 2.82
  },
  {
    "name": 169978,
    "hr": 6916,
    "bf": "Nu  Pav",
    "pname": "",
    "ra": 18.522896,
    "dec": -62.278302,
    "dist": 134.5895,
    "vmag": 4.63
  },
  {
    "name": 169985,
    "hr": 6918,
    "bf": "59    Ser",
    "pname": "",
    "ra": 18.453475,
    "dec": 0.196108,
    "dist": 143.8849,
    "vmag": 5.2
  },
  {
    "name": 170000,
    "hr": 6920,
    "bf": "43Phi Dra",
    "pname": "",
    "ra": 18.345955,
    "dec": 71.337814,
    "dist": 92.8505,
    "vmag": 4.22
  },
  {
    "name": 170073,
    "hr": 6923,
    "bf": "39    Dra",
    "pname": "",
    "ra": 18.398507,
    "dec": 58.800736,
    "dist": 56.4653,
    "vmag": 4.98
  },
  {
    "name": 170153,
    "hr": 6927,
    "bf": "44Chi Dra",
    "pname": "",
    "ra": 18.350736,
    "dec": 72.732843,
    "dist": 8.0574,
    "vmag": 3.55
  },
  {
    "name": 170296,
    "hr": 6930,
    "bf": "Gam Sct",
    "pname": "",
    "ra": 18.486626,
    "dec": -14.565813,
    "dist": 97.9432,
    "vmag": 4.67
  },
  {
    "name": 170465,
    "hr": 6934,
    "bf": "Del1Tel",
    "pname": "",
    "ra": 18.529287,
    "dec": -45.914814,
    "dist": 216.9197,
    "vmag": 4.92
  },
  {
    "name": 170474,
    "hr": 6935,
    "bf": "60    Ser",
    "pname": "",
    "ra": 18.494717,
    "dec": -1.985308,
    "dist": 70.4225,
    "vmag": 5.38
  },
  {
    "name": 170523,
    "hr": 6938,
    "bf": "Del2Tel",
    "pname": "",
    "ra": 18.533874,
    "dec": -45.757382,
    "dist": 366.3004,
    "vmag": 5.07
  },
  {
    "name": 170693,
    "hr": 6945,
    "bf": "42    Dra",
    "pname": "",
    "ra": 18.433069,
    "dec": 65.56348,
    "dist": 96.5251,
    "vmag": 4.82
  },
  {
    "name": 170845,
    "hr": 6951,
    "bf": "The CrA",
    "pname": "",
    "ra": 18.558383,
    "dec": -42.31251,
    "dist": 170.9402,
    "vmag": 4.62
  },
  {
    "name": 170868,
    "hr": 6952,
    "bf": "Kap1CrA",
    "pname": "",
    "ra": 18.556426,
    "dec": -38.725985,
    "dist": 298.5075,
    "vmag": 5.67
  },
  {
    "name": 170867,
    "hr": 6953,
    "bf": "Kap2CrA",
    "pname": "",
    "ra": 18.556413,
    "dec": -38.720033,
    "dist": 47.2144,
    "vmag": 6.31
  },
  {
    "name": 170920,
    "hr": 6957,
    "bf": "61    Ser",
    "pname": "",
    "ra": 18.532498,
    "dec": -1.002977,
    "dist": 188.3239,
    "vmag": 5.93
  },
  {
    "name": 171115,
    "hr": 6961,
    "bf": "24    Sgr",
    "pname": "",
    "ra": 18.564857,
    "dec": -24.032283,
    "dist": 632.9114,
    "vmag": 5.49
  },
  {
    "name": 171237,
    "hr": 6965,
    "bf": "25    Sgr",
    "pname": "",
    "ra": 18.575767,
    "dec": -24.222393,
    "dist": 100000,
    "vmag": 6.53
  },
  {
    "name": 171443,
    "hr": 6973,
    "bf": "Alp Sct",
    "pname": "",
    "ra": 18.586785,
    "dec": -8.244073,
    "dist": 61.0501,
    "vmag": 3.85
  },
  {
    "name": 171635,
    "hr": 6978,
    "bf": "45    Dra",
    "pname": "",
    "ra": 18.542923,
    "dec": 57.045599,
    "dist": 649.3506,
    "vmag": 4.77
  },
  {
    "name": 171759,
    "hr": 6982,
    "bf": "Zet Pav",
    "pname": "",
    "ra": 18.71726,
    "dec": -71.428113,
    "dist": 66.9792,
    "vmag": 4.01
  },
  {
    "name": 172167,
    "hr": 7001,
    "bf": "3Alp Lyr",
    "pname": "Vega",
    "ra": 18.61564,
    "dec": 38.783692,
    "dist": 7.6787,
    "vmag": 0.03
  },
  {
    "name": 172546,
    "hr": 7011,
    "bf": "26    Sgr",
    "pname": "",
    "ra": 18.697674,
    "dec": -23.833423,
    "dist": 62.8931,
    "vmag": 6.22
  },
  {
    "name": 172748,
    "hr": 7020,
    "bf": "Del Sct",
    "pname": "",
    "ra": 18.704563,
    "dec": -9.052549,
    "dist": 62.0732,
    "vmag": 4.7
  },
  {
    "name": 172777,
    "hr": 7021,
    "bf": "Lam CrA",
    "pname": "",
    "ra": 18.729706,
    "dec": -38.323441,
    "dist": 62.9327,
    "vmag": 5.11
  },
  {
    "name": 173009,
    "hr": 7032,
    "bf": "Eps Sct",
    "pname": "",
    "ra": 18.725348,
    "dec": -8.275215,
    "dist": 165.0165,
    "vmag": 4.88
  },
  {
    "name": 173168,
    "hr": 7036,
    "bf": "The Pav",
    "pname": "",
    "ra": 18.810538,
    "dec": -65.077679,
    "dist": 67.7048,
    "vmag": 5.71
  },
  {
    "name": 173300,
    "hr": 7039,
    "bf": "27Phi Sgr",
    "pname": "",
    "ra": 18.76094,
    "dec": -26.990778,
    "dist": 73.3676,
    "vmag": 3.17
  },
  {
    "name": 173370,
    "hr": 7040,
    "bf": "4    Aql",
    "pname": "",
    "ra": 18.747205,
    "dec": 2.060038,
    "dist": 142.6534,
    "vmag": 5.02
  },
  {
    "name": 173460,
    "hr": 7046,
    "bf": "28    Sgr",
    "pname": "",
    "ra": 18.772391,
    "dec": -22.392176,
    "dist": 209.6436,
    "vmag": 5.37
  },
  {
    "name": 173524,
    "hr": 7049,
    "bf": "46    Dra",
    "pname": "",
    "ra": 18.710543,
    "dec": 55.539457,
    "dist": 104.3841,
    "vmag": 5.03
  },
  {
    "name": 173540,
    "hr": 7050,
    "bf": "Mu  CrA",
    "pname": "",
    "ra": 18.795726,
    "dec": -40.406167,
    "dist": 121.3592,
    "vmag": 5.2
  },
  {
    "name": 173582,
    "hr": 7051,
    "bf": "4Eps1Lyr",
    "pname": "",
    "ra": 18.738984,
    "dec": 39.670123,
    "dist": 49.776,
    "vmag": 4.67
  },
  {
    "name": 173607,
    "hr": 7053,
    "bf": "5Eps2Lyr",
    "pname": "",
    "ra": 18.739661,
    "dec": 39.612721,
    "dist": 47.6872,
    "vmag": 4.59
  },
  {
    "name": 173648,
    "hr": 7056,
    "bf": "6Zet1Lyr",
    "pname": "",
    "ra": 18.746209,
    "dec": 37.605115,
    "dist": 47.8698,
    "vmag": 4.34
  },
  {
    "name": 173649,
    "hr": 7057,
    "bf": "7Zet2Lyr",
    "pname": "",
    "ra": 18.746722,
    "dec": 37.594615,
    "dist": 47.6872,
    "vmag": 5.73
  },
  {
    "name": 173654,
    "hr": 7059,
    "bf": "5    Aql",
    "pname": "",
    "ra": 18.77461,
    "dec": -0.961692,
    "dist": 111.8568,
    "vmag": 5.89
  },
  {
    "name": 173667,
    "hr": 7061,
    "bf": "110    Her",
    "pname": "",
    "ra": 18.761035,
    "dec": 20.546308,
    "dist": 19.2086,
    "vmag": 4.19
  },
  {
    "name": 173715,
    "hr": 7062,
    "bf": "Eta1CrA",
    "pname": "",
    "ra": 18.814024,
    "dec": -43.680047,
    "dist": 103.0928,
    "vmag": 5.46
  },
  {
    "name": 173764,
    "hr": 7063,
    "bf": "Bet Sct",
    "pname": "",
    "ra": 18.786242,
    "dec": -4.747867,
    "dist": 280.8989,
    "vmag": 4.22
  },
  {
    "name": 173861,
    "hr": 7068,
    "bf": "Eta2CrA",
    "pname": "",
    "ra": 18.826388,
    "dec": -43.434102,
    "dist": 147.7105,
    "vmag": 5.6
  },
  {
    "name": 173880,
    "hr": 7069,
    "bf": "111    Her",
    "pname": "",
    "ra": 18.783686,
    "dec": 18.181519,
    "dist": 28.8934,
    "vmag": 4.34
  },
  {
    "name": 173948,
    "hr": 7074,
    "bf": "Lam Pav",
    "pname": "",
    "ra": 18.870288,
    "dec": -62.187593,
    "dist": 438.5965,
    "vmag": 4.22
  },
  {
    "name": 174116,
    "hr": 7078,
    "bf": "29    Sgr",
    "pname": "",
    "ra": 18.827807,
    "dec": -20.324656,
    "dist": 286.533,
    "vmag": 5.22
  },
  {
    "name": 174295,
    "hr": 7087,
    "bf": "Kap Tel",
    "pname": "",
    "ra": 18.877675,
    "dec": -52.10737,
    "dist": 83.3333,
    "vmag": 5.18
  },
  {
    "name": 174309,
    "hr": 7088,
    "bf": "30    Sgr",
    "pname": "",
    "ra": 18.847359,
    "dec": -22.16219,
    "dist": 70.5716,
    "vmag": 6.29
  },
  {
    "name": 174585,
    "hr": 7100,
    "bf": "8Nu 1Lyr",
    "pname": "",
    "ra": 18.82942,
    "dec": 32.81282,
    "dist": 401.6064,
    "vmag": 5.93
  },
  {
    "name": 174589,
    "hr": 7101,
    "bf": "8    Aql",
    "pname": "",
    "ra": 18.856155,
    "dec": -3.317857,
    "dist": 78.6164,
    "vmag": 6.08
  },
  {
    "name": 174602,
    "hr": 7102,
    "bf": "9Nu 2Lyr",
    "pname": "",
    "ra": 18.831366,
    "dec": 32.551058,
    "dist": 70.9723,
    "vmag": 5.22
  },
  {
    "name": 174638,
    "hr": 7106,
    "bf": "10Bet Lyr",
    "pname": "Sheliak",
    "ra": 18.834665,
    "dec": 33.362667,
    "dist": 294.9853,
    "vmag": 3.52
  },
  {
    "name": 174694,
    "hr": 7107,
    "bf": "Kap Pav",
    "pname": "",
    "ra": 18.949177,
    "dec": -67.233495,
    "dist": 153.3742,
    "vmag": 4.4
  },
  {
    "name": 174933,
    "hr": 7113,
    "bf": "112    Her",
    "pname": "",
    "ra": 18.87123,
    "dec": 21.425142,
    "dist": 124.3781,
    "vmag": 5.43
  },
  {
    "name": 174947,
    "hr": 7114,
    "bf": "33    Sgr",
    "pname": "",
    "ra": 18.900025,
    "dec": -21.359845,
    "dist": 502.5126,
    "vmag": 5.68
  },
  {
    "name": 174974,
    "hr": 7116,
    "bf": "32Nu 1Sgr",
    "pname": "",
    "ra": 18.902827,
    "dec": -22.744834,
    "dist": 344.8276,
    "vmag": 4.86
  },
  {
    "name": 175190,
    "hr": 7120,
    "bf": "35Nu 2Sgr",
    "pname": "",
    "ra": 18.918649,
    "dec": -22.671328,
    "dist": 83.9631,
    "vmag": 5
  },
  {
    "name": 175191,
    "hr": 7121,
    "bf": "34Sig Sgr",
    "pname": "Nunki",
    "ra": 18.92109,
    "dec": -26.296722,
    "dist": 69.8324,
    "vmag": 2.05
  },
  {
    "name": 175286,
    "hr": 7124,
    "bf": "50    Dra",
    "pname": "",
    "ra": 18.772849,
    "dec": 75.433964,
    "dist": 85.8369,
    "vmag": 5.37
  },
  {
    "name": 175306,
    "hr": 7125,
    "bf": "47Omi Dra",
    "pname": "",
    "ra": 18.853348,
    "dec": 59.388351,
    "dist": 104.8218,
    "vmag": 4.63
  },
  {
    "name": 175329,
    "hr": 7127,
    "bf": "Ome Pav",
    "pname": "",
    "ra": 18.976812,
    "dec": -60.20055,
    "dist": 172.7116,
    "vmag": 5.14
  },
  {
    "name": 175426,
    "hr": 7131,
    "bf": "11Del1Lyr",
    "pname": "",
    "ra": 18.895433,
    "dec": 36.971721,
    "dist": 303.9514,
    "vmag": 5.58
  },
  {
    "name": 175492,
    "hr": 7133,
    "bf": "113    Her",
    "pname": "",
    "ra": 18.912468,
    "dec": 22.645076,
    "dist": 144.7178,
    "vmag": 4.57
  },
  {
    "name": 175510,
    "hr": 7134,
    "bf": "Lam Tel",
    "pname": "",
    "ra": 18.974378,
    "dec": -52.938629,
    "dist": 187.6173,
    "vmag": 4.85
  },
  {
    "name": 175588,
    "hr": 7139,
    "bf": "12Del2Lyr",
    "pname": "",
    "ra": 18.908412,
    "dec": 36.898613,
    "dist": 225.7336,
    "vmag": 4.22
  },
  {
    "name": 175638,
    "hr": 7141,
    "bf": "63The1Ser",
    "pname": "",
    "ra": 18.936995,
    "dec": 4.203595,
    "dist": 47.4158,
    "vmag": 4.62
  },
  {
    "name": 175639,
    "hr": 7142,
    "bf": "63The2Ser",
    "pname": "",
    "ra": 18.937401,
    "dec": 4.202132,
    "dist": 51.9481,
    "vmag": 4.98
  },
  {
    "name": 175687,
    "hr": 7145,
    "bf": "36Xi 1Sgr",
    "pname": "",
    "ra": 18.955688,
    "dec": -20.656346,
    "dist": 632.9114,
    "vmag": 5.02
  },
  {
    "name": 175751,
    "hr": 7149,
    "bf": "Eta Sct",
    "pname": "",
    "ra": 18.951019,
    "dec": -5.846314,
    "dist": 62.0347,
    "vmag": 4.83
  },
  {
    "name": 175775,
    "hr": 7150,
    "bf": "37Xi 2Sgr",
    "pname": "",
    "ra": 18.962167,
    "dec": -21.106654,
    "dist": 111.9821,
    "vmag": 3.52
  },
  {
    "name": 175813,
    "hr": 7152,
    "bf": "Eps CrA",
    "pname": "",
    "ra": 18.978721,
    "dec": -37.107357,
    "dist": 30.1841,
    "vmag": 4.83
  },
  {
    "name": 175865,
    "hr": 7157,
    "bf": "13    Lyr",
    "pname": "",
    "ra": 18.922249,
    "dec": 43.946088,
    "dist": 91.4077,
    "vmag": 4.08
  },
  {
    "name": 175869,
    "hr": 7158,
    "bf": "64    Ser",
    "pname": "",
    "ra": 18.954608,
    "dec": 2.535346,
    "dist": 348.4321,
    "vmag": 5.56
  },
  {
    "name": 176232,
    "hr": 7167,
    "bf": "10    Aql",
    "pname": "",
    "ra": 18.979701,
    "dec": 13.906648,
    "dist": 78.3699,
    "vmag": 5.91
  },
  {
    "name": 176303,
    "hr": 7172,
    "bf": "11    Aql",
    "pname": "",
    "ra": 18.984928,
    "dec": 13.622245,
    "dist": 48.4262,
    "vmag": 5.27
  },
  {
    "name": 176408,
    "hr": 7175,
    "bf": "48    Dra",
    "pname": "",
    "ra": 18.945851,
    "dec": 57.814851,
    "dist": 84.674,
    "vmag": 5.67
  },
  {
    "name": 176411,
    "hr": 7176,
    "bf": "13Eps Aql",
    "pname": "ε-Aql",
    "ra": 18.993711,
    "dec": 15.068298,
    "dist": 47.5059,
    "vmag": 4.02
  },
  {
    "name": 176437,
    "hr": 7178,
    "bf": "14Gam Lyr",
    "pname": "",
    "ra": 18.982395,
    "dec": 32.689557,
    "dist": 190.1141,
    "vmag": 3.25
  },
  {
    "name": 176524,
    "hr": 7180,
    "bf": "52Ups Dra",
    "pname": "",
    "ra": 18.90661,
    "dec": 71.297192,
    "dist": 105.4852,
    "vmag": 4.82
  },
  {
    "name": 176638,
    "hr": 7188,
    "bf": "Zet CrA",
    "pname": "",
    "ra": 19.051907,
    "dec": -42.095105,
    "dist": 59.2066,
    "vmag": 4.74
  },
  {
    "name": 176670,
    "hr": 7192,
    "bf": "15Lam Lyr",
    "pname": "",
    "ra": 19.000229,
    "dec": 32.145514,
    "dist": 338.9831,
    "vmag": 4.94
  },
  {
    "name": 176678,
    "hr": 7193,
    "bf": "12    Aql",
    "pname": "I-Aql",
    "ra": 19.028008,
    "dec": -5.739115,
    "dist": 44.1306,
    "vmag": 4.02
  },
  {
    "name": 176687,
    "hr": 7194,
    "bf": "38Zet Sgr",
    "pname": "",
    "ra": 19.043532,
    "dec": -29.880105,
    "dist": 27.0416,
    "vmag": 2.6
  },
  {
    "name": 176984,
    "hr": 7209,
    "bf": "14    Aql",
    "pname": "",
    "ra": 19.048472,
    "dec": -3.698987,
    "dist": 153.1394,
    "vmag": 5.4
  },
  {
    "name": 177171,
    "hr": 7213,
    "bf": "Rho Tel",
    "pname": "",
    "ra": 19.10554,
    "dec": -52.34091,
    "dist": 56.7215,
    "vmag": 5.17
  },
  {
    "name": 177196,
    "hr": 7215,
    "bf": "16    Lyr",
    "pname": "",
    "ra": 19.023991,
    "dec": 46.934812,
    "dist": 37.4392,
    "vmag": 5
  },
  {
    "name": 177241,
    "hr": 7217,
    "bf": "39Omi Sgr",
    "pname": "",
    "ra": 19.07805,
    "dec": -21.741496,
    "dist": 43.554,
    "vmag": 3.76
  },
  {
    "name": 177249,
    "hr": 7218,
    "bf": "49    Dra",
    "pname": "",
    "ra": 19.012072,
    "dec": 55.658301,
    "dist": 150.8296,
    "vmag": 5.51
  },
  {
    "name": 177463,
    "hr": 7225,
    "bf": "15    Aql",
    "pname": "",
    "ra": 19.082687,
    "dec": -4.03142,
    "dist": 88.7311,
    "vmag": 5.4
  },
  {
    "name": 177474,
    "hr": 7226,
    "bf": "Gam CrA",
    "pname": "",
    "ra": 19.106971,
    "dec": -37.063437,
    "dist": 17.304,
    "vmag": 4.23
  },
  {
    "name": 177475,
    "hr": 7227,
    "bf": "Gam CrA",
    "pname": "",
    "ra": 19.106847,
    "dec": -37.06474,
    "dist": 17.8923,
    "vmag": 5
  },
  {
    "name": 177482,
    "hr": 7228,
    "bf": "Sig Oct",
    "pname": "",
    "ra": 21.146119,
    "dec": -88.956499,
    "dist": 86.1326,
    "vmag": 5.45
  },
  {
    "name": 177716,
    "hr": 7234,
    "bf": "40Tau Sgr",
    "pname": "",
    "ra": 19.11567,
    "dec": -27.670423,
    "dist": 37.2856,
    "vmag": 3.32
  },
  {
    "name": 177724,
    "hr": 7235,
    "bf": "17Zet Aql",
    "pname": "ζ-Aql",
    "ra": 19.090169,
    "dec": 13.863478,
    "dist": 25.4582,
    "vmag": 2.99
  },
  {
    "name": 177756,
    "hr": 7236,
    "bf": "16Lam Aql",
    "pname": "λ-Aql",
    "ra": 19.10415,
    "dec": -4.882554,
    "dist": 37.9219,
    "vmag": 3.43
  },
  {
    "name": 177873,
    "hr": 7242,
    "bf": "Del CrA",
    "pname": "",
    "ra": 19.139156,
    "dec": -40.496703,
    "dist": 54.7345,
    "vmag": 4.57
  },
  {
    "name": 178125,
    "hr": 7248,
    "bf": "18    Aql",
    "pname": "",
    "ra": 19.116279,
    "dec": 11.071228,
    "dist": 214.1328,
    "vmag": 5.07
  },
  {
    "name": 178207,
    "hr": 7251,
    "bf": "51    Dra",
    "pname": "",
    "ra": 19.081991,
    "dec": 53.396654,
    "dist": 111.1111,
    "vmag": 5.4
  },
  {
    "name": 178253,
    "hr": 7254,
    "bf": "Alp CrA",
    "pname": "",
    "ra": 19.157869,
    "dec": -37.904474,
    "dist": 38.432,
    "vmag": 4.11
  },
  {
    "name": 178345,
    "hr": 7259,
    "bf": "Bet CrA",
    "pname": "",
    "ra": 19.167154,
    "dec": -39.340796,
    "dist": 145.3488,
    "vmag": 4.1
  },
  {
    "name": 178449,
    "hr": 7261,
    "bf": "17    Lyr",
    "pname": "",
    "ra": 19.123769,
    "dec": 32.501738,
    "dist": 41.58,
    "vmag": 5.2
  },
  {
    "name": 178475,
    "hr": 7262,
    "bf": "18Iot Lyr",
    "pname": "",
    "ra": 19.121703,
    "dec": 36.100157,
    "dist": 274.7253,
    "vmag": 5.25
  },
  {
    "name": 178524,
    "hr": 7264,
    "bf": "41Pi  Sgr",
    "pname": "Albaldah",
    "ra": 19.162731,
    "dec": -21.023615,
    "dist": 156.25,
    "vmag": 2.88
  },
  {
    "name": 178596,
    "hr": 7266,
    "bf": "19    Aql",
    "pname": "",
    "ra": 19.149976,
    "dec": 6.073207,
    "dist": 45.7875,
    "vmag": 5.23
  },
  {
    "name": 179009,
    "hr": 7274,
    "bf": "Tau Pav",
    "pname": "",
    "ra": 19.274612,
    "dec": -69.190825,
    "dist": 194.5525,
    "vmag": 6.25
  },
  {
    "name": 179406,
    "hr": 7279,
    "bf": "20    Aql",
    "pname": "",
    "ra": 19.211309,
    "dec": -7.939518,
    "dist": 300.3003,
    "vmag": 5.35
  },
  {
    "name": 179527,
    "hr": 7283,
    "bf": "19    Lyr",
    "pname": "",
    "ra": 19.196114,
    "dec": 31.283456,
    "dist": 273.224,
    "vmag": 5.93
  },
  {
    "name": 179761,
    "hr": 7287,
    "bf": "21    Aql",
    "pname": "",
    "ra": 19.228529,
    "dec": 2.293707,
    "dist": 217.8649,
    "vmag": 5.14
  },
  {
    "name": 179933,
    "hr": 7290,
    "bf": "55    Dra",
    "pname": "",
    "ra": 19.162723,
    "dec": 65.978513,
    "dist": 93.4579,
    "vmag": 6.26
  },
  {
    "name": 179950,
    "hr": 7292,
    "bf": "42Psi Sgr",
    "pname": "",
    "ra": 19.259007,
    "dec": -25.256682,
    "dist": 91.4913,
    "vmag": 4.86
  },
  {
    "name": 180006,
    "hr": 7295,
    "bf": "53    Dra",
    "pname": "",
    "ra": 19.194597,
    "dec": 56.859213,
    "dist": 105.4852,
    "vmag": 5.13
  },
  {
    "name": 180163,
    "hr": 7298,
    "bf": "20Eta Lyr",
    "pname": "",
    "ra": 19.229302,
    "dec": 39.145968,
    "dist": 425.5319,
    "vmag": 4.43
  },
  {
    "name": 180317,
    "hr": 7301,
    "bf": "1    Sge",
    "pname": "",
    "ra": 19.254822,
    "dec": 21.232118,
    "dist": 91.8274,
    "vmag": 5.65
  },
  {
    "name": 180482,
    "hr": 7303,
    "bf": "22    Aql",
    "pname": "",
    "ra": 19.275287,
    "dec": 4.834795,
    "dist": 164.4737,
    "vmag": 5.59
  },
  {
    "name": 180540,
    "hr": 7304,
    "bf": "43    Sgr",
    "pname": "",
    "ra": 19.293911,
    "dec": -18.952908,
    "dist": 147.7105,
    "vmag": 4.88
  },
  {
    "name": 180554,
    "hr": 7306,
    "bf": "1    Vul",
    "pname": "",
    "ra": 19.270289,
    "dec": 21.390428,
    "dist": 248.7562,
    "vmag": 4.76
  },
  {
    "name": 180610,
    "hr": 7309,
    "bf": "54    Dra",
    "pname": "",
    "ra": 19.231987,
    "dec": 57.705102,
    "dist": 50.6586,
    "vmag": 5
  },
  {
    "name": 180711,
    "hr": 7310,
    "bf": "57Del Dra",
    "pname": "",
    "ra": 19.209225,
    "dec": 67.661541,
    "dist": 29.8686,
    "vmag": 3.07
  },
  {
    "name": 180777,
    "hr": 7312,
    "bf": "59    Dra",
    "pname": "",
    "ra": 19.152716,
    "dec": 76.560502,
    "dist": 27.3,
    "vmag": 5.11
  },
  {
    "name": 180809,
    "hr": 7314,
    "bf": "21The Lyr",
    "pname": "",
    "ra": 19.272804,
    "dec": 38.133731,
    "dist": 255.102,
    "vmag": 4.35
  },
  {
    "name": 180868,
    "hr": 7315,
    "bf": "25Ome1Aql",
    "pname": "",
    "ra": 19.296944,
    "dec": 11.595422,
    "dist": 127.2265,
    "vmag": 5.28
  },
  {
    "name": 180968,
    "hr": 7318,
    "bf": "2    Vul",
    "pname": "",
    "ra": 19.295454,
    "dec": 23.02554,
    "dist": 373.1343,
    "vmag": 5.46
  },
  {
    "name": 180972,
    "hr": 7319,
    "bf": "23    Aql",
    "pname": "",
    "ra": 19.309026,
    "dec": 1.085129,
    "dist": 113.7656,
    "vmag": 5.1
  },
  {
    "name": 181053,
    "hr": 7321,
    "bf": "24    Aql",
    "pname": "",
    "ra": 19.314151,
    "dec": 0.339024,
    "dist": 127.0648,
    "vmag": 6.4
  },
  {
    "name": 181276,
    "hr": 7328,
    "bf": "1Kap Cyg",
    "pname": "",
    "ra": 19.28504,
    "dec": 53.368459,
    "dist": 38.0662,
    "vmag": 3.8
  },
  {
    "name": 181296,
    "hr": 7329,
    "bf": "Eta Tel",
    "pname": "",
    "ra": 19.380888,
    "dec": -54.423931,
    "dist": 48.216,
    "vmag": 5.03
  },
  {
    "name": 181333,
    "hr": 7331,
    "bf": "28    Aql",
    "pname": "",
    "ra": 19.327597,
    "dec": 12.37468,
    "dist": 103.4126,
    "vmag": 5.53
  },
  {
    "name": 181383,
    "hr": 7332,
    "bf": "29Ome2Aql",
    "pname": "",
    "ra": 19.331407,
    "dec": 11.534965,
    "dist": 81.4996,
    "vmag": 6.03
  },
  {
    "name": 181391,
    "hr": 7333,
    "bf": "26    Aql",
    "pname": "",
    "ra": 19.342473,
    "dec": -5.415766,
    "dist": 47.2813,
    "vmag": 4.98
  },
  {
    "name": 181440,
    "hr": 7336,
    "bf": "27    Aql",
    "pname": "",
    "ra": 19.343246,
    "dec": -0.892161,
    "dist": 134.2282,
    "vmag": 5.46
  },
  {
    "name": 181454,
    "hr": 7337,
    "bf": "Bet1Sgr",
    "pname": "",
    "ra": 19.377303,
    "dec": -44.458965,
    "dist": 96.1538,
    "vmag": 3.96
  },
  {
    "name": 181577,
    "hr": 7340,
    "bf": "44Rho1Sgr",
    "pname": "",
    "ra": 19.361211,
    "dec": -17.847197,
    "dist": 38.9257,
    "vmag": 3.92
  },
  {
    "name": 181615,
    "hr": 7342,
    "bf": "46Ups Sgr",
    "pname": "",
    "ra": 19.362117,
    "dec": -15.955018,
    "dist": 546.4481,
    "vmag": 4.52
  },
  {
    "name": 181623,
    "hr": 7343,
    "bf": "Bet2Sgr",
    "pname": "",
    "ra": 19.386976,
    "dec": -44.799778,
    "dist": 41.1353,
    "vmag": 4.27
  },
  {
    "name": 181645,
    "hr": 7344,
    "bf": "45Rho2Sgr",
    "pname": "",
    "ra": 19.364137,
    "dec": -18.308388,
    "dist": 101.833,
    "vmag": 5.84
  },
  {
    "name": 181869,
    "hr": 7348,
    "bf": "Alp Sgr",
    "pname": "",
    "ra": 19.398103,
    "dec": -40.61594,
    "dist": 55.7414,
    "vmag": 3.96
  },
  {
    "name": 181984,
    "hr": 7352,
    "bf": "60Tau Dra",
    "pname": "",
    "ra": 19.259229,
    "dec": 73.355468,
    "dist": 44.8833,
    "vmag": 4.45
  },
  {
    "name": 182255,
    "hr": 7358,
    "bf": "3    Vul",
    "pname": "",
    "ra": 19.380801,
    "dec": 26.262403,
    "dist": 120.4819,
    "vmag": 5.22
  },
  {
    "name": 182369,
    "hr": 7362,
    "bf": "47Chi1Sgr",
    "pname": "",
    "ra": 19.421247,
    "dec": -24.508575,
    "dist": 77.2201,
    "vmag": 5.02
  },
  {
    "name": 182416,
    "hr": 7363,
    "bf": "49Chi3Sgr",
    "pname": "",
    "ra": 19.424906,
    "dec": -23.962457,
    "dist": 153.1394,
    "vmag": 5.45
  },
  {
    "name": 182490,
    "hr": 7369,
    "bf": "2    Sge",
    "pname": "",
    "ra": 19.406131,
    "dec": 16.937722,
    "dist": 112.1076,
    "vmag": 6.27
  },
  {
    "name": 182564,
    "hr": 7371,
    "bf": "58Pi  Dra",
    "pname": "",
    "ra": 19.344467,
    "dec": 65.714531,
    "dist": 70.1754,
    "vmag": 4.6
  },
  {
    "name": 182568,
    "hr": 7372,
    "bf": "2    Cyg",
    "pname": "",
    "ra": 19.402105,
    "dec": 29.621338,
    "dist": 258.3979,
    "vmag": 4.99
  },
  {
    "name": 182572,
    "hr": 7373,
    "bf": "31    Aql",
    "pname": "",
    "ra": 19.416164,
    "dec": 11.944415,
    "dist": 15.1768,
    "vmag": 5.17
  },
  {
    "name": 182629,
    "hr": 7375,
    "bf": "50    Sgr",
    "pname": "",
    "ra": 19.438654,
    "dec": -21.776693,
    "dist": 132.2751,
    "vmag": 5.57
  },
  {
    "name": 182640,
    "hr": 7377,
    "bf": "30Del Aql",
    "pname": "δ-Aql",
    "ra": 19.424972,
    "dec": 3.114775,
    "dist": 15.5255,
    "vmag": 3.36
  },
  {
    "name": 182762,
    "hr": 7385,
    "bf": "4    Vul",
    "pname": "",
    "ra": 19.424611,
    "dec": 19.798365,
    "dist": 83.2639,
    "vmag": 5.14
  },
  {
    "name": 182835,
    "hr": 7387,
    "bf": "32Nu  Aql",
    "pname": "",
    "ra": 19.441969,
    "dec": 0.33857,
    "dist": 869.5652,
    "vmag": 4.64
  },
  {
    "name": 182919,
    "hr": 7390,
    "bf": "5    Vul",
    "pname": "",
    "ra": 19.437013,
    "dec": 20.097733,
    "dist": 72.8863,
    "vmag": 5.6
  },
  {
    "name": 183028,
    "hr": 7393,
    "bf": "Mu  Tel",
    "pname": "",
    "ra": 19.50961,
    "dec": -55.110053,
    "dist": 34.3761,
    "vmag": 6.29
  },
  {
    "name": 183030,
    "hr": 7394,
    "bf": "Lam UMi",
    "pname": "",
    "ra": 17.282569,
    "dec": 89.037708,
    "dist": 271.7391,
    "vmag": 6.31
  },
  {
    "name": 183056,
    "hr": 7395,
    "bf": "4    Cyg",
    "pname": "",
    "ra": 19.435868,
    "dec": 36.317896,
    "dist": 216.9197,
    "vmag": 5.17
  },
  {
    "name": 183324,
    "hr": 7400,
    "bf": "35    Aql",
    "pname": "",
    "ra": 19.483608,
    "dec": 1.950448,
    "dist": 61.1995,
    "vmag": 5.79
  },
  {
    "name": 183439,
    "hr": 7405,
    "bf": "6Alp Vul",
    "pname": "",
    "ra": 19.478427,
    "dec": 24.664905,
    "dist": 91.1577,
    "vmag": 4.44
  },
  {
    "name": 183491,
    "hr": 7406,
    "bf": "8    Vul",
    "pname": "",
    "ra": 19.482523,
    "dec": 24.768723,
    "dist": 157.7287,
    "vmag": 5.82
  },
  {
    "name": 183534,
    "hr": 7408,
    "bf": "7Iot1Cyg",
    "pname": "",
    "ra": 19.457212,
    "dec": 52.320436,
    "dist": 107.5269,
    "vmag": 5.73
  },
  {
    "name": 183537,
    "hr": 7409,
    "bf": "7    Vul",
    "pname": "",
    "ra": 19.489138,
    "dec": 20.279737,
    "dist": 355.8719,
    "vmag": 6.34
  },
  {
    "name": 183630,
    "hr": 7414,
    "bf": "36    Aql",
    "pname": "",
    "ra": 19.511066,
    "dec": -2.788887,
    "dist": 162.0746,
    "vmag": 5.03
  },
  {
    "name": 183912,
    "hr": 7417,
    "bf": "6Bet1Cyg",
    "pname": "Albireo",
    "ra": 19.512023,
    "dec": 27.959681,
    "dist": 133.1558,
    "vmag": 3.05
  },
  {
    "name": 183914,
    "hr": 7418,
    "bf": "6Bet2Cyg",
    "pname": "",
    "ra": 19.51261,
    "dec": 27.965276,
    "dist": 122.549,
    "vmag": 5.12
  },
  {
    "name": 184006,
    "hr": 7420,
    "bf": "10Iot2Cyg",
    "pname": "",
    "ra": 19.495098,
    "dec": 51.729779,
    "dist": 37.2024,
    "vmag": 3.76
  },
  {
    "name": 184127,
    "hr": 7424,
    "bf": "Iot Tel",
    "pname": "",
    "ra": 19.586942,
    "dec": -48.099202,
    "dist": 113.6364,
    "vmag": 4.88
  },
  {
    "name": 184171,
    "hr": 7426,
    "bf": "8    Cyg",
    "pname": "",
    "ra": 19.529534,
    "dec": 34.452968,
    "dist": 263.8522,
    "vmag": 4.74
  },
  {
    "name": 184406,
    "hr": 7429,
    "bf": "38Mu  Aql",
    "pname": "",
    "ra": 19.568153,
    "dec": 7.378941,
    "dist": 32.9924,
    "vmag": 4.45
  },
  {
    "name": 184492,
    "hr": 7430,
    "bf": "37    Aql",
    "pname": "",
    "ra": 19.585349,
    "dec": -10.560444,
    "dist": 140.2525,
    "vmag": 5.12
  },
  {
    "name": 184552,
    "hr": 7431,
    "bf": "51    Sgr",
    "pname": "",
    "ra": 19.600459,
    "dec": -24.719081,
    "dist": 90.2527,
    "vmag": 5.64
  },
  {
    "name": 184606,
    "hr": 7437,
    "bf": "9    Vul",
    "pname": "",
    "ra": 19.57636,
    "dec": 19.773403,
    "dist": 169.4915,
    "vmag": 5
  },
  {
    "name": 184707,
    "hr": 7440,
    "bf": "52    Sgr",
    "pname": "",
    "ra": 19.611786,
    "dec": -24.883623,
    "dist": 58.1395,
    "vmag": 4.59
  },
  {
    "name": 184759,
    "hr": 7441,
    "bf": "9    Cyg",
    "pname": "",
    "ra": 19.580813,
    "dec": 29.462954,
    "dist": 171.2329,
    "vmag": 5.39
  },
  {
    "name": 184915,
    "hr": 7446,
    "bf": "39Kap Aql",
    "pname": "",
    "ra": 19.614847,
    "dec": -7.027477,
    "dist": 515.4639,
    "vmag": 4.93
  },
  {
    "name": 184930,
    "hr": 7447,
    "bf": "41Iot Aql",
    "pname": "",
    "ra": 19.612022,
    "dec": -1.286601,
    "dist": 119.9041,
    "vmag": 4.36
  },
  {
    "name": 185037,
    "hr": 7457,
    "bf": "11    Cyg",
    "pname": "",
    "ra": 19.596751,
    "dec": 36.944539,
    "dist": 184.8429,
    "vmag": 6.03
  },
  {
    "name": 185124,
    "hr": 7460,
    "bf": "42    Aql",
    "pname": "",
    "ra": 19.62981,
    "dec": -4.64764,
    "dist": 32.1543,
    "vmag": 5.45
  },
  {
    "name": 185144,
    "hr": 7462,
    "bf": "61Sig Dra",
    "pname": "",
    "ra": 19.539149,
    "dec": 69.661175,
    "dist": 5.7547,
    "vmag": 4.67
  },
  {
    "name": 185194,
    "hr": 7463,
    "bf": "4Eps Sge",
    "pname": "",
    "ra": 19.621498,
    "dec": 16.462802,
    "dist": 147.2754,
    "vmag": 5.67
  },
  {
    "name": 185395,
    "hr": 7469,
    "bf": "13The Cyg",
    "pname": "",
    "ra": 19.607372,
    "dec": 50.221103,
    "dist": 18.3352,
    "vmag": 4.49
  },
  {
    "name": 185404,
    "hr": 7470,
    "bf": "53    Sgr",
    "pname": "",
    "ra": 19.663739,
    "dec": -23.4277,
    "dist": 98.7167,
    "vmag": 6.33
  },
  {
    "name": 185507,
    "hr": 7474,
    "bf": "44Sig Aql",
    "pname": "",
    "ra": 19.653234,
    "dec": 5.397773,
    "dist": 239.2344,
    "vmag": 5.18
  },
  {
    "name": 185644,
    "hr": 7476,
    "bf": "54    Sgr",
    "pname": "",
    "ra": 19.678717,
    "dec": -16.293268,
    "dist": 73.7463,
    "vmag": 5.3
  },
  {
    "name": 185734,
    "hr": 7478,
    "bf": "12Phi Cyg",
    "pname": "",
    "ra": 19.656279,
    "dec": 30.153321,
    "dist": 81.6327,
    "vmag": 4.68
  },
  {
    "name": 185758,
    "hr": 7479,
    "bf": "5Alp Sge",
    "pname": "",
    "ra": 19.668275,
    "dec": 18.01389,
    "dist": 130.3781,
    "vmag": 4.39
  },
  {
    "name": 185762,
    "hr": 7480,
    "bf": "45    Aql",
    "pname": "",
    "ra": 19.6787,
    "dec": -0.621233,
    "dist": 107.9914,
    "vmag": 5.64
  },
  {
    "name": 185872,
    "hr": 7483,
    "bf": "14    Cyg",
    "pname": "",
    "ra": 19.657356,
    "dec": 42.818278,
    "dist": 200,
    "vmag": 5.41
  },
  {
    "name": 185958,
    "hr": 7488,
    "bf": "6Bet Sge",
    "pname": "",
    "ra": 19.68415,
    "dec": 17.476041,
    "dist": 134.7709,
    "vmag": 4.39
  },
  {
    "name": 186005,
    "hr": 7489,
    "bf": "55    Sgr",
    "pname": "",
    "ra": 19.708648,
    "dec": -16.123996,
    "dist": 54.3183,
    "vmag": 5.06
  },
  {
    "name": 186122,
    "hr": 7493,
    "bf": "46    Aql",
    "pname": "",
    "ra": 19.703559,
    "dec": 12.193261,
    "dist": 215.5172,
    "vmag": 6.33
  },
  {
    "name": 186203,
    "hr": 7497,
    "bf": "47Chi Aql",
    "pname": "",
    "ra": 19.709447,
    "dec": 11.826583,
    "dist": 261.7801,
    "vmag": 5.28
  },
  {
    "name": 186408,
    "hr": 7503,
    "bf": "16    Cyg",
    "pname": "",
    "ra": 19.696945,
    "dec": 50.52506,
    "dist": 21.0793,
    "vmag": 5.99
  },
  {
    "name": 186486,
    "hr": 7506,
    "bf": "10    Vul",
    "pname": "",
    "ra": 19.72859,
    "dec": 25.771929,
    "dist": 101.7294,
    "vmag": 5.5
  },
  {
    "name": 186543,
    "hr": 7510,
    "bf": "Nu  Tel",
    "pname": "",
    "ra": 19.800321,
    "dec": -56.362611,
    "dist": 49.554,
    "vmag": 5.33
  },
  {
    "name": 186547,
    "hr": 7511,
    "bf": "48Psi Aql",
    "pname": "",
    "ra": 19.742831,
    "dec": 13.302783,
    "dist": 310.559,
    "vmag": 6.25
  },
  {
    "name": 186648,
    "hr": 7515,
    "bf": "56    Sgr",
    "pname": "",
    "ra": 19.772707,
    "dec": -19.761113,
    "dist": 63.6537,
    "vmag": 4.87
  },
  {
    "name": 186675,
    "hr": 7517,
    "bf": "15    Cyg",
    "pname": "",
    "ra": 19.737943,
    "dec": 37.354355,
    "dist": 88.6525,
    "vmag": 4.89
  },
  {
    "name": 186689,
    "hr": 7519,
    "bf": "49Ups Aql",
    "pname": "",
    "ra": 19.761096,
    "dec": 7.613158,
    "dist": 53.6193,
    "vmag": 5.89
  },
  {
    "name": 186791,
    "hr": 7525,
    "bf": "50Gam Aql",
    "pname": "Tarazed",
    "ra": 19.770994,
    "dec": 10.613261,
    "dist": 121.0654,
    "vmag": 2.72
  },
  {
    "name": 186882,
    "hr": 7528,
    "bf": "18Del Cyg",
    "pname": "",
    "ra": 19.749574,
    "dec": 45.13081,
    "dist": 50.5817,
    "vmag": 2.86
  },
  {
    "name": 187013,
    "hr": 7534,
    "bf": "17    Cyg",
    "pname": "",
    "ra": 19.773777,
    "dec": 33.727598,
    "dist": 21.2314,
    "vmag": 5
  },
  {
    "name": 187076,
    "hr": 7536,
    "bf": "7Del Sge",
    "pname": "",
    "ra": 19.789795,
    "dec": 18.534286,
    "dist": 182.1494,
    "vmag": 3.68
  },
  {
    "name": 187259,
    "hr": 7544,
    "bf": "52Pi  Aql",
    "pname": "",
    "ra": 19.811683,
    "dec": 11.815896,
    "dist": 157.7287,
    "vmag": 5.75
  },
  {
    "name": 187362,
    "hr": 7546,
    "bf": "8Zet Sge",
    "pname": "",
    "ra": 19.816294,
    "dec": 19.142042,
    "dist": 78.1861,
    "vmag": 5.01
  },
  {
    "name": 187532,
    "hr": 7553,
    "bf": "51    Aql",
    "pname": "",
    "ra": 19.846329,
    "dec": -10.763512,
    "dist": 27.8707,
    "vmag": 5.38
  },
  {
    "name": 187642,
    "hr": 7557,
    "bf": "53Alp Aql",
    "pname": "Altair",
    "ra": 19.846388,
    "dec": 8.868322,
    "dist": 5.1295,
    "vmag": 0.76
  },
  {
    "name": 187691,
    "hr": 7560,
    "bf": "54Omi Aql",
    "pname": "",
    "ra": 19.850456,
    "dec": 10.415727,
    "dist": 19.1902,
    "vmag": 5.12
  },
  {
    "name": 187739,
    "hr": 7561,
    "bf": "57    Sgr",
    "pname": "",
    "ra": 19.870001,
    "dec": -19.044991,
    "dist": 115.8749,
    "vmag": 5.88
  },
  {
    "name": 187796,
    "hr": 7564,
    "bf": "Chi Cyg",
    "pname": "",
    "ra": 19.842757,
    "dec": 32.914058,
    "dist": 180.8318,
    "vmag": 7.91
  },
  {
    "name": 187811,
    "hr": 7565,
    "bf": "12    Vul",
    "pname": "",
    "ra": 19.851141,
    "dec": 22.610046,
    "dist": 193.0502,
    "vmag": 4.9
  },
  {
    "name": 187849,
    "hr": 7566,
    "bf": "19    Cyg",
    "pname": "",
    "ra": 19.842776,
    "dec": 38.722419,
    "dist": 212.3142,
    "vmag": 5.18
  },
  {
    "name": 187929,
    "hr": 7570,
    "bf": "55Eta Aql",
    "pname": "η-Aql",
    "ra": 19.874547,
    "dec": 1.005661,
    "dist": 423.7288,
    "vmag": 3.87
  },
  {
    "name": 188001,
    "hr": 7574,
    "bf": "9    Sge",
    "pname": "",
    "ra": 19.872712,
    "dec": 18.671875,
    "dist": 100000,
    "vmag": 6.24
  },
  {
    "name": 188056,
    "hr": 7576,
    "bf": "20    Cyg",
    "pname": "",
    "ra": 19.843813,
    "dec": 52.988001,
    "dist": 62.0732,
    "vmag": 5.03
  },
  {
    "name": 188114,
    "hr": 7581,
    "bf": "Iot Sgr",
    "pname": "",
    "ra": 19.921026,
    "dec": -41.868288,
    "dist": 55.7414,
    "vmag": 4.12
  },
  {
    "name": 188119,
    "hr": 7582,
    "bf": "63Eps Dra",
    "pname": "",
    "ra": 19.80285,
    "dec": 70.26793,
    "dist": 45.3721,
    "vmag": 3.84
  },
  {
    "name": 188154,
    "hr": 7584,
    "bf": "56    Aql",
    "pname": "",
    "ra": 19.902299,
    "dec": -8.574211,
    "dist": 193.7984,
    "vmag": 5.76
  },
  {
    "name": 188228,
    "hr": 7590,
    "bf": "Eps Pav",
    "pname": "",
    "ra": 20.009845,
    "dec": -72.910504,
    "dist": 32.2165,
    "vmag": 3.97
  },
  {
    "name": 188260,
    "hr": 7592,
    "bf": "13    Vul",
    "pname": "",
    "ra": 19.891026,
    "dec": 24.079614,
    "dist": 102.5641,
    "vmag": 4.57
  },
  {
    "name": 188293,
    "hr": 7593,
    "bf": "57    Aql",
    "pname": "",
    "ra": 19.910459,
    "dec": -8.227289,
    "dist": 147.929,
    "vmag": 5.7
  },
  {
    "name": 188294,
    "hr": 7594,
    "bf": "57    Aql",
    "pname": "",
    "ra": 19.910573,
    "dec": -8.237048,
    "dist": 155.7632,
    "vmag": 6.49
  },
  {
    "name": 188310,
    "hr": 7595,
    "bf": "59Xi  Aql",
    "pname": "",
    "ra": 19.904134,
    "dec": 8.461453,
    "dist": 56.2746,
    "vmag": 4.71
  },
  {
    "name": 188350,
    "hr": 7596,
    "bf": "58    Aql",
    "pname": "",
    "ra": 19.912444,
    "dec": 0.273627,
    "dist": 113.8952,
    "vmag": 5.6
  },
  {
    "name": 188376,
    "hr": 7597,
    "bf": "58Ome Sgr",
    "pname": "",
    "ra": 19.930651,
    "dec": -26.299506,
    "dist": 25.9875,
    "vmag": 4.7
  },
  {
    "name": 188512,
    "hr": 7602,
    "bf": "60Bet Aql",
    "pname": "Alshain",
    "ra": 19.921887,
    "dec": 6.406763,
    "dist": 13.6986,
    "vmag": 3.71
  },
  {
    "name": 188584,
    "hr": 7603,
    "bf": "Mu 1Pav",
    "pname": "",
    "ra": 20.006418,
    "dec": -66.94936,
    "dist": 73.2601,
    "vmag": 5.75
  },
  {
    "name": 188603,
    "hr": 7604,
    "bf": "59    Sgr",
    "pname": "",
    "ra": 19.94912,
    "dec": -27.169899,
    "dist": 255.102,
    "vmag": 4.54
  },
  {
    "name": 188665,
    "hr": 7608,
    "bf": "23    Cyg",
    "pname": "",
    "ra": 19.88816,
    "dec": 57.523482,
    "dist": 194.1748,
    "vmag": 5.14
  },
  {
    "name": 188727,
    "hr": 7609,
    "bf": "10    Sge",
    "pname": "",
    "ra": 19.933684,
    "dec": 16.634799,
    "dist": 100000,
    "vmag": 5.71
  },
  {
    "name": 188728,
    "hr": 7610,
    "bf": "61Phi Aql",
    "pname": "",
    "ra": 19.937292,
    "dec": 11.423721,
    "dist": 67.2948,
    "vmag": 5.28
  },
  {
    "name": 188887,
    "hr": 7612,
    "bf": "Mu 2Pav",
    "pname": "",
    "ra": 20.03123,
    "dec": -66.943966,
    "dist": 72.4638,
    "vmag": 5.32
  },
  {
    "name": 188892,
    "hr": 7613,
    "bf": "22    Cyg",
    "pname": "",
    "ra": 19.931045,
    "dec": 38.486705,
    "dist": 442.4779,
    "vmag": 4.95
  },
  {
    "name": 188899,
    "hr": 7614,
    "bf": "61    Sgr",
    "pname": "",
    "ra": 19.965842,
    "dec": -15.49149,
    "dist": 81.4332,
    "vmag": 5.01
  },
  {
    "name": 188947,
    "hr": 7615,
    "bf": "21Eta Cyg",
    "pname": "",
    "ra": 19.938438,
    "dec": 35.083424,
    "dist": 41.3736,
    "vmag": 3.89
  },
  {
    "name": 189005,
    "hr": 7618,
    "bf": "60    Sgr",
    "pname": "",
    "ra": 19.982555,
    "dec": -26.195767,
    "dist": 96.0615,
    "vmag": 4.84
  },
  {
    "name": 189037,
    "hr": 7619,
    "bf": "24Psi Cyg",
    "pname": "",
    "ra": 19.927167,
    "dec": 52.438948,
    "dist": 86.2813,
    "vmag": 4.91
  },
  {
    "name": 189090,
    "hr": 7622,
    "bf": "11    Sge",
    "pname": "",
    "ra": 19.962624,
    "dec": 16.789163,
    "dist": 139.6648,
    "vmag": 5.54
  },
  {
    "name": 189103,
    "hr": 7623,
    "bf": "The1Sgr",
    "pname": "",
    "ra": 19.995605,
    "dec": -35.276305,
    "dist": 158.9825,
    "vmag": 4.37
  },
  {
    "name": 189118,
    "hr": 7624,
    "bf": "The2Sgr",
    "pname": "",
    "ra": 19.997595,
    "dec": -34.697799,
    "dist": 48.4966,
    "vmag": 5.3
  },
  {
    "name": 189319,
    "hr": 7635,
    "bf": "12Gam Sge",
    "pname": "",
    "ra": 19.979285,
    "dec": 19.492148,
    "dist": 79.2393,
    "vmag": 3.51
  },
  {
    "name": 189410,
    "hr": 7641,
    "bf": "14    Vul",
    "pname": "",
    "ra": 19.986261,
    "dec": 23.101281,
    "dist": 49.1159,
    "vmag": 5.68
  },
  {
    "name": 189577,
    "hr": 7645,
    "bf": "13    Sge",
    "pname": "",
    "ra": 20.000919,
    "dec": 17.516511,
    "dist": 312.5,
    "vmag": 5.33
  },
  {
    "name": 189687,
    "hr": 7647,
    "bf": "25    Cyg",
    "pname": "",
    "ra": 19.998665,
    "dec": 37.042885,
    "dist": 404.8583,
    "vmag": 5.15
  },
  {
    "name": 189741,
    "hr": 7649,
    "bf": "63    Sgr",
    "pname": "",
    "ra": 20.032944,
    "dec": -13.637217,
    "dist": 90.9918,
    "vmag": 5.69
  },
  {
    "name": 189763,
    "hr": 7650,
    "bf": "62    Sgr",
    "pname": "",
    "ra": 20.044299,
    "dec": -27.709845,
    "dist": 137.5516,
    "vmag": 4.43
  },
  {
    "name": 189849,
    "hr": 7653,
    "bf": "15    Vul",
    "pname": "",
    "ra": 20.018346,
    "dec": 27.753573,
    "dist": 72.4638,
    "vmag": 4.66
  },
  {
    "name": 190004,
    "hr": 7657,
    "bf": "16    Vul",
    "pname": "",
    "ra": 20.03373,
    "dec": 24.938043,
    "dist": 67.981,
    "vmag": 5.23
  },
  {
    "name": 190147,
    "hr": 7660,
    "bf": "26    Cyg",
    "pname": "",
    "ra": 20.022655,
    "dec": 50.104695,
    "dist": 133.1558,
    "vmag": 5.06
  },
  {
    "name": 190248,
    "hr": 7665,
    "bf": "Del Pav",
    "pname": "",
    "ra": 20.145157,
    "dec": -66.182068,
    "dist": 6.1084,
    "vmag": 3.55
  },
  {
    "name": 190299,
    "hr": 7667,
    "bf": "62    Aql",
    "pname": "",
    "ra": 20.073098,
    "dec": -0.709309,
    "dist": 127.8772,
    "vmag": 5.67
  },
  {
    "name": 190327,
    "hr": 7669,
    "bf": "63Tau Aql",
    "pname": "",
    "ra": 20.068976,
    "dec": 7.277966,
    "dist": 141.6431,
    "vmag": 5.51
  },
  {
    "name": 190406,
    "hr": 7672,
    "bf": "15    Sge",
    "pname": "",
    "ra": 20.068399,
    "dec": 17.070173,
    "dist": 17.7683,
    "vmag": 5.8
  },
  {
    "name": 190421,
    "hr": 7673,
    "bf": "Xi  Tel",
    "pname": "",
    "ra": 20.1231,
    "dec": -52.880793,
    "dist": 331.1258,
    "vmag": 4.93
  },
  {
    "name": 190454,
    "hr": 7675,
    "bf": "65    Sgr",
    "pname": "",
    "ra": 20.090649,
    "dec": -12.665163,
    "dist": 124.3781,
    "vmag": 6.53
  },
  {
    "name": 190544,
    "hr": 7676,
    "bf": "64    Dra",
    "pname": "",
    "ra": 20.024594,
    "dec": 64.820974,
    "dist": 180.1802,
    "vmag": 5.22
  },
  {
    "name": 190608,
    "hr": 7679,
    "bf": "16Eta Sge",
    "pname": "",
    "ra": 20.08597,
    "dec": 19.991071,
    "dist": 49.1642,
    "vmag": 5.09
  },
  {
    "name": 190713,
    "hr": 7682,
    "bf": "65    Dra",
    "pname": "",
    "ra": 20.03894,
    "dec": 64.634419,
    "dist": 110.4972,
    "vmag": 6.27
  },
  {
    "name": 190940,
    "hr": 7685,
    "bf": "67Rho Dra",
    "pname": "",
    "ra": 20.04696,
    "dec": 67.873565,
    "dist": 131.406,
    "vmag": 4.51
  },
  {
    "name": 190960,
    "hr": 7686,
    "bf": "69    Dra",
    "pname": "",
    "ra": 19.993522,
    "dec": 76.481392,
    "dist": 161.2903,
    "vmag": 6.2
  },
  {
    "name": 190993,
    "hr": 7688,
    "bf": "17    Vul",
    "pname": "",
    "ra": 20.114835,
    "dec": 23.614425,
    "dist": 154.5595,
    "vmag": 5.08
  },
  {
    "name": 191026,
    "hr": 7689,
    "bf": "27    Cyg",
    "pname": "",
    "ra": 20.106055,
    "dec": 35.972468,
    "dist": 23.9464,
    "vmag": 5.38
  },
  {
    "name": 191067,
    "hr": 7690,
    "bf": "64    Aql",
    "pname": "",
    "ra": 20.13384,
    "dec": -0.678185,
    "dist": 46.9484,
    "vmag": 5.97
  },
  {
    "name": 191277,
    "hr": 7701,
    "bf": "66    Dra",
    "pname": "",
    "ra": 20.092444,
    "dec": 61.99542,
    "dist": 52.687,
    "vmag": 5.4
  },
  {
    "name": 191570,
    "hr": 7705,
    "bf": "17The Sge",
    "pname": "",
    "ra": 20.165735,
    "dec": 20.915028,
    "dist": 45.2489,
    "vmag": 6.51
  },
  {
    "name": 191610,
    "hr": 7708,
    "bf": "28    Cyg",
    "pname": "",
    "ra": 20.157116,
    "dec": 36.839621,
    "dist": 317.4603,
    "vmag": 4.93
  },
  {
    "name": 191692,
    "hr": 7710,
    "bf": "65The Aql",
    "pname": "θ-Aql",
    "ra": 20.188413,
    "dec": -0.821461,
    "dist": 87.7963,
    "vmag": 3.24
  },
  {
    "name": 191747,
    "hr": 7711,
    "bf": "18    Vul",
    "pname": "",
    "ra": 20.175982,
    "dec": 26.904169,
    "dist": 129.8701,
    "vmag": 5.51
  },
  {
    "name": 191753,
    "hr": 7712,
    "bf": "1Xi 1Cap",
    "pname": "",
    "ra": 20.199416,
    "dec": -12.392403,
    "dist": 143.8849,
    "vmag": 6.34
  },
  {
    "name": 191862,
    "hr": 7715,
    "bf": "2Xi 2Cap",
    "pname": "",
    "ra": 20.207186,
    "dec": -12.617497,
    "dist": 27.7008,
    "vmag": 5.84
  },
  {
    "name": 192004,
    "hr": 7718,
    "bf": "19    Vul",
    "pname": "",
    "ra": 20.19666,
    "dec": 26.80899,
    "dist": 432.9004,
    "vmag": 5.51
  },
  {
    "name": 192044,
    "hr": 7719,
    "bf": "20    Vul",
    "pname": "",
    "ra": 20.200195,
    "dec": 26.478806,
    "dist": 246.9136,
    "vmag": 5.91
  },
  {
    "name": 192107,
    "hr": 7720,
    "bf": "66    Aql",
    "pname": "",
    "ra": 20.220523,
    "dec": -1.009339,
    "dist": 216.9197,
    "vmag": 5.44
  },
  {
    "name": 192425,
    "hr": 7724,
    "bf": "67Rho Aql",
    "pname": "",
    "ra": 20.237949,
    "dec": 15.197609,
    "dist": 45.977,
    "vmag": 4.94
  },
  {
    "name": 192455,
    "hr": 7727,
    "bf": "68    Dra",
    "pname": "",
    "ra": 20.193007,
    "dec": 62.078542,
    "dist": 48.3559,
    "vmag": 5.7
  },
  {
    "name": 192514,
    "hr": 7730,
    "bf": "30    Cyg",
    "pname": "",
    "ra": 20.22168,
    "dec": 46.815675,
    "dist": 187.2659,
    "vmag": 4.8
  },
  {
    "name": 192518,
    "hr": 7731,
    "bf": "21    Vul",
    "pname": "",
    "ra": 20.237369,
    "dec": 28.694817,
    "dist": 91.1577,
    "vmag": 5.19
  },
  {
    "name": 192577,
    "hr": 7735,
    "bf": "31    Cyg",
    "pname": "",
    "ra": 20.227196,
    "dec": 46.741329,
    "dist": 271.0027,
    "vmag": 3.8
  },
  {
    "name": 192640,
    "hr": 7736,
    "bf": "29    Cyg",
    "pname": "",
    "ra": 20.242229,
    "dec": 36.806302,
    "dist": 42.6985,
    "vmag": 4.93
  },
  {
    "name": 192666,
    "hr": 7738,
    "bf": "3    Cap",
    "pname": "",
    "ra": 20.273001,
    "dec": -12.337119,
    "dist": 135.8696,
    "vmag": 6.3
  },
  {
    "name": 192696,
    "hr": 7740,
    "bf": "33    Cyg",
    "pname": "",
    "ra": 20.223288,
    "dec": 56.567722,
    "dist": 48.8281,
    "vmag": 4.28
  },
  {
    "name": 192713,
    "hr": 7741,
    "bf": "22    Vul",
    "pname": "",
    "ra": 20.2584,
    "dec": 23.508906,
    "dist": 588.2353,
    "vmag": 5.18
  },
  {
    "name": 192806,
    "hr": 7744,
    "bf": "23    Vul",
    "pname": "",
    "ra": 20.262816,
    "dec": 27.814242,
    "dist": 103.8422,
    "vmag": 4.5
  },
  {
    "name": 192836,
    "hr": 7746,
    "bf": "18    Sge",
    "pname": "",
    "ra": 20.272163,
    "dec": 21.5987,
    "dist": 101.626,
    "vmag": 6.11
  },
  {
    "name": 192876,
    "hr": 7747,
    "bf": "5Alp1Cap",
    "pname": "",
    "ra": 20.29413,
    "dec": -12.508212,
    "dist": 174.5201,
    "vmag": 4.3
  },
  {
    "name": 192879,
    "hr": 7748,
    "bf": "4    Cap",
    "pname": "",
    "ra": 20.300388,
    "dec": -21.80996,
    "dist": 96.9932,
    "vmag": 5.86
  },
  {
    "name": 192907,
    "hr": 7750,
    "bf": "1Kap Cep",
    "pname": "",
    "ra": 20.148145,
    "dec": 77.711419,
    "dist": 96.5251,
    "vmag": 4.38
  },
  {
    "name": 192909,
    "hr": 7751,
    "bf": "32    Cyg",
    "pname": "",
    "ra": 20.257867,
    "dec": 47.714208,
    "dist": 324.6753,
    "vmag": 3.96
  },
  {
    "name": 192944,
    "hr": 7753,
    "bf": "24    Vul",
    "pname": "",
    "ra": 20.279746,
    "dec": 24.671102,
    "dist": 134.2282,
    "vmag": 5.3
  },
  {
    "name": 192947,
    "hr": 7754,
    "bf": "6Alp2Cap",
    "pname": "",
    "ra": 20.300904,
    "dec": -12.544852,
    "dist": 32.4465,
    "vmag": 3.58
  },
  {
    "name": 193150,
    "hr": 7761,
    "bf": "7Sig Cap",
    "pname": "",
    "ra": 20.323223,
    "dec": -19.118533,
    "dist": 343.6426,
    "vmag": 5.28
  },
  {
    "name": 193237,
    "hr": 7763,
    "bf": "34    Cyg",
    "pname": "",
    "ra": 20.296445,
    "dec": 38.03293,
    "dist": 100000,
    "vmag": 4.77
  },
  {
    "name": 193369,
    "hr": 7769,
    "bf": "36    Cyg",
    "pname": "",
    "ra": 20.307958,
    "dec": 36.999803,
    "dist": 62.5,
    "vmag": 5.58
  },
  {
    "name": 193370,
    "hr": 7770,
    "bf": "35    Cyg",
    "pname": "",
    "ra": 20.310853,
    "dec": 34.982775,
    "dist": 970.8738,
    "vmag": 5.14
  },
  {
    "name": 193432,
    "hr": 7773,
    "bf": "8Nu  Cap",
    "pname": "",
    "ra": 20.344393,
    "dec": -12.75908,
    "dist": 77.6398,
    "vmag": 4.77
  },
  {
    "name": 193495,
    "hr": 7776,
    "bf": "9Bet Cap",
    "pname": "",
    "ra": 20.350187,
    "dec": -14.781367,
    "dist": 100.2004,
    "vmag": 3.05
  },
  {
    "name": 193571,
    "hr": 7779,
    "bf": "Kap1Sgr",
    "pname": "",
    "ra": 20.374305,
    "dec": -42.049548,
    "dist": 66.1376,
    "vmag": 5.6
  },
  {
    "name": 193807,
    "hr": 7787,
    "bf": "Kap2Sgr",
    "pname": "",
    "ra": 20.398106,
    "dec": -42.422868,
    "dist": 95.511,
    "vmag": 5.64
  },
  {
    "name": 193911,
    "hr": 7789,
    "bf": "25    Vul",
    "pname": "",
    "ra": 20.36762,
    "dec": 24.446099,
    "dist": 305.8104,
    "vmag": 5.5
  },
  {
    "name": 193924,
    "hr": 7790,
    "bf": "Alp Pav",
    "pname": "Peacock",
    "ra": 20.427459,
    "dec": -56.73509,
    "dist": 54.8246,
    "vmag": 1.94
  },
  {
    "name": 193964,
    "hr": 7792,
    "bf": "71    Dra",
    "pname": "",
    "ra": 20.326863,
    "dec": 62.257472,
    "dist": 115.8749,
    "vmag": 5.71
  },
  {
    "name": 194093,
    "hr": 7796,
    "bf": "37Gam Cyg",
    "pname": "Sadr",
    "ra": 20.370473,
    "dec": 40.256679,
    "dist": 561.7978,
    "vmag": 2.23
  },
  {
    "name": 194317,
    "hr": 7806,
    "bf": "39    Cyg",
    "pname": "",
    "ra": 20.397671,
    "dec": 32.190172,
    "dist": 76.6284,
    "vmag": 4.43
  },
  {
    "name": 194636,
    "hr": 7814,
    "bf": "10Pi  Cap",
    "pname": "",
    "ra": 20.455336,
    "dec": -18.211721,
    "dist": 167.2241,
    "vmag": 5.08
  },
  {
    "name": 194939,
    "hr": 7821,
    "bf": "68    Aql",
    "pname": "",
    "ra": 20.473585,
    "dec": -3.357794,
    "dist": 184.8429,
    "vmag": 6.12
  },
  {
    "name": 194943,
    "hr": 7822,
    "bf": "11Rho Cap",
    "pname": "",
    "ra": 20.481004,
    "dec": -17.813687,
    "dist": 30.2663,
    "vmag": 4.77
  },
  {
    "name": 195050,
    "hr": 7826,
    "bf": "40    Cyg",
    "pname": "",
    "ra": 20.459517,
    "dec": 38.440332,
    "dist": 81.4332,
    "vmag": 5.63
  },
  {
    "name": 195068,
    "hr": 7828,
    "bf": "43    Cyg",
    "pname": "",
    "ra": 20.450624,
    "dec": 49.383367,
    "dist": 37.5657,
    "vmag": 5.73
  },
  {
    "name": 195093,
    "hr": 7829,
    "bf": "12Omi Cap",
    "pname": "",
    "ra": 20.497941,
    "dec": -18.586378,
    "dist": 100000,
    "vmag": 6.74
  },
  {
    "name": 195094,
    "hr": 7830,
    "bf": "12Omi Cap",
    "pname": "",
    "ra": 20.498307,
    "dec": -18.583178,
    "dist": 66.357,
    "vmag": 5.94
  },
  {
    "name": 195135,
    "hr": 7831,
    "bf": "69    Aql",
    "pname": "",
    "ra": 20.494167,
    "dec": -2.885531,
    "dist": 61.2745,
    "vmag": 4.91
  },
  {
    "name": 195295,
    "hr": 7834,
    "bf": "41    Cyg",
    "pname": "",
    "ra": 20.489926,
    "dec": 30.368555,
    "dist": 235.8491,
    "vmag": 4.01
  },
  {
    "name": 195324,
    "hr": 7835,
    "bf": "42    Cyg",
    "pname": "",
    "ra": 20.488997,
    "dec": 36.454729,
    "dist": 793.6508,
    "vmag": 5.9
  },
  {
    "name": 195325,
    "hr": 7836,
    "bf": "1    Del",
    "pname": "",
    "ra": 20.50499,
    "dec": 10.895924,
    "dist": 227.7904,
    "vmag": 6.03
  },
  {
    "name": 195556,
    "hr": 7844,
    "bf": "45Ome1Cyg",
    "pname": "",
    "ra": 20.500983,
    "dec": 48.951569,
    "dist": 278.5515,
    "vmag": 4.94
  },
  {
    "name": 195569,
    "hr": 7846,
    "bf": "Nu  Mic",
    "pname": "",
    "ra": 20.565297,
    "dec": -44.516048,
    "dist": 71.736,
    "vmag": 5.12
  },
  {
    "name": 195593,
    "hr": 7847,
    "bf": "44    Cyg",
    "pname": "",
    "ra": 20.516453,
    "dec": 36.935839,
    "dist": 100000,
    "vmag": 6.21
  },
  {
    "name": 195627,
    "hr": 7848,
    "bf": "Phi1Pav",
    "pname": "",
    "ra": 20.593003,
    "dec": -60.581749,
    "dist": 27.7932,
    "vmag": 4.75
  },
  {
    "name": 195725,
    "hr": 7850,
    "bf": "2The Cep",
    "pname": "",
    "ra": 20.493015,
    "dec": 62.994105,
    "dist": 41.841,
    "vmag": 4.21
  },
  {
    "name": 195774,
    "hr": 7851,
    "bf": "46Ome2Cyg",
    "pname": "",
    "ra": 20.521893,
    "dec": 49.220297,
    "dist": 122.399,
    "vmag": 5.44
  },
  {
    "name": 195810,
    "hr": 7852,
    "bf": "2Eps Del",
    "pname": "",
    "ra": 20.553547,
    "dec": 11.303263,
    "dist": 101.3171,
    "vmag": 4.03
  },
  {
    "name": 195943,
    "hr": 7858,
    "bf": "3Eta Del",
    "pname": "",
    "ra": 20.565845,
    "dec": 13.027255,
    "dist": 72.4113,
    "vmag": 5.39
  },
  {
    "name": 195961,
    "hr": 7859,
    "bf": "Rho Pav",
    "pname": "",
    "ra": 20.626465,
    "dec": -61.529918,
    "dist": 58.1395,
    "vmag": 4.86
  },
  {
    "name": 196051,
    "hr": 7863,
    "bf": "Mu 1Oct",
    "pname": "",
    "ra": 20.700731,
    "dec": -76.180592,
    "dist": 101.1122,
    "vmag": 5.99
  },
  {
    "name": 196067,
    "hr": 7864,
    "bf": "Mu 2Oct",
    "pname": "",
    "ra": 20.695508,
    "dec": -75.350803,
    "dist": 44.2674,
    "vmag": 6.51
  },
  {
    "name": 196093,
    "hr": 7866,
    "bf": "47    Cyg",
    "pname": "",
    "ra": 20.565052,
    "dec": 35.250852,
    "dist": 847.4576,
    "vmag": 4.61
  },
  {
    "name": 196171,
    "hr": 7869,
    "bf": "Alp Ind",
    "pname": "",
    "ra": 20.626116,
    "dec": -47.291502,
    "dist": 30.1477,
    "vmag": 3.11
  },
  {
    "name": 196180,
    "hr": 7871,
    "bf": "4Zet Del",
    "pname": "",
    "ra": 20.588482,
    "dec": 14.674213,
    "dist": 67.4764,
    "vmag": 4.64
  },
  {
    "name": 196321,
    "hr": 7873,
    "bf": "70    Aql",
    "pname": "",
    "ra": 20.61212,
    "dec": -2.549957,
    "dist": 398.4064,
    "vmag": 4.91
  },
  {
    "name": 196362,
    "hr": 7874,
    "bf": "26    Vul",
    "pname": "",
    "ra": 20.602316,
    "dec": 25.882648,
    "dist": 195.6947,
    "vmag": 6.4
  },
  {
    "name": 196378,
    "hr": 7875,
    "bf": "Phi2Pav",
    "pname": "",
    "ra": 20.667347,
    "dec": -60.548892,
    "dist": 24.6609,
    "vmag": 5.11
  },
  {
    "name": 196502,
    "hr": 7879,
    "bf": "73    Dra",
    "pname": "",
    "ra": 20.525112,
    "dec": 74.954619,
    "dist": 121.3592,
    "vmag": 5.18
  },
  {
    "name": 196504,
    "hr": 7880,
    "bf": "27    Vul",
    "pname": "",
    "ra": 20.617964,
    "dec": 26.461947,
    "dist": 97.371,
    "vmag": 5.59
  },
  {
    "name": 196519,
    "hr": 7881,
    "bf": "Ups Pav",
    "pname": "",
    "ra": 20.699186,
    "dec": -66.760682,
    "dist": 240.9639,
    "vmag": 5.14
  },
  {
    "name": 196524,
    "hr": 7882,
    "bf": "6Bet Del",
    "pname": "",
    "ra": 20.625816,
    "dec": 14.595087,
    "dist": 30.931,
    "vmag": 3.64
  },
  {
    "name": 196544,
    "hr": 7883,
    "bf": "5Iot Del",
    "pname": "",
    "ra": 20.630311,
    "dec": 11.377676,
    "dist": 57.9374,
    "vmag": 5.42
  },
  {
    "name": 196574,
    "hr": 7884,
    "bf": "71    Aql",
    "pname": "",
    "ra": 20.638967,
    "dec": -1.105121,
    "dist": 103.4126,
    "vmag": 4.31
  },
  {
    "name": 196606,
    "hr": 7885,
    "bf": "48    Cyg",
    "pname": "",
    "ra": 20.625494,
    "dec": 31.57254,
    "dist": 261.7801,
    "vmag": 6.32
  },
  {
    "name": 196662,
    "hr": 7889,
    "bf": "14Tau Cap",
    "pname": "",
    "ra": 20.654533,
    "dec": -14.95476,
    "dist": 348.4321,
    "vmag": 5.24
  },
  {
    "name": 196724,
    "hr": 7891,
    "bf": "29    Vul",
    "pname": "",
    "ra": 20.642038,
    "dec": 21.201174,
    "dist": 71.3776,
    "vmag": 4.81
  },
  {
    "name": 196725,
    "hr": 7892,
    "bf": "8The Del",
    "pname": "",
    "ra": 20.645552,
    "dec": 13.315125,
    "dist": 617.284,
    "vmag": 5.69
  },
  {
    "name": 196740,
    "hr": 7894,
    "bf": "28    Vul",
    "pname": "",
    "ra": 20.642198,
    "dec": 24.115958,
    "dist": 160.2564,
    "vmag": 5.06
  },
  {
    "name": 196755,
    "hr": 7896,
    "bf": "7Kap Del",
    "pname": "",
    "ra": 20.652161,
    "dec": 10.086203,
    "dist": 30.1205,
    "vmag": 5.07
  },
  {
    "name": 196758,
    "hr": 7897,
    "bf": "1    Aqr",
    "pname": "",
    "ra": 20.656914,
    "dec": 0.486445,
    "dist": 71.4796,
    "vmag": 5.15
  },
  {
    "name": 196777,
    "hr": 7900,
    "bf": "15Ups Cap",
    "pname": "",
    "ra": 20.667485,
    "dec": -18.138659,
    "dist": 177.9359,
    "vmag": 5.15
  },
  {
    "name": 196787,
    "hr": 7901,
    "bf": "75    Dra",
    "pname": "",
    "ra": 20.470687,
    "dec": 81.422708,
    "dist": 139.6648,
    "vmag": 5.38
  },
  {
    "name": 196867,
    "hr": 7906,
    "bf": "9Alp Del",
    "pname": "",
    "ra": 20.660635,
    "dec": 15.912072,
    "dist": 77.821,
    "vmag": 3.77
  },
  {
    "name": 196925,
    "hr": 7908,
    "bf": "74    Dra",
    "pname": "",
    "ra": 20.490931,
    "dec": 81.091277,
    "dist": 63.7349,
    "vmag": 5.96
  },
  {
    "name": 197051,
    "hr": 7913,
    "bf": "Bet Pav",
    "pname": "",
    "ra": 20.749314,
    "dec": -66.203212,
    "dist": 41.425,
    "vmag": 3.42
  },
  {
    "name": 197121,
    "hr": 7918,
    "bf": "10    Del",
    "pname": "",
    "ra": 20.687836,
    "dec": 14.58288,
    "dist": 155.521,
    "vmag": 6.01
  },
  {
    "name": 197157,
    "hr": 7920,
    "bf": "Eta Ind",
    "pname": "",
    "ra": 20.733966,
    "dec": -51.920971,
    "dist": 24.1721,
    "vmag": 4.51
  },
  {
    "name": 197177,
    "hr": 7921,
    "bf": "49    Cyg",
    "pname": "",
    "ra": 20.684039,
    "dec": 32.307287,
    "dist": 244.4988,
    "vmag": 5.53
  },
  {
    "name": 197345,
    "hr": 7924,
    "bf": "50Alp Cyg",
    "pname": "Deneb",
    "ra": 20.690532,
    "dec": 45.280338,
    "dist": 432.9004,
    "vmag": 1.25
  },
  {
    "name": 197461,
    "hr": 7928,
    "bf": "11Del Del",
    "pname": "",
    "ra": 20.724315,
    "dec": 15.074581,
    "dist": 68.4463,
    "vmag": 4.43
  },
  {
    "name": 197511,
    "hr": 7929,
    "bf": "51    Cyg",
    "pname": "",
    "ra": 20.703508,
    "dec": 50.34003,
    "dist": 390.625,
    "vmag": 5.41
  },
  {
    "name": 197635,
    "hr": 7934,
    "bf": "Sig Pav",
    "pname": "",
    "ra": 20.821733,
    "dec": -68.776521,
    "dist": 92.5926,
    "vmag": 5.41
  },
  {
    "name": 197692,
    "hr": 7936,
    "bf": "16Psi Cap",
    "pname": "",
    "ra": 20.76826,
    "dec": -25.270898,
    "dist": 14.6778,
    "vmag": 4.13
  },
  {
    "name": 197725,
    "hr": 7937,
    "bf": "17    Cap",
    "pname": "",
    "ra": 20.769441,
    "dec": -21.514032,
    "dist": 80.8407,
    "vmag": 5.91
  },
  {
    "name": 197752,
    "hr": 7939,
    "bf": "30    Vul",
    "pname": "",
    "ra": 20.747919,
    "dec": 25.270617,
    "dist": 99.6016,
    "vmag": 4.92
  },
  {
    "name": 197912,
    "hr": 7942,
    "bf": "52    Cyg",
    "pname": "",
    "ra": 20.761043,
    "dec": 30.719715,
    "dist": 61.6523,
    "vmag": 4.22
  },
  {
    "name": 197937,
    "hr": 7943,
    "bf": "Iot Mic",
    "pname": "",
    "ra": 20.808084,
    "dec": -43.988544,
    "dist": 35.4233,
    "vmag": 5.11
  },
  {
    "name": 197950,
    "hr": 7945,
    "bf": "4    Cep",
    "pname": "",
    "ra": 20.719722,
    "dec": 66.657447,
    "dist": 42.7899,
    "vmag": 5.59
  },
  {
    "name": 197963,
    "hr": 7947,
    "bf": "12Gam1Del",
    "pname": "",
    "ra": 20.777462,
    "dec": 16.124134,
    "dist": 37.9507,
    "vmag": 5.15
  },
  {
    "name": 197964,
    "hr": 7948,
    "bf": "12Gam2Del",
    "pname": "",
    "ra": 20.77764,
    "dec": 16.124296,
    "dist": 38.7297,
    "vmag": 4.27
  },
  {
    "name": 197989,
    "hr": 7949,
    "bf": "53Eps Cyg",
    "pname": "Gienah",
    "ra": 20.770178,
    "dec": 33.970256,
    "dist": 22.2916,
    "vmag": 2.48
  },
  {
    "name": 198001,
    "hr": 7950,
    "bf": "2Eps Aqr",
    "pname": "",
    "ra": 20.794598,
    "dec": -9.495776,
    "dist": 63.6943,
    "vmag": 3.78
  },
  {
    "name": 198026,
    "hr": 7951,
    "bf": "3    Aqr",
    "pname": "",
    "ra": 20.795621,
    "dec": -5.027701,
    "dist": 179.5332,
    "vmag": 4.43
  },
  {
    "name": 198048,
    "hr": 7952,
    "bf": "Zet Ind",
    "pname": "",
    "ra": 20.824709,
    "dec": -46.226826,
    "dist": 126.5823,
    "vmag": 4.9
  },
  {
    "name": 198069,
    "hr": 7953,
    "bf": "13    Del",
    "pname": "",
    "ra": 20.796759,
    "dec": 6.008209,
    "dist": 131.406,
    "vmag": 5.57
  },
  {
    "name": 198149,
    "hr": 7957,
    "bf": "3Eta Cep",
    "pname": "",
    "ra": 20.754811,
    "dec": 61.838782,
    "dist": 14.2653,
    "vmag": 3.41
  },
  {
    "name": 198183,
    "hr": 7963,
    "bf": "54Lam Cyg",
    "pname": "",
    "ra": 20.790149,
    "dec": 36.490717,
    "dist": 235.8491,
    "vmag": 4.53
  },
  {
    "name": 198232,
    "hr": 7965,
    "bf": "Alp Mic",
    "pname": "",
    "ra": 20.8328,
    "dec": -33.779722,
    "dist": 116.0093,
    "vmag": 4.89
  },
  {
    "name": 198308,
    "hr": 7968,
    "bf": "Iot Ind",
    "pname": "",
    "ra": 20.858347,
    "dec": -51.608179,
    "dist": 143.0615,
    "vmag": 5.06
  },
  {
    "name": 198390,
    "hr": 7973,
    "bf": "15    Del",
    "pname": "",
    "ra": 20.827158,
    "dec": 12.545128,
    "dist": 30.6185,
    "vmag": 6.01
  },
  {
    "name": 198391,
    "hr": 7974,
    "bf": "14    Del",
    "pname": "",
    "ra": 20.830072,
    "dec": 7.864185,
    "dist": 153.3742,
    "vmag": 6.32
  },
  {
    "name": 198478,
    "hr": 7977,
    "bf": "55    Cyg",
    "pname": "",
    "ra": 20.815637,
    "dec": 46.114134,
    "dist": 714.2857,
    "vmag": 4.81
  },
  {
    "name": 198529,
    "hr": 7979,
    "bf": "Bet Mic",
    "pname": "",
    "ra": 20.866322,
    "dec": -33.177974,
    "dist": 147.929,
    "vmag": 6.06
  },
  {
    "name": 198542,
    "hr": 7980,
    "bf": "18Ome Cap",
    "pname": "",
    "ra": 20.863692,
    "dec": -26.919133,
    "dist": 258.3979,
    "vmag": 4.12
  },
  {
    "name": 198571,
    "hr": 7982,
    "bf": "4    Aqr",
    "pname": "",
    "ra": 20.857152,
    "dec": -5.626633,
    "dist": 60.7165,
    "vmag": 5.99
  },
  {
    "name": 198639,
    "hr": 7984,
    "bf": "56    Cyg",
    "pname": "",
    "ra": 20.834695,
    "dec": 44.059304,
    "dist": 40.9668,
    "vmag": 5.06
  },
  {
    "name": 198667,
    "hr": 7985,
    "bf": "5    Aqr",
    "pname": "",
    "ra": 20.869082,
    "dec": -5.507059,
    "dist": 199.2032,
    "vmag": 5.55
  },
  {
    "name": 198700,
    "hr": 7986,
    "bf": "Bet Ind",
    "pname": "",
    "ra": 20.913498,
    "dec": -58.454155,
    "dist": 187.6173,
    "vmag": 3.67
  },
  {
    "name": 198743,
    "hr": 7990,
    "bf": "6Mu  Aqr",
    "pname": "",
    "ra": 20.877565,
    "dec": -8.983318,
    "dist": 48.216,
    "vmag": 4.73
  },
  {
    "name": 198809,
    "hr": 7995,
    "bf": "31    Vul",
    "pname": "",
    "ra": 20.868801,
    "dec": 27.096979,
    "dist": 57.8035,
    "vmag": 4.56
  },
  {
    "name": 199012,
    "hr": 8000,
    "bf": "19    Cap",
    "pname": "",
    "ra": 20.913283,
    "dec": -17.922894,
    "dist": 111.8568,
    "vmag": 5.78
  },
  {
    "name": 199081,
    "hr": 8001,
    "bf": "57    Cyg",
    "pname": "",
    "ra": 20.887431,
    "dec": 44.38726,
    "dist": 161.0306,
    "vmag": 4.8
  },
  {
    "name": 199095,
    "hr": 8002,
    "bf": "76    Dra",
    "pname": "",
    "ra": 20.709755,
    "dec": 82.531158,
    "dist": 108.1081,
    "vmag": 5.75
  },
  {
    "name": 199169,
    "hr": 8008,
    "bf": "32    Vul",
    "pname": "",
    "ra": 20.909344,
    "dec": 28.057621,
    "dist": 178.5714,
    "vmag": 5.03
  },
  {
    "name": 199253,
    "hr": 8011,
    "bf": "17    Del",
    "pname": "",
    "ra": 20.926858,
    "dec": 13.721536,
    "dist": 147.0588,
    "vmag": 5.19
  },
  {
    "name": 199254,
    "hr": 8012,
    "bf": "16    Del",
    "pname": "",
    "ra": 20.927381,
    "dec": 12.568558,
    "dist": 60.4961,
    "vmag": 5.54
  },
  {
    "name": 199345,
    "hr": 8015,
    "bf": "7    Aqr",
    "pname": "",
    "ra": 20.948341,
    "dec": -9.697545,
    "dist": 167.5042,
    "vmag": 5.49
  },
  {
    "name": 199532,
    "hr": 8021,
    "bf": "Alp Oct",
    "pname": "",
    "ra": 21.078621,
    "dec": -77.023767,
    "dist": 43.535,
    "vmag": 5.13
  },
  {
    "name": 199629,
    "hr": 8028,
    "bf": "58Nu  Cyg",
    "pname": "",
    "ra": 20.952893,
    "dec": 41.167136,
    "dist": 114.8106,
    "vmag": 3.94
  },
  {
    "name": 199665,
    "hr": 8030,
    "bf": "18    Del",
    "pname": "",
    "ra": 20.973871,
    "dec": 10.839286,
    "dist": 75.3012,
    "vmag": 5.51
  },
  {
    "name": 199697,
    "hr": 8032,
    "bf": "33    Vul",
    "pname": "",
    "ra": 20.971209,
    "dec": 22.325908,
    "dist": 138.6963,
    "vmag": 5.3
  },
  {
    "name": 199728,
    "hr": 8033,
    "bf": "20    Cap",
    "pname": "",
    "ra": 20.993372,
    "dec": -19.035283,
    "dist": 164.2036,
    "vmag": 6.26
  },
  {
    "name": 199766,
    "hr": 8034,
    "bf": "1Eps Equ",
    "pname": "",
    "ra": 20.984577,
    "dec": 4.293481,
    "dist": 54.0833,
    "vmag": 5.3
  },
  {
    "name": 199951,
    "hr": 8039,
    "bf": "Gam Mic",
    "pname": "",
    "ra": 21.021517,
    "dec": -32.257767,
    "dist": 70.2247,
    "vmag": 4.67
  },
  {
    "name": 199960,
    "hr": 8041,
    "bf": "11    Aqr",
    "pname": "",
    "ra": 21.0094,
    "dec": -4.730261,
    "dist": 27.2257,
    "vmag": 6.21
  },
  {
    "name": 200120,
    "hr": 8047,
    "bf": "59    Cyg",
    "pname": "",
    "ra": 20.997098,
    "dec": 47.520951,
    "dist": 434.7826,
    "vmag": 4.74
  },
  {
    "name": 200163,
    "hr": 8048,
    "bf": "Zet Mic",
    "pname": "",
    "ra": 21.049433,
    "dec": -38.631447,
    "dist": 35.3732,
    "vmag": 5.32
  },
  {
    "name": 200310,
    "hr": 8053,
    "bf": "60    Cyg",
    "pname": "",
    "ra": 21.019702,
    "dec": 46.155773,
    "dist": 467.2897,
    "vmag": 5.38
  },
  {
    "name": 200365,
    "hr": 8055,
    "bf": "Mu  Ind",
    "pname": "",
    "ra": 21.08729,
    "dec": -54.727042,
    "dist": 112.1076,
    "vmag": 5.17
  },
  {
    "name": 200496,
    "hr": 8058,
    "bf": "12    Aqr",
    "pname": "",
    "ra": 21.067979,
    "dec": -5.823066,
    "dist": 153.8462,
    "vmag": 5.53
  },
  {
    "name": 200499,
    "hr": 8060,
    "bf": "22Eta Cap",
    "pname": "",
    "ra": 21.073417,
    "dec": -19.854991,
    "dist": 49.505,
    "vmag": 4.82
  },
  {
    "name": 200644,
    "hr": 8066,
    "bf": "3    Equ",
    "pname": "",
    "ra": 21.076292,
    "dec": 5.502862,
    "dist": 235.8491,
    "vmag": 5.63
  },
  {
    "name": 200702,
    "hr": 8069,
    "bf": "Eta Mic",
    "pname": "",
    "ra": 21.107087,
    "dec": -41.385965,
    "dist": 218.3406,
    "vmag": 5.55
  },
  {
    "name": 200718,
    "hr": 8070,
    "bf": "Del Mic",
    "pname": "",
    "ra": 21.100317,
    "dec": -30.12512,
    "dist": 92.4214,
    "vmag": 5.69
  },
  {
    "name": 200761,
    "hr": 8075,
    "bf": "23The Cap",
    "pname": "",
    "ra": 21.099118,
    "dec": -17.232861,
    "dist": 49.7265,
    "vmag": 4.08
  },
  {
    "name": 200790,
    "hr": 8077,
    "bf": "4    Equ",
    "pname": "",
    "ra": 21.090756,
    "dec": 5.958199,
    "dist": 48.9237,
    "vmag": 5.94
  },
  {
    "name": 200905,
    "hr": 8079,
    "bf": "62Xi  Cyg",
    "pname": "",
    "ra": 21.082184,
    "dec": 43.927852,
    "dist": 258.3979,
    "vmag": 3.72
  },
  {
    "name": 200914,
    "hr": 8080,
    "bf": "24    Cap",
    "pname": "",
    "ra": 21.118797,
    "dec": -25.005853,
    "dist": 139.8601,
    "vmag": 4.49
  },
  {
    "name": 201091,
    "hr": 8085,
    "bf": "61    Cyg",
    "pname": "",
    "ra": 21.114794,
    "dec": 38.749415,
    "dist": 3.4865,
    "vmag": 5.2
  },
  {
    "name": 201092,
    "hr": 8086,
    "bf": "61    Cyg",
    "pname": "",
    "ra": 21.115163,
    "dec": 38.742055,
    "dist": 3.498,
    "vmag": 6.05
  },
  {
    "name": 201184,
    "hr": 8087,
    "bf": "25Chi Cap",
    "pname": "",
    "ra": 21.142673,
    "dec": -21.193669,
    "dist": 55.1268,
    "vmag": 5.3
  },
  {
    "name": 201251,
    "hr": 8089,
    "bf": "63    Cyg",
    "pname": "",
    "ra": 21.110026,
    "dec": 47.648403,
    "dist": 316.4557,
    "vmag": 4.56
  },
  {
    "name": 201352,
    "hr": 8091,
    "bf": "27    Cap",
    "pname": "",
    "ra": 21.159165,
    "dec": -20.556661,
    "dist": 51.5996,
    "vmag": 6.25
  },
  {
    "name": 201371,
    "hr": 8092,
    "bf": "Omi Pav",
    "pname": "",
    "ra": 21.222351,
    "dec": -70.126267,
    "dist": 273.9726,
    "vmag": 5.06
  },
  {
    "name": 201381,
    "hr": 8093,
    "bf": "13Nu  Aqr",
    "pname": "",
    "ra": 21.159902,
    "dec": -11.371693,
    "dist": 48.852,
    "vmag": 4.5
  },
  {
    "name": 201601,
    "hr": 8097,
    "bf": "5Gam Equ",
    "pname": "",
    "ra": 21.172361,
    "dec": 10.131579,
    "dist": 36.2976,
    "vmag": 4.7
  },
  {
    "name": 201616,
    "hr": 8098,
    "bf": "6    Equ",
    "pname": "",
    "ra": 21.175365,
    "dec": 10.048922,
    "dist": 135.8696,
    "vmag": 6.07
  },
  {
    "name": 202109,
    "hr": 8115,
    "bf": "64Zet Cyg",
    "pname": "",
    "ra": 21.215607,
    "dec": 30.226916,
    "dist": 43.8789,
    "vmag": 3.21
  },
  {
    "name": 202275,
    "hr": 8123,
    "bf": "7Del Equ",
    "pname": "",
    "ra": 21.241337,
    "dec": 10.006981,
    "dist": 18.4877,
    "vmag": 4.47
  },
  {
    "name": 202320,
    "hr": 8127,
    "bf": "28Phi Cap",
    "pname": "",
    "ra": 21.260528,
    "dec": -20.651696,
    "dist": 197.2387,
    "vmag": 5.17
  },
  {
    "name": 202369,
    "hr": 8128,
    "bf": "29    Cap",
    "pname": "",
    "ra": 21.262456,
    "dec": -15.1715,
    "dist": 187.6173,
    "vmag": 5.31
  },
  {
    "name": 202444,
    "hr": 8130,
    "bf": "65Tau Cyg",
    "pname": "",
    "ra": 21.246517,
    "dec": 38.045317,
    "dist": 20.3417,
    "vmag": 3.74
  },
  {
    "name": 202447,
    "hr": 8131,
    "bf": "8Alp Equ",
    "pname": "",
    "ra": 21.263731,
    "dec": 5.247845,
    "dist": 58.3431,
    "vmag": 3.92
  },
  {
    "name": 202627,
    "hr": 8135,
    "bf": "Eps Mic",
    "pname": "",
    "ra": 21.298966,
    "dec": -32.172539,
    "dist": 55.8659,
    "vmag": 4.71
  },
  {
    "name": 202671,
    "hr": 8137,
    "bf": "30    Cap",
    "pname": "",
    "ra": 21.299246,
    "dec": -17.985138,
    "dist": 163.6661,
    "vmag": 5.4
  },
  {
    "name": 202723,
    "hr": 8139,
    "bf": "31    Cap",
    "pname": "",
    "ra": 21.30435,
    "dec": -17.462266,
    "dist": 95.7854,
    "vmag": 7.07
  },
  {
    "name": 202730,
    "hr": 8140,
    "bf": "The Ind",
    "pname": "",
    "ra": 21.331096,
    "dec": -53.449427,
    "dist": 30.2847,
    "vmag": 4.39
  },
  {
    "name": 202753,
    "hr": 8141,
    "bf": "15    Aqr",
    "pname": "",
    "ra": 21.303076,
    "dec": -4.519478,
    "dist": 311.5265,
    "vmag": 5.83
  },
  {
    "name": 202850,
    "hr": 8143,
    "bf": "67Sig Cyg",
    "pname": "",
    "ra": 21.290265,
    "dec": 39.394681,
    "dist": 884.9558,
    "vmag": 4.22
  },
  {
    "name": 202904,
    "hr": 8146,
    "bf": "66Ups Cyg",
    "pname": "",
    "ra": 21.298632,
    "dec": 34.896898,
    "dist": 196.8504,
    "vmag": 4.41
  },
  {
    "name": 203006,
    "hr": 8151,
    "bf": "The1Mic",
    "pname": "",
    "ra": 21.346008,
    "dec": -40.809465,
    "dist": 60.4595,
    "vmag": 4.8
  },
  {
    "name": 203064,
    "hr": 8154,
    "bf": "68    Cyg",
    "pname": "",
    "ra": 21.307551,
    "dec": 43.945945,
    "dist": 100000,
    "vmag": 5.04
  },
  {
    "name": 203222,
    "hr": 8160,
    "bf": "16    Aqr",
    "pname": "",
    "ra": 21.351199,
    "dec": -4.560125,
    "dist": 90.9091,
    "vmag": 5.87
  },
  {
    "name": 203280,
    "hr": 8162,
    "bf": "5Alp Cep",
    "pname": "Alderamin",
    "ra": 21.30963,
    "dec": 62.585573,
    "dist": 15.0376,
    "vmag": 2.45
  },
  {
    "name": 203291,
    "hr": 8163,
    "bf": "9    Equ",
    "pname": "",
    "ra": 21.35134,
    "dec": 7.354503,
    "dist": 200.8032,
    "vmag": 5.81
  },
  {
    "name": 203387,
    "hr": 8167,
    "bf": "32Iot Cap",
    "pname": "",
    "ra": 21.370776,
    "dec": -16.834542,
    "dist": 60.3136,
    "vmag": 4.28
  },
  {
    "name": 203467,
    "hr": 8171,
    "bf": "6    Cep",
    "pname": "",
    "ra": 21.322838,
    "dec": 64.871855,
    "dist": 609.7561,
    "vmag": 5.19
  },
  {
    "name": 203504,
    "hr": 8173,
    "bf": "1    Peg",
    "pname": "",
    "ra": 21.36811,
    "dec": 19.804508,
    "dist": 47.7783,
    "vmag": 4.08
  },
  {
    "name": 203525,
    "hr": 8175,
    "bf": "17    Aqr",
    "pname": "",
    "ra": 21.382293,
    "dec": -9.31933,
    "dist": 224.2152,
    "vmag": 5.99
  },
  {
    "name": 203562,
    "hr": 8178,
    "bf": "10Bet Equ",
    "pname": "",
    "ra": 21.381559,
    "dec": 6.81114,
    "dist": 101.4199,
    "vmag": 5.16
  },
  {
    "name": 203585,
    "hr": 8180,
    "bf": "The2Mic",
    "pname": "",
    "ra": 21.406893,
    "dec": -41.006695,
    "dist": 119.7605,
    "vmag": 5.76
  },
  {
    "name": 203608,
    "hr": 8181,
    "bf": "Gam Pav",
    "pname": "",
    "ra": 21.440705,
    "dec": -65.366198,
    "dist": 9.2618,
    "vmag": 4.21
  },
  {
    "name": 203638,
    "hr": 8183,
    "bf": "33    Cap",
    "pname": "",
    "ra": 21.402665,
    "dec": -20.851869,
    "dist": 73.3676,
    "vmag": 5.38
  },
  {
    "name": 203705,
    "hr": 8187,
    "bf": "18    Aqr",
    "pname": "",
    "ra": 21.403192,
    "dec": -12.878108,
    "dist": 47.1032,
    "vmag": 5.48
  },
  {
    "name": 203760,
    "hr": 8188,
    "bf": "Gam Ind",
    "pname": "",
    "ra": 21.437622,
    "dec": -54.660459,
    "dist": 66.8449,
    "vmag": 6.1
  },
  {
    "name": 203843,
    "hr": 8192,
    "bf": "20    Aqr",
    "pname": "",
    "ra": 21.414354,
    "dec": -3.398357,
    "dist": 63.5728,
    "vmag": 6.38
  },
  {
    "name": 203875,
    "hr": 8195,
    "bf": "19    Aqr",
    "pname": "",
    "ra": 21.420285,
    "dec": -9.748552,
    "dist": 91.8274,
    "vmag": 5.71
  },
  {
    "name": 203926,
    "hr": 8199,
    "bf": "21    Aqr",
    "pname": "",
    "ra": 21.421377,
    "dec": -3.556747,
    "dist": 119.0476,
    "vmag": 5.48
  },
  {
    "name": 204075,
    "hr": 8204,
    "bf": "34Zet Cap",
    "pname": "",
    "ra": 21.444452,
    "dec": -22.411332,
    "dist": 118.2033,
    "vmag": 3.77
  },
  {
    "name": 204139,
    "hr": 8207,
    "bf": "35    Cap",
    "pname": "",
    "ra": 21.454117,
    "dec": -21.19621,
    "dist": 171.8213,
    "vmag": 5.78
  },
  {
    "name": 204172,
    "hr": 8209,
    "bf": "69    Cyg",
    "pname": "",
    "ra": 21.429729,
    "dec": 36.667386,
    "dist": 100000,
    "vmag": 5.93
  },
  {
    "name": 204381,
    "hr": 8213,
    "bf": "36    Cap",
    "pname": "",
    "ra": 21.478721,
    "dec": -21.80718,
    "dist": 52.4659,
    "vmag": 4.5
  },
  {
    "name": 204394,
    "hr": 8214,
    "bf": "5    PsA",
    "pname": "",
    "ra": 21.484372,
    "dec": -31.238559,
    "dist": 94.6074,
    "vmag": 6.52
  },
  {
    "name": 204403,
    "hr": 8215,
    "bf": "70    Cyg",
    "pname": "",
    "ra": 21.455935,
    "dec": 37.116798,
    "dist": 400,
    "vmag": 5.3
  },
  {
    "name": 204414,
    "hr": 8217,
    "bf": "35    Vul",
    "pname": "",
    "ra": 21.461126,
    "dec": 27.608593,
    "dist": 58.3431,
    "vmag": 5.39
  },
  {
    "name": 204724,
    "hr": 8225,
    "bf": "2    Peg",
    "pname": "",
    "ra": 21.499137,
    "dec": 23.638838,
    "dist": 120.7729,
    "vmag": 4.52
  },
  {
    "name": 204770,
    "hr": 8227,
    "bf": "7    Cep",
    "pname": "",
    "ra": 21.46282,
    "dec": 66.809096,
    "dist": 246.9136,
    "vmag": 5.42
  },
  {
    "name": 204771,
    "hr": 8228,
    "bf": "71    Cyg",
    "pname": "",
    "ra": 21.490816,
    "dec": 46.540585,
    "dist": 66.4452,
    "vmag": 5.22
  },
  {
    "name": 204783,
    "hr": 8229,
    "bf": "Xi  Gru",
    "pname": "",
    "ra": 21.534965,
    "dec": -41.17931,
    "dist": 142.8571,
    "vmag": 5.29
  },
  {
    "name": 204854,
    "hr": 8230,
    "bf": "6    PsA",
    "pname": "",
    "ra": 21.537381,
    "dec": -33.944623,
    "dist": 154.321,
    "vmag": 5.97
  },
  {
    "name": 204867,
    "hr": 8232,
    "bf": "22Bet Aqr",
    "pname": "Sadalsuud",
    "ra": 21.525982,
    "dec": -5.571172,
    "dist": 164.7446,
    "vmag": 2.9
  },
  {
    "name": 205021,
    "hr": 8238,
    "bf": "8Bet Cep",
    "pname": "",
    "ra": 21.477662,
    "dec": 70.560716,
    "dist": 210.084,
    "vmag": 3.23
  },
  {
    "name": 205289,
    "hr": 8245,
    "bf": "37    Cap",
    "pname": "",
    "ra": 21.580848,
    "dec": -20.084274,
    "dist": 27.1003,
    "vmag": 5.7
  },
  {
    "name": 205435,
    "hr": 8252,
    "bf": "73Rho Cyg",
    "pname": "",
    "ra": 21.56635,
    "dec": 45.591837,
    "dist": 37.8931,
    "vmag": 3.98
  },
  {
    "name": 205471,
    "hr": 8253,
    "bf": "8    PsA",
    "pname": "",
    "ra": 21.603046,
    "dec": -26.171516,
    "dist": 58.4454,
    "vmag": 5.73
  },
  {
    "name": 205478,
    "hr": 8254,
    "bf": "Nu  Oct",
    "pname": "",
    "ra": 21.691253,
    "dec": -77.390046,
    "dist": 21.1999,
    "vmag": 3.73
  },
  {
    "name": 205512,
    "hr": 8255,
    "bf": "72    Cyg",
    "pname": "",
    "ra": 21.579596,
    "dec": 38.534054,
    "dist": 70.9723,
    "vmag": 4.87
  },
  {
    "name": 205529,
    "hr": 8256,
    "bf": "7    PsA",
    "pname": "",
    "ra": 21.613553,
    "dec": -33.047896,
    "dist": 73.9098,
    "vmag": 6.1
  },
  {
    "name": 205637,
    "hr": 8260,
    "bf": "39Eps Cap",
    "pname": "",
    "ra": 21.618008,
    "dec": -19.466011,
    "dist": 323.6246,
    "vmag": 4.51
  },
  {
    "name": 205767,
    "hr": 8264,
    "bf": "23Xi  Aqr",
    "pname": "",
    "ra": 21.629197,
    "dec": -7.854201,
    "dist": 54.7645,
    "vmag": 4.68
  },
  {
    "name": 205811,
    "hr": 8265,
    "bf": "3    Peg",
    "pname": "",
    "ra": 21.628643,
    "dec": 6.629052,
    "dist": 145.3488,
    "vmag": 7.66
  },
  {
    "name": 205811,
    "hr": 8265,
    "bf": "3    Peg",
    "pname": "",
    "ra": 21.62879,
    "dec": 6.618391,
    "dist": 87.6424,
    "vmag": 6.19
  },
  {
    "name": 205835,
    "hr": 8266,
    "bf": "74    Cyg",
    "pname": "",
    "ra": 21.615827,
    "dec": 40.413521,
    "dist": 65.8328,
    "vmag": 5.04
  },
  {
    "name": 205852,
    "hr": 8267,
    "bf": "5    Peg",
    "pname": "",
    "ra": 21.629285,
    "dec": 19.318607,
    "dist": 98.4252,
    "vmag": 5.46
  },
  {
    "name": 205924,
    "hr": 8270,
    "bf": "4    Peg",
    "pname": "",
    "ra": 21.642205,
    "dec": 5.771742,
    "dist": 54.7046,
    "vmag": 5.66
  },
  {
    "name": 206067,
    "hr": 8277,
    "bf": "25    Aqr",
    "pname": "",
    "ra": 21.65924,
    "dec": 2.243558,
    "dist": 69.4444,
    "vmag": 5.1
  },
  {
    "name": 206088,
    "hr": 8278,
    "bf": "40Gam Cap",
    "pname": "",
    "ra": 21.668181,
    "dec": -16.662308,
    "dist": 48.1464,
    "vmag": 3.69
  },
  {
    "name": 206165,
    "hr": 8279,
    "bf": "9    Cep",
    "pname": "",
    "ra": 21.632007,
    "dec": 62.08194,
    "dist": 100000,
    "vmag": 4.76
  },
  {
    "name": 206240,
    "hr": 8280,
    "bf": "Lam Oct",
    "pname": "",
    "ra": 21.848413,
    "dec": -82.718904,
    "dist": 125.4705,
    "vmag": 5.27
  },
  {
    "name": 206301,
    "hr": 8283,
    "bf": "42    Cap",
    "pname": "",
    "ra": 21.692462,
    "dec": -14.047611,
    "dist": 33.2336,
    "vmag": 5.16
  },
  {
    "name": 206330,
    "hr": 8284,
    "bf": "75    Cyg",
    "pname": "",
    "ra": 21.669749,
    "dec": 43.273839,
    "dist": 123.7624,
    "vmag": 5.09
  },
  {
    "name": 206356,
    "hr": 8285,
    "bf": "41    Cap",
    "pname": "",
    "ra": 21.700192,
    "dec": -23.262858,
    "dist": 70.7214,
    "vmag": 5.24
  },
  {
    "name": 206445,
    "hr": 8287,
    "bf": "26    Aqr",
    "pname": "",
    "ra": 21.702809,
    "dec": 1.285253,
    "dist": 342.4658,
    "vmag": 5.66
  },
  {
    "name": 206453,
    "hr": 8288,
    "bf": "43Kap Cap",
    "pname": "",
    "ra": 21.710973,
    "dec": -18.866323,
    "dist": 90.1713,
    "vmag": 4.72
  },
  {
    "name": 206487,
    "hr": 8289,
    "bf": "7    Peg",
    "pname": "",
    "ra": 21.704292,
    "dec": 5.680137,
    "dist": 223.7136,
    "vmag": 5.3
  },
  {
    "name": 206538,
    "hr": 8291,
    "bf": "76    Cyg",
    "pname": "",
    "ra": 21.69285,
    "dec": 40.805222,
    "dist": 152.207,
    "vmag": 6.07
  },
  {
    "name": 206561,
    "hr": 8295,
    "bf": "44    Cap",
    "pname": "",
    "ra": 21.717888,
    "dec": -14.399709,
    "dist": 133.5113,
    "vmag": 5.88
  },
  {
    "name": 206644,
    "hr": 8300,
    "bf": "77    Cyg",
    "pname": "",
    "ra": 21.706376,
    "dec": 41.077019,
    "dist": 126.4223,
    "vmag": 5.73
  },
  {
    "name": 206672,
    "hr": 8301,
    "bf": "80Pi 1Cyg",
    "pname": "",
    "ra": 21.701573,
    "dec": 51.189622,
    "dist": 529.1005,
    "vmag": 4.69
  },
  {
    "name": 206677,
    "hr": 8302,
    "bf": "45    Cap",
    "pname": "",
    "ra": 21.733602,
    "dec": -14.74937,
    "dist": 52.9942,
    "vmag": 5.96
  },
  {
    "name": 206742,
    "hr": 8305,
    "bf": "9Iot PsA",
    "pname": "",
    "ra": 21.749113,
    "dec": -33.025781,
    "dist": 62.6174,
    "vmag": 4.35
  },
  {
    "name": 206774,
    "hr": 8307,
    "bf": "79    Cyg",
    "pname": "",
    "ra": 21.723791,
    "dec": 38.283589,
    "dist": 84.1751,
    "vmag": 5.69
  },
  {
    "name": 206778,
    "hr": 8308,
    "bf": "8Eps Peg",
    "pname": "Enif",
    "ra": 21.736433,
    "dec": 9.875011,
    "dist": 211.4165,
    "vmag": 2.38
  },
  {
    "name": 206826,
    "hr": 8309,
    "bf": "78Mu 1Cyg",
    "pname": "",
    "ra": 21.73571,
    "dec": 28.742632,
    "dist": 22.237,
    "vmag": 4.49
  },
  {
    "name": 206827,
    "hr": 8310,
    "bf": "78Mu 2Cyg",
    "pname": "",
    "ra": 21.735509,
    "dec": 28.743078,
    "dist": 22.4014,
    "vmag": 6.09
  },
  {
    "name": 206834,
    "hr": 8311,
    "bf": "46    Cap",
    "pname": "",
    "ra": 21.750071,
    "dec": -9.082428,
    "dist": 242.7184,
    "vmag": 5.1
  },
  {
    "name": 206859,
    "hr": 8313,
    "bf": "9    Peg",
    "pname": "",
    "ra": 21.74186,
    "dec": 17.350017,
    "dist": 284.0909,
    "vmag": 4.34
  },
  {
    "name": 206901,
    "hr": 8315,
    "bf": "10Kap Peg",
    "pname": "",
    "ra": 21.744092,
    "dec": 25.645036,
    "dist": 34.2231,
    "vmag": 4.14
  },
  {
    "name": 206936,
    "hr": 8316,
    "bf": "Mu  Cep",
    "pname": "",
    "ra": 21.725127,
    "dec": 58.780046,
    "dist": 100000,
    "vmag": 4.23
  },
  {
    "name": 206952,
    "hr": 8317,
    "bf": "11    Cep",
    "pname": "",
    "ra": 21.698652,
    "dec": 71.311417,
    "dist": 55.9284,
    "vmag": 4.55
  },
  {
    "name": 207005,
    "hr": 8318,
    "bf": "47    Cap",
    "pname": "",
    "ra": 21.771186,
    "dec": -9.275935,
    "dist": 363.6364,
    "vmag": 6
  },
  {
    "name": 207052,
    "hr": 8319,
    "bf": "48Lam Cap",
    "pname": "",
    "ra": 21.775583,
    "dec": -11.365954,
    "dist": 86.3558,
    "vmag": 5.57
  },
  {
    "name": 207089,
    "hr": 8321,
    "bf": "12    Peg",
    "pname": "",
    "ra": 21.767879,
    "dec": 22.94888,
    "dist": 427.3504,
    "vmag": 5.29
  },
  {
    "name": 207098,
    "hr": 8322,
    "bf": "49Del Cap",
    "pname": "",
    "ra": 21.784011,
    "dec": -16.127286,
    "dist": 11.8666,
    "vmag": 2.85
  },
  {
    "name": 207155,
    "hr": 8326,
    "bf": "10The PsA",
    "pname": "",
    "ra": 21.795598,
    "dec": -30.898304,
    "dist": 98.4252,
    "vmag": 5.02
  },
  {
    "name": 207203,
    "hr": 8328,
    "bf": "11    Peg",
    "pname": "",
    "ra": 21.787212,
    "dec": 2.686124,
    "dist": 174.5201,
    "vmag": 5.63
  },
  {
    "name": 207241,
    "hr": 8333,
    "bf": "Omi Ind",
    "pname": "",
    "ra": 21.846448,
    "dec": -69.629416,
    "dist": 166.6667,
    "vmag": 5.52
  },
  {
    "name": 207260,
    "hr": 8334,
    "bf": "10Nu  Cep",
    "pname": "",
    "ra": 21.75748,
    "dec": 61.120806,
    "dist": 100000,
    "vmag": 4.25
  },
  {
    "name": 207330,
    "hr": 8335,
    "bf": "81Pi 2Cyg",
    "pname": "",
    "ra": 21.779891,
    "dec": 49.30957,
    "dist": 338.9831,
    "vmag": 4.23
  },
  {
    "name": 207528,
    "hr": 8339,
    "bf": "12    Cep",
    "pname": "",
    "ra": 21.790362,
    "dec": 60.692689,
    "dist": 140.4494,
    "vmag": 5.53
  },
  {
    "name": 207650,
    "hr": 8343,
    "bf": "14    Peg",
    "pname": "",
    "ra": 21.830748,
    "dec": 30.174215,
    "dist": 84.246,
    "vmag": 5.07
  },
  {
    "name": 207652,
    "hr": 8344,
    "bf": "13    Peg",
    "pname": "",
    "ra": 21.835749,
    "dec": 17.285851,
    "dist": 33.4225,
    "vmag": 5.34
  },
  {
    "name": 207958,
    "hr": 8351,
    "bf": "51Mu  Cap",
    "pname": "",
    "ra": 21.888268,
    "dec": -13.551768,
    "dist": 26.617,
    "vmag": 5.08
  },
  {
    "name": 207971,
    "hr": 8353,
    "bf": "Gam Gru",
    "pname": "",
    "ra": 21.898808,
    "dec": -37.364852,
    "dist": 64.7249,
    "vmag": 3
  },
  {
    "name": 207978,
    "hr": 8354,
    "bf": "15    Peg",
    "pname": "",
    "ra": 21.874978,
    "dec": 28.793538,
    "dist": 27.4499,
    "vmag": 5.52
  },
  {
    "name": 208057,
    "hr": 8356,
    "bf": "16    Peg",
    "pname": "",
    "ra": 21.88438,
    "dec": 25.92514,
    "dist": 193.7984,
    "vmag": 5.09
  },
  {
    "name": 208149,
    "hr": 8362,
    "bf": "Pi  Ind",
    "pname": "",
    "ra": 21.937235,
    "dec": -57.899591,
    "dist": 142.8571,
    "vmag": 6.17
  },
  {
    "name": 208450,
    "hr": 8368,
    "bf": "Del Ind",
    "pname": "",
    "ra": 21.965293,
    "dec": -54.992575,
    "dist": 57.6701,
    "vmag": 4.4
  },
  {
    "name": 208496,
    "hr": 8369,
    "bf": "Kap1Ind",
    "pname": "",
    "ra": 21.975021,
    "dec": -59.01214,
    "dist": 67.1141,
    "vmag": 6.13
  },
  {
    "name": 208501,
    "hr": 8371,
    "bf": "13    Cep",
    "pname": "",
    "ra": 21.914766,
    "dec": 56.611227,
    "dist": 100000,
    "vmag": 5.74
  },
  {
    "name": 208565,
    "hr": 8373,
    "bf": "17    Peg",
    "pname": "",
    "ra": 21.948992,
    "dec": 12.076492,
    "dist": 122.8501,
    "vmag": 5.54
  },
  {
    "name": 209008,
    "hr": 8385,
    "bf": "18    Peg",
    "pname": "",
    "ra": 22.002202,
    "dec": 6.717437,
    "dist": 328.9474,
    "vmag": 6
  },
  {
    "name": 209014,
    "hr": 8386,
    "bf": "12Eta PsA",
    "pname": "",
    "ra": 22.013951,
    "dec": -28.453736,
    "dist": 250.6266,
    "vmag": 5.43
  },
  {
    "name": 209100,
    "hr": 8387,
    "bf": "Eps Ind",
    "pname": "",
    "ra": 22.055486,
    "dec": -56.785977,
    "dist": 3.6224,
    "vmag": 4.69
  },
  {
    "name": 209128,
    "hr": 8390,
    "bf": "28    Aqr",
    "pname": "",
    "ra": 22.01806,
    "dec": 0.604715,
    "dist": 219.2982,
    "vmag": 5.6
  },
  {
    "name": 209166,
    "hr": 8392,
    "bf": "20    Peg",
    "pname": "",
    "ra": 22.018152,
    "dec": 13.119823,
    "dist": 77.2201,
    "vmag": 5.61
  },
  {
    "name": 209167,
    "hr": 8393,
    "bf": "19    Peg",
    "pname": "",
    "ra": 22.019232,
    "dec": 8.257164,
    "dist": 165.8375,
    "vmag": 5.65
  },
  {
    "name": 209278,
    "hr": 8396,
    "bf": "29    Aqr",
    "pname": "",
    "ra": 22.040625,
    "dec": -16.964836,
    "dist": 270.2703,
    "vmag": 6.39
  },
  {
    "name": 209369,
    "hr": 8400,
    "bf": "16    Cep",
    "pname": "",
    "ra": 21.987518,
    "dec": 73.179896,
    "dist": 36.7242,
    "vmag": 5.04
  },
  {
    "name": 209396,
    "hr": 8401,
    "bf": "30    Aqr",
    "pname": "",
    "ra": 22.054572,
    "dec": -6.522406,
    "dist": 93.1099,
    "vmag": 5.55
  },
  {
    "name": 209409,
    "hr": 8402,
    "bf": "31Omi Aqr",
    "pname": "",
    "ra": 22.055234,
    "dec": -2.155363,
    "dist": 133.5113,
    "vmag": 4.74
  },
  {
    "name": 209459,
    "hr": 8404,
    "bf": "21    Peg",
    "pname": "",
    "ra": 22.055287,
    "dec": 11.386552,
    "dist": 193.0502,
    "vmag": 5.83
  },
  {
    "name": 209476,
    "hr": 8405,
    "bf": "13    PsA",
    "pname": "",
    "ra": 22.073288,
    "dec": -29.91653,
    "dist": 636.9427,
    "vmag": 6.45
  },
  {
    "name": 209481,
    "hr": 8406,
    "bf": "14    Cep",
    "pname": "",
    "ra": 22.034604,
    "dec": 58.000366,
    "dist": 934.5794,
    "vmag": 5.55
  },
  {
    "name": 209529,
    "hr": 8409,
    "bf": "Kap2Ind",
    "pname": "",
    "ra": 22.097496,
    "dec": -59.636072,
    "dist": 150.6024,
    "vmag": 5.62
  },
  {
    "name": 209625,
    "hr": 8410,
    "bf": "32    Aqr",
    "pname": "",
    "ra": 22.079839,
    "dec": -0.906343,
    "dist": 68.1199,
    "vmag": 5.29
  },
  {
    "name": 209688,
    "hr": 8411,
    "bf": "Lam Gru",
    "pname": "",
    "ra": 22.101914,
    "dec": -39.543353,
    "dist": 74.239,
    "vmag": 4.47
  },
  {
    "name": 209747,
    "hr": 8413,
    "bf": "22Nu  Peg",
    "pname": "",
    "ra": 22.094653,
    "dec": 5.05853,
    "dist": 83.2639,
    "vmag": 4.86
  },
  {
    "name": 209750,
    "hr": 8414,
    "bf": "34Alp Aqr",
    "pname": "Sadalmelik",
    "ra": 22.096399,
    "dec": -0.319851,
    "dist": 160.5136,
    "vmag": 2.95
  },
  {
    "name": 209772,
    "hr": 8416,
    "bf": "18    Cep",
    "pname": "",
    "ra": 22.064709,
    "dec": 63.11992,
    "dist": 130.039,
    "vmag": 5.26
  },
  {
    "name": 209790,
    "hr": 8417,
    "bf": "17Xi  Cep",
    "pname": "",
    "ra": 22.063135,
    "dec": 64.627971,
    "dist": 29.5946,
    "vmag": 4.26
  },
  {
    "name": 209819,
    "hr": 8418,
    "bf": "33Iot Aqr",
    "pname": "",
    "ra": 22.107286,
    "dec": -13.869679,
    "dist": 53.7057,
    "vmag": 4.29
  },
  {
    "name": 209833,
    "hr": 8419,
    "bf": "23    Peg",
    "pname": "",
    "ra": 22.092964,
    "dec": 28.963981,
    "dist": 106.383,
    "vmag": 5.69
  },
  {
    "name": 209952,
    "hr": 8425,
    "bf": "Alp Gru",
    "pname": "Alnair",
    "ra": 22.137209,
    "dec": -46.960975,
    "dist": 30.9693,
    "vmag": 1.73
  },
  {
    "name": 209960,
    "hr": 8426,
    "bf": "20    Cep",
    "pname": "",
    "ra": 22.083469,
    "dec": 62.785671,
    "dist": 92.9368,
    "vmag": 5.27
  },
  {
    "name": 209975,
    "hr": 8428,
    "bf": "19    Cep",
    "pname": "",
    "ra": 22.085775,
    "dec": 62.279814,
    "dist": 632.9114,
    "vmag": 5.07
  },
  {
    "name": 210027,
    "hr": 8430,
    "bf": "24Iot Peg",
    "pname": "",
    "ra": 22.116847,
    "dec": 25.345112,
    "dist": 11.7261,
    "vmag": 3.77
  },
  {
    "name": 210049,
    "hr": 8431,
    "bf": "14Mu  PsA",
    "pname": "",
    "ra": 22.139722,
    "dec": -32.988468,
    "dist": 41.6493,
    "vmag": 4.5
  },
  {
    "name": 210066,
    "hr": 8433,
    "bf": "Ups PsA",
    "pname": "",
    "ra": 22.140537,
    "dec": -34.043841,
    "dist": 130.039,
    "vmag": 4.99
  },
  {
    "name": 210129,
    "hr": 8438,
    "bf": "25    Peg",
    "pname": "",
    "ra": 22.130641,
    "dec": 21.702926,
    "dist": 186.5672,
    "vmag": 5.79
  },
  {
    "name": 210191,
    "hr": 8439,
    "bf": "35    Aqr",
    "pname": "",
    "ra": 22.14972,
    "dec": -18.519592,
    "dist": 714.2857,
    "vmag": 5.8
  },
  {
    "name": 210302,
    "hr": 8447,
    "bf": "15Tau PsA",
    "pname": "",
    "ra": 22.169093,
    "dec": -32.548407,
    "dist": 18.2782,
    "vmag": 4.94
  },
  {
    "name": 210354,
    "hr": 8449,
    "bf": "27Pi 1Peg",
    "pname": "",
    "ra": 22.153789,
    "dec": 33.172337,
    "dist": 88.4956,
    "vmag": 5.58
  },
  {
    "name": 210418,
    "hr": 8450,
    "bf": "26The Peg",
    "pname": "",
    "ra": 22.169996,
    "dec": 6.197865,
    "dist": 28.2965,
    "vmag": 3.52
  },
  {
    "name": 210424,
    "hr": 8452,
    "bf": "38    Aqr",
    "pname": "",
    "ra": 22.177078,
    "dec": -11.564939,
    "dist": 137.931,
    "vmag": 5.43
  },
  {
    "name": 210459,
    "hr": 8454,
    "bf": "29Pi 2Peg",
    "pname": "",
    "ra": 22.166457,
    "dec": 33.178224,
    "dist": 80.6452,
    "vmag": 4.28
  },
  {
    "name": 210516,
    "hr": 8459,
    "bf": "28    Peg",
    "pname": "",
    "ra": 22.175051,
    "dec": 20.977984,
    "dist": 208.3333,
    "vmag": 6.45
  },
  {
    "name": 210705,
    "hr": 8462,
    "bf": "39    Aqr",
    "pname": "",
    "ra": 22.207155,
    "dec": -14.193957,
    "dist": 42.0521,
    "vmag": 6.04
  },
  {
    "name": 210745,
    "hr": 8465,
    "bf": "21Zet Cep",
    "pname": "",
    "ra": 22.180908,
    "dec": 58.201261,
    "dist": 256.4103,
    "vmag": 3.39
  },
  {
    "name": 210807,
    "hr": 8468,
    "bf": "24    Cep",
    "pname": "",
    "ra": 22.163441,
    "dec": 72.341207,
    "dist": 120.919,
    "vmag": 4.79
  },
  {
    "name": 210839,
    "hr": 8469,
    "bf": "22Lam Cep",
    "pname": "",
    "ra": 22.191828,
    "dec": 59.414488,
    "dist": 606.0606,
    "vmag": 5.05
  },
  {
    "name": 210853,
    "hr": 8471,
    "bf": "Psi Oct",
    "pname": "",
    "ra": 22.297409,
    "dec": -77.511553,
    "dist": 38.4911,
    "vmag": 5.49
  },
  {
    "name": 210934,
    "hr": 8478,
    "bf": "16Lam PsA",
    "pname": "",
    "ra": 22.238542,
    "dec": -27.766908,
    "dist": 153.6098,
    "vmag": 5.45
  },
  {
    "name": 210960,
    "hr": 8480,
    "bf": "41    Aqr",
    "pname": "",
    "ra": 22.238342,
    "dec": -21.074566,
    "dist": 71.582,
    "vmag": 5.33
  },
  {
    "name": 210967,
    "hr": 8481,
    "bf": "Eps Oct",
    "pname": "",
    "ra": 22.333754,
    "dec": -80.439747,
    "dist": 89.1266,
    "vmag": 5.09
  },
  {
    "name": 211088,
    "hr": 8486,
    "bf": "Mu 1Gru",
    "pname": "",
    "ra": 22.260253,
    "dec": -41.3467,
    "dist": 84.246,
    "vmag": 4.79
  },
  {
    "name": 211202,
    "hr": 8488,
    "bf": "Mu 2Gru",
    "pname": "",
    "ra": 22.274045,
    "dec": -41.627225,
    "dist": 81.367,
    "vmag": 5.11
  },
  {
    "name": 211336,
    "hr": 8494,
    "bf": "23Eps Cep",
    "pname": "",
    "ra": 22.250544,
    "dec": 57.043587,
    "dist": 26.1986,
    "vmag": 4.18
  },
  {
    "name": 211361,
    "hr": 8496,
    "bf": "42    Aqr",
    "pname": "",
    "ra": 22.280012,
    "dec": -12.831436,
    "dist": 179.8561,
    "vmag": 5.34
  },
  {
    "name": 211388,
    "hr": 8498,
    "bf": "1    Lac",
    "pname": "",
    "ra": 22.26616,
    "dec": 37.748737,
    "dist": 190.4762,
    "vmag": 4.14
  },
  {
    "name": 211391,
    "hr": 8499,
    "bf": "43The Aqr",
    "pname": "",
    "ra": 22.280565,
    "dec": -7.78329,
    "dist": 57.4713,
    "vmag": 4.17
  },
  {
    "name": 211416,
    "hr": 8502,
    "bf": "Alp Tuc",
    "pname": "",
    "ra": 22.308371,
    "dec": -60.259587,
    "dist": 61.237,
    "vmag": 2.87
  },
  {
    "name": 211434,
    "hr": 8504,
    "bf": "44    Aqr",
    "pname": "",
    "ra": 22.285139,
    "dec": -5.387164,
    "dist": 94.7867,
    "vmag": 5.75
  },
  {
    "name": 211539,
    "hr": 8505,
    "bf": "Ups Oct",
    "pname": "",
    "ra": 22.527168,
    "dec": -85.967253,
    "dist": 99.4036,
    "vmag": 5.76
  },
  {
    "name": 211676,
    "hr": 8508,
    "bf": "45    Aqr",
    "pname": "",
    "ra": 22.316872,
    "dec": -13.304995,
    "dist": 113.3787,
    "vmag": 5.96
  },
  {
    "name": 211833,
    "hr": 8511,
    "bf": "25    Cep",
    "pname": "",
    "ra": 22.303505,
    "dec": 62.804388,
    "dist": 282.4859,
    "vmag": 5.75
  },
  {
    "name": 211838,
    "hr": 8512,
    "bf": "46Rho Aqr",
    "pname": "",
    "ra": 22.336643,
    "dec": -7.821102,
    "dist": 270.2703,
    "vmag": 5.35
  },
  {
    "name": 211924,
    "hr": 8513,
    "bf": "30    Peg",
    "pname": "",
    "ra": 22.340994,
    "dec": 5.789498,
    "dist": 390.625,
    "vmag": 5.37
  },
  {
    "name": 211998,
    "hr": 8515,
    "bf": "Nu  Ind",
    "pname": "",
    "ra": 22.409764,
    "dec": -72.255412,
    "dist": 28.7026,
    "vmag": 5.28
  },
  {
    "name": 212010,
    "hr": 8516,
    "bf": "47    Aqr",
    "pname": "",
    "ra": 22.35988,
    "dec": -21.59823,
    "dist": 52.4384,
    "vmag": 5.12
  },
  {
    "name": 212061,
    "hr": 8518,
    "bf": "48Gam Aqr",
    "pname": "",
    "ra": 22.360938,
    "dec": -1.387331,
    "dist": 50.2008,
    "vmag": 3.86
  },
  {
    "name": 212076,
    "hr": 8520,
    "bf": "31    Peg",
    "pname": "",
    "ra": 22.358632,
    "dec": 12.205186,
    "dist": 497.5124,
    "vmag": 4.82
  },
  {
    "name": 212087,
    "hr": 8521,
    "bf": "Pi 1Gru",
    "pname": "",
    "ra": 22.378944,
    "dec": -45.947944,
    "dist": 163.1321,
    "vmag": 6.42
  },
  {
    "name": 212097,
    "hr": 8522,
    "bf": "32    Peg",
    "pname": "",
    "ra": 22.355372,
    "dec": 28.330529,
    "dist": 213.2196,
    "vmag": 4.78
  },
  {
    "name": 212120,
    "hr": 8523,
    "bf": "2    Lac",
    "pname": "",
    "ra": 22.350428,
    "dec": 46.536569,
    "dist": 170.068,
    "vmag": 4.55
  },
  {
    "name": 212132,
    "hr": 8524,
    "bf": "Pi 2Gru",
    "pname": "",
    "ra": 22.385535,
    "dec": -45.928488,
    "dist": 40,
    "vmag": 5.62
  },
  {
    "name": 212271,
    "hr": 8529,
    "bf": "49    Aqr",
    "pname": "",
    "ra": 22.391901,
    "dec": -24.762661,
    "dist": 80.3213,
    "vmag": 5.53
  },
  {
    "name": 212395,
    "hr": 8532,
    "bf": "33    Peg",
    "pname": "",
    "ra": 22.39432,
    "dec": 20.84823,
    "dist": 33.7041,
    "vmag": 6.2
  },
  {
    "name": 212404,
    "hr": 8533,
    "bf": "51    Aqr",
    "pname": "",
    "ra": 22.401912,
    "dec": -4.83702,
    "dist": 124.3781,
    "vmag": 5.79
  },
  {
    "name": 212430,
    "hr": 8534,
    "bf": "50    Aqr",
    "pname": "",
    "ra": 22.407517,
    "dec": -13.529369,
    "dist": 140.4494,
    "vmag": 5.76
  },
  {
    "name": 212496,
    "hr": 8538,
    "bf": "3Bet Lac",
    "pname": "",
    "ra": 22.392675,
    "dec": 52.229046,
    "dist": 52.1105,
    "vmag": 4.42
  },
  {
    "name": 212571,
    "hr": 8539,
    "bf": "52Pi  Aqr",
    "pname": "",
    "ra": 22.421284,
    "dec": 1.377401,
    "dist": 239.8082,
    "vmag": 4.8
  },
  {
    "name": 212581,
    "hr": 8540,
    "bf": "Del Tuc",
    "pname": "",
    "ra": 22.455531,
    "dec": -64.966354,
    "dist": 76.9231,
    "vmag": 4.51
  },
  {
    "name": 212593,
    "hr": 8541,
    "bf": "4    Lac",
    "pname": "",
    "ra": 22.408609,
    "dec": 49.476392,
    "dist": 689.6552,
    "vmag": 4.55
  },
  {
    "name": 212697,
    "hr": 8544,
    "bf": "53    Aqr",
    "pname": "",
    "ra": 22.442853,
    "dec": -16.742138,
    "dist": 20.202,
    "vmag": 5.55
  },
  {
    "name": 212698,
    "hr": 8545,
    "bf": "53    Aqr",
    "pname": "",
    "ra": 22.442972,
    "dec": -16.742424,
    "dist": 20.0803,
    "vmag": 6.21
  },
  {
    "name": 212754,
    "hr": 8548,
    "bf": "34    Peg",
    "pname": "",
    "ra": 22.443718,
    "dec": 4.393766,
    "dist": 38.1534,
    "vmag": 5.76
  },
  {
    "name": 212943,
    "hr": 8551,
    "bf": "35    Peg",
    "pname": "",
    "ra": 22.464312,
    "dec": 4.695664,
    "dist": 45.4752,
    "vmag": 4.78
  },
  {
    "name": 212953,
    "hr": 8552,
    "bf": "Nu  Gru",
    "pname": "",
    "ra": 22.477557,
    "dec": -39.131792,
    "dist": 87.4126,
    "vmag": 5.47
  },
  {
    "name": 213009,
    "hr": 8556,
    "bf": "Del1Gru",
    "pname": "",
    "ra": 22.487825,
    "dec": -43.495565,
    "dist": 94.8767,
    "vmag": 3.97
  },
  {
    "name": 213051,
    "hr": 8558,
    "bf": "55Zet1Aqr",
    "pname": "",
    "ra": 22.480531,
    "dec": -0.019972,
    "dist": 28.169,
    "vmag": 3.65
  },
  {
    "name": 213080,
    "hr": 8560,
    "bf": "Del2Gru",
    "pname": "",
    "ra": 22.495955,
    "dec": -43.749224,
    "dist": 101.2146,
    "vmag": 4.12
  },
  {
    "name": 213087,
    "hr": 8561,
    "bf": "26    Cep",
    "pname": "",
    "ra": 22.451475,
    "dec": 65.13227,
    "dist": 100000,
    "vmag": 5.52
  },
  {
    "name": 213119,
    "hr": 8562,
    "bf": "36    Peg",
    "pname": "",
    "ra": 22.485551,
    "dec": 9.129034,
    "dist": 182.8154,
    "vmag": 5.6
  },
  {
    "name": 213235,
    "hr": 8566,
    "bf": "37    Peg",
    "pname": "",
    "ra": 22.499427,
    "dec": 4.43169,
    "dist": 51.8672,
    "vmag": 5.51
  },
  {
    "name": 213236,
    "hr": 8567,
    "bf": "56    Aqr",
    "pname": "",
    "ra": 22.504819,
    "dec": -14.585734,
    "dist": 193.4236,
    "vmag": 6.36
  },
  {
    "name": 213296,
    "hr": 8570,
    "bf": "Zet PsA",
    "pname": "",
    "ra": 22.514936,
    "dec": -26.073752,
    "dist": 132.4503,
    "vmag": 6.43
  },
  {
    "name": 213306,
    "hr": 8571,
    "bf": "27Del Cep",
    "pname": "",
    "ra": 22.486183,
    "dec": 58.415198,
    "dist": 265.252,
    "vmag": 4.07
  },
  {
    "name": 213310,
    "hr": 8572,
    "bf": "5    Lac",
    "pname": "",
    "ra": 22.492173,
    "dec": 47.706887,
    "dist": 505.0505,
    "vmag": 4.34
  },
  {
    "name": 213320,
    "hr": 8573,
    "bf": "57Sig Aqr",
    "pname": "",
    "ra": 22.510782,
    "dec": -10.67795,
    "dist": 88.8099,
    "vmag": 4.82
  },
  {
    "name": 213323,
    "hr": 8574,
    "bf": "38    Peg",
    "pname": "",
    "ra": 22.500503,
    "dec": 32.572638,
    "dist": 110.4972,
    "vmag": 5.64
  },
  {
    "name": 213398,
    "hr": 8576,
    "bf": "17Bet PsA",
    "pname": "",
    "ra": 22.52509,
    "dec": -32.346073,
    "dist": 43.7828,
    "vmag": 4.29
  },
  {
    "name": 213403,
    "hr": 8578,
    "bf": "28Rho1Cep",
    "pname": "",
    "ra": 22.445122,
    "dec": 78.785853,
    "dist": 63.1712,
    "vmag": 5.83
  },
  {
    "name": 213420,
    "hr": 8579,
    "bf": "6    Lac",
    "pname": "",
    "ra": 22.508128,
    "dec": 43.123376,
    "dist": 526.3158,
    "vmag": 4.52
  },
  {
    "name": 213442,
    "hr": 8582,
    "bf": "Nu  Tuc",
    "pname": "",
    "ra": 22.55001,
    "dec": -61.982122,
    "dist": 88.968,
    "vmag": 4.91
  },
  {
    "name": 213464,
    "hr": 8583,
    "bf": "58    Aqr",
    "pname": "",
    "ra": 22.528144,
    "dec": -10.905561,
    "dist": 71.582,
    "vmag": 6.39
  },
  {
    "name": 213558,
    "hr": 8585,
    "bf": "7Alp Lac",
    "pname": "",
    "ra": 22.521515,
    "dec": 50.282491,
    "dist": 31.4564,
    "vmag": 3.76
  },
  {
    "name": 213617,
    "hr": 8586,
    "bf": "39    Peg",
    "pname": "",
    "ra": 22.543187,
    "dec": 20.230019,
    "dist": 50.2513,
    "vmag": 6.43
  },
  {
    "name": 213789,
    "hr": 8590,
    "bf": "60    Aqr",
    "pname": "",
    "ra": 22.567476,
    "dec": -1.57427,
    "dist": 106.6098,
    "vmag": 5.88
  },
  {
    "name": 213798,
    "hr": 8591,
    "bf": "29Rho2Cep",
    "pname": "",
    "ra": 22.498047,
    "dec": 78.824285,
    "dist": 75.1315,
    "vmag": 5.45
  },
  {
    "name": 213845,
    "hr": 8592,
    "bf": "59Ups Aqr",
    "pname": "",
    "ra": 22.57823,
    "dec": -20.708216,
    "dist": 22.6809,
    "vmag": 5.21
  },
  {
    "name": 213998,
    "hr": 8597,
    "bf": "62Eta Aqr",
    "pname": "",
    "ra": 22.589272,
    "dec": -0.117498,
    "dist": 51.4668,
    "vmag": 4.04
  },
  {
    "name": 214085,
    "hr": 8600,
    "bf": "Sig1Gru",
    "pname": "",
    "ra": 22.608139,
    "dec": -40.582689,
    "dist": 68.306,
    "vmag": 6.28
  },
  {
    "name": 214150,
    "hr": 8602,
    "bf": "Sig2Gru",
    "pname": "",
    "ra": 22.616346,
    "dec": -40.591034,
    "dist": 65.8328,
    "vmag": 5.85
  },
  {
    "name": 214168,
    "hr": 8603,
    "bf": "8    Lac",
    "pname": "",
    "ra": 22.597804,
    "dec": 39.628146,
    "dist": 100000,
    "vmag": 6.6
  },
  {
    "name": 214376,
    "hr": 8610,
    "bf": "63Kap Aqr",
    "pname": "",
    "ra": 22.629273,
    "dec": -4.228056,
    "dist": 65.5738,
    "vmag": 5.04
  },
  {
    "name": 214454,
    "hr": 8613,
    "bf": "9    Lac",
    "pname": "",
    "ra": 22.622899,
    "dec": 51.545123,
    "dist": 52.6316,
    "vmag": 4.64
  },
  {
    "name": 214470,
    "hr": 8615,
    "bf": "31    Cep",
    "pname": "",
    "ra": 22.596077,
    "dec": 73.643188,
    "dist": 54.8847,
    "vmag": 5.08
  },
  {
    "name": 214567,
    "hr": 8618,
    "bf": "40    Peg",
    "pname": "",
    "ra": 22.647942,
    "dec": 19.522263,
    "dist": 114.4165,
    "vmag": 5.84
  },
  {
    "name": 214680,
    "hr": 8622,
    "bf": "10    Lac",
    "pname": "",
    "ra": 22.654355,
    "dec": 39.050269,
    "dist": 529.1005,
    "vmag": 4.89
  },
  {
    "name": 214698,
    "hr": 8624,
    "bf": "41    Peg",
    "pname": "",
    "ra": 22.663059,
    "dec": 19.681125,
    "dist": 205.7613,
    "vmag": 6.33
  },
  {
    "name": 214734,
    "hr": 8627,
    "bf": "30    Cep",
    "pname": "",
    "ra": 22.644182,
    "dec": 63.584472,
    "dist": 88.0282,
    "vmag": 5.19
  },
  {
    "name": 214748,
    "hr": 8628,
    "bf": "18Eps PsA",
    "pname": "",
    "ra": 22.677594,
    "dec": -27.043617,
    "dist": 149.2537,
    "vmag": 4.18
  },
  {
    "name": 214846,
    "hr": 8630,
    "bf": "Bet Oct",
    "pname": "",
    "ra": 22.767692,
    "dec": -81.381615,
    "dist": 45.7666,
    "vmag": 4.13
  },
  {
    "name": 214868,
    "hr": 8632,
    "bf": "11    Lac",
    "pname": "",
    "ra": 22.675233,
    "dec": 44.276305,
    "dist": 102.0408,
    "vmag": 4.5
  },
  {
    "name": 214923,
    "hr": 8634,
    "bf": "42Zet Peg",
    "pname": "",
    "ra": 22.691033,
    "dec": 10.831364,
    "dist": 62.6566,
    "vmag": 3.41
  },
  {
    "name": 214952,
    "hr": 8636,
    "bf": "Bet Gru",
    "pname": "",
    "ra": 22.711115,
    "dec": -46.884577,
    "dist": 54.2594,
    "vmag": 2.07
  },
  {
    "name": 214966,
    "hr": 8637,
    "bf": "19    PsA",
    "pname": "",
    "ra": 22.706135,
    "dec": -29.361046,
    "dist": 211.4165,
    "vmag": 6.12
  },
  {
    "name": 214993,
    "hr": 8640,
    "bf": "12    Lac",
    "pname": "",
    "ra": 22.691292,
    "dec": 40.225449,
    "dist": 411.5226,
    "vmag": 5.25
  },
  {
    "name": 214994,
    "hr": 8641,
    "bf": "43Omi Peg",
    "pname": "",
    "ra": 22.695947,
    "dec": 29.307641,
    "dist": 91.5751,
    "vmag": 4.8
  },
  {
    "name": 215104,
    "hr": 8644,
    "bf": "Rho Gru",
    "pname": "",
    "ra": 22.724993,
    "dec": -41.414347,
    "dist": 70.6215,
    "vmag": 4.84
  },
  {
    "name": 215143,
    "hr": 8647,
    "bf": "67    Aqr",
    "pname": "",
    "ra": 22.720629,
    "dec": -6.962937,
    "dist": 114.1553,
    "vmag": 6.4
  },
  {
    "name": 215167,
    "hr": 8649,
    "bf": "66    Aqr",
    "pname": "",
    "ra": 22.726454,
    "dec": -18.830375,
    "dist": 132.8021,
    "vmag": 4.68
  },
  {
    "name": 215182,
    "hr": 8650,
    "bf": "44Eta Peg",
    "pname": "Matar",
    "ra": 22.716704,
    "dec": 30.221245,
    "dist": 65.703,
    "vmag": 2.93
  },
  {
    "name": 215369,
    "hr": 8655,
    "bf": "Eta Gru",
    "pname": "",
    "ra": 22.760519,
    "dec": -53.500121,
    "dist": 127.2265,
    "vmag": 4.84
  },
  {
    "name": 215373,
    "hr": 8656,
    "bf": "13    Lac",
    "pname": "",
    "ra": 22.734856,
    "dec": 41.819235,
    "dist": 78.6782,
    "vmag": 5.11
  },
  {
    "name": 215510,
    "hr": 8660,
    "bf": "45    Peg",
    "pname": "",
    "ra": 22.757827,
    "dec": 19.366561,
    "dist": 113.3787,
    "vmag": 6.27
  },
  {
    "name": 215573,
    "hr": 8663,
    "bf": "Xi  Oct",
    "pname": "",
    "ra": 22.839655,
    "dec": -80.123845,
    "dist": 151.0574,
    "vmag": 5.32
  },
  {
    "name": 215648,
    "hr": 8665,
    "bf": "46Xi  Peg",
    "pname": "",
    "ra": 22.778216,
    "dec": 12.172888,
    "dist": 16.2973,
    "vmag": 4.2
  },
  {
    "name": 215665,
    "hr": 8667,
    "bf": "47Lam Peg",
    "pname": "",
    "ra": 22.775521,
    "dec": 23.565654,
    "dist": 111.9821,
    "vmag": 3.97
  },
  {
    "name": 215721,
    "hr": 8670,
    "bf": "68    Aqr",
    "pname": "",
    "ra": 22.792535,
    "dec": -19.613375,
    "dist": 77.8816,
    "vmag": 5.24
  },
  {
    "name": 215766,
    "hr": 8673,
    "bf": "69Tau1Aqr",
    "pname": "",
    "ra": 22.795213,
    "dec": -14.056428,
    "dist": 97.371,
    "vmag": 5.68
  },
  {
    "name": 215789,
    "hr": 8675,
    "bf": "Eps Gru",
    "pname": "",
    "ra": 22.809239,
    "dec": -51.316864,
    "dist": 39.5257,
    "vmag": 3.49
  },
  {
    "name": 215874,
    "hr": 8676,
    "bf": "70    Aqr",
    "pname": "",
    "ra": 22.808391,
    "dec": -10.555478,
    "dist": 111.6071,
    "vmag": 6.19
  },
  {
    "name": 216032,
    "hr": 8679,
    "bf": "71Tau2Aqr",
    "pname": "",
    "ra": 22.826528,
    "dec": -13.592632,
    "dist": 97.371,
    "vmag": 4.05
  },
  {
    "name": 216131,
    "hr": 8684,
    "bf": "48Mu  Peg",
    "pname": "",
    "ra": 22.833385,
    "dec": 24.601579,
    "dist": 32.5309,
    "vmag": 3.51
  },
  {
    "name": 216200,
    "hr": 8690,
    "bf": "14    Lac",
    "pname": "",
    "ra": 22.839381,
    "dec": 41.953394,
    "dist": 348.4321,
    "vmag": 5.91
  },
  {
    "name": 216210,
    "hr": 8693,
    "bf": "21    PsA",
    "pname": "",
    "ra": 22.855817,
    "dec": -29.536309,
    "dist": 98.912,
    "vmag": 5.99
  },
  {
    "name": 216228,
    "hr": 8694,
    "bf": "32Iot Cep",
    "pname": "",
    "ra": 22.82802,
    "dec": 66.200408,
    "dist": 35.3482,
    "vmag": 3.5
  },
  {
    "name": 216336,
    "hr": 8695,
    "bf": "22Gam PsA",
    "pname": "",
    "ra": 22.875427,
    "dec": -32.875504,
    "dist": 66.0502,
    "vmag": 4.46
  },
  {
    "name": 216385,
    "hr": 8697,
    "bf": "49Sig Peg",
    "pname": "",
    "ra": 22.873353,
    "dec": 9.835664,
    "dist": 27.2777,
    "vmag": 5.16
  },
  {
    "name": 216386,
    "hr": 8698,
    "bf": "73Lam Aqr",
    "pname": "",
    "ra": 22.87691,
    "dec": -7.579599,
    "dist": 118.0638,
    "vmag": 3.73
  },
  {
    "name": 216397,
    "hr": 8699,
    "bf": "15    Lac",
    "pname": "",
    "ra": 22.867225,
    "dec": 43.312417,
    "dist": 99.7009,
    "vmag": 4.95
  },
  {
    "name": 216435,
    "hr": 8700,
    "bf": "Tau1Gru",
    "pname": "",
    "ra": 22.893852,
    "dec": -48.598286,
    "dist": 32.6158,
    "vmag": 6.03
  },
  {
    "name": 216437,
    "hr": 8701,
    "bf": "Rho Ind",
    "pname": "",
    "ra": 22.910981,
    "dec": -70.073709,
    "dist": 26.7451,
    "vmag": 6.04
  },
  {
    "name": 216494,
    "hr": 8704,
    "bf": "74    Aqr",
    "pname": "",
    "ra": 22.891307,
    "dec": -11.616514,
    "dist": 253.1646,
    "vmag": 5.8
  },
  {
    "name": 216627,
    "hr": 8709,
    "bf": "76Del Aqr",
    "pname": "",
    "ra": 22.910837,
    "dec": -15.82082,
    "dist": 49.2368,
    "vmag": 3.27
  },
  {
    "name": 216637,
    "hr": 8710,
    "bf": "78    Aqr",
    "pname": "",
    "ra": 22.909478,
    "dec": -7.204626,
    "dist": 206.1856,
    "vmag": 6.2
  },
  {
    "name": 216640,
    "hr": 8711,
    "bf": "77    Aqr",
    "pname": "",
    "ra": 22.912632,
    "dec": -16.271957,
    "dist": 41.1862,
    "vmag": 5.53
  },
  {
    "name": 216701,
    "hr": 8715,
    "bf": "1    Psc",
    "pname": "",
    "ra": 22.916524,
    "dec": 1.064904,
    "dist": 108.2251,
    "vmag": 6.11
  },
  {
    "name": 216735,
    "hr": 8717,
    "bf": "50Rho Peg",
    "pname": "",
    "ra": 22.920464,
    "dec": 8.816166,
    "dist": 95.6938,
    "vmag": 4.91
  },
  {
    "name": 216763,
    "hr": 8720,
    "bf": "23Del PsA",
    "pname": "",
    "ra": 22.932472,
    "dec": -32.539628,
    "dist": 47.259,
    "vmag": 4.2
  },
  {
    "name": 216823,
    "hr": 8722,
    "bf": "Tau3Gru",
    "pname": "",
    "ra": 22.946613,
    "dec": -47.969221,
    "dist": 74.6269,
    "vmag": 5.72
  },
  {
    "name": 216916,
    "hr": 8725,
    "bf": "16    Lac",
    "pname": "",
    "ra": 22.939897,
    "dec": 41.603876,
    "dist": 390.625,
    "vmag": 5.6
  },
  {
    "name": 216956,
    "hr": 8728,
    "bf": "24Alp PsA",
    "pname": "Fomalhaut",
    "ra": 22.960838,
    "dec": -29.622236,
    "dist": 7.7036,
    "vmag": 1.17
  },
  {
    "name": 217014,
    "hr": 8729,
    "bf": "51    Peg",
    "pname": "",
    "ra": 22.95777,
    "dec": 20.768832,
    "dist": 15.6079,
    "vmag": 5.45
  },
  {
    "name": 217232,
    "hr": 8739,
    "bf": "52    Peg",
    "pname": "",
    "ra": 22.986615,
    "dec": 11.728844,
    "dist": 94.3396,
    "vmag": 5.76
  },
  {
    "name": 217264,
    "hr": 8742,
    "bf": "2    Psc",
    "pname": "",
    "ra": 22.99096,
    "dec": 0.962927,
    "dist": 91.659,
    "vmag": 5.43
  },
  {
    "name": 217364,
    "hr": 8747,
    "bf": "Zet Gru",
    "pname": "",
    "ra": 23.014677,
    "dec": -52.754137,
    "dist": 33.3778,
    "vmag": 4.11
  },
  {
    "name": 217428,
    "hr": 8750,
    "bf": "3    Psc",
    "pname": "",
    "ra": 23.01053,
    "dec": 0.185866,
    "dist": 179.5332,
    "vmag": 6.22
  },
  {
    "name": 217531,
    "hr": 8757,
    "bf": "81    Aqr",
    "pname": "",
    "ra": 23.023234,
    "dec": -7.061153,
    "dist": 151.7451,
    "vmag": 6.23
  },
  {
    "name": 217675,
    "hr": 8762,
    "bf": "1Omi And",
    "pname": "",
    "ra": 23.032017,
    "dec": 42.325979,
    "dist": 210.5263,
    "vmag": 3.62
  },
  {
    "name": 217701,
    "hr": 8763,
    "bf": "82    Aqr",
    "pname": "",
    "ra": 23.042377,
    "dec": -6.574008,
    "dist": 446.4286,
    "vmag": 6.18
  },
  {
    "name": 217782,
    "hr": 8766,
    "bf": "2    And",
    "pname": "",
    "ra": 23.043436,
    "dec": 42.757795,
    "dist": 129.199,
    "vmag": 5.09
  },
  {
    "name": 217792,
    "hr": 8767,
    "bf": "Pi  PsA",
    "pname": "",
    "ra": 23.05828,
    "dec": -34.749412,
    "dist": 29.4204,
    "vmag": 5.12
  },
  {
    "name": 217891,
    "hr": 8773,
    "bf": "4Bet Psc",
    "pname": "",
    "ra": 23.064615,
    "dec": 3.820045,
    "dist": 125.1564,
    "vmag": 4.48
  },
  {
    "name": 217902,
    "hr": 8774,
    "bf": "Kap Gru",
    "pname": "",
    "ra": 23.077668,
    "dec": -53.964905,
    "dist": 111.6071,
    "vmag": 5.37
  },
  {
    "name": 217906,
    "hr": 8775,
    "bf": "53Bet Peg",
    "pname": "Scheat",
    "ra": 23.062901,
    "dec": 28.082789,
    "dist": 60.0962,
    "vmag": 2.44
  },
  {
    "name": 218031,
    "hr": 8780,
    "bf": "3    And",
    "pname": "",
    "ra": 23.069702,
    "dec": 50.052091,
    "dist": 54.1712,
    "vmag": 4.64
  },
  {
    "name": 218045,
    "hr": 8781,
    "bf": "54Alp Peg",
    "pname": "Markab",
    "ra": 23.079348,
    "dec": 15.205264,
    "dist": 40.8831,
    "vmag": 2.49
  },
  {
    "name": 218060,
    "hr": 8782,
    "bf": "83    Aqr",
    "pname": "",
    "ra": 23.086052,
    "dec": -7.693801,
    "dist": 64.2261,
    "vmag": 5.44
  },
  {
    "name": 218227,
    "hr": 8787,
    "bf": "The Gru",
    "pname": "",
    "ra": 23.11465,
    "dec": -43.520358,
    "dist": 40.4367,
    "vmag": 4.28
  },
  {
    "name": 218240,
    "hr": 8789,
    "bf": "86    Aqr",
    "pname": "",
    "ra": 23.111345,
    "dec": -23.743115,
    "dist": 66.313,
    "vmag": 4.48
  },
  {
    "name": 218242,
    "hr": 8790,
    "bf": "Ups Gru",
    "pname": "",
    "ra": 23.114894,
    "dec": -38.892293,
    "dist": 87.3362,
    "vmag": 5.62
  },
  {
    "name": 218329,
    "hr": 8795,
    "bf": "55    Peg",
    "pname": "",
    "ra": 23.116739,
    "dec": 9.409492,
    "dist": 100.8065,
    "vmag": 4.54
  },
  {
    "name": 218356,
    "hr": 8796,
    "bf": "56    Peg",
    "pname": "",
    "ra": 23.118539,
    "dec": 25.468259,
    "dist": 181.4882,
    "vmag": 4.76
  },
  {
    "name": 218376,
    "hr": 8797,
    "bf": "1    Cas",
    "pname": "",
    "ra": 23.110226,
    "dec": 59.41976,
    "dist": 346.0208,
    "vmag": 4.84
  },
  {
    "name": 218452,
    "hr": 8804,
    "bf": "4    And",
    "pname": "",
    "ra": 23.127575,
    "dec": 46.387231,
    "dist": 106.9519,
    "vmag": 5.3
  },
  {
    "name": 218470,
    "hr": 8805,
    "bf": "5    And",
    "pname": "",
    "ra": 23.12926,
    "dec": 49.295776,
    "dist": 34.3407,
    "vmag": 5.68
  },
  {
    "name": 218527,
    "hr": 8807,
    "bf": "5    Psc",
    "pname": "",
    "ra": 23.1447,
    "dec": 2.127883,
    "dist": 81.4996,
    "vmag": 5.42
  },
  {
    "name": 218594,
    "hr": 8812,
    "bf": "88    Aqr",
    "pname": "",
    "ra": 23.157443,
    "dec": -21.17241,
    "dist": 82.9876,
    "vmag": 3.68
  },
  {
    "name": 218634,
    "hr": 8815,
    "bf": "57    Peg",
    "pname": "",
    "ra": 23.158738,
    "dec": 8.677161,
    "dist": 239.8082,
    "vmag": 5.05
  },
  {
    "name": 218640,
    "hr": 8817,
    "bf": "89    Aqr",
    "pname": "",
    "ra": 23.165249,
    "dec": -22.457611,
    "dist": 154.5595,
    "vmag": 4.71
  },
  {
    "name": 218658,
    "hr": 8819,
    "bf": "33Pi  Cep",
    "pname": "",
    "ra": 23.131623,
    "dec": 75.387496,
    "dist": 75.643,
    "vmag": 4.41
  },
  {
    "name": 218670,
    "hr": 8820,
    "bf": "Iot Gru",
    "pname": "",
    "ra": 23.17264,
    "dec": -45.246711,
    "dist": 56.1798,
    "vmag": 3.88
  },
  {
    "name": 218700,
    "hr": 8821,
    "bf": "58    Peg",
    "pname": "",
    "ra": 23.167072,
    "dec": 9.822082,
    "dist": 248.139,
    "vmag": 5.39
  },
  {
    "name": 218753,
    "hr": 8822,
    "bf": "2    Cas",
    "pname": "",
    "ra": 23.162261,
    "dec": 59.332692,
    "dist": 534.7594,
    "vmag": 5.68
  },
  {
    "name": 218804,
    "hr": 8825,
    "bf": "6    And",
    "pname": "",
    "ra": 23.174235,
    "dec": 43.544232,
    "dist": 27.6472,
    "vmag": 5.91
  },
  {
    "name": 218918,
    "hr": 8826,
    "bf": "59    Peg",
    "pname": "",
    "ra": 23.195608,
    "dec": 8.720116,
    "dist": 74.2942,
    "vmag": 5.15
  },
  {
    "name": 218935,
    "hr": 8827,
    "bf": "60    Peg",
    "pname": "",
    "ra": 23.197001,
    "dec": 26.847308,
    "dist": 70.1754,
    "vmag": 6.19
  },
  {
    "name": 219080,
    "hr": 8830,
    "bf": "7    And",
    "pname": "",
    "ra": 23.20916,
    "dec": 49.406207,
    "dist": 24.5881,
    "vmag": 4.53
  },
  {
    "name": 219215,
    "hr": 8834,
    "bf": "90Phi Aqr",
    "pname": "",
    "ra": 23.238711,
    "dec": -6.049003,
    "dist": 61.9579,
    "vmag": 4.22
  },
  {
    "name": 219449,
    "hr": 8841,
    "bf": "91Psi1Aqr",
    "pname": "",
    "ra": 23.264859,
    "dec": -9.087737,
    "dist": 45.9348,
    "vmag": 4.24
  },
  {
    "name": 219477,
    "hr": 8842,
    "bf": "61    Peg",
    "pname": "",
    "ra": 23.262858,
    "dec": 28.247898,
    "dist": 265.9574,
    "vmag": 6.51
  },
  {
    "name": 219571,
    "hr": 8848,
    "bf": "Gam Tuc",
    "pname": "",
    "ra": 23.290498,
    "dec": -58.235734,
    "dist": 23.0574,
    "vmag": 3.99
  },
  {
    "name": 219576,
    "hr": 8850,
    "bf": "92Chi Aqr",
    "pname": "",
    "ra": 23.280817,
    "dec": -7.726504,
    "dist": 187.9699,
    "vmag": 4.93
  },
  {
    "name": 219615,
    "hr": 8852,
    "bf": "6Gam Psc",
    "pname": "",
    "ra": 23.286094,
    "dec": 3.282289,
    "dist": 42.3012,
    "vmag": 3.7
  },
  {
    "name": 219688,
    "hr": 8858,
    "bf": "93Psi2Aqr",
    "pname": "",
    "ra": 23.298393,
    "dec": -9.182513,
    "dist": 123.1527,
    "vmag": 4.41
  },
  {
    "name": 219693,
    "hr": 8859,
    "bf": "Phi Gru",
    "pname": "",
    "ra": 23.302739,
    "dec": -40.824361,
    "dist": 35.4108,
    "vmag": 5.54
  },
  {
    "name": 219734,
    "hr": 8860,
    "bf": "8    And",
    "pname": "",
    "ra": 23.295732,
    "dec": 49.0153,
    "dist": 172.7116,
    "vmag": 4.82
  },
  {
    "name": 219765,
    "hr": 8862,
    "bf": "Tau Oct",
    "pname": "",
    "ra": 23.46766,
    "dec": -87.482214,
    "dist": 149.0313,
    "vmag": 5.5
  },
  {
    "name": 219784,
    "hr": 8863,
    "bf": "Gam Scl",
    "pname": "",
    "ra": 23.313733,
    "dec": -32.532027,
    "dist": 55.8659,
    "vmag": 4.41
  },
  {
    "name": 219815,
    "hr": 8864,
    "bf": "9    And",
    "pname": "",
    "ra": 23.306479,
    "dec": 41.773676,
    "dist": 129.5337,
    "vmag": 5.98
  },
  {
    "name": 219832,
    "hr": 8865,
    "bf": "95Psi3Aqr",
    "pname": "",
    "ra": 23.316021,
    "dec": -9.61075,
    "dist": 80.1925,
    "vmag": 4.99
  },
  {
    "name": 219834,
    "hr": 8866,
    "bf": "94    Aqr",
    "pname": "",
    "ra": 23.318518,
    "dec": -13.458552,
    "dist": 21.1193,
    "vmag": 5.2
  },
  {
    "name": 219877,
    "hr": 8868,
    "bf": "96    Aqr",
    "pname": "",
    "ra": 23.323327,
    "dec": -5.124352,
    "dist": 34.1647,
    "vmag": 5.56
  },
  {
    "name": 219916,
    "hr": 8872,
    "bf": "34Omi Cep",
    "pname": "",
    "ra": 23.3104,
    "dec": 68.111445,
    "dist": 62.2665,
    "vmag": 4.75
  },
  {
    "name": 219945,
    "hr": 8874,
    "bf": "11    And",
    "pname": "",
    "ra": 23.324945,
    "dec": 48.625322,
    "dist": 87.7193,
    "vmag": 5.44
  },
  {
    "name": 219981,
    "hr": 8876,
    "bf": "10    And",
    "pname": "",
    "ra": 23.331225,
    "dec": 42.078044,
    "dist": 147.4926,
    "vmag": 5.81
  },
  {
    "name": 220009,
    "hr": 8878,
    "bf": "7    Psc",
    "pname": "",
    "ra": 23.339051,
    "dec": 5.381307,
    "dist": 132.626,
    "vmag": 5.05
  },
  {
    "name": 220061,
    "hr": 8880,
    "bf": "62Tau Peg",
    "pname": "",
    "ra": 23.343956,
    "dec": 23.740337,
    "dist": 49.5786,
    "vmag": 4.58
  },
  {
    "name": 220088,
    "hr": 8882,
    "bf": "63    Peg",
    "pname": "",
    "ra": 23.347097,
    "dec": 30.414921,
    "dist": 128.7001,
    "vmag": 5.58
  },
  {
    "name": 220117,
    "hr": 8885,
    "bf": "12    And",
    "pname": "",
    "ra": 23.348123,
    "dec": 38.182326,
    "dist": 41.9639,
    "vmag": 5.77
  },
  {
    "name": 220222,
    "hr": 8887,
    "bf": "64    Peg",
    "pname": "",
    "ra": 23.365259,
    "dec": 31.812465,
    "dist": 254.4529,
    "vmag": 5.35
  },
  {
    "name": 220278,
    "hr": 8890,
    "bf": "97    Aqr",
    "pname": "",
    "ra": 23.377547,
    "dec": -15.039338,
    "dist": 65.3595,
    "vmag": 5.19
  },
  {
    "name": 220318,
    "hr": 8891,
    "bf": "65    Peg",
    "pname": "",
    "ra": 23.37792,
    "dec": 20.828716,
    "dist": 175.1313,
    "vmag": 6.28
  },
  {
    "name": 220321,
    "hr": 8892,
    "bf": "98    Aqr",
    "pname": "",
    "ra": 23.382842,
    "dec": -20.10058,
    "dist": 50.1002,
    "vmag": 3.96
  },
  {
    "name": 220363,
    "hr": 8893,
    "bf": "66    Peg",
    "pname": "",
    "ra": 23.384602,
    "dec": 12.31391,
    "dist": 119.0476,
    "vmag": 5.09
  },
  {
    "name": 220599,
    "hr": 8903,
    "bf": "67    Peg",
    "pname": "",
    "ra": 23.41412,
    "dec": 32.384882,
    "dist": 145.1379,
    "vmag": 5.56
  },
  {
    "name": 220652,
    "hr": 8904,
    "bf": "4    Cas",
    "pname": "",
    "ra": 23.413959,
    "dec": 62.282806,
    "dist": 240.9639,
    "vmag": 4.96
  },
  {
    "name": 220657,
    "hr": 8905,
    "bf": "68Ups Peg",
    "pname": "",
    "ra": 23.422993,
    "dec": 23.404101,
    "dist": 52.2466,
    "vmag": 4.42
  },
  {
    "name": 220704,
    "hr": 8906,
    "bf": "99    Aqr",
    "pname": "",
    "ra": 23.434108,
    "dec": -20.642014,
    "dist": 86.881,
    "vmag": 4.38
  },
  {
    "name": 220729,
    "hr": 8907,
    "bf": "Omi Gru",
    "pname": "",
    "ra": 23.44349,
    "dec": -52.721603,
    "dist": 30.7692,
    "vmag": 5.53
  },
  {
    "name": 220825,
    "hr": 8911,
    "bf": "8Kap Psc",
    "pname": "",
    "ra": 23.448876,
    "dec": 1.255608,
    "dist": 47.0588,
    "vmag": 4.95
  },
  {
    "name": 220858,
    "hr": 8912,
    "bf": "9    Psc",
    "pname": "",
    "ra": 23.454109,
    "dec": 1.122609,
    "dist": 112.9944,
    "vmag": 6.26
  },
  {
    "name": 220885,
    "hr": 8913,
    "bf": "13    And",
    "pname": "",
    "ra": 23.45205,
    "dec": 42.91201,
    "dist": 91.9963,
    "vmag": 5.75
  },
  {
    "name": 220933,
    "hr": 8915,
    "bf": "69    Peg",
    "pname": "",
    "ra": 23.461218,
    "dec": 25.167281,
    "dist": 110.6195,
    "vmag": 5.99
  },
  {
    "name": 220954,
    "hr": 8916,
    "bf": "10The Psc",
    "pname": "",
    "ra": 23.466138,
    "dec": 6.378992,
    "dist": 45.5373,
    "vmag": 4.27
  },
  {
    "name": 221115,
    "hr": 8923,
    "bf": "70    Peg",
    "pname": "",
    "ra": 23.485915,
    "dec": 12.760554,
    "dist": 53.6193,
    "vmag": 4.54
  },
  {
    "name": 221345,
    "hr": 8930,
    "bf": "14    And",
    "pname": "",
    "ra": 23.52149,
    "dec": 39.236198,
    "dist": 79.1766,
    "vmag": 5.22
  },
  {
    "name": 221357,
    "hr": 8932,
    "bf": "100    Aqr",
    "pname": "",
    "ra": 23.528345,
    "dec": -21.369457,
    "dist": 76.1615,
    "vmag": 6.24
  },
  {
    "name": 221409,
    "hr": 8934,
    "bf": "13    Psc",
    "pname": "",
    "ra": 23.532657,
    "dec": -1.085885,
    "dist": 206.6116,
    "vmag": 6.39
  },
  {
    "name": 221507,
    "hr": 8937,
    "bf": "Bet Scl",
    "pname": "",
    "ra": 23.549512,
    "dec": -37.818268,
    "dist": 53.3618,
    "vmag": 4.38
  },
  {
    "name": 221565,
    "hr": 8939,
    "bf": "101    Aqr",
    "pname": "",
    "ra": 23.554618,
    "dec": -20.914504,
    "dist": 90.009,
    "vmag": 4.7
  },
  {
    "name": 221615,
    "hr": 8940,
    "bf": "71    Peg",
    "pname": "",
    "ra": 23.557804,
    "dec": 22.498775,
    "dist": 159.4896,
    "vmag": 5.33
  },
  {
    "name": 221673,
    "hr": 8943,
    "bf": "72    Peg",
    "pname": "",
    "ra": 23.565884,
    "dec": 31.325277,
    "dist": 168.3502,
    "vmag": 4.97
  },
  {
    "name": 221675,
    "hr": 8944,
    "bf": "14    Psc",
    "pname": "",
    "ra": 23.569171,
    "dec": -1.247567,
    "dist": 64.9351,
    "vmag": 5.91
  },
  {
    "name": 221756,
    "hr": 8947,
    "bf": "15    And",
    "pname": "",
    "ra": 23.577095,
    "dec": 40.236441,
    "dist": 80.3213,
    "vmag": 5.55
  },
  {
    "name": 221758,
    "hr": 8948,
    "bf": "73    Peg",
    "pname": "",
    "ra": 23.577279,
    "dec": 33.497328,
    "dist": 88.968,
    "vmag": 5.63
  },
  {
    "name": 221760,
    "hr": 8949,
    "bf": "Iot Phe",
    "pname": "",
    "ra": 23.584599,
    "dec": -42.615075,
    "dist": 76.2777,
    "vmag": 4.69
  },
  {
    "name": 221950,
    "hr": 8954,
    "bf": "16    Psc",
    "pname": "",
    "ra": 23.606468,
    "dec": 2.102222,
    "dist": 30.9789,
    "vmag": 5.68
  },
  {
    "name": 222098,
    "hr": 8960,
    "bf": "74    Peg",
    "pname": "",
    "ra": 23.627705,
    "dec": 16.825495,
    "dist": 112.7396,
    "vmag": 6.26
  },
  {
    "name": 222107,
    "hr": 8961,
    "bf": "16Lam And",
    "pname": "",
    "ra": 23.626056,
    "dec": 46.458152,
    "dist": 26.4061,
    "vmag": 3.81
  },
  {
    "name": 222133,
    "hr": 8963,
    "bf": "75    Peg",
    "pname": "",
    "ra": 23.632445,
    "dec": 18.400667,
    "dist": 71.3776,
    "vmag": 5.49
  },
  {
    "name": 222173,
    "hr": 8965,
    "bf": "17Iot And",
    "pname": "",
    "ra": 23.63561,
    "dec": 43.268073,
    "dist": 153.1394,
    "vmag": 4.29
  },
  {
    "name": 222287,
    "hr": 8966,
    "bf": "The Phe",
    "pname": "",
    "ra": 23.657761,
    "dec": -46.637799,
    "dist": 78.8644,
    "vmag": 6.07
  },
  {
    "name": 222304,
    "hr": 8967,
    "bf": "18    And",
    "pname": "",
    "ra": 23.652316,
    "dec": 50.471733,
    "dist": 129.199,
    "vmag": 5.35
  },
  {
    "name": 222345,
    "hr": 8968,
    "bf": "102Ome1Aqr",
    "pname": "",
    "ra": 23.663074,
    "dec": -14.222178,
    "dist": 43.592,
    "vmag": 4.97
  },
  {
    "name": 222368,
    "hr": 8969,
    "bf": "17Iot Psc",
    "pname": "",
    "ra": 23.665844,
    "dec": 5.626292,
    "dist": 13.7137,
    "vmag": 4.13
  },
  {
    "name": 222404,
    "hr": 8974,
    "bf": "35Gam Cep",
    "pname": "",
    "ra": 23.65582,
    "dec": 77.632276,
    "dist": 14.1024,
    "vmag": 3.21
  },
  {
    "name": 222433,
    "hr": 8975,
    "bf": "Mu  Scl",
    "pname": "",
    "ra": 23.677266,
    "dec": -32.073125,
    "dist": 89.4454,
    "vmag": 5.3
  },
  {
    "name": 222439,
    "hr": 8976,
    "bf": "19Kap And",
    "pname": "",
    "ra": 23.673469,
    "dec": 44.333932,
    "dist": 51.6262,
    "vmag": 4.15
  },
  {
    "name": 222547,
    "hr": 8980,
    "bf": "103    Aqr",
    "pname": "",
    "ra": 23.692914,
    "dec": -18.027077,
    "dist": 232.0186,
    "vmag": 5.36
  },
  {
    "name": 222574,
    "hr": 8982,
    "bf": "104    Aqr",
    "pname": "",
    "ra": 23.696057,
    "dec": -17.816533,
    "dist": 257.0694,
    "vmag": 4.82
  },
  {
    "name": 222603,
    "hr": 8984,
    "bf": "18Lam Psc",
    "pname": "",
    "ra": 23.700779,
    "dec": 1.780041,
    "dist": 32.6904,
    "vmag": 4.49
  },
  {
    "name": 222661,
    "hr": 8988,
    "bf": "105Ome2Aqr",
    "pname": "",
    "ra": 23.712039,
    "dec": -14.544905,
    "dist": 45.5373,
    "vmag": 4.49
  },
  {
    "name": 222764,
    "hr": 8991,
    "bf": "77    Peg",
    "pname": "",
    "ra": 23.722878,
    "dec": 10.331536,
    "dist": 189.7533,
    "vmag": 5.09
  },
  {
    "name": 222842,
    "hr": 8997,
    "bf": "78    Peg",
    "pname": "",
    "ra": 23.733189,
    "dec": 29.361454,
    "dist": 68.7758,
    "vmag": 4.93
  },
  {
    "name": 222847,
    "hr": 8998,
    "bf": "106    Aqr",
    "pname": "",
    "ra": 23.736688,
    "dec": -18.276938,
    "dist": 116.144,
    "vmag": 5.24
  },
  {
    "name": 223024,
    "hr": 9002,
    "bf": "107    Aqr",
    "pname": "",
    "ra": 23.766922,
    "dec": -18.67834,
    "dist": 73.2064,
    "vmag": 5.28
  },
  {
    "name": 223047,
    "hr": 9003,
    "bf": "20Psi And",
    "pname": "",
    "ra": 23.767234,
    "dec": 46.420276,
    "dist": 307.6923,
    "vmag": 4.97
  },
  {
    "name": 223075,
    "hr": 9004,
    "bf": "19    Psc",
    "pname": "",
    "ra": 23.773199,
    "dec": 3.486811,
    "dist": 275.4821,
    "vmag": 4.95
  },
  {
    "name": 223145,
    "hr": 9006,
    "bf": "Sig Phe",
    "pname": "",
    "ra": 23.787776,
    "dec": -50.226461,
    "dist": 185.1852,
    "vmag": 5.18
  },
  {
    "name": 223165,
    "hr": 9008,
    "bf": "5Tau Cas",
    "pname": "",
    "ra": 23.784284,
    "dec": 58.651989,
    "dist": 53.3333,
    "vmag": 4.88
  },
  {
    "name": 223252,
    "hr": 9012,
    "bf": "20    Psc",
    "pname": "",
    "ra": 23.79904,
    "dec": -2.761598,
    "dist": 97.0874,
    "vmag": 5.49
  },
  {
    "name": 223352,
    "hr": 9016,
    "bf": "Del Scl",
    "pname": "",
    "ra": 23.815427,
    "dec": -28.130268,
    "dist": 42.1408,
    "vmag": 4.59
  },
  {
    "name": 223385,
    "hr": 9018,
    "bf": "6    Cas",
    "pname": "",
    "ra": 23.813937,
    "dec": 62.214516,
    "dist": 100000,
    "vmag": 5.43
  },
  {
    "name": 223438,
    "hr": 9022,
    "bf": "21    Psc",
    "pname": "",
    "ra": 23.824299,
    "dec": 1.076131,
    "dist": 93.1099,
    "vmag": 5.77
  },
  {
    "name": 223461,
    "hr": 9025,
    "bf": "79    Peg",
    "pname": "",
    "ra": 23.827608,
    "dec": 28.842389,
    "dist": 88.3392,
    "vmag": 5.95
  },
  {
    "name": 223637,
    "hr": 9030,
    "bf": "80    Peg",
    "pname": "",
    "ra": 23.855902,
    "dec": 9.313351,
    "dist": 259.0674,
    "vmag": 5.77
  },
  {
    "name": 223640,
    "hr": 9031,
    "bf": "108    Aqr",
    "pname": "",
    "ra": 23.855927,
    "dec": -18.909163,
    "dist": 97.7517,
    "vmag": 5.17
  },
  {
    "name": 223647,
    "hr": 9032,
    "bf": "Gam1Oct",
    "pname": "",
    "ra": 23.868518,
    "dec": -82.018818,
    "dist": 81.3008,
    "vmag": 5.1
  },
  {
    "name": 223719,
    "hr": 9033,
    "bf": "22    Psc",
    "pname": "",
    "ra": 23.866066,
    "dec": 2.930384,
    "dist": 229.3578,
    "vmag": 5.59
  },
  {
    "name": 223768,
    "hr": 9036,
    "bf": "81Phi Peg",
    "pname": "",
    "ra": 23.874802,
    "dec": 19.120287,
    "dist": 141.844,
    "vmag": 5.06
  },
  {
    "name": 223781,
    "hr": 9039,
    "bf": "82    Peg",
    "pname": "",
    "ra": 23.876974,
    "dec": 10.94732,
    "dist": 56.0224,
    "vmag": 5.3
  },
  {
    "name": 223825,
    "hr": 9041,
    "bf": "24    Psc",
    "pname": "",
    "ra": 23.882101,
    "dec": -3.155482,
    "dist": 137.3626,
    "vmag": 5.93
  },
  {
    "name": 223855,
    "hr": 9042,
    "bf": "25    Psc",
    "pname": "",
    "ra": 23.884655,
    "dec": 2.090625,
    "dist": 126.2626,
    "vmag": 6.29
  },
  {
    "name": 224014,
    "hr": 9045,
    "bf": "7Rho Cas",
    "pname": "",
    "ra": 23.906398,
    "dec": 57.499382,
    "dist": 100000,
    "vmag": 4.51
  },
  {
    "name": 224103,
    "hr": 9048,
    "bf": "26    Psc",
    "pname": "",
    "ra": 23.918831,
    "dec": 7.070972,
    "dist": 127.0648,
    "vmag": 6.22
  },
  {
    "name": 224362,
    "hr": 9061,
    "bf": "Gam2Oct",
    "pname": "",
    "ra": 23.959159,
    "dec": -82.169804,
    "dist": 93.5454,
    "vmag": 5.72
  },
  {
    "name": 224392,
    "hr": 9062,
    "bf": "Eta Tuc",
    "pname": "",
    "ra": 23.959727,
    "dec": -64.298231,
    "dist": 47.4383,
    "vmag": 5
  },
  {
    "name": 224427,
    "hr": 9064,
    "bf": "84Psi Peg",
    "pname": "",
    "ra": 23.962647,
    "dec": 25.141401,
    "dist": 145.9854,
    "vmag": 4.63
  },
  {
    "name": 224481,
    "hr": 9065,
    "bf": "1    Cet",
    "pname": "",
    "ra": 23.972562,
    "dec": -15.847484,
    "dist": 190.8397,
    "vmag": 6.28
  },
  {
    "name": 224533,
    "hr": 9067,
    "bf": "27    Psc",
    "pname": "",
    "ra": 23.977883,
    "dec": -3.555983,
    "dist": 71.8907,
    "vmag": 4.88
  },
  {
    "name": 224554,
    "hr": 9069,
    "bf": "Pi  Phe",
    "pname": "",
    "ra": 23.982155,
    "dec": -52.745807,
    "dist": 88.1057,
    "vmag": 5.13
  },
  {
    "name": 224572,
    "hr": 9071,
    "bf": "8Sig Cas",
    "pname": "",
    "ra": 23.983482,
    "dec": 55.754928,
    "dist": 100000,
    "vmag": 4.88
  },
  {
    "name": 224617,
    "hr": 9072,
    "bf": "28Ome Psc",
    "pname": "",
    "ra": 23.988525,
    "dec": 6.863321,
    "dist": 31.9898,
    "vmag": 4.03
  },
  {
    "name": 224686,
    "hr": 9076,
    "bf": "Eps Tuc",
    "pname": "",
    "ra": 23.998594,
    "dec": -65.577132,
    "dist": 114.4165,
    "vmag": 4.49
  },
  {
    "name": 224834,
    "hr": 9081,
    "bf": "Tau Phe",
    "pname": "",
    "ra": 0.017941,
    "dec": -48.809876,
    "dist": 181.8182,
    "vmag": 5.71
  },
  {
    "name": 224889,
    "hr": 9084,
    "bf": "The Oct",
    "pname": "",
    "ra": 0.026616,
    "dec": -77.065724,
    "dist": 66.5779,
    "vmag": 4.78
  },
  {
    "name": 224926,
    "hr": 9087,
    "bf": "29    Psc",
    "pname": "",
    "ra": 0.030402,
    "dec": -3.027504,
    "dist": 139.2758,
    "vmag": 5.13
  },
  {
    "name": 224930,
    "hr": 9088,
    "bf": "85    Peg",
    "pname": "",
    "ra": 0.036139,
    "dec": 27.082256,
    "dist": 12.1699,
    "vmag": 5.8
  },
  {
    "name": 224935,
    "hr": 9089,
    "bf": "30    Psc",
    "pname": "",
    "ra": 0.032672,
    "dec": -6.014072,
    "dist": 132.4503,
    "vmag": 4.37
  },
  {
    "name": 224990,
    "hr": 9091,
    "bf": "Zet Scl",
    "pname": "",
    "ra": 0.038867,
    "dec": -29.720414,
    "dist": 154.0832,
    "vmag": 5.04
  },
  {
    "name": 224995,
    "hr": 9092,
    "bf": "31    Psc",
    "pname": "",
    "ra": 0.040046,
    "dec": 8.956824,
    "dist": 122.8501,
    "vmag": 6.33
  },
  {
    "name": 225003,
    "hr": 9093,
    "bf": "32    Psc",
    "pname": "",
    "ra": 0.041584,
    "dec": 8.485463,
    "dist": 36.9004,
    "vmag": 5.7
  },
  {
    "name": 225132,
    "hr": 9098,
    "bf": "2    Cet",
    "pname": "",
    "ra": 0.06233,
    "dec": -17.335988,
    "dist": 83.4725,
    "vmag": 4.55
  },
  {
    "name": 225180,
    "hr": 9100,
    "bf": "9    Cas",
    "pname": "",
    "ra": 0.070462,
    "dec": 62.287664,
    "dist": 100000,
    "vmag": 5.9
  },
  {
    "name": 225212,
    "hr": 9103,
    "bf": "3    Cet",
    "pname": "",
    "ra": 0.075033,
    "dec": -10.509523,
    "dist": 641.0256,
    "vmag": 4.99
  }
];
