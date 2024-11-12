const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Name is required'],
    set: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  phone: {
    type: String,
    required: [true, 'phone is required'],
  },
  type: {
    type: String,
    required: [true, 'type is required'],
  },
  notification: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
  isdoctor: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true, // You can add this for automatic creation of createdAt and updatedAt fields
});

const userSchema = mongoose.model('user', userModel);

module.exports = userSchema;
