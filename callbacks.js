setTimeout(function() {
    console.log('hola mundo');

}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Christian',
        id
    }
    callback(usuario);
    if (id === 20) {
        callback(`EL usario con id ${id},no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(15, (err, usuario) => {

    if (err) {
        return console.log(err);

    }
    console.log('Usuario de base de datos', usuario);

});