import { Cachorro }from "./models/Cachorro";
import { Vacina } from "./models/Vacina";

let cachorro1:Cachorro={
    nome: "Britney",
    idade: 2,
    dataNascimento: new Date('2019/09/07'),
    manso: true,
    raca: "SRD",
    peso: 20,
    vacinas: [],
    donos: ['Mariana', 'Lucas']
};

function vacinarCachorro(cachorro:Cachorro, vacina:Vacina){
    cachorro.vacinas.push(vacina);
    console.log(`${cachorro.nome} foi vacinado com ${vacina.nome}`);
}
vacinarCachorro(cachorro1, {nome:'Raiva', dataAplicacao:new Date()});
console.log(cachorro1);
