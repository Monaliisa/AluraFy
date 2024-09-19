# AluraFy
Este repositório refere-se  ao desafio técnico do PDI 3º TRI 2024 da Escola Suporte Educacional da Alura. 

## Objetivo Geral 

Desenvolvimento de um sistema de streaming de música, chamado Alurafy.


## Sobre o Projeto

 Para realizar cada etapa do projeto a equipe foi dividida em Squads. Tendo cada squad uma responsabilidade no desevolvimento no projeto, de acordo com as seguintes áreas:

 * Squad Laranja: Data Science
 * Squad Azul: Front-End
 * Squad Verde: Back-End


## Modelagem 

Nessa seção, apresentamos uma tabela que descreve o diagrama de entidades e relacionamentos (ER), facilitando a visualização e compreensão da estrutura do banco de dados. O diagrama ilustra as entidades "Artista", "Música" e "Usuário", além dos relacionamentos entre elas, permitindo uma análise clara das dependências e interações dentro do sistema de gerenciamento de músicas.

### Tabelas

**Artista**

| Coluna  | Tipo     | Comentário    |
|---------|----------|---------------|
| id      | NUMERIC  | Primary Key   |
| nome    | VARCHAR  | Nome do Artista |
| imagem  | BLOB     | Imagem do Artista |

**Música**

| Coluna         | Tipo     | Comentário             |
|----------------|----------|------------------------|
| id             | NUMERIC  | Primary Key            |
| título         | VARCHAR  | Título da Música       |
| id_artista     | NUMERIC  | Foreign Key (Artista)  |
| capa_da_musica | BLOB     | Capa da Música         |
| gênero         | VARCHAR  | Gênero Musical         |
| link           | VARCHAR  | Link da Música         |

**Usuário**

| Coluna         | Tipo       | Comentário                |
|----------------|------------|---------------------------|
| id             | NUMERIC    | Primary Key               |
| data_criação   | TIMESTAMP  | Data de Criação da Conta   |
| email          | VARCHAR    | Email do Usuário          |
| senha          | VARCHAR    | Senha do Usuário          |
| nome           | VARCHAR    | Nome do Usuário           |

### Relacionamentos

**Artista** 1:N **Música** (um artista pode ter muitas músicas, uma música pertence a um único artista)

**Usuário** 1:N **Música** (um usuário pode adicionar ou curtir várias músicas, mas uma música pode não estar associada a nenhum usuário)


## Tecnologias Utilizadas


 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" height="40" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" width="40" height="40" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40" />


## Como reproduzir este repositório?

## Licença
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

## Status
<img src="https://img.shields.io/badge/Status-Em andamento-orange">


          
          
          
          
