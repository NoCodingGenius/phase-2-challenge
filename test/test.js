const assert = require('chai').assert;
const getMonth = require('../part-1/functions').getMonth;
const reverseSentence = require('../part-1/functions').reverseSentence;
const nameProps = require('../part-1/functions').nameProps;
const filterBetween = require('../part-1/functions').filterBetween;

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

  describe('nameProps', function() {
    it('nameProps should return ["age", "name", "phone"]', function() {
      assert.deepEqual(nameProps(friend), ['age', 'name', 'phone'])
    })

    it('nameProps should not return an empty object {}', function() {
      assert.isNotObject(nameProps({}), [])
    })
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
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

    it('filterBetween should not return an empty array []', function() {
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
