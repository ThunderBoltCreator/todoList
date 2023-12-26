export type SessionStatus = "loading" | "idle" | "error"

// export type SessionSliceState = {
//   status: SessionStatus
//   error: string | null
//   user: {
//     isAuthorized: boolean
//     id: string | null
//     email: string | null
//   }
// }
export type SessionSliceState = {
  status: SessionStatus
  bigStatus: "loading"
  error: string | null
  isAuthorized: boolean
}
