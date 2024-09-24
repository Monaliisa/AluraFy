'use strict';
const {
  Model
} = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 *       example:
 *         id: 1
 *         nome: "João Silva"
 *         email: "joao.silva@example.com"
 */

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};