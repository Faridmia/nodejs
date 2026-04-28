
const router = require('express').Router();
const users = require('../models/users.model');
const { getAllUser,createUser } = require('../controllers/users.controller');

router.get('/', getAllUser );
router.post('/', createUser );

module.exports = router;