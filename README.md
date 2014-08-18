node-swisseph
===================================

## About

node-swisseph is a code cleanup from https://github.com/mivion/swisseph

## Getting started

To install run:

```
$ npm install node-swisseph
```

## Usage

Example:

```javascript
var swisseph = require('node-swisseph');

// Test date
var date = {year: 2012, month: 1, day: 1, hour: 0};
console.log('Test date:', date);

var flag = swisseph.FLG_SPEED;

// path to ephemeris data
swisseph.set_ephe_path (__dirname + '/../ephe');

// Julian day
swisseph.julday(date.year, date.month, date.day, date.hour, swisseph.GREG_CAL, function (julday_ut) {
  assert.equal(julday_ut, 2455927.5);
  console.log('Julian UT day for date:', julday_ut);

  // Sun position
  swisseph.calc_ut(julday_ut, swisseph.SUN, flag, function (body) {
    assert(!body.error, body.error);
    console.log('Sun position:', body);
  });

  // Moon position
  swisseph.calc_ut(julday_ut, swisseph.MOON, flag, function (body) {
    assert(!body.error, body.error);
    console.log('Moon position:', body);
  });
});
```
##API

http://pythonhosted.org/pyswisseph/

##License
GNU public license version 2 or later
