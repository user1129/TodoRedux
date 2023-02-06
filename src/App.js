import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AddTodo, clearTodo, toggleCompleted } from "./redux/slice";

function App() {
  // const AddTodo = (todo) => {
  //   if(todo.length > 0){
  //     setTodos([...todos, {
  //       id: todo + (Math.random()*1000),
  //       text:todo,
  //       completed:false,
  //     }])
  //   }
  // }

  // const clearTodo = (id) => {
  //   setTodos(todos.filter((el) => el.id !== id))
  // }

  const state = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();

  const [inputValue, setInput] = React.useState("");
  return (
    <div className="App">
      <div className="form">
        <input
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="inputText"
        />
        <button onClick={() => dispatch(AddTodo(inputValue))}>Add</button>
      </div>
      <ul>
        {state.map((el, index) => {
          return (
            <li key={index}>
              <input
                onClick={() => dispatch(toggleCompleted(el.id))}
                type="checkbox"
                checked={el.completed}
              />{" "}
              <span>{el.text}</span>
              <span
                onClick={() => dispatch(clearTodo(el.id))}
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
