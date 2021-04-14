import { cobras, escadas, jogador1, jogador2 } from "./util/gameObjectsUtil.js";

export default class CobrasEscadas {

    tabuleiro = []; // posições 
    vez = 1;

    constructor(tamanho) {
        this.cobras = cobras;
        this.escadas = escadas;
        this.gerarTabuleiro(tamanho);
        this.jogador1 = jogador1;
        this.jogador2 = jogador2
    }

    gerarTabuleiro(tamanho) {
        let direcao = 1;
        for (let y = 9; y >= 0; y--) {
            if (direcao == 1) {
                for (let x = 0; x < 10; x++)
                    this.tabuleiro.push({ x: parseInt(x * tamanho), y: parseInt(y * tamanho) });
            } else {
                for (let x = 9; x >= 0; x--)
                    this.tabuleiro.push({ x: parseInt(x * tamanho), y: parseInt(y * tamanho) });
            }
            direcao *= -1; // inverte direção
        }
    }

    jogar(dado1, dado2) {
        if (vez === 1) {
            this.jogador1.moverAte(this.jogador1.posicao + dado1 + dado2);
        } else {
            this.jogador2.moverAte(this.jogador1.posicao + dado1 + dado2);
        }
        vez = dado1 === dado2 ? vez : vez * -1;
    }
}