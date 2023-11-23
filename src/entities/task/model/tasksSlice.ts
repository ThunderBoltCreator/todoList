import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {TasksState} from './types.ts'
import {tasksApi} from 'entities/task/api/taskApi.ts'

const initialState: TasksState = {
  items: [],
  error: null,
  totalCount: 0
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',
  async (todoId: string, thunkAPI) => {
    const {data} = await tasksApi.getAllTasks(todoId)

    return data
  })
// 086
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, () => {
        console.log('tasks pending')
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        const data = action.payload

        state = {
          items: data.items,
          error: data.error,
          totalCount: data.totalCount
        }

        return state
      })
      .addCase(fetchTasks.rejected, () => {
        console.log('tasks rejected')
      })
  }
})


export default tasksSlice.reducer