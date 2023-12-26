import { AlertProvider } from "app/AlertProvider"
import { LoaderProvider } from "app/loaderProvider"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Header } from "shared/ui/layouts/Header.tsx"
import { TodosTabs } from "widgets/list-of-todos/ui/TodosTabs.tsx"
import css from "./layout.module.scss"

export function Layout() {
  const loc = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (loc.pathname === "/") {
      navigate("home")
    }
  }, [])

  return (
    <div className={css.root}>
      <Header />
      <main className={"h-full"}>
        <Outlet />
        <TodosTabs />
      </main>
      <LoaderProvider />
      <AlertProvider />
    </div>
  )
}
