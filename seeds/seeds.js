const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const { User } = require('../models');
const userData = require('./user-seeds.json');

const sequelize = require('../config/connection');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log('\n----- DATABASE SYNCED -----\n');

  // console.log('\n----- USERS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase()
