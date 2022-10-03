"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Cars", [
      {
        brand: "Troller",
        model: "Pantanal",
        yearOfManufacture: "2022",
        color: "amarelo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: "Jeep",
        model: "Gladiador",
        yearOfManufacture: "2021",
        color: "vermelho",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: "Jeep",
        model: "Wrangler",
        yearOfManufacture: "2020",
        color: "laranja",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: "Land Rover",
        model: "Defender 90",
        yearOfManufacture: "2021",
        color: "azul",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: "Suzuki",
        model: "Jimny Sierra",
        yearOfManufacture: "2020",
        color: "marrom",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Cars", null, {});
  },
};
