import { useSession } from "entities/session/model/sessionSelectors.ts"
import { logOut } from "entities/user"
import { FcAbout } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"

export function Header() {
  const { isAuth } = useSession()

  const dispatch = useAppDispatch()

  return (
    <header className={"flex items-center justify-between text-lg p-2"}>
      <div className={"flex gap-1"}>
        <Link to={"/"}>
          <FcAbout className={"cursor-pointer text-4xl"} />
        </Link>
        <Link to={"/new-todo"}>New Todo</Link>
      </div>
      {isAuth ? (
        <Link onClick={() => dispatch(logOut())} to={"/auth/sign-in"}>
          Logout
        </Link>
      ) : (
        <Link to={"/auth/sign-in"}>SignIn</Link>
      )}
    </header>
  )
}
