import { pool } from '../../connection'
import { CreateAdminConfigPayload, UpdateAdminConfigPayload } from '../../types'

export class AdminConfig {
  static async findAll() {
    const query = 'SELECT * FROM "admin_config";'
    const { rows } = await pool.query(query)
    return rows
  }

  static async findById(id: number) {
    const query = 'SELECT * FROM "admin_config" WHERE id = $1;'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }

  static async create(data: CreateAdminConfigPayload) {
    const query = `
      INSERT INTO "admin_config" (page_id, component_id, component_position)
      VALUES ($1, $2, $3)
      RETURNING *;
    `
    const values = [data.page_id, data.component_id, data.component_position]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async update(id: number, data: UpdateAdminConfigPayload) {
    const query = `
      UPDATE "admin_config"
      SET page_id = COALESCE($1, page_id),
          component_id = COALESCE($2, component_id),
          component_position = COALESCE($3, component_position),
          updated_at = NOW()
      WHERE id = $4
      RETURNING *;
    `
    const values = [
      data.page_id || null,
      data.component_id || null,
      data.component_position || null,
      id,
    ]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async delete(id: number) {
    const query = 'DELETE FROM "admin_config" WHERE id = $1 RETURNING *;'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
