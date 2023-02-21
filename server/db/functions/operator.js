const { Operator } = require("../models");

const newOperator = async (operator) => {
  try {
    const operatorExists = await Operator.findOne({
      where: {
        username: operator.username,
      },
    });
    if (!operatorExists) {
      const newOperator = await Operator.create(operator);
      console.log("Operator created: ", newOperator.id);
      return;
    }
    console.log("Operator already exists");
    return;
  } catch (e) {
    console.error(e);
  }
};

const getAllOperators = async () => {
  try {
    const operators = await Operator.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return operators;
  } catch (e) {
    console.error(e);
  }
};

const checkOperator = async (operator) => {
  const { username, password } = operator;
  try {
    const operatorExists = await Operator.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    return operatorExists ? true : false;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newOperator, getAllOperators, checkOperator };
