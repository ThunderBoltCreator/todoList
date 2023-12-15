import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TasksSelectors } from "entities/task/model/selectors.ts"
import { TodosSelectors } from "entities/todoLists"
import { TaskList } from "entities/task"
import { FaEdit, FaTrash } from "react-icons/fa"
import { deleteTodo } from "entities/todoLists/model/todosSlice.ts"

export function SingleTodoList() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const todo = useAppSelector(TodosSelectors.todoById(id as string))
  const tasks = useAppSelector(TasksSelectors.taskById(id as string))

  console.log("todo", todo)
  console.log("tasks", tasks)
  if (typeof todo === "string") return <strong>{todo}</strong>

  return (
    <div className={"p-4 bg-todo2 rounded-lg relative"}>
      <div className={"flex justify-between mb-2"}>
        <FaEdit className={"cursor-pointer"} />
        <FaTrash onClick={() => dispatch(deleteTodo(id as string))} className={"cursor-pointer"} />
      </div>
      <h3 className={"text-2xl mb-5"}>{todo.title}</h3>
      <TaskList todoId={id as string} tasks={tasks} />
    </div>
  )
}
