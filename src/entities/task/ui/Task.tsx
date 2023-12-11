import type { Task } from "entities/task/model/types.ts"

type TaskProps = {
  task: Task
}

export function Task({ task }: TaskProps) {
  return <li>{task.title}</li>
}
