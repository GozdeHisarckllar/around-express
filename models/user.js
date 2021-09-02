const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  about: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) { // https?:\/{2}w*[a-z0-9.\-]+[a-z0-9\-._~:?\/%#[\]@!$&'()*+,;=]*
        return /https?:\/{2}w*[a-z0-9.\-]+\/?[a-z0-9\-._~:?\/%#\[\]@!$&'\()*\+,;=]*\/?#?/i.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`, //
    },
  },
});

module.exports = mongoose.model('user', userSchema);
