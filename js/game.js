import CobrasEscadas from "./CobrasEscadas.js";

(() => {
    const canvas = document.getElementById("game");
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = '././imgs/tabuleiro.png';

    const tamanhoGame = innerHeight < innerWidth ?
        innerHeight - innerHeight * .15 : innerWidth - innerWidth * .15;

    canvas.width = tamanhoGame;
    canvas.height = tamanhoGame;

    const cobrasEscadas = new CobrasEscadas(tamanhoGame / 10);
    const tamanho = tamanhoGame / 10;

    function frameUpdate() {
        context.drawImage(background, 0, 0, tamanhoGame, tamanhoGame);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "red";

        for (let i = 0; i < cobrasEscadas.tabuleiro.length; i++) {
            context.rect(cobrasEscadas.tabuleiro[i].x, cobrasEscadas.tabuleiro[i].y, tamanho, tamanho);
            context.font = "15px Arial";
            context.fillText(i+1, cobrasEscadas.tabuleiro[i].x + 10, cobrasEscadas.tabuleiro[i].y + 35);
        }
        context.stroke();

        window.requestAnimationFrame(frameUpdate);
    }

    frameUpdate();
})();