import React, { useEffect } from 'react'
import { TodoInput, TodoList, VisibilityFilter} from '../components/Todo/index'
import { useAppDispatch } from '../reducks/store/hooks'
import { fetchTodo } from '../reducks/todos/operations'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: '120px 0 2rem',
  },
}))

const Todo: React.FC = () => {
  const dispatch = useAppDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  return (
    <div className={classes.container}>
      <TodoInput />
      <VisibilityFilter />
      <TodoList />
    </div>
  )
}

export default Todo
