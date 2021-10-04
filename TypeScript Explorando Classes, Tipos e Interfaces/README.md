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

Para iniciar o projeto, você precisa ter o npm instalado em sua maquina, caso não o tenha, por meio do a seguir você pode baixa-lo:  [link](https://nodejs.org/en/download/).

Nos comandos a primeira linha é usado para inicializa o projeto é a segunda instala o pacote necessário, enquanto a terceira gera o tsconfig.json.

````bash
npm init 
npm install parcel-bundler
tsc --init // Caso não funcione usar antes npm install -g typescript
````

Criamos também um index.html e index.js. Precisamos adicionar também o comando para startar o projeto. Para adiciona-lo é preciso ir no json e adicionar o script start assim como no exemplo. 

````json
{
  "name": "codigo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html", 
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

Caso queira usar o git no projeto lembre de adicionar o .gitignore:  [Como ignorar arquivos no Git facilmente](https://fjorgemota.com/gitignore-ou-como-ignorar-arquivos-no-git/)

##  Tipos

Alguns tipos encontrados são:                                              

**string**: representa valores como "casa", "carro" ou "maça".         

**number**: representa valores numéricos.                                 

**boolean**: representa dos valores true (verdadeiro) e  false (falso).   

**array**: representa um conjunto de tipos como [1,2,3] para representar mais de um número. 

 **any**: usando quando você quer escrever um código TypeScript e não quer escrever um tipo especifico, por conta disso caso você não informe um tipo o padrão será any.   

**HTMLElement**: Texto

As palavras const, var ou let são tipo de anotações especiais que você pode adicionar a sua declaração, na qual const será um valor constante, let um valor que ira varia dentro do escopo na qual foi criada e var sendo um declaração mais geral.   

TypeScript permite criar funções com tipos de entradas e saídas. Nesse exemplo observamos que ele recebe um párametro que é uma string, então caso tente passar algo diferente um erro será apontado. 

````typescript
function saudacao(name: string) {
  console.log("Óla, " + name.toUpperCase() + "!");
}
````

​                                                                          

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



