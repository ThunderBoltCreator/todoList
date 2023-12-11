import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { SessionMatchers } from "./matchers.ts"

export type SessionStatus = "loading" | "idle" | "error"

export type SessionSliceState = {
  status: SessionStatus
  isAuthorized: boolean
  error: string | null
}

const initialState: SessionSliceState = {
  isAuthorized: false,
  status: "idle",
  error: null,
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ isAuthorized: boolean }>) {
      state.isAuthorized = action.payload.isAuthorized
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    setStatus(state, action: PayloadAction<{ status: SessionStatus }>) {
      state.status = action.payload.status
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(SessionMatchers.isPendingAction, (state) => {
        state.status = "loading"
      })
      .addMatcher(SessionMatchers.isFulfilledAction, (state) => {
        state.status = "idle"
      })
      .addMatcher(SessionMatchers.isRejectedAction, (state, action) => {
        state.error = action.error.message
        state.status = "error"
      })
  },
})

export const { setAuth, setError, setStatus } = sessionSlice.actions
