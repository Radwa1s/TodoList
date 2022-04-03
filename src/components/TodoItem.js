import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { removeTodo, setStatus, editTodo } from "../store/Action || Reducer";
import { useDispatch } from "react-redux";

import "../style.css";

export const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, text }));
    setEdit(false);
  };

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const statusHanlder = (id, checkedS) => {
    dispatch(setStatus({ id, checkedS }));
  };
  return (
    <div>
      <div key={todo.id} className="todo-item">
        {edit && (
          <form
            className="todoForm"
            onSubmit={handleEdit}
            style={{ width: "100%" }}
          >
            <input
              pr="4.5rem"
              placeholder="Update your task ..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div>
              <button className="check-close" type="submit ">
                <CheckIcon />
              </button>

              <button className="check-close" onClick={() => setEdit(false)}>
                <CloseIcon />
              </button>
            </div>
          </form>
        )}
        {!edit && (
          <>
            <Checkbox
              value={`${todo.id}${todo.text}`}
              isChecked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
                statusHanlder(todo.id, e.target.checked);
              }}
            >
              {todo.text}
            </Checkbox>
            <div>
              <button className="edit-close" onClick={() => setEdit(true)}>
                <EditIcon w={5} h={5} />
              </button>

              <button
                className="edit-close"
                onClick={() => removeHandler(todo.id)}
              >
                <CloseIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
