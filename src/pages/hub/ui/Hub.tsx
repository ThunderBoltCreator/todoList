import { useAppSelector } from "shared/lib/ReduxHooks"
import { HubSelectors, type ReasonType } from "../model/hubSlice"

export function Hub() {
  const reason = useAppSelector(HubSelectors.reason)

  const messages: Record<ReasonType, string> = {
    authorization: "you are not authorized, redirect to the authorization page within 2 seconds",
  }

  return (
    <div>
      <p>{messages[reason]}</p>
    </div>
  )
}
