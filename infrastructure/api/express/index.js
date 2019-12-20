const express = require('express')
const bodyParser = require('body-parser')

const getRouter = async () => {
    const controllers = require('controllers')
    const router = express.Router()
    for await (const controller of controllers) {
        await controller(router)
    }
    return router
}

const createApp = async () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/api/v1', await getRouter())
    return app
}

module.exports = {
    async start() {
        const app = await createApp()
        app.listen(3000, err => {
            if (err) {
                console.log('Express failed')
                console.error(err)
            } else {
                console.log(`Express is up and running on port ${3000}`)
            }
        })
    }
}
