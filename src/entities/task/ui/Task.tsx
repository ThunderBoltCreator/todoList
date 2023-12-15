import type { TaskModel } from "entities/task"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"

type TaskProps = {
  task: TaskModel
  todoId: string
}

export function Task({ task, todoId }: TaskProps) {
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(TasksActions.changeStatus({ status: 1, taskId: task.id, todoId }))
  // }, [])
  return (
    <li className={"flex gap-1"}>
      <input type="checkbox" value={task.status} />
      {task.title}
    </li>
  )
}
