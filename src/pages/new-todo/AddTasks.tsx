import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { useFieldArray, useForm } from "react-hook-form"
import { CreateTaskInputBlock } from "./CreateTaskInputBlock.tsx"
import { CreateTodoActions, CreateTodoSelectors } from "features/create-todo/createTodoSlice.ts"
import { useNavigate } from "react-router-dom"
import { CreateTodoBaseForm } from "features/create-todo/ui/CreateTodoBaseForm.tsx"
import { Button } from "shared/ui/common/Button.tsx"

export interface FormState {
  blocks: FormBlock[]
}
type FormBlock = { taskTitle: string; completed: boolean }

export function AddTasks() {
  const dispatch = useAppDispatch()
  const todoTitle = useAppSelector(CreateTodoSelectors.todoTitle)
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm<FormState>({
    mode: "onBlur",
    defaultValues: {
      blocks: [{ completed: false, taskTitle: "" }],
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "blocks",
  })

  const onSubmitHandler = (data: FormState) => {
    console.log(data)
    console.log("submit")
    dispatch(CreateTodoActions.setTasks(data.blocks))
    navigate("/new-todo/preview")
  }
  const onAddTaskHandler = () => {
    append({
      completed: false,
      taskTitle: "",
    })
  }

  return (
    <>
      <CreateTodoBaseForm
        title={"Create Tasks"}
        label={`Todo Title: ${todoTitle}`}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <>
          <div className={"flex flex-col gap-1 relative"}>
            {fields.map((el, i) => (
              <CreateTaskInputBlock remove={remove} key={el.id} control={control} index={i} />
            ))}
            <Button className={"absolute top-0 right-0"} type="button" onClick={onAddTaskHandler}>
              Add task
            </Button>
          </div>
          <div className={"mt-auto self-end flex gap-4 text-2xl"}>
            <Button onClick={() => navigate(-1)} type={"button"}>
              Prev
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </>
      </CreateTodoBaseForm>
      {/*<div>*/}
      {/*  <span>Todo Title: {todoTitle}</span>*/}
      {/*  <h1 className={"mb-3"}>Create Tasks</h1>*/}
      {/*  <form onSubmit={handleSubmit(onSubmitHandler)}>*/}
      {/*    <div className={"flex flex-col gap-1"}>*/}
      {/*      {fields.map((el, i) => (*/}
      {/*        <CreateTaskInputBlock key={el.id} control={control} index={i} />*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <button*/}
      {/*      type="button"*/}
      {/*      onClick={() => {*/}
      {/*        append({*/}
      {/*          initialValue: false,*/}
      {/*          taskTitle: "",*/}
      {/*        })*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      Add task*/}
      {/*    </button>*/}
      {/*    <button className={"float-right"} type="submit">*/}
      {/*      Done*/}
      {/*    </button>*/}
      {/*  </form>*/}
      {/*</div>*/}
    </>
  )
}
