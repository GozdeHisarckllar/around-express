const usersRouter = require('express').Router();
const {
  getAllUsers,
  findUser,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/:userId', findUser);

usersRouter.post('/users', createUser);

usersRouter.patch('/users/me', updateProfile);

usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
