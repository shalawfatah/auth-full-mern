import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = Schema({
    email: {type: String, required:true},
    password: {type:String, required:true},
    passwordVerify: {type:String, required:true}
})
const User = mongoose.model('User', userSchema)
export default User