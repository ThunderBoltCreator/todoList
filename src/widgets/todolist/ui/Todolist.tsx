import type { TodoListModel } from "entities/todoLists/model/types.ts"
import { TaskList } from "entities/task/ui/TaskList.tsx"
import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TasksSelectors } from "entities/task"

type TodolistProps = {
  data: TodoListModel
}

export function TodoList({ data }: TodolistProps) {
  const tasks = useAppSelector(TasksSelectors.taskById(data.id))

  return (
    <div className={"flex-todos bg-todo1 border border-black rounded-md min-h-todos"}>
      <h2 className={"text-4xl py-8 text-center border-b"}>{data.title}</h2>
      <div>
        <ul>
          <TaskList todoId={data.id} tasks={tasks} />
        </ul>
      </div>
    </div>
  )
}
