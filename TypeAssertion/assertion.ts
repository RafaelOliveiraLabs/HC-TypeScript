//Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const minhaIdade2: any = 23;
(<number>minhaIdade2).toString();

const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);

const input2 = <HTMLInputElement>document.getElementById('numero2');
console.log(input2.value);

