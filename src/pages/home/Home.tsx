import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { useEffect } from "react"
import { fetchTodos } from "entities/todoLists"
import { ListOfTodoLists } from "entities/todoLists/ui/listOfTodoLists"

export function Home() {
  const dispatch = useAppDispatch()
  console.log("rerender")
  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchTodos())
  }, [])

  return (
    <div className={"w-full h-full flex items-center justify-center"}>
      <ListOfTodoLists />
    </div>
  )
}
