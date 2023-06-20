const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'pizza', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
