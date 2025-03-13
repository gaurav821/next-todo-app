// components/TodoCalendar.js
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TodoModal from "./TodoModal";

const localizer = momentLocalizer(moment);

export default function TodoCalendar({ todos, onUpdateTodo, onDeleteTodo }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Transform todos into calendar events
  const events = todos.map((todo) => ({
    id: todo.id,
    title: todo.description,
    description: todo.description,
    start: new Date(todo.createdAt || new Date()),
    end: new Date(todo.dueDate || new Date()),
    completed: todo.completed,
  }));

  const handleSelectEvent = (event) => {
    setSelectedTodo(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  return (
    <div className="h-[500px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["month", "week", "day"]}
        onSelectEvent={handleSelectEvent} // Open modal on event click
      />

      {selectedTodo && (
        <TodoModal
          todo={selectedTodo}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      )}
    </div>
  );
}