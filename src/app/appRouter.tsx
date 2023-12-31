import { baseLayout } from "app/layouts/baseLayout.tsx"
import { SessionSelectors } from "entities/session"
import { userApi } from "entities/user"
import { AllTodos } from "pages/all-todos/AllTodos"
import { Home } from "pages/home/Home"
import { Hub } from "pages/hub/Hub"
import { AddTasks } from "pages/new-todo/AddTasks.tsx"
import { CreateTodo } from "pages/new-todo/CreateTodo.tsx"
import { CreateTodoForm } from "pages/new-todo/CreateTodoForm.tsx"
import { TodoPreview } from "pages/new-todo/TodoPreview.tsx"
import { SignIn } from "pages/sign-in"
import { SingleTodoList } from "pages/single-todolist/SingleTodoList.tsx"
import { type ReactNode } from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { layoutWithTabs } from "./layouts/layoutWithTabs"

function AuthGuard({ children }: { children: ReactNode }) {
  const isAuth = useAppSelector(SessionSelectors.isAuth)

  if (!isAuth) return <Navigate to={"/hub/authorization"} />
  return children
}

function RedirectToHome({ children }: { children: ReactNode }) {
  const isAuth = useAppSelector(SessionSelectors.isAuth)

  if (isAuth) return <Navigate to={"/"} />

  return children
}

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: (
        <div>
          <strong>404 NOT FOUND</strong>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hub?/:reason",
          element: <Hub />,
        },
        {
          path: "new-todo",
          element: (
            <AuthGuard>
              <CreateTodo />
            </AuthGuard>
          ),
          loader: async () => {
            return userApi.authMe()
          },
          children: [
            {
              path: "title",
              element: <CreateTodoForm />,
            },
            {
              path: "tasks",
              element: <AddTasks />,
            },
            {
              path: "preview",
              element: <TodoPreview />,
            },
          ],
        },
        {
          path: "/todos",
          element: (
            <AuthGuard>
              <AllTodos />
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
          path: "auth/sign-in",
          element: (
            <RedirectToHome>
              <SignIn />
            </RedirectToHome>
          ),
        },
      ],
    },
    {
      element: layoutWithTabs,
      children: [
        {
          path: "/single-todo",
          element: (
            <AuthGuard>
              <SingleTodoList />
            </AuthGuard>
          ),
        },
        {
          path: "/detailed-task",
          element: (
            <AuthGuard>
              <div>Detailed Task</div>
            </AuthGuard>
          ),
        },
      ],
    },
  ])
}
