import { Request, Response } from 'express'
import { AdminConfig } from '../../models/admin_config'

export const createAdminConfig = async (req: Request, res: Response) => {
  const { page_id, component_id, component_position } = req.body
  try {
    const adminConfig = await AdminConfig.create({
      page_id,
      component_id,
      component_position,
    })

    return res.status(201).json(adminConfig)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error creating admin config', details: err.message })
  }
}

export const getAllAdminConfigs = async (req: Request, res: Response) => {
  try {
    const adminConfigs = await AdminConfig.findAll()

    return res.status(200).json(adminConfigs)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching admin configs', details: err.message })
  }
}

export const getAdminConfigById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const adminConfig = await AdminConfig.findById(parseInt(id))

    if (!adminConfig) {
      return res.status(404).json({ error: 'Admin config not found' })
    }

    return res.status(200).json(adminConfig)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching admin config', details: err.message })
  }
}

export const updateAdminConfig = async (req: Request, res: Response) => {
  const { id } = req.params
  const { page_id, component_id, component_position } = req.body
  try {
    const updatedAdminConfig = await AdminConfig.update(parseInt(id), {
      page_id,
      component_id,
      component_position,
    })

    if (!updatedAdminConfig) {
      return res.status(404).json({ error: 'Admin config not found' })
    }

    return res.status(200).json(updatedAdminConfig)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error updating admin config', details: err.message })
  }
}

export const deleteAdminConfig = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleted = await AdminConfig.delete(parseInt(id))

    if (!deleted) {
      return res.status(404).json({ error: 'Admin config not found' })
    }

    return res
      .status(200)
      .json({ message: 'Admin config deleted successfully' })
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error deleting admin config', details: err.message })
  }
}
