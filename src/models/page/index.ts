import { pool } from '../../connection'
import { CreatePagePayload, UpdatePagePayload } from '../../types'

export class Page {
  static async findAll() {
    const query = 'SELECT * FROM "page"'
    const { rows } = await pool.query(query)
    return rows
  }

  static async findById(id: number) {
    const query = 'SELECT * FROM "page" WHERE id = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }

  static async create(data: CreatePagePayload) {
    const query = `
      INSERT INTO "page" (page_number, customizable)
      VALUES ($1, $2)
      RETURNING *;
    `
    const values = [data.page_number, data.customizable]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async update(id: number, data: UpdatePagePayload) {
    const query = `
      UPDATE "page"
      SET page_number = COALESCE($1, page_number),
          customizable = COALESCE($2, customizable),
          updated_at = NOW()
      WHERE id = $3
      RETURNING *;
    `
    const values = [data.page_number || null, data.customizable || null, id]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async delete(id: number) {
    const query = 'DELETE FROM "page" WHERE id = $1 RETURNING *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
