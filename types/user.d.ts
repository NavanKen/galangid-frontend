export interface IUser {
  id: string
  name: string
  email: string
  avatarUrl: string | null
  role: "ADMIN" | "CAMPAIGNER" | "DONATOR"
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateUserPayload {
  name: string
  email: string
  password: string
  role: "ADMIN" | "CAMPAIGNER" | "DONATOR"
}

export interface UpdateUserStatusPayload {
  isActive: boolean
}
