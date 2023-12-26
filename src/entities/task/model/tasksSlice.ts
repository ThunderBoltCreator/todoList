import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { AxiosError } from "axios"
import { tasksApi } from "entities/task/api/taskApi.ts"
import type { TasksState } from "./types.ts"

const initialState: TasksState = {
  items: {},
  totalCount: 0,
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (todoId: string, { rejectWithValue }) => {
  try {
    const { data } = await tasksApi.getAllTasks(todoId)
    return { data, todoId }
  } catch (e) {
    //@ts-ignore
    const error: AxiosError = e
    return rejectWithValue(error.message)
  }
})

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeStatus(state, action: PayloadAction<{ status: 1 | 0; todoId: string; taskId: string }>) {
      const task = state.items[action.payload.todoId].find((el) => el.id === action.payload.taskId)
      if (!task) return
      task.status = action.payload.status
    },
  },
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

export const TasksActions = tasksSlice.actions
