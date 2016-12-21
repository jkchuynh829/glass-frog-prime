'use strict';

const Sequelize = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize('postgres://SilentH:ilovetesting@localhost:5432/donors-choice-api');

sequelize
.authenticate()
.then((err) => console.log('Connected to POSTGRESQL'))
.catch((err) => console.log('Error', err));

const Schema = sequelize.define('proposal', {
  schoolName: Sequelize.STRING,
  title: Sequelize.STRING,
  teacherName: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  totalPrice: Sequelize.INTEGER,
  costToComplete: Sequelize.INTEGER,
  percentage: Sequelize.STRING,
  expiration: Sequelize.DATE,
});

const db = {};

db.create = (req, res) => {
  Schema.sync().then(() => {
    const data = req.body;
    Schema.create({
      schoolName: data.schoolName,
      title: data.title,
      teacherName: data.teacherName,
      city: data.city,
      state: data.state,
      totalPrice: parseInt(data.totalPrice),
      costToComplete: parseInt(data.costToComplete),
      percentage: data.percentage,
      expiration: data.expiration,
    });
  });
  db.read();
};

db.read = () => {
  Schema.sync().then(() => {
    Schema.findAll().then((data) => {
      const keys = Object.keys(data);
      const formatted = [];
      keys.forEach((key) => {
        formatted.push(data[key].dataValues);
      })
      console.log(formatted);

      return formatted;
    });
  });
}

module.exports = db;