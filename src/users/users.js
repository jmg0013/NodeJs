function getUsersList(req,res,con) {
    let sql = "SELECT * from usuario";//aqui podemos utilizar una variable o escribirlo en la consulta
    con.query(sql, function (err, result) {
    if (err) throw err;

    res.json(result);//aqui devuelve

    console.log("Result: " + JSON.stringify(result,null,2));
    });
}

function getUsersId(req,res,con) {
    const id_usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL

    let sql = "SELECT * from usuario where id_usuario = "+id_usuario;//aqui podemos utilizar una variable o escribirlo en la consulta
    con.query(sql, function (err, result) {
    if (err) throw err;

    res.json(result);//aqui devuelve

    console.log("Result: " + JSON.stringify(result,null,2));
    });
}

function editUsu(req,res,con) {
    const id_usuario = req.query.id_usuario
    const nombre = req.query.nombre

    let sql = "UPDATE usuario SET nombre ='"+nombre+"' where id_usuario="+id_usuario;
    con.query(sql, function(err, result){
    if(err) throw err;

    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function createUsu(req,res,con) {
    let id_usuario = req.query.id_usuario
  let nombre = req.query.nombre
  let apell = req.query.apell
  let dni = req.query.dni
  let pass = req.query.pass
  let tipo_user = req.query.tipo

  let sql = "INSERT INTO usuario VALUES('"+id_usuario+"', '"+nombre+"', '"+apell+"', '"+dni+"', '"+pass+"', '"+tipo_user+"');";
  con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

function deleteUsu(res,res,con) {
    let id_usuario = req.query.id_usuario

    let sql = "DELETE FROM usuario where id_usuario="+id_usuario;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2)); 
  });
}

function UsuVehiList(req,res,con) {
    let id_usuario = req.query.id_usuario

    let sql = "SELECT * FROM usuario JOIN vehiculo ON vehiculo.id_usuario = usuario.id_usuario WHERE usuario.id_usuario = "+id_usuario+ " & vehiculo.id_usuario="+id_usuario;
    con.query(sql, function(err, result){
    if(err) throw err;
    
    res.json(result);

    console.log("Result: " + JSON.stringify(result,null,2));
  });
}

exports.getUsersList = getUsersList;
exports.getUsersId = getUsersId;
exports.editUsu = editUsu;
exports.createUsu = createUsu;
exports.deleteUsu = deleteUsu;
exports.UsuVehiList = UsuVehiList;