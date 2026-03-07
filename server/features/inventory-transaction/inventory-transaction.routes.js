const router = require('express').Router();
const inventoryTransactionController = require('./inventory-transaction.controller');
const staffAuthCheck = require('../../middleware/auth-staff');
const validate = require('../../middleware/validator');
const intakeTransactionSchema = require('../../validators/inventory-transaction/intakeTransaction.validator');
const distributeTransactionSchema = require('../../validators/inventory-transaction/distributeTransaction.validator');

router.get('/', inventoryTransactionController.getAllInventoryTransactions);
router.get('/:id', inventoryTransactionController.getInventoryTransactionById);
router.post('/intake', staffAuthCheck, validate(intakeTransactionSchema), inventoryTransactionController.createIntakeTransaction);
router.post('/distribute', staffAuthCheck, validate(distributeTransactionSchema), inventoryTransactionController.createDistributeTransaction);

module.exports = router;
