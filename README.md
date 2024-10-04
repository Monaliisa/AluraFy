# AluraFy - API
Essa branch do repositório é responsável por conter o projeto Backend da aplicação.

![GIF da documentação da API, passando por todos os endpoints criados e listados](https://i.imgur.com/JufDgKQ.gif)

## Objetivo Geral 

Desenvolvimento de todos os endpoints que posteriormente serão consumidos pelo sistema de Frontend.

## Tecnologias Utilizadas
          
<div style="display: flex; flex-direction: row; justify-content: space-between;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" width="70" height="70"/>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" width="70" height="70"/>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg" width="70" height="70"/>
</div>
          
## Passo a Passo para Configuração e Execução do Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório usando o seguinte comando:

```bash
git https://github.com/Monaliisa/AluraFy.git
```

### 2. Instalação das Dependências

Navegue até a pasta do projeto e instale as bibliotecas necessárias com o comando:

```bash
cd nome-do-seu-projeto
git checkout api
npm install
```

Substitua `nome-do-seu-projeto` pelo nome do diretório do seu projeto.

### 3. Rodar as Migrations

Para configurar o banco de dados, execute as migrations com o seguinte comando:

```bash
npx sequelize-cli db:migrate
```

### 4. Executar o Projeto

Para iniciar o servidor, execute:

```bash
npm start
```

### 5. Acessar a Documentação do Swagger

Depois que o servidor estiver em execução, você pode acessar a documentação da API no seguinte link:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Licença
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

## Status
<img src="https://img.shields.io/badge/Status-Em andamento-orange">


          
          
          
          
