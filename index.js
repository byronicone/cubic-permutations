var permutor = require('./permutor');
var util = require('util');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'quit\n') {
    done();
  }
  if( isNaN(text) ){
    console.log('input must be a number');
  }
  else{
    let howManyCubes = text;
    let answer = permutor.getSmallestNumberWithNCubedPermutations(howManyCubes);
    console.log(answer);
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}

