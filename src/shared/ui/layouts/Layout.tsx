import cn from "classnames"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import css from "./layout.module.scss"
import { Header } from "shared/ui/layouts/Header.tsx"
import { authMe } from "entities/user/model/userSlice.ts"
import { useSession } from "entities/session/model/sessionSelectors.ts"
import { Loader } from "shared/ui/Loader.tsx"
import { TodosTabs } from "widgets/list-of-todos/ui/TodosTabs.tsx"
import { Alert } from "shared/ui/Alert.tsx"

export function Layout() {
  const loc = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { status, isAuth, error } = useSession()
  // const status = useAppSelector(SessionSelectors.status)

  const tab = loc.pathname !== "/home"
  useEffect(() => {
    dispatch(authMe())

    if (loc.pathname === "/") {
      navigate("/home")
    }
  }, [])
  const popupAlertStyles = cn("absolute w-full h-full flex items-center bg-opacity-bg justify-center")

  // if (status === 'loading') {
  //   return <div className={popupAlertStyles}>
  //     <Loader />
  //   </div>
  // }

  return (
    <div className={css.root}>
      <Header />
      <main className={"flex items-center justify-center h-full"}>
        <Outlet />
      </main>
      {tab && isAuth && <TodosTabs />}
      {status === "loading" && (
        <div className={popupAlertStyles}>
          <Loader />
        </div>
      )}
      {error && <Alert type={"error"} message={error} />}
    </div>
  )
}
