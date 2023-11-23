import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {TodoListsState} from './types.ts'
import {todoListApi} from 'entities/todoList/api/todoListApi.ts'
import {fetchTasks} from 'entities/task/model/tasksSlice.ts'

const initialState: TodoListsState = {
  items: []
}

export const fetchTodos = createAsyncThunk('todoLists/fetchTodos', async (_, thunkAPI) => {

  const data = await todoListApi.getAllTodos()

  data.data.forEach(el => {
    thunkAPI.dispatch(fetchTasks(el.id))
  })

  return data.data
})

const todoListsSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, () => {
        console.log('pending')
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const data = action.payload
        state.items.push(...data)
      })
      .addCase(fetchTodos.rejected, () => {
        console.log('rejected')
      })
  }
})


export default todoListsSlice.reducer