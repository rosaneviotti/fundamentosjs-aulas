// let frutaExistenteNoMercado = false
// let temCPUSuficiente = true

// //
// //
// // obter valores do terminal
// const args = process.argv
// const saldo = args[args.length -1]
// //console.log('args', args)
// //console.log('saldo', saldo)

// if(isNaN(saldo)){
//     console.log('valor invalido!!')
//     return;
// }

// let tipoCLiente = "premium"
// if (saldo < 9) {
//     tipoCLiente = "basic"
// }
// else if (saldo >=10 && saldo <20) {
//     tipoCLiente = "gold"
// }
// else {
//     tipoCLiente = null
// }
// //null, underfined, vazio, 0 === false!
// if (!tipoCLiente) {
//     tipoCLiente = "indefinido"
// }

// console.log('tipoDoCliente', tipoCLiente)

// const operadorOu = 1 > 2 || 2 > 1
// const operadorE = 1 === 1 && 2 !== 2
// const operadorNot = !(1==1)

//const idade = 4
//const resultado = idade >= 18 ?
//                        "pode dirigir" :
//                        "nao pode dirigir"
//console.log('resultado', resultado)

// const item = "abc"
// console.log(isNaN(item)? "Hey Jude" : "Hey Julia");


// const resultado = 1 ? (null || ((1 != '1') ? "Hello world": "Hackerzao")) : "não zero";
// console.log('resultado', resultado)

// const item = "0"; console.log(!!item);


let valor = "abc"
if (valor < 2 || valor > 4) {
    valor = "Primeira condicao"
} 
else if (valor < 5) {
    valor = "segunda condicao"
}
else {
    valor = "terceira condicao"
}

console.log('valor', valor)

const item = (!0 ? "2a": "3b")
console.log(item)