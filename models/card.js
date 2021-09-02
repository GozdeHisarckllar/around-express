const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    validate: {
      validator(v) {
        return /https?:\/{2}w*[a-z0-9.\-]+[a-z0-9\-._~:?\/%#[\]@!$&'()*\+,;=]*/i.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // ObjectId array *********
    /* type: [Number],
      default: undefined */
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('card', cardSchema);
