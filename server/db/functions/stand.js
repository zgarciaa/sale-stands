const { Stand } = require("../models");

const getAllStands = async () => {
  try {
    const stands = await Stand.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return stands;
  } catch (e) {
    console.error(e);
  }
};

const getStandsByCategory = async (category) => {
  try {
    const stands = await Stand.findAll({
      where: { category: category },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return stands;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getAllStands, getStandsByCategory };
