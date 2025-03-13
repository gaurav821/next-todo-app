// components/UpdateItemForm.js
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function UpdateItemForm({ todo, onSubmit }) {
  const { t } = useTranslation();
  const [currentTodoCompleted, setCurrentTodoCompleted] = useState(
    todo.completed
  );
  const [currentTodoDescription, setCurrentTodoDescription] = useState(
    todo.description
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      completed: currentTodoCompleted,
      description: currentTodoDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3">
      <input
        name="completed"
        type="checkbox"
        className="border-gray-400 group-hover:border-gray-800 shadow-sm rounded w-5 h-5"
        checked={currentTodoCompleted}
        onChange={(e) => setCurrentTodoCompleted(e.target.checked)}
      />
      <input
        autoFocus
        required
        type="text"
        placeholder={t("addNewTodo")}
        value={currentTodoDescription}
        onChange={(e) => setCurrentTodoDescription(e.target.value)}
        className="border-gray-200 rounded shadow-sm w-full"
      />
    </form>
  );
}