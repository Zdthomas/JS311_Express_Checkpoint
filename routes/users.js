const express = require('express');

const router = express.Router();

const { usersController } = require('../controllers');




router.get('/', usersController.list);

router.get('/:id', usersController.show);

router.post('/', usersController.create);

router.put('/:id', usersController.edit);

router.delete('/:id', usersController.delete);

module.exports = router