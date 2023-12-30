import { SessionAlert } from "widgets/session-alert/SessionAlert"
import { SessionLoader } from "widgets/session-loader/SessionLoader"
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
      <SessionLoader />
      <SessionAlert />
    </div>
  )
}
