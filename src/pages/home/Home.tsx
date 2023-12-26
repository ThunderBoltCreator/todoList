import { fetchTodos } from "entities/todoLists"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"

export function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="flex">
      <Link to="/todos" className="flex-1">
        List of Todos
      </Link>
      <Link to="/new-todo" className="flex-1">
        Create Todo
      </Link>
    </div>
  )
}
