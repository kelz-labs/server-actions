"use client";

export function DeleteTodoButton({
  todos,
  item,
}: {
  todos: string[];
  item: string;
}) {
  function deleteTodo(todo: string) {
    const filteredTodos = todos.filter((value) => value === todo);
    todos = filteredTodos;
  }

  return <button onClick={() => deleteTodo(item)}>Delete</button>;
}
