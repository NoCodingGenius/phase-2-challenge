const assert = require('chai').assert;
const getMonth = require('../part-1/functions').getMonth;
const filterBetween = require('../part-1/functions').filterBetween;
const reverseSentence = require('../part-1/functions').reverseSentence;

describe('Part-1 Tests', function() {
  describe('getMonth', function() {
    it('month should return August', function() {
      assert.equal(getMonth('2017, 8, 3'), 'August')
    })

    it('month should not return a number', function() {
      assert.notTypeOf(getMonth('2017, 7, 9'), 'number')
    })
  });

  describe('reverseSentence', function() {
    it('reverseSentence should return "dog. the over jumped cat The"', function() {
      assert.equal(reverseSentence("The cat jumped over the dog."), "dog. the over jumped cat The")
    })

    it('reverseSentence should not return a "Hello, world!"', function() {
      assert.notEqual(reverseSentence("Hello, world!"), "Hello, world!")
    })
  });

  describe('filterBetween', function() {
    it('filterBetween should return ["dog", "lion", "cow"]', function() {
      let arr = [
        "dog",
        "cat",
        "zebra",
        "ape",
        "lion",
        "cow"
      ]
      assert.deepEqual(filterBetween(arr, "chimp", "lobster"), ["dog", "lion", "cow"])
    })

    it('filterBetween should return not []', function() {
      let arr = [
        "dog",
        "cat",
        "zebra",
        "ape",
        "lion",
        "cow"
      ]
      assert.notDeepEqual(filterBetween(arr, 'act', 'chimpanzee'), [])
    })
  });

});
