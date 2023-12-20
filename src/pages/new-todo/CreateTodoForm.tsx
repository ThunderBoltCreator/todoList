import { useForm } from "react-hook-form"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { useNavigate } from "react-router-dom"
import { CreateTodoActions } from "features/create-todo/createTodoSlice.ts"

export function CreateTodoForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ title: string }>({ mode: "onBlur" })

  const onSubmitHandler = (data: { title: string }) => {
    console.log(data)
    dispatch(CreateTodoActions.setTodoTitle(data))
    navigate("/new-todo/tasks")
  }

  return (
    <div>
      <h1 className={"mb-3"}>Create Todo</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label className={"flex flex-col gap-2 mb-4"}>
          Enter title
          <input {...register("title")} type="text" />
        </label>
        <button className={"float-right"} type="submit">
          Next
        </button>
      </form>
    </div>
  )
}
