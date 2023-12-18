import { useId } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { signIn } from "entities/user/model/userSlice.ts"

export function AuthForm() {
  const field1 = useId()
  const field2 = useId()

  const { register, handleSubmit } = useForm<{ email: string; password: string }>({
    mode: "onBlur",
  })
  const dispatch = useAppDispatch()
  return (
    <form
      onSubmit={handleSubmit(({ email, password }) => dispatch(signIn({ email, password })))}
      className={"flex flex-col items-start gap-2.5"}
    >
      <div className={"flex flex-col gap-1"}>
        <label htmlFor={field1}>E-mail</label>
        <input autoComplete="new-password" {...register("email", {})} type="email" id={field1} />
      </div>
      <div className={"flex flex-col gap-1"}>
        <label htmlFor={field2}>Password</label>
        <input {...register("password", {})} type="password" id={field2} />
      </div>
      <button type="submit">Done</button>
    </form>
  )
}
