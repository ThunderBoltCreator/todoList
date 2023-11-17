export interface TodoListsState {
  items: TodoList[]
}

export type TodoList = {
  id: string
  title: string
  order: number
}