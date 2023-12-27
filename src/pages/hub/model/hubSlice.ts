import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type RootState } from "app/appStore.ts"

export type ReasonType = "authorization"

type StateType = {
  reason: ReasonType
}

const initialState: StateType = {
  reason: "authorization",
}

export const hubSlice = createSlice({
  name: "hub",
  initialState,
  reducers: {
    setReason(state, action: PayloadAction<{ reason: ReasonType }>) {
      state.reason = action.payload.reason
    },
  },
})

export const HubSelectors = {
  reason(state: RootState) {
    return state.hub.reason
  },
}

export const { setReason } = hubSlice.actions
