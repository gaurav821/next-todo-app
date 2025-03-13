// components/TodoItem.js
import { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import cc from "classcat";
import UpdateItemForm from "./UpdateItemForm";

export default function TodoItem({ id, description, completed, onUpdateTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => onUpdateTodo({ id, completed: !completed });

  const handleUpdate = (data) => {
    onUpdateTodo({ id, ...data });
    setIsEditing(false);
  };

  const handleDelete = () => onDeleteTodo({ id });

  return (
    <li className="px-6 py-3 group transition hover:bg-gray-50">
      {isEditing ? (
        <UpdateItemForm
          todo={{ id, completed, description }}
          onSubmit={handleUpdate}
        />
      ) : (
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="border-gray-400 group-hover:border-gray-800 shadow-sm rounded w-5 h-5"
            checked={completed}
            onChange={handleToggle}
          />
          <div className="flex-1">
            <p
              className={cc([
                "text-sm text-gray-600",
                {
                  "line-through opacity-50": completed,
                  "group-hover:text-gray-800": !completed,
                },
              ])}
              onClick={() => setIsEditing(true)}
            >
              {description}
            </p>
          </div>
          <div>
            <button className="appearance-none p-1" onClick={handleDelete}>
              <XIcon className="w-5 h-5 fill-current text-gray-200 group-hover:text-gray-500 transition-colors" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}