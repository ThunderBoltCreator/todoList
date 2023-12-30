import cn from "classnames"
import { authMe } from "entities/user"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks"

export function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authMe())
  }, [])

  const styles = {
    half: "flex-1 flex items-center justify-center text-2xl hover:text-5xl transition-all overflow-hidden",
    bg: "w-full h-full text-center flex items-center justify-center transition-all hover:scale-[130%] bg-no-repeat bg-center bg-cover",
  }

  return (
    <div className="flex h-full overflow-hidden">
      <Link to="/todos" className={cn(styles["half"], "bg-todo2")}>
        <div className={cn("bg-btn-todos-list", styles["bg"])}>List of Todos</div>
      </Link>
      <Link to="/new-todo" className={cn(styles["half"], "bg-todo3 text-white")}>
        <div className={cn("bg-btn-create-todo", styles["bg"])}>Create Todo</div>
      </Link>
    </div>
  )
}
