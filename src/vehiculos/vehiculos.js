const { editUsu } = require("../users/users");

function getVehiIdUsu(req,res,con) {
    const id_usuario = req.query.id_usuario;
    
    let sql = "SELECT * from vehiculo where id_usuario = "+id_usuario;
    con.query(sql, function (err, result) {
    if (err) throw err;

    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
    });
}

function getVehiIdVehi(req,res,con) {
    const id_vehiculo = req.query.id_vehiculo;

    let sql = "SELECT * from vehiculo where id_vehiculo = "+id_vehiculo;
    con.query(sql, function (err, result) {
    if (err) throw err;

    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
    });
}

function editVehi(req,res,con) {
    let marca = req.query.marca
    let id_vehiculo = req.query.id_vehiculo

    let sql = "UPDATE vehiculo SET marca ='"+marca+"' where id_vehiculo="+id_vehiculo;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);
    
    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function createVehi(req,res,con) {
    let id_vehiculo = req.query.id_vehi
    let matricula = req.query.matri
    let marca = req.query.marca
    let modelo = req.query.modelo
    let id_usuario = req.query.id_usu

    let sql = "INSERT INTO vehiculo VALUES ('"+id_vehiculo+"', '"+matricula+"', '"+marca+"', '"+modelo+"', '"+id_usuario+"');";
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function deleteVehi(req,res,con) {
    let id_vehiculo = req.query.id_vehi

    let sql = "DELETE FROM vehiculo where id_vehiculo="+id_vehiculo;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function VehiServList(req,res,con) {
    let id_usuario = req.query.id_usuario

    let sql = "SELECT * FROM vehiculo JOIN servicio ON vehiculo.id_vehiculo = servicio.id_vehiculo WHERE vehiculo.id_usuario ="+id_usuario;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

exports.getVehiIdUsu = getVehiIdUsu;
exports.getVehiIdVehi = getVehiIdVehi;
exports.editVehi = editVehi;
exports.createVehi = createVehi;
exports.deleteVehi = deleteVehi;
exports.VehiServList = VehiServList;