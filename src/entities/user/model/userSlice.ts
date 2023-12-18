import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userApi } from "entities/user/api/userApi.ts"
import type { UserStateModel } from "entities/user/model/types.ts"

const initialState: UserStateModel = {
  email: null,
  userId: null,
}

export const signIn = createAsyncThunk("signIn", async (data: { email: string; password: string }) => {
  const res = await userApi.signIn(data)
  // console.log(res)
  return res.data
})
export const authMe = createAsyncThunk("authMe", async () => {
  const res = await userApi.authMe()
  return res.data
})

export const logOut = createAsyncThunk("logOut", async () => {
  const res = await userApi.logOut()
  return res.data
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.userId = action.payload.data.userId.toString()
      })
      .addCase(authMe.fulfilled, (state, action) => {
        // console.log(action.payload)
        if (action.payload.resultCode === 0) {
          state.userId = action.payload.data.id.toString()
          state.email = action.payload.data.email
        }
      })
      .addCase(logOut.fulfilled, (state) => {
        state.userId = null
        state.email = null
      })
  },
})
