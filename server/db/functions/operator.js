const { Operator } = require("../models");
const { createFingerprint } = require("./fingerprint");

const createOperator = async (operator) => {
  try {
    const newOperator = await Operator.create(operator);
    return newOperator.id;
  } catch (e) {
    console.error(e);
  }
};

const newOperator = async (operator, template) => {
  try {
    const _operator = await Operator.findOne({
      where: {
        username: operator.username,
      },
    });
    if (!_operator) {
      const operatorId = await createOperator(operator);
      const fingerprintId = await createFingerprint({
        template: template,
        ownerId: operatorId,
      });
      console.log("Operator created: ", operatorId, fingerprintId);
    }
    console.log("Operador already exists");
    return;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newOperator };
