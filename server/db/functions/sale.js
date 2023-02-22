const { Sale, ClientStand } = require("../models");

const createSale = async (sale) => {
  try {
    const newSale = await Sale.create(sale);
    return newSale.id;
  } catch (e) {
    console.error(e);
  }
};

const createClientStand = async (clientStand) => {
  try {
    const newClientStand = await ClientStand.create(clientStand);
    return newClientStand.id;
  } catch (e) {
    console.error(e);
  }
};

const newSale = async (sale) => {
  try {
    const newSale = await createSale(sale);
    console.log("Sale created, ID:", newSale);
    return newSale;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const newClientStand = async (clientStand) => {
  try {
    const newClientStand = await createClientStand(clientStand);
    console.log("Client Stand created, ID:", newClientStand);
    return newClientStand;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const getAllSales = async () => {
  try {
    const sales = await Sale.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return sales;
  } catch (e) {
    console.error(e);
  }
};

const getSaleByDocumentClient = async (documentClient) => {
  try {
    const sale = await Sale.findAll({
      where: { documentClient: documentClient },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return sale;
  } catch (e) {
    console.error(e);
  }
};

const getSaleById = async (id) => {
  try {
    const stand = await Sale.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!stand) {
      console.log(`Stand with ID: ${id} doesn't exists`);
      return;
    }
    return stand;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newSale, newClientStand, getSaleById, getAllSales };
