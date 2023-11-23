export interface TasksState {
  items: Task[]
  totalCount: number
  error: unknown
}

export type Task = {
  id: string
  title: string
  description: string
  todoListId: string
  order: number
  status: number
  priority: number
  startDate: unknown
  deadline: unknown
  addedDate: string
}