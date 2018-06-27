console.log("running off.js");
var dotstar     = require('dotstar'),
    SPI         = require('pi-spi'),
    sleep       = require('sleep');

spi = SPI.initialize('/dev/spidev0.0');
const ledStripLength = 30;

const ledStrip = new dotstar.Dotstar(spi, {
  length: ledStripLength
});

ledStrip.off();
console.log("Off Finished");