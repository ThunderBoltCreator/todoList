export type OptionModel = {
  title: string
  value: string
}

type OptionProps = {
  value: OptionModel["value"]
  title: OptionModel["title"]
  selected: OptionModel["value"]
  groupName: string
  onChange: (value: string) => void
}

export function Option({ onChange, selected, groupName, title, value }: OptionProps) {
  const handleChange = () => onChange?.(value)

  const inputId = `${groupName}_radio_item_with_value__${value}`
  const isChecked = value === selected

  return (
    <div className={""} key={value} data-checked={isChecked}>
      <input className={""} type="radio" name={groupName} id={inputId} value={value} onChange={handleChange} />
      <label className={""} htmlFor={inputId}>
        {title}
      </label>
    </div>
  )
}
