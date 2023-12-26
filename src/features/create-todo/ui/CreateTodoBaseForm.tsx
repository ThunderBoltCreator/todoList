import type { ReactElement } from "react"
import cn from "classnames"

interface FormProps {
  title?: string
  onSubmit: () => void
  children: ReactElement
  label?: ReactElement | string
  className?: string
}
export function CreateTodoBaseForm({ children, title, label, onSubmit, className }: FormProps) {
  return (
    <div className={cn(className, "flex flex-col w-[70%] bg-todo3 p-7 rounded-2xl max-h-[80%] mx-auto h-full")}>
      {title && <h1 className={"mb-[10%] text-4xl"}>{title}</h1>}
      {label && <span className={"block mb-2"}>{label}</span>}
      <form className={"flex flex-col h-full"} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}
