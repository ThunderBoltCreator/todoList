import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function CreateTodo() {
  const navigate = useNavigate()
  const loc = useLocation()

  useEffect(() => {
    if (loc.pathname === "/new-todo") {
      navigate("title")
    }
  })

  return <Outlet />
}
