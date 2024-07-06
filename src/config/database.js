const mysql = require('mysql2')
require('dotenv').config()


const dbPool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
    queueLimit: process.env.MYSQL_QUEUE_LIMIT
})

module.exports = dbPool.promise()