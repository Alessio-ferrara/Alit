const Sequelize = require("sequelize");
const pg = require("pg");

let database;
// Development
if (process.env.NODE_ENV == "development") {
  database = new Sequelize("Alit", "alit_admin", "alit123", {
    host: "localhost",
    dialect: "postgres",
  });
}

// Production (use this code when deploying to production in Heroku)

if (process.env.NODE_ENV == "production") {
  pg.defaults.ssl = true;
  database = new Sequelize(process.env.DATABASE_URL, {
    ssl: true,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  });
}

module.exports = database;
