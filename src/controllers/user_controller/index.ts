import { Request, Response } from 'express'
import { User } from '../../models/user'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll()

    return res.status(200).json(users)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching users', details: err.message })
  }
}

export const createUser = async (req: Request, res: Response) => {
  const payload = req.body
  try {
    const user = await User.create(payload)

    return res.status(201).json(user)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error creating user', details: err.message })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const user = await User.findById(parseInt(id))

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.status(200).json(user)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error fetching user', details: err.message })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const { email, about_me, street, city, state, zip, birth_date } = req.body
  try {
    const updatedUser = await User.update(parseInt(id), {
      email,
      about_me,
      street,
      city,
      state,
      zip,
      birth_date,
    })

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.status(200).json(updatedUser)
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: 'Error updating user', details: err.message })
  }
}
