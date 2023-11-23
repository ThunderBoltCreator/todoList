import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoLists from 'entities/todoList/model/todosSlice.ts'
import tasks from 'entities/task/model/tasksSlice.ts'

export const store = configureStore({
  reducer: combineReducers({
    todoLists,
    tasks
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch