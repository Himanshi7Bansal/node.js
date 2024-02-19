const os = require("os");

console.log(os.arch()); // x64 (64-bit)
console.log(os.hostname()); // Phenoix
console.log(os.platform()); // win32
console.log(os.type());
console.log(os.freemem()/1024/1024/1024);   // free system memory
console.log(os.totalmem()/1024/1024/1024);  // total system memory

