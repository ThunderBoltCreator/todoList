import {Task} from './Task.tsx'
import {useAppSelector} from 'shared/lib/ReduxHooks.ts'
import {selectTasksByTodoId} from 'entities/task/model/tasksSlice.ts'

type TaskListProps = {
  todoId: string
}

export function TaskList({todoId}: TaskListProps) {
  const tasks = useAppSelector(selectTasksByTodoId(todoId))
  setTimeout(() => {
    console.log(tasks)
  }, 3000)


  console.log(tasks)

  const mapTask = tasks.map(task => (
    <Task
      task={task}
    />
  ))
  return (
    <>
      {
        tasks ? (
          <ul>
            {mapTask}
          </ul>
        ) : (
          <div>test</div>
        )
      }
    </>
  )
}