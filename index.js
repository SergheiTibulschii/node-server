const { api, db } = require('infrastructure')

const start = async () => {
    await api.start()
    await db.establishConnection()
}
Promise.resolve(start())

process.on('uncaughtException', error => {
    console.error(error)
})
process.on('unhandledRejection', error => {
    console.error(error)
})
