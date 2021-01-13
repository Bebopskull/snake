const net = require('net');


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
  
  conn.on(`connect`, () => {
    conn.write(`Huzza!!!`);
  });
  return conn;
};
console.log(`connecting....`);
connect();



