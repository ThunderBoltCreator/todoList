export type TodoListsState = {
  items: TodoList[]
}

export type TodoList = {
  id: string
  title: string
  order: number
  addedDate: string
}