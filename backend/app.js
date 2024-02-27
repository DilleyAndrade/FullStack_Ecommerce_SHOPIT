import express from 'express'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js'
//Import all router
import productRouter from './routes/products.js'



const app = express()

dotenv.config({ path: 'backend/config/config.env' })

//Connecting to database
connectDatabase()


// "/api/v1" será a url exibida antes de /products ficando /api/v2/products
app.use("/api/v1", productRouter)



app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})