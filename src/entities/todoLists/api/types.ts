import type { TodoListModel } from "entities/todoLists/model/types.ts"

type Response<D> = {
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
  data: D
}

export type GetTodoListsResponse = TodoListModel[]
export type PostTodoResponse = Response<{ item: TodoListModel }>

export type DeleteTodoResponse = Response<Record<string, unknown>>
export type UpdateTodoTitleResponse = Response<Record<string, unknown>>
