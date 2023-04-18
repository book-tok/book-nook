const {Sequelize, sequelize} = require('./db');

const Book = sequelize.define('book', {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.NUMBER,
  feelings: Sequelize.STRING,
  userId: Sequelize.NUMBER,
});

module.exports = { Book };