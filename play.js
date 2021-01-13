const { connect } = require('./client.js');
const { setupInput } = require(`./input.js`);

////play sequence
////iniciating sequence/////
console.log(`connecting....`);
let conn = connect();
setupInput(conn);




// connect(`Move: up`);

