var fs = require("fs");

fs.open("file.txt", "w", function (err) {
    if (err) throw err;
    console.log("Saved!");
});
