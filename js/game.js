import CobrasEscadas from "./CobrasEscadas.js";

(() => {
    const canvas = document.getElementById("game");
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = '././imgs/tabuleiro.png';

    const tamanho = innerHeight < innerWidth ?
        innerHeight - innerHeight * .15 : innerWidth - innerWidth * .15;

    canvas.width = tamanho;
    canvas.height = tamanho;

    const cobrasEscadas = new CobrasEscadas( tamanho / 10);


    function frameUpdate() {
        context.drawImage(background, 0, 0, tamanho, tamanho);

        context.beginPath();
        context.lineWidth = "6";
        context.strokeStyle = "red";
        
        for (const i in cobrasEscadas.tabuleiro) {
            context.rect(cobrasEscadas.tabuleiro[i].x, cobrasEscadas.tabuleiro[i].y, tamanho / 10, tamanho / 10);
            context.font = "30px Arial";
            context.fillText(i+"" , cobrasEscadas.tabuleiro[i].x, cobrasEscadas.tabuleiro[i].y+50);
        }
        context.stroke();

        window.requestAnimationFrame(frameUpdate);
    }

    frameUpdate();
})();