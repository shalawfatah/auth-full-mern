import express from 'express'
import { createCustomer, getAllCustomers } from '../controllers/customer.js'
const router = express.Router()

router.get('/', getAllCustomers)
router.post('/', createCustomer)

export default router