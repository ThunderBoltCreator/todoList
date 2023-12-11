import cn from "classnames"
import { Link } from "react-router-dom"

type TabsListItemProps = {
  title: string
  number: number
  className?: string
  onClick: () => void
  id: string
}

export function TabsListItem({ title, number, className, onClick, id }: TabsListItemProps) {
  return (
    <li className={cn("cursor-pointer border-todo1 border p-1 rounded todos-tab", className)} onClick={onClick}>
      <Link className={"flex justify-between gap-x-2.5"} to={`/todolist/${id}`}>
        <span>{title}</span>
        <span>{number}</span>
      </Link>
    </li>
  )
}
