import type {Task} from 'entities/task/model/types.ts'

type Response<D> = {
  items: D
  totalCount: number
  error: string
}

export type GetTasksResponse = {
  items: Task[],
  totalCount: number,
  error: unknown
}