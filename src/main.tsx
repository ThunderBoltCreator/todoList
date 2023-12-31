import { appRouter } from "app/appRouter"
import { store } from "app/appStore.ts"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import "./index.css"

// TODO create home page with two buttons(create todo and show todos)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter()} />
    </Provider>
  </React.StrictMode>,
)
