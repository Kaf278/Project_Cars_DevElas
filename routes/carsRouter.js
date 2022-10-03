const { Router } = require("express");
const router = Router();
const CarsController = require("../controllers/cars");

router.post("/", CarsController.createCar);

router.get("/", CarsController.getAllCars);

router.get("/:id", CarsController.getCarById);

router.patch("/:id", CarsController.updateCar);

router.delete("/:id", CarsController.removeCar);

module.exports = router;
