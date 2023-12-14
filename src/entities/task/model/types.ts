export interface TasksState {
  items: {
    [todoId: string]: TaskModel[]
  }
  totalCount: number
}

export type TaskModel = {
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
