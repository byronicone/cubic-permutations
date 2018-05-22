var permutor = {};

permutor.getSmallestNumberWithNCubedPermutations = (cubeCount) => {
  let number = 0;
  let cubicPerms = [];
  let potentialPerms = [];
  let currentDigitCount = 1;
  do{
    let numObj = permutor.getCubeDetails(++number);

    if(numObj.cubeLength > currentDigitCount){
      cubicPerms = permutor.getCubicPermutations(potentialPerms);
      currentDigitCount++;
      potentialPerms = [];
    }

    potentialPerms.push(numObj);

    for(let permArr of cubicPerms){
      if(permArr.length == cubeCount){
        console.log(permArr);
        permArr = permArr.map((obj) => { return obj.cube});
        return Math.min(...permArr);
      }
    }
  }
  while(true);
}

permutor.getCubicPermutations = (potentials) => {
  //sort cube digits
  potentials.map( (numObj) => {
        return numObj.sortedCube = numObj.cube.toString().split('').sort().join('');
  });

  potentials.sort( (a,b) => {
    return a.sortedCube - b.sortedCube;
  });

  //find the max number of duplicates.
  let perms = permutor.findDuplicates(potentials);

  return perms;

}

permutor.findDuplicates = (arr) => {
  let dupes = [[arr[0]]];
  let count = 0;
  for(let i = 0; i<arr.length-2; i++){
    let current = arr[i];
    let next = arr[i+1];
    if(next.sortedCube==current.sortedCube){
      dupes[count].push(next);
    }
    else{
      if(dupes[count].length <2){
        dupes.pop();
      }
      else{
        count++;
      }
      dupes.push([]);
      dupes[count].push(next);
    }
  }

  return dupes;
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
