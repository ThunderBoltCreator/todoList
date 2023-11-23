import {$axios} from 'shared/api/axiosInstance.ts'
import type {GetTasksResponse} from 'entities/task/api/types.ts'

const baseUrl = 'todo-lists'

export const tasksApi = {
  async getAllTasks(todoId: string) {
    return await $axios.get<GetTasksResponse>(`${baseUrl}/${todoId}/tasks`)
  }
}