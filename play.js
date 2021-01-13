const { connect } = require('./client.js');

const stdin = process.stdin;

const setupInput = function(data, handleUserInput) {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;

} 

const handleUserInput =function(data){
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  
}
////play sequence
////iniciating sequence/////
console.log(`connecting....`);
connect();
setupInput(`data`, handleUserInput);




// connect(`Move: up`);

