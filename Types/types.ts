//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.25;

//String
const nome: string = 'Rafael';

//Array
const idades: number[] = [ 23, 28, 45 ];
const ages: Array<number> = [15, 22, 67];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ['Fulano', 15, true];

//Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaApi: any[] = [123, 'Rafael', false];
const retornoDaApi2: any = {
    // ......
};

//Void
function printarNaTela (msg: string) {
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objecto: object) {
    // .....
}

criar({
    propriedade: 1,
})