import { $axios } from "shared/api/axiosInstance.ts"
import type { GetTasksRes } from "entities/task/api/types.ts"

const baseUrl = "todo-lists"

export const tasksApi = {
  async getAllTasks(todoId: string) {
    return await $axios.get<GetTasksRes>(`${baseUrl}/${todoId}/tasks`)
  },
}
