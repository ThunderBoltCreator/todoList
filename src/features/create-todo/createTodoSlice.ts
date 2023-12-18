import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
  },
})
