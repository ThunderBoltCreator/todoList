import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "app/appStore.ts"
import { todoListApi } from "entities/todoLists/api/todoListApi.ts"

type createTodosState = {
  todoTitle: string | null
  tasks: {
    taskTitle: string
    completed: boolean
  }[]
  todoId: string | null
}

const initialState: createTodosState = {
  todoTitle: null,
  tasks: [],
  todoId: null,
}

export const sendTodo = createAsyncThunk("createTodos/sendTodo", async (arg, { getState, rejectWithValue }) => {
  try {
    const state = getState() as RootState
    if (state.createTodo.todoTitle) {
      const res = await todoListApi.createTodo(state.createTodo.todoTitle)
      console.log(res)
      return res.data
    }
  } catch (e) {
    console.log(e)
    return rejectWithValue(null)
  }
})

export const createTodoSlice = createSlice({
  name: "createTodo",
  initialState,
  reducers: {
    setTodoTitle(state, action: PayloadAction<{ title: string }>) {
      state.todoTitle = action.payload.title
    },
    setTasks(state, action: PayloadAction<{ taskTitle: string; completed: boolean }[]>) {
      state.tasks = action.payload.filter((el) => el.taskTitle.length > 0)
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(sendTodo.fulfilled, (state, action) => {
      state.todoId = action.payload.data.item.id
    })
  },
})

const todo = (state: RootState) => state.createTodo
const todoTitle = (state: RootState) => state.createTodo.todoTitle
const tasks = (state: RootState) => state.createTodo.tasks
export const CreateTodoSelectors = { todo, todoTitle, tasks }
export const CreateTodoActions = createTodoSlice.actions
