var assert = require ('assert');
var swe = require ('..');


describe('swisseph', function(){
  describe('version', function(){
    it('should return 2.00.00', function(){
      assert.equal('2.00.00', swe.version());
    })
  })
  describe('calculate when local time is 2012-01-01 07:00 +7', function(){
  	var flag = swe.FLG_SWIEPH + swe.FLG_SPEED;
  	var local_time = {year: 2012, month: 1, day: 1, hour: 7, minute: 0, timezone: 7};
  	var geo = {latitude:21.0333333, longitude:105.85, altitude:25};
  	swe.set_topo(geo.longitude, geo.latitude, geo.altitude);
  	var utc_time = swe.utc_time_zone(local_time.year, local_time.month, local_time.day, local_time.hour, local_time.minute, 0, local_time.timezone);
    var jd_time = swe.utc_to_jd(utc_time.year, utc_time.month, utc_time.day, utc_time.hour, utc_time.minute, 0, swe.GREG_CAL);

    it('utc_time_zone() should return {"year":2012,"month":1,"day":1,"hour":0,"minute":0,"second":0}', function(){
      assert.deepEqual({year:2012,month:1,day:1,hour:0,minute:0,second:0}, utc_time);
    })

    it('utc_to_jd() should return {"julianDayUT":2455927.5007660184,"julianDayET":2455927.499995189}', function(){
      assert.deepEqual({julianDayUT:2455927.5007660184,julianDayET:2455927.499995189}, jd_time);
    })

    it('swe.calc_ut(jd_time.julianDayUT, swe.SUN, flag).longitude should return 279.9590795912524', function(){
      assert.equal(279.9590795912524, swe.calc_ut(jd_time.julianDayUT, swe.SUN, flag).longitude);
    })
  })
})
