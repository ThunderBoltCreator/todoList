import type {TodoList} from 'entities/todoList/model/types.ts'

type Response<D> = {
  fieldsError: string[]
  messages: string[]
  resultCode: number
  data: D
}

export type GetTodoListsResponse = TodoList[]
export type PostTodoResponse = Response<{ item: TodoList }>

export type DeleteTodoResponse = Response<Record<string, never>>
export type UpdateTodoTitleResponse = Response<Record<string, never>>
