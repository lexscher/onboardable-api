import { pool } from '../../connection'
import { CreateComponentPayload, UpdateComponentPayload } from '../../types'

export class Component {
  static async findAll() {
    const query = 'SELECT * FROM "component"'
    const { rows } = await pool.query(query)
    return rows
  }

  static async findById(id: number) {
    const query = 'SELECT * FROM "component" WHERE id = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }

  static async create(data: CreateComponentPayload) {
    const query = `
      INSERT INTO "component" (name)
      VALUES ($1)
      RETURNING *;
    `
    const { rows } = await pool.query(query, [data.name])
    return rows[0]
  }

  static async update(id: number, data: UpdateComponentPayload) {
    const query = `
      UPDATE "component"
      SET name = COALESCE($1, name),
          updated_at = NOW()
      WHERE id = $2
      RETURNING *;
    `
    const { rows } = await pool.query(query, [data.name || null, id])
    return rows[0]
  }

  static async delete(id: number) {
    const query = 'DELETE FROM "component" WHERE id = $1 RETURNING *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
