import { Router } from 'express'
import {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
} from '../controllers/page_controller'

const page_router = Router()

page_router.post('/pages', createPage)

page_router.get('/pages', getAllPages)

page_router.get('/pages/:id', getPageById)

page_router.patch('/pages/:id', updatePage)

page_router.delete('/pages/:id', deletePage)

export { page_router }
