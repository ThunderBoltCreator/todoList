import type { RootState } from "app/appStore.ts"


export const SessionSelectors = {
  status(state: RootState) {
    return state.session.status
  }, 
  error(state: RootState) {
    return state.session.error
  }, 
  isAuth(state: RootState) {
    return state.session.isAuthorized
  },
}