import { appRouter } from "app/appRouter.tsx"
import { store } from "app/appStore.ts"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter()} />
    </Provider>
  </React.StrictMode>,
)

//todo delete tasks
//todo filter tasks
//todo add task
//todo add todoList
//todo delete todoList
