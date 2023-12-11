import cn from "classnames"
import { SessionSelectors } from "entities/session"
import { fetchTodos } from "entities/todoLists"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { Alert } from "shared/ui/Alert.tsx"
import { Loader } from "shared/ui/Loader.tsx"
import { TodosTabs } from "widgets/list-of-todos/ui/TodosTabs.tsx"
import css from "./layout.module.scss"

export function Layout() {
  const loc = useLocation()
  const nav = useNavigate()
  const dispatch = useAppDispatch()

  const status = useAppSelector(SessionSelectors.status)
  const error = useAppSelector(SessionSelectors.error)

  useEffect(() => {
    dispatch(fetchTodos())
    if (loc.pathname === "/") {
      nav("/home")
    }
  }, [])
  const popupAlertStyles = cn("absolute w-full h-full flex items-center bg-opacity-bg justify-center")

  if (status === "loading") {
    return (
      <div className={popupAlertStyles}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={css.root}>
      <TodosTabs />
      <main className={"flex items-center justify-center h-full"}>
        <Outlet />
      </main>
      {/* {status === "loading" && (
        <div className={popupAlertStyles}>
          <Loader />
        </div>
      )} */}
      {error && <Alert type={"error"} message={error} />}
    </div>
  )
}
