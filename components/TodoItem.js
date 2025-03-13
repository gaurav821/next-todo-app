import { XIcon, PencilIcon } from "@heroicons/react/solid";
import cc from "classcat";
import { format, parseISO } from "date-fns";
import { useTranslation } from "react-i18next";

export default function TodoItem({
  id,
  description,
  completed,
  dueDate,
  onUpdateTodo,
  onDeleteTodo,
  onEdit,
}) {
  const handleToggle = () => onUpdateTodo({ id, completed: !completed });
  const handleDelete = () => onDeleteTodo({ id });
  const { t } = useTranslation();
  const formatDueDate = (date) => {
    if (!date) return null;
    try {
      const dateObj = typeof date === "string" ? parseISO(date) : date;
      return format(dateObj, "EEE, MMM d, yyyy hh:mm a");
    } catch (err) {
      console.error("Date formatting error:", err);
      return "Invalid date";
    }
  };

  return (
    <li className="px-4 py-3 group transition hover:bg-gray-50">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          checked={completed}
          disabled
          onChange={handleToggle}
        />

        <div className="ml-3 flex-1" onClick={onEdit}>
          <div className="cursor-pointer">
            <p
              className={cc([
                "text-sm font-medium",
                {
                  "line-through text-gray-400": completed,
                  "text-gray-700": !completed,
                },
              ])}
            >
              {description}
            </p>
            {dueDate && (
              <p className="text-xs text-gray-500 mt-1">
                {formatDueDate(dueDate)}
              </p>
            )}
          </div>
        </div>

        <div className="flex space-x-1">
          <button
            onClick={onEdit}
            className="p-1 text-gray-400 hover:text-gray-600"
            title={t("editTodo")}
          >
            <PencilIcon className="h-4 w-4" />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 text-gray-400 hover:text-red-600"
            title={t("deleteTodo")}
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </li>
  );
}
