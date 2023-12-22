import type { OptionModel } from "./Option.tsx"
import { Option } from "./Option.tsx"

type RadioGroupProps = {
  name: string
  options: OptionModel[]
  selected: OptionModel["value"]
  onChange?: (value: string) => void
}

export function RadioGroup({ onChange, selected, options, name }: RadioGroupProps) {
  const handleChange = (value: string) => onChange?.(value)

  return (
    <div className={""}>
      {options.map(({ value, title }) => (
        <Option key={value} groupName={name} value={value} title={title} selected={selected} onChange={handleChange} />
      ))}
    </div>
  )
}
