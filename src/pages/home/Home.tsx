import {useAppDispatch} from 'shared/lib/ReduxHooks.ts'
import {useEffect} from 'react'
import {fetchTodos} from 'entities/todoList/model/todosSlice.ts'

export function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div>
      <button className={'button'}>Home</button>
    </div>
  )
}