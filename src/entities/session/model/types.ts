export type SessionStatus = "loading" | "idle" | "error"

export type SessionSliceState = {
  status: SessionStatus
  bigStatus: "loading"
  error: string | null
  isAuthorized: boolean
  redirectedPath: string
}
