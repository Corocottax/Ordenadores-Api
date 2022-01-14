const UserRoutes = require('express').Router()
const { isAdmin } = require('../../middlewares/auth')
const { postNewUser, loginUser, logoutUser, getAllUsers, deleteUser, /* getUser, */ patchUser } = require('./users.controller')

UserRoutes.post('/', postNewUser)
UserRoutes.post('/login', loginUser)
UserRoutes.post('/logout', [isAdmin], logoutUser)
/* UserRoutes.get('/:id', [isAuth], getUser) */
UserRoutes.get("/", [isAdmin], getAllUsers)
UserRoutes.patch("/:id", [isAdmin], patchUser)
UserRoutes.delete("/delete", [isAdmin], deleteUser)

// queremos crear un admin para borrar y hacer patch y para el get de todos

module.exports = UserRoutes;