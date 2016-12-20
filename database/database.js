'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('blue-frog-db', 'admin', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(() => {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1988, 6, 20);
  }).then((jane) => {
    console.log(jane.get({
      plain: true
    }));
  });
});