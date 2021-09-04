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
      validator(v) {
        return /https?:\/{2}(?:w{3}\.)?[a-z0-9\-\.]+(?:\.com\b)(?:\/[a-zA-Z0-9\-\._~:?\/%#[\]@!$&'()*\+,;=]*)?/.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
