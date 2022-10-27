const User = require("./User");
const Pet = require("./Pet");

User.hasmany(Pet, {
  foreignKey: "User_id",
  onDelete: "Null",
});

Pet.belongsTo(User, {
  foreignKey: "User_id",
});

module.exports = { pets, User };
