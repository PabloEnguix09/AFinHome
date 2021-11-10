const {json} = require('express')
const Modelo = require('../logica/Modelo.js')

module.exports.cargar = function(servidorExpress, laLogica){
    
    // .......................................................
    // GET /prueba
    // .......................................................
    servidorExpress.get('/prueba', async function( peticion, respuesta ){
        console.log( " * GET /prueba " )
        respuesta.send("¡Funciona!")
        
    }) // put /mediciones


    // .......................................................
    // POST /mediciones
    // .......................................................
    servidorExpress.post('/piso', async function( peticion, respuesta ){
        console.log( " * POST /piso " )
        var listaMedicionesJSON = JSON.parse(peticion.body)["res"];
        var mediciones = Modelo.Piso//! faltaN cosaS xd

           
        try{
            var res = await laLogica.publicarPiso(piso)
            // todo ok 
            respuesta.status(201).send( JSON.stringify( {mensaje:"Mediciones creadas correctamente"} ) )
        }catch(error){
            
            if(error.errno == 1452){ // 1452 es el codigo de error en una clave ajena
                respuesta.status(500).send( JSON.stringify( {mensaje:"El usuario o sensor no existe"} ) )
            }else{
                respuesta.status(500).send( JSON.stringify( {mensaje:"Error desconocido"} ) )
            }
        }
    }) // put /mediciones

    // .......................................................
    // get /mediciones
    // .......................................................
    servidorExpress.get('/pisos', async function( peticion, respuesta ){
        console.log( " * GET /pisos " )
        
        
        try{
            var res = await laLogica.obtenerTodosLosPisos();

            // todo ok 
            // si el array de resultados no tiene una casilla ...
            if( res.length == 0 ) {
                // 204: realizado ok pero sin resultados
                respuesta.status(204).send();
                return
            }
            // todo ok 

            respuesta.send(a)

        }catch(error){
            respuesta.status(500).send(  {mensaje:error}  )
        }
    }) // get /pisos

}