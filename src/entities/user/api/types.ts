import type { AxiosResponse } from "axios"

export interface UserApi {
  signIn: (data: { email: string; password: string }) => Promise<AxiosResponse<SignIn>>
  authMe: () => Promise<AxiosResponse<AuthMe>>
  logOut: () => Promise<AxiosResponse<LogOut>>
}
type Response<D> = {
  data: D
  resultCode: number
  message?: string[]
  messages?: string[]
  fieldErrors?: string[]
}

type SignIn = Response<{ userId: number }>
type AuthMe = Response<{ id: number; login: string; email: string }>
type LogOut = Response<Record<string, never>>
