import { Task, type TaskModel } from "entities/task"

type TaskListProps = {
  todoId: string
  tasks: TaskModel[]
}

export function TaskList({ todoId, tasks }: TaskListProps) {
  const mapTask = tasks?.map((task) => <Task key={task.id} todoId={todoId} task={task} />)
  return <>{tasks ? <ul>{mapTask}</ul> : <div>Task list is empty!</div>}</>
}
