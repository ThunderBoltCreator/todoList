import { sessionSlice } from "entities/session"
import { todoListsSlice } from "entities/todoLists"
import { tasksSlice } from "entities/task"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  tasks: tasksSlice.reducer,
  todoLists: todoListsSlice.reducer,
})
