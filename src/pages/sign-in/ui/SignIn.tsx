import { useForm } from "react-hook-form"
import { AuthForm } from "features/authForm/ui/AuthForm.tsx"

export function SignIn() {
  const {} = useForm<{ email: string; password: string }>({
    mode: "onBlur",
  })

  return (
    <div>
      <h1>Sign In</h1>
      <AuthForm />
    </div>
  )
}
