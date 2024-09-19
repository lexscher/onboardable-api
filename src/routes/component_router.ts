import { Router } from 'express'
import {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponent,
  deleteComponent,
} from '../controllers/component_controller'

const component_router = Router()

component_router.post('/components', createComponent)

component_router.get('/components', getAllComponents)

component_router.get('/components/:id', getComponentById)

component_router.patch('/components/:id', updateComponent)

component_router.delete('/components/:id', deleteComponent)

export { component_router }
