import type { RootState } from "app/appStore.ts"

export const TasksSelectors = {
  tasks(state: RootState) {
    return state.tasks.items
  },
  taskById(id: string) {
    return (state: RootState) => (id ? state.tasks.items[id] : [])
  },
  tasksCount(state: RootState) {
    return state.tasks.totalCount
  },
}
