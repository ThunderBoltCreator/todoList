import type { AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import cn from "classnames"

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    AriaAttributes {
  className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
  const styles = cn("bg-todo1 py-1 px-4 rounded-lg", className)
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}
