const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const data = await UsersModel.getAllUsers()
        res.json({
            message: 'GET USERS SUCCESS',
            data
        })
    } catch (err) {
        res.status(500).json({
            message: 'Controller Error',
            serverMessage: err.message,
        })
    }
} 

const createUser = async (req, res) => {
    const {body} = req

    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: 'Bad Request',
            serverMessage: 'Email, Name, Address is required'
        })
    }

    try {
        await UsersModel.createUser(body)
        res.json({
            message: 'USER CREATED SUCCESSFULLY',
            data: body
        })
    } catch (err) {
        res.status(500).json({
            message: 'Create User Controller Error',
            serverMessage: err.message
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params
    const {body} = req
    try {
        await UsersModel.updateUser(body, id)
        res.json({
            message: 'USER UPDATED SUCCESSFULLY',
            data: {
                id, ...body
            }
        })
    } catch (err) {
        res.status(500).json({
            message: 'Update User Controller Error',
            serverMessage: err.message
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        await UsersModel.deleteUser(id)
        res.json({
            message: 'USER DELETED SUCCESSFULLY',
            data: id
        })
    } catch (err) {
        res.status(500).json({
            message: 'Delete User Controller Error',
            serverMessage: err.message
        })
    }
}

module.exports = {getAllUsers, createUser, updateUser, deleteUser}