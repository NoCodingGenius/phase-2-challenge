const assert = require('chai').assert;
const getMonth = require('../part-1/functions').getMonth;
const filterBetween = require('../part-1/functions').filterBetween;

describe('Part-1 Tests', function(){
describe('getMonth', function(){
    it('month should return August', function () {
      assert.equal(getMonth('2017, 8, 3'), 'August')
    })

    it('month should not return a number', function () {
      assert.notTypeOf(getMonth('2017, 7, 9'), 'number')
    })
  });

  describe('filterBetween', function(){
      it('filterBetween should return ["dog", "lion", "cow"]', function () {
        let arr = ["dog", "cat", "zebra", "ape", "lion", "cow"]
        assert.deepEqual(filterBetween(arr, "chimp", "lobster"), ["dog", "lion", "cow"])
      })

      it('filterBetween should return not []', function () {
        let arr = ["dog", "cat", "zebra", "ape", "lion", "cow"]
        assert.notDeepEqual(filterBetween(arr, 'act', 'chimpanzee'), [])
      })
    });


});
