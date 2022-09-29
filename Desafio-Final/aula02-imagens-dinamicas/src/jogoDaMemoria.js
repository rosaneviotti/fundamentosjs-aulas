class JogoDaMemoria {
    // se mandar um obj = ( tela: 1, idade: 2, etc: 3)
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    // tela
    constructor({ tela }) {
        this.tela = tela
    // caminho do arquivo, sempre relativo ao index html
        this.floripaPaisagens = [
            { img: './arquivos/ilha.jpg', name: 'Ilha do Campeche'},
            { img: './arquivos/dragao.jpg', name: 'Praia Mole'},
            { img: './arquivos/ponte.jpg', name: 'Ponte Hercilio Luz'},
            { img: './arquivos/surfista.jpg', name: 'Campeche'},
        ]
    }
    // para usar o this, nao podemos usar static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.floripaPaisagens)
    }
}