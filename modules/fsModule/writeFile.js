var fs = require('fs');

fs.writeFile("file.txt", "Hello World !!!", function(err){
    if(err) throw err;
    console.log("file written");
});