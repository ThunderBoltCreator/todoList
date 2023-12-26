import { SessionSelectors } from "entities/session"
import { useAppSelector } from "shared/lib/ReduxHooks"
import { Alert } from "shared/ui/Alert"

export function AlertProvider() {
  const error = useAppSelector(SessionSelectors.error)

  if (error) return <Alert message={error} type="error" />

  return null
}
