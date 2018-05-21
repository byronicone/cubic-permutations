var permutor = require('../permutor');
var assert = require('assert');

describe('Permutor', () => {

  it('gets the cube of a number', () => {
    assert.equal(permutor.getCube(2),8);
  })

  it('gets an object representing a number\'s cube', () =>{
    assert.deepEqual(permutor.getCubeDetails(2), {'value':2, 'cube':8, 'cubeLength': 1});
  })

  it('finds group of 3 permutations', () => {
    let number = {'value':405, 'cube':66430125, 'cubeLength':8};
    let perms = permutor.getCubicPermutations(number);
    assert.deepEqual(perms, [41063625,56623104,66430125]);
  })

  it('matches numbers in a list that are permutations of itself', () => {
    let number = {'value':8, 'cube':512, 'cubeLength':3};
    let perms = permutor.getCubicPermutations(number);
    assert.deepEqual(perms,[125,512]);
  })

  it('compares two cubes and returns true if they are permutations of each other', () => {
    let isPermutation = permutor.areTheyPermutations(41063625, 56623104);
    assert.equal(isPermutation, true);
  })

  it('compares two cubes and returns false if they are NOT permutations of each other', () => {
    let isPermutation = permutor.areTheyPermutations(41063625, 56683104);
    assert.equal(isPermutation, false);
  })

  it('determines if the two strings contain the same digits', () => {
    let isPermutation = permutor.containSameDigits('41063625', '56683104');
    assert.equal(isPermutation, false);
  })


  it('determines if the two strings contain the same digits', () => {
    let isPermutation = permutor.containSameDigits('41063625', '56623104');
    assert.equal(isPermutation, true);
  })

  it('finds the smallest cubed number (41063625) that has 3 permutations that are also cubes', () => {
    let smallestCube = permutor.getSmallestNumberWithNCubedPermutations(3);
    assert.equal(smallestCube, 41063625);
  })


  function createArrayOfCubes(start, end){
    let cubeArray = [];

    for(let i = start-1; i<end-1; i++){
      cubeArray[i] = permutor.getCubeDetails(i+1);
    }

    return cubeArray;
  }
});
