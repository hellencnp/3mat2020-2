//Caracteristica da duncao abaixo
//- tem apenas um parametro (argumento)
//-possui uma unica linha de codigo com return

let quadrado = function(x){
    return x * x
}
//Arrow function: sintaxe simplificada
//- não usa a palavra chave  function
//- o unico argumento nao presica de parenteses
//- entre o argumento e o corpo da funcao vem o sinal => (arrow,flecha)
//- a unica linha de codigo nao precisa de {} nem da palavra chave return
let quadrado2 = x => x * x

console.log(quadrado(7))
console.log(quadrado2(7))

let potencia = function (base,exp){
    return base ** exp
}

// quando o numero de argumentos  !=0, os parenteses da lista  de argumentos precisam ser mantidos
 let potencia2 = (base,exp) => base ** exp

 console.log(potencia(2,5))
 console.log(potencia2(2,5))