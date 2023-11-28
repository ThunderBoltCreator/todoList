import {TaskList} from 'entities/task/ui/TaskList.tsx'
import type {TodoList} from 'entities/todoLists/model/types.ts'

type TodolistProps = {
  data: TodoList
}

export function TodoList({data}: TodolistProps) {
  // log

  return (
    <div>
      <h2>{data.title}</h2>
      <ul>
        <TaskList todoId={data.id}/>
      </ul>
    </div>
  )
}