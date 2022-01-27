const { editUsu } = require("../users/users");

function getServIdVehi(req,res,con) {
    const id_vehiculo = req.query.id_vehiculo;

    let sql = "SELECT * from servicio where id_vehiculo="+id_vehiculo;
    con.query(sql, function (err, result) {
    if (err) throw err;

    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
    });
}

function getServIdServ(req,res,con) {
    const id_servicio = req.query.id_servicio;

    let sql = "SELECT * from servicio where id_servicio="+id_servicio;
    con.query(sql, function (err, result) {
    if (err) throw err;

    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
    });
}

function editServ(req,res,con) {
    let id_servicio = req.query.id_servicio
    let descripcion = req.query.descripcion

    let sql = "UPDATE servicio SET descripcion ='"+descripcion+"' where id_servicio="+id_servicio;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function createServ(req,res,con) {
    let id_serv = req.query.id_servicio
    let name = req.query.nombre
    let date = req.query.fecha
    let id_vehi = req.query.id_vehiculo
    let desc = req.query.descripcion

    let sql = "INSERT INTO servicio VALUES(('"+id_serv+"', '"+name+"', '"+date+"', '"+id_vehi+"', '"+desc+"');";
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function deleteServ(req,res,con) {
    let id_serv = req.query.id_servicio

    let sql = "DELETE FROM servicio where id_servicio="+id_serv;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

exports.getServIdVehi = getServIdVehi;
exports.getServIdServ = getServIdServ;
exports.editServ = editServ;
exports.createServ = createServ;
exports.deleteServ = deleteServ;