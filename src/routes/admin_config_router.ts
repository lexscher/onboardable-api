import { Router } from 'express'
import {
  createAdminConfig,
  getAllAdminConfigs,
  getAdminConfigById,
  updateAdminConfig,
  deleteAdminConfig,
} from '../controllers/admin_config_controller'

const admin_config_router = Router()

admin_config_router.post('/admin_configs', createAdminConfig)

admin_config_router.get('/admin_configs', getAllAdminConfigs)

admin_config_router.get('/admin_configs/:id', getAdminConfigById)

admin_config_router.patch('/admin_configs/:id', updateAdminConfig)

admin_config_router.delete('/admin_configs/:id', deleteAdminConfig)

export { admin_config_router }
