let nombre = 'Deadpool';
let real = 'Wade Winston';
/// forma tradicioanl de mostrar el texto en pantalla
console.log(nombre + ''+ real);
console.log(`${ nombre} ${ real}`);

let nombreCompleto = nombre + '' + real;
let nombreTemplate = `${ nombre }${real}`;
// verificia si el contenido y su identidad son iguales 
console.log(nombreCompleto === nombreTemplate);
// funcion de imprimir codigo por medio de funcion 
function getNombre(){
    // regresa las variables que estamos pidiendo
    return `${nombre } ${ real}`;

}
// Lo muestra en la pantalla 
console.log (`El nombre de: ${ getNombre()}`);
