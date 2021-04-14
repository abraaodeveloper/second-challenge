export default class Jogador {

    posicaoOndeIr = 0;
    refTabuleiro;
    callback;
    passo = 1;

    constructor(nome, img, tabuleiro) {
        this.x = -1;
        this.y = -1;
        this.nome = nome;
        this.placar = 0;
        this.posicao = -1;
        this.img = img;
        this.refTabuleiro = tabuleiro;
    }

    setTabuleiro(tabuleiro) {
        this.tabuleiro = tabuleiro;
    }

    moverAte(numeroCasa, callback) {
        this.callback = callback;
        if (this.posicao === -1) {
            this.posicao = 0;
            this.x = this.refTabuleiro[0].x;
            this.y = this.refTabuleiro[0].y;
        }
        this.posicaoOndeIr = numeroCasa;
    }

    mover() {
        if (this.x === this.refTabuleiro[this.posicaoOndeIr].x
            && this.y === this.refTabuleiro[this.posicaoOndeIr].y) {
            if (this.callback != null) this.callback();
            this.callback = null;
            return;
        }

        if (this.x === this.refTabuleiro[this.posicao + 1].x) {
            if(this.y < this.refTabuleiro[this.posicao + 1].y){
                this.y += this.passo;
            }else{
                this.y -= this.passo;
            }
        } else if (this.y === this.refTabuleiro[this.posicao + 1].y) {
            if(this.x < this.refTabuleiro[this.posicao + 1].x){
                this.x += this.passo;
            }else{
                this.x -= this.passo;
            }
        }


        
        if (this.x === this.refTabuleiro[this.posicao + 1].x
            && this.y === this.refTabuleiro[this.posicao + 1].y) {
            this.posicao = this.posicao + 1;
            //setTimeout(()=>{}, 1000)
        }
        
    }
}