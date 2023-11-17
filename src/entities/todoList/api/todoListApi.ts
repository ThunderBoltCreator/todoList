import {$axios} from 'shared/api/axiosInstance.ts'
import type {
  DeleteTodoResponse,
  GetTodoListsResponse,
  PostTodoResponse,
  UpdateTodoTitleResponse
} from 'entities/todoList/api/types.ts'

const baseUrl = 'todo-lists'

const todoListApi = {
  getAllTodos() {
    return $axios.get<GetTodoListsResponse>(baseUrl)
  },
  createTodo(title: string) {
    return $axios.post<PostTodoResponse>(baseUrl, {title})
  },
  updateTodoTitle(todoId: string, title: string) {
    return $axios.put<UpdateTodoTitleResponse>(`${baseUrl}/${todoId}`, {title})
  },
  deleteTodo(todoId: string) {
    return $axios.delete<DeleteTodoResponse>(`${baseUrl}/${todoId}`)
  }
}