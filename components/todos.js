import { useState } from "react";
import useSWR, { mutate } from "swr";
import { ViewListIcon, CalendarIcon, PlusIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import TodoList from "../components/TodoList";
import TodoCalendar from "../components/TodoCalendar";
import TodoListModal from "../components/TodoListModal";

async function jsonFetcher(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
}

export default function Todos() {
  const { t } = useTranslation();
  const { data, error } = useSWR("/api/todos", jsonFetcher);
  const [view, setView] = useState("list");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleOpenModal = (todo = null) => {
    setCurrentTodo(todo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentTodo(null);
  };

  const handleSubmit = (todoData) => {
    if (todoData.id) {
      updateTodo(todoData);
    } else {
      addTodo(todoData);
    }
  };

  if (error) {
    return (
      <p className="text-center text-red-500 py-8">
        {t("errorFetchingTodos")}: {error.message}
      </p>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const addTodo = async (todoData) => {
    const optimisticItem = {
      id: `temp-${Date.now()}`,
      description: todoData.description,
      completed: todoData.completed || false,
      dueDate: todoData.dueDate,
    };

    try {
      mutate("/api/todos", [...data, optimisticItem], false);

      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: todoData.description,
          completed: todoData.completed || false,
          dueDate: todoData.dueDate,
        }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      const newItem = await response.json();

      mutate(
        "/api/todos",
        (existingData) => {
          return existingData.map((item) =>
            item.id === optimisticItem.id ? newItem : item
          );
        },
        false
      );
    } catch (err) {
      console.error("Failed to add todo:", err);
      mutate("/api/todos");
    }
  };

  const updateTodo = async (todoData) => {
    const { id, ...updateData } = todoData;

    const originalItem = data.find((item) => item.id === id);

    const optimisticData = data.map((item) =>
      item.id === id ? { ...item, ...updateData } : item
    );

    try {
      mutate("/api/todos", optimisticData, false);

      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      const updatedItem = await response.json();

      mutate(
        "/api/todos",
        (existingData) =>
          existingData.map((item) => (item.id === id ? updatedItem : item)),
        false
      );
    } catch (err) {
      console.error("Failed to update todo:", err);
      mutate(
        "/api/todos",
        (existingData) =>
          existingData.map((item) => (item.id === id ? originalItem : item)),
        false
      );
    }
  };

  const removeTodo = async ({ id }) => {
    const removedItem = data.find((item) => item.id === id);
    const removedItemIndex = data.findIndex((item) => item.id === id);

    const optimisticData = data.filter((item) => item.id !== id);

    try {
      mutate("/api/todos", optimisticData, false);

      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }
    } catch (err) {
      console.error("Failed to delete todo:", err);
      mutate(
        "/api/todos",
        (existingData) => {
          const newData = [...existingData];
          newData.splice(removedItemIndex, 0, removedItem);
          return newData;
        },
        false
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t("todoList")}</h1>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2 bg-gray-100 rounded-lg p-1 mr-2">
            <button
              onClick={() => setView("list")}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                view === "list"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ViewListIcon className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">{t("list")}</span>
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                view === "calendar"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <CalendarIcon className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">{t("calendar")}</span>
            </button>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="p-2 bg-indigo-600 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            title={t("addTodo")}
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        {view === "list" ? (
          <TodoList
            items={data}
            onUpdateTodo={updateTodo}
            onDeleteTodo={removeTodo}
            onEditTodo={handleOpenModal}
          />
        ) : (
          <TodoCalendar
            todos={data}
            handleSubmit={handleSubmit}
            onEditTodo={handleOpenModal}
          />
        )}
      </div>

      <TodoListModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialTodo={currentTodo}
      />
    </div>
  );
}
