import type { RootState } from "app/appStore.ts"

export const userSelectors = {
  email(state: RootState) {
    return state.user.email
  },
}
