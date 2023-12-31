import { useEffect } from "react"
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom"

export function CreateTodo() {
  const navigate = useNavigate()
  const loc = useLocation()

  const data = useLoaderData()
  //@ts-ignore
  console.log("data", data.data.resultCode)
  useEffect(() => {
    if (loc.pathname === "/new-todo") {
      navigate("/new-todo/title")
    }
  })

  return <Outlet />
}
