import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {TasksState} from './types.ts'
import {tasksApi} from 'entities/task/api/taskApi.ts'
import type {RootState} from 'app/appStore.ts'
import {setStatus} from 'entities/session'

const initialState: TasksState = {
  items: {},
  totalCount: 0
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',
  async (todoId: string, thunkAPI) => {
    const {data} = await tasksApi.getAllTasks(todoId)
    return {data, todoId, thunkAPI}
  })

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, () => {
        console.log('tasks pending')
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {

        state.items[action.payload.todoId] = action.payload.data
        action.payload.thunkAPI.dispatch(setStatus({status: 'successes'}))
        return state
      })
      .addCase(fetchTasks.rejected, () => {
        console.log('tasks rejected')
      })
  }
})

export const selectTasks = (state: RootState) => state.tasks.items
export const selectTasksByTodoId = (id: string) => (state: RootState) => state.tasks.items[id]
export const selectTasksCount = (state: RootState) => state.tasks.totalCount