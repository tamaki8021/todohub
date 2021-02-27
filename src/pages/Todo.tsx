import React from 'react'
import { TodoInput, TodoList, VisibilityFilter} from '../components/index'

const Todo: React.FC = () => {
  return (
    <div>
      <TodoInput />
      <VisibilityFilter />
      <TodoList />
    </div>
  )
}

export default Todo
