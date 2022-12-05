const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("milestones_db", "root", "12", {
    host: "localhost",
    dialect: "mysql",
  });
}

// const db = new Sequelize('milestones_db','root','12',{
//   host: 'localhost',
//   dialect: 'mysql'
// });

module.exports = sequelize;
