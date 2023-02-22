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

const getStandById = async (id) => {
  try {
    const stand = await Stand.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!stand) {
      console.log(`Stand with ID: ${id} doesn't exists`);
      return false;
    }
    return stand;
  } catch (e) {
    console.error(e);
  }
};

const standSold = async (id) => {
  try {
    const stand = await Stand.findOne({
      where: {
        id: id,
      },
    });
    const standUpdated = await stand.update({
      isAvailable: false,
    });
    console.log("Stand Sold updated succesfully");
    return standUpdated;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const updateStand = async (id, params) => {
  try {
    const stand = await Stand.findOne({
      where: {
        id: id,
      },
    });
    const standUpdated = await stand.update(params);
    console.log("Stand updated succesfully");
    return standUpdated;
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getStandById,
  getAllStands,
  getStandsByCategory,
  newStand,
  standSold,
  updateStand
};
