import { $axios } from "shared/api/axiosInstance.ts"
import type {
  DeleteTodoResponse,
  GetTodoListsResponse,
  PostTodoResponse,
  UpdateTodoTitleResponse,
} from "entities/todoLists/api/types.ts"
import type { AxiosResponse } from "axios"

// const baseUrl = "todo-lists" + "csdgs";
const baseUrl = "todo-lists"

interface TodolistApi {
  getAllTodos: () => Promise<AxiosResponse<GetTodoListsResponse>>
  createTodo: (title: string) => Promise<AxiosResponse<PostTodoResponse>>
  updateTodoTitle: (todoId: string, title: string) => Promise<AxiosResponse<UpdateTodoTitleResponse>>
  deleteTodo: (todoId: string) => Promise<AxiosResponse<DeleteTodoResponse>>
}
export const todoListApi: TodolistApi = {
  getAllTodos() {
    return $axios.get(baseUrl)
  },
  createTodo(title) {
    return $axios.post(baseUrl, { title })
  },
  updateTodoTitle(todoId, title) {
    return $axios.put(`${baseUrl}/${todoId}`, {
      title,
    })
  },
  deleteTodo(todoId) {
    return $axios.delete(`${baseUrl}/${todoId}`)
  },
}
