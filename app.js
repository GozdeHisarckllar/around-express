const express = require('express');

const app = express();

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

/* To ensure that if there is still some process running in the background
 when shutting down the server with ctrl+C, it is terminated. Otherwise, it
 can cause an 'error ELIFECYCLE'. */
process.on('SIGINT', () => {
  process.exit();
});
