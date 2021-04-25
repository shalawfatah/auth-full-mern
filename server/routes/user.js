import express from 'express'
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser, loginUser } from '../controllers/user.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
router.post('/login', loginUser)

export default router