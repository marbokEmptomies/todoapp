import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo} //passing the props as they are
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
