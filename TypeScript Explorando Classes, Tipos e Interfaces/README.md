# TypeScript: Explorando Classes, Tipos e Interfaces

## Introdução

TypeScript é uma forma de usar o Javascript e suas funcionalidades, mas adicionando novas características voltadas principalmente para tipagem, garantido dessa maneira uma maior controle sobre o código, vinde que o Javascript oferece tipos primitivos como **string** e **number**, mas não verifica se a atribuição está fluido sem problemas.

No TypeScript podemos gerar tipos por inferência. No exemplo abaixo observamos que sua estrutura é igual à usanda no Javascript, as no seu tipo ele recebe o tipo como **string**.

`````typescript
let helloWorld = "Hello World" //string
`````

Outra forma para definir os tipos é por meio da criação de um objeto:

```typescript
const user = {
  name: "Lucas",
  id: 0,
};
```

Você também pode descrever objetos usando interface:

```typescript
interface User {
  name: string;
  id: number;
}
```

Você também pode unir as duas formas acima usando a sintaxe de **: NomeTipo** :

```typescript
const user: User = {
  name: "Hayes",
  id: 0,
};
```

Como o TypeScript suporta classe e orientação a objeto, você pode interagir classe com interface:

```typescript
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Lucas", );
```

Você também pode descrever objetos usando interface:

```typescript
interface User {
  name: string;
  id: number;
}
```

Você também pode descrever objetos usando interface:

```typescript
interface User {
  name: string;
  id: number;
}
```

Você também pode descrever objetos usando interface:

```typescript
interface User {
  name: string;
  id: number;
}
```

Você também pode descrever objetos usando interface:

```typescript
interface User {
  name: string;
  id: number;
}
```



## Instalação

Para iniciar o projeto, você precisa ter o npm instalado, caso não o tenha o link para download é esse [daqui](https://nodejs.org/en/download/).

Nos comando abaixo, o primeiro inicializa o projeto é o segundo instala o pacote necessário o terceiro gera o tsconfig.json.

````bash
npm init 
npm install parcel-bundler
tsc --init // Caso não funcione usar antes npm install -g typescript
````

Criamos também um index.html e index.js. Precisamos adicionar também o comando para startar o projeto.

````json
{
  "name": "codigo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html", // Adicionamos para podermos na linha de comando iniciar o projeto.
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "parcel-bundler": "^1.12.5"
  },
  "devDependencies": {
    "typescript": "^4.4.3"
  }
}
````

Caso queira usar o git no projeto lembre de adiconar o .gitignore:  [Como ignorar arquivos no Git facilmente](https://fjorgemota.com/gitignore-ou-como-ignorar-arquivos-no-git/)

##  Tipos

Elemento html

Elemento html

Generic types



## Interfaces

```typescript
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

const felino: IFelino = {
    nome: 'Elefante',
    tipo: 'terrestre',
    visaoNoturna: true,
    execultarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`),
}
```

## Condicionais a partir de parâmetros

## Caracter ?

## Criando variáveis com propriedade readonly e private 

## Importar bibliotecas com typescript

## Omit



Referência: 

[TypeScript documentação](https://www.typescriptlang.org/docs/)



