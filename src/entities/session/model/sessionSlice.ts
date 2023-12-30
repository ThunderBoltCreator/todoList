import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { SessionMatchers } from "entities/session/model/sessionMatchers.ts"
import type { SessionSliceState } from "entities/session/model/types.ts"
import { authMe, logOut, signIn } from "entities/user/model/userSlice.ts"

// const initialState: SessionSliceState = {
//   status: "idle",
//   error: null,
//   user: {
//     isAuthorized: false,
//     id: null,
//     email: null,
//   },
// }

const initialState: SessionSliceState = {
  status: "idle",
  bigStatus: "loading",
  error: null,
  isAuthorized: false,
  redirectedPath: "/",
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      if (!action.payload?.includes("hub")) {
        state.error = action.payload
      }
    },
    setRedirectedPath(state, action: PayloadAction<string>) {
      state.redirectedPath = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload)
        if (action.payload.resultCode === 0) {
          state.isAuthorized = true
        }
      })
      .addCase(authMe.fulfilled, (state, action) => {
        if (action.payload.resultCode === 0) {
          state.isAuthorized = true
        }
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthorized = false
      })
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

export const { setError } = sessionSlice.actions
