import { useAppDispatch, useAppSelector } from "shared/lib/ReduxHooks.ts"
import { TabsListItem } from "widgets/list-of-todos/ui/TabsListItem.tsx"
import { useState } from "react"
import { setActiveTab } from "entities/todoLists/model/todosSlice.ts"
import { Link } from "react-router-dom"
import { TodosSelectors } from "entities/todoLists"

type TabsCondition = "collapsed" | "expanded"

export function TodosTabs() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(TodosSelectors.todos)
  const activeTab = useAppSelector(TodosSelectors.activeTab)
  const [condition, setCondition] = useState<TabsCondition>("expanded")

  const styles: Record<TabsCondition, string> = {
    collapsed: "fixed p-3 gap-2 rounded-br-xl translate-x-[-75%] transition-transform",
    expanded: "fixed p-3 gap-2 rounded-br-xl translate-x-0 transition-transform",
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
    <div className={styles[condition]}>
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
