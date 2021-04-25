
import mongoose from 'mongoose'
import Customer from '../models/Customer.js'

export const getAllCustomers = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getOneCustomer = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const createCustomer = async (req, res) => {
    const {name} = req.body
    try {
        const newCustomer = await new Customer({name})
        const savedCustomer = await newCustomer.save()
        res.send(savedCustomer)

    } catch (error) {
        console.log(error)
    }
}

export const deleteCustomer = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const updateCustomer = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}