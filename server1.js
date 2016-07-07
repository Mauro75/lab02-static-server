// http
var http = require("http");
var fs = require('fs');
// Obteniendo información del entorno
// de ejecución con respecto al IP
// y al puerto que debemos usar en 
// nuestro server.
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '192.168.1.124';
if(IP=='127.0.0.1'){
    console.log("> ---- EJECUTANDOCE EN MODO LOCAL ----");
}
//Crear un servidor bàsico
var server = http.createServer(function(req, res){
    // Armar la respuesta http
    // Armar un encabezado http
    res.writeHead(200,{
        "Content-Type" : "text/html",
        "Server" : "ITGAM@4.2.4"
    });

    //lectura del archivo a seguir
    fs.readFile('./static/index.html',
    'utf8',function (err, content) {
        if(err){
            res.end("<h1>ERROR DE LECTURA</H1>");
        }else{
            res.end(content);

        }
    });
 
});
// Poner a trabajar al server
server.listen(PORT,IP,function(){
    console.log(`>Server listening @http://${IP}:${PORT}...`);
});