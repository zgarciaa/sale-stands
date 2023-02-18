const { Fingerprint } = require("../models");

const createFingerprint = async (fingerprint) => {
  try {
    const newFingerprint = await Fingerprint.create(fingerprint);
    return newFingerprint.id;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { createFingerprint };
