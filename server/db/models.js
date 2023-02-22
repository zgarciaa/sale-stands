const { DataTypes } = require("sequelize");
const { dbConnection } = require("./connection");

const Fingerprint = dbConnection.define("Fingerprint", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  template: {
    type: DataTypes.BLOB,
    allowNull: false,
    unique: false,
  },
});

const Operator = dbConnection.define("Operator", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const User = dbConnection.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  document: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Role = dbConnection.define("Role", {
  /* 
  Clientes stand y expositores
  Trabajadores
  Socios
  Prensa
  Cortesia
  */
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Stand = dbConnection.define("Stand", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numExpositors: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Sale = dbConnection.define("Sale", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  standId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  documentClient: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nameClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastNameClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const ClientStand = dbConnection.define("ClientStand", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  standId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  documentClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastNameClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumberClient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailClient: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Relations between Models
//Operator.hasOne(Fingerprint, { foreignKey: "ownerId", scope: { ownerType: "operator" } }); // Each operator have one fingerprint
User.hasOne(Fingerprint, {
  foreignKey: "ownerId",
  scope: { ownerType: "user" },
}); // Each user have one fingerprint
//Fingerprint.belongsTo(Operator, { foreignKey: "ownerId" }); // Each fingerprint have one operator
Fingerprint.belongsTo(User, { foreignKey: "ownerId" }); // Each fingerprint have one user

User.belongsTo(Role, { foreignKey: "roleId" }); // Each user have one role
Role.hasMany(User, { foreignKey: "roleId" }); // Each role can have many users

//ClientStand.belongsTo(Sale, { foreignKey: "standId" }); // Each Sale have one Stand
//Sale.hasMany(ClientStand, { foreignKey: "standId" }); //Each Stand have many Sales

module.exports = {
  Operator,
  Role,
  User,
  Fingerprint,
  Stand,
  Sale,
  ClientStand,
};
