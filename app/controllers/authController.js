const User = require('../model/auth')
const bcrypt = require('bcryptjs');

class authController {
    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            //const hashPassword = bcrypt.hashSync(password, 7);
            //const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password/*: hashPassword, roles: [userRole.value]*/})
            await user.save()
            //return res.json({message: "Пользователь успешно зарегистрирован"})
            res.render('register' , { text:'Пользователь успешно зарегистрирован'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    
    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = await User.findOne({password})
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            //return res.json({message: "Пользователь успешно логин"})
            res.render('index')
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }

}

    

module.exports = new authController()
