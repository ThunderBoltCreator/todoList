import type {Task} from 'entities/task/model/types.ts'

type Response<D> = {
  data: D
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export type GetTasksRes = {
  items: Task[],
  totalCount: number,
  error: unknown
}

export type PostTasks = Response<{ item: Task }>