function onLoad() {
   const dependencias = {
        tela: Tela // a classe Tela é global
   }
   // inicializarmos o jogo da memoria
   const jogoDaMemoria = new JogoDaMemoria(dependencias)
   jogoDaMemoria.inicializar()
}
window.onload = onLoad