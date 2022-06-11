import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environtment'

const app = express()

// const hostname = 'localhost'
// const port = 5000

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>Hello World</h1></hr>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello thoangtran, I'm running at ${env.HOST}:${env.PORT}/`)
})
