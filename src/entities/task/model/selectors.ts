import type { RootState } from "app/appStore.ts"

export const selectTasks = (state: RootState) => state.tasks.items
export const selectTasksByTodoId = (id: string) => (state: RootState) => state.tasks.items[id]
export const selectTasksCount = (state: RootState) => state.tasks.totalCount

export const TasksSelectors = {
  tasks(state: RootState) {
    return state.tasks.items
  },
  taskById(id: string) {
    return (state: RootState) => state.tasks.items[id]
  },
  tasksCount(state: RootState) {
    return state.tasks.totalCount
  },
}
