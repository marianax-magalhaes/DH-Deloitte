import { Vacina } from "./Vacina";
export interface Cachorro {
    nome: string;
    idade: number;
    dataNascimento: Date;
    manso: boolean;
    raca: string;
    peso: number;
    vacinas: Vacina[];
    donos: string[]; /*ou seja, um array de strings*/
}
