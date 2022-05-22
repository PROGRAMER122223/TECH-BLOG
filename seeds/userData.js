const { User } = require('../models');

const userdata =
[
  {
    "username": "Bob",
    "password": "passwordbob"
  },
  {
    "username": "Don",
    "password": "passwordDon"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;