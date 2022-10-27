const User = require("./User");
const pets = require("./Pets");

User.hasmany(pets, {
  foreignKey: "User_id",
  onDelete: "Null",
});

project.belongsTo(User, {
  foreignKey: "User_id",
});
module.exports = { pets, User };
