export type CreateUserPayload = {
  email: string
  about_me?: string
  street?: string
  city?: string
  state?: string
  zip?: string
  birth_date?: string
}
export type UpdateUserPayload = Partial<CreateUserPayload>

export type CreatePagePayload = {
  page_number: number
  customizable: boolean
}
export type UpdatePagePayload = Partial<CreatePagePayload>

export type CreateComponentPayload = { name: string }
export type UpdateComponentPayload = CreateComponentPayload

export type CreateFieldPayload = { component_id: number }
export type UpdateFieldPayload = CreateFieldPayload

export type CreateAdminConfigPayload = {
  page_id: number
  component_id: number
  component_position: number
}
export type UpdateAdminConfigPayload = Partial<CreateAdminConfigPayload>
