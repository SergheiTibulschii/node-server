const MongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017'
const dbName = 'todo-db'

let client
module.exports = {
    async establishConnection() {
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log(`Connection to ${dbUrl} established`)
        } catch (error) {
            console.log(`Can not connect to ${dbUrl}`)
            console.error(error)
        }
    },
    async getDbContext() {
        return client ? await client.db(dbName) : null
    }
}
