import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbconnect } from './config/database.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({
    // set the allowed URL here
}))

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

dbconnect()

app.listen(process.env.PORT, () => console.log('App is running on port ' + process.env.PORT))