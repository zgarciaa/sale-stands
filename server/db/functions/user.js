const { User } = require("../models");
const { createFingerprint } = require("./fingerprint");

/* 
const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser.id;
  } catch (e) {
    console.error(e);
  }
};
*/

const newUser = async (user, template) => {
  try {
    const _user = await User.findOne({
      where: {
        document: user.document,
      },
    });
    if (!_user) {
      const newUser = await User.create(user);
      const fingerprintId = await createFingerprint({
        template: template,
        ownerId: newUser.id,
      });
      console.log("User created: ", newUser.id, fingerprintId);
    } else {
      console.log("User already exists");
      return;
    }
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    const fingerprintId = await createFingerprint({
      ownerId: newUser.id,
      template: 0xff,
    });

    if (!fingerprintId) {
      console.log("Error creating Fingerprint");
      return;
    }
    console.log(
      `User created succesfully User ID: ${newUser.id} Fingerprint ID: ${fingerprintId}`
    );
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newUser, createUser };
