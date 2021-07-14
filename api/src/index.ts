const path = require('path')

const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../static')
})

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html')
})

fastify.get('/', async () => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()