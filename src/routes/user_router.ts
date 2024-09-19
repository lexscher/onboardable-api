import { Router } from 'express'
import {
  createUser,
  getUserById,
  updateUser,
  getAllUsers,
} from '../controllers/user_controller'

const user_router = Router()

user_router.post('/users', createUser)

user_router.get('/users/:id', getUserById)

user_router.patch('/users/:id', updateUser)

user_router.get('/users', getAllUsers)

export { user_router }
