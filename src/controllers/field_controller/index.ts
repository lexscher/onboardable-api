import { Request, Response } from 'express'
import { Field } from '../../models/field'

export const createField = async (req: Request, res: Response) => {
  const { component_id } = req.body
  try {
    const field = await Field.create({ component_id })

    return res.status(201).json(field)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error creating field', details: err.message })
  }
}

export const getAllFields = async (req: Request, res: Response) => {
  try {
    const fields = await Field.findAll()

    return res.status(200).json(fields)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching fields', details: err.message })
  }
}

export const getFieldById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const field = await Field.findById(parseInt(id))

    if (!field) {
      return res.status(404).json({ error: 'Field not found' })
    }

    return res.status(200).json(field)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching field', details: err.message })
  }
}

export const updateField = async (req: Request, res: Response) => {
  const { id } = req.params
  const { component_id } = req.body
  try {
    const updatedField = await Field.update(parseInt(id), { component_id })

    if (!updatedField) {
      return res.status(404).json({ error: 'Field not found' })
    }

    return res.status(200).json(updatedField)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error updating field', details: err.message })
  }
}

export const deleteField = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleted = await Field.delete(parseInt(id))

    if (!deleted) {
      return res.status(404).json({ error: 'Field not found' })
    }

    return res.status(200).json({ message: 'Field deleted successfully' })
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error deleting field', details: err.message })
  }
}
