var permutor = {};

permutor.getSmallestNumberWithNCubedPermutations = (cubeCount) => {
  let number = 0;
  let cubicPerms = [];
  do{
    let numObj = permutor.getCubeDetails(++number);
    cubicPerms = permutor.getCubicPermutations(numObj);
  }
  while(cubicPerms.length < cubeCount);
  return Math.min(...cubicPerms);
}

permutor.getCubicPermutations = (start) => {
  let perms = [];
  for(let i = 1; i<start.value; i++){
    let prevCube = permutor.getCubeDetails(i);

    let arePerms = permutor.areTheyPermutations(start.cube, prevCube.cube);
    if(arePerms){
      perms.push(prevCube.cube);
    }
  }

  perms.push(start.cube);

  return perms;

}

permutor.areTheyPermutations = (cube1, cube2) => {
  if(cube1.length == cube2.length){
    return permutor.containSameDigits(cube1.toString(),cube2.toString());
  }
  return false;
}

permutor.containSameDigits = (cube1Str, cube2Str) => {
  let cube1Sorted = cube1Str.split('').sort().join('');
  let cube2Sorted = cube2Str.split('').sort().join('');
  return cube1Sorted == cube2Sorted;
}

permutor.getCubeDetails = (number) => {
  let cube = permutor.getCube(number);
  var cubeLength = Math.log(cube) * Math.LOG10E + 1 | 0;
  return {'value':number, 'cube': cube, 'cubeLength': cubeLength};
}

permutor.getCube = (root) => {
  return Math.pow(root,3);
}

for(prop in permutor) {
   if(permutor.hasOwnProperty(prop)) {
     module.exports[prop] = permutor[prop];
   }
}
