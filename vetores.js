let vetor1 = []
let vetor2 = Array()

//declarando ja com valor

let vetor3 = ['azul','rosa','verde']
let vetor4 = Array(1,2,3)

//adicionar novos valores a um vetor

//push ((para adicionar novos itens no final do vetor )
vetor1.push ('laranja')
vetor1.push ('melancia')
vetor1.push ('pera')

//unshift (para adicionar novos itens no inicio do vetor )
vetor1.unshift('jabuticaba')
vetor1.unshift('acerola')

//splice
//1º parametro : posição de inserção
//2º parametro : quantos elementos serão apagados
//3º parametro : item a ser inserido
vetor1.splice(3,0,'abacaxi')


//remover itens do vetor
//forma1= pop()-> remove item do final do vetor
 let removido = vetor1.pop()
 let removido2 = vetor1.pop()

console.log(vetor1, removido,removido2)
//forma2 = shift() remove um item no inicio do vetor
let removido3 = vetor1.shift()
let removido4 = vetor1.shift()

// forma3= splice
//1º parametro= a posição  de remoção
//2º parametro= a quantidade de elementos a remover(>0)
//o splice  sempre retornara um vetor como resultado
let removido5 = vetor1.splice(1,1)
console.log(vetor1, removido5)

//Percursos de vetores
// length é a quantidade de elementos do vetor
//forma1= for

for (let i=0; i<vetor1.length; i++){
 console.log(vetor[i])
}

//forma2= for..of
for (let fruta of vetor1){
    console.log (fruta)
}

//forma3 =  forEach
vetor1.forEach(function(valor){
    console.log(valor)
})
