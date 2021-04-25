import express from 'express'
import { createUser, deleteUser, getAllUsers, updateUser, loginUser, logoutUser, loggedIn } from '../controllers/user.js'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get("/loggedIn", loggedIn)

export default router