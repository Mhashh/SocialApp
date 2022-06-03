const express = require('express');
const router = express.Router();
const {signup,signin,accountActivation} = require('../endfunctions/authentication')
const {userSignupValidator,userSigninValidator} = require('../validators/authvalidation')
router.post('/signup',userSignupValidator,signup);
router.post('/signin',userSigninValidator,signin);
router.post('/accountactivation/',accountActivation);
module.exports = router;
