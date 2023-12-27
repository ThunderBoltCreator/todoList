import { AlertProvider } from "app/AlertProvider"
import { LoaderProvider } from "app/loaderProvider"
import { type ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "shared/ui/layouts/Header.tsx"
import css from "./layout.module.scss"

type LayoutProps = {
  tabsSlot?: ReactNode
}

export function Layout({ tabsSlot = null }: LayoutProps) {
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
