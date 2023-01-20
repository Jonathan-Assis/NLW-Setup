import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 * 
 * Abaixo foi utilizado como exemplo a rota .get no http://localhost:3333/
 */

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log("Server Running","\u001b[92mhttp://localhost:3333" );
})