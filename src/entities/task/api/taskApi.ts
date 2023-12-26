import { $axios } from "shared/api/axiosInstance.ts"
import type { GetTasksRes, PostTaskRes } from "entities/task/api/types.ts"

const baseUrl = "todo-lists"

export const tasksApi = {
  getAllTasks(todoId: string) {
    return $axios.get<GetTasksRes>(`${baseUrl}/${todoId}/tasks`)
  },
  addTask(todoId: string, title: string) {
    return $axios.post<PostTaskRes>(`${baseUrl}/${todoId}/tasks`, title)
  },
}
