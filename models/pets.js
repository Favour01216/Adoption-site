module.exports = function (sequelize, DataTypes) {
  var pets = sequelize.define("pets", {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    description: DataTypes.Text,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  });

  return pets;
};
