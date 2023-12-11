import type {
  UnknownAsyncThunkFulfilledAction,
  UnknownAsyncThunkPendingAction,
  UnknownAsyncThunkRejectedAction,
} from "@reduxjs/toolkit/dist/matchers"

export const SessionMatchers = {
  isPendingAction(action: UnknownAsyncThunkPendingAction) {
    return action.type.endsWith("/pending")
  },
  isRejectedAction(action: UnknownAsyncThunkRejectedAction) {
    return action.type.endsWith("/rejected")
  },
  isFulfilledAction(action: UnknownAsyncThunkFulfilledAction) {
    return action.type.endsWith("/fulfilled")
  },
}
