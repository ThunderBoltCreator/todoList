import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "app/appStore.ts"

type createTodosState = {
  todoTitle: string | null
  tasks: {
    taskTitle: string
    initialValue: boolean
  }[]
}

const initialState: createTodosState = {
  todoTitle: null,
  tasks: [],
}

export const createTodoSlice = createSlice({
  name: "createTodo",
  initialState,
  reducers: {
    setTodoTitle(state, action: PayloadAction<{ title: string }>) {
      state.todoTitle = action.payload.title
    },
    setTasks(state, action: PayloadAction<{ taskTitle: string; initialValue: boolean }[]>) {
      state.tasks = action.payload
    },
  },
})

const todo = (state: RootState) => state.createTodo
const todoTitle = (state: RootState) => state.createTodo.todoTitle
const tasks = (state: RootState) => state.createTodo.tasks
export const CreateTodoSelectors = { todo, todoTitle, tasks }
export const CreateTodoActions = createTodoSlice.actions
