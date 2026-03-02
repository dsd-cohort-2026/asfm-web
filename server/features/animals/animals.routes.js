const router = require('express').Router();
const animalController = require('./animals.controller');
const staffAuthCheck = require('../../middleware/auth-staff');
const validate = require('../../middleware/validator');
const createAnimalSchema = require('../../validators/animals/createAnimal.validator');
const assignAnimalSchema = require('../../validators/animals/assignAnimal.validator');

router.get('/', animalController.getAllAnimals);
router.get('/:id', animalController.getAnimalById);
router.post('/create', staffAuthCheck, validate(createAnimalSchema), animalController.createAnimal);
router.patch(
  '/:id/assign',
  staffAuthCheck,
  validate(assignAnimalSchema),
  animalController.assignAnimal,
);

module.exports = router;
