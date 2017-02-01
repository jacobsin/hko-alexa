'use strict';
module.change_code = 1;

const rp = require('request-promise');
const _ = require('lodash');
const striptags = require('striptags');
const ENDPOINT = 'http://www.hko.gov.hk/wxinfo/json/one_json.xml';

function HKO() {}

HKO.prototype.getWeatherData = function() {
    const options = {
        method: 'GET',
        uri: ENDPOINT,
        resolveWithFullResponse: true,
        json: true
    };
    return rp(options);
};

HKO.prototype.formatForecastNow = function(data) {
    const template = _.template('Temperature: ${data.body.hko.Temperature} celsius.' +
        ' Humidity: ${data.body.hko.RH} percent.' +
        ' ${data.body.FLW.ForecastPeriod}: ${striptags(data.body.FLW.ForecastDesc)}');
    return template({
        data: data,
        striptags: striptags
    });
};

module.exports = HKO;