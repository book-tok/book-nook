const {sequelize} = require('./db');
const {Book} = require('./');
const { books } = require('./seedData');

const seed = async () => {
  await sequelize.sync({ force: true });
  await Book.bulkCreate(books);
};

seed()
  .then(() => {
    console.log('Happy Reading!!');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
  sequelize.close();
  });
