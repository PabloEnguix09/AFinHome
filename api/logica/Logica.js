const mysql = require( "mysql" );
const Modelo = require("./Modelo.js");
const BDConstantes = require("./Constantes/BDConstantes");
const BDCredenciales = require('./Constantes/BDCredenciales.js');

module.exports = class Logica {
    
    

    // .................................................................
    // nombreBD: Texto
    // -->
    // constructor () -->
    // .................................................................
    constructor( nombreBD, cb ) {

        this.laConexion = null;
        this.laConexion = mysql.createConnection({
            host     : BDCredenciales.MYSQL.BD_HOST,
            user     : BDCredenciales.MYSQL.BD_USUARIO,
            password : BDCredenciales.MYSQL.BD_CONTRASENYA,
            database : nombreBD
          });

         this.laConexion.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              
              return;
            }
            cb( err);
          });
    } // ()

    // .................................................................
    // nombreTabla:Texto
    // -->
    // borrarFilasDe() -->
    // .................................................................
    /**
     * 
     * @param {Texto} tabla nombre de la tabla para borrar sus registros 
     * @returns 
     */
    borrarFilasDe( tabla ) {
        return new Promise( (resolver, rechazar) => {
            this.laConexion.query("delete from " + tabla + ";",(err)=> ( err ? rechazar(err) : resolver()))
        })
    } // ()

    // .................................................................
    // borrarFilasDeTodasLasTablas() -->
    // .................................................................
    async borrarFilasDeTodasLasTablas() {
        await this.borrarFilasDe( BDConstantes.TABLA_MEDICIONES.NOMBRE_TABLA)
        await this.borrarFilasDe( BDConstantes.TABLA_USUARIOS.NOMBRE_TABLA)
        await this.borrarFilasDe( BDConstantes.TABLA_SENSORES.NOMBRE_TABLA)
        await this.borrarFilasDe( BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.NOMBRE_TABLA)
    } // ()

    obtenerTodosLosPisos(  ) {
        var textoSQL ='select * from ' + BDConstantes.TABLA_MEDICIONES.NOMBRE_TABLA;
        return new Promise( (resolver, rechazar) => {
            this.laConexion.query( textoSQL, function( err,res,fields ) {

                    if(!err){
                        // return 
                       resolver(res)

                    }else{
                        rechazar(err)
                    }
                    
                })
            })
        } // ()

     publicarPiso( piso ) {
        
        // creo la sentencia
        var textoSQL ='insert into ' +BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.NOMBRE_TABLA + '('+
            BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.ID_SENSOR + ',' + 
            BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.FECHA_HORA + ',' + 
            BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.AVERIADO  + ',' + 
            BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.POCA_BATERIA + ',' + 
            BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.DESCALIBRADO + ',' + 
            BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.LEIDO  + 
            ')  values ( ? , ?, ?, ' 
            +' IFNULL((SELECT r1.pocaBateria FROM ' + BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.NOMBRE_TABLA  + ' as r1 ORDER BY ' + BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.FECHA_HORA +' DESC LIMIT 1),0),'
            +' IFNULL((SELECT r2.descalibrado FROM ' + BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.NOMBRE_TABLA  + ' as r2 ORDER BY ' + BDConstantes.TABLA_REGISTRO_ESTADO_SENSOR.FECHA_HORA +' DESC LIMIT 1),0), '
            + ' ? );';

        return new Promise( (resolver, rechazar) => {
            var query = this.laConexion.query( 
                textoSQL, 
                [registroEstadoSensor.uuidSensor,registroEstadoSensor.fechaHora,registroEstadoSensor.averiado,0],
                function( err,res,fields ) {
                    ( err ? rechazar(err) : resolver() )
                })
            })
           
    } // ()

    // .................................................................
    // cerrar() -->
    // .................................................................
    cerrar() {
        return new Promise( (resolver, rechazar) => {
        this.laConexion.close( (err)=>{
                ( err ? rechazar(err) : resolver() )
            })
        })
    } // ()
} // class