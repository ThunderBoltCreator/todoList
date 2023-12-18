import { useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TodosSelectors } from "entities/todoLists"
import { TodoList } from "widgets/todolist"

export function ListOfTodoLists() {
  const todos = useAppSelector(TodosSelectors.todos)
  // console.log(todos)
  const mappedTodos = () => todos.map((el) => <TodoList key={el.id} data={el} />)

  return <div className={"flex items-center gap-5"}>{mappedTodos()}</div>
}
