import { useTranslation } from "react-i18next";
import TodoItem from "./TodoItem";

export default function TodoList({
  items = [],
  onUpdateTodo,
  onDeleteTodo,
  onEditTodo,
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded shadow-lg">
      <div className="h-[500px] overflow-y-auto">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <p>{t("noTodosYet")}</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {items.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onUpdateTodo={onUpdateTodo}
                onDeleteTodo={onDeleteTodo}
                onEdit={() => onEditTodo(todo)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
