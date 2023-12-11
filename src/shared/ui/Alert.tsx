import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io"
import { useAppDispatch } from "shared/lib/ReduxHooks.ts"
import { ReactElement, useEffect } from "react"
import { setError } from "entities/session"

type AlertProps = {
  message: string
  type: AlertType
}

type AlertType = "error" | "done"

export function Alert({ message, type }: AlertProps) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(setError(null)), 3000)
  }, [])

  const alertType: Record<AlertType, { icon: ReactElement | string; styles: string }> = {
    error: {
      icon: <IoIosWarning fontSize={26} />,
      styles:
        "p-3 bg-amber-700 font-bold rounded-lg flex items-center gap-2 absolute right-5 bottom-5 animate-fade animation-delay-2100",
    },
    done: {
      icon: <IoIosCheckmarkCircle />,
      styles:
        "p-3 bg-green-500 font-bold rounded-lg flex items-center gap-2 absolute right-5 bottom-5 animate-fade animation-delay-2100",
    },
  }
  // styles[type]
  return (
    <>
      <div className={alertType[type].styles}>
        <span>{message}</span>
        {alertType[type].icon}
      </div>
    </>
  )
}
