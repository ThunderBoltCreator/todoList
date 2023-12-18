import { useForm } from "react-hook-form"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"

export function CreateTodoForm() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ title: string }>({ mode: "onBlur" })

  const onSubmitHandler = (data: { title: string }) => {}

  return (
    <div>
      <h1 className={"mb-3"}>Create Todo</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label className={"flex flex-col gap-2 mb-4"}>
          Enter title
          <input {...register("title")} type="text" />
        </label>
        <button className={"float-right"} type="submit">
          Add Tasks
        </button>
      </form>
    </div>
  )
}
