var fs = require('fs');

fs.unlink("file.txt", function(err){
    if(err) throw err;
    console.log("deleted");
})