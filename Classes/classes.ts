//Class
class Data {
    public dia: number; //Public por default
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia)

const data2 = new Data(1, 1); //Ano default 1970 definido no constructor

//Class sem this.
class Data2 {
    /* public dia: number; //Public por default
    private mes: number;
    ano: number; */

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        /* this.dia = dia;
        this.mes = mes;
        this.ano = ano; */
    }
}

//TypeScript Playground para teste