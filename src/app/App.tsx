import { authMe } from "entities/user"
import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks"
import { appRouter } from "./appRouter"

export function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authMe())
  }, [])

  return
}
