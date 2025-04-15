const { Sequelize } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize('admin','postgres','123',{
    dialect:'postgres',
    host:'localhost',
    port:5432    ,
    ssl: true
})



module.exports = sequelize