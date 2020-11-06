let toRgb = require('hsl-to-rgb-for-reals')

function max (value, n) {
    return value > n ? n : value;
}

function min (value, n) {
    return value < n ? n : value;
}

function cycle (value) {
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