import { createBrowserRouter } from "react-router-dom"
import { Home } from "pages/home/Home.tsx"
import { baseLayout } from "app/layouts/baseLayout.tsx"
import { SingleTodoList } from "pages/single-todolist/SingleTodoList.tsx"

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
          element: <Home />,
        },
        {
          path: "todolist/:id",
          element: <SingleTodoList />,
        },
        {
          path: "detailed-task",
          element: <div>Detailed Task</div>,
        },
      ],
    },
  ])
}
