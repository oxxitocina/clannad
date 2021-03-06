const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')


router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
router.delete('/users', controller.delete)

module.exports = router