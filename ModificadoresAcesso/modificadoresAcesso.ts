class Carro {
    private velocidadeAtual: number = 0;

    constructor (
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) {}

    private alterarVelocidade(delta: number) {
        //faz validacao aceleracao e frenagem
        //this.velocidadeAtual = XXX
    }

    acelerar(){
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250)
carro.acelerar();