
const router = require('express').Router();
const users = require('../models/users.model');
const { getAllUser,createUser,updateUser,deleteUser } = require('../controllers/users.controller');

router.get('/', getAllUser );
router.post('/', createUser );
router.put('/:id', updateUser );
router.delete('/:id', deleteUser );

module.exports = router;