const express = require('express');
const app = express();
const morgan = require('morgan');
const users = require('./users/users');
const vehi = require('./vehiculos/vehiculos');
const serv = require('./servicios/servicios');
const bodyParser = require('body-parser');
const cors = require('../node_modules/cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Routes
// app.use(require('./routes/index'));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.192.240.14",
  port: 3307,
  database: "php_grupal",
  user: "Desarrollador",
  password: "12345678"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");//mensaje para asegurar que conectamos con la base de datos
});

//1 Lista de usuarios
app.get('/', (req, res) => users.getUsersList(req,res,con));//req es lo que recibe

//2 Información de un usuario, filtrando por su ID
app.get('/usuario', (req, res) => users.getUsersId(req,res,con));

//3 Lista de vehículos filtrando por ID de usuario
app.get('/vehiculo_por_id_usuario', (req, res) => vehi.getVehiIdUsu(req,res,con));

//4 Información de un vehículo filtrando por el ID del vehículo
app.get('/vehiculo_por_id_vehiculo', (req, res) => vehi.getVehiIdVehi(req,res,con));

//5 Lista de servicios filtrando por un ID de vehículo
app.get('/servicio_por_id_vehiculo', (req, res) => serv.getServIdVehi(req,res,con));

//6 Información de un servicio filtrando por el ID del servicio
app.get('/servicio_por_id_servicio', (req, res) => serv.getServIdServ(req,res,con));

//7 Modificar datos de usuario
app.get('/editUsuario', (req, res)=> users.editUsu(req,res,con));

//8 Crear un nuevo usuario   
app.get('/crearUsuario', (req, res)=> users.createUsu(res,res,con));

//9 Eliminar un usuario
app.get('/eliminarUsuario', (req, res)=> users.deleteUsu(req,res,con));

//10 Modificar un vehiculo
app.get('/editVehiculo', (req, res)=> vehi.editVehi(req,res,con));

//11 Crear un nuevo vehiculo
app.get('/crearVehiculo', (req, res)=> vehi.createVehi(req,res,con));

//12 Eliminar vehiculo
app.get('/eliminarVehiculo', (req, res)=> vehi.deleteVehi(req,res,con));

//13 Modificar un servicio
app.get('/editServicio', (req, res)=> serv.editServ(req,res,con));

//14 Crear un nuevo servicio
app.get('/crearServicio', (req, res)=> serv.createServ(req,res,con));

//15 Eliminar un servicio
app.get('/eliminarServicio', (req, res)=> serv.deleteServ(req,res,con));

//16 Información de un usuario y su lista de vehículos en la misma llamada filtrando por ID de usuario
app.get('/UsuVehi' , (req, res)=> users.UsuVehiList(req,res,con));

//17 Información de un vehículo y su lista de servicios en la misma llamada filtrando por ID de usuario 
app.get('/VehiServ' , (req, res)=> vehi.VehiServList(req,res,con));

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});