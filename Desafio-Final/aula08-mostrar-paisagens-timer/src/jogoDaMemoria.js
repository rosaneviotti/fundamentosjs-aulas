class JogoDaMemoria {
    // se mandar um obj = ( tela: 1, idade: 2, etc: 3)
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    // tela
    constructor({ tela, util}) {
        this.tela = tela
        this.util = util
    // caminho do arquivo, sempre relativo ao index html
        this.floripaPaisagensIniciais = [
            { img: './arquivos/ilha.jpg', nome: 'Ilha do Campeche'},
            { img: './arquivos/dragao.jpg', nome: 'Praia Mole'},
            { img: './arquivos/ponte.jpg', nome: 'Ponte Hercilio Luz'},
            { img: './arquivos/surfista.jpg', nome: 'Campeche'},
        ]
        this.iconePadrao = './arquivos/padrao.jpg'
        this.floripaPaisagensEscondidas =  []
        this.floripaPaisagensSelecionadas = []

    }
    // para usar o this, nao podemos usar static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.floripaPaisagensIniciais)
        //força a tela a usar o THIS de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarFloripaPaisagensEscondidas.bind(this))
    }
    async embaralhar () {
        const copias = this.floripaPaisagensIniciais
        //duplicar os itens
        .concat(this.floripaPaisagensIniciais)
        //entrar em cada idem e criar um id aleatorio
        .map((item) => {
            return Object.assign({}, item, { id: (Math.random() / 0.5)})
        })
        //ordenar aleatoriamente
        .sort(() => Math.random() - 0.5 )

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        //vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderfloripaPaisagens(copias)
        this.tela.exibirCarregando(false)
        
    }
    esconderfloripaPaisagens (floripaPaisagens) {
        // vamos trocar a imagem de toods os existentes
        // pelo icone padrao
        // como fizemos no construtor, vamos extrair somente o necessario
        // usando a sintaxe ({ chave: 1}) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando nao usamos : (exemplo no id) o JS entende que o nome é o
        // mesmo do valor. Ex, id, vira id
        const floripaPaisagensOcultas = floripaPaisagens.map(({ nome, id }) =>({
            id,
            nome,
            img: this.iconePadrao
        }))
        //atualizamos a tela com as paisagens oculta
        this.tela.atualizarImagens(floripaPaisagensOcultas)
        //guardamos as paisagens para trabalhar com eles depois
        this.floripaPaisagensEscondidas = floripaPaisagensOcultas
    }
    exibirFloripaPaisagens(nomeDaFloripaPaisagens) {
        // vamos procurar essa paisagem pelo nome em nosso floripaPaisagensIniciais
        // vamos obter somente a imagem dele
        const { img } = this.floripaPaisagensIniciais.find(({ nome }) => nomeDaFloripaPaisagens === nome)
        // vamos criar a funcao na tela, para exibir somente a paisagem selecionado
        this.tela.exibirFloripaPaisagens(nomeDaFloripaPaisagens, img)
    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
        //vamos verificar a quantidade de herois selecionados
        //e tomar acao se escolheu certo ou errado
        const floripaPaisagensSelecionadas = this.floripaPaisagensSelecionadas.length
        switch(floripaPaisagensSelecionadas) {
            case 0:
                // adiciona a escolha na lista, esperando pela proxima clicada
                this.floripaPaisagensSelecionadas.push(item)
                break;
            case 1: 
            // se a quantidade de escolhidos for 1, significa
            // que o usuario so pode escolher mais um
            // vamos obter o primeiro item na lista
            const [ opcao1 ] = this.floripaPaisagensSelecionadas
            // zerar itens para nao selecionar mais de dois
            this.floripaPaisagensSelecionadas = []
            let deveMostrarMensagem = false
            // conferimos se o nome e o id batem conforme
            // o esperado
            if(opcao1.nome === item.nome && opcao1.id !== id)
            // aqui verificamos se sao ids diferentes para
            // o usuario nao clicar duas vezes no mesmo
            {
                deveMostrarMensagem = true
                this.exibirFloripaPaisagens(item.nome)
                this.tela.exibirMensagem(true)
                // para a execucao
                return;
            }
            this.tela.exibirMensagem(false)
            // fim do case!
            break;

        }
    }
    mostrarFloripaPaisagensEscondidas() {
        // vamos pegar todos os hereois da tela e colocar seu 
        // respectivo valor correto
        const floripaPaisagensEscondidas = this.floripaPaisagensEscondidas
        for(const floripaPaisagem of floripaPaisagensEscondidas) {
            const { img } = this.floripaPaisagensIniciais.find(item => item.nome === floripaPaisagem.nome)
            floripaPaisagem.img = img
        }
        this.tela.atualizarImagens(floripaPaisagensEscondidas)
    }
    jogar () {
        this.embaralhar ()
    } 

    
}