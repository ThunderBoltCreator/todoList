import { Control, Controller, UseFieldArrayRemove } from "react-hook-form"
import type { FormState } from "pages/new-todo/AddTasks.tsx"
import cn from "classnames"
import { FaTrash } from "react-icons/fa"

type Props = {
  control: Control<FormState>
  className?: string
  index: number
  value?: boolean
  remove: UseFieldArrayRemove
}
export function CreateTaskInputBlock({ remove, control, index, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <FaTrash className={"cursor-pointer"} onClick={() => remove(index)} />
      <Controller
        name={`blocks.${index}.taskTitle`}
        control={control}
        render={({ field }) => <input {...field} placeholder={"Enter Task Title"} />}
      />
      <Controller
        name={`blocks.${index}.completed`}
        control={control}
        render={({ field }) => {
          console.log(field)
          return (
            <>
              <input type={"radio"} {...field} value="true" defaultChecked={field.value === true} /> Yes
              <input type={"radio"} {...field} value="false" defaultChecked={field.value === false} /> No
            </>
          )
        }}
      />
    </div>
  )
}
