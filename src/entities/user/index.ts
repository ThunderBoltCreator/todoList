// import type {UserApi} from './api/types.ts'
import { userApi } from "./api/userApi.ts"
import { authMe, logOut, signIn, userSlice } from "./model/userSlice.ts"

export { logOut, authMe, signIn, userSlice, userApi }
