import { cobras, escadas } from "./util/gameObjectsUtil.js";

export default class CobrasEscadas {

    tabuleiro = []; // posições 
    tamanhoCasas;

    constructor(tamanho) {
        this.cobras = cobras;
        this.escadas = escadas;
        this.gerarTabuleiro(tamanho);
    }

    gerarTabuleiro(tamanho) {
        let direcao = 1;
        for (let x = 10; x > 0; x--) {
            if (direcao === 1) {
                for (let y = 0; y < 10; y++)
                    this.tabuleiro.push({ x: parseInt(x * tamanho), y: parseInt(y * tamanho) });

            } else {
                for (let y = 10; y >
                    0; y--)
                    this.tabuleiro.push({ x: parseInt(x * tamanho), y: parseInt(y * tamanho) });
            }
            direcao *= -1; // inverte direção
        }
    }

    jogar(dado1, dado2) {

    }
}