// http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var staticServer = require ('./internals/static-server');
// Obteniendo las configuraciones
// del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1'){
    console.log(" ---- EJECUTANDOCE EN MODO LOCAL ----");
}
//Crear un servidor bàsico
var server = http.createServer(function(req, res){
    // Obtener la url del archivo
    var url = req.url;
    // Sirvo la url del archivo
    staticServer.serve(url,res);
});
// Poner a trabajar al server
server.listen(PORT,IP,function(){
    console.log(`>Server listening @http://${IP}:${PORT}...`);
});