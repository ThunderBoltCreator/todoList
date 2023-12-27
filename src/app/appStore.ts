import { configureStore } from "@reduxjs/toolkit"
import { sessionSlice } from "entities/session"
import { tasksSlice } from "entities/task"
import { todoListsSlice } from "entities/todoLists"
import { userSlice } from "entities/user"
import { createTodoSlice } from "features/create-todo"

const rootReducer = {
  session: sessionSlice.reducer,
  user: userSlice.reducer,
  tasks: tasksSlice.reducer,
  todoLists: todoListsSlice.reducer,
  createTodo: createTodoSlice.reducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
