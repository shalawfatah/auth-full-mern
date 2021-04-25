import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbconnect } from './config/database.js'
dotenv.config()
import userRoutes from './routes/user.js'
import customerRoutes from './routes/customer.js'
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

app.use('/auth', userRoutes)
app.use('/customer', customerRoutes)

dbconnect()

app.listen(process.env.PORT, () => console.log('App is running on port ' + process.env.PORT))