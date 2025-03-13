// components/TodoList.js
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TodoItem from "./TodoItem";

export default function TodoList({ items = [], onNewTodo, onUpdateTodo, onDeleteTodo }) {
  const { t } = useTranslation();
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTodo({ description: newTodoDescription });
    setNewTodoDescription("");
  };

  return (
    <div className="bg-white rounded h-[500px] overflow-y-auto">
      <ul className="rounded divide-y divide-gray-200 border border-gray-200 overflow-hidden">
        {items.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
        <div className="px-6 py-3">
          <form onSubmit={handleSubmit} className="flex items-center space-x-3">
            <input
              disabled
              type="checkbox"
              className="border-gray-400 shadow-sm rounded w-5 h-5"
            />
            <input
              autoFocus
              required
              type="text"
              placeholder={t("addNewTodo")}
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
              className="border-gray-200 rounded shadow-sm w-full"
            />
          </form>
        </div>
      </ul>
    </div>
  );
}