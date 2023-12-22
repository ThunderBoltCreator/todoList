import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"

type TaskFormValues = {
  tasks: { title: string; completed: boolean }[]
}

const TaskForm: React.FC = () => {
  const { register, handleSubmit, control } = useForm<TaskFormValues>({
    defaultValues: {
      tasks: [{ title: "", completed: false }],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: "tasks",
  })

  const onSubmit: SubmitHandler<TaskFormValues> = (data) => {
    console.log(data)
    // Дополнительные действия при отправке формы
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>
            Title:
            <input {...register(`tasks.${index}.title`)} />
          </label>

          <label>
            Completed:
            <input type="radio" {...register(`tasks.${index}.completed`)} value="true" />
            Yes
            <input type="radio" {...register(`tasks.${index}.completed`)} value="false" />
            No
          </label>
        </div>
      ))}

      <button type="button" onClick={() => append({ title: "", completed: false })}>
        Add Task
      </button>

      <button type="submit">Submit</button>
    </form>
  )
}

export default TaskForm
