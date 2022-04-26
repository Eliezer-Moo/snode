const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')
const { jwtSecret } = require('../../config')


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, jwtSecret)
        req.userData = decoded;
        next();
    } catch (error) {
        res.send(boom.forbidden(`Unathorized user`));
    }
}