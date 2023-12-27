// import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

// export type ReasonType = "not-reason" | "authorization"

// type HubContextValue = {
//   reason: ReasonType | null
//   setReason: Dispatch<SetStateAction<ReasonType | null>>
// }

// const HubContext = createContext<HubContextValue>({ reason: null, setReason: () => {} })

// export const useReason = () => {
//   const context = useContext(HubContext)

//   return context
// }

// export function HubProvider({ children }: { children: ReactNode }) {
//   const [reason, setReason] = useState<ReasonType | null>(null)
//   return <HubContext.Provider value={{ reason, setReason }}>{children}</HubContext.Provider>
// }
