// pages/todos.js
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { ViewListIcon, CalendarIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import TodoList from "../components/TodoList";
import TodoCalendar from "../components/TodoCalendar";

async function jsonFetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Todos() {
  const { t } = useTranslation();
  const { data } = useSWR("/api/todos", jsonFetcher);
  const [view, setView] = useState("list"); // State to manage the current view

  if (!data) {
    return <p>{t("fetchingTodos")}</p>;
  }

  const addTodo = async ({ description }) => {
    const optimisticItem = {
      id: Math.random(),
      description,
      completed: false,
    };

    mutate("/api/todos", [...data, optimisticItem], false);

    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, completed: false }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    const newItem = await response.json();

    await mutate(
      "/api/todos",
      (existingData) => {
        const newData = [];

        for (const item of existingData) {
          if (item.id === optimisticItem.id) {
            newData.push(newItem);
            continue;
          }

          newData.push(item);
        }

        return newData;
      },
      false
    );
  };

  const updateTodo = async ({ id, ...todo }) => {
    const optimisticData = data.map((item) =>
      item.id === id ? { ...item, ...todo } : item
    );

    mutate("/api/todos", optimisticData, false);

    const response = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    const updatedItem = await response.json();

    await mutate(
      "/api/todos",
      (existingData) =>
        existingData.map((item) => (item.id === id ? updatedItem : item)),
      false
    );
  };

  const removeTodo = async ({ id }) => {
    const optimisticData = data.filter((item) => item.id !== id);

    mutate("/api/todos", optimisticData, false);

    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{t("todoList")}</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${
              view === "list" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            <ViewListIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setView("calendar")}
            className={`p-2 rounded ${
              view === "calendar" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-full min-w-[400px] max-w-4xl mx-auto">
        {view === "list" ? (
          <TodoList
            items={data}
            onNewTodo={addTodo}
            onDeleteTodo={removeTodo}
            onUpdateTodo={updateTodo}
          />
        ) : (
          <TodoCalendar
            todos={data}
            onUpdateTodo={updateTodo}
            onDeleteTodo={removeTodo}
          />
        )}
      </div>
    </div>
  );
}