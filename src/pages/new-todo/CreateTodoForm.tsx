import { useForm } from "react-hook-form"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { useNavigate } from "react-router-dom"
import { CreateTodoActions } from "features/create-todo/createTodoSlice.ts"
import { object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "shared/ui/common/Button.tsx"
import { CreateTodoBaseForm } from "features/create-todo/ui/CreateTodoBaseForm.tsx"

export function CreateTodoForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const todoTitleSchema = object({
    title: string().required("Required !").max(15),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string }>({ mode: "onSubmit", resolver: yupResolver(todoTitleSchema) })

  console.log(errors.title)

  const onSubmitHandler = (data: { title: string }) => {
    console.log(data)
    dispatch(CreateTodoActions.setTodoTitle(data))
    navigate("/new-todo/tasks")
  }

  return (
    // <div className={"flex flex-col w-[70%] bg-todo3 p-7 rounded-2xl max-h-[80%]"}>
    //   <h1 className={"mb-[10%] text-4xl"}>Create Todo</h1>
    //   <form className={"flex flex-col h-full"} onSubmit={handleSubmit(onSubmitHandler)}>
    //     <label className={"flex flex-col"}>
    //       <h3 className={"text-2xl"}>Enter Todo Title</h3>
    //       <input className={"mt-2 text-lg h-8"} autoFocus {...register("title")} type="text" />
    //       {errors.title?.message && <span className={"text-red-600 text-lg mt-2"}>{errors.title?.message}</span>}
    //     </label>
    //     <div className={"mt-auto self-end flex gap-4 text-2xl"}>
    //       {/*<Button className={"bg-todo1 py-1 px-4 rounded-lg"}>*/}
    //       {/*  <Link to={"/new-todo/title"}>Prev</Link>*/}
    //       {/*</Button>*/}
    //       <Button className={"bg-todo1 py-1 px-4 rounded-lg"} type="submit">
    //         Next
    //       </Button>
    //     </div>
    //   </form>
    // </div>
    <CreateTodoBaseForm title={"Create Todo"} onSubmit={handleSubmit(onSubmitHandler)}>
      <>
        <label className={"flex flex-col"}>
          <h3 className={"text-2xl"}>Enter Todo Title</h3>
          <input className={"mt-2 text-lg h-8"} autoFocus {...register("title")} type="text" />
          {errors.title?.message && <span className={"text-red-600 text-lg mt-2"}>{errors.title?.message}</span>}
        </label>
        <div className={"mt-auto self-end flex gap-4 text-2xl"}>
          <Button type="submit">Next</Button>
        </div>
      </>
    </CreateTodoBaseForm>
  )
}
