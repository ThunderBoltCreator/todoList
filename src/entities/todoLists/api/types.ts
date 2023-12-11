import type { TodoList } from "entities/todoLists/model/types.ts"

type Response<D> = {
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
  data: D
}

export type GetTodoListsResponse = TodoList[]
export type PostTodoResponse = Response<{ item: TodoList }>

export type DeleteTodoResponse = Response<Record<string, unknown>>
export type UpdateTodoTitleResponse = Response<Record<string, unknown>>
