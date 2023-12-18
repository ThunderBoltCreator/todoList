import { createBrowserRouter, Navigate } from "react-router-dom"
import { Home } from "pages/home/Home.tsx"
import { baseLayout } from "app/layouts/baseLayout.tsx"
import { SingleTodoList } from "pages/single-todolist/SingleTodoList.tsx"
import { SignIn } from "pages/sign-in"
import type { ReactElement } from "react"
import { SessionSelectors } from "entities/session"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { CreateTodo } from "pages/new-todo/CreateTodo.tsx"

function AuthGuard({ children }: { children: ReactElement }) {
  const isAuth = useAppSelector(SessionSelectors.isAuth)

  if (!isAuth) return <Navigate to={"/auth/sign-in"} />

  return children
}
function RedirectToHome({ children }: { children: ReactElement }) {
  const isAuth = useAppSelector(SessionSelectors.isAuth)

  if (isAuth) return <Navigate to={"/home"} />

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
          path: "new-todo",
          element: (
            <AuthGuard>
              <CreateTodo />
            </AuthGuard>
          ),
          children: [
            {
              path: "step1",
              element: <div>Step 1</div>,
            },
          ],
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
          path: "auth/sign-in",
          element: (
            <RedirectToHome>
              <SignIn />
            </RedirectToHome>
          ),
        },
      ],
    },
  ])
}
