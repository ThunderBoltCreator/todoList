import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { useEffect } from "react"
import { fetchTodos, selectTodos } from "entities/todoLists"
import { TodoList } from "widgets/todolist"

export function AllTodoLists() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  // if (!todos) return null

  // console.log(todos)

  const mapTodos = todos?.map((el) => <TodoList key={el.id} data={el} />)
  console.log(todos)
  return <div className={"flex gap-4 flex-wrap"}>{mapTodos}</div>
}
