import { Router } from 'express'
import {
  createField,
  getAllFields,
  getFieldById,
  updateField,
  deleteField,
} from '../controllers/field_controller'

const file_router = Router()

file_router.post('/fields', createField)

file_router.get('/fields', getAllFields)

file_router.get('/fields/:id', getFieldById)

file_router.patch('/fields/:id', updateField)

file_router.delete('/fields/:id', deleteField)

export { file_router }
