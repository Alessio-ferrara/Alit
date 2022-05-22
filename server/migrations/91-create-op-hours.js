'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('op_hours', {
      service_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "services",
          key: "id",
          as: "service_id"
        }
      },
      day: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      s_hour: {
        type: Sequelize.TIME
      },
      c_hour: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('op_hours');
  }
};