var exports = module.exports = {};

exports.getPermutations = function permute (prefix, str, resultSet){
  let len = str.length;
  if(len==0){
    if(prefix.charAt(0)!=0){
      resultSet.add(prefix);
    }
  }
  for(let i=0; i< len; i++){
    let newPrefix = prefix+str.charAt(i);
    let newStr = str.substr(0,i) + str.substr(i+1);
    permute(newPrefix, newStr, resultSet);
  }
}

exports.findOtherCubes = (num) => {
  //test return [56623104,66430125];
  //1. cube the number
  let cubed = Math.pow(num, 3);
  let set = new Set();
  //2. get all permutations of number
  module.exports.getPermutations('', cubed.toString(), set);

  //3. get the cubed root of each number
  //4. if it is not fractional, add to result set
  let result = [...set].filter( perm => (Math.cbrt(perm) % 1 ==0)
    && perm!=cubed ).map( permutation => parseInt(permutation));

  //5. return the list of numbers with cubed roots
  return result;
}

exports.getSmallestCube = (howMany) => {
  let looking = true;
  let number = 1;
  do{
    console.log(number);
    let cubes = exports.findOtherCubes(number)
    if (cubes.length == howMany){
      console.log(cubes);
      return Math.pow(number, 3);
    }
    number++;
  }
  while(looking);
}

