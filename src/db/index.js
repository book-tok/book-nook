const {Book} = require('./Book');
const {User} = require('./User');
const {sequelize, Sequelize} = require('./db');

Book.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Book);

module.exports = {
  Book,
  User,
  sequelize,
  Sequelize
};