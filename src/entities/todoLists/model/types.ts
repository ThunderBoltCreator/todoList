export type TodoListsState = {
  items: TodoListModel[]
  activeTab: number
}

export type TodoListModel = {
  id: string
  title: string
  order: number
  addedDate: string
}
