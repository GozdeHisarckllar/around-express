const path = require('path');
const readDataFile = require('../helpers/files');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getAllUsers = (req, res) => {
  return readDataFile(dataPath)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
};

const findUser = (req, res) => {
  return readDataFile(dataPath)
    .then((users) => {
      const isUserPresent = users.some((user) => user._id === req.params.id);

      if (!isUserPresent) {
        res.status(404).send({ message: 'User ID not found' });
        return;
      }

      const userFound = users.find((user) => user._id === req.params.id);
      res.status(200).send(userFound);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  getAllUsers,
  findUser,
};
