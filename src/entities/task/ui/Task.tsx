import type { TaskModel } from "entities/task"
import { useEffect } from "react"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { TasksActions } from "entities/task/model/tasksSlice.ts"

type TaskProps = {
  task: TaskModel
  todoId: string
}

export function Task({ task, todoId }: TaskProps) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(TasksActions.changeStatus({ status: 1, taskId: task.id, todoId }))
  }, [])
  return (
    <li>
      {task.title}
      <input type="checkbox" value={task.status} />
    </li>
  )
}
