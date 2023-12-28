import { AuthForm } from "features/authentication/authForm"

export function SignIn() {
  // const { register, handleSubmit } = useForm<{ email: string; password: string }>({
  //   mode: "onBlur",
  // })

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div>
        <h1>Sign In</h1>
        <AuthForm />
      </div>
    </div>
  )
}
