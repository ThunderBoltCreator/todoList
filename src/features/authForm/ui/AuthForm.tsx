import { useId } from "react"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const field1 = useId()
  const field2 = useId()

  const { register, handleSubmit } = useForm<{ email: string; password: string }>({
    mode: "onBlur",
  })
  return (
    <form onSubmit={handleSubmit(({ email, password }, { type }) => console.log(email, password, type))}>
      <label htmlFor={field1}>E-mail</label>
      <input {...register("email", {})} type="email" id={field1} />
      <label htmlFor={field2}>Password</label>
      <input {...register("password", {})} type="password" id={field2} />
      <button type="submit">Done</button>
    </form>
  )
}
