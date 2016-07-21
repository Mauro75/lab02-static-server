// Manejadores de rutas virtuales
var fortune = require("./fortune");
var fechaDeNacimiento = new Date();

module.exports = {
    "/edad/mauro-leal" : function (req, res) {
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Calculando la edad
        var hoy = new Date();
        var age =
        Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
        // Armando el json
        var objetoRespuesta = {
            "edad" : 30
        };
        var jsonResponse = 
        JSON.stringify(objetoRespuesta);
        // Envio la respuesta al cliente
        res.end(jsonResponse);
    },
    "/getfortune":function(req, res) {
        // // se obtiene el mensaje de la suerte
        //var fortunePaper = {
        //    "mensaje" :
        //    "La honestidad es un regalo caro, no lo esperes de una persona baratas"
        //};
        // Se configura el ancabezado de respuesta
        // HTTP
        
        // });
        // Parseandoa string el objetoRespuesta
        // de respuesta
        //var jsonResponse = JSON.stringify(fortunePaper);
        fortune.getFortune(function(fortunePaper) {
            res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Respondemos el Objeto
        res.end(jsonResponse);
    });
}
};
