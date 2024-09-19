import { Request, Response } from 'express'
import { Component } from '../../models/component'

export const createComponent = async (req: Request, res: Response) => {
  const { name } = req.body
  try {
    const component = await Component.create({ name })

    return res.status(201).json(component)
  } catch (err: any) {
    return res
      .status(500)
      .json({ err: 'Error creating component', details: err.message })
  }
}

export const getAllComponents = async (req: Request, res: Response) => {
  try {
    const components = await Component.findAll()

    return res.status(200).json(components)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching components', details: err.message })
  }
}

export const getComponentById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const component = await Component.findById(parseInt(id))

    if (!component) {
      return res.status(404).json({ error: 'Component not found' })
    }

    return res.status(200).json(component)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching component', details: err.message })
  }
}

export const updateComponent = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const updatedComponent = await Component.update(parseInt(id), { name })

    if (!updatedComponent) {
      return res.status(404).json({ error: 'Component not found' })
    }

    return res.status(200).json(updatedComponent)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error updating component', details: err.message })
  }
}

export const deleteComponent = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleted = await Component.delete(parseInt(id))

    if (!deleted) {
      return res.status(404).json({ error: 'Component not found' })
    }

    return res.status(200).json({ message: 'Component deleted successfully' })
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error deleting component', details: err.message })
  }
}
