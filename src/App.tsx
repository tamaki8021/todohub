import React from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


const App: React.FC = () => {
  return (
    <div className="c-main">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
