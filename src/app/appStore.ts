import {configureStore} from '@reduxjs/toolkit'
import todoLists from 'entities/todoList/model/slice.ts'

export const store = configureStore({
  reducer: {
    todoLists
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch