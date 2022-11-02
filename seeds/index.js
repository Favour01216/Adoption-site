const sequelize = require("../config/connection");
const { User, Pet } = require("../modelsxx");
const petData = require("./petData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    returning: true,
  });

  for (const pet of petData) {
    await Pet.create({
      ...pet,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
