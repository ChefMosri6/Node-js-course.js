function saludar (nombre ){
    let mensaje = `hola ${ nombre}`;
    return mensaje;
}
let saludo = saludar('Christian')
console.log(saludo);