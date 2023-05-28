// Customer API
// 1. Get all customers List with status ACTIVE [GET]
// 2. Delete customer. [DELETE]
// 3. Create new customer [POST]

// solution-1 // 1. Get all customers List with status ACTIVE [GET]

const customerModel = require("../models/customerModel");
const getActiveCustomer = async (req, res) => {
  try {
    const activeCustomers = await customerModel.find({ status: ACTIVE });
    if (activeCustomers.length > 0) {
      return res.status(200).json({
        status: 200,
        message: "Customers List",
        data: activeCustomers,
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "No Active Customers Found",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
// solution-2 // 2. Delete customer. [DELETE]
const deleteCustomer = async (req, res) => {
  try {
    const customer = await customerModel.findByIdAndDelete(req.params.id);
    if (customer) {
      return res.status(200).json({
        status: 200,
        message: "Customer Deleted Successfully",
        data: customer,
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Customer Not Found",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
// solution 3 // 3. Create new customer [POST]
const createCustomer = async (req, res) => {
  try {
    const customer = await customerModel.create(req.body);
    if (customer) {
      return res.status(201).json({
        status: 201,
        message: "Customer Created Successfully",
        data: customer,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Customer Already Exists",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
