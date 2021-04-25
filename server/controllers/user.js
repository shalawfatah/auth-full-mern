import mongoose from 'mongoose'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const getAllUsers = async (req, res) => {

}

export const getOneUser = async (req, res) => {
    console.log('All Users')
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (req, res) => {
    try {
        // Verification
        const {email, password, passwordVerify} = req.body
        if(!email || !password) return res.status(400).json({message: 'Please fill the required fields'})
        if(password.length < 6) return res.status(400).json({message: 'Password must be at least 6 characters'})
        if(password !== passwordVerify) return res.status(400).json({message: 'Password must match'})

        // See if the user has already registered
        const existingUser = await User.find({email})
        if(!existingUser) return res.status(400).json({message: 'User has already registered'})

        // hash the password
        const salt = await bcrypt.genSalt(8)
        const hashedPass = await bcrypt.hash(password, salt)

        // Create new user & save it
        const newUser = await new User({email, password: hashedPass, passwordVerify:hashedPass})
        const savedUser = await newUser.save()
        res.send(savedUser)
        
        // Log In

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (req, res) => {
    console.log('All Users')
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (req, res) => {
    console.log('All Users')
    try {
        
    } catch (error) {
        console.log(error)
    }
}