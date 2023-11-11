const Sequelize = require("sequelize");
const sequelize = require("./../utils/db");

const Banner = sequelize.define("Banner", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Banner.sync();

module.exports = Banner;
