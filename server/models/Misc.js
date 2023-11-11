const Sequelize = require("sequelize");
const sequelize = require("./../utils/db");

const Misc = sequelize.define(
  "Misc",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    miscImageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aboutBannerImageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    serviceListBannerImageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    serviceDetailsBannerImageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    blogListBannerImageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactUsBannerImageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },

  { updatedAt: false }
);

Misc.sync();

module.exports = Misc;
