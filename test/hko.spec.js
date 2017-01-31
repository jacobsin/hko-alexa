const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiDeepMatch = require('chai-deep-matcyh');
chai.use(chaiAsPromised);
chai.use(chaiDeepMatch);
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
    });
});