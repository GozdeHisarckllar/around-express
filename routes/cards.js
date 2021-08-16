const fs = require('fs');
const path = require('path');

const cardsRouter = require('express').Router();

cardsRouter.get('/cards', (req, res) => {
  const dataPath = path.join(__dirname, '../data/cards.json');
  fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.set('Content-Type', 'application/json');
    res.send(data);
  });
});

module.exports = cardsRouter;
