const  Sequelize  = require("sequelize")


// Development
const database = new Sequelize("Alit", "alit_admin", "alit123", {
    host:"localhost",
    dialect: "postgres"
});

module.exports = database;

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })