'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const HKO = require('../lib/hko.js');

describe('HKO', function () {
    const hko = new HKO();
    describe('#getWeatherData', function () {
        it('has temperature', function () {
            const value = hko.getWeatherData().then(function (data) {
                return Number(data.body.hko.Temperature);
            });
            return expect(value).to.eventually.be.greaterThan(0);
        });

        it('has relative humidity', function () {
            const value = hko.getWeatherData().then(function (data) {
                return Number(data.body.hko.RH);
            });
            return expect(value).to.eventually.be.greaterThan(0);
        });

        it('has weather forecast period', function () {
            const value = hko.getWeatherData().then(function (data) {
                return data.body.FLW.ForecastPeriod;
            });
            return expect(value).to.eventually.be.not.empty;
        });

        it('has weather forecast description', function () {
            const value = hko.getWeatherData().then(function (data) {
                return data.body.FLW.ForecastDesc;
            });
            return expect(value).to.eventually.be.not.empty;
        });
    });

    describe('#formatForecastNow', function () {
        const body = {
            "FLW": {
                "BulletinDate": "20170131",
                "BulletinTime": "2245",
                "GeneralSituation": "The northeast <a title=\"Show in new window\" href=\"javascript:Wxword('0065')\">monsoon</a> is bringing <a title=\"Show in new window\" href=\"javascript:Wxword('0446')\">cool</a> weather to the south China coast.",
                "TCInfo": null,
                "FireDangerWarning": null,
                "ForecastPeriod": "Weather forecast for tonight and tomorrow",
                "ForecastDesc": "Mainly <a title=\"Show in new window\" href=\"javascript:Wxword('0003')\">cloudy</a>. <a title=\"Show in new window\" href=\"javascript:Wxword('0446')\">Cool</a> tomorrow morning with a minimum temperature of about 16 degrees. <a title=\"Show in new window\" href=\"javascript:Wxword('0007')\">Sunny periods</a> during the day with a maximum temperature of around 20 degrees. <a title=\"Show in new window\" href=\"javascript:Wxword('0079')\">Moderate</a> easterly winds, <a title=\"Show in new window\" href=\"javascript:Wxword('0081')\">fresh</a> at times.",
                "OutlookTitle": "Outlook",
                "OutlookContent": "<a title=\"Show in new window\" href=\"javascript:Wxword('0007')\">Sunny periods</a> on Thursday with <a title=\"Show in new window\" href=\"javascript:Wxword('0446')\">cool</a> morning. A few <a title=\"Show in new window\" href=\"javascript:Wxword('0035')\">rain</a> patches in the latter part of this week.",
                "Icon1": "60",
                "Icon2": null
            },
            "CMN": {
                "SolarTerm": null,
                "PublicHoliday": "The fourth day of Lunar New Year",
                "GregorianDate": "20170131",
                "sunriseTime": "07:02",
                "sunsetTime": "18:11",
                "moonriseTime": "09:11",
                "moonsetTime": "21:18",
                "forecastDate": "20170131",
                "tide": [
                    {
                        "type": "Low",
                        "time": "05:36",
                        "height": "0.5"
                    },
                    {
                        "type": "High",
                        "time": "12:28",
                        "height": "1.6"
                    },
                    {
                        "type": "Low",
                        "time": "17:11",
                        "height": "1.0"
                    },
                    {
                        "type": "High",
                        "time": "23:38",
                        "height": "2.2"
                    }
                ]
            },
            "F9D": {
                "BulletinDate": "20170131",
                "BulletinTime": "1630",
                "NPTemp": "18",
                "GeneralSituation": "The northeast monsoon will continue to affect the south China coastal areas in the next couple of days. It will be cool in the morning over the region. An upper-air disturbance will bring a few rain patches to southern China in the latter part of this week. With the upper-air disturbance departing, the weather over the region will improve early next week.",
                "WeatherForecast": [
                    {
                        "ForecastDate": "20170201",
                        "ForecastWind": "East force 4, occasionally force 5.",
                        "ForecastWeather": "Sunny periods. Cool in the morning.",
                        "ForecastMaxtemp": "20",
                        "ForecastMintemp": "16",
                        "ForecastMaxrh": "90",
                        "ForecastMinrh": "65",
                        "ForecastIcon": "pic51.png",
                        "IconDesc": "SUNNY PERIODS",
                        "WeekDay": "3"
                    },
                    {
                        "ForecastDate": "20170202",
                        "ForecastWind": "East to northeast force 4 to 5, occasionally force 6 offshore.",
                        "ForecastWeather": "Sunny periods. Cool in the morning.",
                        "ForecastMaxtemp": "20",
                        "ForecastMintemp": "16",
                        "ForecastMaxrh": "85",
                        "ForecastMinrh": "65",
                        "ForecastIcon": "pic51.png",
                        "IconDesc": "SUNNY PERIODS",
                        "WeekDay": "4"
                    },
                    {
                        "ForecastDate": "20170203",
                        "ForecastWind": "East force 4 to 5, occasionally force 6 offshore at first.",
                        "ForecastWeather": "Mainly cloudy. Cool in the morning. A few rain patches later.",
                        "ForecastMaxtemp": "19",
                        "ForecastMintemp": "16",
                        "ForecastMaxrh": "95",
                        "ForecastMinrh": "75",
                        "ForecastIcon": "pic60.png",
                        "IconDesc": "Cloudy",
                        "WeekDay": "5"
                    },
                    {
                        "ForecastDate": "20170204",
                        "ForecastWind": "Northeast force 3 to 4.",
                        "ForecastWeather": "Mainly cloudy with a few rain patches.",
                        "ForecastMaxtemp": "20",
                        "ForecastMintemp": "17",
                        "ForecastMaxrh": "95",
                        "ForecastMinrh": "80",
                        "ForecastIcon": "pic62.png",
                        "IconDesc": "Light Rain",
                        "WeekDay": "6"
                    },
                    {
                        "ForecastDate": "20170205",
                        "ForecastWind": "Northeast force 2 to 3.",
                        "ForecastWeather": "Mainly fine.",
                        "ForecastMaxtemp": "23",
                        "ForecastMintemp": "18",
                        "ForecastMaxrh": "85",
                        "ForecastMinrh": "65",
                        "ForecastIcon": "pic51.png",
                        "IconDesc": "SUNNY PERIODS",
                        "WeekDay": "0"
                    },
                    {
                        "ForecastDate": "20170206",
                        "ForecastWind": "East force 4 to 5, occasionally force 6 offshore later.",
                        "ForecastWeather": "Mainly fine.",
                        "ForecastMaxtemp": "21",
                        "ForecastMintemp": "17",
                        "ForecastMaxrh": "80",
                        "ForecastMinrh": "60",
                        "ForecastIcon": "pic51.png",
                        "IconDesc": "SUNNY PERIODS",
                        "WeekDay": "1"
                    },
                    {
                        "ForecastDate": "20170207",
                        "ForecastWind": "East force 4 to 5, occasionally force 6 offshore at first.",
                        "ForecastWeather": "Sunny intervals. Cool in the morning.",
                        "ForecastMaxtemp": "20",
                        "ForecastMintemp": "16",
                        "ForecastMaxrh": "85",
                        "ForecastMinrh": "65",
                        "ForecastIcon": "pic52.png",
                        "IconDesc": "SUNNY INTERVALS",
                        "WeekDay": "2"
                    },
                    {
                        "ForecastDate": "20170208",
                        "ForecastWind": "East force 3 to 4.",
                        "ForecastWeather": "Sunny periods.",
                        "ForecastMaxtemp": "21",
                        "ForecastMintemp": "17",
                        "ForecastMaxrh": "90",
                        "ForecastMinrh": "70",
                        "ForecastIcon": "pic51.png",
                        "IconDesc": "SUNNY PERIODS",
                        "WeekDay": "3"
                    },
                    {
                        "ForecastDate": "20170209",
                        "ForecastWind": "North to northeast force 4, occasionally force 5.",
                        "ForecastWeather": "Mainly cloudy. Cool in the morning.",
                        "ForecastMaxtemp": "19",
                        "ForecastMintemp": "16",
                        "ForecastMaxrh": "85",
                        "ForecastMinrh": "60",
                        "ForecastIcon": "pic60.png",
                        "IconDesc": "Cloudy",
                        "WeekDay": "4"
                    }
                ]
            },
            "RHRREAD": {
                "BulletinDate": "20170131",
                "BulletinTime": "2202",
                "UVIndex": "//",
                "Intensity": null,
                "hkotemp": "17",
                "hkorh": "86",
                "FormattedObsTime": "10 p.m."
            },
            "SWT": {
                "headLine1": "",
                "headLine2": "",
                "headLine3": "",
                "headLine4": "",
                "headLine5": "",
                "smsSwt": "",
                "tornadoReport": "",
                "waterspoutReport": "",
                "gustForecast": "",
                "hotAdvisory": ""
            },
            "Playlist": [
                {
                    "title": "天氣廣播站",
                    "subtitle": "香港天文台的早晨電視天氣節目逢星期一至六上午約七時更新，而黃昏節目逢星期一至五下­午約六時更新，旨在提供一個親切溝通渠道，讓市民了解天氣變化。由於天氣瞬息萬變，欲­知最新天氣資訊，請瀏覽香港天文台網頁：http://www.weather.gov.hk 或 http://www.hko.gov.hk。",
                    "href": "http://www.youtube.com/playlist?list=PLBdhEGSPvUGUvYi7y2oD6f9OKFVGeutUO",
                    "updated": "2017-01-31T10:00:02.000Z",
                    "entry_1_title": "黃昏天氣節目(01月31日下午6時) - 科學主任胡宏俊",
                    "entry_1_content": "香港天文台的早晨電視天氣節目逢星期一至六，上午約七時及八時更新，而黃昏節目逢星期一至五下午約六時更新，旨在提供一個親切溝通渠道，讓市民了解天氣變化。由於天氣瞬息萬變，欲知最新天氣資訊，請瀏覽香港天文台網頁：http://www.weather.gov.hk 或 http://www.hko.gov.hk。",
                    "entry_1_href": "http://www.youtube.com/watch?v=-cvBeVPl72A&rel=0&autoplay=1",
                    "entry_1_thumbnail": "https://i.ytimg.com/vi/-cvBeVPl72A/hqdefault.jpg",
                    "uploaded": "2017-01-31T10:00:02.000Z",
                    "langDesc": "In Chinese Only",
                    "hTimeWithin": "10800000"
                },
                {
                    "title": "氣象冷知識",
                    "subtitle": "",
                    "href": "http://www.youtube.com/playlist?list=PLBdhEGSPvUGVuK7fZUxHKzv51Y_2hy_hW",
                    "updated": "2017-01-27T10:30:01.000Z",
                    "entry_1_title": "輻射霧",
                    "entry_1_content": "天文台『氣象冷知識』第一百六十一集。本集會為你介紹輻射霧。",
                    "entry_1_href": "http://www.youtube.com/watch?v=3aXSt0VZ138&rel=0&autoplay=1",
                    "entry_1_thumbnail": "https://i.ytimg.com/vi/3aXSt0VZ138/hqdefault.jpg",
                    "uploaded": "2017-01-27T10:30:01.000Z",
                    "langDesc": "In Chinese Only",
                    "hTimeWithin": "10800000"
                },
                {
                    "title": "Central Briefing",
                    "subtitle": "Due to the limitations of internet traffic, it may sometimes take longer for the Observatory to upload or users to download the video, and users should take note of the time validity of the information provided therein.  In taking precautionary measures against inclement weather, please always refer to the latest weather forecasts and warnings issued by the Hong Kong Observatory: http://www.weather.gov.hk/",
                    "href": "http://www.youtube.com/playlist?list=PLBdhEGSPvUGWT_7z9qSdJXHxCLBHOom7p",
                    "updated": "2017-01-27T04:59:09.000Z",
                    "entry_1_title": "Central Briefing (12:00 noon 27 Jan) - Lam Ching Chi, Senior Scientific Officer",
                    "entry_1_content": "",
                    "entry_1_href": "http://www.youtube.com/watch?v=KPhOzSdJLTg&rel=0&autoplay=1",
                    "entry_1_thumbnail": "https://i.ytimg.com/vi/KPhOzSdJLTg/hqdefault.jpg",
                    "uploaded": "2017-01-27T04:59:09.000Z",
                    "langDesc": "In English",
                    "hTimeWithin": "1800000"
                },
                {
                    "title": "天文台消息",
                    "subtitle": "",
                    "href": "http://www.youtube.com/playlist?list=PLBdhEGSPvUGX1EWW54Zt7XN8kFf5NQ-wb",
                    "updated": "2017-01-27T08:19:07.000Z",
                    "entry_1_title": "「天文台之友」20周年成長片段",
                    "entry_1_content": "「天文台之友」於1996年成立，多年來不斷茁壯成長，會員人數由初期的數百人增至今天的過萬人，片段輯錄了20年來的活動點滴。",
                    "entry_1_href": "http://www.youtube.com/watch?v=vmV6cn08aKk&rel=0&autoplay=1",
                    "entry_1_thumbnail": "https://i.ytimg.com/vi/vmV6cn08aKk/hqdefault.jpg",
                    "uploaded": "2017-01-27T08:19:07.000Z",
                    "langDesc": "In Chinese Only",
                    "hTimeWithin": "10800000"
                },
                {
                    "title": "HKO Corporate Video",
                    "subtitle": "",
                    "href": "http://www.youtube.com/playlist?list=PLBdhEGSPvUGW-_DbzBpnjUZl6nD5XOIu6",
                    "updated": "2016-03-15T03:50:29.000Z",
                    "entry_1_title": "HKO Corporate Video",
                    "entry_1_content": "The Hong Kong Observatory launches a new corporate video, using the core values of the Observatory linked by the seven characters of the word \"SCIENCE\" (Serve, Care, Innovate, Enthuse, Nurture, Collaborate and Excel) to introduce the development and services of the Observatory to the public.",
                    "entry_1_href": "http://www.youtube.com/watch?v=avwmjQXA3gs&rel=0&autoplay=1",
                    "entry_1_thumbnail": "https://i.ytimg.com/vi/avwmjQXA3gs/hqdefault.jpg",
                    "uploaded": "2016-03-15T03:50:29.000Z",
                    "langDesc": "In English",
                    "hTimeWithin": "10800000"
                }
            ],
            "FUV": {
                "BulletinDate": "20170131",
                "BulletinTime": "1700",
                "ForecastTimeInfoMaxUV": "5",
                "ForecastTimeInfoMaxUvCategory": "Moderate",
                "ForecastTimeInfoDate": "20170201",
                "Message": "The maximum UV Index for tomorrow will be about 5. The intensity of UV radiation will be Moderate."
            },
            "lightning_info": [
                {
                    "date": "31-Jan-2017",
                    "time": "22:10-22:14",
                    "color": "#808080"
                },
                {
                    "date": "31-Jan-2017",
                    "time": "22:15-22:19",
                    "color": "#004080"
                },
                {
                    "date": "31-Jan-2017",
                    "time": "22:20-22:24",
                    "color": "#8000FF"
                },
                {
                    "date": "31-Jan-2017",
                    "time": "22:25-22:29",
                    "color": "#00FFFF"
                },
                {
                    "date": "31-Jan-2017",
                    "time": "22:30-22:34",
                    "color": "#DD6F00"
                },
                {
                    "date": "31-Jan-2017",
                    "time": "22:35-22:39",
                    "color": "#FF0000"
                }
            ],
            "header": {
                "festival_code": "",
                "solar_term_code": "",
                "dateTimeDisplay_uc": "2017年1月31日 (二)",
                "dateTimeDisplay_en": "31 Jan 2017 (Tue)",
                "lunar_date_uc": "丁酉, 雞年正月初四日",
                "solar_term_uc": "",
                "solar_term_en": "",
                "publicholiday_uc": "農曆年初四",
                "publicholiday_en": "The fourth day of Lunar New Year"
            },
            "hko": {
                "BulletinTime": "201701312230",
                "Temperature": "16.8",
                "RH": "85",
                "HomeMaxTemperature": "18",
                "HomeMinTemperature": "16"
            },
            "fcartoon": {
                "BulletinDate": "20170131",
                "BulletinTime": "1800",
                "Icon1": "60",
                "Icon2": null
            },
            "currwx": {
                "btime": "201701312230",
                "temp": "16.8",
                "rh": "85"
            },
            "youtube": [
                "7v5f8GW_Mnc",
                "8NJUHduPnhE",
                "4zawtw7GQdM",
                "avwmjQXA3gs",
                "2EecslwoK_k",
                "oAHFS2dLl_U",
                "jhnEpSkEciw"
            ],
            "s": "p"
        };
        const formatted = hko.formatForecastNow({body: body});

        it('returns summary of forecast now', function () {
            expect(formatted).to.eq('Temperature: 16.8 celsius.' +
                ' Humidity: 85 percent.' +
                ' Weather forecast for tonight and tomorrow: Mainly <a title="Show in new window" href="javascript:Wxword(\'0003\')">cloudy</a>. <a title="Show in new window" href="javascript:Wxword(\'0446\')">Cool</a> tomorrow morning with a minimum temperature of about 16 degrees. <a title="Show in new window" href="javascript:Wxword(\'0007\')">Sunny periods</a> during the day with a maximum temperature of around 20 degrees. <a title="Show in new window" href="javascript:Wxword(\'0079\')">Moderate</a> easterly winds, <a title="Show in new window" href="javascript:Wxword(\'0081\')">fresh</a> at times.');
        });

    });
});