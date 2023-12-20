import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { useFieldArray, useForm } from "react-hook-form"
import { CreateTaskInputBlock } from "./CreateTaskInputBlock.tsx"
import { CreateTodoActions, CreateTodoSelectors } from "features/create-todo/createTodoSlice.ts"
import { useNavigate } from "react-router-dom"

export interface FormState {
  blocks: FormBlock[]
}
type FormBlock = { taskTitle: string; initialValue: boolean }
export function AddTasksForm() {
  const dispatch = useAppDispatch()
  const todoTitle = useAppSelector(CreateTodoSelectors.todoTitle)
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm<FormState>({
    mode: "onBlur",
    defaultValues: {
      blocks: [{ initialValue: false, taskTitle: "" }],
    },
  })
  const { fields, append } = useFieldArray({
    control,
    name: "blocks",
  })

  const onSubmitHandler = (data: FormState) => {
    console.log(data.blocks)
    dispatch(CreateTodoActions.setTasks(data.blocks))
    navigate("/new-todo/preview")
  }

  return (
    <div>
      <span>Todo Title: {todoTitle}</span>
      <h1 className={"mb-3"}>Create Tasks</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={"flex flex-col gap-1"}>
          {fields.map((el, i) => (
            <CreateTaskInputBlock key={el.id} control={control} index={i} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            append({
              initialValue: false,
              taskTitle: "",
            })
          }}
        >
          Add task
        </button>
        <button className={"float-right"} type="submit">
          Done
        </button>
      </form>
    </div>
  )
}
