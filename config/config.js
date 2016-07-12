// Leyendo Archivos de configuraciones
var fs = require("fs");
var path = ("path");
var objconfig =
JSON.parse(
    fs.readFileSync("./config/config.json", "utf-8")
    );
    
objconfig.IP = process.env.IP || objconfig.IP;
objconfig.PORT = process.env.PORT || objconfig.PORT;
objconfig.STATIC_PATH = process.env.STATIC_PATH || objconfig.STATIC_PATH;
console.log("> STATIC_PATH: " + objconfig.STATIC_PATH);
module.exports = objconfig;
