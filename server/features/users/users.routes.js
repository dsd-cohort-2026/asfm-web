const router = require('express').Router();
const userController = require('./users.controller');

router.get('/', userController.getAllUsers);

module.exports = router;
