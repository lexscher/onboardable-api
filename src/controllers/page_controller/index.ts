import { Request, Response } from 'express'
import { Page } from '../../models/page'

export const createPage = async (req: Request, res: Response) => {
  const { page_number, customizable } = req.body
  try {
    const page = await Page.create({ page_number, customizable })

    return res.status(201).json(page)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error creating page', details: err.message })
  }
}

export const getAllPages = async (req: Request, res: Response) => {
  try {
    const pages = await Page.findAll()

    return res.status(200).json(pages)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching pages', details: err.message })
  }
}

export const getPageById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const page = await Page.findById(parseInt(id))

    if (!page) {
      return res.status(404).json({ error: 'Page not found' })
    }

    return res.status(200).json(page)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching page', details: err.message })
  }
}

export const updatePage = async (req: Request, res: Response) => {
  const { id } = req.params
  const { page_number, customizable } = req.body
  try {
    const updatedPage = await Page.update(parseInt(id), {
      page_number,
      customizable,
    })

    if (!updatedPage) {
      return res.status(404).json({ error: 'Page not found' })
    }

    return res.status(200).json(updatedPage)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error updating page', details: err.message })
  }
}

export const deletePage = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleted = await Page.delete(parseInt(id))

    if (!deleted) {
      return res.status(404).json({ error: 'Page not found' })
    }

    return res.status(200).json({ message: 'Page deleted successfully' })
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error deleting page', details: err.message })
  }
}
