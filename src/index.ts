import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { user_router } from './routes/user_router'
import { page_router } from './routes/page_router'
import { component_router } from './routes/component_router'
import { file_router } from './routes/file_router'
import { admin_config_router } from './routes/admin_config_router'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', user_router)
app.use('/api', page_router)
app.use('/api', component_router)
app.use('/api', file_router)
app.use('/api', admin_config_router)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
