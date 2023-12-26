import type { TaskModel } from "entities/task/model/types.ts"

type Response<D> = {
  data: D
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export type GetTasksRes = {
  items: TaskModel[]
  totalCount: number
  error: unknown
}

export type PostTaskRes = Omit<Response<{ item: TaskModel }>, "fieldsErrors">

export type PostTasks = Response<{ item: TaskModel }>
