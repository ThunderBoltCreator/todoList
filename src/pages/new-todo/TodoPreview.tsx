import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { CreateTodoSelectors, sendTodo } from "features/create-todo/createTodoSlice.ts"
import { Button } from "shared/ui/common/Button.tsx"

export function TodoPreview() {
  const dispatch = useAppDispatch()
  const { todoTitle, tasks } = useAppSelector(CreateTodoSelectors.todo)

  const onClickDone = () => {
    dispatch(sendTodo())
  }
  return (
    <div className={"p-5 bg-amber-600 rounded-lg max-h-[80%] mx-auto max-w-2xl"}>
      <h2 className={"text-4xl mb-6"}>Todo Preview</h2>
      <div>
        <h3 className={"text-xl"}>
          TodoTitle: <strong className={"text-blue-700"}>{todoTitle}</strong>
        </h3>

        <div className={"flex gap-3"}>
          <h3 className={"text-xl"}>Tasks:</h3>
          <ul className={""}>
            {tasks.map((el, index) => (
              <li className={"text-lg"} key={el.taskTitle + index + el.completed}>
                {el.taskTitle} <input type="checkbox" readOnly checked={el.completed} />
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={onClickDone}>Done</Button>
      </div>
    </div>
  )
}
