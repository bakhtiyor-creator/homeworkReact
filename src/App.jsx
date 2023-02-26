import { useState } from "react";
import Brand from "./components/Barnds/Brand";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Product/Products";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        name: todo,
        id: todos.length > 0 ? todos.length : 0,
      },
    ]);
    console.log(todos);
    setTodo("");
  };
  const deleteHandler = (id) => {
    const result = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodos(result);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="div">
        <form className="form-control" onSubmit={submitForm}>
          <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-outline-info mt-3 w-100" type="submit">
            Add
          </button>
        </form>
        <ul className="bg-secordary my-5">
          {todos.map((el, i) => {
            return (
              <li
                key={i}
                className="d-flex justify-content-between align-items-center"
              >
                <p>{el.name}</p>
                <button
                  className="btn btn-danger "
                  onClick={(evt) => deleteHandler(el.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Counter />
      <Main />
      <Brand />
      <Products />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
