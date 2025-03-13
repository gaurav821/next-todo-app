import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { XIcon } from "@heroicons/react/solid";
import { parseISO } from "date-fns";

export default function TodoModal({
  isOpen,
  onClose,
  onSubmit,
  initialTodo = null,
}) {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (initialTodo) {
      setDescription(initialTodo.description || "");
      setCompleted(initialTodo.completed || false);

      if (initialTodo.dueDate) {
        try {
          const dateObj =
            typeof initialTodo.dueDate === "string"
              ? parseISO(initialTodo.dueDate)
              : initialTodo.dueDate;
          setDueDate(dateObj);
        } catch (err) {
          console.error("Error parsing date:", err);
          setDueDate(null);
        }
      } else {
        setDueDate(null);
      }

      setIsEditing(true);
    } else {
      setDescription("");
      setCompleted(false);
      setDueDate(null);
      setIsEditing(false);
    }
  }, [initialTodo, isOpen]);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoData = {
      description: description.trim(),
      completed,
      dueDate,
    };

    if (isEditing && initialTodo) {
      todoData.id = initialTodo.id;
    }

    onSubmit(todoData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden"
      >
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {isEditing ? t("editTodo") : t("addNewTodo")}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("description")}
              </label>
              <input
                ref={firstInputRef}
                id="description"
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("enterTodoDescription")}
              />
            </div>

            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("dueDate")}
              </label>
              <DatePicker
                id="dueDate"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholderText={t("selectDueDate")}
              />
            </div>

            <div className="flex items-center">
              <input
                id="completed"
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="completed"
                className="ml-2 block text-sm text-gray-900"
              >
                {t("markCompleted")}
              </label>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {t("cancel")}
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isEditing ? t("saveChanges") : t("addTodo")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
