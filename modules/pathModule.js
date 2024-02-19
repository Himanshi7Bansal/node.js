const path = require('path');

console.log(path.dirname('D:/programs/node/pathModule/index.js'))  // D:/programs/node/pathModule
console.log(path.extname('D:/programs/node/pathModule/index.js'))  // .js
console.log(path.basename('D:/programs/node/pathModule/index.js'))  // index.js

const myPath = (path.parse('D:/programs/node/pathModule/index.js'));    // all in one
console.log(myPath);    // print all details

// access individual
console.log(myPath.root);   
console.log(myPath.dir);   
console.log(myPath.base);   
console.log(myPath.ext);   
console.log(myPath.name);   