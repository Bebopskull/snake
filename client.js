const net = require('net');
const input = require(`./input.js`)


///connecting to the server
const connect = function(){
  const conn = net.createConnection({
    host:`135.23.222.131`,
    port:50542
  });
  conn.setEncoding(`utf8`);



  conn.on(`data`, (data) => {
    console.log(`Server Says: ${data}`);
  });
  
  ///connect event
  conn.on(`connect`, () => {
    console.log(`Huzza!!! connection stablished!!!`);
    conn.write(`Name: Ed`);
  });


  
  return conn;
};


module.exports = { connect };



