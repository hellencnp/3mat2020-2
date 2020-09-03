//lista binaria so funciona com uma lista preordenada
let comp = 0
function buscabinaria (lista, valorbusca) {
    let inicio = 0
    let fim= lista.length -1
    
    while (fim >= inicio){
        // Math.floor () tira as casas decimais de um numero
        let meio = Math.floor((fim + inicio)/2)

        if (lista [meio] === valorbusca) {  //achou
            comp ++
            return meio
        }
        else if (valorbusca<lista[meio]) {
            //Trazendo o indicador de fim para uma posição
            //antes do meio assim descartando todos os valores
            //que sao maiores que o valor da posição media
            comp += 2
            fim = meio -1

        }
        else { //valorbusca > lista[meio]
            comp += 2
            inicio = meio + 1

        }
    }
return -1 //o valor nao foi encontrado
}

const primos = require ('./dados/primos')

console.time ('7723')
console.log (buscabinaria(primos, 7723))
console.timeEnd ('7723')
console.log ('Comparacoes:', comp)

console.log ('---------------------------')

console.time ('31')
console.log (buscabinaria(primos, 31))
console.timeEnd ('31')
console.log ('Comparacoes:', comp)
