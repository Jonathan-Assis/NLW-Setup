import { FastifyInstance } from "fastify"
import WebPush from "web-push"
import { z } from "zod"

const publicKey = process.env.NOTIFICATION_PUBLIC_KEY!
const privateKey = process.env.NOTIFICATION_PRIVATE_KEY!

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {
   app.get('/push/public_key', () => {
    return {
        publicKey
    }
   })

   app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
   })

   app.post('/push/send', async (request, reply) => {
    console.log(request.body)
    const sendPushBody = z.object({
        subscription: z.object({
            endpoint: z.string(),
            keys: z.object({
                p256dh: z.string(),
                auth: z.string(),
            })
        })
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(() => {
        WebPush.sendNotification(subscription, 'Lembre-se de completar os seus hábitos 🏆, mantenha o foco!')
    },5000)

    return reply.status(201).send()
   })

}