import type { AppDispatch, RootState } from "app/appStore.ts"
import type { TypedUseSelectorHook } from "react-redux"
import { useDispatch, useSelector } from "react-redux"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
