import {useAppDispatch, useAppSelector} from 'shared/lib/ReduxHooks.ts'
import {fetchTodos, selectTodos} from 'entities/todoLists'
import {useLayoutEffect} from 'react'
import {setStatus} from 'entities/session'

export function Home() {
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    dispatch(setStatus({status: 'loading'}))
    dispatch(fetchTodos())
  })
  const todos = useAppSelector(selectTodos)

  // const mapTodos = todos.map(todo => (
  //   <TodoList
  //     key={todo.id}
  //     data={todo}
  //   />
  // ))
  console.log(todos)

  return (
    <div>
      {/*{mapTodos}*/}
      helllo
    </div>
  )
}