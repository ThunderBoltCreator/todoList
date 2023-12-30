import { AuthForm } from "features/authentication/authForm"
import { useLocation } from "react-router-dom"

export function SignIn() {
  // const { register, handleSubmit } = useForm<{ email: string; password: string }>({
  //   mode: "onBlur",
  // })
  const location = useLocation()
  console.log("location", location)

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div>
        <h1>Sign In</h1>
        <AuthForm />
      </div>
    </div>
  )
}
