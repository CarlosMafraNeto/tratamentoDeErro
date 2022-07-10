function ValidaArray (array, number){
  if(!array && !number){
    throw new ReferenceError('Envie os parâmetros');
  } else if (typeof array !== Object) {throw new TypeError("O array precisa ser tipo Object")} else if ( typeof number !== Number){ throw new TypeError("O número é inválido")} else if (array.lenght !== number ){
    throw RangeError("O tamanho é inválido")
  }


  try{
    if(!array && !number){
      throw new ReferenceError('Envie os parâmetros');
    } else if (typeof array !== Object) {throw new TypeError("O array precisa ser tipo Object")} else if ( typeof number !== Number){ throw new TypeError("O número é inválido")} else if (array.lenght !== number ){
      throw RangeError("O tamanho é inválido")
    }
    return array;
  }

  catch(e){
if(e instanceof ReferenceError){
  console.log("É um ReferenceError"), console.log(e.name), console.log(e.stack)
} else if (e instanceof TypeError){
  console.log("Esse é um typeError")
} else { console.log("Ocorreu um erro inesperado")}
  }