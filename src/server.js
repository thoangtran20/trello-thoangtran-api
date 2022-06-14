import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environtment'

connectDB()
  .then(() => console.log('Connected successfully to dabase server!'))
  .then(() => boostServer())
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

const boostServer = () => {
  const app = express()

  app.get('/test', async(req, res) => {
    res.end('<h1>Hello World</h1></hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello thoangtran, I'm running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })
}

