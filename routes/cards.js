const cardsRouter = require('express').Router();
const getAllCards = require('../controllers/cards');

cardsRouter.get('/cards', getAllCards);

module.exports = cardsRouter;
