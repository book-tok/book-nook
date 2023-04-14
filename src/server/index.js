const express = require('express');
const app = express();
const {Book, User, sequelize, Op} = require('../db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/books', async (req, res, next) => {
  const { title, author, genre, description, rating, feelings} = req.query;
  const where = {};

  if (title) where.title = title;
  if (author) where.author = author;
  if (genre) where.genre = genre;
  if (rating) where.rating = rating;
  if (description) {
    where.description = { [Op.like]: `%${description}`};
  };

  try {
    const books = await Book.findAll({where});
    res.send(books)
  } catch (error) {
    console.log(error)
    next(error)
  }
});

app.post('/books', async (req, res, next) => {
  try{
    const { title, author, genre, description, rating, feelings} = req.body;
    const book = await Book.create({ title, author, genre, description, rating, feelings });
    res.send(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.put('/books/:id', async (req, res, next) => {
  try{
    const { title, author, genre, description, rating, feelings} = req.body;
    const book = await Book.findByPk(req.params.id);
    await book.update({ title, author, genre, description, rating, feelings });
    res.send(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.delete('/books/:id', async (req, res, next) => {
  try{
    const book = await Book.findByPk(req.params.id);
    book.destroy()
    const books = await Book.findAll();
    res.send(books);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.get('/users', async (req, res, next) => {
  const { name } = req.query;
  const where = {};

  if (name) where.name = name;

  try {
    const users = await User.findAll({where});
    res.send(users)
  } catch (error) {
    console.log(error)
    next(error)
  }
});

app.post('/users', async (req, res, next) => {
  try{
    const { name, username, password } = req.body;
    const user = await User.create({ name, username, password });
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.put('/users/:id', async (req, res, next) => {
  try{
    const { name, username, password } = req.body;
    const user = await User.findByPk(req.params.id);
    await user.update({ name, username, password });
    res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.delete('/users/:id', async (req, res, next) => {
  try{
    const user = await User.findByPk(req.params.id);
    user.destroy()
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  sequelize.sync({force: false});
  console.log(`listening at localhost:${PORT}...`);
});