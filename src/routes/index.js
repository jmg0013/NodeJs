const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})
 
module.exports = router;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.192.240.18",
  port: 3307,
  database: "php_grupal",
  user: "Desarrollador",
  password: "12345678"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

let sql = "SELECT * from usuario where id_usuario = 1";
con.query(sql, function (err, result) {
  if (err) throw err;

  console.log("Result: " + JSON.stringify(result,null,2));
});