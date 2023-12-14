import { useParams } from "react-router-dom"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TasksSelectors } from "entities/task/model/selectors.ts"
import { TodosSelectors } from "entities/todoLists"
import { TaskList } from "entities/task"

export function SingleTodoList() {
  const { id } = useParams<{ id: string }>()

  const todo = useAppSelector(TodosSelectors.todoById(id as string))
  const tasks = useAppSelector(TasksSelectors.taskById(id as string))

  console.log("todo", todo)
  console.log("tasks", tasks)
  if (typeof todo === "string") return <strong>{todo}</strong>

  return (
    <div className={"p-4 bg-todo2 rounded-lg"}>
      <h3 className={"text-2xl mb-5"}>{todo.title}</h3>
      <TaskList todoId={id as string} tasks={tasks} />
    </div>
  )
}
