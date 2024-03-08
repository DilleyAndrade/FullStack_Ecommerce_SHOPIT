import express from 'express'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js'
import productRouter from './routes/products.js'

const app = express()

dotenv.config({ path: 'backend/config/config.env' })

connectDatabase()

app.use(express.json())

app.use("/api/v1", productRouter)

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})