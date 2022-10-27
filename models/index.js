const User = require("./User");
const project = require("./Project");

User.hasmany(project, {
  foreignKey: "User_id",
  onDelete: "Null",
});

project.belongsTo(User, {
  foreignKey: "User_id",
});
module.exports = { project, Users };
