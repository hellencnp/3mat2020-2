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

 // funcoes tradicional sem argumentos
 let msgErro = function(){
 console.log('erro inesperado')
 }
 //retorna um numero inesperado entre 0 e 99
 let aleatorio = function (){
     //math.random(): retorna um numero inesperado entre 0 e 1
     // math.floor(): "corta fora" as casas decimais de um numero
     return Math.floor (Math.random()* 100)

 }
 msgErro()
 console.log (aleatorio())

 // arrow function sem argumentos
 // - os parenteses vazios são obrigatorios.
 let msgerro2 = () => console.log('erro inesperado.')
 let aleatorio2 = () => Math.floor (Math.random()*100)


 //funcao tradicional com 1+ argumentos
 let areatri = function(base,altura){
     return base * altura /2 //area de um triangulo
 }
 //arrow function  com 1+ argumentos
 //- os argumentos devem estar obrigatoriamente entre parenteses
 let areatri2 = (base,altura) => base*altura / 2
 console.log(areatri(4,2.5))
 console.log(areatri2(4,2.5))

 //funcao tradicional com mais de uma linha de corpo
 let fatorial = function(){
     let res = 1
     for (let i = n; i >= 1 ; i--){
        res *=1
 }
    return res
}



//arrow function com mais de uma linha de corpo
let fatorial2 = n=>{
    let res  = 1
    for( let i = n; i >= 1; i--){
        res *= 1
    }
    return res
}
console.log(fatorial(5))
console.log(fatorial2(5))