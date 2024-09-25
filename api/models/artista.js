'use strict';
const {
  Model
} = require('sequelize');


/**
 * @swagger
 * components:
 *   schemas:
 *     Artista:
 *       type: object
 *       required:
 *         - nome
 *         - imagem
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID único do artista
 *         nome:
 *           type: string
 *           description: O nome do artista
 *         imagem:
 *           type: string
 *           description: URL da imagem do artista
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data de atualização do registro
 *       example:
 *         id: 1
 *         nome: "Nome do Artista"
 *         imagem: "https://link-da-imagem.jpg"
 *         createdAt: "2024-09-25T12:34:56Z"
 *         updatedAt: "2024-09-25T12:34:56Z"
 */



module.exports = (sequelize, DataTypes) => {
  class Artista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artista.init({
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artista',
  });
  return Artista;
};