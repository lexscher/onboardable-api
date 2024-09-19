import { pool } from '../../connection'
import { CreateFieldPayload, UpdateFieldPayload } from '../../types'

export class Field {
  static async findAll() {
    const query = 'SELECT * FROM "field";'
    const { rows } = await pool.query(query)
    return rows
  }

  static async findById(id: number) {
    const query = 'SELECT * FROM "field" WHERE id = $1;'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }

  static async create(data: CreateFieldPayload) {
    const query = `
      INSERT INTO "field" (component_id)
      VALUES ($1)
      RETURNING *;
    `
    const { rows } = await pool.query(query, [data.component_id])
    return rows[0]
  }

  static async update(id: number, data: UpdateFieldPayload) {
    const query = `
      UPDATE "field"
      SET component_id = COALESCE($1, component_id),
          updated_at = NOW()
      WHERE id = $2
      RETURNING *;
    `
    const { rows } = await pool.query(query, [data.component_id || null, id])
    return rows[0]
  }

  static async delete(id: number) {
    const query = 'DELETE FROM "field" WHERE id = $1 RETURNING *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
