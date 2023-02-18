const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { initDb } = require("../db/database");
const { getAllStands, getStandsByCategory } = require("../db/functions/stand");

dotenv.config();

const startApp = async () => {
  await initDb();
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
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

  app.listen(port, () => {
    console.log(`http://localhost:${port}/stands`);
  });
};

startApp();
