'use strict';
module.change_code = 1;

const Alexa = require('alexa-app');
const app = new Alexa.app('hko');
const HKO = require('./lib/hko');

app.launch(function (req, res) {
    const prompt = "For Weather Forecast from Hong Kong Observatory.";
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('ForecastNow', {
        utterances: ['{|forecast weather|weather forecast|weather|status} {now|today}']
    }, function (req, res) {
        const hko = new HKO();
        hko.getWeatherData().then(function(data){
            res.say(hko.formatForecastNow(data)).send();
        });
        return false;
    }
);

//hack to support custom utterances in utterance expansion string
var utterancesMethod = app.utterances;
app.utterances = function() {
    return utterancesMethod().replace(/\{\-\|/g, '{');
};

module.exports = app;