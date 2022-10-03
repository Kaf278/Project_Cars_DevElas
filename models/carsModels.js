const { DataTypes } = require("sequelize");

const sequelize = require("../infra/dbSequelize");

const CarModel = sequelize.define(
  "CarModel",
  {
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    yearOfManufacture: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "Cars",
    schema: "public",
  }
);

module.exports = CarModel;
