// components/TodoModal.js
import { useState } from "react";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

export default function TodoModal({
  todo,
  isOpen,
  onRequestClose,
  onUpdateTodo,
  onDeleteTodo,
}) {
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTodo({ id: todo.id, description, completed });
    onRequestClose();
  };

  const handleDelete = () => {
    onDeleteTodo({ id: todo.id });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Todo Details"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{t('editTodo')}</h2>
        <button
          onClick={onRequestClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">{t('description')}</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mr-2"
            />
            <span>{t('completed')}</span>
          </label>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            {t('delete')}
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            {t('saveChanges')}
          </button>
        </div>
      </form>
    </Modal>
  );
}