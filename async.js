const fs = require('fs');
const crypto = require('crypto');
const a =1024;
const b = 2048;

fs.readFile('./input.txt','utf8',(err, data)=>{
    console.log(data)
});

crypto.pbkdf2('secret', 'salt', 500000, 32, 'sha512', (err, key) => {
    if (err) throw err;
    console.log(key.toString('hex'));
});

setTimeout(()=>{
    console.log("Timer is done");
},0)

console.log(a*b);