const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { initDb } = require("../db/database");
const {
  getStandById,
  getAllStands,
  getStandsByCategory,
  newStand,
} = require("../db/functions/stand");
const {
  newOperator,
  getAllOperators,
  checkOperator,
} = require("../db/functions/operator");
const { createUser } = require("../db/functions/user");

dotenv.config();
const startApp = async () => {
  await initDb();
  const app = express();
  const port = process.env.PORT;

  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get("/stands", async (req, res) => {
    const stands = await getAllStands();
    try {
      res.json(stands.map((stand) => stand.toJSON()));
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving stands" });
    }
  });
  app.get("/stands/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const stand = await getStandById(id);
      res.json(stand);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving stand" });
    }
  });
  app.get("/stands/categories/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const stands = await getStandsByCategory(category);
      res.json(stands);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving stands" });
    }
  });
  app.post("/stands", async (req, res) => {
    const stand = {
      name: req.body.name,
      price: req.body.price,
      numExpositors: req.body.numExpositors,
      isAvailable: true,
      category: req.body.category,
    };
    try {
      const createStand = await newStand(stand);
      res.status(200).json({ message: "Stand created Succesfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error creating Stand" });
    }
  });
  app.get("/operators", async (req, res) => {
    const operators = await getAllOperators();
    try {
      res.json(operators.map((operator) => operator.toJSON()));
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving operators" });
    }
  });
  app.post("/operators", async (req, res) => {
    const operator = {
      username: req.body.username,
      password: req.body.password,
    };
    try {
      const createOperator = await newOperator(operator);
      res.status(200).json({ message: "Operator created Succesfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error creating Operator" });
    }
  });
  app.post("/login", async (req, res) => {
    const data = {
      username: req.body.username,
      password: req.body.password,
    };
    try {
      const isOperator = await checkOperator(data);
      isOperator
        ? res.status(200).json({ message: "Operator logged Succesfully" })
        : res.status(400).json({ message: "Operator doesn't exists" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Server Error" });
    }
  });

  app.post("/users", async (req, res) => {
    const user = {
      name: req.body.name,
      lastName: req.body.lastName,
      roleId: req.body.roleId,
    };
    try {
      const _createUser = await createUser(user);
      res.status(200).json({ message: "User created Succesfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error creating User" });
    }
  });
  app.listen(port, () => {
    console.log(`http://localhost:${port}/stands`);
  });
};

startApp();
