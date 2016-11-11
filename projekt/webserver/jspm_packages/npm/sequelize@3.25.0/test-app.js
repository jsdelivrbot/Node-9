/* */ 
"use strict";
/* jshint esnext:true, -W110 */

var Sequelize, sequelize, DataTypes, Promise = require('bluebird'), _ = require('lodash'), moment = require('moment');

Sequelize = DataTypes = require('./index.js');
// var db = sequelize = new Sequelize('sequelize', 'root', '', {
var db = sequelize = new Sequelize('sequelize_test', 'postgres', 'postgres', {
  // dialect: 'postgres',
//var db = sequelize = new Sequelize('sequelize-test-72', 'sequelize', 'nEGkLma26gXVHFUAHJxcmsrK', {
  //dialect: 'mssql',
  //host: 'mssql.sequelizejs.com',
  //port: 11433,
  dialect: 'sqlite',
  //storage: '/tmp/test.sqlite',
//  timezone: '+05:30',
  define: {
    // timestamps: false,
  },
  logging: console.log,
  // pool: {
  //   max: 10,
  //   min: 2,
  //   idle: 10000
  // }
});


var Table = sequelize.define('Table', {
  value: {
    type: Sequelize.STRING
  }
});



return sequelize.sync({
  force: true,
  logging: console.log
})
  .then(() => {
    return Table.create({
      value: 11
    });
  })
  .then(() => {
    return Table.findAll().then(results => {
      console.log(results[0].value, typeof results[0].value);
    });
  })
  .then(console.log)
  .finally(() => sequelize.close());
