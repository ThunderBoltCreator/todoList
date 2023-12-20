import { Control, Controller } from "react-hook-form"
import type { FormState } from "./AddTasksForm.tsx"

type Props = {
  control: Control<FormState>
  value?: any
  index: number
}
export function CreateTaskInputBlock({ control, index }: Props) {
  return (
    <div className={"flex gap-2"}>
      <Controller
        name={`blocks.${index}.taskTitle`}
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder={"Enter Task Title"} />}
      />
      <Controller
        name={`blocks.${index}.initialValue`}
        control={control}
        defaultValue={true}
        //@ts-ignore
        render={({ field }) => <input type={"checkbox"} {...field} />}
      />
    </div>
  )
}
