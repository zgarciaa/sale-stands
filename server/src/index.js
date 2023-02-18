const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { initDb } = require("../db/database");
const {
  getAllStands,
  getStandsByCategory,
  newStand,
} = require("../db/functions/stand");

dotenv.config();

const startApp = async () => {
  await initDb();
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  //app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const port = process.env.PORT;

  app.get("/stands", async (req, res) => {
    const stands = await getAllStands();
    try {
      res.json(stands.map((stand) => stand.toJSON()));
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving stands" });
    }
  });
  app.get("/stands/:category", async (req, res) => {
    const category = req.params.category;
    const stands = await getStandsByCategory(category);
    try {
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
  app.listen(port, () => {
    console.log(`http://localhost:${port}/stands`);
  });
};

startApp();
