import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const dbconnect = () => {
try {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(()=> console.log('DB connected'))
    .catch((error) => console.log(error))
} catch (error) {
    console.log(error)
}
}
