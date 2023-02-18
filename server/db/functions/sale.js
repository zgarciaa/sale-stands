const { Sale } = require("../models");

const createSale = async (sale) => {
  try {
    const newSale = await Sale.create(sale);
    return newSale.id;
  } catch (e) {
    console.error(e);
  }
};

const newSale = async (sale) => {
  try {
    const newSale = await createSale(sale);
    console.log("Sale created, ID:", newSale);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newSale };
