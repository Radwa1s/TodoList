import { CheckboxGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../store/ActionReducer";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const count = useSelector((state) => state.todo.count);
  const [filterKey, setFilterKey] = useState("all");
  const todos = useSelector((state) => {
    if (filterKey === "complete") {
      return state.todo.todos.filter((el) => el.isDone === true);
    }
    if (filterKey === "notcomplete") {
      return state.todo.todos.filter((el) => el.isDone === false);
    }
    return state.todo.todos;
  });

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (text.length > 0) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task Manger</h1>
        <form className="todoForm" onSubmit={addTodoHandler}>
          <input
            pr="1rem"
            placeholder="Add your task here ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">Add</button>
        </form>
        <CheckboxGroup colorScheme="blue">
          <Stack mx={10} spacing={[1, 5]} direction={["column", "column"]}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </Stack>
        </CheckboxGroup>

        <div className="nth-todo">
          {count === 0 && <p>You don't have to do anything Yaaaay!</p>}
        </div>
        <ul
          className="todos"
          style={{
            listStyleType: "none",
            marginTop: 20,
          }}
        >
          <button onClick={() => setFilterKey("all")}>
            <li className="todo">All ({count})</li>
          </button>
          <button onClick={() => setFilterKey("complete")}>
            <li className="todo">Compeleted</li>
          </button>
          <button onClick={() => setFilterKey("notcomplete")}>
            <li className="todo"> Not Compeleted</li>
          </button>
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
