const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "ante_media",
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DOMAIN,
    dialect: "mysql",
  }
);

sequelize.authenticate().then().catch((err)=>{console.log(err)});

module.exports = sequelize;
