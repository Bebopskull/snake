const stdin = process.stdin;

const handleUserInput = function(data){
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  
}
const setupInput = function(data) {
  handleUserInput(data);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;

} 


module.exports = { setupInput };