let deadpool ={
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${ this.nombre} ${ this.apellido } - poder: ${ this.poder}`
    }
};

console.log( deadpool.getNombre());

// ejemplo extrar datos de otras variables
///let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

//Declaracion de las variables en una sola linia
// Se cambio la variable de nombre por PrimerNombre Para 
// no causar conflicto con las previamente declaradas 
let{nombre: PrimerNombre, apellido, poder} = deadpool;
console.log(PrimerNombre, apellido, poder);


