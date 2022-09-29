//meses começam do zero!
const dataAniversario = new Date(2020, 0 , 20)
//console.log(dataAniversario)

const primeiraDataDoJS = new Date (0)
//console.log(primeiraDataDoJS)

const hoje = new Date()
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())

//formato global recomendado
//console.log(hoje.toISOString())

const Dia = hoje.getDate ()
hoje.setDate(Dia +5) // +5 dias depois de hoje
hoje.setHours(10, 30, 0)
//console.log(hoje)

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
    `)

console.log(
    new Date(2020, 1, 20)> new Date(2000, 1, 1)
    )