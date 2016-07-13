// http
var http = require("http"),
	fs = require('fs'),
	config = require("./config/config.js"),
	staticServer = require('./internals/static-server'),
	colors = require("colors"),
	handlers = require('./internals/handlers');

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
    // de la peticion le asigno una variable url
    var url = req.url;
    if(url == "/"){
        url = "/index.html";
    }

    // Verificando que la peticion
    // del cliente sea una ruta
    // virtual
    if(typeof(handlers[url]) === 'function'){
        // Si entro aqui, significa que
        // existe un manejador para la url
        // que se esta solicitando por lo tanto
        // la ejecuto
        handlers[url](req, res)
    }else{
        console.log(`> URL Solicitada: ${url} ...`. yellow);
    // Sirvo la url del archivo
    staticServer.serve(url,res);
    }   
});
// Poner a trabajar al server
server.listen(PORT,IP,function(){
    console.log(`>Server listening @http://${IP}:${PORT}...`);
});