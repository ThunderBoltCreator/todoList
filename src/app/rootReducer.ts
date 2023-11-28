import {sessionSlice} from 'entities/session'
import {tasksSlice} from 'entities/task'
import {todoListsSlice} from 'entities/todoLists'
import {combineReducers} from '@reduxjs/toolkit'


export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
  [tasksSlice.name]: tasksSlice.reducer,
  [todoListsSlice.name]: todoListsSlice.reducer
})