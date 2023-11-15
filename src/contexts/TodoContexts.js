import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todoText: "Todo", completed: false }],
  addTodo: (id) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todoText) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
