var permutor = require('../permutor');
var assert = require('assert');

var randomInt = Math.floor(Math.random() * 1000);
var exampleInt = 345;
var exampleString = 'ABC';

describe('Permutor', () => {
  it('finds other permutations of '+exampleInt+' that are cubes', () => {
    let cubes = permutor.findOtherCubes(exampleInt);
    assert.deepEqual(cubes, [4106362,566430125,56623104]);
  })
  it('finds all permutations of string ' + exampleString, () => {
    let set = new Set();
    permutor.getPermutations('',exampleString, set);
    assert.deepEqual(set, new Set(['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']));
  })
  it('finds the smallest cubed number (41063625) that has 3 permutations that are also cubes', () => {
    let smallestCube = permutor.getSmallestCube(2);
    assert.equal(smallestCube, 41063625);
  })
});
