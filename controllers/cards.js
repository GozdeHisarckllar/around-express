const path = require('path');
const readDataFile = require('../helpers/files');

const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getAllCards = (req, res) => {
  return readDataFile(dataPath)
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(400).send(err));
};

module.exports = getAllCards;
