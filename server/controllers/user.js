import mongoose from 'mongoose'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllUsers = async (req, res) => {

}

export const createUser = async (req, res) => {
    try {
        // Verification
        const {email, password, passwordVerify} = req.body
        if(!email || !password) return res.status(400).json({message: 'Please fill the required fields'})
        if(password.length < 6) return res.status(400).json({message: 'Password must be at least 6 characters'})
        if(password !== passwordVerify) return res.status(400).json({message: 'Password must match'})

        // See if the user has already registered
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({message: 'User has already registered'})

        // hash the password
        const salt = await bcrypt.genSalt(8)
        const hashedPass = await bcrypt.hash(password, salt)

        // Create new user & save it
        const newUser = await new User({email, password: hashedPass, passwordVerify:hashedPass})
        const savedUser = await newUser.save()
        
        // Log In
        const token = jwt.sign({user: savedUser._id}, process.env.JWT_SECRET)
        res.cookie("token", token, {
            httpOnly:true
        }).send()

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

export const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        // Validations
        if(!email || !password) return res.status(400).json({message: 'Please fill the required fields'})

        // See if user exists 
        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(400).json({message: 'Wrong credentials'})

        // See if the password belongs to the user
        const correctPas = await bcrypt.compare(password, existingUser.password)
        if(!correctPas) return res.status(400).json({message: 'Wrong credentials'})


        // Log In
        const token = jwt.sign({user: existingUser._id}, process.env.JWT_SECRET)
        res.cookie("token", token, {
            httpOnly:true
        }).send()
        
    } catch (error) {
        console.log(error)
    }
}

export const logoutUser = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send()
}

export const loggedIn = (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.json(false);
  
      jwt.verify(token, process.env.JWT_SECRET);
  
      res.send(true);
    } catch (err) {
      res.json(false);
    }
  }