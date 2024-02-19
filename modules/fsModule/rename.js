var fs = require('fs');

fs.rename("file.txt", "newFile.txt", function(err){
    if(err) throw err;
    console.log("Renamed");
})