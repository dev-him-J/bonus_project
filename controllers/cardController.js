// Card API
// 1. Get all Card List[GET]
// 2. Create new card [POST]
const cardModel = require("../models/cardModel");

// solution 1// 1. Get all Card List[GET]

const getCards = async (req, res) => {
  try {
    const cards = await cardModel.find();
    if (cards.length > 0) {
      res.status(200).json({ status: 200, cards: cards });
    } else {
      res.status(404).json({ status: 404, message: "No card found" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

// solution 2// 2.Create new card [POST]
const createCard = async (req, res) => {
  try {
    const createCard = await cardModel.create(req.body);
    if (createCard) {
      res.status(201).json({ status: 201, message: "Card created" });
    } else {
      res.status(400).json({ status: 400, message: "Card not created" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};
