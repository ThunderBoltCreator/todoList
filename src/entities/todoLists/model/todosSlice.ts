import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {TodoList, TodoListsState} from './types.ts'
import {todoListApi} from 'entities/todoLists/api/todoListApi.ts'
import {fetchTasks} from 'entities/task/model/tasksSlice.ts'
import type {RootState} from 'app/appStore.ts'
import {setStatus} from 'entities/session'

const initialState: TodoListsState = {
  items: []
}

export const fetchTodos = createAsyncThunk('todoLists/fetchTodos', async (_, thunkAPI) => {

  thunkAPI.dispatch(setStatus({status: 'loading'}))

  const data = await todoListApi.getAllTodos()

  data.data.forEach((el: TodoList) => {
    thunkAPI.dispatch(fetchTasks(el.id))
  })

  return data.data
})

export const todoListsSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: () => {
      console.log('pending')
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.items = action.payload
    },
    [fetchTodos.rejected]: () => {
      console.log('rejected')
    }
      
  }
})

export const selectTodos = (state: RootState) => state.todoLists.items