import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  count: 0,
  todos: [],
};

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: v4(), text: action.payload, isDone: false };

      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    setStatus: (state, { payload }) => {
      state.todos = state.todos.map((el) =>
        el.id === payload.id ? { ...el, isDone: !payload.checked } : el
      );
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map((el) =>
        el.id === payload.id ? { ...el, text: payload.text } : el
      );
    },
  },
});

export default toDoSlice.reducer;

export const { addTodo, removeTodo, setStatus, editTodo } = toDoSlice.actions;
