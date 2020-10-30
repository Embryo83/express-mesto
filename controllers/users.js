const readFile = require('../utils/read-file');
const path = require('path');
const pathToUser = path.join(__dirname, '..', 'data', 'users.json');

module.exports.getUsers = (req, res) => {
  readFile(pathToUser)
  .then(data => res.send(data))
  .catch(err => {
    res.status(404).send({ message: 'Файл не найден' })
  })
}

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  readFile(pathToUser)
  .then(data => {
    const userId = data.find(user => {
      return user._id === id
    })
    if (!userId) {
      res.status(404).send({ message: 'Нет пользователя с таким id'})
    }
    res.send(userId);
  })
  .catch(err => {
    res.status(404).send({ message: 'Файл не найден' })
  })
}