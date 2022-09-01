import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp() {
  const [todoListData, setTodoListData] = useState([]);

  /** add a new todo to list */
  function create(newTodo) {
    let newTodoWithId = { ...newTodo, id: uuid() };
    setTodoListData(todos => [...todos, newTodoWithId]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodoListData(curr => curr.map(
      todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodoListData(curr => curr.filter(todo => todo.id !== id));
  }


  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todoListData.length !== 0 && <EditableTodoList
            todos={todoListData}
            update={update}
            remove={remove}
          />
          }
          {todoListData.length === 0 &&
            <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {todoListData.length !== 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todoListData} />
            </section>
          }


          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;