import type { RootState } from "app/appStore.ts"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"

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
  // isAuth(state: RootState) {
  //   return state.session.user.isAuthorized
  // },
}

export const useSession = () => {
  const status = useAppSelector(SessionSelectors.status)
  const error = useAppSelector(SessionSelectors.error)
  const isAuth = useAppSelector(SessionSelectors.isAuth)

  return {
    status,
    error,
    isAuth,
  }
}
