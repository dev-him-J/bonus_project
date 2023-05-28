const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  DOB: {
    type: Date,
    required: true,
  },
  emailID: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  address: {
    type: String,
    required: true,
  },
  customerID: {
    type: String,
    default: uuidv4,
    required: true,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
