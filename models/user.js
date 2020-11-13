const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return /^http[s]?:\/\/\w+/.test(url);
      },
      message: 'Неверный формат ссылки на изображение',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
