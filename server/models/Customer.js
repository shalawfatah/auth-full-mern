import mongoose from 'mongoose'

const Schema = mongoose.Schema

const customerSchema = Schema({
    name: {type:String, required: true}
})
const Customer = mongoose.model('Customer', customerSchema)
export default Customer