const {
  Operator,
  Role,
  User,
  Fingerprint,
  Stand,
  Sale,
  ClientStand,
} = require("./models");

const createRoles = async () => {
  try {
    const roleCount = await Role.count();
    if (roleCount === 0) {
      await Role.bulkCreate([
        { name: "Cliente Stand" },
        { name: "Expositor" },
        { name: "Trabajador" },
        { name: "Socio" },
        { name: "Prensa" },
        { name: "Cortesía" },
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
        { username: "username1", password: "1234" },
        { username: "username2", password: "1234" },
        { username: "username3", password: "1234" },
        { username: "username4", password: "1234" },
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
  let testStands = [];
  let standCounts = { S: 0, K: 0, C: 0, ILV: 0, Bav: 0 };
  try {
    const standCount = await Stand.count();
    if (standCount === 0) {
      for (let i = 1; i <= 100; i++) {
        const category =
          i <= 50
            ? "S"
            : i <= 70
            ? "K"
            : i <= 80
            ? "C"
            : i <= 90
            ? "ILV"
            : "Bav";
        const count = ++standCounts[category];
        const name = `${category}${count}`;

        const stand = {
          id: i,
          name: name,
          price: Math.floor(Math.random() * 9 + 2) * 50000,
          numExpositors: Math.floor(Math.random() * 10) + 1,
          isAvailable: true,
          category: category,
        };

        testStands.push(stand);
      }
      console.log(testStands);
      await Stand.bulkCreate(testStands);
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
    await ClientStand.sync();
    await createRoles();
    await createTestStands();
    await createTestOperators();
    console.log("All models were synchronized successfully.");
  } catch (e) {
    console.error(e);
  }
};

module.exports = { initDb };
