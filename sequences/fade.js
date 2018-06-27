console.log("running fade.js");
var dotstar     = require('dotstar'),
    SPI         = require('pi-spi'),
    sleep       = require('sleep');

spi = SPI.initialize('/dev/spidev0.0');
const ledStripLength = 30;

const ledStrip = new dotstar.Dotstar(spi, {
  length: ledStripLength
});

while(1) {
    fade(15);
};

function fade(delay){
    var r = 255;
    var g = 0;
    var b = 0;
    var bright = 0.8;
    var delay = delay;
  
    for(; b < 255; b++){
      ledStrip.all(r, g, b, bright);
      ledStrip.sync();
      sleep.msleep(delay);
    };
    for(; g < 255; g++){
      ledStrip.all(r, g, b, bright);
      ledStrip.sync();
      sleep.msleep(delay);
    };
    for(; r > 0; r--){
      ledStrip.all(r, g, b, bright);
      ledStrip.sync();
      sleep.msleep(delay);
    };
    for(; g > 0; g--){
      ledStrip.all(r, g, b, bright);
      ledStrip.sync();
      sleep.msleep(delay);
    };
    for(; r < 255; r++){
      ledStrip.all(r, g, b, bright);
      ledStrip.sync();
      sleep.msleep(delay);
    };
    for(; b > 0; b--){
      ledStrip.all(r, g, b, bright);
      ledStrip.sync();
      sleep.msleep(delay);
    };
  };
