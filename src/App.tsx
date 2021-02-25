import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

const App: React.FC = () => {
  return (
    <div className="c-main">
      <TodoInput />
      <VisibilityFilters />
      <TodoList />
    </div>
  );
};

export default App;
