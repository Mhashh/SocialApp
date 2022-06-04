const expressjwt = require('express-jwt')
exports.signin = expressjwt({
        secret:`${process.env.JWT_AUTH}`,
        algorithms:["HS256"]
    })