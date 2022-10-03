const { Op, UUID } = require("sequelize");

const CarModel = require("../models/carsModels");

class CarsController {
  createCar(req, res) {
    const { uuid } = require("uuidv4");

    const data = { ...req.body, id: uuid() };
    console.log(data);

    CarModel.create(data)
      .then(() => res.status(201).json(data))
      .catch((err) => res.status(500).json({ error: err }));
  }

  getAllCars(req, res) {
    const { brand } = req.query;

    const filter = brand
      ? {
          where: {
            brand: {
              [Op.iLike]: `%${brand}%`,
            },
          },
        }
      : {};

    CarModel.findAll(filter)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: err.parent.routine }));
  }

  getCarById(req, res) {
    const { id } = req.params;
    CarModel.findOne({ where: { id } })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: `car not found` });
        }
      })
      .catch((err) => res.status(500).json({ error: err.parent.routine }));
  }

  updateCar(req, res) {
    const { id } = req.params;
    CarModel.update(req.body, { where: { id } })
      .then(() => res.status(204).end())
      .catch((err) => res.status(500).json({ error: err.parent.routine }));
  }

  removeCar(req, res) {
    const { id } = req.params;
    CarModel.destroy({ where: { id } })
      .then((result) => {
        if (result) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: `car not found` });
        }
      })
      .catch((err) => res.status(500).json({ error: err.parent.routine }));
  }
}

module.exports = new CarsController();
