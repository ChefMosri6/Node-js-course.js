 let deadpool ={
     nombre:'Wade',
     apellido: 'Windston',
     poder: 'Regeneracion',
     getSuperPoder: function(){
         return`${this.nombre}${this.apellido} -poder:${this.poder}`

     }
 }
console.log(deadpool.getSuperPoder());
