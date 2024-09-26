'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Adiciona a coluna 'usuarioId' à tabela 'Musicas'
    await queryInterface.addColumn('Musicas', 'usuarioId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuarios', // Nome da tabela de referência
        key: 'id'          // Coluna na tabela 'Usuarios'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove a coluna 'usuarioId' da tabela 'Musicas'
    await queryInterface.removeColumn('Musicas', 'usuarioId');
  }
};
