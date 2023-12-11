import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { TasksState } from "./types.ts"
import { tasksApi } from "entities/task/api/taskApi.ts"

const initialState: TasksState = {
  items: {},
  totalCount: 0,
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (todoId: string) => {
  try {
    const { data } = await tasksApi.getAllTasks(todoId)
    return { data, todoId }
  } catch (e) {
    console.log(e)
  }
})

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, () => {
        // console.log('tasks pending')
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items[action.payload.todoId] = action.payload.data.items
        // console.log(action.payload.data)
        // console.log('tasks fulfilled')
      })
      .addCase(fetchTasks.rejected, () => {
        // console.log('tasks rejected')
      })
  },
})
