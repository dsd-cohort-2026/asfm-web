const router = require('express').Router();
const animalController = require('./animals.controller');
const staffAuthCheck = require('../../middleware/auth-staff');
const validate = require('../../middleware/validator');
const createAnimalSchema = require('../../validators/animals/createAnimal.validator');
const unassignAnimalSchema = require('../../validators/animals/unassignAnimal.validator');

router.get('/', animalController.getAllAnimals);
router.get('/:id', animalController.getAnimalById);
router.post('/create', staffAuthCheck, validate(createAnimalSchema), animalController.createAnimal);
router.patch(
  '/:id/unassign',
  staffAuthCheck,
  validate(unassignAnimalSchema),
  animalController.unassignAnimal,
);

module.exports = router;
