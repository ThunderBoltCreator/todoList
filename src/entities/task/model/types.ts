export interface TasksState {
  items: {
    [key: string]: Task[]
  }
  totalCount: number
}

export type Task = {
  id: string
  title: string
  description: string
  todoListId: string
  order: number
  status: number
  priority: number
  startDate: string
  deadline: string
  addedDate: string
}