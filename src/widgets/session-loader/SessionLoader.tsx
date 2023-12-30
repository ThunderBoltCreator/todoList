import { SessionSelectors } from "entities/session"
import { Loader } from "shared/index"
import { useAppSelector } from "shared/lib/ReduxHooks"

export function SessionLoader() {
  const status = useAppSelector(SessionSelectors.status)

  if (status === "loading") return <Loader />

  return null
}
