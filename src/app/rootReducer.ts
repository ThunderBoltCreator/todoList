import { sessionSlice } from "entities/session"
import { todoListsSlice } from "entities/todoLists"
import { tasksSlice } from "entities/task"
import { combineReducers } from "@reduxjs/toolkit"
import { userSlice } from "entities/user/model/userSlice.ts"

export const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  user: userSlice.reducer,
  tasks: tasksSlice.reducer,
  todoLists: todoListsSlice.reducer,
})
