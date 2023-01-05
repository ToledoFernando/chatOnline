const { DataTypes } = require("sequelize");

const user = (database) => {
  database.define("user", {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      // unique: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    profileIMG: {
      type: DataTypes.TEXT,
      defaultValue: "none",
    },
    profileID: {
      type: DataTypes.STRING,
      defaultValue: "none",
    },
    verify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};

module.exports = user;
