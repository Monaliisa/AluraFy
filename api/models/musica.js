'use strict';
const {
  Model
} = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     Musica:
 *       type: object
 *       required:
 *         - titulo
 *         - id_artista
 *         - capa_da_musica
 *         - genero
 *         - link
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da música
 *         titulo:
 *           type: string
 *           description: Título da música
 *         id_artista:
 *           type: integer
 *           description: ID do artista associado à música
 *         capa_da_musica:
 *           type: string
 *           description: URL da capa da música
 *         genero:
 *           type: string
 *           description: Gênero da música
 *         link:
 *           type: string
 *           description: Link para ouvir a música
 *       example:
 *         titulo: "Shape of You"
 *         id_artista: 1
 *         capa_da_musica: "https://example.com/capa.jpg"
 *         genero: "Pop"
 *         link: "https://example.com/musica"
 */


module.exports = (sequelize, DataTypes) => {
  class Musica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     // A música pertence a um artista:
     // this.belongsTo(models.Artista, { foreignKey: 'id_artista' });
    }
  }
  Musica.init({
    titulo: DataTypes.STRING,
    id_artista: DataTypes.INTEGER,
    capa_da_musica: DataTypes.STRING,
    genero: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musica',
  });
  return Musica;
};