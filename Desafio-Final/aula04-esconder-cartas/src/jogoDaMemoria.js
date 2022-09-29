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
        this.iconePadrao = './arquivos/padrao.jpg'
        this.floripaPaisagensEscondidas =  []

    }
    // para usar o this, nao podemos usar static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.floripaPaisagens)
        //força a tela a usar o THIS de Jogo da Memoria
        this.tela.configurarBotaoJogar (this.jogar.bind(this))
    }
    embaralhar () {
        const copias = this.floripaPaisagens
        //duplicar os itens
        .concat(this.floripaPaisagens)
        //entrar em cada idem e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        //ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        //vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderfloripaPaisagens(copias)
        }, 1000);
    }
    esconderfloripaPaisagens(floripaPaisagens) {
        // vamos trocar a imagem de toods os existentes
        // pelo icone padrao
        // como fizemos no construtor, vamos extrair somente o necessario
        // usando a sintaxe ({ chave: 1}) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando nao usamos : (exemplo no id) o JS entende que o nome é o
        // mesmo do valor. Ex, id, vira id
        const floripaPaisagensOcultas = floripaPaisagens.map(( { nome, id}) =>({
            id,
            nome,
            img: this.iconePadrao
        }))
        //atualizamos a tela com as paisagens oculta
        this.tela.atualizarImagens(floripaPaisagensOcultas)
        //guardamos as paisagens para trabalhar com eles depois
        this.floripaPaisagensOcultas = floripaPaisagensOcultas
    }

    jogar() {
        this.embaralhar ()
    }

    
}