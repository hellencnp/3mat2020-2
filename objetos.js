//Declaração  e inicialização de um objeto vazio
let pessoa1= {}            //forma moderna
let pessoa2= new Object()  // forma tradicional

// Inicialização de obejtos ja com propriedades e valores
let pessoa3 = {
    nome: 'Fulanilson de Souza',
    "data de nascimento": '1998-05-19',
    sexo: 'M',
    profissao: 'marceneiro'
}
//Exibir o valor de um atributo
console.log(pessoa3.nome)

//Exibir  o valor de atributo cujo nome contem espaços
console.log(pessoa3["data de nascimento"])

// a Sintaxe dos colchetes[] funciona sempre, mesmo quando o nome do atributo nao tem espaços
console.log(pessoa3["profissao"])

//criando uma nova propriedade de objeto
console.log(pessoa1) //antes
pessoa1.nome = 'Sincronilson Soares'
pessoa1["data de nascimento"] = '1988-07-31'
console.log (pessoa1)

// a criação de novas propriedades  pode ser feita inclusive em objetos  que foram inicializados com propriedades
console.log(pessoa3) //antes
pessoa3.altura = 1.73
pessoa3.peso = 87
console.log (pessoa3)//depois

//exclusão de propriedade
delete pessoa3.sexo

// Listando os atributos (nome de propriedades) de um objeto: for...in
for(let atributo in pessoa3){
    console.log(atributo)
}

//Listas as propriedades (atributos+propriedade) de um objeto
for (let atributo in pessoa3){
    console.log('atributo:' + atributo + '; valor: ' + pessoa3[atributo])
}