let toRgb = require('hsl-to-rgb-for-reals')
let debug = require('debug')('hsl-to-hex')

function max (value, n) {
    debug('Ensuring that ' + value + ' is no more than ' + n)
    return value > n ? n : value;
}

function min (value, n) {
    debug('Ensuring that ' + value + ' is no less than ' + n)
    return value < n ? n : value;
}

function cycle (value) {
    debug('Ensuring that ' + value + ' is within the range 0-359')
    value = max(value, 1e7);
    value = min(value, -1e7);
    while (value < 0) {
        value += 360;
    }
    while (value > 360) {
        value -= 360;
    }

    return value;
}

function hsl (hue, saturation, luminosity) {
    hue = cycle(hue);

    saturation = min(max(saturation, 100), 0);
    luminosity = min(max(luminosity, 100), 0);

    //convert to percentage (between 0 and 1)
    saturation /= 100;
    luminosity /= 100;

    var rgb = toRgb(hue, saturation, luminosity);

    //convert each value to 2char hex value
    return '#' + rgb.map(function (n) {
        return (256 + n).toString(16).substr(-2)
    }).join('')
}

module.exports = hsl