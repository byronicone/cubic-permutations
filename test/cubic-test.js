var permutor = require('../permutor');
var assert = require('assert');

describe('Permutor', () => {

  it('gets the cube of a number', () => {
    assert.equal(permutor.getCube(2),8);
  })

  it('gets an object representing a number\'s cube', () =>{
    assert.deepEqual(permutor.getCubeDetails(2), {'value':2, 'cube':8, 'cubeLength': 1});
  })

  it('finds the smallest cubed number (41063625) that has 3 permutations that are also cubes', () => {
    let smallestCube = permutor.getSmallestNumberWithNCubedPermutations(3);
    assert.equal(smallestCube, 41063625);
  })

});
