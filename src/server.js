import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environtment'
import { apiV1 } from '*/routes/v1'

connectDB()
  .then(() => console.log('Connected successfully to dabase server!'))
  .then(() => boostServer())
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

const boostServer = () => {
  const app = express()
  
  // Enable req.body data
  app.use(express.json())

  // Use APIs v1
  app.use('/v1', apiV1)
  

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello thoangtran, I'm running at ${env.APP_HOST}:${env.APP_PORT}/`,
    )
  })
}
