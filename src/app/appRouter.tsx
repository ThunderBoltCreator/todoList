import { createBrowserRouter, Navigate } from "react-router-dom"
import { Home } from "pages/home/Home.tsx"
import { baseLayout } from "app/layouts/baseLayout.tsx"
import { SingleTodoList } from "pages/single-todolist/SingleTodoList.tsx"
import { SignUp } from "pages/sign-up"
import { SignIn } from "pages/sign-in"
import type { ReactElement } from "react"
import { SessionSelectors } from "entities/session"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"

function AuthGuard({ children }: { children: ReactElement }) {
  const isAuth = useAppSelector(SessionSelectors.isAuth)

  console.log("rabotaet")
  console.log(isAuth)
  if (!isAuth) return <Navigate to={"/auth/sign-in"} />

  return children
}
export function appRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: baseLayout,
      errorElement: (
        <div>
          <strong>404 NOT FOUND</strong>
        </div>
      ),
      children: [
        {
          path: "home",
          element: (
            <AuthGuard>
              <Home />
            </AuthGuard>
          ),
        },
        {
          path: "todolist/:id",
          element: (
            <AuthGuard>
              <SingleTodoList />
            </AuthGuard>
          ),
        },
        {
          path: "detailed-task",
          element: (
            <AuthGuard>
              <div>Detailed Task</div>
            </AuthGuard>
          ),
        },
        {
          path: "auth/sign-up",
          element: <SignUp />,
        },
        {
          path: "auth/sign-in",
          element: <SignIn />,
        },
      ],
    },
  ])
}
