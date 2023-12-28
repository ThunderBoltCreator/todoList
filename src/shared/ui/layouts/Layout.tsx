import { AlertProvider } from "app/AlertProvider"
import { LoaderProvider } from "app/loaderProvider"
import { authMe } from "entities/user"
import { useEffect, type ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks"
import { Header } from "shared/ui/layouts/Header.tsx"
import css from "./layout.module.scss"

type LayoutProps = {
  tabsSlot?: ReactNode
}

export function Layout({ tabsSlot = null }: LayoutProps) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authMe())
  }, [])

  return (
    <div className={css.root}>
      <Header />
      <main className={"h-full"}>
        <Outlet />
        {tabsSlot}
      </main>
      <LoaderProvider />
      <AlertProvider />
    </div>
  )
}
