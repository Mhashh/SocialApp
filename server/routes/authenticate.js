const express = require('express');
const router = express.Router();
const {signup} = require('../endfunctions/authentication')
router.post('/signup',signup);
router.post('/signin');

module.exports = router;
