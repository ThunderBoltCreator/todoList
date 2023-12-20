import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { TodoListModel, TodoListsState } from "./types.ts"
import { todoListApi } from "entities/todoLists/api/todoListApi.ts"
import type { AxiosError } from "axios"
import { fetchTasks } from "entities/task"
// import {setStatus} from 'entities/session'

const initialState: TodoListsState = {
  items: [],
  activeTab: null,
}

export const fetchTodos = createAsyncThunk("todoLists/fetchTodos", async (_, { dispatch, rejectWithValue }) => {
  try {
    const response = await todoListApi.getAllTodos()

    if (response.data) {
      response.data.forEach((el: TodoListModel) => {
        dispatch(fetchTasks(el.id))
      })

      return response.data
    }
  } catch (err) {
    const error: AxiosError<never> = err
    return rejectWithValue(error.message)
  }
})
export const deleteTodo = createAsyncThunk(
  "todoLists/deleteTodo",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const res = await todoListApi.deleteTodo(id)
      dispatch(fetchTodos())
      return res.data
    } catch (e) {
      const error: AxiosError = e
      rejectWithValue(error.message)
    }
  },
)
export const todoListsSlice = createSlice({
  name: "todoLists",
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = action.payload
      }
    })
  },
})

export const { setActiveTab } = todoListsSlice.actions
