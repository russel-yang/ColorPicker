var fs = require("fs");
 
module.exports = {
    cert: fs.readFileSync(__dirname + "/ssl/server.crt"),
    key: fs.readFileSync(__dirname + "/ssl/server.key")
};