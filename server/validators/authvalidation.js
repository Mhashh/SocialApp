const {check} = require('express-validator')
//prebuilt library for checking req body variables
exports.userSignupValidator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min:6})
        .withMessage('Password'),
]

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min:6})
        .withMessage('Password must be 6 character long'),
]