import express from 'express'
import { createCustomer, getAllCustomers } from '../controllers/customer.js'
const router = express.Router()
import auth from '../middleware/auth.js'

router.get('/', getAllCustomers)
router.post('/', auth, createCustomer)

export default router