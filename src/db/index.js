const {Book} = require('./Book');
const {User} = require('./User');
const {sequelize} = require('./db');

module.exports = {
  Book,
  User,
  sequelize
};