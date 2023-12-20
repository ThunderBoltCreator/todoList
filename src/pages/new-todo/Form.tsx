import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import BlockComponent from "./FormBlock.tsx"

interface FormValues {
  blocks: { input: string; checkbox: boolean }[]
}

const FormComponent = () => {
  const { control, handleSubmit } = useForm<FormValues>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "blocks",
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <BlockComponent
          key={item.id}
          index={index}
          control={control}
          onRemove={(index) => {
            remove(index)
          }}
        />
      ))}
      <button
        type="button"
        onClick={() => {
          append({})
        }}
      >
        Добавить блок
      </button>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default FormComponent
