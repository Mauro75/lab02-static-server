// Manejadores de rutas virtuales
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
    }
};