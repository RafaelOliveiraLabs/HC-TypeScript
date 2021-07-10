//Union Types
function exibirNota(nota:number | string) { //ou number ou string
    console.log(`A nota e ${nota}`)
}

const nota: string | number = 5;

exibirNota('10');
exibirNota(10);