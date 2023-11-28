import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from 'app/appStore.ts'

export type SessionStatus = 'loading' | 'successes' | 'error'

export type SessionSliceState = {
  status: SessionStatus
  isAuthorized: boolean
  error: string | null
}

const initialState: SessionSliceState = {
  isAuthorized: false,
  status: 'loading',
  error: null
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ isAuthorized: boolean }>) {
      state.isAuthorized = action.payload.isAuthorized
    },
    setError(state, action: PayloadAction<{ error: never }>) {
      state.error = action.payload.error
    },
    setStatus(state, action: PayloadAction<{ status: SessionStatus }>) {
      state.status = action.payload.status
    }
  }
})

export const selectStatus = (state: RootState) => state.session.status
export const selectError = (state: RootState) => state.session.error
export const selectIsAuth = (state: RootState) => state.session.isAuthorized

export const {setAuth, setError, setStatus} = sessionSlice.actions
