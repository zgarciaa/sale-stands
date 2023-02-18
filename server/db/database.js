const { Operator, Role, User, Fingerprint, Stand, Sale } = require("./models");

const createRoles = async () => {
  try {
    const roleCount = await Role.count();
    if (roleCount === 0) {
      await Role.bulkCreate([
        { name: "Trabajador" },
        { name: "Expositor" },
        { name: "General" },
        { name: "Cortesia" },
      ]);
      console.log("Roles added succesfully");
      return;
    }
    console.log("Test operators already exists");
  } catch (e) {
    console.error(e);
  }
};

const createTestOperators = async () => {
  try {
    const operatorCount = await Operator.count();
    if (operatorCount === 0) {
      await Operator.bulkCreate([
        { username: "username_1", password: "password_1" },
        { username: "username_2", password: "password_2" },
        { username: "username_3", password: "password_3" },
        { username: "username_4", password: "password_4" },
      ]);
      console.log("Test Operators added succesfully");
      return;
    }
    console.log("Test operators already exists");
  } catch (e) {
    console.error(e);
  }
};

const createTestStands = async () => {
  try {
    const standCount = await Stand.count();
    if (standCount === 0) {
      await Stand.bulkCreate([
        {
          id: 1,
          name: "Stand1",
          price: 10000,
          numExpositors: 1,
          isAvailable: false,
          category: "Categoria1",
        },
        {
          id: 2,
          name: "Stand2",
          price: 10000,
          numExpositors: 2,
          isAvailable: true,
          category: "Categoria1",
        },
        {
          id: 3,
          name: "Stand3",
          price: 10000,
          numExpositors: 2,
          isAvailable: true,
          category: "Categoria1",
        },
        {
          id: 4,
          name: "Stand4",
          price: 20000,
          numExpositors: 3,
          isAvailable: false,
          category: "Categoria1",
        },
        {
          id: 5,
          name: "Stand5",
          price: 20000,
          numExpositors: 3,
          isAvailable: true,
          category: "Categoria1",
        },
        {
          id: 6,
          name: "Stand6",
          price: 20000,
          numExpositors: 3,
          isAvailable: false,
          category: "Categoria2",
        },
        {
          id: 7,
          name: "Stand7",
          price: 50000,
          numExpositors: 3,
          isAvailable: true,
          category: "Categoria2",
        },
        {
          id: 8,
          name: "Stand8",
          price: 50000,
          numExpositors: 4,
          isAvailable: false,
          category: "Categoria2",
        },
        {
          id: 9,
          name: "Stand9",
          price: 50000,
          numExpositors: 4,
          isAvailable: true,
          category: "Categoria2",
        },
        {
          id: 10,
          name: "Stand10",
          price: 100000,
          numExpositors: 4,
          isAvailable: true,
          category: "Categoria2",
        },
        {
          id: 11,
          name: "Stand11",
          price: 100000,
          numExpositors: 4,
          isAvailable: false,
          category: "Categoria3",
        },
        {
          id: 12,
          name: "Stand12",
          price: 100000,
          numExpositors: 4,
          isAvailable: true,
          category: "Categoria3",
        },
        {
          id: 13,
          name: "Stand13",
          price: 100000,
          numExpositors: 4,
          isAvailable: true,
          category: "Categoria3",
        },
        {
          id: 14,
          name: "Stand14",
          price: 100000,
          numExpositors: 5,
          isAvailable: false,
          category: "Categoria3",
        },
        {
          id: 15,
          name: "Stand15",
          price: 100000,
          numExpositors: 5,
          isAvailable: true,
          category: "Categoria3",
        },
        {
          id: 16,
          name: "Stand16",
          price: 100000,
          numExpositors: 5,
          isAvailable: true,
          category: "Categoria4",
        },
        {
          id: 17,
          name: "Stand17",
          price: 200000,
          numExpositors: 5,
          isAvailable: true,
          category: "Categoria4",
        },
        {
          id: 18,
          name: "Stand18",
          price: 200000,
          numExpositors: 7,
          isAvailable: false,
          category: "Categoria4",
        },
        {
          id: 19,
          name: "Stand19",
          price: 200000,
          numExpositors: 7,
          isAvailable: true,
          category: "Categoria4",
        },
        {
          id: 20,
          name: "Stand20",
          price: 200000,
          numExpositors: 7,
          isAvailable: false,
          category: "Categoria4",
        },
      ]);
      console.log("Test Stand added succesfully");
      return;
    }
    console.log("Test stand already exists");
  } catch (e) {
    console.error(e);
  }
};

const initDb = async () => {
  try {
    await Role.sync();
    await Operator.sync();
    await User.sync();
    await Fingerprint.sync();
    await Stand.sync();
    await Sale.sync();
    await createRoles();
    await createTestStands();
    await createTestOperators();
    console.log("All models were synchronized successfully.");
  } catch (e) {
    console.error(e);
  }
};

module.exports = { initDb };
