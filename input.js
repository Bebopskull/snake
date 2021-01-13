const stdin = process.stdin;


// Stores the active TCP connection object.
let connection;

const handleUserInput = function(data){
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
/////mouvement/////
    if (key === `w`) {
      console.log(`up`)
      connection.write(`Move: up`); 
      // setTimeout(() => {
      // }, 50);
    }
    if (key === `s`) {
      console.log(`down`)
      connection.write(`Move: down`); 
      // setTimeout(() => {
      // }, 50);
    }
    if (key === `a`) {
      console.log(`left`);
      connection.write(`Move: left`); 
      // setTimeout(() => {
      // }, 50);
    }
    if (key === `d`) {
      console.log(`right`);
      connection.write(`Move: right`); 
    }
    


  });
  
}
const setupInput = function(data) {

  handleUserInput();
  connection = data;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;

} 


module.exports = { setupInput };