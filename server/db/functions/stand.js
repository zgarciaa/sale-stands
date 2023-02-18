const { Stand } = require("../models");

const createStand = async (stand) => {
  try {
    const newStand = await Stand.create(stand);
    return newStand.id;
  } catch (e) {
    console.error(e);
  }
};

const newStand = async (stand) => {
  try {
    const newStand = await createStand(stand);
    console.log("Stand created, ID:", newStand);
  } catch (e) {
    console.error(e);
  }
};

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

module.exports = { getAllStands, getStandsByCategory, newStand };
