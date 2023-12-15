import cn from "classnames"
import { fetchTodos } from "entities/todoLists"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { Alert } from "shared/ui/Alert.tsx"
import { Loader } from "shared/ui/Loader.tsx"
import { TodosTabs } from "widgets/list-of-todos/ui/TodosTabs.tsx"
import css from "./layout.module.scss"
import { Header } from "shared/ui/layouts/Header.tsx"
import { useSession } from "entities/session/model/selectors.ts"

export function Layout() {
  const loc = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { status, isAuth, error } = useSession()

  const tab = loc.pathname !== "/home"
  useEffect(() => {
    dispatch(fetchTodos())

    if (loc.pathname === "/") {
      navigate("/home")
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
      <Header />
      {tab && isAuth && <TodosTabs />}
      <main className={"flex items-center justify-center h-full"}>
        <Outlet />
      </main>

      {error && <Alert type={"error"} message={error} />}
    </div>
  )
}
