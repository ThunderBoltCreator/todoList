import type { ReactElement } from "react"

interface FormProps {
  title?: string
  onSubmit: () => void
  children: ReactElement
  label?: ReactElement | string
}
export function CreateTodoBaseForm({ children, title, label, onSubmit }: FormProps) {
  return (
    <div className={"flex flex-col w-[70%] bg-todo3 p-7 rounded-2xl max-h-[80%]"}>
      {title && <h1 className={"mb-[10%] text-4xl"}>{title}</h1>}
      {label && <span className={"block mb-2"}>{label}</span>}
      <form className={"flex flex-col h-full"} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}
