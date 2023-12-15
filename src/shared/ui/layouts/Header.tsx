import { FcAbout } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useSession } from "entities/session/model/selectors.ts"

export function Header() {
  const { isAuth } = useSession()
  return (
    <header className={"flex items-center justify-between text-lg p-2"}>
      <Link to={"/home"}>
        <FcAbout className={"cursor-pointer text-4xl"} />
      </Link>
      {isAuth ? (
        <Link to={"/sign-in"}>Logout</Link>
      ) : (
        <div>
          <Link to={"/auth/sign-in"}>SignIn</Link>
          <span> / </span>
          <Link to={"/auth/sign-up"}>SignUp</Link>
        </div>
      )}
    </header>
  )
}
