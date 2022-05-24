const User = require('../model/auth')
const bcrypt = require('bcryptjs');

class authController {
    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                res.status(400).render('index', {mydata: "User with that name already exists!"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            //const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword})
            await user.save()
            res.status(200).render('index', {mydata: "User created succesfully!"})
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
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                res.status(400).render('index', {mydata: "Wrong pasword!"})
            }
            res.status(200).render('index', {mydata: "User logged in successfully!"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async delete(req, res) {
        try {
            const {username} = req.body
            const user = await User.deleteOne({username})
            await User.deleteOne({username})
            
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
