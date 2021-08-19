const usersRouter = require('express').Router();
const { getAllUsers, findUser } = require('../controllers/users');

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/:id', findUser);

module.exports = usersRouter;
