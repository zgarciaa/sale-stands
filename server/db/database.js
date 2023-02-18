const { Operator, Role, User, Fingerprint, Stand, Sale } = require("./models");
const {
  createRoles,
  createTestStands,
  createTestOperators,
} = require("./functions");

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
