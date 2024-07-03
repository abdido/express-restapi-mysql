const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    const data = await UsersModel.getAllUsers()
    res.json({
        message: 'GET USERS SUCCESS',
        data
    })
}

const createUsers = (req, res) => {
    res.json({
        message: 'USER CREATED SUCCESSFULLY'
    })
}

const updateUser = (req, res) => {
    const {id} = req.params
    console.log(req.params)
    res.json({
        message: 'USER UPDATED SUCCESSFULLY'
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    console.log(req.params)
    req.json({
        message: 'USER DELETED SUCCESSFULLY'
    })
}

module.exports = {getAllUsers, createUsers, updateUser, deleteUser}