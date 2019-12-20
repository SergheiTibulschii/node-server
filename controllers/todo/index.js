const { todoService } = require('services')

module.exports = async router => {
    router.get('/todos', async (req, res) => {
        res.send(await todoService.getAll())
    })

    router.post('/todos', async (req, res) => {})

    router.put('/todos/:id', async (req, res) => {})

    router.delete('/todos/:id', async (req, res) => {})
}
