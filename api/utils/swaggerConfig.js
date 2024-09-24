const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Alurafy',
      version: '1.0.0',
      description: 'API de gerenciamento de musicas, artistas e usuários da plataforma Alurafy'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ]
  },
  apis: ['./api/routes/*.js', './api/models/*.js'] // Caminho para os arquivos de rotas e modelos
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
