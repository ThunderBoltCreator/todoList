import { useParams } from "react-router-dom"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { selectTodos } from "entities/todoLists/model/todosSlice.ts"
import { selectTasksByTodoId } from "entities/task/model/selectors.ts"

export function SingleTodoList() {
  const { id } = useParams<{ id: string }>()

  const todo = useAppSelector(selectTodos)?.filter((el) => el.id === id)
  const todo2 = useAppSelector(selectTasksByTodoId(id as string))
  console.log("todo2", todo2)
  const tasks = []
  console.log(todo)
  return <div>ID: {id}</div>
}
