console.log('Olá, Typescript!');
console.log('teste de clonagem');
console.log('teste do tsc');

let nome:string = "tim maia";

interface Pessoa {
    nome: string;idade: number;
    casado: boolean;
}
let p:Pessoa ={
    nome: "tim maia",
    idade: 60,
    casado: true,

}

console.log("Nome: " + p.nome);
console.log("Idade: " + p.idade);
console.log("Casado: " + p.casado);