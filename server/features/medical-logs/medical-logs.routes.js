const router = require('express').Router();
const medicalLogController = require('./medical-logs.controller');

router.get('/', medicalLogController.getAllMedicalLogs);
router.get('/:id', medicalLogController.getMedicalLogById);

module.exports = router;
