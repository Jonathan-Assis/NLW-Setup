import Fastify from "fastify";

const app = Fastify()

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 * 
 * Abaixo foi utilizado como exemplo a rota .get no http://localhost:3333/
 */

app.get('/', () => {
    return 'Hello World!'
})

app.listen({
    port: 3333
})