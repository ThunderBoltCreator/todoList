import {useEffect} from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import css from './layout.module.scss'

export function Layout() {
  const loc = useLocation()
  const nav = useNavigate()
  useEffect(() => {
    if (loc.pathname === '/') {
      nav('/home')
    }
  }, [loc])


  return (
    <div className={css.root}>
      <Outlet />
    </div>
  )
}