const { Sequelize } = require('sequelize');

// Verifica se a variável de ambiente DATABASE_URL está definida
const isProduction = process.env.NODE_ENV === 'production';

// Configuração do Sequelize com base no ambiente
const sequelize = new Sequelize(
  isProduction
    ? process.env.DATABASE_URL // Usando a string de conexão do PostgreSQL para produção
    : {
        dialect: 'sqlite',
        storage: './database.sqlite' // Usando SQLite para desenvolvimento/testes
      }
);

module.exports = sequelize;
