const rp = require('request-promise');

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

module.exports = HKO;