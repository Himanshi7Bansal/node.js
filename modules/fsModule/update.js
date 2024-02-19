var fs = require('fs');

fs.appendFile("file.txt", " The quick brown fox jump over the lazy dog.", function(err){
    if(err) throw err;
    console.log("updated");
})