const assert = require('chai').assert;
const getMonth = require('../part-1/functions').getMonth;

describe('getMonth', function(){
    it('month should return August', function () {
      assert.equal(getMonth('2017, 8, 3'), 'August')
    })

    it('month should not return a number', function () {
      assert.notTypeOf(getMonth('2017, 7, 9'), 'number')
    })
  });
