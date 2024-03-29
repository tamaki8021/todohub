import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { TodoState, TodoItemState, TodoItem } from "./types";

const initialState: TodoState = {
  allIds: [],
  byIds: {},
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ id: string; contents: string }>
    ) => {
      const { id, contents } = action.payload;
      const byId: TodoItemState = { contents, completed: false, evaluation: 0, completed_at: '' };

      state.allIds.push(id);
      state.byIds = { ...state.byIds, [id]: byId };
    },
    toggleTodo: (state: TodoState, action) => {
      const byIds = state.byIds;
      const todo = state.allIds.find((todo) => todo === action.payload.id);

      if (todo) {
        byIds[todo].completed = !byIds[todo].completed;
        byIds[todo].completed_at = action.payload.completed_at
      }
      console.log(current(byIds));
      
    },
    editTodo: (state: TodoState, action: PayloadAction<TodoItem>) => {
      const byIds = state.byIds;
      const { id, contents } = action.payload;

      state.allIds.forEach((data) => {
        if (data === id) {
          byIds[id].contents = contents
        }
      });
    },
    fetchTodos: (state, action) => {
      const { TodosId, byTodo } = action.payload;
      state.allIds = TodosId;

      TodosId.forEach((id: string) => {
        byTodo.forEach((data: any) => {
          const todoId = data.id;
          const { contents, completed, completed_at } = data;
          const newData: TodoItemState = { contents, completed, evaluation: 0, completed_at };

          if (id === todoId) {
            state.byIds[id] = newData;
          }
        });
      });
    },
    evaluationTodo: (state, action) => {
      const byIds = state.byIds;
      const todo = state.allIds.find((todo) => todo === action.payload.id);

      if (todo) {
        byIds[todo].evaluation = action.payload.evaluation

        //stateの削除
        // state.allIds = state.allIds.filter((data) => data !== todo)
        // delete state.byIds.todo
      }
    }
  },
});

export const { addTodo, toggleTodo, editTodo, fetchTodos, evaluationTodo } = todosSlice.actions;

export default todosSlice.reducer;
