const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    unique: true,
    required: true
  },
  cardType: {
    type: String,
    enum: ['REGULAR', 'SPECIAL'],
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE'
  },
  vision: {
    type: String
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;