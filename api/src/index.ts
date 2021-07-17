const path = require('path')

const log = require('pino')({ level: 'info' })
const fastify = require('fastify')({ logger: log })

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../static'),
})

fastify.setNotFoundHandler((req, res) => {
    res.sendFile('index.html')
})

fastify.register(
    async () => {
        return { hello: 'world' }
    },
    { prefix: '/api' }
)

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
