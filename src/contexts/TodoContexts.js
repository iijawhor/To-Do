import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todoText: "Todo", completed: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todoText) => {},
  toggleTodo: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
