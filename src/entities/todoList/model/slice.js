import {createSlice} from '@reduxjs/toolkit'
import type {TodoListsState} from 'entities/todoList/model/types.ts'

const initialState: TodoListsState = {
  items: []
}

const todoListsSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

