//Interfaces
interface IAnimal {
	nome: string,
	tipo: 'terrestre' | 'aquático',
    execultarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    execultarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`),
}

const animal: IFelino = {
    nome: 'Elefante',
    tipo: 'terrestre',
    visaoNoturna: true,
}