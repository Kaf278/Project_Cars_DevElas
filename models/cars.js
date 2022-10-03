"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
  
    static associate(models) {
    
    }
  }
  Cars.init(
    {
      id: DataTypes.UUID,
      brand: DataTypes.STRING(100),
      model: DataTypes.STRING(100),
      yearOfManufacture: DataTypes.STRING(30),
      color: DataTypes.STRING(30),
    },
    {
      sequelize,
      modelName: "Cars",
    }
  );
  return Cars;
};
