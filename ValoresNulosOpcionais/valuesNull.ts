let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //? diz que e opcional o campo
}

const contato: Contato = {
    nome: 'Rafael',
    telefone1: '213456789',
}