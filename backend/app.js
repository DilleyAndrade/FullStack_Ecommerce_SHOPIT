import express from 'express'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js'
import productRouter from './routes/products.js'
import errorMiddleware from './middlewares/errors.js'

const app = express()

//Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`)
  console.log("Shutting dow due to caught expection")
  process.exit(1)
})

dotenv.config({ path: 'backend/config/config.env' })

connectDatabase()

app.use(express.json())

app.use("/api/v1", productRouter)

//Using error middleware
app.use(errorMiddleware)

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})

//Erro promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`)
  console.log("Shutting down server due to Unhandled Promise Rejection")
  server.close(() => {
    process.exit(1)
  })
})