//Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
type Funcionarios = Array<Funcionario>;

const funcionarios: Funcionario[] = [
    {
        nome: 'Rafael',
        sobrenome: 'Oliveira',
        dataNascimento: new Date()
    },
    {
        nome: 'Fulano',
        sobrenome: 'Ciclano',
        dataNascimento: new Date()
    }
]

function nameFuncionarios(funcionarios:Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log("Nome do funcionario: ", funcionario.nome)
    }
}