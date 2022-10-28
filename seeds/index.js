const sequelize = require('../config/connection');
const {User, Pet} = require('../models/');
const petData = require('./petData.json');
const userData = require('./userData.json')

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await Pet.bulkCreate(petData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    returning: true,
  });

  for (const pet of petData) {
    await Pet.create({
      ...pet,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
      user_id: 1,
    });
  }

  process.exit(0);
};

seedDatabase();
