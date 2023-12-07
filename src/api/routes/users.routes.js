const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/track/user/:username', usersController.trackPlayer);
router.get('/track/clan/:id', usersController.trackClan);

router.get('/user/:username', usersController.getPlayer);
router.get('/clan/:id', usersController.getClan);

module.exports = router;
