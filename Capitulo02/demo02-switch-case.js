const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //todo texto de saida saira no terminal
    output: process.stdout
})

//texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiros
Digite 0 para sair
`
// console.log('textoMenu', textoMenu)
// const opcao = 2
// switch(opcao) {
//     case 1:
//         console.log('pressionou 1')
//         break;
//     case 2:
//         console.log('pressionou2')
//         break;
//     default:
//         console.log('opcao inválida')
//         break;
// }

// terminal.question('Qual é seu nome?', (msg) => {
//     console.log('voce escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opcoes...',
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log('nao ha mais opcoes!')
}
function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Nao é um numero', msg)
    }
    switch(opcao) {
        case 0:
                console.log('Saindo...')
                terminal.close()
                break
        case 1:
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('opcao invalida')
            terminal.close()
            break;
    }

}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)


//questoes exercicios
switch(0) {
    case 0:
    console.log('Hello World');
    case 1:
    console.log('Segunda Opção');
    }


switch (true) {
    case 1 > 2:
    console.log('1 > 2')
    break;
    case 1 === 1:
    console.log('1 === 1')
    break;
    default:
    console.log('nenhum deles!');
    break;
}

switch (0) {
    default:
    console.log('Funciona sem case!');
}

switch (true) {
    case 1 < 2:
    console.log('1 < 2')
    case 1 === 1:
    console.log('1 === 1')
    default:
    console.log('pode ter mais de uma opção')
}

