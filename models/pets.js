module.exports = function (sequelize, DataTypes) {
  var pets = sequalize.define("pets", {
    Name: DataTypes.STRING,
    species: DataTypes.STRING,
    breed: DataTypes.STRING,
    Age: DataTypes.INTEGER,
    Sex: DataTypes.STRING,
    Desciprion: DataTypes.Text,
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
