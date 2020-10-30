const readFile = require('../utils/read-file');
const path = require('path');
const pathToCards= path.join(__dirname, '..', 'data', 'cards.json');

module.exports.getCards = (req, res) => {
  readFile(pathToCards)
  .then(data => res.send(data))
  .catch(err => {
    res.status(404).send({ message: 'Файл не найден' })
  })
}