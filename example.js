var hsl = require('./');
var hue = 133;
var saturation = 40;
var luminosity = 60;
var hex = hsl(hue, saturation, luminosity);
console.dir(hex); //#70c282