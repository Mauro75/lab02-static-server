// 1. Cargando el driver de Mongo que
// me permitira conectarme a la base de datos
var mongodb = require("mongodb");
// 2. Cargando al cliente de driver
var mongoClient = mongodb.mongoClient;
// var fortunePaper = {
//     "mensaje" :
//     "La honestidad es un regalo caro, no lo esperes de una persona baratas"
// };
module.exports = {
    "getFortune" : function(cb){
        // Conectando el cliente con la base de datos
        mongoClient.connect("mongodb://127.0.0.1:27017/fortune",
        function(err, db){
            if(err){
                console.log(">ERROR al conectarse a la base de datos: mongodb://127.0.0.1:27017/fortune");
                var fortunePaper= {
                    "mensaje":"La honestidad es un regalo caro, no lo esperes de una persona baratas" 
                };

        
        // convirtiendo el fortunePaper de objeto
        // a su version en string
        fortunePaperRespose = JSON.stringify(fortunePaper);
        // Ejecuto el callback (cb) pasandole
        // como parametro el fortunepaper string
         cb(fortunePaperRespose);
    }else{
        var papersCollection = db.collection("papers");
        var objetoResultado = papersCollection.find({});
        objetoResultado.toArray(function(err, papers){
            var fortunePaperRespose=JSON.stringify(paper[0]);
            db.close()
            cb(fortunePaperRespose);
        })
    };
