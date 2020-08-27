/*nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   ParaÃ­ba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   CearÃ¡;CE;148920.47;9075649
   PiauÃ­;PI;251577.74;3264531
   MaranhÃ£o;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/


/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
let estadosNe = []
let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}
estadosNe.push(estado1)

let estado2= {
    nome:  'Alagoas',
    sigla: 'AL',
    area : 27848.14,
    populacao : 3322820,
}
estadosNe.push(estado2)

let estado3= {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area : 52811.05,
    populacao : 3479010,
}
estadosNe.push(estado3)

let estado4= {
    nome:  ' Parai­ba',
    sigla: 'PB',
    area : 56469.78,
    populacao : 3996496,
}

estadosNe.push(estado4)

let estado5= {
    nome:  ' Pernambuco',
    sigla: 'PE',
    area : 98148.32,
    populacao : 9496294,
}
estadosNe.push(estado5)

let estado6= {
    nome:  ' Ceara',
    sigla: 'CE',
    area : 148920.47,
    populacao : 9075649,
}
estadosNe.push(estado6)

let estado7= {
    nome:  ' Piaui',
    sigla: 'PI',
    area : 251577.74,
    populacao : 3264531,
}
estadosNe.push(estado7)

let estado8= {
    nome:  ' Maranhão',
    sigla: 'MA',
    area : 331937.45,
    populacao : 7035055,
}
estadosNe.push(estado8)

let estado9= {
    nome:  ' Bahia',
    sigla: 'BA',
    area : 564733.18,
    populacao : 14812617,
}
estadosNe.push(estado9)


/*
   2) Escreva uma arrow function que receba dois parÃ¢metros, Ã¡rea e populaÃ§Ã£o, e
      calcule a densidade demogrÃ¡fica retornando o resultado da divisÃ£o da
      segunda pela primeira. 
*/
let densidadedermografica = (area,populacao) => populacao / area


/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cÃ¡lculo correspondente.
      Com o resultado do cÃ¡lculo, crie uma propriedade chamada 'densidade
      demogrÃ¡fica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
for (let i = 0; i < estadosNe.length; i++) {
    estadosNe[i]["Densidade dermografica"] = (densidadedermografica(estadosNe[i].area, estadosNe[i].populacao))
    delete estadosNe[i].sigla
  
    
}
/* 4) Escreva uma arrow function que receba um objeto. Na funÃ§Ã£o, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/
let funcao = objeto =>{
for (let propriedade in objeto){
    console.log('propriedade: ' + propriedade +'; valor:' + objeto[propriedade])
    
}}

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a funÃ§Ã£o escrita em 4) para exibi-lo.
*/

for (let inf of estadosNe) {
    funcao(inf)
}  
console.log (funcao)
/*

   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. FaÃ§a as inserÃ§Ãµes de 
         modo que o vetor final esteja em ordem alfabÃ©tica. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabÃ©tica. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         jÃ¡ existentes, e assim por diante.

*/
let vet =[]
vet.push (estado1.nome)
vet.unshift (estado2.nome)
vet.splice(1,0,estado3.nome)
vet.splice(1,0,estado4.nome)
vet.splice(2,0,estado5.nome)
vet.splice(1,0,estado6.nome)
vet.splice(4,0,estado7.nome)
vet.splice(2,0,estado8.nome)
vet.splice(1,0,estado9.nome)


console.log(vet)