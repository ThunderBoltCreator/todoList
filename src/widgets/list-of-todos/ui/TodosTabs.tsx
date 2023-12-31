import cn from "classnames"
import { TodosSelectors } from "entities/todoLists"
import { setActiveTab } from "entities/todoLists/model/todosSlice.ts"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TabsListItem } from "widgets/list-of-todos/ui/TabsListItem.tsx"

type TabsCondition = "collapsed" | "expanded"

export function TodosTabs() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const todos = useAppSelector(TodosSelectors.todos)
  const activeTab = useAppSelector(TodosSelectors.activeTab)
  const [condition, setCondition] = useState<TabsCondition>("expanded")

  // if (location.pathname === "/home")
  const styles: Record<TabsCondition, string> = {
    collapsed: "absolute p-3 gap-2 rounded-br-xl translate-x-[-75%] transition-transform",
    expanded: "absolute p-3 gap-2 rounded-br-xl translate-x-0 transition-transform",
  }

  const renderTodos = todos.map((el, index) => (
    <TabsListItem
      key={el.id}
      onClick={() => dispatch(setActiveTab(index + 1))}
      title={el.title}
      number={index + 1}
      id={el.id}
      className={activeTab === index + 1 ? "w-[120%] pointer-events-none" : ""}
    />
  ))

  const switchHandler = () => {
    if (condition === "expanded") {
      setCondition("collapsed")
    } else {
      setCondition("expanded")
    }
  }

  return (
    <div className={cn("top-[70px] left-0", styles[condition])}>
      <ul className={"flex flex-col gap-2"}>
        <li>
          <Link to={"/all-todos"}>All Todos</Link>
        </li>
        {todos ? renderTodos : <span>Create todos please!</span>}
      </ul>
      <button className={"text-right block w-full"} onClick={switchHandler}>
        switch
      </button>
    </div>
  )
}
