const User = require('../api/users/users.model')
const { setError } = require('../utils/error/error')
const { verifyJwt } = require('../utils/jwt/jwtUtils')

const isAdmin = (req, res, next) => {

    try {

        const token = req.headers.authorization

        if (!token) {

            return next(setError(404, 'Unauthorized'));

        }

        const parsedToken = token.replace('Bearer ', '')
        const validToken = verifyJwt(parsedToken, process.env.JWT_SECRET)
        const userLogued = User.findById(validToken.id)

        userLogued.password = null

        req.user = userLogued

        next()
        
    } catch (error) {

        return next(error)
        
    }

}

module.exports = { isAdmin }