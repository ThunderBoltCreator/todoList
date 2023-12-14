import type { RootState } from "app/appStore.ts"

export const TodosSelectors = {
  todos(state: RootState) {
    return state.todoLists.items
  },
  todoById(id: string) {
    return (state: RootState) => {
      const todo = state.todoLists.items.find((el) => el.id === id)
      if (todo) {
        return todo
      } else {
        return "Todo not found"
      }
    }
  },
  activeTab(state: RootState) {
    return state.todoLists.activeTab
  },
}
