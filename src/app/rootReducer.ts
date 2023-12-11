import { sessionSlice } from "entities/session"
import { todoListsSlice } from "entities/todoLists"
import { combineReducers } from "@reduxjs/toolkit"
import { tasksSlice } from "entities/task"

export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
  [tasksSlice.name]: tasksSlice.reducer,
  [todoListsSlice.name]: todoListsSlice.reducer,
})
