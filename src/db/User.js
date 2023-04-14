const {Sequelize, sequelize} = require('./db');

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = { User };

