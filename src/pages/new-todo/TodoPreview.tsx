import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { CreateTodoSelectors } from "features/create-todo/createTodoSlice.ts"

export function TodoPreview() {
  const { todoTitle, tasks } = useAppSelector(CreateTodoSelectors.todo)
  return (
    <div>
      <h2>Todo Preview</h2>
      <div>
        <h3>TodoTitle: {todoTitle}</h3>

        <div className={"flex gap-3"}>
          <h3>Tasks:</h3>
          <ul>
            {tasks.map((el, index) => (
              <li key={el.taskTitle + index + el.initialValue}>
                {el.taskTitle} <input type="checkbox" readOnly checked={el.initialValue} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
