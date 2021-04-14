export default class Jogador{

    posicaoOndeIr = 0;

    constructor(name, img){
        this.x = -1;
        this.y = -1;
        this.name = name;
        this.placar = 0;
        this.posicao = 1;
        this.img = img;
    }

    moverAte(numeroCasa){
        this.posicaoOndeIr = numeroCasa;
    }

    mover(x, y){
        this.x += x;
        this.y += x;
    }
}