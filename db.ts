import { Client } from 'pg'
import fs from 'fs'
import path from 'path'

const runSQL = async (filePath: string) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  })

  try {
    await client.connect()
    const sql = fs.readFileSync(path.join(__dirname, filePath)).toString()
    await client.query(sql)

    console.log(`${filePath} executed successfully`)
  } catch (err) {
    console.error(`Error executing ${filePath}:`, err)
  } finally {
    await client.end()
  }
}

const filePath = process.argv[2]

if (filePath) {
  runSQL(filePath)
} else {
  console.error("please provide a SQL file path as an argument")
}
