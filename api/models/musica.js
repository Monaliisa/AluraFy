'use strict';
const {
  Model
} = require('sequelize');
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