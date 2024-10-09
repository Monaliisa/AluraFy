# AluraFy
Este repositório refere-se  ao desafio técnico do PDI 3º TRI 2024 da Escola Suporte Educacional da Alura. 

![image](https://github.com/user-attachments/assets/4e3d3027-3609-4196-9a33-87280b2a6cfd)


## Objetivo Geral 

Desenvolvimento de um sistema de streaming de música, chamado Alurafy.


## Sobre o Projeto

 Para realizar cada etapa do projeto a equipe foi dividida em Squads. Tendo cada squad uma responsabilidade no desevolvimento no projeto, de acordo com as seguintes áreas:

 * Squad Laranja: Data Science
 * Squad Azul: Front-End
 * Squad Verde: Back-End

## Como Executar o Projeto

### Executando o Back End

1. Clonar o Repositório:
  ```
  git clone https://github.com/Monaliisa/AluraFy.git
  ```
2. Navegue até a pasta do projeto e instale as bibliotecas necessárias:
 ```
 cd nome-do-seu-projeto
 git checkout api
 npm install
 ```
 Substitua `nome-do-seu-projeto` pelo nome do diretório do seu projeto.

3. Rodar as Migrations:
 ```
 npx sequelize-cli db:migrate
 ```
4. Executar o Projeto:
 ```
 npm start
 ```
5. Acesse a documentação da API no seguinte link:

  [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### Acessando a Interface:

1. Clonar o Repositório:
  ```
  git clone https://github.com/Monaliisa/AluraFy.git
  ```
2. Navegue até a pasta do projeto e instale as bibliotecas necessárias:
 ```
 cd nome-do-seu-projeto
 git checkout frontend
 npm install
 ```
 Substitua `nome-do-seu-projeto` pelo nome do diretório do seu projeto.

3. Em seguida execute:
 ```
 npm run dev
 ```
4. Acesse o link abaixo:

[http://localhost:5173/](http://localhost:5173/)

### Inserindo a Base de Dados:

* Baixe e instale o [DB Browser](https://sqlitebrowser.org/)
* Abra a ferramenta e clique em **Open Database**
* Localize o **`database.sqlite`** gerada pela api
* Clique na janela **Execute SQL** e insira os **inserts** da branch database
* Clique no ícone de **play** para executar os inserts
* Na aba arquivo clique em **Salvar Projeto**

> Observação: As abas do navegador [http://localhost:5173/](http://localhost:5173/) e [http://localhost:3000/api-docs](http://localhost:3000/api-docs) precisam ambas estarem abertas

## Tecnologias Utilizadas
 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" height="40" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" width="40" height="40" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40" />




## Licença
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

## Status
<img src="https://img.shields.io/badge/Status-Em andamento-orange">


          
          
          
          
