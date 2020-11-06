var hsl = require('../')
var test = require('tap').test

test('pure white', ({is, end}) => {
    var expected = '#ffffff'
    var actual = hsl(0, 100, 100);
    var it = 'max saturation and luminosity should return pure white';

    is(actual, expected, it);
    end();
})


test('medium gray', function (assert) {
    var expected = '#808080'
    var actual = hsl(0, 0, 50);
    var it = 'no saturation and 50% luminosity should return medium gray';

    assert.is(actual, expected, it);
    assert.end();
})

test('red', function (assert) {
    var expected = '#ff0000'
    var actual = hsl(0, 100, 50);
    var it = 'max saturation and 50% luminosity should return red';

    assert.is(actual, expected, it);
    assert.end();
})

test('degree overflow', function (assert) {
    var expected = hsl(1, 100, 50);
    var actual = hsl(361, 100, 50);
    var it = '1 degree and 361 should have the same result'

    assert.is(actual, expected, it);
    assert.end();
})

test('degree underflow', function (assert) {
    var expected = hsl(-1, 100, 50);
    var actual = hsl(359, 100, 50);
    var it = '-1 degree and 359 should have the same result'

    assert.is(actual, expected, it);
    assert.end();
})

test('max constraint', function (assert) {
    var expected = hsl(0, 100, 50);
    var actual = hsl(0, 112, 50);
    var it = '112 should max out at 100% saturation'

    assert.is(actual, expected, it);
    assert.end();
})


test('min constraint', function (assert) {
    var expected = hsl(0, 0, 50);
    var actual = hsl(0, -12, 50);
    var it = 'negative numbers should bottom out at 0% saturation'

    assert.is(actual, expected, it);
    assert.end();
})