import { ListOfTodoLists } from "entities/todoLists/ui/listOfTodoLists"

export function AllTodos() {
  return (
    <div className={"w-full h-full flex items-center justify-center"}>
      <ListOfTodoLists />
    </div>
  )
}
