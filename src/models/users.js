const dbPool = require('../config/database')

// const getAllUsers = () => {
//     const SQLquery = 'SELECT * FROM USERS'

//     return dbPool.execute(SQLquery)
// }



// CARA LAIN
const getAllUsers = async () => {
    try {
        const [rows] = await dbPool.execute('SELECT * FROM users')
        return rows
    } catch (err) {
        res.status(500).json({
            message: 'Model Error',
            serverMessage: err.message
        })
    }
}

const createUser = (data) => {
    try {
        const QuerySQL = ` INSERT INTO users (name, email, address) 
                                        VALUES 
                            ('${data.name}', '${data.email}', '${data.address}') `
        console.log(QuerySQL)
        return dbPool.execute(QuerySQL)

    } catch (err) {
        res.status(500).json({
            message: 'Model Error',
            serverMessage: err.message
        })
    }
}

const updateUser = (data, id) => {
    console.log(data)
    const QuerySQL = ` UPDATE users SET name = '${data.name}', email = '${data.email}', address = '${data.address}' 
    WHERE id = ${id} `
    return dbPool.execute(QuerySQL)
}

const deleteUser = (data) => {
    const QuerySQL = ` DELETE FROM users WHERE id = ${data} `
    return dbPool.execute(QuerySQL)
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser

} 