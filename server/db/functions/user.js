const { User } = require("../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser.id;
  } catch (e) {
    console.error(e);
  }
};

const newUser = async (user, template) => {
  try {
    const _user = await User.findOne({
      where: {
        document: user.document,
      },
    });
    if (!_user) {
      const userId = await createUser(user);
      const fingerprintId = await createFingerprint({
        template: template,
        ownerId: userId,
      });
      console.log("User created: ", userId, fingerprintId);
    } else {
      console.log("User already exists");
      return;
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newUser };
