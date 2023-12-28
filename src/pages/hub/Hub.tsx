import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

type ReasonType = "hub" | "authorization"

export function Hub() {
  const navigate = useNavigate()
  const { reason } = useParams<{ reason: ReasonType }>()
  console.log("reason", !!reason)
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/auth/sign-in")
      console.log("Hihih")
    }, 2000)
    console.log("timeout", timeout)
  }, [])

  const messages: Record<ReasonType, string> = {
    hub: "you have no reason to be on this page, please leave.",
    authorization: "you are not authorized, redirect to the authorization page within 2 seconds",
  }

  if (!reason) return <Navigate to={"/"} />

  return (
    <div>
      <p>{messages[reason]}</p>
    </div>
  )
}
