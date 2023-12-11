import { useParams } from "react-router-dom"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TasksSelectors} from "entities/task/model/selectors.ts"

export function SingleTodoList() {
  const { id } = useParams<{ id: string }>()

  const tasks = useAppSelector(TasksSelectors.taskById(id))
  console.log(tasks)

  return <div>ID: {id}</div>
}
