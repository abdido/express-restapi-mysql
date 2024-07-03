const dbPool = require('../config/database')

const getAllUsers = () => {
    const SQLquery = 'SELECT * FROM USERS'

    return dbPool.execute(SQLquery)
}



// CARA LAIN
// const getAllUsers = async () => {
//     const [rows] = await dbPool.execute('SELECT * FROM USERS')
//     return rows
// }

module.exports = {
    getAllUsers,

}