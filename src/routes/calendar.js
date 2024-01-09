const express = require('express');
const router = express.Router();
const { getList, getById } = require('../controllers/calendar');

router.get('', getList);
router.get('/:id', getById);

module.exports = router;