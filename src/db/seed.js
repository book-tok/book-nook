const {sequelize} = require('./db');
const {Book} = require('./');
const {User} = require('./');
const { books } = require('./seedData');
const { users } = require('./seedData');

const seed = async () => {
  await sequelize.sync({ force: true });
  await Book.bulkCreate(books);
  await User.bulkCreate(users);
};

seed()
  .then(() => {
    console.log('Happy Reading!!');
    console.log('Welcome Users!!');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
  sequelize.close();
  });
