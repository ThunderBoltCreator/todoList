import { $axios } from "shared/api/axiosInstance.ts"
import type { UserApi } from "entities/user/api/types.ts"

export const userApi: UserApi = {
  signIn({ email, password }: { email: string; password: string }) {
    return $axios.post("auth/login", { email, password })
  },
  authMe() {
    return $axios.get("auth/me")
  },
  logOut() {
    return $axios.delete("auth/login")
  },
}
