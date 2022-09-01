import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const [isEdit, setIsEdit] = useState(false);

  const { id, title, description, priority } = todo;

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEdit(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() { remove(id); }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    setIsEdit(false);
  }

  return (
    <div className="EditableTodo">

      {isEdit && <TodoForm initialFormData={todo} handleSave={handleSave} />}

      {!isEdit &&
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo
            key={id}
            title={title}
            description={description}
            priority={priority} />
        </div>}



    </div>
  );
}

export default EditableTodo;
