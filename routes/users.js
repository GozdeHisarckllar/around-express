const fs = require('fs');
const path = require('path');

const usersRouter = require('express').Router();

usersRouter.get('/users', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.set('Content-Type', 'application/json');
    console.log(dataPath);
    res.send(data);
  });
});

usersRouter.get('/users/:id', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data);

    const isUserPresent = users.some((user) => user._id === req.params.id);
    if (!isUserPresent) {
      res.status(404).send({ message: 'User ID not found' });
      return;
    }

    const userFound = users.find((user) => user._id === req.params.id);

    res.send(userFound);
    /* res.set('Content-Type', 'application/json');
    res.send(data); */
  });
});

module.exports = usersRouter;
