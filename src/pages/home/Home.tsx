import { ListOfTodoLists } from "features/listOfTodoLists/ListOfTodoLists.tsx"

export function Home() {
  return (
    <div className={"w-full h-full flex items-center justify-center"}>
      <ListOfTodoLists />
    </div>
  )
}
