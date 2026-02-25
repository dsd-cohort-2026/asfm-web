const router = require('express').Router();
const animalController = require('./animals.controller');

router.get('/', animalController.getAllAnimals);
router.get('/:id', animalController.getAnimalById);

module.exports = router;
