import { pool } from '../../connection'
import { CreateUserPayload, UpdateUserPayload } from '../../types'

export class User {
  static async findAll() {
    const query = 'SELECT * FROM "user"'
    const { rows } = await pool.query(query)
    return rows
  }

  static async findById(id: number) {
    const query = 'SELECT * FROM "user" WHERE id = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }

  static async create(data: CreateUserPayload) {
    const query = `
      INSERT INTO "user" (email, about_me, street, city, state, zip, birth_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `
    const values = [
      data.email,
      data.about_me || null,
      data.street || null,
      data.city || null,
      data.state || null,
      data.zip || null,
      data.birth_date || null,
    ]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async update(id: number, data: UpdateUserPayload) {
    const query = `
      UPDATE "user"
      SET email = COALESCE($1, email),
          about_me = COALESCE($2, about_me),
          street = COALESCE($3, street),
          city = COALESCE($4, city),
          state = COALESCE($5, state),
          zip = COALESCE($6, zip),
          birth_date = COALESCE($7, birth_date),
          updated_at = NOW()
      WHERE id = $8
      RETURNING *;
    `
    const values = [
      data.email || null,
      data.about_me || null,
      data.street || null,
      data.city || null,
      data.state || null,
      data.zip || null,
      data.birth_date || null,
      id,
    ]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async delete(id: number) {
    const query = 'DELETE FROM "user" WHERE id = $1 RETURNING *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
