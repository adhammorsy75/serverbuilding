const { User } = require('../models');
const viewUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userDelete = await User.findByIdAndDelete(id)
        if (userDelete) {
            return res.status(200).send('removed user')
        }
        throw new Error("User not in database")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const editUser = async (req, res) => {
    try {
        const id = req.params.id
        const editUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (editUser) {
            return res.status(200).json(editUser)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const user = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
module.exports = {
    deleteUser,
    viewUsers,
    user,
    editUser
}