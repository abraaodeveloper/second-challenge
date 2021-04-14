export default class Jogador {

    posicaoOndeIr = 0;
    refTabuleiro;
    callback;
    passo = 3;
    passosASeguir = 0;
    passosAVoltar = 0;

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

    moverAte(qtdDePassos, callback) {
        this.callback = callback;
        if (this.posicao === -1) {
            this.posicao = 0;
            this.x = this.refTabuleiro[0].x;
            this.y = this.refTabuleiro[0].y;
        }

        let qtdPassosDeIr = 0;
        for (let local = this.posicao; local < this.refTabuleiro.length && local < this.posicao+qtdDePassos; local++)
            qtdPassosDeIr++;

        this.passosASeguir = qtdPassosDeIr;
        this.passosAVoltar = qtdDePassos - qtdPassosDeIr;

        if(this.posicao + this.passosASeguir < this.refTabuleiro.length){
            this.posicaoOndeIr = this.posicao + this.passosASeguir;
        }else if(this.passosAVoltar > 0){
            this.posicaoOndeIr = this.posicao + this.passosAVoltar;
        }
    }

    mover() {
        // se chegou em uma outra casa
        if (this.x >= this.refTabuleiro[this.posicao + 1].x
            && this.y >= this.refTabuleiro[this.posicao + 1].y
            &&this.x <= this.refTabuleiro[this.posicao + 1].x + this.passo
            && this.y <= this.refTabuleiro[this.posicao + 1].y + this.passo) {
            this.posicao = this.posicao + 1;
            this.x = this.refTabuleiro[this.posicao + 1].x;
            this.y = this.refTabuleiro[this.posicao + 1].y;
            //setTimeout(()=>{}, 1000)
        }

        if (this.x === this.refTabuleiro[this.posicaoOndeIr].x
            && this.y === this.refTabuleiro[this.posicaoOndeIr].y) {

            if(this.posicao === this.posicaoOndeIr)
            if (this.callback != null) this.callback();
            this.callback = null;
            return;
        }

        if(this.passosASeguir != 0){
            this._moverParafrente();
            this.passosASeguir--;
        }else if(this.passosAVoltar != 0){
            this._moverParaAtras();
            this.passosAVoltar--;
        }

        /*
        if (this.x === this.refTabuleiro[this.posicao + 1].x
            && this.y === this.refTabuleiro[this.posicao + 1].y) {
            this.posicao = this.posicao + 1;
            //setTimeout(()=>{}, 1000)
        }
        */
    }

    _moverParafrente(){
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
    }

    _moverParaAtras(){
        if (this.x === this.refTabuleiro[this.posicao + 1].x) {
            if(this.y < this.refTabuleiro[this.posicao + 1].y){
                this.y -= this.passo;
            }else{
                this.y += this.passo;
            }
        } else if (this.y === this.refTabuleiro[this.posicao + 1].y) {
            if(this.x < this.refTabuleiro[this.posicao + 1].x){
                this.x -= this.passo;
            }else{
                this.x += this.passo;
            }
        }
    }
}