import React, { useEffect } from 'react'
import { TodoInput, TodoList, VisibilityFilter} from '../components/Todo/index'
import { useAppDispatch } from '../reducks/store/hooks'
import { fetchTodo } from '../reducks/todos/operations'

const Todo: React.FC = () => {
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //     dispatch(fetchTodo())
  // }, [])

  return (
    <div>
      <TodoInput />
      <VisibilityFilter />
      <TodoList />
    </div>
  )
}

export default Todo
