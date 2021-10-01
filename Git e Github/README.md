# Git e Github

Git é um programa de versionamento de códigos criado por Linus Torvald, o criador do Linux. Com o uso do Git não existe mais a necessidade de registrar o que foi desenvolvido em arquivos diferentes, cortando a necessidade de uma pastar com projeto1, projeto2, projeto3 e assim por diante.  

Como o Git é um programa de linha de comando, para usa-lo é preciso de algum terminado como o cmd, bash, ou etc.  

Já o Github é um serviço online disponibilizado o qual permite com que um repositório local seja salvo na rede, permitindo por exemplo a inteiração com outros desenvolvedores. 

## Instalação

Para instalar o git e sua maquina você precisa acessar endereço abaixo.

 [Git (git-scm.com)](https://git-scm.com/)

Site para criar uma conta no Github

[GitHub](https://github.com/)

## Configuração

Após a instalação é necessário realizar a configuração do Git para isso no terminal são digitados os seguintes comandos. 



````bash
git config --global user.name "nome de apresentação"
git config --global user.email email@exemplo.br
````

Caso queira ver suas configurações é possível acessa-lá por esse comando 

````bash
git config --list
````

## Comandos básicos

Criar um repositório:

`````bash
git init
`````

Baixar um repositório remoto:

`````bash
git clone urlDoRepositorio
`````

Adicionar os arquivos e realizar um commit:

`````bash
git add *
git commir -m "comentáios"
`````

Enviar as alterações para um repositória remoto :

`````bash
git push
`````

Caso ainda não tenha adicionado o endereço do repositório remoto:

`````bash
git remote add origin <servidor>
`````

Criar um branch/ramo:

`````bash
git checkout -b nomeDoBranch
`````

Escolhe qual branch trabalhar:

`````bash
git checkout nomeDoBranch
`````

Mesclar os branch 

`````bash
git merge
`````

Atualiza os arquivos locais com base nos arquivos remotos. 

`````bash
git pull
`````

## Chaves SSH e Tokens

